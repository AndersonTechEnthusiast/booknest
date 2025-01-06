<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\usuarios;
use Illuminate\Support\Facades\Auth;
class EditDadosFullProfileFromContribuinte extends Controller
{
    public function EditarDadosProfileFullPageContribuint($id , Request $Validate)
    {
        $Validate->validate(
            [
                'nome'=>'string|max:40|min:1|required',
                'email'=> 'email|required',
                'data'=> 'string|max:10|min:10',
                'genero'=> 'string|in:Ficção,Não-Ficção,Poesia,Drama,Conto,Infantojuvenil,Novela Gráfica,Humor,Guias de Viagem,Ensaios',
            ],
            [
                'nome.string' => 'O Seu Nome Deve ser em texto',
                'nome.max' => 'O seu Nome Ultrapassou o limite de Caracteres',
                'nome.min' => 'O seu Nome Não Ultrapassou o limite minimo de caracteres',
                'email.email' => 'O seu E-mail não é Valido',
                'email.required' => 'O E-mail é Necessario',
                'data.string' => 'Sua data esta incorreta',
                'data.max' => 'Formato Indevido, Formato Aceito: DD/MM/AAAA',
                'data.min' => 'Formato Indevido, Formato Aceito: DD/MM/AAAA',
                'genero.string' => 'Genero de Livro Inexistente',
                'genero.in' => 'Genero Não Registrado no Sistema'
            ]
        );
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisa estar Logado']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado']);
        }
        if(Auth::user()->nivel_acessos !== 'contribuinte')
        {
            return response()->json(['status' => 'error', 'message' => 'Você não tem Acesso a Essa Área']);
        }

        $usuarios = usuarios::where('id',$id)->first();
        if(!$usuarios)
        {
            return response()->json(['status' => 'error' , 'message' => 'Contribuinte não encontrado']);
        }
        $usuarios->nome = $Validate['nome'];
        $usuarios->email = $Validate['email'];
        $usuarios->date = $Validate['data'];
        $usuarios->generos = $Validate['genero'];
        if($usuarios->save())
        {
            return response()->json(['status' => 'success' , 'message' => 'Seus Dados Foram Editados com Sucesso']);
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado , Dados Não foram Editados']);
        }
    }
}
