import type { BusinessUnitData } from '../Client/BusinessUnitData';
import type { DestinationData } from '../Client/DestinationData';
export type PlanWithBUandDestination = {
    id: number;
    businessUnit: BusinessUnitData;
    destination: DestinationData;
    dispatchData: string;
};
