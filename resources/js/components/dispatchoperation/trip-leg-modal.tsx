import { Form } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
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
    console.log(tripLeg);
    const isEditing = tripLeg !== null;
    const formAction = TripLegController.update.form(tripLeg.id);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>
                        {isEditing ? 'Edit Trip Leg' : 'Add Trip Leg'}
                    </DialogTitle>
                    <DialogDescription>
                        {isEditing
                            ? 'Update the active trip leg details before saving.'
                            : 'Fill in the details for the new trip leg.'}
                    </DialogDescription>
                </DialogHeader>

                <Form
                    {...formAction}
                    resetOnSuccess
                    onSuccess={() => onOpenChange?.(false)}
                    className="space-y-4"
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

                            <div className="grid grid-cols-2 gap-4">
                                {(!clientAllowedCargoUnits || clientAllowedCargoUnits.length === 0 || clientAllowedCargoUnits.includes('per_parcel')) && (
                                    <div className="space-y-2">
                                        <Label htmlFor="cargo-parcel">Parcels Count</Label>
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
                                    <div className="space-y-2">
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
                                    <div className="space-y-2">
                                        <Label htmlFor="cargo-loose">Loose Items Count</Label>
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
                                    <div className="space-y-2">
                                        <Label htmlFor="cargo-weight">Total Weight (kg)</Label>
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

                                <div className="space-y-2">
                                    <Label htmlFor="odometer-start">
                                        Odometer Start
                                    </Label>
                                    <Input
                                        id="odometer-start"
                                        name="odometer_start"
                                        type="number"
                                        step="0.01"
                                        defaultValue={
                                            tripLeg?.odometerStart ?? undefined
                                        }
                                        aria-invalid={!!errors.odometer_start}
                                        data-invalid={!!errors.odometer_start}
                                    />
                                    <InputError
                                        message={errors.odometer_start}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="odometer-end">
                                        Odometer End
                                    </Label>
                                    <Input
                                        id="odometer-end"
                                        name="odometer_end"
                                        type="number"
                                        step="0.01"
                                        defaultValue={
                                            tripLeg?.odometerEnd ?? undefined
                                        }
                                        aria-invalid={!!errors.odometer_end}
                                        data-invalid={!!errors.odometer_end}
                                    />
                                    <InputError message={errors.odometer_end} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="departure-time">
                                        Departure Time
                                    </Label>
                                    <Input
                                        id="departure-time"
                                        name="departure_time"
                                        type="time"
                                        defaultValue={normalizeTimeValue(
                                            tripLeg?.departureTime,
                                        )}
                                        aria-invalid={!!errors.departure_time}
                                        data-invalid={!!errors.departure_time}
                                    />
                                    <InputError
                                        message={errors.departure_time}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="end-time">End Time</Label>
                                    <Input
                                        id="end-time"
                                        name="end_time"
                                        type="time"
                                        defaultValue={normalizeTimeValue(
                                            tripLeg?.endTime,
                                        )}
                                        aria-invalid={!!errors.end_time}
                                        data-invalid={!!errors.end_time}
                                    />
                                    <InputError message={errors.end_time} />
                                </div>

                                <div className="col-span-2 space-y-2">
                                    <Label htmlFor="arrived-time">
                                        Arrived Time
                                    </Label>
                                    <Input
                                        id="arrived-time"
                                        name="arrived_time"
                                        type="time"
                                        defaultValue={normalizeTimeValue(
                                            tripLeg?.arrivedTime,
                                        )}
                                        aria-invalid={!!errors.arrived_time}
                                        data-invalid={!!errors.arrived_time}
                                    />
                                    <InputError message={errors.arrived_time} />
                                </div>

                                <div className="col-span-2 space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select
                                        name="status"
                                        value={status}
                                        onValueChange={setStatus}
                                    >
                                        <SelectTrigger
                                            id="status"
                                            className="w-full"
                                            aria-invalid={!!errors.status}
                                            data-invalid={!!errors.status}
                                        >
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {TRIP_STATUS_OPTIONS.map(
                                                (statusOption) => (
                                                    <SelectItem
                                                        key={statusOption}
                                                        value={statusOption}
                                                    >
                                                        {statusOption}
                                                    </SelectItem>
                                                ),
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.status} />
                                </div>

                                {status === 'cancelled' && (
                                    <div className="col-span-2 space-y-4 border border-dashed border-red-200 rounded-lg p-4 bg-red-50/30">
                                        <h4 className="font-medium text-sm text-red-950">Cancellation Details</h4>
                                        <div className="space-y-2">
                                            <Label htmlFor="cancellation-detail">Reason</Label>
                                            <Select
                                                name="cancellation_detail"
                                                defaultValue={
                                                    tripLeg?.cancellationDetail?.detail ?? ''
                                                }
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
                                                defaultValue={
                                                    tripLeg?.cancellationDetail?.remark ?? ''
                                                }
                                            />
                                            <InputError message={errors.cancellation_remark} />
                                        </div>
                                    </div>
                                )}

                                {/* Drop Stops list */}
                                {isEditing && tripLeg?.drops && tripLeg.drops.length > 0 && (
                                    <div className="col-span-2 space-y-2 rounded-lg border bg-slate-50 p-3">
                                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Intermediate Drop Stops ({tripLeg.drops.length})</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {tripLeg.drops.map((drop: any, idx: number) => (
                                                <Badge key={drop.id} variant="secondary" className="text-xs py-1 px-2 flex items-center gap-1 bg-white border">
                                                    <span>#{idx + 1}: {drop.location?.name ?? `Loc #${drop.locationId}`} ({drop.parcelCount ?? 0} pcls)</span>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

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
