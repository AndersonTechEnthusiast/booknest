<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\postarLivros;
use Illuminate\Support\Facades\Auth;
class exclusaoPost extends Controller
{
    public function exclusion(Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você precisa fazer Login']);
        }
        if(Auth::user()->nivel_acessos !== 'contribuinte' && Auth::user()->nivel_acessos !== 'administrador')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);
        }

        $Validate->validate(
            ['id'=>'numeric|required'],
            ['id.numeric'=>'error postagem não encontrada','id.required' => 'error ao tentar procurar dado']
        );
        
        $postagem = postarLivros::where('id',$Validate['id'])->first();
        
        if(!$postagem)
        {
            return response()->json(['status' => 'error' , 'message' => 'Postagem não existe !!!']);
        }

        if($postagem->delete())
        {
            return response()->json(['status' => 'success' , 'message' => 'A Postagem foi Deletada']);
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'A Postagem não foi Deletada']);
        }
    }
}
