import type { PlanWithBUandDestination } from './PlanWithBUandDestination';
import type { PaginatedLink } from '../Core/PaginatedLink';
export type PaginatedPlanData = {
    plans: PlanWithBUandDestination[];
    currentPage: number;
    lastPage: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginatedLink[];
};
