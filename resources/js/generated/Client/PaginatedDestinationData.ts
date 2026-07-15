import type { DestinationData } from './DestinationData';
import type { PaginatedLink } from '../Core/PaginatedLink';
export type PaginatedDestinationData = {
    data: DestinationData[];
    currentPage: number;
    lastPage: number;
    from: number | null;
    to: number | null;
    total: number;
    links: PaginatedLink[];
};
