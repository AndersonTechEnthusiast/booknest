<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class controle_em_tempo_real_dos_dados_do_booknest extends Model
{
    use HasFactory;

    protected $table = 'controle_em_tempo_real_dos_dados_do_booknest';
    
    protected $fillable = ['mensagem'];
}
