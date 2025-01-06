<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class autentificado extends Model
{
    use HasFactory;

    protected $table = 'gratificacao_do_contribuinte';

    protected $fillable = ['autenitificacion','id_do_autor','data','hora'];
}
