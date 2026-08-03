<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        Factory::guessFactoryNamesUsing(function (string $modelName): string {
        /**
         * @param class-string<Model> $modelName
         * @return class-string<Factory>
         */
        if (str_starts_with($modelName, 'Modules\\')) {
            $parts = explode('\\', $modelName);
            $module = $parts[1];       // "User"
            $model  = $parts[3];       // "User"
            return "Modules\\{$module}\\Database\\Factories\\{$model}Factory";
        }

        // Fallback to Laravel default for anything in App\Models
        return 'Database\\Factories\\' . class_basename($modelName) . 'Factory';
    });
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
