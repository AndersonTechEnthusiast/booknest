<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class denuncias extends Model
{
    use HasFactory;

    protected $table = 'denuncia';

    protected $fillable = ['id_da_postagem','id_do_contribuinte','id_do_usuario','denuncia','data','hora'];
}