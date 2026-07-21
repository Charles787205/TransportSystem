import type { DispatchData } from './DispatchData';
import type { PaginatedLink } from '../Core/PaginatedLink';
export type PaginatedDispatchData = {
    data: DispatchData[];
    currentPage: number;
    lastPage: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginatedLink[];
};
