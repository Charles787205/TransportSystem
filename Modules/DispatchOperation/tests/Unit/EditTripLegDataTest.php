<?php

use Modules\DispatchOperation\Classes\Data\Request\EditTripLegData;
use Spatie\LaravelData\Optional;
use Tests\TestCase;

uses(TestCase::class);

test('EditTripLegData maps snake_case input to camelCase properties', function () {
    $data = EditTripLegData::from([
        'total_parcel' => 50,
        'odometer_start' => 100.5,
        'odometer_end' => 200.0,
        'departure_time' => '08:00:00',
        'status' => 'in-transit',
    ]);

    expect($data->totalParcel)->toBe(50);
    expect($data->odometerStart)->toBe(100.5);
    expect($data->odometerEnd)->toBe(200.0);
    expect($data->departureTime)->toBe('08:00:00');
    expect($data->status)->toBe('in-transit');
});

test('EditTripLegData unprovided fields remain as Optional', function () {
    $data = EditTripLegData::from([]);

    expect($data->totalParcel)->toBeInstanceOf(Optional::class);
    expect($data->odometerStart)->toBeInstanceOf(Optional::class);
    expect($data->status)->toBeInstanceOf(Optional::class);
});

test('EditTripLegData toModelAttributes excludes Optional fields', function () {
    $data = EditTripLegData::from([
        'total_parcel' => 25,
        'status' => 'delivered',
    ]);

    $attrs = $data->toModelAttributes();

    expect($attrs)->toHaveKey('total_parcel', 25);
    expect($attrs)->toHaveKey('status', 'delivered');
    expect($attrs)->not->toHaveKey('odometer_start');
    expect($attrs)->not->toHaveKey('departure_time');
});

test('EditTripLegData cancellation_detail is required when status is cancelled', function () {
    $rules = EditTripLegData::rules();

    expect($rules)->toHaveKey('cancellation_detail');
    expect($rules['cancellation_detail'])->toContain('required_if:status,cancelled');
    expect($rules['cancellation_detail'])->toContain('nullable');
});

test('EditTripLegData arrived_time and destination_arrived_time alias each other', function () {
    // When only arrived_time is given, it populates arrived_time in the output.
    // destination_arrived_time is Optional when not explicitly provided, so array_filter strips it.
    $data = EditTripLegData::from([
        'arrived_time' => '14:00:00',
    ]);

    $attrs = $data->toModelAttributes();

    expect($attrs)->toHaveKey('arrived_time', '14:00:00');

    // When both are given, each column receives the other as a fallback
    $data2 = EditTripLegData::from([
        'arrived_time' => '14:00:00',
        'destination_arrived_time' => '14:30:00',
    ]);

    $attrs2 = $data2->toModelAttributes();

    expect($attrs2['arrived_time'])->toBe('14:00:00');
    expect($attrs2['destination_arrived_time'])->toBe('14:30:00');
});
