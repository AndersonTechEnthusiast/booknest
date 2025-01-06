<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
// chamando o model do banco de dados que acabei de criar
use App\Models\usuarios; 
use Illuminate\Support\Facades\Auth;

// a Classe é Criada Automaticamente extenciada Controllers
class CadastroUserBookNest extends Controller
{
    // crio uma função publica nomeada ao meu criterio
    public function User(Request $Dados)
    {
        // usando o validate (validação) é uma array de validação 
        // estrutura: validate(['key_do_formulario' => 'regras'] , ['key_do_formulario.regra' => 'mensagem_de_error']);
        $ValidandoDados = $Dados->validate(
            // validate(['key_do_formulario' => 'regras']  ,
            [
                'nome-cadastrar' => 'required|string|min:10|max:255',
                'email-cadastrar' => 'required|email|min:10|max:255',
                'date-cadastrar' => 'required|min:10|max:10',
                'generos-cadastrar' => 'required|in:Ficção,Não-Ficção,Poesia,Drama,Conto,Infantojuvenil,Humor,Guias de Viagem,Ensaios,Novela Gráfica',
                'password-cadastrar' => 'required|min:8|max:16'
            ],
            //['key_do_formulario.regra' => 'mensagem_de_error'])
            [
                'nome-cadastrar.required' => 'O seu nome é Indispensavel',
                'nome-cadastrar.string' => 'Deve ser seu Nome Social',
                'nome-cadastrar.min' => 'Nome Completo , por favor',
                'nome-cadastrar.max' => 'Nome Excedeu o Limite de 255 caracteres',
                'email-cadastrar.required' => 'O seu email é Indispensavel',
                'email-cadastrar.email' => 'Deve ser um email valido',
                'email-cadastrar.min' => 'O email deve ser valido',
                'email-cadastrar.max' => 'O email excedeu o limite de 255 caracteres',
                'date-cadastrar.required' => 'A sua data e Indispensavel',
                'date-cadastrar.min' => 'A data está forá do Padrão',
                'date-cadastrar.max' => 'A data está forá do Padrão',
                'generos-cadastrar.required' => 'O genero do Livro é Indispensavel',
                'generos-cadastrar.in' => 'Nenhum dos Generos Corresponde',
                'password-cadastrar.required' => 'A sua senha e Indispensavel',
                'password-cadastrar.min' => 'A sua deve ter no minimo , 8 caracteres',
                'password-cadastrar.max' => 'A sua senha excedeu a 16 caracteres'
            ]
        );
        // 
        // Criptografando a Senha 
        $Senha_Criptografada = Hash::make($ValidandoDados['password-cadastrar']);
        // verificando se o usuario existe , procurando os dados dele enquanto (where) as colunas do banco de dados da tabela (usuarios) for igual aos valores inseridos pelo usuario
        $usuario = usuarios::where('nome',$ValidandoDados['nome-cadastrar'])->where('email',$ValidandoDados['email-cadastrar'])->where('date',$ValidandoDados['date-cadastrar'])->where('generos',$ValidandoDados['generos-cadastrar'])->first();
        if($usuario)
        {
            if(Hash::check($ValidandoDados['password-cadastrar'],$Senha_Criptografada))
            {
                return redirect('/')->with('feedback', 'Usuario Ja se encontra cadastrado');
                // false porque o usuario já esta cadastrado !!!
            }
        }
        if(!$usuario)
        {
            $inserção = new usuarios;
            $inserção->nome = $ValidandoDados['nome-cadastrar'];
            $inserção->email = $ValidandoDados['email-cadastrar'];
            $inserção->date = $ValidandoDados['date-cadastrar'];
            $inserção->generos = $ValidandoDados['generos-cadastrar'];
            $inserção->senha = $Senha_Criptografada;
            $inserção->nivel_acessos = 'usuario';
            $inserção->save();
            $usuario_logado = $inserção;
            Auth::login($usuario_logado);
            return redirect('usuario-home')->with('feedback','usuario cadastrado');
            // true porque o usuario foi cadastrado no banco de dados !!!
        }
    }
}
