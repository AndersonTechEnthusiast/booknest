<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class postarLivros extends Model
{
    use HasFactory; 

    protected $table = 'postagens_booknest';

    protected $fillable = ['titulo','autor','genero','sinopse','data','hora','editora','num_paginas','formato','isbn','conteudo','imagens','classificacao','id_do_autor','imagem'];
}
