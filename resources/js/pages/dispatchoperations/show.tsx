import { Link } from '@inertiajs/react';
import {
    Building2,
    Calendar,
    Gauge,
    MapPin,
    Pencil,
    Eye,
    Phone,
    Truck,
    User,
    ArrowLeft,
    RotateCcw,
    MapPinOff,
    Plus,
} from 'lucide-react';
import { useState } from 'react';
import CreateDropModal from '@/components/dispatchoperation/create-drop-modal';
import CreateReturnTripModal from '@/components/dispatchoperation/create-return-trip-modal';
import CreateTripLegModal from '@/components/dispatchoperation/create-trip-leg-modal';
import EditDropModal from '@/components/dispatchoperation/edit-drop-modal';
import TripLegModal from '@/components/dispatchoperation/trip-leg-modal';
import ViewTripLegModal from '@/components/dispatchoperation/view-trip-leg-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { DispatchData, TripLegData } from '@/generated/DispatchOperation';
import { index } from '@/routes/dispatchoperation';

type LocationOption = {
    id: number;
    name: string;
    touchpoint?: string;
    type?: string;
};

type DispatchDetailsPagesProps = {
    dispatch: DispatchData;
    locations?: LocationOption[];
    /** Wire this up to open the edit trip leg modal (separate file), pre-filled with the given leg. */
    onEditTripLeg?: (tripLeg: TripLegData) => void;
};

