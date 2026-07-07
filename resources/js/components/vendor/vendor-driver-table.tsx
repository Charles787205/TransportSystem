import {
    Table,
    TableCaption,
    TableRow,
    TableHead,
    TableCell,
    TableHeader,
    TableBody,
} from '@/components/ui/table';
import { Badge } from '../ui/badge';
import { DriverData } from '@/generated/Vendor';

const VendorDriverTable = ({ drivers }: { drivers: DriverData[] }) => {
    if (drivers.length == 0) {
        return <p className="text-gray-500">No Drivers added yet</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact Number</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {drivers.map((driver) => (
                    <TableRow>
                        <TableCell>{driver.fullName}</TableCell>
                        <TableCell>{driver.phoneNumber}</TableCell>
                        <TableCell>
                            <Badge>{driver.status}</Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default VendorDriverTable;
