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
        Schema::table('imams', function (Blueprint $table) {
            $table->text('full_ar_bio');
            $table->text('full_eng_bio');
            $table->text('full_fr_bio');
            $table->string('imam_imagePath');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('imams', function (Blueprint $table) {
            $table->dropColumn(['full_ar_bio', 'full_eng_bio', 'full_fr_bio', 'imam_imagePath']);
        });
    }
};
