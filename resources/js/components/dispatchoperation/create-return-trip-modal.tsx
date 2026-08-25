import { useForm } from '@inertiajs/react';
import { Plus, ArrowRight, Package, Box, Layers, Scale, RotateCcw, Truck } from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { store } from '@/routes/return-trips';

type LocationOption = {
    id: number;
    name: string;
    touchpoint?: string;
    type?: string;
};

type CreateReturnTripModalProps = {
    dispatchId: number;
    locations: LocationOption[];
    defaultOriginLocationId?: number | null;
    defaultDestinationLocationId?: number | null;
    clientAllowedCargoUnits?: string[] | null;
};

export default function CreateReturnTripModal({
    dispatchId,
    locations,
    defaultOriginLocationId,
    defaultDestinationLocationId,
    clientAllowedCargoUnits,
}: CreateReturnTripModalProps) {
    const [open, setOpen] = useState(false);

    // The return trip origin is automatically the original destination
    const returnOriginLocation = locations.find(
        (loc) => String(loc.id) === String(defaultDestinationLocationId),
    );
    // The return trip destination is automatically the original origin
    const returnDestinationLocation = locations.find(
        (loc) => String(loc.id) === String(defaultOriginLocationId),
    );

    const { data, setData, post, processing, errors, reset } = useForm({
        dispatch_id: dispatchId,
        origin_location_id: defaultDestinationLocationId ? String(defaultDestinationLocationId) : '',
        destination_location_id: defaultOriginLocationId ? String(defaultOriginLocationId) : '',
        trip_type: 'return',
        odometer_start: '',
        odometer_end: '',
        total_parcel: '',
        box_count: '',
        loose_items_count: '',
        weight_kg: '',
        departed_at: '',
        arrived_at: '',
        received_by: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(store().url, {
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    };

    // Determine allowed cargo inputs
    const showParcel = !clientAllowedCargoUnits || clientAllowedCargoUnits.length === 0 || clientAllowedCargoUnits.includes('per_parcel');
    const showBox = clientAllowedCargoUnits?.includes('per_box');
    const showLoose = clientAllowedCargoUnits?.includes('loose_items');
    const showWeight = clientAllowedCargoUnits?.includes('by_weight');

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="bg-blue-800 hover:bg-blue-900 text-white">
                    <Plus className="mr-1.5 h-4 w-4" />
                    Add Return / Backload
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Add Return / Backload Trip</DialogTitle>
                    <DialogDescription>
                        Record return trip details or new backload cargo assignments.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Trip Type Selector */}
                    <div className="grid gap-1.5">
                        <Label className="text-xs font-semibold text-slate-700">Trip Type *</Label>
                        <div className="grid grid-cols-2 gap-3">
                            <label
                                htmlFor="type_return"
                                className={`flex items-center gap-2.5 rounded-lg border p-3 cursor-pointer transition-all ${
                                    data.trip_type === 'return'
                                        ? 'border-amber-500 bg-amber-50/50 ring-1 ring-amber-500'
                                        : 'border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                <input
                                    type="radio"
                                    id="type_return"
                                    name="trip_type"
                                    value="return"
                                    checked={data.trip_type === 'return'}
                                    onChange={(e) => setData('trip_type', e.target.value)}
                                    className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                                />
                                <div className="space-y-0.5">
                                    <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-900">
                                        <RotateCcw className="h-4 w-4 text-amber-600" />
                                        Return Trip
                                    </div>
                                    <p className="text-[11px] text-slate-500">Old or rejected items returned</p>
                                </div>
                            </label>

                            <label
                                htmlFor="type_backload"
                                className={`flex items-center gap-2.5 rounded-lg border p-3 cursor-pointer transition-all ${
                                    data.trip_type === 'backload'
                                        ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                                        : 'border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                <input
                                    type="radio"
                                    id="type_backload"
                                    name="trip_type"
                                    value="backload"
                                    checked={data.trip_type === 'backload'}
                                    onChange={(e) => setData('trip_type', e.target.value)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                />
                                <div className="space-y-0.5">
                                    <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-900">
                                        <Truck className="h-4 w-4 text-blue-600" />
                                        Backload Trip
                                    </div>
                                    <p className="text-[11px] text-slate-500">New items loaded on return leg</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Read-only Route Indicator */}
                    <div className="rounded-lg border bg-slate-50 p-2.5 space-y-1">
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Route</span>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                            <span>{returnOriginLocation?.name ?? '—'}</span>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span>{returnDestinationLocation?.name ?? '—'}</span>
                        </div>
                    </div>

                    <input type="hidden" name="origin_location_id" value={data.origin_location_id} />
                    <input type="hidden" name="destination_location_id" value={data.destination_location_id} />

                    {/* Dynamic Cargo Recording Section based on Client Allowed Cargo Units */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-800">
                                Cargo Quantities ({data.trip_type === 'return' ? 'Return Items' : 'Backload Items'})
                            </span>
                            <span className="text-[11px] text-slate-500">Based on client cargo settings</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {showParcel && (
                                <div className="grid gap-1.5">
                                    <Label htmlFor="total_parcel" className="flex items-center gap-1 text-xs">
                                        <Package className="h-3.5 w-3.5 text-blue-800" /> Total Parcels
                                    </Label>
                                    <Input
                                        id="total_parcel"
                                        type="number"
                                        placeholder="e.g. 15"
                                        value={data.total_parcel}
                                        onChange={(e) => setData('total_parcel', e.target.value)}
                                        className="h-8 text-xs bg-white"
                                    />
                                    <InputError message={errors.total_parcel} />
                                </div>
                            )}

                            {showBox && (
                                <div className="grid gap-1.5">
                                    <Label htmlFor="box_count" className="flex items-center gap-1 text-xs">
                                        <Box className="h-3.5 w-3.5 text-blue-800" /> Box Count
                                    </Label>
                                    <Input
                                        id="box_count"
                                        type="number"
                                        placeholder="e.g. 8"
                                        value={data.box_count}
                                        onChange={(e) => setData('box_count', e.target.value)}
                                        className="h-8 text-xs bg-white"
                                    />
                                    <InputError message={errors.box_count} />
                                </div>
                            )}

                            {showLoose && (
                                <div className="grid gap-1.5">
                                    <Label htmlFor="loose_items_count" className="flex items-center gap-1 text-xs">
                                        <Layers className="h-3.5 w-3.5 text-blue-800" /> Loose Items
                                    </Label>
                                    <Input
                                        id="loose_items_count"
                                        type="number"
                                        placeholder="e.g. 20"
                                        value={data.loose_items_count}
                                        onChange={(e) => setData('loose_items_count', e.target.value)}
                                        className="h-8 text-xs bg-white"
                                    />
                                    <InputError message={errors.loose_items_count} />
                                </div>
                            )}

                            {showWeight && (
                                <div className="grid gap-1.5">
                                    <Label htmlFor="weight_kg" className="flex items-center gap-1 text-xs">
                                        <Scale className="h-3.5 w-3.5 text-blue-800" /> Weight (kg)
                                    </Label>
                                    <Input
                                        id="weight_kg"
                                        type="number"
                                        step="0.01"
                                        placeholder="e.g. 350.5 (0.35 tons)"
                                        value={data.weight_kg}
                                        onChange={(e) => setData('weight_kg', e.target.value)}
                                        className="h-8 text-xs bg-white"
                                    />
                                    {data.weight_kg && !isNaN(Number(data.weight_kg)) && (
                                        <span className="text-[10px] text-slate-500 font-medium">
                                            ≈ {(Number(data.weight_kg) / 1000).toFixed(3)} tons
                                        </span>
                                    )}
                                    <InputError message={errors.weight_kg} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Receiver Information */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="received_by" className="text-xs">Received By (Staff / Recipient)</Label>
                        <Input
                            id="received_by"
                            type="text"
                            placeholder="e.g. John Doe (Warehouse Supervisor)"
                            value={data.received_by}
                            onChange={(e) => setData('received_by', e.target.value)}
                            className="h-8 text-xs"
                        />
                        <InputError message={errors.received_by} />
                    </div>

                    {/* Timestamps: Departed At & Arrived At */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="departed_at" className="text-xs">Departed At</Label>
                            <Input
                                id="departed_at"
                                type="datetime-local"
                                value={data.departed_at}
                                onChange={(e) => setData('departed_at', e.target.value)}
                                className="h-8 text-xs"
                            />
                            <InputError message={errors.departed_at} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="arrived_at" className="text-xs">Arrived At</Label>
                            <Input
                                id="arrived_at"
                                type="datetime-local"
                                value={data.arrived_at}
                                onChange={(e) => setData('arrived_at', e.target.value)}
                                className="h-8 text-xs"
                            />
                            <InputError message={errors.arrived_at} />
                        </div>
                    </div>

                    {/* Odometer Start & End */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="odometer_start" className="text-xs">Odometer Start</Label>
                            <Input
                                id="odometer_start"
                                type="number"
                                step="0.01"
                                placeholder="e.g. 15200"
                                value={data.odometer_start}
                                onChange={(e) => setData('odometer_start', e.target.value)}
                                className="h-8 text-xs"
                            />
                            <InputError message={errors.odometer_start} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="odometer_end" className="text-xs">Odometer End</Label>
                            <Input
                                id="odometer_end"
                                type="number"
                                step="0.01"
                                placeholder="e.g. 15280"
                                value={data.odometer_end}
                                onChange={(e) => setData('odometer_end', e.target.value)}
                                className="h-8 text-xs"
                            />
                            <InputError message={errors.odometer_end} />
                        </div>
                    </div>

                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline" size="sm">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            size="sm"
                            disabled={processing}
                            className="bg-blue-800 hover:bg-blue-900 text-white"
                        >
                            {processing ? 'Saving...' : 'Save Record'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
