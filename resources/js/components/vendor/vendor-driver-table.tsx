import { Link } from '@inertiajs/react';
import {
    Table,
    TableRow,
    TableHead,
    TableCell,
    TableHeader,
    TableBody,
} from '@/components/ui/table';
import type { DriverData } from '@/generated/Vendor';
import {
    getDriverStatusBadgeStyle,
    getDriverStatusBadgeVariant,
} from '@/pages/vendor/drivers/show';
import { show } from '@/routes/vendor/driver';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const VendorDriverTable = ({ drivers }: { drivers: DriverData[] }) => {
    if (!drivers || drivers.length === 0) {
        return (
            <p className="py-4 text-center text-gray-500">
                No Drivers added yet
            </p>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Driver ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {drivers.map((driver) => (
                    <TableRow key={driver.id}>
                        <TableCell className="font-mono text-xs">
                            {driver.driverIdNumber || '—'}
                        </TableCell>
                        <TableCell className="font-medium">
                            {driver?.id && driver?.vendorId ? (
                                <Link
                                    href={
                                        show({
                                            vendor: driver.vendorId,
                                            driver: driver.id,
                                        }).url
                                    }
                                    className="text-blue-700 hover:underline"
                                >
                                    {driver.fullName}
                                </Link>
                            ) : (
                                driver.fullName
                            )}
                        </TableCell>
                        <TableCell>{driver.phoneNumber}</TableCell>
                        <TableCell>
                            <Badge
                                variant={getDriverStatusBadgeVariant(
                                    driver.status,
                                )}
                                className={getDriverStatusBadgeStyle(
                                    driver.status,
                                )}
                            >
                                {driver.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            {driver?.id && driver?.vendorId && (
                                <Button variant="ghost" size="sm" asChild>
                                    <Link
                                        href={
                                            show({
                                                vendor: driver.vendorId,
                                                driver: driver.id,
                                            }).url
                                        }
                                    >
                                        View
                                    </Link>
                                </Button>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default VendorDriverTable;
