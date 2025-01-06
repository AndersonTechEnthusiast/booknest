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
        Schema::create('comentarios_booknest', function (Blueprint $table) {
            $table->id();
            $table->string('id_user',255);
            $table->string('id_autor',255);
            $table->string('id_postagem',255);
            $table->string('imagem_postagem',255);
            $table->string('titulo_postagem',255);
            $table->string('Perfil',255)->nullable();
            $table->string('nome',255);
            $table->string('comentario',10000);
            $table->string('data',255);
            $table->string('hora',255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comentarios_booknest');
    }
};
