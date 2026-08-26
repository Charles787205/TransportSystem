import { Link, router } from '@inertiajs/react';
import { Eye, Plus, Search, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { DriverData } from '@/generated/Vendor';
import { show as vendorShow } from '@/routes/vendor';
import { show } from '@/routes/vendor/driver';
import { useState } from 'react';
import VendorAddDriver from '@/components/vendor/vendor-add-driver';

interface PaginatedDrivers {
    data: DriverData[];
    current_page: number;
    last_page: number;
    from: number | null;
    to: number | null;
    total: number;
    links: { url: string | null; label: string; active: boolean }[];
}

interface IndexProps {
    data: PaginatedDrivers;
    vendorId: number;
}

const Index = ({ data, vendorId }: IndexProps) => {
    const drivers = data.data;
    const [openAddDriverModal, setOpenAddDriverModal] = useState(false);

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <Link
                            href={vendorShow(vendorId)}
                            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-gray-100 hover:text-slate-900"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Drivers
                        </h1>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {data.total} driver{data.total === 1 ? '' : 's'} registered.
                    </p>
                </div>
                <Button onClick={() => setOpenAddDriverModal(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Driver
                </Button>
            </div>

            <VendorAddDriver
                open={openAddDriverModal}
                setOpen={setOpenAddDriverModal}
                vendorId={vendorId}
            />

            <div className="relative max-w-sm">
                <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search driver name, ID, license..."
                    className="bg-white pl-8"
                    onChange={(e) =>
                        router.get(
                            `/vendors/${vendorId}/drivers`,
                            { search: e.target.value },
                            { preserveState: true, replace: true },
                        )
                    }
                />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Drivers</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID Number</TableHead>
                                <TableHead>Full Name</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>License Number</TableHead>
                                <TableHead>License Expiry</TableHead>
                                <TableHead>Assigned Vehicle</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="w-[50px]" />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {drivers.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={8}
                                        className="h-24 text-center text-muted-foreground"
                                    >
                                        No drivers found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                drivers.map((driver) => (
                                    <TableRow
                                        key={driver.id}
                                        className="cursor-default"
                                    >
                                        <TableCell className="font-medium">
                                            {driver.driverIdNumber}
                                        </TableCell>
                                        <TableCell>{driver.fullName}</TableCell>
                                        <TableCell>{driver.phoneNumber || '—'}</TableCell>
                                        <TableCell>{driver.licenseNumber || '—'}</TableCell>
                                        <TableCell>{driver.licenseExpiryDate || '—'}</TableCell>
                                        <TableCell>
                                            {driver.vehicle
                                                ? driver.vehicle.plateNumber
                                                : 'Unassigned'}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    driver.status === 'Active' || driver.status === 'active'
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {driver.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                asChild
                                            >
                                                <Link
                                                    href={show.url([vendorId, driver.id])}
                                                >
                                                    <Eye className="mr-1 h-4 w-4" />
                                                    View
                                                </Link>
                                            </Button>
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
