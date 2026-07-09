import { Link, router } from '@inertiajs/react';
import { VehicleData } from '@/generated/Vendor';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Plus, Search } from 'lucide-react';

import { show, destroy, create, edit } from '@/routes/vendor/vehicle';
import { ArrowLeft } from 'lucide-react';
import { show as vendorShow } from '@/routes/vendor';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

interface PaginatedVehicles {
    data: VehicleData[];
    current_page: number;
    last_page: number;
    from: number | null;
    to: number | null;
    total: number;
    links: { url: string | null; label: string; active: boolean }[];
}

interface IndexProps {
    data: PaginatedVehicles;
    vendorId: number;
}

const Index = ({ data, vendorId }: IndexProps) => {
    const vehicles = data.data;

    const handleDelete = (id: number) => {
        if (!confirm('Delete this vehicle? This cannot be undone.')) return;
        router.delete(
            destroy({
                vendor: vendorId,
                vehicle: id,
            }).url,
            { preserveScroll: true },
        );
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex">
                        <Link
                            href={vendorShow(vendorId)}
                            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-gray-100 hover:text-slate-900"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Vehicles
                        </h1>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {data.total} vehicle{data.total === 1 ? '' : 's'}{' '}
                        registered.
                    </p>
                </div>
                <Button asChild>
                    <Link href={create({ vendor: vendorId })}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Vehicle
                    </Link>
                </Button>
            </div>

            <div className="relative max-w-sm">
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search plate number..."
                    className="bg-white pl-8"
                    onChange={(e) =>
                        router.get(
                            `/vendors/${vendorId}/vehicles`,
                            { search: e.target.value },
                            { preserveState: true, replace: true },
                        )
                    }
                />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Plate Number</TableHead>
                                <TableHead>Make</TableHead>
                                <TableHead>Engine No.</TableHead>
                                <TableHead>Chassis No.</TableHead>
                                <TableHead>Year Model</TableHead>
                                <TableHead>Owner</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="w-[50px]" />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vehicles.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={8}
                                        className="h-24 text-center text-muted-foreground"
                                    >
                                        No trucks found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                vehicles.map((vehicle) => (
                                    <TableRow
                                        key={vehicle.chassisNumber}
                                        className="cursor-default"
                                    >
                                        <TableCell className="font-medium">
                                            {vehicle.plateNumber}
                                        </TableCell>
                                        <TableCell>{vehicle.make}</TableCell>
                                        <TableCell>
                                            {vehicle.engineNumber}
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.chassisNumber}
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.yearModel}
                                        </TableCell>
                                        <TableCell>
                                            {vehicle.ownersName}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    vehicle.isActive
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {vehicle.isActive
                                                    ? 'Active'
                                                    : 'Inactive'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={show.url({
                                                                vendor: vendorId,
                                                                vehicle:
                                                                    vehicle.id,
                                                            })}
                                                        >
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={edit.url({
                                                                vendor: vendorId,
                                                                vehicle:
                                                                    vehicle.id,
                                                            })}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className="text-destructive focus:text-destructive"
                                                        onClick={() =>
                                                            handleDelete(
                                                                vehicle.vendorId,
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {data.last_page > 1 && (
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        Showing {data.from ?? 0}–{data.to ?? 0} of {data.total}
                    </p>
                    <div className="flex gap-1">
                        {data.links.map((link, i) => (
                            <Button
                                key={i}
                                variant={link.active ? 'default' : 'outline'}
                                size="sm"
                                disabled={!link.url}
                                onClick={() =>
                                    link.url &&
                                    router.get(
                                        link.url,
                                        {},
                                        { preserveState: true },
                                    )
                                }
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
