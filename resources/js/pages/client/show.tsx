import { Head, Link, router } from '@inertiajs/react';
import {
    Mail,
    Phone,
    Calendar,
    Pencil,
    Truck,
    ClipboardList,
    BarChart3,
    MapPin,
} from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import CreateLocationModal from '@/components/client/create-location-modal';
import type { ClientData, PaginatedLocationData } from '@/generated/Client';
import type { DispatchData } from '@/generated/DispatchOperation';
import type { PaginatedPlanData } from '@/generated/Planning';
import { index } from '@/routes/client';

const getInitials = (name: string) =>
    name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

const Show = ({
    client,
    locations,
    plans,
    dispatches,
}: {
    client: ClientData;
    locations?: PaginatedLocationData;
    plans?: PaginatedPlanData;
    dispatches?: DispatchData[];
}) => {
    const handlePageChange = (url: string | null) => {
        if (url) {
            router.get(url, {}, { preserveState: true });
        }
    };

    return (
        <>
            <Head title={client.name} />

            <div className="space-y-6 p-6">
                {/* Header */}
                <Card>
                    <CardContent className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href={index().url} className="cursor-pointer hover:scale-105">
                                <ArrowLeft />
                            </Link>
                            <Avatar className="size-14">
                                <AvatarFallback className="text-lg font-medium">
                                    {getInitials(client.name)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-semibold">
                                        {client.name}
                                    </h1>
                                    <Badge
                                        variant={
                                            client.active
                                                ? 'default'
                                                : 'secondary'
                                        }
                                    >
                                        {client.active ? 'Active' : 'Inactive'}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Client since{' '}
                                    {new Date(
                                        client.createdAt,
                                    ).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                                <Pencil className="size-4" />
                                Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                                Set Inactive
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <Mail className="size-4 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Email
                                    </p>
                                    <p className="text-sm font-medium">
                                        {client.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <Phone className="size-4 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Phone
                                    </p>
                                    <p className="text-sm font-medium">
                                        {client.phoneNumber}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <Calendar className="size-4 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Client ID
                                    </p>
                                    <p className="text-sm font-medium">
                                        #{client.id}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Separator />

                {/* Locations Card */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            Client Locations
                        </CardTitle>
                        <CreateLocationModal clientId={client.id} />
                    </CardHeader>
                    <CardContent>
                        {locations?.data && locations.data.length > 0 ? (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    {locations.data.map((location) => (
                                        <div
                                            key={location.id}
                                            className="flex items-center justify-between rounded-md border p-3"
                                        >
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium">
                                                        {location.name}
                                                    </p>
                                                    {location.type && (
                                                        <Badge variant="outline">
                                                            {location.type}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {[location.touchpoint, location.address]
                                                        .filter(Boolean)
                                                        .join(' • ') || 'No extra address details'}
                                                </p>
                                            </div>
                                            <Badge
                                                variant={
                                                    location.active
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {location.active ? 'Active' : 'Inactive'}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>

                                {locations.lastPage > 1 && (
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-muted-foreground">
                                            Showing {locations.from ?? 0}–{locations.to ?? 0} of {locations.total}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {locations.links.map((link, index) => (
                                                <Button
                                                    key={`${link.label}-${index}`}
                                                    variant={link.active ? 'default' : 'outline'}
                                                    size="sm"
                                                    disabled={!link.url}
                                                    onClick={() => handlePageChange(link.url)}
                                                >
                                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                <MapPin className="size-8 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    No locations recorded for this client yet.
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Plans & Deliveries */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <ClipboardList className="size-4" />
                                Plans
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {plans?.plans && plans.plans.length > 0 ? (
                                <div className="space-y-2">
                                    {plans.plans.map((plan) => (
                                        <div
                                            key={plan.id}
                                            className="flex items-center justify-between rounded-md border p-3"
                                        >
                                            <div>
                                                <p className="font-medium text-sm">
                                                    Dispatch Date: {plan.dispatchDate}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Vehicles: {plan.numberOfVehicles}
                                                </p>
                                            </div>
                                            <Badge variant="outline">
                                                #{plan.id}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                    <ClipboardList className="size-8 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground">
                                        No plans recorded yet for this client.
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Truck className="size-4" />
                                Dispatches / Deliveries
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {dispatches && dispatches.length > 0 ? (
                                <div className="space-y-2">
                                    {dispatches.map((dispatch) => (
                                        <div
                                            key={dispatch.id}
                                            className="flex items-center justify-between rounded-md border p-3"
                                        >
                                            <div>
                                                <p className="font-medium text-sm">
                                                    {dispatch.vehicle?.plateNumber ?? 'Vehicle N/A'} • {dispatch.driver?.fullName ?? 'Driver N/A'}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Date: {dispatch.dispatchDate} | Call: {dispatch.assignedCallTime}
                                                </p>
                                            </div>
                                            <Badge variant="secondary">
                                                {dispatch.serviceType}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                    <Truck className="size-8 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground">
                                        No dispatches recorded yet for this client.
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="size-4" />
                            Delivery Activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-md border border-dashed text-center">
                            <BarChart3 className="size-8 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                                Activity chart will render here once delivery data is available.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Show;