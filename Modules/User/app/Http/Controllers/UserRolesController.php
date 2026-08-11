<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Modules\User\Classes\Data\Request\CreateRoleData;
use Modules\User\Classes\Data\Request\UpdateRoleData;
use Modules\User\Models\Role;
use Modules\User\Services\RolePermissionService;

class UserRolesController extends Controller
{
    public function __construct(
        private RolePermissionService $roleService
    ) {}

    public function index()
    {
        Gate::authorize('viewAny', Role::class);

        $roles = $this->roleService->getRoles();
        $permissions = $this->roleService->getPermissions();

        return Inertia::render(
            'user/roles/index',
            [
                'roles' => $roles,
                'permissions' => $permissions,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', Role::class);

        return view('user::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRoleData $request)
    {
        Gate::authorize('create', Role::class);

        $this->roleService->createRole($request);

        return back()->with('success', 'Success');
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        $roleModel = Role::findOrFail($id);
        Gate::authorize('view', $roleModel);

        $role = $this->roleService->getRoleById((int) $id);
        $permissions = $this->roleService->getPermissions();

        return Inertia::render(
            'user/roles/show',
            [
                'role' => $role,
                'permissions' => $permissions,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $roleModel = Role::findOrFail($id);
        Gate::authorize('update', $roleModel);

        return redirect()->route('roles.show', $id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleData $request, $id)
    {
        $roleModel = Role::findOrFail($id);
        Gate::authorize('update', $roleModel);

        $this->roleService->updateRole((int) $id, $request);

        return back()->with('success', 'Role updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $roleModel = Role::findOrFail($id);
        Gate::authorize('delete', $roleModel);
    }
}
