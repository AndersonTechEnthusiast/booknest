<?php

namespace App\Http\Controllers;
use App\Models\postarLivros;
use App\Models\usuarios;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use App\Models\NotificacaoBookNest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class GerenciamentoDePostagensForAdministradorBookNest extends Controller
{
    public function GerenciamentoDePostagensForAdministradorBookNest(Request $Validate)
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
            [
                'id'=>'numeric|required|min:1',
                'acao'=>'string|required|in:deletar,editar',
                'motivo' => 'string|required',
                'titulo' => 'string|nullable',
                'genero' => 'string|nullable|in:Ficção,Não-Ficção,Poesia,Drama,Conto,Infantojuvenil,Novela Gráfica,Humor,Guias de Viagem,Ensaios',
                'classificacao' => 'string|nullable',
                'sinopse' => 'string|nullable'
            ],
            [
                'id.numeric'=>'a postagem não foi identificada','id.required'=>'a postagem não foi enviada','id.min' => 'postagem não pode ser vazia',
                'acao.string'=>'ação não pode ser um numero','acao.required'=>'a ação não pode ser vazia','acao.in'=>'a ação não foi reconhecida',
                'motivo.string'=>'o motivo deve ser um texto','motivo.required'=>'o motivo não pode ser vazio'
            ]
        );

        if($Validate['id'] === 0)
        {
            return response()->json(['status' => 'error' , 'message' => 'postagem não encontrada !!!']);
        }

        if($Validate['acao'] === 'deletar')
        {
            $postagem = postarLivros::where('id',(int)$Validate['id'])->first();
            if(!$postagem)
            {
                return response()->json(['status' => 'error' , 'message' => 'A Postagem Não foi Encontrada !!!']);
            }
            
            $id_do_contribuinte = $postagem->id_do_autor;
            $titulo = $postagem->titulo;
            $usuarios = usuarios::where('id',$id_do_contribuinte)->first();
            $controle_booknest = new controle_em_tempo_real_dos_dados_do_booknest();
            $controle_booknest->mensagem = "O Administrador , ".Auth::user()->nome." deletou a postagem de titulo: ".$titulo." , do contribuinte ".$usuarios->nome." pelo motivo de ".$Validate['motivo']." , na data de ".date('d/m/Y')." , no horario de ".date('H:i')." , no BookNest";
            if($controle_booknest->save())
            {
                $notificacao = new NotificacaoBookNest();
                $notificacao->id_do_remetente = $usuarios->id;
                $notificacao->assunto = "DELEÇÃO";
                $notificacao->notificacao = "A Sua Postagem ".$titulo." , foi removida pelo motivo de: ".$Validate['motivo']." , na data de ".date('d/m/Y')." , no horario: ".date('H:i')." , no BookNest";
                $notificacao->data = date('d/m/Y');
                $notificacao->hora = date('H:i:s');
                if($notificacao->save())
                {
                    if($postagem->delete())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'A Postagem foi Removida com Sucesso !!!']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'postagem não deletada !!!']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'Error na Remoção da Postagem !!!']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'controle usuario error']);
            }
            
        }
        else
        if($Validate['acao'] === 'editar')
        {
            $postagem = postarLivros::where('id',(int)$Validate['id'])->first();
            if(!$postagem)
            {
                return response()->json(['status' => 'error' , 'message' => 'não existe postagem, atualize a página por favor !!!']);
            }
            $contribuinte = usuarios::where('id',$postagem->id_do_autor)->first();
            $titulo_antigo = $postagem->titulo;
            $postagem->titulo = $Validate['titulo'];
            $postagem->genero = $Validate['genero'];
            $postagem->classificacao = $Validate['classificacao'];
            $postagem->sinopse = $Validate['sinopse'];
            if($postagem->save())
            {
                $controle_booknest = new controle_em_tempo_real_dos_dados_do_booknest();
                $controle_booknest->mensagem = "O Administrador ".Auth::user()->nome." , alterou a postagem ".$titulo_antigo." , do coloborador , pelo motivo ".$Validate['motivo']." ,  na data de ".date('d/m/Y')." , no horario de ".date('H:i:s')." , no sistema do BookNest";
                if($controle_booknest->save())
                {
                    $notificacao = new NotificacaoBookNest();
                    $notificacao->id_do_remetente = $contribuinte->id;
                    $notificacao->assunto = "EDIÇÃO";
                    $notificacao->notificacao = "Olá Sr.".$contribuinte->nome." , sua postagem: ".$titulo_antigo." , foi editada pelo motivo: ".$Validate['motivo']." , na data de: ".date('d/m/Y')." , no horario de: ".date('H:i:s')." , no sistema BookNest !!!";
                    $notificacao->data = date('d/m/Y');
                    $notificacao->hora = date('H:i:s');
                    if($notificacao->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'sucesso a noticia foi editada com sucesso']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'error a noticia não foi editada !!!']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'error na notificação do Contribuinte']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error a postagem não foi editada !!!']);
            }
        }
    }
}
