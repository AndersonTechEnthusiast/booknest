<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LivrosSalvos extends Model
{
    use HasFactory;

    protected $table = 'livros_salvos_booknest';

    protected $fillable = ['id_da_postagem','id_do_colaborador','id_do_usuario','titulo_da_postagem','livro', 'generos','data','hora','imagem_postagem'];
}