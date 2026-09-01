import { Form } from '@inertiajs/react';
import axios from 'axios';
import { Plus, Loader2 } from 'lucide-react';
import { useState } from 'react';
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
import { SearchableSelect } from '../ui/searchable-select';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

type CreateDispatchModalProps = {
    defaultValues?: {
        clientId?: number | string;
        originLocationId?: number | string;
        destinationLocationId?: number | string;
        dispatchDate?: string;
    };
    lockFields?: boolean;
    trigger?: React.ReactNode;
};

const CreateDispatchModal = ({
    defaultValues,
    lockFields = false,
    trigger,
}: CreateDispatchModalProps = {}) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<DispatchFormOptionsData | null>(
        null,
    );
    const [loadingOptions, setLoadingOptions] = useState(false);
    const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
    const [selectedDriverId, setSelectedDriverId] = useState<string>('');
    const [selectedClientId, setSelectedClientId] = useState<string>(
        defaultValues?.clientId ? String(defaultValues.clientId) : '',
    );
    const [selectedOriginId, setSelectedOriginId] = useState<string>(
        defaultValues?.originLocationId
            ? String(defaultValues.originLocationId)
            : '',
    );
    const [selectedDestinationId, setSelectedDestinationId] = useState<string>(
        defaultValues?.destinationLocationId
            ? String(defaultValues.destinationLocationId)
            : '',
    );
    const [selectedTouchpoint, setSelectedTouchpoint] = useState<string>('');

    const handleOriginChange = (originId: string) => {
        setSelectedOriginId(originId);
        const loc = availableLocations.find(
            (l: any) => String(l.id) === String(originId),
        );
        if (loc?.touchpoint) {
            setSelectedTouchpoint(loc.touchpoint);
        }
    };

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);

        if (isOpen) {
            setSelectedVehicleId('');
            setSelectedDriverId('');
            setSelectedTouchpoint('');

            if (defaultValues?.clientId) {
                setSelectedClientId(String(defaultValues.clientId));
            }

            if (defaultValues?.originLocationId) {
                setSelectedOriginId(String(defaultValues.originLocationId));
            }

            if (defaultValues?.destinationLocationId) {
                setSelectedDestinationId(
                    String(defaultValues.destinationLocationId),
                );
            }

            if (!options) {
                setLoadingOptions(true);
                axios
                    .get<DispatchFormOptionsData>(index.url())
                    .then((res) => setOptions(res.data))
                    .finally(() => setLoadingOptions(false));
            }
        }
    };

    const handleClientChange = (clientId: string) => {
        setSelectedClientId(clientId);
        setSelectedOriginId('');
        setSelectedDestinationId('');
    };

    const selectedVehicleObj = options?.vehicles?.find(
        (v: any) => String(v.id) === selectedVehicleId,
    );

    const availableVehicles =
        options?.vehicles?.map((v: any) => {
            const isAssigned =
                selectedDriverId && String(v.driverId) === selectedDriverId;

            return {
                ...v,
                isRecommended: isAssigned,
                recommendedBadge: isAssigned ? 'Assigned Truck' : undefined,
            };
        }) || [];

    const availableDrivers =
        options?.drivers?.map((d: any) => {
            const isAssigned =
                selectedVehicleObj?.driverId &&
                String(d.id) === String(selectedVehicleObj.driverId);

            return {
                ...d,
                isRecommended: isAssigned,
                recommendedBadge: isAssigned ? 'Assigned Driver' : undefined,
            };
        }) || [];

    const availableLocations =
        options?.locations?.filter((loc: any) => {
            if (!selectedClientId) {
                return true;
            }

            return (
                String(loc.clientId ?? loc.client_id) ===
                String(selectedClientId)
            );
        }) || [];

    const originOptions = availableLocations.filter((loc: any) => {
        return String(loc.id) !== selectedDestinationId;
    });

    const destinationOptions = availableLocations.filter((loc: any) => {
        return String(loc.id) !== selectedOriginId;
    });

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {trigger ?? (
                    <Button className="bg-blue-800 text-white hover:bg-blue-900">
                        <Plus className="mr-2 h-4 w-4" />
                        New Dispatch
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create Dispatch</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to schedule a new dispatch and
                        initial 1st trip leg.
                    </DialogDescription>
                </DialogHeader>

                {loadingOptions || !options ? (
                    <div className="flex items-center justify-center py-12 text-slate-400">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                ) : (
                    <Form
                        action={store()}
                        onSuccess={() => {
                            setOpen(false);
                            setSelectedClientId('');
                            setSelectedOriginId('');
                            setSelectedDestinationId('');
                            setSelectedTouchpoint('');
                        }}
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
                                        <SearchableSelect
                                            id="vehicle_id"
                                            name="vehicle_id"
                                            options={availableVehicles}
                                            value={selectedVehicleId}
                                            onValueChange={setSelectedVehicleId}
                                            placeholder="Select vehicle"
                                            searchPlaceholder="Search plate number..."
                                            emptyText="No vehicles found."
                                            aria-invalid={!!errors.vehicle_id}
                                        />
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
                                        <SearchableSelect
                                            id="driver_id"
                                            name="driver_id"
                                            options={availableDrivers}
                                            value={selectedDriverId}
                                            onValueChange={setSelectedDriverId}
                                            placeholder="Select driver"
                                            searchPlaceholder="Search driver name..."
                                            emptyText="No drivers found."
                                            aria-invalid={!!errors.driver_id}
                                        />
                                        <InputError
                                            message={errors.driver_id}
                                        />
                                    </div>

                                    <div
                                        className="col-span-2 space-y-1.5"
                                        data-invalid={!!errors.client_id}
                                    >
                                        <Label htmlFor="client_id">
                                            Client
                                        </Label>
                                        {lockFields && (
                                            <input
                                                type="hidden"
                                                name="client_id"
                                                value={selectedClientId}
                                            />
                                        )}
                                        <Select
                                            name="client_id"
                                            value={selectedClientId}
                                            onValueChange={handleClientChange}
                                            disabled={lockFields}
                                        >
                                            <SelectTrigger
                                                id="client_id"
                                                aria-invalid={
                                                    !!errors.client_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select client" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {options.clients.map((c) => (
                                                    <SelectItem
                                                        key={c.id}
                                                        value={String(c.id)}
                                                    >
                                                        {c.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.client_id}
                                        />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={
                                            !!errors.origin_location_id
                                        }
                                    >
                                        <Label htmlFor="origin_location_id">
                                            Origin Location
                                        </Label>
                                        {lockFields && (
                                            <input
                                                type="hidden"
                                                name="origin_location_id"
                                                value={selectedOriginId}
                                            />
                                        )}
                                        <Select
                                            name="origin_location_id"
                                            value={selectedOriginId}
                                            onValueChange={handleOriginChange}
                                            disabled={
                                                lockFields || !selectedClientId
                                            }
                                        >
                                            <SelectTrigger
                                                id="origin_location_id"
                                                aria-invalid={
                                                    !!errors.origin_location_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue
                                                    placeholder={
                                                        selectedClientId
                                                            ? 'Select origin'
                                                            : 'Select client first'
                                                    }
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {originOptions.map((l: any) => (
                                                    <SelectItem
                                                        key={l.id}
                                                        value={String(l.id)}
                                                    >
                                                        {l.label}{l.touchpoint ? ` (${l.touchpoint})` : ''}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.origin_location_id}
                                        />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={
                                            !!errors.destination_location_id
                                        }
                                    >
                                        <Label htmlFor="destination_location_id">
                                            Destination Location
                                        </Label>
                                        {lockFields && (
                                            <input
                                                type="hidden"
                                                name="destination_location_id"
                                                value={selectedDestinationId}
                                            />
                                        )}
                                        <Select
                                            name="destination_location_id"
                                            value={selectedDestinationId}
                                            onValueChange={
                                                setSelectedDestinationId
                                            }
                                            disabled={
                                                lockFields || !selectedClientId
                                            }
                                        >
                                            <SelectTrigger
                                                id="destination_location_id"
                                                aria-invalid={
                                                    !!errors.destination_location_id
                                                }
                                                className="w-full"
                                            >
                                                <SelectValue
                                                    placeholder={
                                                        selectedClientId
                                                            ? 'Select destination'
                                                            : 'Select client first'
                                                    }
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {destinationOptions.map(
                                                    (l: any) => (
                                                        <SelectItem
                                                            key={l.id}
                                                            value={String(l.id)}
                                                        >
                                                            {l.label}{l.touchpoint ? ` (${l.touchpoint})` : ''}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={
                                                errors.destination_location_id
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
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
                                        <InputError message={errors.service_type} />
                                    </div>

                                    <div
                                        className="space-y-1.5"
                                        data-invalid={!!errors.touchpoint}
                                    >
                                        <Label htmlFor="touchpoint">
                                            Touchpoint
                                        </Label>
                                        <Select
                                            name="touchpoint"
                                            value={selectedTouchpoint}
                                            onValueChange={setSelectedTouchpoint}
                                        >
                                            <SelectTrigger
                                                id="touchpoint"
                                                aria-invalid={!!errors.touchpoint}
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select touchpoint" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="FM">FM (First Mile)</SelectItem>
                                                <SelectItem value="MFM">MFM (Mid-First Mile)</SelectItem>
                                                <SelectItem value="MM">MM (Middle Mile)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.touchpoint} />
                                    </div>
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
                                            defaultValue={
                                                defaultValues?.dispatchDate ??
                                                ''
                                            }
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
