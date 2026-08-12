<?php

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Planning\Models\Plan;
use Tests\TestCase;

uses(TestCase::class);

describe('Plan model relationships', function () {
    it('uses belongs-to relationships for client, origin, and destination', function () {
        $plan = new Plan;

        expect($plan->client())->toBeInstanceOf(BelongsTo::class)
            ->and($plan->origin())->toBeInstanceOf(BelongsTo::class)
            ->and($plan->destination())->toBeInstanceOf(BelongsTo::class);
    });
});
