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
        Schema::create('contribuintes_para_usuarios_usuarios_para_contribuintes',function(Blueprint $table){
            $table->id();
            $table->string('id_do_contribuinte',255);
            $table->string('nivel_de_acessos',255)->nullable();
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contribuintes_para_usuarios_usuarios_para_contribuintes');
    }
};
