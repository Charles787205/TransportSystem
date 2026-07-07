import { VendorVehicleData } from '@/generated/Vendor';
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
                    <TableHead>Owner</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
        </Table>
    );
};

export default VendorVehiclesTable;
