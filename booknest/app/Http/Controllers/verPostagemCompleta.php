<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\postarLivros;
use App\Models\usuarios;
use Illuminate\Http\Request;

class verPostagemCompleta extends Controller
{
    public function verPostagemCompleta($id)
    {
        if(!Auth::check()){return redirect()->back()->with('feedback','Você precisa estar Logado !!');}
        if(Auth::user()->nivel_acessos !== 'usuario'){return redirect()->back()->with('feedback','Você Não tem Acesso a Essa Área');}
        $postagem = postarLivros::where('id',(int)$id)->first();
        if(!$postagem)
        {
            return redirect()->back()->with('feedback','Algo de Errado , Postagem Não Encontrada');
        }
        $contribuinte = usuarios::where('id',$postagem->id_do_autor)->first();
        return view('verPostagem',['postagem' => $postagem,'contribuinte_nome' =>$contribuinte->nome,'contribuinte_foto'=>$contribuinte->pathname,'contribuinte_id' => $postagem->id_do_autor]);
    }
}