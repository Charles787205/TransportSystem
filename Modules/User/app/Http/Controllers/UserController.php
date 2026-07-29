<?php

namespace Modules\User\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\User\Services\RoleService;
use Modules\User\Services\UserService;

class UserController extends Controller
{
    
    public function __construct(
        public UserService $userService,
        public RoleService $roleService
    ){}
    public function index()
    {
        $userData = $this->userService->getPaginatedUsers();
        return Inertia::render(
            'user/index',
            ['paginatedUsers' =>  $userData,
            'filters' => ['search'=>""]
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = $this->userService->getUserDetails();
        return Inertia::render(
            'user/show',
            [
                'users',
                'roles'
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        $user = $this->userService->getUserDetails($id);
        $roles = $this->roleService->getRoles();
        return Inertia::render(
            'user/show',
            [
                'user' => $user,
                'roles' => $roles
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('user::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
