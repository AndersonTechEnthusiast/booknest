<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\NotificacaoBookNest;
class NotificacaoContribuinte extends Controller
{
    public function notificacao($id)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você deve fazer Login !!!']);
        }
        if(Auth::user()->nivel_acessos !== 'contribuinte')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área !!!']);
        }

        $notificacao = NotificacaoBookNest::where('id_do_remetente',$id)->where('status','não-lida')->get()->toArray();

        if(!$notificacao)
        {
            return response()->json(['status' => 'vazio' , 'mensagem' , 'nenhuma notificacao']);
        }

        return response()->json(['status' => 'success' , 'mensagem' => $notificacao]);
    }
}
