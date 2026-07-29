import { Link, router } from '@inertiajs/react';
import { Users as UsersIcon, MoreHorizontal, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import type { PaginatedUserData } from '@/generated/User';
import { destroy, edit, index, show } from '@/routes/user';

export default function UserPage({
    paginatedUsers,
    filters,
}: {
    paginatedUsers: PaginatedUserData;
    filters?: { search?: string };
}) {
    const { data: users, from, to, total, links } = paginatedUsers;

    const [search, setSearch] = useState(filters?.search ?? '');
    const isFirstRender = useRef(true);

    const applyFilters = (next: { search?: string }) => {
        router.get(
            index().url,
            { search: next.search || undefined },
            { preserveState: true, preserveScroll: true, replace: true },
        );
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

            return;
        }

        const timeout = setTimeout(() => {
            applyFilters({ search });
        }, 350);

        return () => clearTimeout(timeout);
    }, [search]);

    const clearFilters = () => {
        setSearch('');
        applyFilters({});
    };

    const handleDelete = (userId: number) => {
        if (
            !window.confirm('Delete this user? This action cannot be undone.')
        ) {
            return;
        }

        router.delete(destroy({ user: userId }).url, {
            preserveScroll: true,
        });
    };

    const hasActiveFilters = !!search;

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex w-full">
                <div>
                    <h1 className="text-xl font-semibold text-slate-900">
                        Users
                    </h1>
                    <p className="text-sm text-slate-500">
                        Manage user accounts and their roles
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-500">Total users</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {total}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <div className="relative max-w-sm flex-1">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search users..."
                        className="pl-9"
                    />
                </div>

                {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                        <X className="h-3.5 w-3.5" />
                        Clear
                    </Button>
                )}
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50 hover:bg-gray-50">
                            <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Name
                            </TableHead>
                            <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Email
                            </TableHead>
                            <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Role
                            </TableHead>
                            <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={4}
                                    className="py-10 text-center text-slate-400"
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <UsersIcon className="h-8 w-8 opacity-30" />
                                        No users found.
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    className="border-gray-100 hover:bg-blue-50"
                                >
                                    <TableCell className="font-medium text-slate-900">
                                        {user.name}
                                    </TableCell>
                                    <TableCell className="text-slate-600">
                                        {user.email}
                                    </TableCell>
                                    <TableCell>
                                        {user.role ? (
                                            <Badge
                                                variant="secondary"
                                                className="border-transparent bg-slate-100 text-slate-700"
                                            >
                                                {user.role.name}
                                            </Badge>
                                        ) : (
                                            <span className="text-slate-400">
                                                —
                                            </span>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={
                                                            show({
                                                                user: user.id,
                                                            }).url
                                                        }
                                                    >
                                                        View
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={
                                                            edit({
                                                                user: user.id,
                                                            }).url
                                                        }
                                                    >
                                                        Edit
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-destructive focus:text-destructive"
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                >
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {users.length > 0 && (
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Showing{' '}
                        <span className="font-medium text-slate-900">
                            {from}
                        </span>
                        –
                        <span className="font-medium text-slate-900">{to}</span>{' '}
                        of{' '}
                        <span className="font-medium text-slate-900">
                            {total}
                        </span>
                    </p>

                    <Pagination className="mx-0 w-auto">
                        <PaginationContent>
                            {links.map((link, i) => {
                                const isPrev = link.label?.includes('Previous');
                                const isNext = link.label?.includes('Next');
                                const isEllipsis = link.label === '...';

                                if (isEllipsis) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    );
                                }

                                const go = (e: React.MouseEvent) => {
                                    e.preventDefault();

                                    if (link.url) {
                                        router.visit(link.url, {
                                            preserveScroll: true,
                                        });
                                    }
                                };

                                if (isPrev) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationPrevious
                                                href={link.url ?? '#'}
                                                className={
                                                    !link.url
                                                        ? 'pointer-events-none opacity-40'
                                                        : ''
                                                }
                                                onClick={go}
                                            />
                                        </PaginationItem>
                                    );
                                }

                                if (isNext) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationNext
                                                href={link.url ?? '#'}
                                                className={
                                                    !link.url
                                                        ? 'pointer-events-none opacity-40'
                                                        : ''
                                                }
                                                onClick={go}
                                            />
                                        </PaginationItem>
                                    );
                                }

                                return (
                                    <PaginationItem key={i}>
                                        <PaginationLink
                                            href={link.url ?? '#'}
                                            isActive={!!link.active}
                                            onClick={go}
                                        >
                                            {link.label}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
