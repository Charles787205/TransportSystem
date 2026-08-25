<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Modules\User\Classes\Data\Request\CreateUserData;
use Modules\User\Classes\Data\Request\UpdateUserData;
use Modules\User\Models\User;
use Modules\User\Services\RolePermissionService;
use Modules\User\Services\UserService;

class UserController extends Controller
{
    public function __construct(
        public UserService $userService,
        public RolePermissionService $roleService
    ) {}

    public function index()
    {
        Gate::authorize('viewAny', User::class);

        $userData = $this->userService->getPaginatedUsers();
        $roles = $this->roleService->getRoles();

        return Inertia::render(
            'user/index',
            [
                'paginatedUsers' => $userData,
                'roles' => $roles,
                'filters' => ['search' => ''],
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', User::class);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserData $request)
    {
        Gate::authorize('create', User::class);

        $result = $this->userService->createUser($request);
        $password = $result['plainPassword'];

        return back()
            ->with('createdPassword', $password);
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        $userModel = User::findOrFail($id);
        Gate::authorize('view', $userModel);

        $user = $this->userService->getUserDetails($id);
        $roles = $this->roleService->getRoles();

        return Inertia::render(
            'user/show',
            [
                'user' => $user,
                'roles' => $roles,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $userModel = User::findOrFail($id);
        Gate::authorize('update', $userModel);

        return redirect()->route('users.show', $id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserData $request, $id)
    {
        $userModel = User::findOrFail($id);
        Gate::authorize('update', $userModel);

        $this->userService->updateUser((int) $id, $request);

        return back()->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $userModel = User::findOrFail($id);
        Gate::authorize('delete', $userModel);
    }
}
