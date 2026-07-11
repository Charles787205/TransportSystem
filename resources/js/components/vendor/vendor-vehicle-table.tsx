import type { VendorVehicleData } from '@/generated/Vendor';
import { Badge } from '../ui/badge';
import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableCell,
    TableRow,
} from '../ui/table';
const VendorVehiclesTable = ({
    vehicles,
}: {
    vehicles: VendorVehicleData[];
}) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Plate Number</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Make</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {vehicles.map((vehicle, index) => (
                    <TableRow key={index}>
                        <TableCell>{vehicle.plateNumber}</TableCell>
                        <TableCell>{vehicle.type}</TableCell>
                        <TableCell>{vehicle.make}</TableCell>
                        <TableCell>
                            <Badge
                                className={`${vehicle.isActive ? 'bg-green-500' : 'bg-red-500'}`}
                            >
                                {vehicle.isActive ? 'active' : 'in active'}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default VendorVehiclesTable;
