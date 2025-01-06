<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contribuinte_usuarios extends Model
{
    use HasFactory;

    protected $table = 'contribuintes_para_usuarios_usuarios_para_contribuintes';

    protected $fillable = ['id_do_contribuinte','nivel_de_acessos'];
}
