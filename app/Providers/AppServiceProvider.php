<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();

        /** @var callable(class-string<Model>): class-string<Factory> $resolver */
        $resolver = function (string $modelName): string {
            if (str_starts_with($modelName, 'Modules\\')) {
                $parts = explode('\\', $modelName);
                $module = $parts[1];       // "User"
                $model  = $parts[3];       // "User"
                /** @var class-string<Factory> $factory */
                $factory = "Modules\\{$module}\\Database\\Factories\\{$model}Factory";
                return $factory;
            }

            /** @var class-string<Factory> $factory */
            $factory = 'Database\\Factories\\' . class_basename($modelName) . 'Factory';
            return $factory;
        };

        Factory::guessFactoryNamesUsing($resolver);
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}