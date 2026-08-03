<?php

namespace Modules\DispatchOperation\Classes\Data;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\TypeScriptTransformer\Attributes\Optional as AttributesOptional;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]

class EditTripLegData extends Data
{
    public function __construct(
        #[AttributesOptional]
        public int|Optional|null $totalParcel,
        #[AttributesOptional]
        public float|Optional|null $odometerStart,
        #[AttributesOptional]
        public float|Optional|null $odometerEnd,
        #[AttributesOptional]
        public string|Optional|null $departureTime,
        #[AttributesOptional]
        public string|Optional|null $endTime,
        #[AttributesOptional]
        public string|Optional|null $arrivedTime,
        #[AttributesOptional]
        public string|Optional|null $status,
        #[AttributesOptional]
        public string|Optional|null $cancellationDetail,
        #[AttributesOptional]
        public string|Optional|null $cancellationRemark,
    ) {}

    public static function rules(): array
    {
        return [
            'cancellation_detail' => ['required_if:status,cancelled', 'nullable', 'string'],
            'cancellation_remark' => ['nullable', 'string'],
        ];
    }

    public function toModelAttributes()
    {
        return array_filter([

            'total_parcel' => $this->totalParcel,
            'odometer_start' => $this->odometerStart,
            'odometer_end' => $this->odometerEnd,
            'departure_time' => $this->departureTime,
            'end_time' => $this->endTime,
            'arrived_time' => $this->arrivedTime,
            'status' => $this->status,
            'cancellation_detail' => $this->cancellationDetail,
            'cancellation_remark' => $this->cancellationRemark,
        ], fn ($value) => ! $value instanceof Optional);
    }
}
