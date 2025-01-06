<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\descricao_do_contribuinte;
use Illuminate\Support\Facades\Auth;

class DescricaoDoContribuint extends Controller
{
    public function Descricao($id , Request $Validate)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'você precisa estar logado']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error','message' => 'error inexperado']);}
        if(Auth::user()->nivel_acessos !== 'contribuinte'){return response()->json(['status' => 'error' , 'message' => 'você não tem acesso á essa Área']);}

        $Validate->validate(
            [
                'descricao'=>'string|max:7500|min:1|required'
            ],
            [
                'descricao.string'=>'sua descrição deve ser um texto',
                'descricao.max'=>'sua descrição ultrapassou o limite',
                'descricao.min'=>'sua descrição não pode ser vazia/nula',
                'descricao.required'=>'sua descrição é necessaria para seu perfil'
            ]
        );

        $descricion = descricao_do_contribuinte::where('id_do_autor',$id)->first();
        if($descricion)
        {
            $descricion->descricao = $Validate['descricao'];
            if($descricion->save())
            {
                return response()->json(['status' => 'success' , 'message' => 'sua descrição foi editada com Sucesso']);
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error sua descrição , não foi editada']);
            }
        }
        else
        {
            // cria uma nova instancia se não existir
            $descricion = new descricao_do_contribuinte();
            $descricion->id_do_autor = $id;
            $descricion->descricao = $Validate['descricao'];
            if($descricion->save())
            {
                return response()->json(['status' => 'success' , 'message' => 'sua descrição foi adicionada com Sucesso']);
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error sua descrição , não foi adicionada']);
            }
        }
    }
}
