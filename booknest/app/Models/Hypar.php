<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hypar extends Model
{
    use HasFactory;

    protected $table = 'popularidade_booknest';

    protected $fillable = ['id_postagem','id_author','id_usuario','titulo_postagem','imagem_postagem','hypar_postagem'];
}