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
            $table->text('ar_saheeh_infos');
            $table->text('eng_saheeh_infos');
            $table->text('fr_saheeh_infos');
            $table->string('ar_saheeh_name');
            $table->string('fr_saheeh_name');
            $table->string('eng_saheeh_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('imams', function (Blueprint $table) {
            $table->dropColumn(['ar_saheeh_infos', 'eng_saheeh_infos', 'fr_saheeh_infos', 'ar_saheeh_name', 'fr_saheeh_name', 'eng_saheeh_name']);
        });
    }
};
