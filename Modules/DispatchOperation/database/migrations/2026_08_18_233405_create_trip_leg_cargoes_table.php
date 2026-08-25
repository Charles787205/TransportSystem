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
        Schema::create('trip_leg_cargoes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trip_leg_id')->constrained('trip_legs')->cascadeOnDelete();
            $table->string('cargo_type'); // per_parcel, per_box, loose_items, by_weight
            $table->decimal('quantity', 12, 2)->default(0);
            $table->string('remarks')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trip_leg_cargoes');
    }
};
