<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\usuarios;
use App\Models\usuarios_suspensos;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Carbon\Carbon;

class SuspensaoDoUsuario extends Controller
{
    public function SuspensaoDoUsuario($id,Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'é preciso fazer Login']);
        }

        if(Auth::user()->nivel_acessos != 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área']);
        }

        $Validate->validate(
            ['suspensao'=>'required|in:Suspender_Usuário_por:_15_minutos,Suspender_Usuário_por:_30_minutos,Suspender_Usuário_por:_45_minutos,Suspender_Usuário_por:_1_hora,Suspender_Usuário_por:_2_horas,Suspender_Usuário_por:_3_horas'],
            ['suspensao.required'=>'A Suspensão não pode ser vazia !!!','suspensao.in' => 'Nenhuma Suspensão Reconhecida !!!']
        );

        $usuarios = usuarios::where('id',$id)->first();
        if(!$usuarios)
        {
            return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado , tente atualizar a página']);
        }
        $suspensao_tempo = null;
        $tempo_determinado = null;
        if($Validate['suspensao'] === "Suspender_Usuário_por:_15_minutos")
        {
            $suspensao_tempo = Carbon::now()->addMinutes(15);
            $tempo_determinado = "15 minutos";
        }
        if($Validate['suspensao'] === "Suspender_Usuário_por:_30 minutos")
        {
            $suspensao_tempo = Carbon::now()->addMinutes(30);
            $tempo_determinado = "30 minutos";
        }
        if($Validate['suspensao'] === "Suspender_Usuário_por:_45_minutos")
        {
            $suspensao_tempo = Carbon::now()->addMinutes(45);
            $tempo_determinado = "45 minutos";
        }
        if($Validate['suspensao'] === "Suspender_Usuário_por:_1_hora")
        {
            $suspensao_tempo = Carbon::now()->addMinutes(60);
            $tempo_determinado = "1 hora";
        }
        if($Validate['suspensao'] === "Suspender_Usuário_por:_2_horas")
        {
            $suspensao_tempo = Carbon::now()->addMinutes(120);
            $tempo_determinado = "2 hora";
        }
        if($Validate['suspensao'] === "Suspender_Usuário_por:_3_horas")
        {
            $suspensao_tempo = Carbon::now()->addMinutes(180);
            $tempo_determinado = "3 horas";
        }

        $usuario_suspensos = new usuarios_suspensos();
        $usuario_suspensos->id_do_usuario = $id;
        $usuario_suspensos->email_do_cadastrado = $usuarios->email;
        $usuario_suspensos->senha_do_cadastrado = $usuarios->senha;
        $usuario_suspensos->data_da_suspensao = date('d/m/Y');
        $usuario_suspensos->hora_da_suspensao = date('H:i:s');
        $usuario_suspensos->suspenso_ate = $suspensao_tempo;
        $usuario_suspensos->Mensagem_ao_usuario = "Olá Senhor ".$usuarios->nome." , o motivo dessa mensagem é por suspeitarmos da alguma atitude sua , por você está suspenso ao acesso desse sistema por: ".$tempo_determinado." , desculpe-nos o transtornos mas priorizamos por um ambiente completamente regido pelas nossas diretrizes que ampliam uma gama de regras para melhor desenvolvimento de um ambiente completamente voltado a disseminação de conhecimento gratuito e intuitivo , para o avanço do meio , agradeçemos sua colaboração !!! ";
        if($usuario_suspensos->save())
        {
            $controle_do_usuario = new controle_em_tempo_real_dos_dados_do_booknest();
            $controle_do_usuario->mensagem = "O Administrador aplicou a Suspensão: ".$Validate['suspensao']." no usuario de nome: ".$usuarios->nome." , na data de ".date('d/m/Y')." , na hora de ".date('H:i:s')." no sistema booknest";
            if($controle_do_usuario->save())
            {
                return response()->json(['status' => 'success' , 'message' => 'O usuario foi suspenso']);
                
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'o usuario não foi suspenso , (controle usuario)']);
            }
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'o usuario não foi suspenso (suspensão)']);
        }

    }
}
