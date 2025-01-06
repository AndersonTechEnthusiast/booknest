<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class controle_das_postagens_do_contribuinte_em_tempo_real extends Model
{
    use HasFactory;

    protected $table = 'controle_das_postagens_do_contribuinte_em_tempo_real';

    protected $fillable = ['mensagem'];
}
