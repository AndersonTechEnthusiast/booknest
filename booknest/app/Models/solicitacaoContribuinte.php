<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class solicitacaoContribuinte extends Model
{
    use HasFactory;

    protected $table = 'solicitacao_do_usuario_para_ser_contribuinte';

    protected $fillable = ['id_do_usuario','status','hora','data'];
}
