<?php

namespace Modules\User\Console;

use Illuminate\Console\Command;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;

use function Laravel\Prompts\multiselect;

class CreateRole extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'role:create';

    /**
     * The console command description.
     */
    protected $description = 'Create and attach permission';

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->ask('Role name');
        $slug = $this->ask('Slug');
        $description = $this->ask('Role Description');
        $role = Role::create([
            'name' => $name,
            'slug' => $slug,
            'description' => $description,
        ]);
        foreach (Permission::all() as $permission) {
            $actions = multiselect(
                label: "{$permission->name} permissions",
                options: [
                    'view' => 'View',
                    'create' => 'Create',
                    'edit' => 'Edit',
                    'delete' => 'Delete',
                ]
            );
            $role->permissions()->attach($permission->id, [
                'view' => in_array('view', $actions),
                'create' => in_array('create', $actions),
                'edit' => in_array('edit', $actions),
                'delete' => in_array('delete', $actions),
            ]);
        }
        $this->info("Role '{$role->name}' created successfully.");

        return self::SUCCESS;
    }
}
