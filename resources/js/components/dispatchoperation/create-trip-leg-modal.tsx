import { Form } from '@inertiajs/react';
import { useState } from 'react';
import { store } from '@/routes/triplegs';

import { Button } from '../ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogTitle,
} from '../ui/dialog';

interface CreateTripLegModalProps {
    dispatchId: number;
}

const CreateTripLegModal = ({ dispatchId }: CreateTripLegModalProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Trip Leg</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add Trip Leg</DialogTitle>
                <Form
                    {...store.form()}
                    resetOnSuccess
                    onSuccess={() => setOpen(false)}
                >
                    {({ processing }) => (
                        <>
                            <input
                                type="hidden"
                                name="dispatch_id"
                                value={dispatchId}
                            />

                            <div className="py-4 text-slate-600">
                                Are you sure you want to add a new trip leg to
                                this dispatch?
                            </div>

                            <DialogFooter className="mt-2">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    Confirm
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTripLegModal;
