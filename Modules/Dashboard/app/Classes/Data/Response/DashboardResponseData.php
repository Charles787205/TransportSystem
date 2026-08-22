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

        #[TypeScriptType('TopDestinationItemData[]')]
        #[DataCollectionOf(TopDestinationItemData::class)]
        public DataCollection $topDestinations,

        #[TypeScriptType('ClientDispatchItemData[]')]
        #[DataCollectionOf(ClientDispatchItemData::class)]
        public DataCollection $dispatchesByClient,

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
