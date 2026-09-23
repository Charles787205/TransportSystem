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
        Schema::table('drivers', function (Blueprint $table) {
            $table->string('license_number', 50)->nullable()->change();
            $table->date('license_expiry_date')->nullable()->change();
            $table->string('address')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $driversWithNullLicense = DB::table('drivers')->whereNull('license_number')->get(['id']);
        foreach ($driversWithNullLicense as $driver) {
            DB::table('drivers')->where('id', $driver->id)->update(['license_number' => 'TEMP-'.$driver->id]);
        }
        DB::table('drivers')->whereNull('license_expiry_date')->update(['license_expiry_date' => now()->toDateString()]);
        DB::table('drivers')->whereNull('address')->update(['address' => 'N/A']);

        Schema::table('drivers', function (Blueprint $table) {
            $table->string('license_number', 50)->nullable(false)->change();
            $table->date('license_expiry_date')->nullable(false)->change();
            $table->string('address')->nullable(false)->change();
        });
    }
};
