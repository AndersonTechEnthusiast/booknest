<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\solicitacaoContribuinte;
class solicitacao extends Controller 
{
    public function solicitacao($id,Request $Validate)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'você precisa estar logado']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa área']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error' , 'message' => 'error inesperado !!!']);}

        $Validate->validate(
            [
                'requisicao' => 'string|required|max:17|min:11|in:solicitacao,solicitacoes,minha_solicitacao'
            ] , 
            [
                'requisicao.string' => 'A Requisição não é compativél',
                'requisicao.required' => 'A Requisição é necessaria',
                'requisicao.max' => 'A Requisição Excedeu o Limite',
                'requisicao.min' => 'A Requesição não Excedeu o Limite',
                'requisicao.in' => 'A Requisição não é reconhecida'
            ]
        );

        if($Validate['requisicao'] === 'solicitacao')
        {
            
            $solicitacao = solicitacaoContribuinte::where('id_do_usuario',$id)->first();
            if($solicitacao)
            {
                return response()->json(['status' => 'success' , 'message' => 'dados']);
            }
            else
            {
                $solicitacao = new solicitacaoContribuinte();
                $solicitacao->id_do_usuario = $id;
                $solicitacao->status = 'false';
                $solicitacao->hora = date('H:i:s');
                $solicitacao->data = date('d/m/Y');
                if($solicitacao->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'dados']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'error ao tentar solicitar']);
                }
            }
        }
        else
        if($Validate['requisicao'] === 'solicitacoes')
        {
            if(Auth::user()->nivel_acessos === 'administrador')
            {
                return response()->json(solicitacaoContribuinte::all()->toArray());
            }
            else
            {
                return response()->json('você não tem acesso a esses dados !!!');
            }
        }
        else
        if($Validate['requisicao'] === 'minha_solicitacao')
        {
            $solicitacao = solicitacaoContribuinte::where('id_do_usuario',$id)->first();
            if(!$solicitacao)
            {
                return response()->json(['status' => 'error' , 'message' => null]);
            }
            return response()->json(['status' => 'success' , 'message' => $solicitacao->toArray()]);
        }
    }
}
