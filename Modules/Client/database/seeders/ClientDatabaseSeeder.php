<?php

namespace Modules\Client\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Client\Models\Client;

class ClientDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clients = [
            [
                'name' => 'Acme Logistics',
                'email' => 'contact@acme.com',
                'phone_number' => '+1-555-0199',
                'active' => true,
                'business_units' => [
                    ['name' => 'North Division', 'touchpoint' => 'Hub A'],
                    ['name' => 'South Division', 'touchpoint' => 'Hub B'],
                ],
                'destinations' => [
                    ['name' => 'New York Warehouse'],
                    ['name' => 'Boston Hub'],
                ],
            ],
            [
                'name' => 'Global Distribution Inc.',
                'email' => 'shipping@globaldist.com',
                'phone_number' => '+1-555-0288',
                'active' => true,
                'business_units' => [
                    ['name' => 'Express Delivery', 'touchpoint' => 'Airport Station'],
                ],
                'destinations' => [
                    ['name' => 'Los Angeles Sorting Facility'],
                    ['name' => 'San Francisco Depot'],
                ],
            ],
        ];

        foreach ($clients as $clientData) {
            $businessUnits = $clientData['business_units'];
            $destinations = $clientData['destinations'];
            unset($clientData['business_units'], $clientData['destinations']);

            $client = Client::create($clientData);

            foreach ($businessUnits as $bu) {
                $client->businessUnits()->create($bu);
            }

            foreach ($destinations as $dest) {
                $client->destinations()->create($dest);
            }
        }
    }
}
