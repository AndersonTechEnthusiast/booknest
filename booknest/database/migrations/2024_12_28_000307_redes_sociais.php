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
        Schema::create('redes_sociais_booknest', function(Blueprint $table){
            $table->id();
            $table->string('Facebook')->nullable();
            $table->string('Twitter')->nullable();
            $table->string('Instagram')->nullable();
            $table->string('LinkedIn')->nullable();
            $table->string('YouTube')->nullable();
            $table->string('Pinterest')->nullable();
            $table->string('SnapChat')->nullable();
            $table->string('TikTok')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('redes_sociais_booknest');
    }
};
