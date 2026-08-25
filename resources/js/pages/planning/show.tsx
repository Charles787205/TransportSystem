import { format } from 'date-fns';
import { Route, Truck, MapPin, Calendar, ArrowLeft, Plus } from 'lucide-react';
import { Link } from '@inertiajs/react';
import CreateDispatchModal from '@/components/dispatchoperation/create-dispatch-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
import type { PlanData } from '@/generated/Planning';
import { index } from '@/routes/planning';

const PlanningDetailPage = ({
    plan,
    dispatches = [],
    tripLegs = [],
}: {
    plan: PlanData;
    dispatches?: DispatchData[];
    tripLegs?: TripLegData[];
}) => {
    const requiredCount = plan.numberOfVehicles;
    const dispatchedCount = dispatches.length;
    const fulfilled = dispatchedCount >= requiredCount;
    const progressPct = requiredCount
        ? Math.min((dispatchedCount / requiredCount) * 100, 100)
        : 0;

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <Card>
                <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                        <Link href={index().url} className="cursor-pointer hover:scale-105">
                            <ArrowLeft className="size-5" />
                        </Link>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl font-semibold">
                                    Plan #{plan.id} — {plan.client?.name ?? `Client #${plan.clientId}`}
                                </h1>
                                <Badge
                                    variant={fulfilled ? 'default' : 'secondary'}
                                    className={fulfilled ? 'bg-blue-800' : ''}
                                >
                                    {fulfilled ? 'Fully Dispatched' : 'Pending Capacity'}
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Scheduled for{' '}
                                {new Date(plan.dispatchDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-2xl font-bold">{dispatchedCount} / {requiredCount}</p>
                            <p className="text-xs text-muted-foreground">Vehicles Dispatched</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Capacity Progress */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-sm font-medium">Capacity Fulfillment Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Progress value={progressPct} className="h-2.5" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{progressPct.toFixed(0)}% fulfilled</span>
                        <span>{requiredCount - dispatchedCount > 0 ? `${requiredCount - dispatchedCount} more vehicles required` : 'Target reached'}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Route Info */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm font-medium">
                            <MapPin className="size-4 text-muted-foreground" />
                            Origin Location
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-base font-semibold">{plan.origin?.name ?? `Location #${plan.originId}`}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                            {[plan.origin?.touchpoint, plan.origin?.type, plan.origin?.address].filter(Boolean).join(' • ') || 'No extra address details'}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-sm font-medium">
                            <MapPin className="size-4 text-muted-foreground" />
                            Destination Location
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-base font-semibold">{plan.destination?.name ?? `Location #${plan.destinationId}`}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                            {[plan.destination?.touchpoint, plan.destination?.type, plan.destination?.address].filter(Boolean).join(' • ') || 'No extra address details'}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Dispatches Table */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="flex items-center gap-2">
                        <Truck className="size-4" />
                        Dispatches Assigned To This Plan
                    </CardTitle>
                    <CreateDispatchModal
                        defaultValues={{
                            clientId: plan.clientId,
                            originLocationId: plan.originId,
                            destinationLocationId: plan.destinationId,
                            dispatchDate: plan.dispatchDate,
                        }}
                        lockFields={true}
                        trigger={
                            <Button className="bg-blue-800 text-white hover:bg-blue-900">
                                <Plus className="mr-2 h-4 w-4" />
                                Add Dispatch
                            </Button>
                        }
                    />
                </CardHeader>
                <CardContent>
                    {dispatches.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                            <Truck className="size-8 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                                No dispatches assigned for this client on {plan.dispatchDate} yet.
                            </p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Dispatch #</TableHead>
                                    <TableHead>Vehicle</TableHead>
                                    <TableHead>Driver</TableHead>
                                    <TableHead>Call Time</TableHead>
                                    <TableHead>Service Type</TableHead>
                                    <TableHead>Trip Legs</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dispatches.map((dispatchItem) => (
                                    <TableRow key={dispatchItem.id}>
                                        <TableCell className="font-semibold">
                                            <Link
                                                href={`/dispatchoperations/${dispatchItem.id}`}
                                                className="text-blue-600 hover:underline font-mono"
                                            >
                                                #{dispatchItem.id}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {dispatchItem.vehicle?.plateNumber ?? 'Vehicle N/A'}
                                        </TableCell>
                                        <TableCell>{dispatchItem.driver?.fullName ?? 'Driver N/A'}</TableCell>
                                        <TableCell>{dispatchItem.assignedCallTime}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="capitalize">{dispatchItem.serviceType}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            {dispatchItem.tripLegs?.length ?? 0} leg(s)
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Link
                                                href={`/dispatchoperations/${dispatchItem.id}`}
                                                className="inline-flex items-center justify-center rounded-md text-xs font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                                            >
                                                View Dispatch
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default PlanningDetailPage;
