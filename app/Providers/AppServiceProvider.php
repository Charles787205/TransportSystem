<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use Aws\SecretsManager\SecretsManagerClient;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->isProduction() || $this->app->environment('staging')) {
            try {
                $client = new SecretsManagerClient([
                    'version' => 'latest',
                    'region' => config('services.aws.region', 'ap-southeast-1'),
                ]);

                $result = $client->getSecretValue([
                    'SecretId' => config('services.aws.secret_name'),
                ]);

                if (isset($result['SecretString'])) {
                    $secrets = json_decode($result['SecretString'], true);

                    config([
                        'database.connections.mysql.username' => $secrets['username'],
                        'database.connections.mysql.password' => $secrets['password'],
                    ]);

                    DB::purge('mysql');
                }
            } catch (\Exception $e) {
                logger()->error(
                    'Failed to load AWS Secrets: ' . $e->getMessage()
                );
            }
        }
    }
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Custom Factory Resolver for Modular Architecture
        Factory::guessFactoryNamesUsing(function (string $modelName) {
            if (str_starts_with($modelName, 'Modules\\')) {
                $parts = explode('\\', $modelName);
                $module = $parts[1]; // "User"
                $model = class_basename($modelName); // "User"

                return "Modules\\{$module}\\Database\\Factories\\{$model}Factory";
            }

            // Default fallback for standard App\Models
            return 'Database\\Factories\\' . class_basename($modelName) . 'Factory';
        });
    }
}