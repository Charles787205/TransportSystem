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

        $tripLegData = array_diff_key($data, [
            'cancellation_detail' => true,
            'cancellation_remark' => true,
        ]);

        $tripLeg->update($tripLegData);

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

    public function getTripLegsByBusinessUnitAndDestination(int $businessUnitId, int $destinationId, array $with = [])
    {
        return TripLeg::with($with)
            ->whereHas('dispatch', function ($query) use ($businessUnitId, $destinationId) {
                $query
                    ->where('business_unit_id', $businessUnitId)
                    ->where('destination_id', $destinationId);
            })->get();
    }
}
