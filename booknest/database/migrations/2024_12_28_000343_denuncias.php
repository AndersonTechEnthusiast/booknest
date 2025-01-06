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
        Schema::create('denuncia',function(Blueprint $table){
            $table->id();
            $table->string('id_da_postagem',255);
            $table->string('id_do_contribuinte',255);
            $table->string('id_do_usuario',255);
            $table->string('denuncia',255);
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
        Schema::dropIfExists('denuncia');
    }
};
