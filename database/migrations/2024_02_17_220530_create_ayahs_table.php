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
        Schema::create('ayahs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('surah_id');
            $table->foreign('surah_id')->references('id')->on('surahs');
            $table->text('content');
            $table->text('englishContent');
            $table->text('frenshContent');
            $table->integer('verseNumber');
            $table->string('audio');
            $table->string('revelationType');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ayahs');
    }
};
