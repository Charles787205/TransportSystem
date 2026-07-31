<?php

namespace Modules\User\Providers;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\Gate;
use Modules\Client\Models\Client;
use Modules\DispatchOperation\Models\Dispatch;
use Modules\Planning\Models\Plan;
use Modules\User\Console\CreateRole;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Modules\User\Policies\ClientPolicy;
use Modules\User\Policies\DispatchPolicy;
use Modules\User\Policies\PlanPolicy;
use Modules\User\Policies\RolePolicy;
use Modules\User\Policies\UserPolicy;
use Modules\User\Policies\VendorPolicy;
use Modules\Vendor\Models\Vendor;
use Nwidart\Modules\Support\ModuleServiceProvider;

class UserServiceProvider extends ModuleServiceProvider
{
    /**
     * The name of the module.
     */
    protected string $name = 'User';

    /**
     * The lowercase version of the module name.
     */
    protected string $nameLower = 'user';

    /**
     * Command classes to register.
     *
     * @var string[]
     */
    // protected array $commands = [];

    /**
     * Provider classes to register.
     *
     * @var string[]
     */
    protected array $providers = [
        EventServiceProvider::class,
        RouteServiceProvider::class,
    ];

    public function boot(): void
    {
        parent::boot();
        $this->commands([
            CreateRole::class,
        ]);

        Gate::policy(User::class, UserPolicy::class);
        Gate::policy(Role::class, RolePolicy::class);
        Gate::policy(Client::class, ClientPolicy::class);
        Gate::policy(Plan::class, PlanPolicy::class);
        Gate::policy(Vendor::class, VendorPolicy::class);
        Gate::policy(Dispatch::class, DispatchPolicy::class);
    }

    /**
     * Define module schedules.
     *
     * @param  $schedule
     */
    // protected function configureSchedules(Schedule $schedule): void
    // {
    //     $schedule->command('inspire')->hourly();
    // }
}
