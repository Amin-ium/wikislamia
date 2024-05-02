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
        Schema::create('hadeeths', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('imam_id');
            $table->foreign('imam_id')->references('id')->on('imams');
            $table->unsignedBigInteger('book_id');
            $table->foreign('book_id')->references('id')->on('books');
            $table->integer('number_in_book');
            $table->text('ar_hadith');
            $table->text('fr_hadith');
            $table->text('eng_hadith');
            $table->string('grade');
            $table->integer('count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hadeeths');
    }
};
