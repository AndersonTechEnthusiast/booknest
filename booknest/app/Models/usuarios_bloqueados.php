<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios_bloqueados extends Model
{
    use HasFactory;

    protected $table = 'usuarios_bloqueados';

    protected $fillable = ['id_do_usuario','motivo_do_bloqueio','mensagem','data_do_bloqueio','hora_do_bloqueio','situacao'];
}