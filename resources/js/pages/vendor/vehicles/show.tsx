import { Link, router } from '@inertiajs/react';
import {
    Truck,
    ShieldCheck,
    ShieldAlert,
    FileWarning,
    UserPlus,
    ArrowLeft,
    TrendingUp,
    Repeat,
} from 'lucide-react';
import { useState } from 'react';
import AddInsuranceModal from '@/components/vehicle/add-insurance-modal';
import AddRegistrationModal from '@/components/vehicle/add-registration-modal';
import EditVehicleModal from '@/components/vehicle/edit-vehicle-modal';
import VehicleAttachDriverDialog from '@/components/vehicle/vehicle-attach-driver-dialog';
import { VehicleDriverHistoryItem } from '@/components/vehicle/vehicle-driver-history-item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import type { VehicleData, VehicleDriverHistory } from '@/generated/Vendor';
import { index } from '@/routes/vendor/vehicle';

type ShowProps = {
    vendorId: number;
    vehicle: VehicleData;
    history: VehicleDriverHistory[];
    stats?: {
        totalTrips: number;
        successRate: number;
    };
};

const Show = ({
    vendorId,
    vehicle,
    history,
    stats,
}: ShowProps) => {
    const insurances = vehicle.insurances ?? [];
    const registrations = vehicle.registrations ?? [];
    const activeInsurance = insurances.length > 0 ? insurances[insurances.length - 1] : null;
    const activeRegistration = registrations.length > 0 ? registrations[registrations.length - 1] : null;

    const totalTrips = stats?.totalTrips ?? 0;
    const successRate = stats?.successRate ?? 100;
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    function openDialog() {
        setIsOpenDialog(true);
        router.reload({
            only: ['drivers'],
        });
    }

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href={index(vendorId)}>
                            <ArrowLeft className="size-4" />
                        </Link>
                    </Button>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-blue-800/10 text-blue-800">
                        <Truck className="size-5" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {vehicle.plateNumber}
                            </h1>
                            <Badge variant={vehicle.isActive ? 'default' : 'secondary'}>
                                {vehicle.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {vehicle.make} · Owned by {vehicle.ownersName}
                        </p>
                    </div>
                </div>

                <EditVehicleModal vendorId={vendorId} vehicle={vehicle} />
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Vehicle Details */}
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Vehicle Details</CardTitle>
                        <CardDescription>
                            Identity and registration info
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {[
                            ['Make / Model', vehicle.make],
                            ['Year Model', vehicle.yearModel],
                            ['Engine Number', vehicle.engineNumber || '—'],
                            ['Chassis Number', vehicle.chassisNumber || '—'],
                            ["Owner's Name", vehicle.ownersName],
                            ['Registered Address', vehicle.registeredAddress || '—'],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="flex items-center justify-between gap-4"
                            >
                                <p className="text-sm text-muted-foreground">
                                    {label}
                                </p>
                                <p className="text-right text-sm font-medium">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Trips + Success Rate */}
                <Card>
                    <CardHeader>
                        <CardTitle>Trip Summary</CardTitle>
                        <CardDescription>
                            Real dispatch activity statistics
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-start gap-1 rounded-lg border p-4">
                            <Repeat className="size-4 text-muted-foreground" />
                            <p className="text-2xl font-bold">{totalTrips}</p>
                            <p className="text-xs text-muted-foreground">
                                Total Dispatches
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-1 rounded-lg border p-4">
                            <TrendingUp className="size-4 text-muted-foreground" />
                            <p className="text-2xl font-bold">{successRate}%</p>
                            <p className="text-xs text-muted-foreground">
                                Success Rate
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground">
                        Success rate reflects delivered dispatches for this vehicle
                    </CardFooter>
                </Card>

                {/* Assigned Driver */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Assigned Driver</CardTitle>
                            <CardDescription>
                                Current driver for this vehicle
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {vehicle.driver ? (
                            <div className="flex items-center gap-3 rounded-lg border p-4">
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>DR</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">
                                        {vehicle.driver.fullName}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {vehicle.driver.status}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 rounded-lg border p-4">
                                <Avatar className="size-10">
                                    <AvatarFallback>-</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">
                                        Unassigned
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        No driver linked yet
                                    </p>
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={openDialog}>
                            <UserPlus className="mr-1 size-4" /> Change Driver
                        </Button>
                    </CardFooter>
                </Card>

                {/* Attach Driver Dialog */}
                <VehicleAttachDriverDialog
                    isOpen={isOpenDialog}
                    setIsOpen={setIsOpenDialog}
                />

                {/* Insurance Card */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="size-4 text-blue-800" />
                            <CardTitle className="text-base">
                                Insurance Policies ({insurances.length})
                            </CardTitle>
                        </div>
                        <div className="flex items-center gap-1">
                            <ShieldCheck
                                className={`size-4 ${activeInsurance ? 'text-emerald-600' : 'text-muted-foreground'}`}
                            />
                            <AddInsuranceModal vendorId={vendorId} vehicleId={vehicle.id} />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {activeInsurance ? (
                            <>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Provider
                                    </span>
                                    <span className="font-medium">
                                        {activeInsurance.providerName}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Policy #
                                    </span>
                                    <span className="font-medium">
                                        {activeInsurance.policyNumber}
                                    </span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Valid Period
                                    </span>
                                    <span className="font-medium">
                                        {activeInsurance.startDate} – {activeInsurance.endDate}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <p className="py-4 text-center text-sm text-muted-foreground">
                                No insurance policy on file
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* Registration Card */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileWarning className="size-4 text-blue-800" />
                            <CardTitle className="text-base">
                                Registrations ({registrations.length})
                            </CardTitle>
                        </div>
                        <AddRegistrationModal vendorId={vendorId} vehicleId={vehicle.id} />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {activeRegistration ? (
                            <>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        CR #
                                    </span>
                                    <span className="font-medium">
                                        {activeRegistration.crNumber}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        OR #
                                    </span>
                                    <span className="font-medium">
                                        {activeRegistration.orNumber}
                                    </span>
                                </div>
                                {activeRegistration.ltfrbDate && (
                                    <>
                                        <Separator className="my-2" />
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">
                                                LTFRB Date
                                            </span>
                                            <span className="font-medium">
                                                {activeRegistration.ltfrbDate}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <p className="py-4 text-center text-sm text-muted-foreground">
                                No registration on file
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* Driver History */}
                <Card>
                    <CardHeader>
                        <CardTitle>Driver History</CardTitle>
                        <CardDescription>
                            Past drivers assigned to this truck
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        {history.length > 0 ? (
                            <ScrollArea className="max-h-85">
                                {history.map((driverHistory, index) => (
                                    <VehicleDriverHistoryItem
                                        key={index}
                                        driverHistory={driverHistory}
                                    />
                                ))}
                            </ScrollArea>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
                                <Avatar className="size-9 opacity-40">
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                                <p className="text-sm font-medium">
                                    No history yet
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Assignments will appear here once set up
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Show;
