<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
class AJAXEditNameProfileFullUser extends Controller
{
    public function EditNameAjax($id ,Request $Validate)
    {
        if(Auth::check())
        {
            if(Auth::user()->nivel_acessos !== 'usuario')
            {
                return response()->json(['status' => 'error' , 'message' => 'Você não tem Acesso a Essa Área']);
            }
            if((int)$id !== (int)Auth::user()->id)
            {
                return response()->json(['status' => 'error' , 'message' => 'Error Inesperado !!!']);
            }
            $Validate->validate(['nome' => 'required|string|max:40|min:6'],['nome.required' => 'Este Campo é Obrigatorio','nome.string' => 'Este Campo é apenas para Letras','nome.max' => 'O Limite máximo de caracteres é 40','nome.min' => 'O Limite Minimo de Caracteres é 6']);
            $usuarios = usuarios::where('id' , $id)->first();
            if($usuarios)
            {
                if($usuarios->nome)
                {
                    $usuarios->nome = $Validate['nome'];
                    if($usuarios->save())
                    {
                        return response()->json(['status' => 'sucess' , 'message' => 'Seu Nome foi Editado com Sucesso !!!']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error', 'message' => 'Error ao Tentar Editar seu Nome']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'Error Nome Não Encontrado']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'Error Usuario não encontrado']);
            }
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisa estar Logado para Acessar Essa Área']);
        }
    }
}
