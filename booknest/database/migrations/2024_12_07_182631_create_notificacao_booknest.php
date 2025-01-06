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
        Schema::create('notificacao_booknest', function (Blueprint $table) {
            $table->id();
            $table->string('id_do_remetente',255);
            $table->string('assunto',255);
            $table->string('notificacao',255);
            $table->string('data',255);
            $table->string('hora',255);
            $table->enum('status',['não-lida','lida']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notificacao_booknest');
    }
};
