import { Link } from '@inertiajs/react';
import { Form } from '@inertiajs/react';
import {
    Building2,
    Calendar,
    Gauge,
    MapPin,
    Pencil,
    Phone,
    Truck,
    User,
    ArrowLeft,
} from 'lucide-react';
import { useState } from 'react';
import CreateTripLegModal from '@/components/dispatchoperation/create-trip-leg-modal';
import TripLegModal from '@/components/dispatchoperation/trip-leg-modal';
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

type DispatchDetailsPagesProps = {
    dispatch: DispatchData;
    /** Wire this up to open the create trip leg modal (separate file). */
    onAddTripLeg?: () => void;
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
    onAddTripLeg,
    onEditTripLeg,
}: DispatchDetailsPagesProps) => {
    const [selectedTripLeg, setSelectedTripLeg] = useState<TripLegData | null>(
        null,
    );
    const [tripLegModalOpen, setTripLegModalOpen] = useState(false);
    const tripLegs = dispatch.tripLegs ?? [];

    const latestTripLeg = tripLegs.length
        ? [...tripLegs].sort((a, b) => b.tripSequence - a.tripSequence)[0]
        : null;

    const canAddTripLeg = !latestTripLeg || isTripLegTerminal(latestTripLeg);

    const openTripLegModal = (tripLeg: TripLegData) => {
        onEditTripLeg?.(tripLeg);
        setSelectedTripLeg(tripLeg);
        setTripLegModalOpen(true);
    };

    const handleTripLegAction = () => {
        if (!canAddTripLeg) {
            return;
        }

        onAddTripLeg?.();
        setSelectedTripLeg(null);
        setTripLegModalOpen(true);
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
                            <Calendar className="h-4 w-4" />
                            Dispatch Details
                        </CardTitle>
                        <CardDescription>
                            Schedule and routing information
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Dispatch Date
                            </span>
                            <span className="font-medium">
                                {formatDate(dispatch.dispatchDate)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Assigned Call Time
                            </span>
                            <span className="font-medium">
                                {formatTime(dispatch.assignedCallTime)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Number of Trips
                            </span>
                            <span className="font-medium">
                                {dispatch.tripLegs.length}
                            </span>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                                <Building2 className="h-3.5 w-3.5" />
                                Business Unit
                            </span>
                            <span className="font-medium">
                                {dispatch.businessUnit?.name ?? '—'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5" />
                                Destination
                            </span>
                            <span className="font-medium">
                                {dispatch.destination?.name ?? '—'}
                            </span>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Odometer Start
                            </span>
                            <span className="font-medium">
                                {formatOdometer(dispatch.odometerStart)}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Odometer End
                            </span>
                            <span className="font-medium">
                                {formatOdometer(dispatch.odometerEnd)}
                            </span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <User className="h-4 w-4" />
                            Driver & Vehicle
                        </CardTitle>
                        <CardDescription>
                            Assigned personnel and unit
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Driver
                            </span>
                            <span className="font-medium">
                                {dispatch.driver?.fullName ?? '—'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                                <Phone className="h-3.5 w-3.5" />
                                Phone
                            </span>
                            <span className="font-medium">
                                {dispatch.driver?.phoneNumber ?? '—'}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Status
                            </span>
                            <Badge
                                variant={
                                    dispatch.driver?.status === 'active'
                                        ? 'default'
                                        : 'secondary'
                                }
                                className="capitalize"
                            >
                                {dispatch.driver?.status ?? '—'}
                            </Badge>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                                <Truck className="h-3.5 w-3.5" />
                                Vehicle
                            </span>
                            <span className="font-medium">
                                {dispatch.vehicle?.make ?? '—'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Plate Number
                            </span>
                            <span className="font-medium">
                                {dispatch.vehicle?.plateNumber ?? '—'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Owner</span>
                            <span className="font-medium">
                                {dispatch.vehicle?.ownersName ?? '—'}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>

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
                                    <TableHead>Total Parcel</TableHead>
                                    <TableHead>Odometer Start</TableHead>
                                    <TableHead>Odometer End</TableHead>
                                    <TableHead>Departure</TableHead>
                                    <TableHead>Arrived</TableHead>
                                    <TableHead>End</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="w-12 text-right">
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
                                    .map((leg) => (
                                        <TableRow key={leg.id}>
                                            <TableCell className="font-medium">
                                                {leg.tripSequence}
                                            </TableCell>
                                            <TableCell>
                                                {leg.linehaulTripNo}
                                            </TableCell>
                                            <TableCell>
                                                {leg.totalParcel ?? '—'}
                                            </TableCell>
                                            <TableCell>
                                                {leg.odometerStart}
                                            </TableCell>
                                            <TableCell>
                                                {leg.odometerEnd}
                                            </TableCell>
                                            <TableCell>
                                                {leg.departureTime}
                                            </TableCell>
                                            <TableCell>
                                                {leg.arrivedTime}
                                            </TableCell>
                                            <TableCell>{leg.endTime}</TableCell>
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
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon-sm"
                                                    aria-label={`Edit trip leg ${leg.tripSequence}`}
                                                    onClick={() =>
                                                        openTripLegModal(leg)
                                                    }
                                                >
                                                    <Pencil className="h-3.5 w-3.5" />
                                                </Button>
                                            </TableCell>
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
                    onOpenChange={handleTripLegModalOpenChange}
                />
            )}
        </div>
    );
};

export default DispatchDetailsPages;
