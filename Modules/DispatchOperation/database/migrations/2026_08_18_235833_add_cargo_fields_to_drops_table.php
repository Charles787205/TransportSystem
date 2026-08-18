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
        Schema::table('drops', function (Blueprint $table) {
            $table->integer('box_count')->nullable()->after('parcel_count');
            $table->integer('loose_items_count')->nullable()->after('box_count');
            $table->decimal('weight_kg', 12, 2)->nullable()->after('loose_items_count');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('drops', function (Blueprint $table) {
            $table->dropColumn(['box_count', 'loose_items_count', 'weight_kg']);
        });
    }
};
