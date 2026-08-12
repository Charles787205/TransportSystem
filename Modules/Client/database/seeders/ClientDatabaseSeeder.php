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
                'locations' => [
                    ['name' => 'North Division', 'touchpoint' => 'Main Hub', 'type' => 'BU', 'address' => '123 North St'],
                    ['name' => 'South Division', 'touchpoint' => 'South Hub', 'type' => 'BU', 'address' => '456 South St'],
                    ['name' => 'New York Warehouse', 'touchpoint' => 'Loading Dock 1', 'type' => 'Destination', 'address' => '789 NY Ave'],
                    ['name' => 'Boston Hub', 'touchpoint' => 'Gate 2', 'type' => 'Destination', 'address' => '101 Boston Rd'],
                ],
            ],
            [
                'name' => 'Global Distribution Inc.',
                'email' => 'shipping@globaldist.com',
                'phone_number' => '+1-555-0288',
                'active' => true,
                'locations' => [
                    ['name' => 'Express Delivery', 'touchpoint' => 'Station A', 'type' => 'BU', 'address' => '1 Driver Way'],
                    ['name' => 'Los Angeles Sorting Facility', 'touchpoint' => 'Ramp 5', 'type' => 'Destination', 'address' => '500 LA Blvd'],
                    ['name' => 'San Francisco Depot', 'touchpoint' => 'Bay 3', 'type' => 'Destination', 'address' => '300 SF Way'],
                ],
            ],
        ];

        foreach ($clients as $clientData) {
            $locations = $clientData['locations'];
            unset($clientData['locations']);

            $client = Client::create($clientData);

            foreach ($locations as $locData) {
                $client->locations()->create($locData);
            }
        }
    }
}
