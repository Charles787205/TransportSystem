import { Head, Link, router } from '@inertiajs/react';
import {
    ArrowLeft,
    Mail,
    Phone,
    Truck,
    Users,
    CircleCheck,
    CircleX,
} from 'lucide-react';
import { Plus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import VendorAddDriver from '@/components/vendor/vendor-add-driver';
import VendorDriverTable from '@/components/vendor/vendor-driver-table';
import VendorVehiclesTable from '@/components/vendor/vendor-vehicle-table';
import type { VendorWithDriversAndVehiclesData } from '@/generated/Vendor';
import { index } from '@/routes/vendor';

import { index as vehiclesIndex } from '@/routes/vendor/vehicle';

const Show = ({ vendor }: { vendor: VendorWithDriversAndVehiclesData }) => {
    const [openAddDriverModal, setOpenAddDriverModal] = useState(false);
    const [openAddTruckModal, setOpenAddTruckModal] = useState(false);
    console.log(vendor.drivers);
    console.log(vendor);

    return (
        <div className="flex flex-col gap-6 p-6">
            <Head title={vendor.name} />

            <div className="flex items-center gap-2">
                <Link
                    href={index()}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-gray-100 hover:text-slate-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                </Link>
                <div>
                    <h1 className="text-xl font-semibold text-slate-900">
                        {vendor.name}
                    </h1>
                    <p className="text-sm text-slate-500">Vendor profile</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Truck className="h-4 w-4" />
                        <p className="text-sm">Total vehicles</p>
                    </div>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {vendor.vehicles.length}
                    </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                        <Users className="h-4 w-4" />
                        <p className="text-sm">Total drivers</p>
                    </div>
                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {vendor.drivers.length}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <Card className="max-w-xl border-gray-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-base font-semibold text-slate-900">
                            Vendor details
                        </CardTitle>
                        <Badge
                            className={
                                vendor.isActive
                                    ? 'border-transparent bg-emerald-100 text-emerald-700'
                                    : 'border-transparent bg-slate-100 text-slate-500'
                            }
                        >
                            {vendor.isActive ? (
                                <CircleCheck className="h-3 w-3" />
                            ) : (
                                <CircleX className="h-3 w-3" />
                            )}
                            {vendor.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                                Name
                            </p>
                            <p className="text-sm text-slate-900">
                                {vendor.name}
                            </p>
                        </div>

                        <Separator />

                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                                Email
                            </p>
                            <div className="flex items-center gap-1.5 text-sm text-slate-900">
                                <Mail className="h-3.5 w-3.5 text-slate-400" />
                                {vendor.email}
                            </div>
                        </div>

                        <Separator />

                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                                Phone number
                            </p>
                            <div className="flex items-center gap-1.5 text-sm text-slate-900">
                                <Phone className="h-3.5 w-3.5 text-slate-400" />
                                {vendor.phoneNumber}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-2">
                    <div className="flex">
                        <CardHeader>
                            <CardTitle>Drivers</CardTitle>
                        </CardHeader>
                        <Button
                            className="mr-6 ml-auto bg-blue-500"
                            size="sm"
                            onClick={() =>
                                setOpenAddDriverModal((prev) => !prev)
                            }
                        >
                            <Plus /> Add Driver
                        </Button>
                        <VendorAddDriver
                            open={openAddDriverModal}
                            setOpen={setOpenAddDriverModal}
                            vendorId={vendor.id}
                        />
                    </div>
                    <CardContent>
                        <VendorDriverTable drivers={vendor.drivers} />
                    </CardContent>
                </Card>

                <Card className="col-span-3 mt-2">
                    <div className="flex">
                        <CardHeader>
                            <CardTitle>Vehicles</CardTitle>
                        </CardHeader>
                        <Button
                            onClick={() =>
                                router.visit(vehiclesIndex(vendor.id))
                            }
                            className="mr-6 ml-auto bg-blue-500"
                            size="sm"
                        >
                            Vehicles Page <ArrowRight />
                        </Button>
                    </div>
                    <CardContent>
                        <VendorVehiclesTable vehicles={vendor.vehicles} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Show;
