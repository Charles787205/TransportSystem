<?php

namespace Modules\DispatchOperation\Classes\Data\Request;

use Spatie\LaravelData\Data;

class CreateTripRemarkData extends Data
{
    public function __construct(
        public int $tripLegId,
        public string $remark,
        public ?int $locationId = null,
    ) {}

    public static function rules(): array
    {
        return [
            'trip_leg_id' => ['required', 'exists:trip_legs,id'],
            'remark' => ['required', 'string', 'max:1000'],
            'location_id' => ['nullable', 'exists:locations,id'],
        ];
    }
}
