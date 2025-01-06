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
        Schema::create('usuarios_suspensos', function(Blueprint $table){
            $table->id();
            $table->string('id_do_usuario',255);
            $table->string('email_do_cadastrado',255);
            $table->string('senha_do_cadastrado',255);
            $table->string('data_da_suspensao',255);
            $table->string('hora_da_suspensao',255);
            $table->timestamp('suspenso_ate')->nullable();
            $table->string('Mensagem_ao_usuario',1000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios_suspensos');
    }
};
