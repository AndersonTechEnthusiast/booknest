<?php

namespace App\Http\Controllers;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use App\Models\denuncias;
use App\Models\postarLivros;
use App\Models\usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class RemoverDenuncia extends Controller
{
    public function Remover($id,$id_do_autor,$id_da_postagem)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'é necessario fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){ return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área !!!']);}
        if((int)$id !== (int)Auth::user()->id){ return response()->json(['status' => 'error' , 'message' => 'error inesperado']);}

        $denuncias = denuncias::where('id_da_postagem',$id_da_postagem)->where('id_do_usuario',$id)->where('id_do_contribuinte',$id_do_autor)->first();
        if(!$denuncias)
        {
            return response()->json(['status' => 'error' , 'message' => 'você não denunciou essa postagem']);
        }
        if($denuncias->delete())
        {
            $postagem = postarLivros::where('id',$id_da_postagem)->first();
            $contribuinte = usuarios::where('id',$id_do_autor)->first();
            $controle_em_tempo_real = new controle_em_tempo_real_dos_dados_do_booknest();
            $controle_em_tempo_real->mensagem = "O Usuario: ".Auth::user()->nome." , retirou a denuncia da postagem: ".$postagem->titulo." , do contribuinte: ".$contribuinte->nome." , na data: ".date('d/m/Y')." , do horario: ".date('H:i:s')."";
            if($controle_em_tempo_real->save())
            { 
                return response()->json(['status' => 'success' , 'message' => 'você deletou essa postagem']);
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'a postagem não foi deleta , por conta do controle do usuario']);
            }
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'a denuncia não foi deletada !!!']);
        }
    }
}
