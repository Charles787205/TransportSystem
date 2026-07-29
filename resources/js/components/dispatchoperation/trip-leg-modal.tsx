import { Form } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import TripLegController from '@/actions/Modules/DispatchOperation/Http/Controllers/TripLegController';
import type { TripLegData } from '@/generated/DispatchOperation';
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

type TripLegModalProps = {
    tripLeg: TripLegData;
    dispatchId: number;
    open: boolean;
    onOpenChange?: (open: boolean) => void;
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

const TripLegModal = ({
    tripLeg,
    dispatchId,
    open,
    onOpenChange,
}: TripLegModalProps) => {
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
                                <div className="space-y-2">
                                    <Label htmlFor="total-parcel">
                                        Total Parcel
                                    </Label>
                                    <Input
                                        id="total-parcel"
                                        name="total_parcel"
                                        type="number"
                                        min={0}
                                        defaultValue={
                                            tripLeg?.totalParcel ?? undefined
                                        }
                                        aria-invalid={!!errors.total_parcel}
                                        data-invalid={!!errors.total_parcel}
                                    />
                                    <InputError message={errors.total_parcel} />
                                </div>

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
                                        defaultValue={
                                            tripLeg?.status ?? 'pending'
                                        }
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
                                                (status) => (
                                                    <SelectItem
                                                        key={status}
                                                        value={status}
                                                    >
                                                        {status}
                                                    </SelectItem>
                                                ),
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.status} />
                                </div>
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
