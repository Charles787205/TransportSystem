import { useForm } from '@inertiajs/react';
import { Plus, ArrowRight } from 'lucide-react';
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
};

export default function CreateReturnTripModal({
    dispatchId,
    locations,
    defaultOriginLocationId,
    defaultDestinationLocationId,
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
        odometer_start: '',
        odometer_end: '',
        total_parcel: '',
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

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="bg-blue-800 hover:bg-blue-900 text-white">
                    <Plus className="mr-1.5 h-4 w-4" />
                    Add Return Trip
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Return Trip</DialogTitle>
                    <DialogDescription>
                        Record end-of-shift or return trip details for this dispatch assignment.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Read-only Route Indicator */}
                    <div className="rounded-lg border bg-slate-50 p-3 space-y-1">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Return Route</span>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <span>{returnOriginLocation?.name ?? '—'}</span>
                            <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" />
                            <span>{returnDestinationLocation?.name ?? '—'}</span>
                        </div>
                    </div>

                    <input type="hidden" name="origin_location_id" value={data.origin_location_id} />
                    <input type="hidden" name="destination_location_id" value={data.destination_location_id} />

                    {/* Odometer Start & End */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="odometer_start">Odometer Start</Label>
                            <Input
                                id="odometer_start"
                                type="number"
                                step="0.01"
                                placeholder="e.g. 15200"
                                value={data.odometer_start}
                                onChange={(e) => setData('odometer_start', e.target.value)}
                            />
                            <InputError message={errors.odometer_start} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="odometer_end">Odometer End</Label>
                            <Input
                                id="odometer_end"
                                type="number"
                                step="0.01"
                                placeholder="e.g. 15280"
                                value={data.odometer_end}
                                onChange={(e) => setData('odometer_end', e.target.value)}
                            />
                            <InputError message={errors.odometer_end} />
                        </div>
                    </div>

                    {/* Total Parcel */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="total_parcel">Total Parcels</Label>
                        <Input
                            id="total_parcel"
                            type="number"
                            placeholder="e.g. 25"
                            value={data.total_parcel}
                            onChange={(e) => setData('total_parcel', e.target.value)}
                        />
                        <InputError message={errors.total_parcel} />
                    </div>

                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-800 hover:bg-blue-900 text-white"
                        >
                            {processing ? 'Saving...' : 'Save Return Trip'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
