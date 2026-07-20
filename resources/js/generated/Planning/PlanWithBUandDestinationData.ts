import type { BusinessUnitData } from '../Client/BusinessUnitData';
import type { DestinationData } from '../Client/DestinationData';
export type PlanWithBUandDestinationData = {
    id: number;
    businessUnit: BusinessUnitData;
    destination: DestinationData;
    dispatchDate: string;
    numberOfVehicles: number;
};
