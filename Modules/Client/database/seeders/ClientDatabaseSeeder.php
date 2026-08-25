<?php

namespace Modules\Client\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Client\Enums\LocationType;
use Modules\Client\Enums\TouchpointType;
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
                    ['name' => 'North Division', 'touchpoint' => TouchpointType::FM, 'type' => LocationType::BU, 'address' => '123 North St'],
                    ['name' => 'South Division', 'touchpoint' => TouchpointType::MM, 'type' => LocationType::BU, 'address' => '456 South St'],
                    ['name' => 'New York Warehouse', 'touchpoint' => TouchpointType::MFM, 'type' => LocationType::HUB, 'address' => '789 NY Ave'],
                    ['name' => 'Boston Hub', 'touchpoint' => TouchpointType::FM, 'type' => LocationType::HUB, 'address' => '101 Boston Rd'],
                ],
            ],
            [
                'name' => 'Global Distribution Inc.',
                'email' => 'shipping@globaldist.com',
                'phone_number' => '+1-555-0288',
                'active' => true,
                'locations' => [
                    ['name' => 'Express Delivery', 'touchpoint' => TouchpointType::FM, 'type' => LocationType::BU, 'address' => '1 Driver Way'],
                    ['name' => 'Los Angeles Sorting Facility', 'touchpoint' => TouchpointType::MFM, 'type' => LocationType::HUB, 'address' => '500 LA Blvd'],
                    ['name' => 'San Francisco Depot', 'touchpoint' => TouchpointType::MM, 'type' => LocationType::HUB, 'address' => '300 SF Way'],
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
