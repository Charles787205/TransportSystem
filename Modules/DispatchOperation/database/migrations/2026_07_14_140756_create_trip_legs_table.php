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
        Schema::create('trip_legs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dispatch_id')->constrained()->cascadeOnDelete();
            $table->unsignedInteger('trip_sequence')->default(1);
            $table->string('trip_no');
            $table->integer('total_parcel')->nullable();
            $table->decimal('odometer_start', 10, 2)->nullable();
            $table->decimal('odometer_end', 10, 2)->nullable();
            $table->time('departure_time')->nullable();
            $table->time('end_time')->nullable();
            $table->time('arrived_time')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trip_legs');
    }
};
