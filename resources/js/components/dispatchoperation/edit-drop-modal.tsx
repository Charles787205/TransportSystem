import { useForm, router } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
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
import type { DropData } from '@/generated/DispatchOperation';

type LocationOption = {
    id: number;
    name: string;
    touchpoint?: string;
    type?: string;
};

type EditDropModalProps = {
    drop: DropData;
    locations: LocationOption[];
    children?: React.ReactNode;
};

const normalizeTimeValue = (value: string | null | undefined) => {
    if (!value) return '';
    return value.slice(0, 5);
};

export default function EditDropModal({
    drop,
    locations,
    children,
}: EditDropModalProps) {
    const [open, setOpen] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        location_id: String(drop.locationId),
        parcel_count: drop.parcelCount !== null && drop.parcelCount !== undefined ? String(drop.parcelCount) : '',
        arrived_time: normalizeTimeValue(drop.arrivedTime),
        departed_time: normalizeTimeValue(drop.departedTime),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/drops/${drop.id}`, {
            onSuccess: () => {
                setOpen(false);
            },
        });
    };

    const handleDelete = () => {
        if (!confirm('Are you sure you want to delete this drop stop?')) {
            return;
        }

        router.delete(`/drops/${drop.id}`, {
            onSuccess: () => setOpen(false),
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children ?? (
                    <Button size="icon-sm" variant="ghost" title="Edit Drop Stop">
                        <Pencil className="h-3 w-3" />
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Drop Stop</DialogTitle>
                    <DialogDescription>
                        Update intermediate drop-off stop information.
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

                    <DialogFooter className="mt-4 flex items-center justify-between">
                        <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={handleDelete}
                            className="mr-auto"
                        >
                            <Trash2 className="mr-1 h-3.5 w-3.5" /> Delete Drop
                        </Button>

                        <div className="flex gap-2">
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
                                {processing ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
