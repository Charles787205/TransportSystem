<?php

namespace Modules\User\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Modules\User\Database\Factories\UserFactory;

/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['name', 'email', 'password', 'role_id'])]
#[Hidden(['password',  'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function hasPermission(string $permissionSlug, string $action): bool
    {
        if (! $this->relationLoaded('role')) {
            $this->loadMissing('role.permissions');
        } elseif ($this->role && ! $this->role->relationLoaded('permissions')) {
            $this->role->loadMissing('permissions');
        }

        if (! $this->role) {
            return false;
        }

        $permission = $this->role->permissions->firstWhere('slug', $permissionSlug);

        if (! $permission) {
            return false;
        }

        $actionMap = [
            'view' => 'view',
            'viewAny' => 'view',
            'create' => 'create',
            'edit' => 'edit',
            'update' => 'edit',
            'delete' => 'delete',
        ];

        $column = $actionMap[$action] ?? $action;

        return (bool) ($permission->pivot->{$column} ?? false);
    }
}
