import { Form } from '@inertiajs/react';
import type { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { store } from '@/routes/client'; // adjust to your actual Wayfinder path
import InputError from '../input-error';
import { Button } from '../ui/button';

const CreateClientModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create client</DialogTitle>
                    <DialogDescription>
                        Add a new client to your account.
                    </DialogDescription>
                </DialogHeader>

                <Form onSuccess={()=>{
                  setIsOpen(false)
                  }} {...store.form()}>
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup>
                                <Field data-invalid={!!errors.name}>
                                    <FieldLabel htmlFor="name">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.name}
                                        id="name"
                                        name="name"
                                        placeholder="Juan Dela Cruz"
                                    />
                                    <InputError message={errors.name} />
                                </Field>

                                <Field data-invalid={!!errors.email}>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.email}
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="juan@example.com"
                                    />
                                    <InputError message={errors.email} />
                                </Field>

                                <Field data-invalid={!!errors.phone_number}>
                                    <FieldLabel htmlFor="phone_number">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.phone_number}
                                        id="phone_number"
                                        name="phone_number"
                                        type="tel"
                                        placeholder="09123456789"
                                    />
                                    <InputError message={errors.phone_number} />
                                </Field>
                            </FieldGroup>

                            <DialogFooter className="mt-4">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    Create client
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateClientModal;