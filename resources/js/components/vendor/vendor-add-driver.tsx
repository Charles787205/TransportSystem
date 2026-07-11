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
import { store } from '@/routes/vendor/driver';
import DatePicker from '../datepicker';
import InputError from '../input-error';
import { Button } from '../ui/button';

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from '../ui/select';
import { Separator } from '../ui/separator';

const VendorAddDriver = ({
    vendorId,
    open,
    setOpen,
}: {
    vendorId: number;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-4xl!">
                <DialogHeader>
                    <DialogTitle>Add Driver</DialogTitle>
                    <DialogDescription>
                        Add Driver Details here
                    </DialogDescription>
                </DialogHeader>
                <Form {...store.form(vendorId)}>
                    {({ processing, errors }) => (
                        <>
                            <FieldGroup className="grid grid-cols-2">
                                <input
                                    id="vendor_id"
                                    name="vendor_id"
                                    value={vendorId}
                                    readOnly
                                    className="hidden"
                                />

                                <Field
                                    data-invalid={!!errors.full_name}
                                    className="col-span-1"
                                >
                                    <FieldLabel htmlFor="full_name">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.full_name}
                                        id="full_name"
                                        name="full_name"
                                        placeholder="Juan Dela Cruz"
                                    />
                                    <InputError message={errors.full_name} />
                                </Field>

                                <Field
                                    data-invalid={!!errors.driver_id_number}
                                    className="col-span-1"
                                >
                                    <FieldLabel htmlFor="driver_id_number">
                                        Driver Id Number
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.driver_id_number}
                                        id="driver_id_number"
                                        name="driver_id_number"
                                        placeholder="Id Number"
                                    />
                                    <InputError
                                        message={errors.driver_id_number}
                                    />
                                </Field>

                                <Field data-invalid={!!errors.gender}>
                                    <FieldLabel htmlFor="gender">
                                        Sex
                                    </FieldLabel>
                                    <Select defaultValue="Male" name="gender">
                                        <SelectTrigger
                                            id="gender"
                                            aria-invalid={!!errors.gender}
                                        >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectGroup>
                                                <SelectItem value="Male">
                                                    Male
                                                </SelectItem>
                                                <SelectItem value="Female">
                                                    Female
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.gender} />
                                </Field>

                                <Field
                                    className="col-span-2"
                                    data-invalid={!!errors.address}
                                >
                                    <FieldLabel htmlFor="address">
                                        Address
                                    </FieldLabel>
                                    <Input
                                        id="address"
                                        name="address"
                                        aria-invalid={!!errors.address}
                                    />
                                    <InputError message={errors.address} />
                                </Field>

                                <DatePicker
                                    aria-invalid={!!errors.birthday}
                                    name="birthday"
                                    label="Birthday"
                                    error={errors.birthday}
                                />

                                <Field data-invalid={!!errors.phone_number}>
                                    <FieldLabel htmlFor="phone_number">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.phone_number}
                                        name="phone_number"
                                        id="phone_number"
                                        type="tel"
                                        placeholder="09123456789"
                                    />
                                    <InputError message={errors.phone_number} />
                                </Field>

                                <Field data-invalid={!!errors.license_number}>
                                    <FieldLabel htmlFor="license_number">
                                        License Number
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={!!errors.license_number}
                                        id="license_number"
                                        name="license_number"
                                    />
                                    <InputError
                                        message={errors.license_number}
                                    />
                                </Field>

                                <DatePicker
                                    aria-invalid={!!errors.license_expiry}
                                    name="license_expiry"
                                    label="License Expiry"
                                    error={errors.license_expiry}
                                />

                                <Separator className="col-span-2" />
                                <DialogHeader className="col-span-2 font-bold">
                                    Emergency Contact
                                </DialogHeader>

                                <Field
                                    className="col-span-1"
                                    data-invalid={
                                        !!errors.emergency_contact_full_name
                                    }
                                >
                                    <FieldLabel htmlFor="emergency_contact_full_name">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={
                                            !!errors.emergency_contact_full_name
                                        }
                                        id="emergency_contact_full_name"
                                        name="emergency_contact_full_name"
                                        placeholder="Juan Dela Cruz"
                                    />
                                    <InputError
                                        message={
                                            errors.emergency_contact_full_name
                                        }
                                    />
                                </Field>

                                <Field
                                    data-invalid={
                                        !!errors.emergency_contact_phone_number
                                    }
                                >
                                    <FieldLabel htmlFor="emergency_contact_phone_number">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        aria-invalid={
                                            !!errors.emergency_contact_phone_number
                                        }
                                        name="emergency_contact_phone_number"
                                        id="emergency_contact_phone_number"
                                        type="tel"
                                        placeholder="09123456789"
                                    />
                                    <InputError
                                        message={
                                            errors.emergency_contact_phone_number
                                        }
                                    />
                                </Field>
                            </FieldGroup>

                            <DialogFooter className="mt-4">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={processing}>
                                    Save Driver
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default VendorAddDriver;
