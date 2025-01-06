<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visualizacao_do_Autor extends Model
{
    use HasFactory;

    protected $table = 'visualizacao_do_usuario';

    protected $fillable = ['Perfil' , 'nome' , 'id_do_usuario' , 'id_do_contribuinte' , 'hora' , 'data']; 
}
