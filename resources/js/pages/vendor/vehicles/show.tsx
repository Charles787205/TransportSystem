import { useState, useEffect } from 'react';
import { Link, router } from '@inertiajs/react';
import { VehicleData, VehicleDriverHistory } from '@/generated/Vendor';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area, XAxis, CartesianGrid } from 'recharts';
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
import VehicleAttachDriverDialog from '@/components/vehicle/vehicle-attach-driver-dialog';
import { index } from '@/routes/vendor/vehicle';
import { VehicleDriverHistoryItem } from '@/components/vehicle/vehicle-driver-history-item';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
const dispatchHistory = [
    { month: 'Jan', successRate: 82 },
    { month: 'Feb', successRate: 85 },
    { month: 'Mar', successRate: 79 },
    { month: 'Apr', successRate: 91 },
    { month: 'May', successRate: 88 },
    { month: 'Jun', successRate: 94 },
];
const chartConfig = {
    successRate: {
        label: 'Success Rate',
        color: 'var(--color-blue-800)',
    },
} satisfies ChartConfig;

const Show = ({
    vendorId,
    vehicle,
    history,
}: {
    vendorId: number;
    vehicle: VehicleData;
    history: VehicleDriverHistory[];
}) => {
    const activeInsurance = vehicle.insurances?.[0] ?? null;
    const activeRegistration = vehicle.registrations?.[0] ?? null;

    // Dummy stats — swap for real aggregates once dispatch tracking exists
    const totalTrips = 214;
    const successRate = 91;
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    function openDialog() {
        setIsOpenDialog(true);
        router.reload({
            only: ['drivers'],
            onSuccess: () => {
                console.log('Drivers loaded');
            },
        });
    }

    console.log(history);
    return (
        <div className="space-y-6 p-6">
            {/* Header */}
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
                        <Badge
                            variant={vehicle.isActive ? 'default' : 'secondary'}
                        >
                            {vehicle.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {vehicle.make} · Owned by {vehicle.ownersName}
                    </p>
                </div>
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
                            ['Make', vehicle.make],
                            ['Year Model', vehicle.yearModel],
                            ['Engine Number', vehicle.engineNumber],
                            ['Chassis Number', vehicle.chassisNumber],
                            ["Owner's Name", vehicle.ownersName],
                            ['Registered Address', vehicle.registeredAddress],
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
                            Lifetime dispatch activity
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-start gap-1 rounded-lg border p-4">
                            <Repeat className="size-4 text-muted-foreground" />
                            <p className="text-2xl font-bold">{totalTrips}</p>
                            <p className="text-xs text-muted-foreground">
                                Total Trips
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
                        Success rate reflects on-time, completed dispatch
                        requests
                    </CardFooter>
                </Card>

                {/* Assigned Driver */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Assigned Driver</CardTitle>
                            <CardDescription>
                                Current driver for this truck
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {vehicle.driver ? (
                            <div className="flex items-center gap-3 rounded-lg border p-4">
                                <Avatar className="size-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
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
                                    <AvatarImage src="https://github.com/shadcn.png" />
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
                {/* Attach Driver */}

                <VehicleAttachDriverDialog
                    isOpen={isOpenDialog}
                    setIsOpen={setIsOpenDialog}
                />

                {/* Performance Chart */}
                {/* Performance Chart */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Dispatch Success Rate</CardTitle>
                        <CardDescription>
                            How often this truck shows up when requested, over
                            time
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={chartConfig}
                            className="h-72 w-full"
                        >
                            <AreaChart data={dispatchHistory}>
                                <defs>
                                    <linearGradient
                                        id="successGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="var(--color-successRate)"
                                            stopOpacity={0.35}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="var(--color-successRate)"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={
                                        <ChartTooltipContent indicator="line" />
                                    }
                                />
                                <Area
                                    dataKey="successRate"
                                    type="monotone"
                                    stroke="var(--color-successRate)"
                                    strokeWidth={2}
                                    fill="url(#successGradient)"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="text-xs text-muted-foreground">
                        Dummy data shown — connect to real dispatch history when
                        available
                    </CardFooter>
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

                {/* Insurance */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="size-4 text-blue-800" />
                            <CardTitle className="text-base">
                                Insurance
                            </CardTitle>
                        </div>
                        <ShieldCheck
                            className={`size-4 ${activeInsurance ? 'text-emerald-600' : 'text-muted-foreground'}`}
                        />
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
                                        Valid
                                    </span>
                                    <span className="font-medium">
                                        {activeInsurance.startDate} –{' '}
                                        {activeInsurance.endDate}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <p className="py-4 text-center text-sm text-muted-foreground">
                                No insurance on file
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* Registration */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FileWarning className="size-4 text-blue-800" />
                            <CardTitle className="text-base">
                                Registration
                            </CardTitle>
                        </div>
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
                        ) : (
                            <p className="py-4 text-center text-sm text-muted-foreground">
                                No registration on file
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Show;
