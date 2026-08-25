<?php

namespace Modules\DispatchOperation\Repositories;

use Modules\DispatchOperation\Models\TripLeg;

class TripLegRepository
{
    public function createTripLeg(array $data)
    {
        return TripLeg::create($data)->refresh();
    }

    public function editTripLeg(array $data, int $id): TripLeg
    {
        $tripLeg = TripLeg::findOrFail($id);

        $cancellationDetail = $data['cancellation_detail'] ?? null;
        $cancellationRemark = $data['cancellation_remark'] ?? null;

        $cargoTypes = ['per_parcel', 'per_box', 'loose_items', 'by_weight'];
        $cargoInputs = [
            'per_parcel' => $data['cargo_parcel'] ?? null,
            'per_box' => $data['cargo_box'] ?? null,
            'loose_items' => $data['cargo_loose'] ?? null,
            'by_weight' => $data['cargo_weight'] ?? null,
        ];

        $tripLegData = array_diff_key($data, [
            'cancellation_detail' => true,
            'cancellation_remark' => true,
            'cargo_parcel' => true,
            'cargo_box' => true,
            'cargo_loose' => true,
            'cargo_weight' => true,
        ]);

        $tripLeg->update($tripLegData);

        foreach ($cargoInputs as $type => $qty) {
            if ($qty !== null && $qty !== '') {
                $tripLeg->cargoes()->updateOrCreate(
                    ['cargo_type' => $type],
                    ['quantity' => (float) $qty]
                );
            }
        }

        if ($tripLeg->status->value === 'cancelled' && $cancellationDetail) {
            $tripLeg->cancellationDetail()->updateOrCreate(
                ['trip_leg_id' => $tripLeg->id],
                [
                    'detail' => $cancellationDetail,
                    'remarks' => $cancellationRemark,
                ]
            );
        } else {
            if ($tripLeg->status->value !== 'cancelled') {
                $tripLeg->cancellationDetail()->delete();
            }
        }

        return $tripLeg->refresh();
    }

    public function getTripLegs(array $where = [], array $with = [])
    {
        return TripLeg::with($with)->where($where)->get();
    }

    public function getTripLegsByLocations(int $originId, int $destinationId, array $with = [])
    {
        return TripLeg::with($with)
            ->where('origin_location_id', $originId)
            ->where('destination_location_id', $destinationId)
            ->get();
    }
}
