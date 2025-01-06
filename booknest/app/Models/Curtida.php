<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Curtida extends Model
{
    use HasFactory;

    protected $table = "curtidas_booknest";

    protected $fillable = ['id_postagem','id_author','id_usuario','nome_do_autor_do_Livro','titulo_postagem','imagem_postagem','curtida','data','hora'];
}
