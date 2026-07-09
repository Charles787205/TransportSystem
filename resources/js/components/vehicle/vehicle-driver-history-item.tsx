import { BadgeCheckIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item';
import { VehicleDriverHistory } from '@/generated/Vendor';
import { ArrowRight } from 'lucide-react';
export function VehicleDriverHistoryItem({
    driverHistory,
}: {
    driverHistory: VehicleDriverHistory;
}) {
    return (
        <Item variant="outline" className="mb-2 bg-white shadow-lg">
            <ItemContent>
                <ItemTitle>New driver: {driverHistory.newDriver}</ItemTitle>
                <ItemDescription className="flex flex-col">
                    <span className="flex items-center gap-2 text-xs">
                        {driverHistory.oldDriver}{' '}
                        <ArrowRight width={50} height={15} />{' '}
                        {driverHistory.newDriver}
                    </span>
                    <span className="text-xs">
                        Changed by: {driverHistory.changedBy}
                    </span>
                    <span className="text-xs">{driverHistory.changedAt}</span>
                </ItemDescription>
            </ItemContent>
        </Item>
    );
}
