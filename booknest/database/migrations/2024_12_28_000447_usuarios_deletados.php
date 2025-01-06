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
        Schema::create('usuarios_deletados',function(Blueprint $table){
            $table->id();
            $table->string('id_do_cadastrado',255);
            $table->string('mensagem_final',1000);
            $table->string('email',255);
            $table->string('senha',255);
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
        Schema::dropIfExists('usuarios_deletados');
    }
};
