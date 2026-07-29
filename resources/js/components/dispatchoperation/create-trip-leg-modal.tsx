import { Form } from '@inertiajs/react';
import { store } from '@/routes/triplegs';
import InputError from '../input-error';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogTitle,
} from '../ui/dialog';
import { Field } from '../ui/field';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface CreateTripLegModalProps {
    dispatchId: number;
}

const CreateTripLegModal = ({ dispatchId }: CreateTripLegModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Trip Leg</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add Trip Leg</DialogTitle>
                <Form {...store.form()} resetOnSuccess>
                    {({ errors, processing }) => (
                        <>
                            <input
                                type="hidden"
                                name="dispatch_id"
                                value={dispatchId}
                            />

                            <Field>
                                <Label htmlFor="linehaul_trip_no">
                                    Linehaul Trip No.
                                </Label>
                                <Input
                                    id="linehaul_trip_no"
                                    name="linehaul_trip_no"
                                    data-invalid={!!errors.linehaul_trip_no}
                                    aria-invalid={!!errors.linehaul_trip_no}
                                />
                                <InputError message={errors.linehaul_trip_no} />
                            </Field>

                            <DialogFooter className="mt-2">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    Save
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
