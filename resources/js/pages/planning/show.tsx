import { format } from 'date-fns';
import { Route, Truck, MapPin, Calendar, User } from 'lucide-react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts';

import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import type { DispatchData, TripLegData } from '@/generated/DispatchOperation';
import type { PlanWithBUandDestinationData } from '@/generated/Planning';

const chartConfig = {
    count: {
        label: 'Vehicles',
        color: 'hsl(var(--chart-1))',
    },
};

const formatOdometer = (value: number | null) =>
    value === null ? '—' : value.toLocaleString();

const PlanningDetailPage = ({
    plan,
    dispatches,
    tripLegs,
}: {
    plan: PlanWithBUandDestinationData;
    dispatches: DispatchData[];
    tripLegs: TripLegData[];
}) => {
    const requiredCount = plan.numberOfVehicles;
    const dispatchedCount = tripLegs.length;
    const fulfilled = dispatchedCount >= requiredCount;
    const progressPct = requiredCount
        ? Math.min((dispatchedCount / requiredCount) * 100, 100)
        : 0;

    const chartData = [
        { label: 'Required', count: requiredCount },
        { label: 'Dispatched', count: dispatchedCount },
    ];

    // group top-level trip legs by dispatch so each dispatch card
    // shows only its own legs
    const legsByDispatchId = tripLegs.reduce<Record<number, TripLegData[]>>(
        (acc, leg) => {
            (acc[leg.dispatchId] ??= []).push(leg);

            return acc;
        },
        {},
    );

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Plan Detail
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Overview of dispatch coverage for this plan
                    </p>
                </div>
                <Badge
                    variant={fulfilled ? 'default' : 'destructive'}
                    className={fulfilled ? 'bg-blue-800 hover:bg-blue-800' : ''}
                >
                    {fulfilled ? 'Fully Dispatched' : 'Understaffed'}
                </Badge>
            </div>

            {/* Plan overview cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Business Unit
                        </CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg font-semibold">
                            {plan.businessUnit.name}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Destination
                        </CardTitle>
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg font-semibold">
                            {plan.destination.name}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Dispatch Date
                        </CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-lg font-semibold">
                            {format(new Date(plan.dispatchDate), 'PPP')}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Vehicle coverage progress */}
            <Card>
                <CardHeader>
                    <CardTitle>Vehicle Coverage</CardTitle>
                    <CardDescription>
                        {dispatchedCount} of {requiredCount} required trip legs
                        dispatched
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Progress
                        value={progressPct}
                        className={
                            fulfilled
                                ? '[&>div]:bg-blue-800'
                                : '[&>div]:bg-amber-500'
                        }
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{dispatchedCount} dispatched</span>
                        <span>{requiredCount} needed</span>
                    </div>
                </CardContent>
            </Card>

            {/* Chart comparing dispatched vs required */}
            <Card>
                <CardHeader>
                    <CardTitle>Dispatched vs Required</CardTitle>
                    <CardDescription>
                        Trip leg count compared to the required vehicle count
                        for this plan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={chartConfig}
                        className="h-[220px] w-full"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="label"
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    allowDecimals={false}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                />
                                <Bar
                                    dataKey="count"
                                    fill="var(--color-count)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Separator />

            {/* Dispatch list */}
            <Card>
                <CardHeader>
                    <CardTitle>Dispatches</CardTitle>
                    <CardDescription>
                        Vehicles assigned to this business unit and destination,
                        with their trip legs
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {dispatches.length === 0 ? (
                        <p className="py-8 text-center text-sm text-muted-foreground">
                            No dispatches recorded yet for this plan.
                        </p>
                    ) : (
                        dispatches.map((dispatch) => (
                            <DispatchRow
                                key={dispatch.id}
                                dispatch={dispatch}
                                legs={legsByDispatchId[dispatch.id] ?? []}
                            />
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

const DispatchRow = ({
    dispatch,
    legs,
}: {
    dispatch: DispatchData;
    legs: TripLegData[];
}) => {
    const sortedLegs = [...legs].sort(
        (a, b) => a.tripSequence - b.tripSequence,
    );

    return (
        <div className="rounded-lg border">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/40 px-4 py-3">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1.5 font-medium">
                        <Truck className="h-3.5 w-3.5 text-muted-foreground" />
                        {dispatch.vehicle?.plateNumber ??
                            `#${dispatch.vehicleId}`}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <User className="h-3.5 w-3.5" />
                        {dispatch.driver?.fullName ?? `#${dispatch.driverId}`}
                    </div>
                    <Badge variant="secondary">{dispatch.serviceType}</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>Call time: {dispatch.assignedCallTime}</span>
                    <span>
                        Odometer: {formatOdometer(dispatch.odometerStart)} /{' '}
                        {formatOdometer(dispatch.odometerEnd)}
                    </span>
                </div>
            </div>

            {sortedLegs.length === 0 ? (
                <p className="px-4 py-4 text-sm text-muted-foreground">
                    No trip legs recorded for this dispatch yet.
                </p>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-16">Seq</TableHead>
                            <TableHead>Trip No.</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Departure</TableHead>
                            <TableHead>Arrived</TableHead>
                            <TableHead>End</TableHead>
                            <TableHead className="text-right">
                                Parcels
                            </TableHead>
                            <TableHead className="text-right">
                                Odometer (Start / End)
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedLegs.map((leg) => (
                            <TableRow key={leg.id}>
                                <TableCell>{leg.tripSequence}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1.5">
                                        <Route className="h-3.5 w-3.5 text-muted-foreground" />
                                        {leg.linehaulTripNo}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">
                                        {leg.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {leg.departureTime ?? '—'}
                                </TableCell>
                                <TableCell>{leg.arrivedTime ?? '—'}</TableCell>
                                <TableCell>{leg.endTime ?? '—'}</TableCell>
                                <TableCell className="text-right">
                                    {leg.totalParcel ?? '—'}
                                </TableCell>
                                <TableCell className="text-right">
                                    {formatOdometer(leg.odometerStart)} /{' '}
                                    {formatOdometer(leg.odometerEnd)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default PlanningDetailPage;
