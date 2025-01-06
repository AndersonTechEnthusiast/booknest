<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificacaoBookNest extends Model
{
    use HasFactory;

    protected $table = 'notificacao_booknest';

    protected $fillable = ['id_do_remetente','assunto','notificacao','status','data','hora'];
}
