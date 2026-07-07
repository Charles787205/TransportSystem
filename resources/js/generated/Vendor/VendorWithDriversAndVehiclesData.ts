export type VendorWithDriversAndVehiclesData = {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly isActive: boolean;
    readonly vehicles: Array<any>;
    readonly drivers: Array<any>;
};
