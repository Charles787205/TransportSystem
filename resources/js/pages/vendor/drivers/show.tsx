import { Head, Link, router, useForm } from '@inertiajs/react';
import {
    ArrowLeft,
    UserCheck,
    Calendar,
    Phone,
    MapPin,
    CreditCard,
    Shield,
    Truck,
    User,
    CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import type { DriverData, DriverStatusEnum } from '@/generated/Vendor';
import { update } from '@/routes/vendor/driver';
import { show as showVehicle } from '@/routes/vendor/vehicle';

type ShowDriverProps = {
    vendorId: number;
    driver: DriverData;
    statuses: DriverStatusEnum[];
};

export const getDriverStatusBadgeVariant = (
    status: string
): 'default' | 'secondary' | 'outline' | 'destructive' => {
    switch (status) {
        case 'Active':
            return 'default';
        case 'Inactive':
        case 'Resigned':
        case 'Deactivated':
        case 'Back-out':
            return 'secondary';
        case 'Suspended Stuck-Up':
            return 'destructive';
        default:
            return 'outline';
    }
};

export const getDriverStatusBadgeStyle = (status: string) => {
    switch (status) {
        case 'Active':
            return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200';
        case 'Inactive':
            return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200';
        case 'Resigned':
        case 'Deactivated':
        case 'Back-out':
            return 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200';
        case 'Suspended Stuck-Up':
            return 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-200';
        case 'For Account Creation':
        case 'For Modification':
        case 'Under Assesment':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200';
        case 'Temporary Stop Hiring':
            return 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border-orange-200';
        default:
            return '';
    }
};

const ShowDriver = ({ vendorId, driver, statuses }: ShowDriverProps) => {
    const { data, setData, patch, processing } = useForm({
        status: driver.status,
    });

    const handleStatusChange = (newStatus: string) => {
        setData('status', newStatus);
        router.patch(
            update({ vendor: vendorId, driver: driver.id }).url,
            { status: newStatus },
            {
                preserveScroll: true,
            }
        );
    };

    return (
        <div className="space-y-6 p-6">
            <Head title={`Driver - ${driver.fullName}`} />

            {/* Header Navigation & Banner */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href={`/vendors/${vendorId}`}>
                            <ArrowLeft className="size-4" />
                        </Link>
                    </Button>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-blue-800/10 text-blue-800">
                        <User className="size-5" />
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {driver.fullName}
                            </h1>
                            <Badge
                                variant={getDriverStatusBadgeVariant(driver.status)}
                                className={getDriverStatusBadgeStyle(driver.status)}
                            >
                                {driver.status}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            ID: {driver.driverIdNumber || '—'} · Gender: {driver.gender}
                        </p>
                    </div>
                </div>

                {/* Quick Status Control */}
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">
                        Change Status:
                    </span>
                    <Select
                        value={data.status}
                        onValueChange={handleStatusChange}
                        disabled={processing}
                    >
                        <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            {statuses.map((status) => (
                                <SelectItem key={status} value={status}>
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Personal Information */}
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <UserCheck className="size-4 text-blue-800" />
                            Personal Details
                        </CardTitle>
                        <CardDescription>
                            Identity and contact information
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <User className="size-3.5" /> Full Name
                            </span>
                            <span className="font-medium text-right">{driver.fullName}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <Calendar className="size-3.5" /> Birthday
                            </span>
                            <span className="font-medium">{driver.birthday || '—'}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <Phone className="size-3.5" /> Phone Number
                            </span>
                            <span className="font-medium">{driver.phoneNumber}</span>
                        </div>
                        <Separator />
                        <div className="flex flex-col gap-1 text-sm">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <MapPin className="size-3.5" /> Address
                            </span>
                            <span className="font-medium pl-5 text-slate-900">{driver.address || '—'}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* License Information */}
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <CreditCard className="size-4 text-blue-800" />
                            License Credentials
                        </CardTitle>
                        <CardDescription>
                            Professional driver permit status
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">License Number</span>
                            <span className="font-mono font-medium">{driver.licenseNumber || '—'}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Expiry Date</span>
                            <span className="font-medium">{driver.licenseExpiryDate || '—'}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Status</span>
                            <Badge variant="outline" className="gap-1">
                                {driver.licenseNumber ? (
                                    <>
                                        <CheckCircle2 className="size-3 text-emerald-600" /> Valid
                                    </>
                                ) : (
                                    'Not Provided'
                                )}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Assigned Vehicle */}
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Truck className="size-4 text-blue-800" />
                            Assigned Truck
                        </CardTitle>
                        <CardDescription>
                            Current vehicle operating assignment
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {driver.vehicle ? (
                            <div className="flex flex-col gap-3 rounded-lg border p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {driver.vehicle.plateNumber}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {driver.vehicle.make} {driver.vehicle.yearModel ? `· ${driver.vehicle.yearModel}` : ''}
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={showVehicle({ vendor: vendorId, vehicle: driver.vehicle.id }).url}>
                                            View Truck
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-6 text-center text-muted-foreground">
                                <Truck className="size-8 opacity-30 mb-2" />
                                <p className="text-sm font-medium">No vehicle assigned</p>
                                <p className="text-xs">Driver is currently not linked to a truck</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Emergency Contact */}
                {driver.emergencyContact && (
                    <Card className="lg:col-span-3">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Shield className="size-4 text-blue-800" />
                                Emergency Contact Person
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex justify-between text-sm rounded-lg border p-3">
                                <span className="text-muted-foreground">Contact Name</span>
                                <span className="font-medium">{driver.emergencyContact.fullName}</span>
                            </div>
                            <div className="flex justify-between text-sm rounded-lg border p-3">
                                <span className="text-muted-foreground">Contact Phone</span>
                                <span className="font-medium">{driver.emergencyContact.phoneNumber}</span>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default ShowDriver;
