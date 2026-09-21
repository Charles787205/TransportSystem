<?php

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Planning\Models\Plan;
use Tests\TestCase;

uses(TestCase::class);

describe('Plan model relationships', function () {
    it('uses belongs-to relationships for client and origin', function () {
        $plan = new Plan;

        expect($plan->client())->toBeInstanceOf(BelongsTo::class)
            ->and($plan->origin())->toBeInstanceOf(BelongsTo::class);
    });
});