const formatDate = (value: string | null | undefined) => {
    if (!value) {
        return '—';
    }

    return new Date(value).toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

const formatTime = (value: string | null | undefined) => {
    if (!value) {
        return '—';
    }

    const [hours, minutes] = value.split(':');
    const date = new Date();
    date.setHours(Number(hours), Number(minutes));

    return date.toLocaleTimeString('en-PH', {
        hour: 'numeric',
        minute: '2-digit',
    });
};

const formatOdometer = (value: number | null | undefined) => {
    if (value === null || value === undefined) {
        return '—';
    }

    return `${value.toLocaleString()} km`;
};

const TERMINAL_TRIP_LEG_STATUSES = new Set([
    'delivered',
    'cancelled',
    'foul trip',
]);

const isTripLegTerminal = (tripLeg: TripLegData | null) =>
    Boolean(tripLeg?.status && TERMINAL_TRIP_LEG_STATUSES.has(tripLeg.status));

/** A trip leg counts as "done" once every leg-progress field has been filled in. */
const isTripLegComplete = (tripLeg: TripLegData) =>
    tripLeg.totalParcel !== null &&
    tripLeg.odometerStart !== null &&
    tripLeg.odometerEnd !== null &&
    tripLeg.departureTime !== null &&
    tripLeg.endTime !== null &&
    tripLeg.arrivedTime !== null;

const DispatchDetailsPages = ({
    dispatch,
    locations = [],
    onEditTripLeg,
}: DispatchDetailsPagesProps) => {
    const [selectedTripLeg, setSelectedTripLeg] = useState<TripLegData | null>(
        null,
    );
    const [viewTripLeg, setViewTripLeg] = useState<TripLegData | null>(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [tripLegModalOpen, setTripLegModalOpen] = useState(false);
    const tripLegs = dispatch.tripLegs ?? [];
    const returnTrips = dispatch.returnTrips ?? [];

    const latestTripLeg = tripLegs.length
        ? [...tripLegs].sort((a, b) => b.tripSequence - a.tripSequence)[0]
        : null;

    const canAddTripLeg = !latestTripLeg || isTripLegTerminal(latestTripLeg);

    const openTripLegModal = (tripLeg: TripLegData) => {
        onEditTripLeg?.(tripLeg);
        setSelectedTripLeg(tripLeg);
        setTripLegModalOpen(true);
    };

    const openViewTripLegModal = (tripLeg: TripLegData) => {
        setViewTripLeg(tripLeg);
        setViewModalOpen(true);
    };

    const handleTripLegModalOpenChange = (open: boolean) => {
        setTripLegModalOpen(open);

        if (!open) {
            setSelectedTripLeg(null);
        }
    };

    return (
        <div className="space-y-6 p-4">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex gap-2">
                        <Link
                            href={index()}
                            className="cursor-pointer hover:scale-105"
                        >
                            <ArrowLeft />
                        </Link>
                        <h1 className="text-xl font-semibold">
                            Dispatch #{dispatch.id}
                        </h1>
                    </div>
                </div>
                <Badge variant="outline" className="capitalize">
                    {dispatch.serviceType}
                </Badge>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Building2 className="h-4 w-4" />
                            Client Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div>
                            <div className="text-xs text-muted-foreground">Client Name</div>
                            <div className="text-base font-semibold">{dispatch.client?.name ?? '—'}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="text-muted-foreground">Email: </span>
                                {dispatch.client?.email ?? '—'}
                            </div>
                            <div>
                                <span className="text-muted-foreground">Phone: </span>
                                {dispatch.client?.phoneNumber ?? '—'}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Truck className="h-4 w-4" />
                            Vehicle & Driver Assignment
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-xs text-muted-foreground">Plate Number</div>
                                <div className="text-base font-semibold">{dispatch.vehicle?.plateNumber ?? '—'}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                    {dispatch.vehicle?.make} • {dispatch.vehicle?.yearModel}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Driver Name</div>
                                <div className="text-base font-semibold">{dispatch.driver?.fullName ?? '—'}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                    Call Time: {dispatch.assignedCallTime}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Trip Legs Table */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Gauge className="h-4 w-4" />
                            Trip Legs
                        </CardTitle>
                        <CardDescription>
                            {canAddTripLeg
                                ? 'Latest trip leg has a terminal status — you can add a new leg'
                                : 'Add trip leg is only available after the latest leg is delivered, cancelled, or foul'}
                        </CardDescription>
                    </div>
                    <CreateTripLegModal dispatchId={dispatch.id} />
                </CardHeader>
                <CardContent>
                    {tripLegs.length === 0 ? (
                        <p className="py-6 text-center text-sm text-muted-foreground">
                            No trip legs recorded yet.
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Seq</TableHead>
                                    <TableHead>Trip No</TableHead>
                                    <TableHead>Origin / Destination</TableHead>
                                    <TableHead>Drops</TableHead>
                                    <TableHead>Cargo Details</TableHead>
                                    <TableHead>Odometer (Start/End)</TableHead>
                                    <TableHead>Origin Timestamps</TableHead>
                                    <TableHead>Destination Timestamps</TableHead>
                                    <TableHead>Remarks Log</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="w-20 text-right">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[...tripLegs]
                                    .sort(
                                        (a, b) =>
                                            b.tripSequence - a.tripSequence,
                                    )
                                    .map((leg) => {
                                        const drops = leg.drops ?? [];
                                        const remarks = (leg as any).remarks ?? [];

                                        return (
                                            <TableRow key={leg.id}>
                                                <TableCell className="font-medium">
                                                    {leg.tripSequence}
                                                </TableCell>
                                                <TableCell className="font-mono text-xs">
                                                    {leg.linehaulTripNo}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="text-xs space-y-0.5">
                                                        <div><span className="text-muted-foreground">From:</span> {leg.originLocation?.name ?? '—'}</div>
                                                        <div><span className="text-muted-foreground">To:</span> {leg.destinationLocation?.name ?? '—'}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col gap-1 items-start">
                                                        {drops.length === 0 ? (
                                                            <span className="text-xs text-muted-foreground">No drops</span>
                                                        ) : (
                                                            <div className="flex flex-col gap-1 items-start">
                                                                {drops.map((drop, dIdx) => {
                                                                    const isDropFilled = Boolean(drop.arrivedTime && drop.departedTime);

                                                                    return (
                                                                        <EditDropModal 
                                                                            key={drop.id} 
                                                                            drop={drop} 
                                                                            locations={locations}
                                                                            originLocationId={leg.originLocationId}
                                                                            destinationLocationId={leg.destinationLocationId}
                                                                            clientAllowedCargoUnits={dispatch.client?.allowedCargoUnits}
                                                                        >
                                                                            <Badge
                                                                                variant="outline"
                                                                                className={`text-[10px] py-0.5 px-2 cursor-pointer transition-colors ${
                                                                                    isDropFilled
                                                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                                                                                        : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                                                                                }`}
                                                                            >
                                                                                #{dIdx + 1}: {drop.location?.name ?? `Loc #${drop.locationId}`} (
                                                                                {dispatch.client?.allowedCargoUnits?.includes('by_weight')
                                                                                     ? `${drop.weightKg ?? 0} kg`
                                                                                     : dispatch.client?.allowedCargoUnits?.includes('per_box')
                                                                                       ? `${drop.boxCount ?? 0} boxes`
                                                                                       : dispatch.client?.allowedCargoUnits?.includes('loose_items')
                                                                                         ? `${drop.looseItemsCount ?? 0} loose`
                                                                                         : `${drop.parcelCount ?? 0} pcls`}
                                                                                )
                                                                            </Badge>
                                                                        </EditDropModal>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                        <CreateDropModal 
                                                            tripLegId={leg.id} 
                                                            locations={locations} 
                                                            originLocationId={leg.originLocationId}
                                                            destinationLocationId={leg.destinationLocationId}
                                                            clientAllowedCargoUnits={dispatch.client?.allowedCargoUnits} 
                                                        >
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                size="sm"
                                                                className="h-6 text-[11px] gap-1 px-2 mt-1 border-dashed text-blue-700 border-blue-300 hover:bg-blue-50"
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                                Add Drop
                                                            </Button>
                                                        </CreateDropModal>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-xs">
                                                    {leg.cargoes && leg.cargoes.length > 0 ? (
                                                        <div className="flex flex-col gap-0.5 font-medium">
                                                            {leg.cargoes.map((c) => (
                                                                <span key={c.id} className="text-slate-800">
                                                                    {c.cargoType === 'per_parcel' && `${c.quantity} pcls`}
                                                                    {c.cargoType === 'per_box' && `${c.quantity} boxes`}
                                                                    {c.cargoType === 'loose_items' && `${c.quantity} loose`}
                                                                    {c.cargoType === 'by_weight' && `${c.quantity} kg`}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        leg.totalParcel ?? '—'
                                                    )}
                                                </TableCell>
                                                <TableCell className="text-xs">
                                                    {formatOdometer(leg.odometerStart)} / {formatOdometer(leg.odometerEnd)}
                                                </TableCell>
                                                <TableCell className="text-xs">
                                                    <div className="space-y-0.5">
                                                        <div><span className="text-muted-foreground">Arr:</span> {formatTime((leg as any).originArrivedTime)}</div>
                                                        <div><span className="text-muted-foreground">Load:</span> {formatTime((leg as any).originStartLoadingTime)} - {formatTime((leg as any).originEndLoadingTime)}</div>
                                                        <div><span className="text-muted-foreground">Dep:</span> {formatTime(leg.departureTime)}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-xs">
                                                    <div className="space-y-0.5">
                                                        <div><span className="text-muted-foreground">Arr:</span> {formatTime((leg as any).destinationArrivedTime ?? leg.arrivedTime)}</div>
                                                        <div><span className="text-muted-foreground">Unload:</span> {formatTime((leg as any).destinationStartUnloadingTime)} - {formatTime((leg as any).destinationEndUnloadingTime)}</div>
                                                        <div><span className="text-muted-foreground">Dep:</span> {formatTime((leg as any).destinationDepartedTime ?? leg.endTime)}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-xs">
                                                    {remarks.length > 0 ? (
                                                        <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-700 border border-blue-200">
                                                            {remarks.length} remark{remarks.length > 1 ? 's' : ''}
                                                        </span>
                                                    ) : (
                                                        <span className="text-muted-foreground">—</span>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            isTripLegComplete(leg)
                                                                ? 'default'
                                                                : 'outline'
                                                        }
                                                        className="capitalize"
                                                    >
                                                        {leg.status ??
                                                            (isTripLegComplete(leg)
                                                                ? 'Complete'
                                                                : 'Pending')}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon-sm"
                                                            aria-label={`View trip leg ${leg.tripSequence}`}
                                                            title="View Trip Leg Details"
                                                            onClick={() => openViewTripLegModal(leg)}
                                                        >
                                                            <Eye className="h-3.5 w-3.5" />
                                                        </Button>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon-sm"
                                                            aria-label={`Edit trip leg ${leg.tripSequence}`}
                                                            onClick={() => openTripLegModal(leg)}
                                                        >
                                                            <Pencil className="h-3.5 w-3.5" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>

            {/* Return Trips Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <RotateCcw className="h-4 w-4" />
                            Return Trips
                        </CardTitle>
                        <CardDescription>
                            End-of-shift vehicle return legs or empty container returns for this dispatch
                        </CardDescription>
                    </div>
                    <CreateReturnTripModal
                        dispatchId={dispatch.id}
                        locations={locations}
                        defaultOriginLocationId={tripLegs[0]?.originLocationId}
                        defaultDestinationLocationId={tripLegs[0]?.destinationLocationId}
                    />
                </CardHeader>
                <CardContent>
                    {returnTrips.length === 0 ? (
                        <p className="py-6 text-center text-sm text-muted-foreground">
                            No return trips recorded for this dispatch assignment yet.
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Return #</TableHead>
                                    <TableHead>Origin Location</TableHead>
                                    <TableHead>Destination Location</TableHead>
                                    <TableHead>Odometer Start</TableHead>
                                    <TableHead>Odometer End</TableHead>
                                    <TableHead>Total Parcels</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {returnTrips.map((rt, idx) => (
                                    <TableRow key={rt.id}>
                                        <TableCell className="font-medium">
                                            Return #{idx + 1}
                                        </TableCell>
                                        <TableCell>{rt.originLocation?.name ?? '—'}</TableCell>
                                        <TableCell>{rt.destinationLocation?.name ?? '—'}</TableCell>
                                        <TableCell>{formatOdometer(rt.odometerStart)}</TableCell>
                                        <TableCell>{formatOdometer(rt.odometerEnd)}</TableCell>
                                        <TableCell>{rt.totalParcel ?? '—'}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>

            {selectedTripLeg && (
                <TripLegModal
                    key={selectedTripLeg?.id ?? 'trip-leg-modal'}
                    tripLeg={selectedTripLeg!}
                    open={tripLegModalOpen}
                    dispatchId={dispatch.id}
                    clientAllowedCargoUnits={dispatch.client?.allowedCargoUnits}
                    onOpenChange={handleTripLegModalOpenChange}
                />
            )}

            <ViewTripLegModal
                tripLeg={viewTripLeg}
                open={viewModalOpen}
                onOpenChange={setViewModalOpen}
                clientAllowedCargoUnits={dispatch.client?.allowedCargoUnits}
                locations={locations}
            />
        </div>
    );
};

export default DispatchDetailsPages;
