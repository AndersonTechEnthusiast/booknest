<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\controle_das_postagens_do_contribuinte_em_tempo_real;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use App\Models\solicitacaoContribuinte;
use App\Models\usuarios;
use App\Models\contribuinte_usuarios;
use App\Models\NotificacaoBookNest;
class SolicitacoesEcontrolersDoSistemaDoBookNestDoAdministrador extends Controller
{
    public function SolicitacoesEcontrolersDoSistemaDoBookNestDoAdministrador(Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'é necessario fazer Login para acessar essa área']);
        }
        if(Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área !!!']);
        }

        $Validate->validate(
            ['acao'=>'string|required|in:controle_de_postagens,controle_de_acao,solicitacoes,autentificar','id'=>'numeric|nullable'],
            ['acao.string'=>'acao deve ser um pedido em texto','acao.required'=>'acao não pode ser vazia','acao.in'=>'acao não reconhecida','id.numeric' => 'id não numerico']
        );

        if($Validate['acao'] === 'controle_de_postagens')
        {
            $controle_de_postagens = controle_das_postagens_do_contribuinte_em_tempo_real::all()->toArray();
            return response()->json($controle_de_postagens);
        }
        else
        if($Validate['acao'] === 'controle_de_acao')
        {
            $controle_de_acao = controle_em_tempo_real_dos_dados_do_booknest::all()->toArray();
            return response()->json($controle_de_acao);
        }
        else
        if($Validate['acao'] === 'solicitacoes')
        {
            $solicitacoes = solicitacaoContribuinte::where('status','false')->get()->toArray();
            $usuario = usuarios::all()->toArray();
            return response()->json([
                'status' => 'success',
                'solicitacao' => $solicitacoes,
                'usuarios' => $usuario
            ]);
        }
        else
        if($Validate['acao'] === 'autentificar')
        {
            $usuario = usuarios::where('id',$Validate['id'])->first();
            if(!$usuario)
            {
                return response()->json(['status' => 'error' , 'message' => 'error usuario não foi encontrado']);
            }
            $usuario->nivel_acessos = 'contribuinte';
            if($usuario->save())
            {
                $autentificando = contribuinte_usuarios::where('id_do_contribuinte',$Validate['id'])->first();
                if(!$autentificando)
                {
                    $autentificando = new contribuinte_usuarios();
                    $autentificando->id_do_contribuinte = $Validate['id'];
                    $autentificando->nivel_de_acessos = 'contribuinte';
                    if($autentificando->save())
                    {
                        $remover_pedido = solicitacaoContribuinte::where('id_do_usuario',$Validate['id'])->first();
                        $remover_pedido->status = 'true';
                        if($remover_pedido->save())
                        {
                            $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                            $controle_do_usuario->mensagem = "O Administrador ".Auth::user()->nome." , deu acesso a contribuinte booknest ao usuario de nome: ".$usuario->nome."  , na data".date('d/m/Y')." , no horario de ".date('H:i:s')." , no booknest !!!";
                            if($controle_do_usuario->save())
                            {
                                $notificar = NotificacaoBookNest::where('id_do_remetente',$Validate['id'])->first();
                                if(!$notificar)
                                {
                                    $notificar = new NotificacaoBookNest();
                                    $notificar->id_do_remetente = $Validate['id'];
                                    $notificar->assunto = "BEM , VINDO NOVO CONTRIBUINTE BOOKNEST";
                                    $notificar->notificacao = "Olá Sr. ".$usuario->nome." , seu pedido de ser contribuinte foi aceito pelo sistema booknest , você ja pode postar suas publicações e ser um dos nossos contribuintes parabens !!!";
                                    $notificar->status = 'não-lida';
                                    $notificar->data = date('d/m/Y');
                                    $notificar->hora = date('H:i:s');
                                    if($notificar->save())
                                    {
                                        return response()->json(['status' => 'success' , 'message' => 'o usuario foi autentificado como contribuinte booknest !!!']);
                                    }
                                    else
                                    {
                                        return response()->json(['status' => 'error' , 'message' => 'o usuario não foi identificado !!!']);
                                    }
                                }
                                return response()->json(['status' => 'success' , 'message' => 'o usuario foi autentificado como contribuinte booknest !!!']);
                            }
                            else
                            {
                                return response()->json(['status'=>'error' , 'message' => 'error ao controlar usuario']);
                            }
                        }
                        else
                        {
                            return response()->json(['status' => 'success' , 'message' => 'error na hora de salvar delecao do pedido']);
                        }
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'error na hora da autentificacao do usuario como um contribuinte !!!']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'o usuario já esta autentificado como contribuinte booknest']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'o usuario não foi autentificado como contribuinte']);
            }
        }
    }
}
