import { useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { store } from '@/routes/drops';

type LocationOption = {
    id: number;
    name: string;
    touchpoint?: string;
    type?: string;
};

type CreateDropModalProps = {
    tripLegId: number;
    locations: LocationOption[];
};

export default function CreateDropModal({
    tripLegId,
    locations,
}: CreateDropModalProps) {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        trip_leg_id: tripLegId,
        location_id: '',
        parcel_count: '',
        arrived_time: '',
        departed_time: '',
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
                <Button size="icon-sm" variant="ghost" title="Add drop to leg">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Drop Stop</DialogTitle>
                    <DialogDescription>
                        Record an intermediate drop-off stop for this trip leg.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Location select */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="location_id">Drop Location *</Label>
                        <Select
                            value={data.location_id}
                            onValueChange={(val) => setData('location_id', val)}
                            required
                        >
                            <SelectTrigger id="location_id" className="w-full">
                                <SelectValue placeholder="Select location..." />
                            </SelectTrigger>
                            <SelectContent>
                                {locations.map((loc) => (
                                    <SelectItem key={loc.id} value={String(loc.id)}>
                                        {loc.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.location_id} />
                    </div>

                    {/* Parcel count */}
                    <div className="grid gap-1.5">
                        <Label htmlFor="parcel_count">Parcel Count</Label>
                        <Input
                            id="parcel_count"
                            type="number"
                            placeholder="e.g. 10"
                            value={data.parcel_count}
                            onChange={(e) => setData('parcel_count', e.target.value)}
                        />
                        <InputError message={errors.parcel_count} />
                    </div>

                    {/* Arrival & Departure Time */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="arrived_time">Arrived Time</Label>
                            <Input
                                id="arrived_time"
                                type="time"
                                value={data.arrived_time}
                                onChange={(e) => setData('arrived_time', e.target.value)}
                            />
                            <InputError message={errors.arrived_time} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="departed_time">Departed Time</Label>
                            <Input
                                id="departed_time"
                                type="time"
                                value={data.departed_time}
                                onChange={(e) => setData('departed_time', e.target.value)}
                            />
                            <InputError message={errors.departed_time} />
                        </div>
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
                            {processing ? 'Saving...' : 'Add Drop'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
