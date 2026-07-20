<?php

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Planning\Models\Plan;
use Tests\TestCase;

uses(TestCase::class);

describe('Plan model relationships', function () {
    it('uses belongs-to relationships for destination and business unit', function () {
        $plan = new Plan;

        expect($plan->destination())->toBeInstanceOf(BelongsTo::class)
            ->and($plan->businessUnit())->toBeInstanceOf(BelongsTo::class);
    });
});
