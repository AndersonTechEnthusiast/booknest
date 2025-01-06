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
        Schema::create('solicitacao_do_usuario_para_ser_contribuinte', function (Blueprint $table) {
            $table->id();
            $table->string('id_do_usuario',255);
            $table->string('hora',255);
            $table->string('data',255);
            $table->enum('status',['true','false']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('solicitacao_do_usuario_para_ser_contribuinte');
    }
};
