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
        Schema::create('dispatches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vehicle_id')->constrained();
            $table->foreignId('driver_id')->constrained();
            $table->foreignId('business_unit_id')->constrained();
            $table->foreignId('destination_id')->constrained();
            $table->foreignId('plan_id')->nullable()->constrained();
            $table->string('service_type', 20);
            $table->date('dispatch_date');
            $table->time('assigned_call_time');
            $table->integer('linehaul_trip_no');
            $table->decimal('odometer_start', 10, 2)->default(0);
            $table->decimal('odometer_end', 10, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dispatches');
    }
};
