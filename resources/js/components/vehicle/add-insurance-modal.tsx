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

type AddInsuranceModalProps = {
    vendorId: number;
    vehicleId: number;
};

export default function AddInsuranceModal({
    vendorId,
    vehicleId,
}: AddInsuranceModalProps) {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        provider_name: '',
        policy_number: '',
        start_date: '',
        end_date: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/vendors/${vendorId}/vehicles/${vehicleId}/insurances`, {
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon-sm" title="Add Insurance Policy">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Insurance Policy</DialogTitle>
                    <DialogDescription>
                        Record a new insurance coverage policy for this vehicle.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid gap-1.5">
                        <Label htmlFor="provider_name">Insurance Provider *</Label>
                        <Input
                            id="provider_name"
                            placeholder="e.g. Pioneer Insurance"
                            value={data.provider_name}
                            onChange={(e) => setData('provider_name', e.target.value)}
                            required
                        />
                        <InputError message={errors.provider_name} />
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="policy_number">Policy Number *</Label>
                        <Input
                            id="policy_number"
                            placeholder="e.g. POL-99201"
                            value={data.policy_number}
                            onChange={(e) => setData('policy_number', e.target.value)}
                            required
                        />
                        <InputError message={errors.policy_number} />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="start_date">Start Date *</Label>
                            <Input
                                id="start_date"
                                type="date"
                                value={data.start_date}
                                onChange={(e) => setData('start_date', e.target.value)}
                                required
                            />
                            <InputError message={errors.start_date} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="end_date">End Date *</Label>
                            <Input
                                id="end_date"
                                type="date"
                                value={data.end_date}
                                onChange={(e) => setData('end_date', e.target.value)}
                                required
                            />
                            <InputError message={errors.end_date} />
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
                            {processing ? 'Saving...' : 'Add Insurance'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
