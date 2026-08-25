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

type AddRegistrationModalProps = {
    vendorId: number;
    vehicleId: number;
};

export default function AddRegistrationModal({
    vendorId,
    vehicleId,
}: AddRegistrationModalProps) {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        cr_number: '',
        or_number: '',
        or_date: '',
        ltfrb_date: '',
        case_number: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/vendors/${vendorId}/vehicles/${vehicleId}/registrations`, {
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon-sm" title="Add Registration">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Vehicle Registration</DialogTitle>
                    <DialogDescription>
                        Record LTO Certificate of Registration (CR) and Official Receipt (OR) details.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="cr_number">CR Number *</Label>
                            <Input
                                id="cr_number"
                                placeholder="e.g. CR-883910"
                                value={data.cr_number}
                                onChange={(e) => setData('cr_number', e.target.value)}
                                required
                            />
                            <InputError message={errors.cr_number} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="or_number">OR Number *</Label>
                            <Input
                                id="or_number"
                                placeholder="e.g. OR-441029"
                                value={data.or_number}
                                onChange={(e) => setData('or_number', e.target.value)}
                                required
                            />
                            <InputError message={errors.or_number} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="or_date">OR Issue Date</Label>
                            <Input
                                id="or_date"
                                type="date"
                                value={data.or_date}
                                onChange={(e) => setData('or_date', e.target.value)}
                            />
                            <InputError message={errors.or_date} />
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="ltfrb_date">LTFRB Validity Date</Label>
                            <Input
                                id="ltfrb_date"
                                type="date"
                                value={data.ltfrb_date}
                                onChange={(e) => setData('ltfrb_date', e.target.value)}
                            />
                            <InputError message={errors.ltfrb_date} />
                        </div>
                    </div>

                    <div className="grid gap-1.5">
                        <Label htmlFor="case_number">Case / Franchise Number</Label>
                        <Input
                            id="case_number"
                            placeholder="e.g. CASE-2026-0091"
                            value={data.case_number}
                            onChange={(e) => setData('case_number', e.target.value)}
                        />
                        <InputError message={errors.case_number} />
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
                            {processing ? 'Saving...' : 'Add Registration'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
