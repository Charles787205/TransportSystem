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
        Schema::create('drivers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vendor_id')->constrained()->cascadeOnDelete();
            $table->string('driver_id_number')->nullable();
            $table->string('full_name')->unique();
            $table->date('birthday')->nullable();
            $table->enum('gender', ['Male', 'Female']);
            $table->string('phone_number', 13);
            $table->string('address');
            $table->string('license_number', 50)->unique();
            $table->date('license_expiry_date');
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drivers');
    }
};
