import { useForm } from '@inertiajs/react';
import { Pencil } from 'lucide-react';
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
import type { VehicleData } from '@/generated/Vendor';
import { update } from '@/routes/vendor/vehicle';

type EditVehicleModalProps = {
    vendorId: number;
    vehicle: VehicleData;
};

export default function EditVehicleModal({
    vendorId,
    vehicle,
}: EditVehicleModalProps) {
    const [open, setOpen] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        plate_number: vehicle.plateNumber,
        make: vehicle.make,
        year_model: vehicle.yearModel,
        engine_number: vehicle.engineNumber,
        chassis_number: vehicle.chassisNumber,
        owners_name: vehicle.ownersName,
        registered_address: vehicle.registeredAddress,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(update.url({ vendor: vendorId, vehicle: vehicle.id }), {
            onSuccess: () => setOpen(false),
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <Pencil className="mr-1.5 h-4 w-4" /> Edit Vehicle
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Vehicle Details</DialogTitle>
                    <DialogDescription>
                        Update vehicle specification and registration details.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="plate_number">Plate Number *</Label>
                            <Input
                                id="plate_number"
                                value={data.plate_number}
                                onChange={(e) => setData('plate_number', e.target.value)}
                                required
                            />
                            <InputError message={errors.plate_number} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="make">Make / Model *</Label>
                            <Input
                                id="make"
                                value={data.make}
                                onChange={(e) => setData('make', e.target.value)}
                                required
                            />
                            <InputError message={errors.make} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="year_model">Year Model *</Label>
                            <Input
                                id="year_model"
                                value={data.year_model}
                                onChange={(e) => setData('year_model', e.target.value)}
                                required
                            />
                            <InputError message={errors.year_model} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="owners_name">Owner's Name *</Label>
                            <Input
                                id="owners_name"
                                value={data.owners_name}
                                onChange={(e) => setData('owners_name', e.target.value)}
                                required
                            />
                            <InputError message={errors.owners_name} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="engine_number">Engine Number</Label>
                            <Input
                                id="engine_number"
                                value={data.engine_number}
                                onChange={(e) => setData('engine_number', e.target.value)}
                            />
                            <InputError message={errors.engine_number} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="chassis_number">Chassis Number</Label>
                            <Input
                                id="chassis_number"
                                value={data.chassis_number}
                                onChange={(e) => setData('chassis_number', e.target.value)}
                            />
                            <InputError message={errors.chassis_number} />
                        </div>
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="registered_address">Registered Address</Label>
                        <Input
                            id="registered_address"
                            value={data.registered_address}
                            onChange={(e) => setData('registered_address', e.target.value)}
                        />
                        <InputError message={errors.registered_address} />
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
                            {processing ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
