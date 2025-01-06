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
        Schema::create('gratificacao_do_contribuinte', function(Blueprint $table){
            $table->id();
            $table->enum('autenitificacion',[true,false]);
            $table->string('id_do_autor',255);
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
        Schema::dropIfExists('gratificacao_do_contribuinte');
    }
};
