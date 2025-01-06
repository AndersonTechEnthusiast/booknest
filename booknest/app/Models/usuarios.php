<?php

// aqui estou criando uma manipulação com o banco de dados
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Auth\Authenticatable;
// a classe deve ter o mesmo nome da tabela do banco de dados , se não tiver declare dentro da classe um ($table = ['nome_da_tabela'])
class usuarios extends Model implements AuthenticatableContract
{
    use Authenticatable;
    use HasFactory;
    protected $table = 'usuarios';
    // declarando uma propriedade protegida dizendo quais colunas serão acessadas por essa classe na tabela
    protected $fillable = ['nome' , 'email' , 'date' , 'genero' , 'senha'];
}
