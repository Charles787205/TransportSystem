<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('trip_legs', function (Blueprint $table) {
            $table->string('departure_time')->nullable()->change();
            $table->string('end_time')->nullable()->change();
            $table->string('arrived_time')->nullable()->change();
            $table->string('origin_arrived_time')->nullable()->change();
            $table->string('origin_start_loading_time')->nullable()->change();
            $table->string('origin_end_loading_time')->nullable()->change();
            $table->string('destination_arrived_time')->nullable()->change();
            $table->string('destination_start_unloading_time')->nullable()->change();
            $table->string('destination_end_unloading_time')->nullable()->change();
            $table->string('destination_departed_time')->nullable()->change();
        });

        Schema::table('drops', function (Blueprint $table) {
            $table->string('arrived_time')->nullable()->change();
            $table->string('departed_time')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $tripColumns = [
            'departure_time', 'end_time', 'arrived_time', 'origin_arrived_time',
            'origin_start_loading_time', 'origin_end_loading_time', 'destination_arrived_time',
            'destination_start_unloading_time', 'destination_end_unloading_time', 'destination_departed_time',
        ];
        foreach ($tripColumns as $col) {
            DB::table('trip_legs')->whereNotNull($col)->update([$col => null]);
        }

        Schema::table('trip_legs', function (Blueprint $table) {
            $table->time('departure_time')->nullable()->change();
            $table->time('end_time')->nullable()->change();
            $table->time('arrived_time')->nullable()->change();
            $table->time('origin_arrived_time')->nullable()->change();
            $table->time('origin_start_loading_time')->nullable()->change();
            $table->time('origin_end_loading_time')->nullable()->change();
            $table->time('destination_arrived_time')->nullable()->change();
            $table->time('destination_start_unloading_time')->nullable()->change();
            $table->time('destination_end_unloading_time')->nullable()->change();
            $table->time('destination_departed_time')->nullable()->change();
        });

        $dropColumns = ['arrived_time', 'departed_time'];
        foreach ($dropColumns as $col) {
            DB::table('drops')->whereNotNull($col)->update([$col => null]);
        }

        Schema::table('drops', function (Blueprint $table) {
            $table->time('arrived_time')->nullable()->change();
            $table->time('departed_time')->nullable()->change();
        });
    }
};
