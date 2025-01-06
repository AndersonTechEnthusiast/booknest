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
        Schema::create('historico_de_postagens_do_contribuinte_booknest',function(Blueprint $table){
            $table->id();
            $table->string('titulo',255);
            $table->string('autor',255);
            $table->string('genero',255);
            $table->string('sinopse',400);
            $table->string('data',255);
            $table->string('hora',255);
            $table->string('editora',255);
            $table->integer('num_paginas'); // so aceita números
            $table->string('formato',255);
            $table->string('isbn',255);
            $table->string('classificacao',255);
            $table->string('conteudo');
            $table->text('imagens')->default('');
            $table->string('id_do_autor',255);
            $table->string('imagem',255);
            $table->string('data_do_historico',255);
            $table->string('hora_do_historico',255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historico_de_postagens_do_contribuinte_booknest');
    }
};
