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
        Schema::create('popularidade_booknest', function (Blueprint $table) {
            $table->id();
            $table->string('id_postagem',255);
            $table->string('id_author',255);
            $table->string('id_usuario',255);
            $table->string('titulo_postagem',255);
            $table->string('imagem_postagem',255);
            $table->string('hypar_postagem',255)->nullable();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('popularidade_booknest');
    }
};
