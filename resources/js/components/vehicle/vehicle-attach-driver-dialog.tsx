import { usePage } from '@inertiajs/react';
import { Form } from '@inertiajs/react';
import type { SetStateAction } from 'react';
import type { Dispatch } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import type { VehicleData, VehicleDriverData } from '@/generated/Vendor';
import driver from '@/routes/vendor/driver';
import { attachVehicleToDriver } from '@/routes/vendors';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '../ui/dialog';
import { Field } from '../ui/field';
import { ScrollArea } from '../ui/scroll-area';
const VehicleAttachDriverDialog = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const { vendorId, vehicle, drivers } = usePage<{
        vendorId: number;
        vehicle: VehicleData;
        drivers: VehicleDriverData[];
    }>().props;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-100">
                <DialogHeader>
                    <DialogTitle>Drivers</DialogTitle>
                    <DialogDescription>Choose Driver Here</DialogDescription>
                </DialogHeader>
                <Form
                    {...attachVehicleToDriver.form({
                        vendor: vendorId,
                        vehicle: vehicle.id,
                    })}
                    method="PATCH"
                    onSuccess={() => {
                        setIsOpen(false);
                    }}
                    resetOnSuccess
                >
                    {({ processing, errors }) => (
                        <>
                            <Field>
                                <Select name="driver_id">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Driver" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {drivers &&
                                                drivers.map((driver) => (
                                                    <SelectItem
                                                        key={driver.id}
                                                        value={`${driver.id}`}
                                                    >
                                                        {driver.fullName}
                                                    </SelectItem>
                                                ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </Field>

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

export default VehicleAttachDriverDialog;
