<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Modules\Client\Classes\Data\Response\ClientData;
use Modules\Client\Classes\Data\Response\LocationData;
use Modules\Dashboard\Classes\Data\Request\DashboardFilterData;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

#[TypeScript()]
class DashboardResponseData extends Data
{
    public function __construct(
        public DashboardMetricsData $metrics,

        #[TypeScriptType('StatusBreakdownItemData[]')]
        #[DataCollectionOf(StatusBreakdownItemData::class)]
        public DataCollection $statusBreakdown,

        #[TypeScriptType('PlannedVsDispatchedTouchpointItemData[]')]
        #[DataCollectionOf(PlannedVsDispatchedTouchpointItemData::class)]
        public DataCollection $plannedVsDispatchedPerTouchPoint,

        #[TypeScriptType('DispatchesByServiceTypeItemData[]')]
        #[DataCollectionOf(DispatchesByServiceTypeItemData::class)]
        public DataCollection $dispatchesByServiceType,

        #[TypeScriptType('RecentDispatchItemData[]')]
        #[DataCollectionOf(RecentDispatchItemData::class)]
        public DataCollection $recentDispatches,

        public DashboardFilterData $filters,

        #[TypeScriptType('LocationData[]')]
        #[DataCollectionOf(LocationData::class)]
        public DataCollection $locations,

        #[TypeScriptType('ClientData[]')]
        #[DataCollectionOf(ClientData::class)]
        public DataCollection $clients,
    ) {}
}
