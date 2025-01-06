<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios_suspensos extends Model
{
    use HasFactory;

    protected $table = 'usuarios_suspensos';

    protected $fillable = ['id_do_usuario','email_do_cadastrado','senha_do_cadastrado','data_da_suspensao','hora_da_suspensao','suspenso_ate','Mensagem_ao_usuario'];
}