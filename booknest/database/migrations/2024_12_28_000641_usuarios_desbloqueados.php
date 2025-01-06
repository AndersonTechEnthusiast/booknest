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
        Schema::create('usuarios_desbloqueados',function(Blueprint $table){
            $table->id();
            $table->string('id_do_usuario',255);
            $table->string('data_do_desbloqueio',255);
            $table->string('hora_do_desbloqueio',255);
            $table->string('Aviso_do_desbloqueio',1000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios_desbloqueados');
    }
};
