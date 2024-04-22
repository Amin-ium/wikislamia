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
        Schema::create('imams_bios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('imam_id');
            $table->foreign('imam_id')->references('id')->on('imams');
            $table->text('ar_lineage');
            $table->text('fr_lineage');
            $table->text('eng_lineage');
            $table->text('ar_birth_life');
            $table->text('fr_birth_life');
            $table->text('eng_birth_life');
            $table->text('ar_pursuit_of_knowledge');
            $table->text('fr_pursuit_of_knowledge');
            $table->text('eng_pursuit_of_knowledge');
            $table->text('ar_death');
            $table->text('fr_death');
            $table->text('eng_death');
            $table->string('saheeh_imagePath');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imams_bios');
    }
};
