<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios_desbloqueados extends Model
{
    use HasFactory;

    protected $table = 'usuarios_desbloqueados';

    protected $fillable = ['id_do_usuario','data_do_desbloqueio','hora_do_desbloqueio','Aviso_do_desbloqueio'];
}