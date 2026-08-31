import { Link, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, PackageSearch, Search } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import CreateDispatchModal from '@/components/dispatchoperation/create-dispatch-modal';
import PlannedDispatchMetrics from '@/components/dispatchoperation/planned-disptatch-metrics';
import type { DispatchMetrics } from '@/components/dispatchoperation/planned-disptatch-metrics';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import type { PaginatedDispatchData } from '@/generated/DispatchOperation';
import type { TripLegData } from '@/generated/DispatchOperation';
import type { DispatchData } from '@/generated/DispatchOperation/DispatchData';
import type { TripStatus } from '@/generated/DispatchOperation/TripStatus';
import { TRIP_STATUS_COLORS } from '@/lib/trip_status_colors';
import { show } from '@/routes/dispatchoperation';

const DispatchOperation = ({
    dispatches,
    metrics,
    filters,
}: {
    dispatches: PaginatedDispatchData;
    metrics: DispatchMetrics;
    filters?: { search?: string; date_filter?: string; start_date?: string; end_date?: string };
}) => {
    const { data, from, to, total, links } = dispatches;
    const [searchQuery, setSearchQuery] = useState(filters?.search || '');
    const [dateFilter, setDateFilter] = useState(filters?.date_filter || 'today');
    const [startDate, setStartDate] = useState(filters?.start_date || '');
    const [endDate, setEndDate] = useState(filters?.end_date || '');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (
                searchQuery !== (filters?.search || '') ||
                dateFilter !== (filters?.date_filter || 'today') ||
                startDate !== (filters?.start_date || '') ||
                endDate !== (filters?.end_date || '')
            ) {
                router.get(
                    '/dispatchoperations',
                    { search: searchQuery, date_filter: dateFilter, start_date: startDate, end_date: endDate },
                    { preserveState: true, preserveScroll: true, replace: true }
                );
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, dateFilter, startDate, endDate, filters]);

    function getDispatchStatus(tripLegs: TripLegData[]): TripStatus {
        return tripLegs && tripLegs.length > 0
            ? tripLegs[tripLegs.length - 1].status
            : 'pending';
    }

    return (
        <div className="space-y-4 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-900">
                        Dispatch Operations
                    </h1>

                    <p className="text-sm text-slate-500">
                        {total} total {total === 1 ? 'dispatch' : 'dispatches'}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Select value={dateFilter} onValueChange={setDateFilter}>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Date Filter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="today">Today</SelectItem>
                                <SelectItem value="custom">Custom Date</SelectItem>
                                <SelectItem value="all">All Dates</SelectItem>
                            </SelectContent>
                        </Select>

                        {dateFilter === 'custom' && (
                            <div className="flex items-center gap-2">
                                <Input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-[140px]"
                                />
                                <span className="text-slate-400">to</span>
                                <Input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-[140px]"
                                />
                            </div>
                        )}
                    </div>
                    <CreateDispatchModal />
                </div>
            </div>

            <PlannedDispatchMetrics metrics={metrics} />

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-semibold">
                            Dispatches
                        </CardTitle>
                        <div className="relative w-72">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                placeholder="Search plate no, driver or client..."
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {data.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                            <PackageSearch className="h-10 w-10" />
                            <p className="text-sm">No dispatches found.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-slate-50 hover:bg-slate-50">
                                        <TableHead>Vehicle</TableHead>
                                        <TableHead>Service Type</TableHead>
                                        <TableHead>Dispatch Date</TableHead>
                                        <TableHead>Call Time</TableHead>
                                        <TableHead>Driver</TableHead>
                                        <TableHead>Origin Location</TableHead>
                                        <TableHead>Destination Location</TableHead>
                                        <TableHead>Trip No.</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((dispatch: DispatchData) => {
                                        const sortedLegs = dispatch.tripLegs
                                            ? [...dispatch.tripLegs].sort((a, b) => (a.tripSequence ?? 1) - (b.tripSequence ?? 1))
                                            : [];
                                        const firstLeg = sortedLegs[0];

                                        return (
                                            <TableRow
                                                key={dispatch.id}
                                                className="hover:bg-slate-50"
                                            >
                                                <TableCell>
                                                    {dispatch.vehicle
                                                        ?.plateNumber ?? ''}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-blue-50 text-blue-800 hover:bg-blue-50"
                                                    >
                                                        {dispatch.serviceType}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    {dispatch.dispatchDate}
                                                </TableCell>
                                                <TableCell>
                                                    {dispatch.assignedCallTime}
                                                </TableCell>

                                                <TableCell>
                                                    {dispatch.driver?.fullName ??
                                                        ''}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-1.5">
                                                        <span>{firstLeg?.originLocation?.name ?? '—'}</span>
                                                        {firstLeg?.originLocation?.touchpoint && (
                                                            <Badge variant="outline" className="font-mono text-[10px] bg-slate-50 text-slate-600 border-slate-200">
                                                                {firstLeg.originLocation.touchpoint}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-1.5">
                                                        <span>{firstLeg?.destinationLocation?.name ?? '—'}</span>
                                                        {firstLeg?.destinationLocation?.touchpoint && (
                                                            <Badge variant="outline" className="font-mono text-[10px] bg-slate-50 text-slate-600 border-slate-200">
                                                                {firstLeg.destinationLocation.touchpoint}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {dispatch.tripLegs.length}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        className={
                                                            TRIP_STATUS_COLORS[
                                                                getDispatchStatus(
                                                                    dispatch.tripLegs,
                                                                ) || 'pending'
                                                            ]
                                                        }
                                                    >
                                                        {getDispatchStatus(
                                                            dispatch.tripLegs,
                                                        )}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="flex justify-end">
                                                    <Link
                                                        className="hover:scale-105"
                                                        href={show(dispatch.id)}
                                                    >
                                                        <Eye className="h-4 text-neutral-600" />
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>

            {data.length > 0 && (
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">
                        Showing {from ?? 0} to {to ?? 0} of {total} results
                    </p>
                    <div className="flex items-center gap-1">
                        {links.map((link, index) => {
                            const isPrev = index === 0;
                            const isNext = index === links.length - 1;
                            const label = isPrev ? (
                                <ChevronLeft className="h-4 w-4" />
                            ) : isNext ? (
                                <ChevronRight className="h-4 w-4" />
                            ) : (
                                link.label
                            );

                            return (
                                <Button
                                    key={index}
                                    variant={
                                        link.active ? 'default' : 'outline'
                                    }
                                    size="sm"
                                    disabled={!link.url}
                                    onClick={() =>
                                        link.url &&
                                        router.get(
                                            link.url,
                                            {},
                                            { preserveState: true },
                                        )
                                    }
                                    className="h-8 w-8 p-0"
                                >
                                    {label}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DispatchOperation;
