import type { BusinessUnitData } from './BusinessUnitData';
import type { PaginatedLink } from '../Core/PaginatedLink';
export type PaginatedBusinessUnitData = {
    data: BusinessUnitData[];
    currentPage: number;
    lastPage: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginatedLink[];
};
