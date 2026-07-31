import { Form } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogTitle,
} from '@/components/ui/dialog';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { store } from '@/routes/roles';

const CreateRoleModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Role</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add Role</DialogTitle>
                <Form {...store.form()} resetOnSuccess>
                    {({ errors, processing }) => (
                        <div className="flex flex-col gap-4">
                            <Field>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    maxLength={25}
                                    data-invalid={!!errors.name}
                                    aria-invalid={!!errors.name}
                                />
                                <InputError message={errors.name} />
                            </Field>

                            <Field>
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    name="description"
                                    maxLength={50}
                                    data-invalid={!!errors.description}
                                    aria-invalid={!!errors.description}
                                />
                                <InputError message={errors.description} />
                            </Field>

                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                            </DialogFooter>
                        </div>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateRoleModal;
