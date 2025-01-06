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
        Schema::create('usuarios_com_niveis_de_acessos_alterados',function(Blueprint $table){
            $table->id();
            $table->string('id_do_cadastrado',255);
            $table->string('data_da_alteracao',255);
            $table->string('hora_da_alteracao',255);
            $table->string('nome_do_cadastrado',255);
            $table->enum('nivel_de_acessos_antigo',['usuario','contribuinte','administrador']);
            $table->enum('nivel_de_acessos_atual',['usuario','contribuinte','administrador']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios_com_niveis_de_acessos_alterados');
    }
};
