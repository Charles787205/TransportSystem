import { Link, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, PackageSearch, Search } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import CreateDispatchModal from '@/components/dispatchoperation/create-dispatch-modal';
import PlannedDispatchMetrics from '@/components/dispatchoperation/planned-disptatch-metrics';
import type { DispatchMetrics } from '@/components/dispatchoperation/planned-disptatch-metrics';
import { Badge } from '@/components/ui/badge';
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
                                <span className="text-slate-500">to</span>
                                <Input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-[140px]"
                                />
                            </div>
                        )}
                    </div>
                    
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-64 pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <CreateDispatchModal />
                </div>
            </div>
            <PlannedDispatchMetrics metrics={metrics} />
            <Card className="border-slate-200">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium text-slate-700">
                        All Dispatches
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    {data.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-2 py-16 text-slate-400">
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
                                        <TableHead>Business Unit</TableHead>
                                        <TableHead>Destination</TableHead>
                                        <TableHead>Trip No.</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((dispatch: DispatchData) => (
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
                                                {dispatch.businessUnit
                                                    ? dispatch.businessUnit
                                                          .touchpoint
                                                    : ''}{' '}
                                                {dispatch.businessUnit
                                                    ? dispatch.businessUnit.name
                                                    : ''}
                                            </TableCell>
                                            <TableCell>
                                                {dispatch.destination?.name}
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
                                    ))}
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

                            if (!link.url) {
                                return (
                                    <span
                                        key={index}
                                        className="flex h-8 w-8 items-center justify-center rounded-md text-sm text-slate-300"
                                    >
                                        {label}
                                    </span>
                                );
                            }

                            return (
                                <Link
                                    key={index}
                                    href={link.url}
                                    preserveScroll
                                    preserveState
                                    className={`flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm transition-colors ${
                                        link.active
                                            ? 'bg-blue-800 text-white'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DispatchOperation;
