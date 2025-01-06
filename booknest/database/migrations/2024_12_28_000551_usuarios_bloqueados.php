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
        Schema::create('usuarios_bloqueados',function(Blueprint $table){
            $table->id();
            $table->string('id_do_usuario',255);
            $table->string('motivo_do_bloqueio',255);
            $table->string('mensagem',1000);
            $table->string('data_do_bloqueio',255);
            $table->string('hora_do_bloqueio',255);
            $table->enum('situacao',['desbloqueado','bloqueado']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios_bloqueados');
    }
};
