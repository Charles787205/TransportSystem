import { Link, router } from '@inertiajs/react';
import {
    Search,
    ClipboardList,
    MapPin,
    X,
    MoreHorizontal,
    Eye,
    Trash2,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CreatePlanModal from '@/components/client/create-plan-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { PaginatedPlanData } from '@/generated/Planning';
import { destroy, index, show } from '@/routes/planning';

const ALL = 'all';

type OptionItem = {
    id: number;
    label: string;
    client_id?: number;
};

export default function PlanningPage({
    paginatedPlans,
    clients = [],
    locations = [],
    filters,
}: {
    paginatedPlans: PaginatedPlanData;
    clients?: OptionItem[];
    locations?: OptionItem[];
    filters?: {
        search?: string;
        client_id?: string;
        origin_id?: string;
        destination_id?: string;
        dispatch_date?: string;
    };
}) {
    const { plans, from, to, total, links } = paginatedPlans;

    const [search, setSearch] = useState(filters?.search ?? '');
    const [clientId, setClientId] = useState(filters?.client_id ?? ALL);
    const [originId, setOriginId] = useState(filters?.origin_id ?? ALL);
    const [destinationId, setDestinationId] = useState(
        filters?.destination_id ?? ALL,
    );
    const [dispatchDate, setDispatchDate] = useState(
        filters?.dispatch_date ?? '',
    );
    const isFirstRender = useRef(true);

    const applyFilters = (next: {
        search?: string;
        client_id?: string;
        origin_id?: string;
        destination_id?: string;
        dispatch_date?: string;
    }) => {
        router.get(
            index().url,
            {
                search: next.search || undefined,
                client_id:
                    next.client_id && next.client_id !== ALL
                        ? next.client_id
                        : undefined,
                origin_id:
                    next.origin_id && next.origin_id !== ALL
                        ? next.origin_id
                        : undefined,
                destination_id:
                    next.destination_id && next.destination_id !== ALL
                        ? next.destination_id
                        : undefined,
                dispatch_date: next.dispatch_date || undefined,
            },
            { preserveState: true, replace: true },
        );
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

            return;
        }

        const timer = setTimeout(() => {
            applyFilters({
                search,
                client_id: clientId,
                origin_id: originId,
                destination_id: destinationId,
                dispatch_date: dispatchDate,
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [search, clientId, originId, destinationId, dispatchDate]);

    const clearFilters = () => {
        setSearch('');
        setClientId(ALL);
        setOriginId(ALL);
        setDestinationId(ALL);
        setDispatchDate('');
        router.get(index().url, {}, { preserveState: true, replace: true });
    };

    const hasActiveFilters =
        Boolean(search) ||
        clientId !== ALL ||
        originId !== ALL ||
        destinationId !== ALL ||
        Boolean(dispatchDate);

    const filteredLocations = locations.filter((loc) => {
        if (clientId === ALL) {
            return true;
        }

        return String(loc.client_id) === String(clientId);
    });

    const handlePageChange = (url: string | null) => {
        if (url) {
            router.get(url, {}, { preserveState: true });
        }
    };

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Planning
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Manage vehicle capacity planning by client route and
                        dispatch date.
                    </p>
                </div>

                <CreatePlanModal clients={clients} locations={locations} />
            </div>

            {/* Filter Bar */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative min-w-[200px] flex-1">
                            <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
                            <Input
                                placeholder="Search client or location..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-9"
                            />
                        </div>

                        <Select value={clientId} onValueChange={setClientId}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="All Clients" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={ALL}>All Clients</SelectItem>
                                {clients.map((c) => (
                                    <SelectItem key={c.id} value={String(c.id)}>
                                        {c.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={originId} onValueChange={setOriginId}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="All Origins" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={ALL}>All Origins</SelectItem>
                                {filteredLocations.map((l) => (
                                    <SelectItem key={l.id} value={String(l.id)}>
                                        {l.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            value={destinationId}
                            onValueChange={setDestinationId}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="All Destinations" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={ALL}>
                                    All Destinations
                                </SelectItem>
                                {filteredLocations.map((l) => (
                                    <SelectItem key={l.id} value={String(l.id)}>
                                        {l.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Input
                            type="date"
                            value={dispatchDate}
                            onChange={(e) => setDispatchDate(e.target.value)}
                            className="w-[160px]"
                        />

                        {hasActiveFilters && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearFilters}
                                className="h-9 px-2"
                            >
                                <X className="mr-1 size-4" /> Reset
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Plans Table */}
            <div className="rounded-lg border bg-card shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead>Origin Location</TableHead>
                            <TableHead>Destination Location</TableHead>
                            <TableHead className="text-center">
                                Vehicles / Fulfillment
                            </TableHead>
                            <TableHead>Dispatch Date</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {plans.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="h-32 text-center text-muted-foreground"
                                >
                                    <div className="flex flex-col items-center justify-center gap-1">
                                        <ClipboardList className="size-8 text-muted-foreground/60" />
                                        <p>No plans found.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            plans.map((plan) => (
                                <TableRow key={plan.id}>
                                    <TableCell className="font-medium">
                                        {plan.client?.name ??
                                            `Client #${plan.clientId}`}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="size-3.5 text-muted-foreground" />
                                            <span>
                                                {plan.origin?.name ??
                                                    `Location #${plan.originId}`}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="size-3.5 text-muted-foreground" />
                                            <span>
                                                {plan.destination?.name ??
                                                    `Location #${plan.destinationId}`}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center font-semibold">
                                        <div className="flex flex-col items-center gap-1">
                                            <Badge
                                                variant={
                                                    (plan.dispatchedCount ?? 0) >= plan.numberOfVehicles
                                                        ? 'default'
                                                        : (plan.dispatchedCount ?? 0) > 0
                                                          ? 'outline'
                                                          : 'secondary'
                                                }
                                                className={
                                                    (plan.dispatchedCount ?? 0) >= plan.numberOfVehicles
                                                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                                        : (plan.dispatchedCount ?? 0) > 0
                                                          ? 'border-amber-500 text-amber-700 bg-amber-50'
                                                          : ''
                                                }
                                            >
                                                {plan.dispatchedCount ?? 0}/{plan.numberOfVehicles} fulfilled
                                            </Badge>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {new Date(
                                            plan.dispatchDate,
                                        ).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-8"
                                                >
                                                    <MoreHorizontal className="size-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={
                                                            show({
                                                                planning:
                                                                    plan.id,
                                                            }).url
                                                        }
                                                        className="cursor-pointer"
                                                    >
                                                        <Eye className="mr-2 size-4" />{' '}
                                                        View Details
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="cursor-pointer text-destructive focus:text-destructive"
                                                    onClick={() =>
                                                        router.delete(
                                                            destroy({
                                                                planning:
                                                                    plan.id,
                                                            }).url,
                                                        )
                                                    }
                                                >
                                                    <Trash2 className="mr-2 size-4" />{' '}
                                                    Delete Plan
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

            {/* Pagination */}
            {links && links.length > 3 && (
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        Showing {from ?? 0}–{to ?? 0} of {total} plans
                    </p>
                    <div className="flex items-center gap-1">
                        {links.map((link, index) => (
                            <Button
                                key={`${link.label}-${index}`}
                                variant={link.active ? 'default' : 'outline'}
                                size="sm"
                                disabled={!link.url}
                                onClick={() => handlePageChange(link.url)}
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: link.label!,
                                    }}
                                />
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
