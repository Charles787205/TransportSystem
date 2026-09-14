import { Link, router } from '@inertiajs/react';
import {
    ChevronDown,
    ChevronUp,
    Edit,
    Eye,
    MapPin,
    MoreHorizontal,
    Trash2,
    Truck,
    User,
    Calendar,
    Plus,
} from 'lucide-react';
import { useState } from 'react';
import CreateDispatchModal from '@/components/dispatchoperation/create-dispatch-modal';
import TripLegModal from '@/components/dispatchoperation/trip-leg-modal';
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
import type { DispatchData } from '@/generated/DispatchOperation';
import type { PlanData } from '@/generated/Planning';
import { destroy, show } from '@/routes/planning';

export default function PlanRow({ plan }: { plan: PlanData }) {
    const [expanded, setExpanded] = useState(false);
    const [editingDispatch, setEditingDispatch] = useState<DispatchData | null>(
        null,
    );

    return (
        <>
            <TableRow>
                <TableCell>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mr-2 size-6"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? (
                            <ChevronUp className="size-4" />
                        ) : (
                            <ChevronDown className="size-4" />
                        )}
                    </Button>
                    <span className="font-medium">
                        {plan.client?.name ?? `Client #${plan.clientId}`}
                    </span>
                </TableCell>
                <TableCell>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-muted-foreground" />
                        <span>
                            {plan.origin?.name ?? `Location #${plan.originId}`}
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
                                (plan.dispatchedCount ?? 0) >=
                                plan.numberOfVehicles
                                    ? 'default'
                                    : (plan.dispatchedCount ?? 0) > 0
                                      ? 'outline'
                                      : 'secondary'
                            }
                            className={
                                (plan.dispatchedCount ?? 0) >=
                                plan.numberOfVehicles
                                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                    : (plan.dispatchedCount ?? 0) > 0
                                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                                      : ''
                            }
                        >
                            {plan.dispatchedCount ?? 0}/{plan.numberOfVehicles}{' '}
                            fulfilled
                        </Badge>
                    </div>
                </TableCell>
                <TableCell>
                    {new Date(plan.dispatchDate).toLocaleDateString('en-US', {
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
                                    href={show({ planning: plan.id }).url}
                                    className="cursor-pointer"
                                >
                                    <Eye className="mr-2 size-4" /> View Details
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer text-destructive focus:text-destructive"
                                onClick={() =>
                                    router.delete(
                                        destroy({ planning: plan.id }).url,
                                    )
                                }
                            >
                                <Trash2 className="mr-2 size-4" /> Delete Plan
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>
            {expanded && (
                <TableRow className="bg-slate-50 hover:bg-slate-50">
                    <TableCell colSpan={6} className="border-b-0 p-0">
                        <div className="mx-4 my-3 overflow-hidden rounded-lg border bg-white shadow-sm ring-1 ring-slate-900/5">
                            <div className="flex items-center justify-between border-b bg-slate-50 px-4 py-3">
                                <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                    <Truck className="size-4 text-slate-500" />
                                    Assigned Dispatches
                                </h4>
                                <div className="flex items-center gap-2">
                                    <Badge
                                        variant="secondary"
                                        className="text-xs font-normal"
                                    >
                                        {plan.dispatches?.length ?? 0} total
                                    </Badge>
                                    <CreateDispatchModal
                                        defaultValues={{
                                            clientId: plan.clientId,
                                            originLocationId: plan.originId,
                                            destinationLocationId:
                                                plan.destinationId,
                                            dispatchDate: plan.dispatchDate,
                                        }}
                                        lockFields={true}
                                        trigger={
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="h-7 gap-1 bg-white px-2 text-xs"
                                            >
                                                <Plus className="size-3" />
                                                Add Dispatch
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="p-0">
                                {plan.dispatches &&
                                plan.dispatches.length > 0 ? (
                                    <Table>
                                        <TableHeader className="bg-slate-50/50">
                                            <TableRow className="border-none hover:bg-transparent">
                                                <TableHead className="h-10 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Driver
                                                </TableHead>
                                                <TableHead className="h-10 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Dispatch Date
                                                </TableHead>
                                                <TableHead className="h-10 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Service Type
                                                </TableHead>
                                                <TableHead className="h-10 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Vehicle Type
                                                </TableHead>
                                                <TableHead className="h-10 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Status
                                                </TableHead>
                                                <TableHead className="h-10 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Trip No
                                                </TableHead>
                                                <TableHead className="h-10 text-right text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                                    Actions
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {plan.dispatches.map(
                                                (
                                                    dispatch: any,
                                                    idx: number,
                                                ) => (
                                                    <TableRow
                                                        key={dispatch.id}
                                                        className={
                                                            idx !==
                                                            plan.dispatches
                                                                .length -
                                                                1
                                                                ? 'border-b border-slate-100'
                                                                : 'border-none'
                                                        }
                                                    >
                                                        <TableCell className="font-medium text-slate-700">
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                                                    <User className="size-3.5" />
                                                                </div>
                                                                {dispatch.driver
                                                                    ?.fullName ??
                                                                    '-'}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-slate-600">
                                                            <div className="flex items-center gap-1.5">
                                                                <Calendar className="size-3.5 text-slate-400" />
                                                                {new Date(
                                                                    dispatch.dispatchDate,
                                                                ).toLocaleDateString(
                                                                    'en-US',
                                                                    {
                                                                        month: 'short',
                                                                        day: 'numeric',
                                                                        year: 'numeric',
                                                                    },
                                                                )}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge
                                                                variant="secondary"
                                                                className="bg-slate-100 font-normal text-slate-600 capitalize hover:bg-slate-200"
                                                            >
                                                                {
                                                                    dispatch.serviceType
                                                                }
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span className="text-slate-600 capitalize">
                                                                {dispatch
                                                                    .vehicle
                                                                    ?.type ??
                                                                    '-'}
                                                            </span>
                                                        </TableCell>
                                                        <TableCell>
                                                            {(() => {
                                                                const status =
                                                                    dispatch.currentStatus ??
                                                                    'pending';
                                                                const getStatusColor =
                                                                    (
                                                                        status: string,
                                                                    ) => {
                                                                        if (
                                                                            status.includes(
                                                                                'delivered',
                                                                            ) ||
                                                                            status.includes(
                                                                                'completed',
                                                                            )
                                                                        ) {
                                                                            return 'bg-emerald-50 text-emerald-700 border-emerald-200';
                                                                        }

                                                                        if (
                                                                            status.includes(
                                                                                'cancelled',
                                                                            ) ||
                                                                            status.includes(
                                                                                'foul',
                                                                            )
                                                                        ) {
                                                                            return 'bg-red-50 text-red-700 border-red-200';
                                                                        }

                                                                        if (
                                                                            status.includes(
                                                                                'transit',
                                                                            ) ||
                                                                            status.includes(
                                                                                'ongoing',
                                                                            )
                                                                        ) {
                                                                            return 'bg-blue-50 text-blue-700 border-blue-200';
                                                                        }

                                                                        return 'bg-amber-50 text-amber-700 border-amber-200';
                                                                    };

                                                                return (
                                                                    <Badge
                                                                        variant="outline"
                                                                        className={`font-medium capitalize ${getStatusColor(status)}`}
                                                                    >
                                                                        {status}
                                                                    </Badge>
                                                                );
                                                            })()}
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs font-medium text-slate-600">
                                                                {dispatch
                                                                    .tripLegs?.[0]
                                                                    ?.linehaulTripNo ??
                                                                    '-'}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right whitespace-nowrap">
                                                            <Link
                                                                href={`/dispatchoperations/${dispatch.id}`}
                                                                className="mr-2 inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                                            >
                                                                <Eye className="mr-1.5 size-3.5" />{' '}
                                                                View
                                                            </Link>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                                                onClick={() =>
                                                                    setEditingDispatch(
                                                                        dispatch,
                                                                    )
                                                                }
                                                            >
                                                                <Edit className="mr-1.5 size-3.5" />{' '}
                                                                Edit Leg
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ),
                                            )}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
                                        <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-slate-50">
                                            <Truck className="size-6 text-slate-300" />
                                        </div>
                                        <p className="text-sm font-medium text-slate-900">
                                            No dispatches
                                        </p>
                                        <p className="mt-1 mb-4 text-sm text-slate-500">
                                            There are no vehicles dispatched for
                                            this plan yet.
                                        </p>
                                        <CreateDispatchModal
                                            defaultValues={{
                                                clientId: plan.clientId,
                                                originLocationId: plan.originId,
                                                destinationLocationId:
                                                    plan.destinationId,
                                                dispatchDate: plan.dispatchDate,
                                            }}
                                            lockFields={true}
                                            trigger={
                                                <Button
                                                    size="sm"
                                                    className="h-8"
                                                >
                                                    <Plus className="mr-1.5 size-3.5" />
                                                    Add First Dispatch
                                                </Button>
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            )}

            {editingDispatch && editingDispatch.tripLegs?.[0] && (
                <TripLegModal
                    open={!!editingDispatch}
                    onOpenChange={(open) => !open && setEditingDispatch(null)}
                    dispatchId={editingDispatch.id}
                    tripLeg={editingDispatch.tripLegs[0]}
                />
            )}
        </>
    );
}
