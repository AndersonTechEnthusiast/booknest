<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\denuncias;
class DenunciasVerifyForUser extends Controller
{
    public function DenunciasDoUsuario($id,$id_do_autor,$id_da_postagem)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'é necessario fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){ return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área !!!']);}
        if((int)$id !== (int)Auth::user()->id){ return response()->json(['status' => 'error' , 'message' => 'error inesperado']);}
        
        // verificando
        
        $denuncias = denuncias::where('id_do_usuario',$id)->where('id_do_contribuinte',$id_do_autor)->where('id_da_postagem',$id_da_postagem)->first();
        if(!$denuncias)
        {
            return response()->json(['status' => 'error' , 'message' => 'O Usuario não registrou nenhuma denuncia']);
        }
        return response()->json(['status' => 'success' , 'message' => $denuncias]);
        
    }
}
