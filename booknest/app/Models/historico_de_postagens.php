<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class historico_de_postagens extends Model
{
    use HasFactory;

    protected $table = 'historico_de_postagens_do_contribuinte_booknest';

    protected $fillable = ['titulo','autor','genero','sinopse','data','hora','editora','num_paginas','formato','isbn','classificacao','conteudo','imagens','id_do_autor','imagem','data_do_historico','hora_do_historico'];
}
