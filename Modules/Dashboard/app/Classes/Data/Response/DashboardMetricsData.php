<?php

namespace Modules\Dashboard\Classes\Data\Response;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DashboardMetricsData extends Data
{
    public function __construct(
        public int $plans,
        public int $dispatches,
        public int $vendors,
        public int $drivers,
        public int $vehicles,
        public int $clients,
    ) {}
}
