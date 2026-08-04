<?php

namespace Modules\Planning\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Client\Models\BusinessUnit;
use Modules\Client\Models\Destination;
use Modules\Planning\Models\Plan;

class PlanningDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $businessUnit = BusinessUnit::first();
        $destination = Destination::first();

        if ($businessUnit && $destination) {
            Plan::create([
                'business_unit_id' => $businessUnit->id,
                'destination_id' => $destination->id,
                'number_of_vehicles' => 3,
                'dispatch_date' => '2026-08-10',
            ]);

            Plan::create([
                'business_unit_id' => $businessUnit->id,
                'destination_id' => $destination->id,
                'number_of_vehicles' => 5,
                'dispatch_date' => '2026-08-11',
            ]);
        }
    }
}
