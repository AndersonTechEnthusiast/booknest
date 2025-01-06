<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use App\Models\usuarios_bloqueados;
use App\Models\usuarios_desbloqueados;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Illuminate\Http\Request;

class BloquearUsuario extends Controller
{
    public function BloquearUsuario($id,Request $validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error'  , 'message' => 'deve estar logado !!!']);
        }
        if(Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área !!!']);
        }

        $validate->validate(
            [
                'acao'=>'required|string|in:bloquear,desbloquear',
                'motivo'=>'required|string|in:Bloquear_esse_Usuario_por_Violação_dos_Termos_de_Serviço,Bloquear_esse_Usuario_por_Comportamento_Inapropriado,Bloquear_esse_Usuario_por_Atividades_Fraudulentas,Bloquear_esse_Usuario_por_Spam_e_Publicidade_Indevida,Bloquear_esse_Usuario_por_Problemas_com_Pagamentos,Bloquear_esse_Usuario_por_Violação_de_Direitos_Autorais,Bloquear_esse_Usuario_por_Comprometimento_da_Segurança_da_Plataforma,Bloquear_esse_Usuario_por_Uso_Indevido_de_Bots_ou_Automação,Bloquear_esse_Usuario_por_Publicação_de_Conteúdo_Inapropriado,Bloquear_esse_Usuario_por_Atividades_Contrárias_à_Missão_do_BookNest',
            ],
            [
                'acao.required'=>'A ação é necessaria !!!',
                'acao.string' => 'A Ação deve ser uma opção !!!',
                'acao.in'=>'A Ação não foi reconhecida no sistema !!!',
                'motivo.required'=>'O Motivo não pode ser Vazio !!!',
                'motivo.string'=>'O Motivo deve ser uma texto !!!',
                'motivo.in'=>'Nenhum Motivo Reconhecido'
            ]
        );

        $motivos = [
            'Bloquear_esse_Usuario_por_Violação_dos_Termos_de_Serviço' => 'Violação dos Termos de Serviço',
            'Bloquear_esse_Usuario_por_Comportamento_Inapropriado' => 'Comportamento Inapropriado',
            'Bloquear_esse_Usuario_por_Atividades_Fraudulentas' => 'Atividades Fraudulentas',
            'Bloquear_esse_Usuario_por_Spam_e_Publicidade_Indevida' => 'Spam e Publicidade_Indevida',
            'Bloquear_esse_Usuario_por_Problemas_com_Pagamentos' => 'Problemas com Pagamentos',
            'Bloquear_esse_Usuario_por_Violação_de_Direitos_Autorais' => 'Violação de Direitos_Autorais',
            'Bloquear_esse_Usuario_por_Comprometimento_da_Segurança_da_Plataforma' => 'Comprometimento da Segurança da Plataforma',
            'Bloquear_esse_Usuario_por_Uso_Indevido_de_Bots_ou_Automação' => 'Uso Indevido de Bots ou Automação',
            'Bloquear_esse_Usuario_por_Publicação_de_Conteúdo_Inapropriado' => 'Publicação de Conteúdo Inapropriado',
            'Bloquear_esse_Usuario_por_Atividades_Contrárias_à_Missão_do_BookNest' => 'Atividades Contrárias à Missão do BookNest'
        ];

