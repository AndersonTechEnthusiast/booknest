<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios_com_niveis_de_acessos_alterados extends Model
{
    use HasFactory;

    protected $table = 'usuarios_com_niveis_de_acessos_alterados';

    protected $fillable = ['id_do_cadastrado','data_da_alteracao','hora_da_alteracao','nome_do_cadastrado','nivel_de_acessos_antigo','nivel_de_acessos_atual'];
}
