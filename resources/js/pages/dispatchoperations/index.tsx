import { PaginatedDispatchData } from '@/generated/DispatchOperation';
import { Link } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, PackageSearch } from 'lucide-react';
import CreateDispatchModal from '@/components/dispatchoperation/create-dispatch-modal';
import { DispatchData } from '@/generated/DispatchOperation/DispatchData';

const DispatchOperation = ({
    dispatches,
}: {
    dispatches: PaginatedDispatchData;
}) => {
    const { data, currentPage, lastPage, from, to, total, links } = dispatches;
    console.log(dispatches);
    return (
        <div className="space-y-4 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-900">
                        Dispatch Operations
                    </h1>
                    <p className="text-sm text-slate-500">
                        {total} total {total === 1 ? 'dispatch' : 'dispatches'}
                    </p>
                </div>
                <CreateDispatchModal />
            </div>

            <Card className="border-slate-200">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium text-slate-700">
                        All Dispatches
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
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
                                        <TableHead>Service Type</TableHead>
                                        <TableHead>Dispatch Date</TableHead>
                                        <TableHead>Call Time</TableHead>
                                        <TableHead>Vehicle</TableHead>
                                        <TableHead>Driver</TableHead>
                                        <TableHead>Business Unit</TableHead>
                                        <TableHead>Destination</TableHead>
                                        <TableHead>Trip No.</TableHead>
                                        <TableHead className="text-right">
                                            Odometer Start
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Odometer End
                                        </TableHead>
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
                                                {dispatch.vehicle
                                                    ?.plateNumber ?? ''}
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
                                                {dispatch.linehaulTripNo}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {dispatch.odometerStart.toLocaleString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {dispatch.odometerEnd !== null
                                                    ? dispatch.odometerEnd.toLocaleString()
                                                    : '—'}
                                            </TableCell>
                                            <TableCell>view</TableCell>
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
