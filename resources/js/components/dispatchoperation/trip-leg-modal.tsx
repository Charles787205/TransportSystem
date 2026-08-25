import { Form } from '@inertiajs/react';
import { Loader2, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import TripLegController from '@/actions/Modules/DispatchOperation/Http/Controllers/TripLegController';
import InputError from '../input-error';
import { Badge } from '../ui/badge';
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

const normalizeTimeValue = (value: string | null | undefined) => {
    if (!value) {
        return '';
    }

    return value.slice(0, 5);
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
    const isEditing = tripLeg !== null;
    const formAction = TripLegController.update.form(tripLeg.id);

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
                                                defaultValue={
                                                    tripLeg?.cargoes?.find((c: any) => c.cargoType === 'per_parcel')?.quantity ?? tripLeg?.totalParcel ?? undefined
                                                }
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
                                            defaultValue={tripLeg?.odometerStart ?? undefined}
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
                                            defaultValue={tripLeg?.odometerEnd ?? undefined}
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
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="origin-arrived-time" className="text-xs">Arrival Time</Label>
                                        <Input
                                            id="origin-arrived-time"
                                            name="origin_arrived_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.originArrivedTime)}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="origin-start-loading-time" className="text-xs">Start Loading Time</Label>
                                        <Input
                                            id="origin-start-loading-time"
                                            name="origin_start_loading_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.originStartLoadingTime)}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="origin-end-loading-time" className="text-xs">End Loading Time</Label>
                                        <Input
                                            id="origin-end-loading-time"
                                            name="origin_end_loading_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.originEndLoadingTime)}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="departure-time" className="text-xs">Departure Time</Label>
                                        <Input
                                            id="departure-time"
                                            name="departure_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.departureTime)}
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
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-arrived-time" className="text-xs">Arrival Time</Label>
                                        <Input
                                            id="destination-arrived-time"
                                            name="destination_arrived_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.destinationArrivedTime ?? tripLeg?.arrivedTime)}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-start-unloading-time" className="text-xs">Start Unloading Time</Label>
                                        <Input
                                            id="destination-start-unloading-time"
                                            name="destination_start_unloading_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.destinationStartUnloadingTime)}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-end-unloading-time" className="text-xs">End Unloading Time</Label>
                                        <Input
                                            id="destination-end-unloading-time"
                                            name="destination_end_unloading_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.destinationEndUnloadingTime)}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="destination-departed-time" className="text-xs">Departure Time</Label>
                                        <Input
                                            id="destination-departed-time"
                                            name="destination_departed_time"
                                            type="time"
                                            className="bg-white"
                                            defaultValue={normalizeTimeValue(tripLeg?.destinationDepartedTime ?? tripLeg?.endTime)}
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
                                    onValueChange={setStatus}
                                >
                                    <SelectTrigger
                                        id="status"
                                        className="w-full capitalize"
                                        aria-invalid={!!errors.status}
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
                                <InputError message={errors.status} />
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

                            <DialogFooter>
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
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default TripLegModal;
