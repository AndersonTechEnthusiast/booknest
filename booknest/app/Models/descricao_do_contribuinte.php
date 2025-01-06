<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class descricao_do_contribuinte extends Model
{
    use HasFactory;

    protected $table = 'descricao_do_contribuinte';

    protected $fillable = ['descricao','id_do_autor'];
}
