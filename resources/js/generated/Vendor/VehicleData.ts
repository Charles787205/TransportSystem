import type { InsuranceData } from './InsuranceData';
import type { DriverData } from './DriverData';
export type VehicleData = {
    readonly id: number;
    readonly vendorId: number;
    readonly driverId: number | null;
    readonly plateNumber: string;
    readonly make: string;
    readonly engineNumber: string;
    readonly chassisNumber: string;
    readonly yearModel: string;
    readonly ownersName: string;
    readonly registeredAddress: string;
    readonly isActive: boolean;
    readonly insurances: InsuranceData[];
    readonly registrations: Array<any> | null;
    driver: DriverData | null;
};
