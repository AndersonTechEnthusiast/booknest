<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\postarLivros;
class Postagem extends Controller
{
    public function Postagem($id)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você precisa estar Logado !!!']);
        }
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área !!!']);
        }
        $postagem = postarLivros::where('id',$id)->first();
        if(!$postagem)
        {
            return response()->json(['status' => 'error' , 'message' => 'postagem não encontrada']);
        }
        return response()->json($postagem);
    }
}
