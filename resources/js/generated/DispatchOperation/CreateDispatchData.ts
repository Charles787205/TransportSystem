import type { ServiceType } from './ServiceType';
export type CreateDispatchData = {
    vehicleId: number;
    driverId: number;
    businessUnitId: number;
    destinationId: number;
    serviceType: ServiceType;
    dispatchDate: string;
    assignedCallTime: string;
    linehaulTripNo: number;
    odometerStart: number;
    odometerEnd: number | null;
};
