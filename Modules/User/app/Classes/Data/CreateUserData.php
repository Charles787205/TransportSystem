<?php

namespace Modules\User\Classes\Data;

use Illuminate\Support\Str;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Nullable;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Attributes\Validation\Unique;
use Spatie\LaravelData\Data;

class CreateUserData extends Data
{
    public ?string $generatedPassword = null;

    public function __construct(
        #[Required, StringType, Max(255)]
        public string $name,

        #[Required, Email, Max(255), Unique('users', 'email')]
        public string $email,

        #[Nullable, StringType]
        public ?string $password = null,

        public ?int $role_id = null,
    ) {}

    public function toModelAttributes(): array
    {
        $rawPassword = $this->password;
        if (empty($rawPassword)) {
            // Generate a secure random 10-character password
            $rawPassword = Str::random(10);
        }
        $this->generatedPassword = $rawPassword;

        return array_filter([
            'name' => $this->name,
            'email' => $this->email,
            'password' => $rawPassword,
            'role_id' => $this->role_id,
        ], fn ($val) => $val !== null);
    }
}
