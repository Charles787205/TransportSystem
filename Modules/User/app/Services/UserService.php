<?php

namespace Modules\User\Services;

use Modules\Core\Classes\Data\PaginatedData;
use Modules\User\Classes\Data\UserData;
use Modules\User\Repositories\UserRepository;
use Illuminate\Support\Facades\Log;

class UserService
{
    public function __construct(
        private UserRepository $userRepo
    ){}

    public function getPaginatedUsers(){
        $paginatedData = $this->userRepo->getPaginatedUsers(with: [
            'role'
        ]);
        return PaginatedData::fromPaginator($paginatedData, UserData::class);
    }

    public function getUserDetails(int $userId){
        $user =  $this->userRepo->getUser($userId, with:['role']);
        Log::info($user);
        return UserData::from($user);
    }
    

}
