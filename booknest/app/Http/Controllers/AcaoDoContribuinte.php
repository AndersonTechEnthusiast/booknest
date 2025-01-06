<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use App\Models\usuarios_deletados;
class AcaoDoContribuinte extends Controller
{
    public function deletar_contribuinte($id, Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'precisa fazer login']);
        }
        if(Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);
        }

        $Validate->validate(['acao'=>'string|required|in:deleção'],['acao.string'=>'error acao deve ser um texto','acao.required' => 'uma acao é necessaria' , 'acao.in' => 'ação não reconhecida !!!']);

        if($Validate['acao'] === 'deleção')
        {
            $usuarios = usuarios::where('id',$id)->first();
            if(!$usuarios)
            {
                return response()->json(['status' => 'error' , 'message' => 'usuario não foi encontrado , atualize a página']);
            }
            $nome = $usuarios->nome;
            $email = $usuarios->email;
            $senha = $usuarios->senha;

            if($usuarios->delete())
            {
                $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                $controle_do_usuario->mensagem = "O Administrador de nome: ".Auth::user()->nome." , deletou o contribuinte de nome: ".$nome." , na data ".date('d/m/Y')." , no horario ".date('H:i:s')." , no booknest !!!";
                if($controle_do_usuario->save())
                {
                    $delecao_do_usuario = usuarios_deletados::where('id_do_cadastrado',$id)->first();
                    if(!$delecao_do_usuario)
                    {
                        $delecao_do_usuario = new usuarios_deletados();
                        $delecao_do_usuario->id_do_cadastrado = $id;
                        $delecao_do_usuario->mensagem_final = "Olá ".$nome." , o sistema booknest está deletando sua conta do booknest por conduta inapropriada !!!";
                        $delecao_do_usuario->email = $email;
                        $delecao_do_usuario->senha = $senha;
                        $delecao_do_usuario->data = date('d/m/Y');
                        $delecao_do_usuario->hora = date('H:i:s');
                        if($delecao_do_usuario->save())
                        {
                            return response()->json(['status' => 'success' , 'message' => 'o contribuinte foi deletado com sucesso !!!']);
                        }
                        else
                        {
                            return response()->json(['status' => 'error' , 'message' => 'o usuario não foi deletado']);
                        }
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'o usuario já foi deletado']);
                    }
                }
            }
        }
    }
}
