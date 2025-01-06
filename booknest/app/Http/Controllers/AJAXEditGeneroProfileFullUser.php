<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use Illuminate\Http\Request;
 
class AJAXEditGeneroProfileFullUser extends Controller
{
    public function EditGenerosAJAX($id , Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisa estar Logado']);
        }
        if(Auth::user()->nivel_acessos !== 'usuario')
        {
            return response()->json(['status' => 'error' , 'message' => 'Você não tem Acesso a Essa Área']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado !!!']);
        }
        
        $Validate->validate(['generos' => 'string|in:Ficção,Não-Ficção,Poesia,Drama,Conto,Infantojuvenil,Novela Gráfica,Humor,Guias de Viagem,Ensaios'],['generos.string' => 'Generos deve ser letras não em números','generos.in' => 'Genero não reconhecido']);
        $usuarios = usuarios::where('id' , $id)->first();
        if(!$usuarios)
        {
            return response()->json(['status' => 'error' , 'message' => 'Usuario Não Encontrado']);
        }
        if(!$usuarios->generos)
        {
            return response()->json(['status' => 'error' , 'message' => 'Genero não Encontrado']);
        }

        $usuarios->generos = $Validate['generos'];
        if($usuarios->save())
        {
            return response()->json(['status' => 'sucess' , 'message' => 'Genero Atualizado com Sucesso !!!']);
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'Genero não foi atualizado !!!']);
        }
    }
}

