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
        Schema::table('chapiters', function (Blueprint $table) {
            $table->unsignedBigInteger('imam_id');
            $table->foreign('imam_id')->references('id')->on('imams');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chapiters', function (Blueprint $table) {
            //
        });
    }
};
