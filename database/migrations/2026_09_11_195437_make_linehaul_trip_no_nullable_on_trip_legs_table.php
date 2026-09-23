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
            $table->string('linehaul_trip_no')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('trip_legs')
            ->whereNull('linehaul_trip_no')
            ->update(['linehaul_trip_no' => 'N/A']);

        Schema::table('trip_legs', function (Blueprint $table) {
            $table->string('linehaul_trip_no')->nullable(false)->change();
        });
    }
};
