<?php

namespace Modules\User\Services;

use Illuminate\Support\Facades\Log;
use Modules\Core\Classes\Data\Response\PaginatedData;
use Modules\User\Classes\Data\Request\CreateUserData;
use Modules\User\Classes\Data\Request\UpdateUserData;
use Modules\User\Classes\Data\Response\UserData;
use Modules\User\Repositories\UserRepository;

class UserService
{
    public function __construct(
        private UserRepository $userRepo
    ) {}

    public function getPaginatedUsers()
    {
        $paginatedData = $this->userRepo->getPaginatedUsers(with: [
            'role',
        ]);

        return PaginatedData::fromPaginator($paginatedData, UserData::class);
    }

    public function getUserDetails(int $userId)
    {
        $user = $this->userRepo->getUser($userId, with: ['role']);
        Log::info($user);

        return UserData::from($user);
    }

    public function createUser(CreateUserData $data): array
    {
        $attributes = $data->toModelAttributes();
        $user = $this->userRepo->createUser($attributes);

        return [
            'user' => UserData::from($user),
            'plainPassword' => $data->generatedPassword,
        ];
    }

    public function updateUser(int $userId, UpdateUserData $data): UserData
    {
        $user = $this->userRepo->getUser($userId);
        $updatedUser = $this->userRepo->updateUser($user, $data->toModelAttributes());

        return UserData::from($updatedUser);
    }
}
