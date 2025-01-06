<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\denuncias;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use App\Models\usuarios;
use App\Models\postarLivros;
class DenunciarPostagem extends Controller
{
    public function FazerDenuncia($id,$id_do_contribuinte,$id_da_postagem,Request $Validade)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'é necessario fazer Login']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){ return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área !!!']);}
        if((int)$id !== (int)Auth::user()->id){ return response()->json(['status' => 'error' , 'message' => 'error inesperado']);}

        // Validação
        $Validade->validate(
            ['denuncia'=>'string|required|max:255|min:10'],
            ['denuncia.string'=>'denuncia não reconhecida','denuncia.required' => 'é necessario uma denuncia','denuncia.max'=>'denuncia não reconhecida','denuncia.min' => 'denuncia não reconhecida']
        );

        // puxa a tabela 
        $denuncia = denuncias::where('id_da_postagem',$id_da_postagem)->where('id_do_usuario',$id)->where('id_do_contribuinte',$id_do_contribuinte)->first();
        if(!$denuncia)
        {
            // cria uma nova instância
            $denuncia = new denuncias();
            $denuncia->id_da_postagem = $id_da_postagem;
            $denuncia->id_do_contribuinte = $id_do_contribuinte;
            $denuncia->id_do_usuario = $id;
            $denuncia->denuncia = $Validade['denuncia'];
            $denuncia->data = date('d/m/Y');
            $denuncia->hora = date('H:i:s');
            if($denuncia->save())
            {
                $usuarios = usuarios::where('id',$id)->first();
                $contribuinte = usuarios::where('id',$id_do_contribuinte)->first();
                $postagem = postarLivros::where('id',$id_da_postagem)->first();
                $controle_dos_dados = new controle_em_tempo_real_dos_dados_do_booknest();
                $controle_dos_dados->mensagem = "O usuario de nome: ".$usuarios->nome." denunciou a noticia: ".$postagem->titulo." , do autor: ".$contribuinte->nome." , na data: ".date('d/m/Y')." , no horario: ".date('H:i:s')."";
                if($controle_dos_dados->save())
                {
                    return response()->json(['status' => 'success']);
                }
                else
                {
                    return response()->json(['status' => 'error ao tentar fazer controle de dados']);
                }
            }
            else
            {
                return response()->json(['status' => 'error no memento de salvar sua denuncia']);
            }
        }
        $denuncia->id_da_postagem = $id_da_postagem;
        $denuncia->id_do_contribuinte = $id_do_contribuinte;
        $denuncia->id_do_usuario = $id;
        $denuncia->denuncia = $Validade['denuncia'];
        $denuncia->data = date('d/m/Y');
        $denuncia->hora = date('H:i:s');
        if($denuncia->save())
        {
            return response()->json(['status' => 'success']);
        }
        else
        {
            return response()->json(['status' => 'error no memento de salvar sua denuncia']);
        }
    }
}
