import { Head, Form, Link } from '@inertiajs/react';
import { ArrowLeft, Pencil, X } from 'lucide-react';
import { useState } from 'react';

import InputError from '@/components/input-error';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import type { UserData } from '@/generated/User';
import type { RoleData } from '@/generated/User';
import { index, update } from '@/routes/user';

export default function UserDetailPage({
    user,
    roles,
}: {
    user: UserData;
    roles: RoleData[];
}) {
    const [isEditing, setIsEditing] = useState(false);
    console.log(user, roles);

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex w-full items-center justify-between">
                <div>
                    <Link
                        href={index().url}
                        className="mb-1 flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back to users
                    </Link>
                    <h1 className="text-xl font-semibold text-slate-900">
                        {user.name}
                    </h1>
                    <p className="text-sm text-slate-500">{user.email}</p>
                </div>

                {!isEditing && (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                    >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                    </Button>
                )}
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                {isEditing ? (
                    <Form
                        {...update.form({ user: user.id })}
                        resetOnSuccess={false}
                        onSuccess={() => setIsEditing(false)}
                    >
                        {({ errors, processing }) => (
                            <div className="flex flex-col gap-4">
                                <Field>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        defaultValue={user.name}
                                        data-invalid={!!errors.name}
                                        aria-invalid={!!errors.name}
                                    />
                                    <InputError message={errors.name} />
                                </Field>

                                <Field>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        defaultValue={user.email}
                                        data-invalid={!!errors.email}
                                        aria-invalid={!!errors.email}
                                    />
                                    <InputError message={errors.email} />
                                </Field>

                                <Field>
                                    <Label htmlFor="role_id">Role</Label>
                                    <Select
                                        name="role_id"
                                        defaultValue={
                                            user.role
                                                ? String(user.role.id)
                                                : undefined
                                        }
                                    >
                                        <SelectTrigger
                                            id="role_id"
                                            data-invalid={!!errors.role_id}
                                            aria-invalid={!!errors.role_id}
                                        >
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {roles.map((role) => (
                                                <SelectItem
                                                    key={role.id}
                                                    value={String(role.id)}
                                                >
                                                    {role.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.role_id} />
                                </Field>

                                <Field>
                                    <Label htmlFor="password">
                                        Password (leave blank to keep current)
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        data-invalid={!!errors.password}
                                        aria-invalid={!!errors.password}
                                    />
                                    <InputError message={errors.password} />
                                </Field>

                                <div className="flex justify-end gap-2 pt-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        <X className="h-3.5 w-3.5" />
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        Save changes
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Form>
                ) : (
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Name
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900">
                                {user.name}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900">
                                {user.email}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Role
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900">
                                {user.role ? (
                                    <Badge
                                        variant="secondary"
                                        className="border-transparent bg-slate-100 text-slate-700"
                                    >
                                        {user.role.name}
                                    </Badge>
                                ) : (
                                    <span className="text-slate-400">—</span>
                                )}
                            </dd>
                        </div>
                    </dl>
                )}
            </div>

            {user.role && (
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-sm font-medium text-slate-900">
                        Permissions ({user.role.name})
                    </h2>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {user.role?.permissions?.map((perm) => (
                            <div
                                key={perm.id}
                                className="rounded-md border border-gray-100 p-3"
                            >
                                <p className="text-sm font-medium text-slate-900">
                                    {perm.name}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-1">
                                    {perm.view && (
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            View
                                        </Badge>
                                    )}
                                    {perm.create && (
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Create
                                        </Badge>
                                    )}
                                    {perm.edit && (
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Edit
                                        </Badge>
                                    )}
                                    {perm.delete && (
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Delete
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
