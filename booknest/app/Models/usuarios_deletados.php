<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios_deletados extends Model
{
    use HasFactory;

    protected $table = 'usuarios_deletados';

    protected $fillable = ['id_do_cadastrado','mensagem_final','email','senha','data','hora'];
}
