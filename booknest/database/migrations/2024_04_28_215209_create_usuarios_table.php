<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * quando compilar migrate
     */
    public function up(): void
    {
        // criando a schema no banco de dados chamada usuarios
        Schema::create('usuarios', function (Blueprint $table) {
            // criando na tabela o atributo (id)
            $table->id();
            // criando na tabela o atributo (nome)
            $table->string('nome', 255);
            // criando na tabela o atributo (email)
            $table->string('email', 255);
            // criando na tabela o atributo (date)
            $table->string('date' , 10);
            // criando na tabela o atributo (generos)
            $table->string('generos' , 255);
            // criando na tabela o atributo (senha)
            $table->string('senha' , 255);
            // criando na tabela o atributo (pathname)
            $table->string('pathname', 255)->nullable();
            // criando na tabela o atributo (nivel de acessos)
            $table->enum('nivel_acessos', ['usuario','contribuinte','administrador']);
            // criando na tabela o atributo (remember_token)
            $table->string('remember_token', 100)->nullable();
            // esse ultimo atributo se refere a created_at , updated_at
            $table->timestamps();
        });
        
    }

    /**
     * reveter migrate
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
