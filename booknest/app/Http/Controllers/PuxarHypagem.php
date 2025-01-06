<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hypar;
use Illuminate\Support\Facades\Auth;
class PuxarHypagem extends Controller
{
    public function PuxarHypagem($id,$id_autor,$id_postagem)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'Você precisa fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){return response()->json(['status' => 'error' , 'message' => 'Você não tem acesso a essa área']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error' , 'message' => 'error inesperado']);}
        $hyper = Hypar::where('id_usuario',$id)->where('id_author',$id_autor)->where('id_postagem',$id_postagem)->first();
        if(!$hyper)
        {
            return response()->json(['status' => 'error' , 'message' => 'not found']);
        }
        return response()->json(['status' => 'success' , 'message' => $hyper]);
    }
}
