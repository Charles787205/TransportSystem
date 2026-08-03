import { Head, Link, useForm, router } from '@inertiajs/react';
import { ArrowLeft, Shield, Save } from 'lucide-react';

import InputError from '@/components/input-error';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { PermissionData, RoleData } from '@/generated/User';

interface SystemPermission {
    id: number;
    name: string;
    slug: string;
}

interface PermissionState {
    id: number;
    name: string;
    slug: string;
    attached: boolean;
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
}

export default function RoleDetailPage({
    role,
    permissions,
}: {
    role: RoleData;
    permissions: SystemPermission[];
}) {
    // Map initial permissions state combining system permissions with attached role permissions
    const initialPermissions: PermissionState[] = permissions.map((p) => {
        const attached = role.permissions?.find(
            (rp: PermissionData) => rp.id === p.id,
        );

        return {
            id: p.id,
            name: p.name,
            slug: p.slug,
            attached: !!attached,
            view: attached ? attached.view : false,
            create: attached ? attached.create : false,
            edit: attached ? attached.edit : false,
            delete: attached ? attached.delete : false,
        };
    });

    const { data, setData, processing, errors } = useForm({
        name: role.name || '',
        description: role.description || '',
        permissions: initialPermissions,
    });

    const handleToggleAttached = (permissionId: number, checked: boolean) => {
        setData(
            'permissions',
            data.permissions.map((p) => {
                if (p.id === permissionId) {
                    return {
                        ...p,
                        attached: checked,
                        view: checked ? true : false,
                        create: checked ? p.create : false,
                        edit: checked ? p.edit : false,
                        delete: checked ? p.delete : false,
                    };
                }

                return p;
            }),
        );
    };

    const handleToggleCapability = (
        permissionId: number,
        capability: 'view' | 'create' | 'edit' | 'delete',
        checked: boolean,
    ) => {
        setData(
            'permissions',
            data.permissions.map((p) => {
                if (p.id === permissionId) {
                    const updated = {
                        ...p,
                        [capability]: checked,
                    };
                    // Auto attach if any capability is selected
                    const hasAnyCapability =
                        updated.view ||
                        updated.create ||
                        updated.edit ||
                        updated.delete;
                    updated.attached = hasAnyCapability;

                    return updated;
                }

                return p;
            }),
        );
    };

    const handleToggleAllRow = (permissionId: number) => {
        setData(
            'permissions',
            data.permissions.map((p) => {
                if (p.id === permissionId) {
                    const allSelected =
                        p.view && p.create && p.edit && p.delete;
                    const nextState = !allSelected;

                    return {
                        ...p,
                        attached: nextState,
                        view: nextState,
                        create: nextState,
                        edit: nextState,
                        delete: nextState,
                    };
                }

                return p;
            }),
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Only send attached permissions with their capabilities
        const attachedPermissions = data.permissions
            .filter(
                (p) => p.attached || p.view || p.create || p.edit || p.delete,
            )
            .map((p) => ({
                id: p.id,
                view: p.view,
                create: p.create,
                edit: p.edit,
                delete: p.delete,
            }));

        router.put(`/roles/${role.id}`, {
            name: data.name,
            description: data.description,
            permissions: attachedPermissions,
        }, {
            preserveScroll: true,
        });
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <Head title={`Role Details - ${role.name}`} />

            {/* Header section */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <Link
                        href="/roles"
                        className="mb-2 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Roles
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Shield className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                                    {role.name}
                                </h1>
                                <Badge
                                    variant="outline"
                                    className="font-mono text-xs"
                                >
                                    {role.slug}
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {role.description || 'No description provided'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        type="submit"
                        form="role-edit-form"
                        disabled={processing}
                        className="gap-2"
                    >
                        <Save className="h-4 w-4" />
                        {processing ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            <form
                id="role-edit-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >
                {/* Role Details Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Role Details</CardTitle>
                        <CardDescription>
                            Edit the role name and description used throughout
                            the system.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                        <Field>
                            <Label htmlFor="name">Role Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                maxLength={25}
                                placeholder="e.g. Manager"
                                data-invalid={!!errors.name}
                                aria-invalid={!!errors.name}
                            />
                            <InputError message={errors.name} />
                        </Field>

                        <Field>
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                maxLength={50}
                                placeholder="e.g. Manages team operations and schedules"
                                data-invalid={!!errors.description}
                                aria-invalid={!!errors.description}
                            />
                            <InputError message={errors.description} />
                        </Field>
                    </CardContent>
                </Card>

                {/* Permissions Matrix Card */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="text-lg">
                                Permissions & Capabilities
                            </CardTitle>
                            <CardDescription>
                                Configure module access permissions and granular
                                capabilities (View, Create, Edit, Delete) for
                                this role.
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50">
                                        <TableHead className="w-[200px]">
                                            Module / Permission
                                        </TableHead>
                                        <TableHead className="w-[100px] text-center">
                                            Status
                                        </TableHead>
                                        <TableHead className="w-[100px] text-center">
                                            View
                                        </TableHead>
                                        <TableHead className="w-[100px] text-center">
                                            Create
                                        </TableHead>
                                        <TableHead className="w-[100px] text-center">
                                            Edit
                                        </TableHead>
                                        <TableHead className="w-[100px] text-center">
                                            Delete
                                        </TableHead>
                                        <TableHead className="w-[120px] pr-6 text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.permissions.map((perm) => (
                                        <TableRow
                                            key={perm.id}
                                            className="hover:bg-muted/30"
                                        >
                                            <TableCell className="font-medium">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-foreground">
                                                        {perm.name}
                                                    </span>
                                                    <span className="font-mono text-xs text-muted-foreground">
                                                        {perm.slug}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex justify-center">
                                                    <Checkbox
                                                        id={`attached-${perm.id}`}
                                                        checked={perm.attached}
                                                        onCheckedChange={(
                                                            checked,
                                                        ) =>
                                                            handleToggleAttached(
                                                                perm.id,
                                                                !!checked,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex justify-center">
                                                    <Checkbox
                                                        id={`view-${perm.id}`}
                                                        checked={perm.view}
                                                        onCheckedChange={(
                                                            checked,
                                                        ) =>
                                                            handleToggleCapability(
                                                                perm.id,
                                                                'view',
                                                                !!checked,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex justify-center">
                                                    <Checkbox
                                                        id={`create-${perm.id}`}
                                                        checked={perm.create}
                                                        onCheckedChange={(
                                                            checked,
                                                        ) =>
                                                            handleToggleCapability(
                                                                perm.id,
                                                                'create',
                                                                !!checked,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex justify-center">
                                                    <Checkbox
                                                        id={`edit-${perm.id}`}
                                                        checked={perm.edit}
                                                        onCheckedChange={(
                                                            checked,
                                                        ) =>
                                                            handleToggleCapability(
                                                                perm.id,
                                                                'edit',
                                                                !!checked,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex justify-center">
                                                    <Checkbox
                                                        id={`delete-${perm.id}`}
                                                        checked={perm.delete}
                                                        onCheckedChange={(
                                                            checked,
                                                        ) =>
                                                            handleToggleCapability(
                                                                perm.id,
                                                                'delete',
                                                                !!checked,
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell className="pr-6 text-right">
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-8 text-xs text-muted-foreground hover:text-foreground"
                                                    onClick={() =>
                                                        handleToggleAllRow(
                                                            perm.id,
                                                        )
                                                    }
                                                >
                                                    {perm.view &&
                                                    perm.create &&
                                                    perm.edit &&
                                                    perm.delete
                                                        ? 'Clear All'
                                                        : 'Select All'}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={processing}
                        size="lg"
                        className="gap-2 px-8"
                    >
                        <Save className="h-4 w-4" />
                        {processing ? 'Saving...' : 'Save Role & Permissions'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
