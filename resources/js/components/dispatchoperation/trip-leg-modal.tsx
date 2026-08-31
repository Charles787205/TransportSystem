import { Form, router } from '@inertiajs/react';
import { Loader2, MapPin, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import TripLegController from '@/actions/Modules/DispatchOperation/Http/Controllers/TripLegController';
import InputError from '../input-error';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { Separator } from '../ui/separator';

type TripLegModalProps = {
    tripLeg: any;
    dispatchId: number;
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    clientAllowedCargoUnits?: string[] | null;
};

const normalizeDateTimeValue = (value: string | null | undefined) => {
    if (!value) {
        return '';
    }

    if (value.includes('T')) {
        return value.slice(0, 16);
    }

    if (value.includes(' ')) {
        const [date, time] = value.split(' ');
        return `${date}T${time.slice(0, 5)}`;
    }

    if (value.length <= 8) {
        const today = new Date().toISOString().slice(0, 10);
        return `${today}T${value.slice(0, 5)}`;
    }

    return value;
};

const getCurrentDateTimeString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const TRIP_STATUS_OPTIONS = [
    'pending',
    'intransit to origin',
    'waiting at parking',
    'ongoing loading',
    'in transit to destination',
    'waiting for unloading',
    'waiting for soc',
    'ongoing unloading',
    'delivered',
    'foul trip',
    'cancelled',
];

const CANCELLATION_DETAIL_OPTIONS = [
    { value: 'refusal of trip', label: 'Refusal of Trip' },
    { value: 'coding', label: 'Coding' },
    { value: 'vehicle breakdown', label: 'Vehicle Breakdown' },
    { value: 'personnel on leave', label: 'Personnel on Leave' },
    { value: 'resigned', label: 'Resigned' },
    { value: 'cancelled by client', label: 'Cancelled by Client' },
    { value: 'not available', label: 'Not Available' },
    { value: 'rescue urgent', label: 'Rescue Urgent' },
    { value: 'water leak', label: 'Water Leak' },
    { value: 'client app issue', label: 'Client App Issue' },
    { value: 'due to bad', label: 'Due to Bad' },
    { value: 'driver not available', label: 'Driver Not Available' },
    { value: 'unrecognized', label: 'Unrecognized' },
    { value: 'apprehended by enforcement', label: 'Apprehended by Enforcement' },
];

const TripLegModal = ({
    tripLeg,
    dispatchId,
    open,
    onOpenChange,
    clientAllowedCargoUnits,
}: TripLegModalProps) => {
    const [status, setStatus] = useState(tripLeg?.status ?? 'pending');
    const [cargoParcel, setCargoParcel] = useState<string | number>(
        tripLeg?.cargoes?.find((c: any) => c.cargoType === 'per_parcel')?.quantity ?? tripLeg?.totalParcel ?? ''
    );
    const [odometerStart, setOdometerStart] = useState<string | number>(tripLeg?.odometerStart ?? '');
    const [odometerEnd, setOdometerEnd] = useState<string | number>(tripLeg?.odometerEnd ?? '');

    const [originArrivedTime, setOriginArrivedTime] = useState(normalizeDateTimeValue(tripLeg?.originArrivedTime));
    const [originStartLoadingTime, setOriginStartLoadingTime] = useState(normalizeDateTimeValue(tripLeg?.originStartLoadingTime));
    const [originEndLoadingTime, setOriginEndLoadingTime] = useState(normalizeDateTimeValue(tripLeg?.originEndLoadingTime));
    const [departureTime, setDepartureTime] = useState(normalizeDateTimeValue(tripLeg?.departureTime));

    const [destinationArrivedTime, setDestinationArrivedTime] = useState(
        normalizeDateTimeValue(tripLeg?.destinationArrivedTime ?? tripLeg?.arrivedTime)
    );
    const [destinationStartUnloadingTime, setDestinationStartUnloadingTime] = useState(
        normalizeDateTimeValue(tripLeg?.destinationStartUnloadingTime)
    );
    const [destinationEndUnloadingTime, setDestinationEndUnloadingTime] = useState(
        normalizeDateTimeValue(tripLeg?.destinationEndUnloadingTime)
    );
    const [destinationDepartedTime, setDestinationDepartedTime] = useState(
        normalizeDateTimeValue(tripLeg?.destinationDepartedTime ?? tripLeg?.endTime)
    );

    const [statusValidationError, setStatusValidationError] = useState<string | null>(null);

    useEffect(() => {
        if (open && tripLeg) {
            setStatus(tripLeg.status ?? 'pending');
            setCargoParcel(
                tripLeg.cargoes?.find((c: any) => c.cargoType === 'per_parcel')?.quantity ?? tripLeg.totalParcel ?? ''
            );
            setOdometerStart(tripLeg.odometerStart ?? '');
            setOdometerEnd(tripLeg.odometerEnd ?? '');
            setOriginArrivedTime(normalizeDateTimeValue(tripLeg.originArrivedTime));
            setOriginStartLoadingTime(normalizeDateTimeValue(tripLeg.originStartLoadingTime));
            setOriginEndLoadingTime(normalizeDateTimeValue(tripLeg.originEndLoadingTime));
            setDepartureTime(normalizeDateTimeValue(tripLeg.departureTime));
            setDestinationArrivedTime(normalizeDateTimeValue(tripLeg.destinationArrivedTime ?? tripLeg.arrivedTime));
            setDestinationStartUnloadingTime(normalizeDateTimeValue(tripLeg.destinationStartUnloadingTime));
            setDestinationEndUnloadingTime(normalizeDateTimeValue(tripLeg.destinationEndUnloadingTime));
            setDestinationDepartedTime(normalizeDateTimeValue(tripLeg.destinationDepartedTime ?? tripLeg.endTime));
            setStatusValidationError(null);
        }
    }, [open, tripLeg]);

    const isEditing = tripLeg !== null;
    const formAction = TripLegController.update.form(tripLeg?.id ?? 0);

    const getMissingDeliveredFields = () => {
        const missing: string[] = [];
        if (cargoParcel === '' || cargoParcel === null || cargoParcel === undefined || Number(cargoParcel) <= 0) {
            missing.push('parcels count');
        }
        if (odometerStart === '' || odometerStart === null || odometerStart === undefined) {
            missing.push('odometer start');
        }
        if (odometerEnd === '' || odometerEnd === null || odometerEnd === undefined) {
            missing.push('odometer end');
        }
        if (!originArrivedTime) missing.push('origin arrival date/time');
        if (!originStartLoadingTime) missing.push('origin start loading date/time');
        if (!originEndLoadingTime) missing.push('origin end loading date/time');
        if (!departureTime) missing.push('departure date/time');
        if (!destinationArrivedTime) missing.push('destination arrival date/time');
        if (!destinationStartUnloadingTime) missing.push('destination start unloading date/time');
        if (!destinationEndUnloadingTime) missing.push('destination end unloading date/time');
        if (!destinationDepartedTime) missing.push('destination departure date/time');

        return missing;
    };

    const handleStatusChange = (newStatus: string) => {
        setStatusValidationError(null);

        if (newStatus === 'waiting at parking' && !originArrivedTime) {
            setOriginArrivedTime(getCurrentDateTimeString());
        } else if (newStatus === 'ongoing loading' && !originStartLoadingTime) {
            setOriginStartLoadingTime(getCurrentDateTimeString());
        } else if (newStatus === 'in transit to destination' && !departureTime) {
            setDepartureTime(getCurrentDateTimeString());
        } else if (newStatus === 'waiting for unloading' && !destinationArrivedTime) {
            setDestinationArrivedTime(getCurrentDateTimeString());
        } else if (newStatus === 'ongoing unloading' && !destinationStartUnloadingTime) {
            setDestinationStartUnloadingTime(getCurrentDateTimeString());
        }

        if (newStatus === 'delivered') {
            const missing = getMissingDeliveredFields();
            if (missing.length > 0) {
                setStatusValidationError(
                    `Cannot set status to Delivered. Missing required fields: ${missing.join(', ')}.`
                );
            }
        }

        setStatus(newStatus);
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (status === 'delivered') {
            const missing = getMissingDeliveredFields();
            if (missing.length > 0) {
                e.preventDefault();
                setStatusValidationError(
                    `Cannot set status to Delivered. Missing required fields: ${missing.join(', ')}.`
                );
            }
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {isEditing ? 'Edit Trip Leg & Monitoring' : 'Add Trip Leg'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEditing
                            ? 'Update trip status, odometer readings, and loading/unloading timestamps.'
                            : 'Fill in the details for the new trip leg.'}
                    </DialogDescription>
                </DialogHeader>

                <Form
                    {...formAction}
                    resetOnSuccess
                    onSuccess={() => onOpenChange?.(false)}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {({ errors, processing }) => (
                        <>
                            {!isEditing ? (
                                <input
                                    type="hidden"
                                    name="dispatch_id"
                                    value={dispatchId}
                                />
                            ) : null}

                            {/* Cargo & Odometer */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Cargo & Odometer</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {(clientAllowedCargoUnits && clientAllowedCargoUnits.length > 0
                                        ? clientAllowedCargoUnits.includes('per_parcel')
                                        : true) && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="cargo-parcel">Parcels</Label>
                                            <Input
                                                id="cargo-parcel"
                                                name="cargo_parcel"
                                                type="number"
                                                min={0}
                                                value={cargoParcel}
                                                onChange={(e) => {
                                                    setCargoParcel(e.target.value);
                                                    setStatusValidationError(null);
                                                }}
                                            />
                                        </div>
                                    )}

                                    {clientAllowedCargoUnits?.includes('per_box') && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="cargo-box">Box Count</Label>
                                            <Input
                                                id="cargo-box"
                                                name="cargo_box"
                                                type="number"
                                                min={0}
                                                defaultValue={
                                                    tripLeg?.cargoes?.find((c: any) => c.cargoType === 'per_box')?.quantity ?? undefined
                                                }
                                            />
                                        </div>
                                    )}

                                    {clientAllowedCargoUnits?.includes('loose_items') && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="cargo-loose">Loose Items</Label>
                                            <Input
                                                id="cargo-loose"
                                                name="cargo_loose"
                                                type="number"
                                                min={0}
                                                defaultValue={
                                                    tripLeg?.cargoes?.find((c: any) => c.cargoType === 'loose_items')?.quantity ?? undefined
                                                }
                                            />
                                        </div>
                                    )}

                                    {clientAllowedCargoUnits?.includes('by_weight') && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="cargo-weight">Weight (kg)</Label>
                                            <Input
                                                id="cargo-weight"
                                                name="cargo_weight"
                                                type="number"
                                                step="0.01"
                                                min={0}
                                                defaultValue={
                                                    tripLeg?.cargoes?.find((c: any) => c.cargoType === 'by_weight')?.quantity ?? undefined
                                                }
                                            />
                                        </div>
                                    )}

                                    <div className="space-y-1.5">
                                        <Label htmlFor="odometer-start">Odometer Start</Label>
                                        <Input
                                            id="odometer-start"
                                            name="odometer_start"
                                            type="number"
                                            step="0.01"
                                            value={odometerStart}
                                            onChange={(e) => {
                                                setOdometerStart(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                            aria-invalid={!!errors.odometer_start}
                                        />
                                        <InputError message={errors.odometer_start} />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="odometer-end">Odometer End</Label>
                                        <Input
                                            id="odometer-end"
                                            name="odometer_end"
                                            type="number"
                                            step="0.01"
                                            value={odometerEnd}
                                            onChange={(e) => {
                                                setOdometerEnd(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                            aria-invalid={!!errors.odometer_end}
                                        />
                                        <InputError message={errors.odometer_end} />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* Origin Location Timestamps */}
                            <div className="rounded-lg border bg-slate-50 p-3.5 space-y-3">
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                                    <MapPin className="h-4 w-4 text-emerald-600" />
                                    Origin Location Timestamps ({tripLeg?.originLocation?.name ?? 'Origin'})
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="origin-arrived-time" className="text-xs">Arrival Date & Time</Label>
                                        <Input
                                            id="origin-arrived-time"
                                            name="origin_arrived_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={originArrivedTime}
                                            onChange={(e) => {
                                                setOriginArrivedTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="origin-start-loading-time" className="text-xs">Start Loading Date & Time</Label>
                                        <Input
                                            id="origin-start-loading-time"
                                            name="origin_start_loading_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={originStartLoadingTime}
                                            onChange={(e) => {
                                                setOriginStartLoadingTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="origin-end-loading-time" className="text-xs">End Loading Date & Time</Label>
                                        <Input
                                            id="origin-end-loading-time"
                                            name="origin_end_loading_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={originEndLoadingTime}
                                            onChange={(e) => {
                                                setOriginEndLoadingTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="departure-time" className="text-xs">Departure Date & Time</Label>
                                        <Input
                                            id="departure-time"
                                            name="departure_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={departureTime}
                                            onChange={(e) => {
                                                setDepartureTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Destination Location Timestamps */}
                            <div className="rounded-lg border bg-slate-50 p-3.5 space-y-3">
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-800 uppercase tracking-wider">
                                    <MapPin className="h-4 w-4 text-blue-600" />
                                    Destination Location Timestamps ({tripLeg?.destinationLocation?.name ?? 'Destination'})
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-arrived-time" className="text-xs">Arrival Date & Time</Label>
                                        <Input
                                            id="destination-arrived-time"
                                            name="destination_arrived_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={destinationArrivedTime}
                                            onChange={(e) => {
                                                setDestinationArrivedTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-start-unloading-time" className="text-xs">Start Unloading Date & Time</Label>
                                        <Input
                                            id="destination-start-unloading-time"
                                            name="destination_start_unloading_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={destinationStartUnloadingTime}
                                            onChange={(e) => {
                                                setDestinationStartUnloadingTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-end-unloading-time" className="text-xs">End Unloading Date & Time</Label>
                                        <Input
                                            id="destination-end-unloading-time"
                                            name="destination_end_unloading_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={destinationEndUnloadingTime}
                                            onChange={(e) => {
                                                setDestinationEndUnloadingTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-departed-time" className="text-xs">Departure Date & Time</Label>
                                        <Input
                                            id="destination-departed-time"
                                            name="destination_departed_time"
                                            type="datetime-local"
                                            className="bg-white text-xs"
                                            value={destinationDepartedTime}
                                            onChange={(e) => {
                                                setDestinationDepartedTime(e.target.value);
                                                setStatusValidationError(null);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            {/* Status */}
                            <div className="space-y-2">
                                <Label htmlFor="status">Trip Execution Status</Label>
                                <Select
                                    name="status"
                                    value={status}
                                    onValueChange={handleStatusChange}
                                >
                                    <SelectTrigger
                                        id="status"
                                        className="w-full capitalize"
                                        aria-invalid={!!(statusValidationError || errors.status)}
                                    >
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {TRIP_STATUS_OPTIONS.map((statusOption) => (
                                            <SelectItem
                                                key={statusOption}
                                                value={statusOption}
                                                className="capitalize"
                                            >
                                                {statusOption}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={statusValidationError || errors.status} />
                            </div>

                            {status === 'cancelled' && (
                                <div className="space-y-4 border border-dashed border-red-200 rounded-lg p-4 bg-red-50/30">
                                    <h4 className="font-medium text-sm text-red-950">Cancellation Details</h4>
                                    <div className="space-y-2">
                                        <Label htmlFor="cancellation-detail">Reason</Label>
                                        <Select
                                            name="cancellation_detail"
                                            defaultValue={tripLeg?.cancellationDetail?.detail ?? ''}
                                        >
                                            <SelectTrigger id="cancellation-detail" className="w-full bg-white">
                                                <SelectValue placeholder="Select cancellation reason" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {CANCELLATION_DETAIL_OPTIONS.map((opt) => (
                                                    <SelectItem key={opt.value} value={opt.value}>
                                                        {opt.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.cancellation_detail} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cancellation-remark">Remark</Label>
                                        <Input
                                            id="cancellation-remark"
                                            name="cancellation_remark"
                                            placeholder="Enter any additional remark..."
                                            className="bg-white"
                                            defaultValue={tripLeg?.cancellationDetail?.remark ?? ''}
                                        />
                                        <InputError message={errors.cancellation_remark} />
                                    </div>
                                </div>
                            )}

                            <DialogFooter className="flex items-center justify-between">
                                {isEditing && (
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => {
                                            if (confirm('Are you sure you want to delete this trip leg?')) {
                                                router.delete(`/triplegs/${tripLeg.id}`, {
                                                    onSuccess: () => onOpenChange?.(false),
                                                });
                                            }
                                        }}
                                        className="mr-auto"
                                    >
                                        <Trash2 className="mr-1 h-3.5 w-3.5" /> Delete Leg
                                    </Button>
                                )}
                                <div className="flex gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => onOpenChange?.(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        {processing ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Saving...
                                            </>
                                        ) : (
                                            'Save Changes'
                                        )}
                                    </Button>
                                </div>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default TripLegModal;

