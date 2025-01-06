<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComentariosTotal extends Model
{
    use HasFactory;
    protected $table = 'comentarios_booknest';

    protected $fillable = ['id_user', 'id_autor','id_postagem','imagem_postagem','titulo_postagem','Perfil','nome','comentario','data','hora'];
}