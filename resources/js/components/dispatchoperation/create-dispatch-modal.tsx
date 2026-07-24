import { Form } from '@inertiajs/react';
import axios from 'axios';
import { Plus, Loader2 } from 'lucide-react';
import { useState } from 'react';
// TODO: replace with your actual Wayfinder-generated action import
// import { store } from '@/actions/Modules/DispatchOperation/Http/Controllers/DispatchController';
import { index } from '@/actions/Modules/DispatchOperation/Http/Controllers/DispatchFormOptionsController';
import type { DispatchFormOptionsData } from '@/generated/DispatchOperation';
import { store } from '@/routes/dispatchoperation';
import InputError from '../input-error';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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

const CreateDispatchModal = () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<DispatchFormOptionsData | null>(
        null,
    );
    const [loadingOptions, setLoadingOptions] = useState(false);

    const handleOpenChange = (open: boolean) => {
        setOpen(open);

        if (!open || options) {
            return;
        }

        setLoadingOptions(true);
        axios
            .get<DispatchFormOptionsData>(index.url())
            .then((res) => setOptions(res.data))
            .finally(() => setLoadingOptions(false));
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button className="bg-blue-800 text-white hover:bg-blue-900">
                    <Plus className="mr-2 h-4 w-4" />
                    New Dispatch
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create Dispatch</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to schedule a new dispatch.
                    </DialogDescription>
                </DialogHeader>

                {loadingOptions || !options ? (
                    <div className="flex items-center justify-center py-12 text-slate-400">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                ) : (
                    <Form
                        action={store()}
                        onSuccess={() => setOpen(false)}
                        onError={(e) => {
                            console.log(e);
                        }}
                        resetOnSuccess
                        className="space-y-4"
                    >
                        {({ errors, processing }) => (
                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="space-y-1.5"
                                        data-invalid={!!errors.vehicle_id}
                                    >
                                        <Label htmlFor="vehicle_id">
                                            Vehicle
                                        </Label>
                                        <Select name="vehicle_id">
                                            <SelectTrigger
                                                id="vehicle_id"
                                                aria-invalid={
                                                    !!errors.vehicle_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select vehicle" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {options.vehicles.map((v) => (
                                                    <SelectItem
                                                        key={v.id}
                                                        value={String(v.id)}
                                                    >
                                                        {v.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.vehicle_id}
                                        />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={!!errors.driver_id}
                                    >
                                        <Label htmlFor="driver_id">
                                            Driver
                                        </Label>
                                        <Select name="driver_id">
                                            <SelectTrigger
                                                id="driver_id"
                                                aria-invalid={
                                                    !!errors.driver_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select driver" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {options.drivers.map((d) => (
                                                    <SelectItem
                                                        key={d.id}
                                                        value={String(d.id)}
                                                    >
                                                        {d.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.driver_id}
                                        />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={!!errors.business_unit_id}
                                    >
                                        <Label htmlFor="business_unit_id">
                                            Business Unit
                                        </Label>
                                        <Select name="business_unit_id">
                                            <SelectTrigger
                                                id="business_unit_id"
                                                aria-invalid={
                                                    !!errors.business_unit_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select business unit" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {options.businessUnits.map(
                                                    (b) => (
                                                        <SelectItem
                                                            key={b.id}
                                                            value={String(b.id)}
                                                        >
                                                            {b.label}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.business_unit_id}
                                        />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={!!errors.destination_id}
                                    >
                                        <Label htmlFor="destination_id">
                                            Destination
                                        </Label>
                                        <Select name="destination_id">
                                            <SelectTrigger
                                                id="destination_id"
                                                aria-invalid={
                                                    !!errors.destination_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select destination" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {options.destinations.map(
                                                    (d) => (
                                                        <SelectItem
                                                            key={d.id}
                                                            value={String(d.id)}
                                                        >
                                                            {d.label}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.destination_id}
                                        />
                                    </div>
                                </div>

                                <div
                                    className="space-y-1.5"
                                    data-invalid={!!errors.service_type}
                                >
                                    <Label htmlFor="service_type">
                                        Service Type
                                    </Label>
                                    <Select name="service_type">
                                        <SelectTrigger
                                            id="service_type"
                                            aria-invalid={!!errors.service_type}
                                            className="w-full"
                                        >
                                            <SelectValue placeholder="Select service type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="oncall">
                                                On Call
                                            </SelectItem>
                                            <SelectItem value="wetlease">
                                                Wet Lease
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="space-y-1.5"
                                        data-invalid={!!errors.dispatch_date}
                                    >
                                        <Label htmlFor="dispatch_date">
                                            Dispatch Date
                                        </Label>
                                        <Input
                                            id="dispatch_date"
                                            name="dispatch_date"
                                            type="date"
                                            aria-invalid={
                                                !!errors.dispatch_date
                                            }
                                        />
                                        <InputError
                                            message={errors.dispatch_date}
                                        />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={
                                            !!errors.assigned_call_time
                                        }
                                    >
                                        <Label htmlFor="assigned_call_time">
                                            Assigned Call Time
                                        </Label>
                                        <Input
                                            id="assigned_call_time"
                                            name="assigned_call_time"
                                            type="time"
                                            aria-invalid={
                                                !!errors.assigned_call_time
                                            }
                                        />
                                        <InputError
                                            message={errors.assigned_call_time}
                                        />
                                    </div>
                                </div>

                                <div
                                    className="space-y-1.5"
                                    data-invalid={!!errors.linehaul_trip_no}
                                >
                                    <Label htmlFor="linehaul_trip_no">
                                        Linehaul Trip No.
                                    </Label>
                                    <Input
                                        id="linehaul_trip_no"
                                        name="linehaul_trip_no"

                                        aria-invalid={!!errors.linehaul_trip_no}
                                    />
                                    <InputError
                                        message={errors.linehaul_trip_no}
                                    />
                                </div>

                                <DialogFooter className="mt-5">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-800 text-white hover:bg-blue-900"
                                    >
                                        {processing
                                            ? 'Creating…'
                                            : 'Create Dispatch'}
                                    </Button>
                                </DialogFooter>
                            </div>
                        )}
                    </Form>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CreateDispatchModal;
