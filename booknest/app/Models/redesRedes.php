<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class redesRedes extends Model
{
    use HasFactory;

    protected $table = 'redes_sociais_booknest';

    protected $fillable = ['Facebook','Twitter','Instagram','LinkedIn','YouTube','Pinterest','SnapChat','TikTok'];
}
