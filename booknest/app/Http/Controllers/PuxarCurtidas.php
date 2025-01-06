<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Curtida;
class PuxarCurtidas extends Controller
{
    public function PuxarCurtidasDoUsuario($id,$id_postagem)
    {
        $curtidas = Curtida::where('id_usuario',$id)->where('id_postagem',$id_postagem)->get();
        if(!$curtidas)
        {
            return response()->json(['status' => 'error' , 'message' => 'Você ainda não curtiu nada']);
        }
        return response()->json($curtidas);
    }
}