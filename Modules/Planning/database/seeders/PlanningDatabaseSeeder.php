<?php

namespace Modules\Planning\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Client\Models\Client;
use Modules\Client\Models\Location;
use Modules\Planning\Models\Plan;

class PlanningDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $client = Client::first();
        $locations = Location::limit(2)->get();

        if ($client && $locations->count() >= 1) {
            Plan::create([
                'client_id' => $client->id,
                'origin_id' => $locations[0]->id,
                'number_of_vehicles' => 3,
                'dispatch_date' => '2026-08-10',
            ]);

            Plan::create([
                'client_id' => $client->id,
                'origin_id' => $locations[0]->id,
                'number_of_vehicles' => 5,
                'dispatch_date' => '2026-08-11',
            ]);
        }
    }
}
