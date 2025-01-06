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
        Schema::create('curtidas_booknest', function (Blueprint $table) {
            $table->id();
            $table->string('id_postagem',255);
            $table->string('id_author',255);
            $table->string('id_usuario',255);
            $table->string('nome_do_autor_do_Livro',255);
            $table->string('titulo_postagem',255);
            $table->string('imagem_postagem',255);
            $table->string('curtida',255)->nullable();
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
        Schema::dropIfExists('curtidas_booknest');
    }
};