        if($validate['acao'] === 'bloquear')
        {
            $usuarios = usuarios::where('id',$id)->first();
            if(!$usuarios)
            {
                return response()->json(['status' => 'error' , 'message' => 'usuario não foi encontrado !!!']);
            }
            $usuario_bloqueado = usuarios_bloqueados::where('id_do_usuario',$id)->first();
            if($usuario_bloqueado)
            {
                $usuario_bloqueado->id_do_usuario = $id;
                $usuario_bloqueado->motivo_do_bloqueio = $motivos[$validate['motivo']];
                $usuario_bloqueado->mensagem = "Olá Senhor ".$usuarios->nome." , viemos por meio dessa mensagem exclarecer que ouve um bloqueio devido a um de nossos administradores verificar uma ação caracteriza por: ".$motivos[$validate['motivo']]." , no nosso sistema , por esse motivo o senhor está sendo bloqueado no nosso sistema na data: ".date('d/m/Y')." , no horario: ".date('H:i')." no BookNest";
                $usuario_bloqueado->data_do_bloqueio = date('d/m/Y');
                $usuario_bloqueado->hora_do_bloqueio = date('H:i:s');
                $usuario_bloqueado->situacao = "bloqueado";
                if($usuario_bloqueado->save())
                {
                    $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                    $controle_do_usuario->mensagem = "O Administrador de Nome: ".Auth::user()->nome." , Atualizou bloqueio do usuario de nome: ".$usuarios->nome." , na data: ".date('d/m/Y')." , no horario: ".date('H:i:s')." , pelo motivo de: ".$motivos[$validate['motivo']]." no booknest";
                    if($controle_do_usuario->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'O Motivo foi Atualizado !!!']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'o usuario não foi bloqueado !!! , (controle do usuario)']);
                    }
                }
                
            }
            $usuario_bloqueado = new usuarios_bloqueados();
            $usuario_bloqueado->id_do_usuario = $id;
            $usuario_bloqueado->motivo_do_bloqueio = $motivos[$validate['motivo']];
            $usuario_bloqueado->mensagem = "Olá Senhor ".$usuarios->nome." , viemos por meio dessa mensagem exclarecer que ouve um bloqueio devido a um de nossos administradores verificar uma ação caracteriza por: ".$motivos[$validate['motivo']]." , no nosso sistema , por esse motivo o senhor está sendo bloqueado no nosso sistema na data: ".date('d/m/Y')." , no horario: ".date('H:i')." no BookNest";
            $usuario_bloqueado->data_do_bloqueio = date('d/m/Y');
            $usuario_bloqueado->hora_do_bloqueio = date('H:i:s');
            $usuario_bloqueado->situacao = "bloqueado";
            if($usuario_bloqueado->save())
            {
                $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                $controle_do_usuario->mensagem = "O Administrador de Nome: ".Auth::user()->nome." , bloqueou o usuario de nome: ".$usuarios->nome." , na data: ".date('d/m/Y')." , no horario: ".date('H:i:s')." , pelo motivo de: ".$motivos[$validate['motivo']]." no booknest";
                if($controle_do_usuario->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'o usuario foi bloqueado']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'o usuario não foi bloqueado !!! , (controle do usuario)']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error ao tentar bloquear o usuario !!!']);
            }
        }
        else
        if($validate['motivo'] === 'desbloquear')
        {
            $usuarios = usuarios::where('id',$id)->first();
            if(!$usuarios)
            {
                return response()->json(['status' => 'error' , 'message' => 'usuario não foi encontrado !!!']);
            }
            $usuario_bloqueado = usuarios_bloqueados::where('id_do_usuario',$id)->first();
            if(!$usuario_bloqueado)
            {
                return response()->json(['status' => 'error' , 'message' => 'o usuario não está bloqueado !!!']);
            }
            if($usuario_bloqueado->delete())
            {
                $usuario_desbloqueado = usuarios_desbloqueados::where('id_do_usuario',$id)->first();
                if(!$usuario_desbloqueado)
                {
                    $usuario_desbloqueado = new usuarios_desbloqueados();
                    $usuario_desbloqueado->id_do_usuario = $id;
                    $usuario_desbloqueado->data_do_desbloqueio = date('d/m/Y');
                    $usuario_desbloqueado->hora_do_desbloqueio = date('H:i:s');
                    $usuario_desbloqueado->Aviso_do_desbloqueio = "Olá Senhor ".$usuarios->nome." , o seu acesso foi permitido novamente para que o senhor desfrute do conteudo do BookNest";
                    if($usuario_desbloqueado->save())
                    {
                        $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
                        $controle_do_usuario->mensagem = "O Administrador: ".Auth::user()->nome." , desbloqueou o usuario de nome: ".$usuarios->nome." , na data ".date('d/m/Y')." , e no horario ".date('H:i')." , no sistema booknest";
                        if($controle_do_usuario->save())
                        {
                            return response()->json(['status' => 'success' , 'message' => 'o usuario foi desbloqueado']);
                        }
                        else
                        {
                            return response()->json(['status' => 'error' , 'message' => 'o usuario não foi desbloqueado (controle)']);
                        }
                    }
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'usuario não foi desbloqueado (usuario)']);
            }
        }
    }
}
