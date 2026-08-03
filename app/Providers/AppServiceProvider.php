<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factories\Factory;
use Aws\SecretsManager\SecretsManagerClient;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Custom Factory Resolver for Modular Architecture
        Factory::guessFactoryNamesUsing(function (string $modelName) {
            if (str_starts_with($modelName, 'Modules\\')) {
                // Example: Modules\User\Models\User 
                // becomes: Modules\User\Database\Factories\UserFactory
                $parts = explode('\\', $modelName);
                $module = $parts[1]; // "User"
                $model = class_basename($modelName); // "User"

                return "Modules\\{$module}\\Database\\Factories\\{$model}Factory";
            }

            // Default fallback for standard App\Models
            return 'Database\\Factories\\' . class_basename($modelName) . 'Factory';
        });

        // Load AWS Secrets in production/staging environments
        if (app()->isProduction()) {
            try {
                $client = new SecretsManagerClient([
                    'version' => 'latest',
                    'region'  => config('services.aws.region', 'ap-southeast-1'),
                ]);

                $result = $client->getSecretValue([
                    'SecretId' => config('services.aws.secret_name', 'TransportSystem/Prod'),
                ]);

                if (isset($result['SecretString'])) {
                    $secrets = json_decode($result['SecretString'], true);
                    foreach ($secrets as $key => $value) {
                        config([$key => $value]);
                    }
                }
            } catch (\Exception $e) {
                logger()->error('Failed to load AWS Secrets: ' . $e->getMessage());
            }
        }
    }
}