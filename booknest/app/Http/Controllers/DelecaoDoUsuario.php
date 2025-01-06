<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use App\Models\usuarios_deletados;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Illuminate\Http\Request;

class DelecaoDoUsuario extends Controller
{
    public function DelecaoDoUsuario($id , Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você precisa estar logado !!']);
        }
        if(Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a esse área !!!']);
        }

        $Validate->validate(
            [
                'delecao'=>'string|required',
                'motivos'=>'string|required|max:1000|min:5',
            ],
            [
                'delecao.string'=>'dado não reconhecido !!!',
                'delecao.required'=>'Deletar não pode estar vazio !!!',
                'motivos.string'=>'O motivo deve ser em texto !!!',
                'motivos.required'=>'Não pode deletar um usuario sem motivos !!!',
                'motivos.max'=>'O limite de caracteres execedeu o limite de 1000 linhas',
                'motivos.min'=>'O limite minimo de caracteres não execedeu o limite de 5 caracteres'
            ]
        );

        $usuarios = usuarios::where('id',$id)->first();
        if(!$usuarios)
        {
            return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado , atualize a página por favor']);
        }
        $delecao = usuarios_deletados::where('id_do_cadastrado',$id)->first();
        if(!$delecao)
        {
            $delecao = new usuarios_deletados();
            $delecao->id_do_cadastrado = $id;
            $delecao->mensagem_final = $Validate['motivos'];
            $delecao->email = $usuarios->email;
            $delecao->senha = $usuarios->senha;
            $delecao->data = date('d/m/Y');
            $delecao->hora = date('H:i:s');
            if($delecao->save())
            {
                if($usuarios->delete()){
                    $controle_do_usuarios = new controle_em_tempo_real_dos_dados_do_booknest();
                    $controle_do_usuarios->mensagem = "O Administrador: ".Auth::user()->nome." , deletou o nome usuario de nome: ".$usuarios->nome." , as ".date('H:i:s')." , da data ".date('d/m/Y')." , pelo motivo de: ".$Validate['motivos'].".";
                    if($controle_do_usuarios->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'O Usuario foi Deletado !!!']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'O Usuario Não foi Deletado !!!']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'O Usuario não foi Deletado !!!']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'A deleção não foi Salva']);
            }
        }
    }
}
