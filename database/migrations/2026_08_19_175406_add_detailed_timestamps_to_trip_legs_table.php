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
        Schema::table('trip_legs', function (Blueprint $table) {
            $table->time('origin_start_loading_time')->nullable()->after('departure_time');
            $table->time('origin_end_loading_time')->nullable()->after('origin_start_loading_time');
            $table->time('destination_arrived_time')->nullable()->after('arrived_time');
            $table->time('destination_start_unloading_time')->nullable()->after('destination_arrived_time');
            $table->time('destination_end_unloading_time')->nullable()->after('destination_start_unloading_time');
            $table->time('destination_departed_time')->nullable()->after('destination_end_unloading_time');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('trip_legs', function (Blueprint $table) {
            $table->dropColumn([
                'origin_start_loading_time',
                'origin_end_loading_time',
                'destination_arrived_time',
                'destination_start_unloading_time',
                'destination_end_unloading_time',
                'destination_departed_time',
            ]);
        });
    }
};
