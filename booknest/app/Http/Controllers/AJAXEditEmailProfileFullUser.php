<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use Illuminate\Http\Request;

class AJAXEditEmailProfileFullUser extends Controller
{
    public function EmailAjaxEdit($id , Request $Validate)
    {
        if(Auth::check())
        {
            if(Auth::user()->nivel_acessos !== 'usuario')
            {
                return response()->json(['status' => 'error' , 'message' => 'Você não tem Acesso a Essa Área !!!']);
            }
            if((int)$id !== (int)Auth::user()->id)
            {
                return response()->json(['status' => 'error' , 'message' => 'Error Inesperado !!!']);
            }

            $Validate->validate(['email' => 'email|max:255|min:30'],['email.email' => 'O Email Não é Válido','email.max' => 'O Limite é no Máximo 255' , 'email.min' => 'O Limite é no Minimo 30']);

            $usuarios = usuarios::where('id' , $id)->first();
            if($usuarios)
            {
                if($usuarios->email)
                {
                    $usuarios->email = $Validate['email'];
                    if($usuarios->save())
                    {
                        return response()->json(['status' => 'sucess' , 'message' => 'Seu E-mail foi Editado com Sucesso']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'Seu E-mail não foi Editado !!!']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'E-mail não encontrado !!!']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'Usuario não encontrado']);
            }
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisa estar Logado para Acessar']);
        }
    }
}
