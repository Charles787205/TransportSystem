<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('return_trips', function (Blueprint $table) {
            $table->string('trip_type')->default('return')->after('dispatch_id');
            $table->integer('box_count')->nullable()->after('total_parcel');
            $table->integer('loose_items_count')->nullable()->after('box_count');
            $table->decimal('weight_kg', 12, 2)->nullable()->after('loose_items_count');
            $table->timestamp('departed_at')->nullable()->after('weight_kg');
            $table->timestamp('arrived_at')->nullable()->after('departed_at');
            $table->string('received_by')->nullable()->after('arrived_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('return_trips', function (Blueprint $table) {
            $table->dropColumn([
                'trip_type',
                'box_count',
                'loose_items_count',
                'weight_kg',
                'departed_at',
                'arrived_at',
                'received_by',
            ]);
        });
    }
};
