import { Link, router } from '@inertiajs/react';
import { MoreHorizontal } from 'lucide-react';
import CreateRoleModal from '@/components/roles/create-role-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { RoleData } from '@/generated/User';

const RolesPage = ({ roles }: { roles: RoleData[] }) => {
    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this role?')) {
            router.delete(`/roles/${id}`, { preserveScroll: true });
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Roles</h1>
                    <p className="text-muted-foreground">
                        {roles.length} role{roles.length !== 1 ? 's' : ''} total
                    </p>
                </div>
                <CreateRoleModal />
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Permissions</TableHead>
                            <TableHead className="w-12" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roles.map((role) => (
                            <TableRow key={role.id}>
                                <TableCell className="font-medium">
                                    <Link
                                        href={`/roles/${role.id}`}
                                        className="hover:underline font-semibold text-primary"
                                    >
                                        {role.name}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {role.slug}
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {role.permissions?.map((permission) => (
                                            <Badge
                                                key={permission.id}
                                                variant="secondary"
                                            >
                                                {permission.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem asChild>
                                                <Link href={`/roles/${role.id}`}>
                                                    View
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/roles/${role.id}`}>
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-destructive"
                                                onClick={() =>
                                                    handleDelete(role.id)
                                                }
                                            >
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default RolesPage;
