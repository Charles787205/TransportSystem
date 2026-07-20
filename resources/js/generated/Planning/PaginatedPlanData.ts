import type { PlanWithBUandDestinationData } from './PlanWithBUandDestinationData';
import type { PaginatedLink } from '../Core/PaginatedLink';
export type PaginatedPlanData = {
    plans: PlanWithBUandDestinationData[];
    currentPage: number;
    lastPage: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginatedLink[];
};
