<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Curtida;
use App\Models\usuarios;
use App\Models\postarLivros;
class LikeAndDeslike extends Controller
{
    public function Curtidas($id,$id_autor,$id_postagem,Request $Curtida)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'você precisa realizar Login']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado']);
        }
        if(Auth::user()->nivel_acessos !== 'usuario')
        {
            return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);
        }
        // validate
        $Curtida->validate(
            ['curtida'=>'string|required|max:7|min:4'] , 
            [
                'curtida.string'=>'Valor da sua Curtida Invalido',
                'curtida.required' => 'Valor Requerido',
                'curtida.max' => 'Valor da sua Curtida Invalido',
                'curtida.min' => 'Valor da sua curtida Invalido'
            ]
        );
        if($Curtida['curtida'] !== 'like' && $Curtida['curtida'] !== 'deslike')
        {
            return response()->json(['status' => 'error' , 'message' => 'Valor Alterado !!!']);
        }
        // puxando os dados da tabela usuarios (contribuinte)
        $contribuinte = usuarios::where('id',$id_autor)->first();
        // puxando os dados da tabela postagens (postagem)
        $postagem = postarLivros::where('id',$id_postagem)->first();
        // puxando os dados da tabela de curtidas (curtidas)
        $curtidas = Curtida::where('id_postagem',$id_postagem)->first();

        // verificacoes
        if(!$contribuinte){return response()->json(['status' => 'error' , 'message' => 'contribuinte não encontrado']); }
        if(!$postagem){return response()->json(['status' => 'error' , 'message' => 'postagem não encontrada']); }
        // criando variaveis
        $nome_do_autor_do_Livro = $postagem->autor;
        $titulo_postagem = $postagem->titulo;
        $imagem_postagem = $postagem->imagem;
        if($curtidas)
        {
            $curtidas->id_postagem = $id_postagem;
            $curtidas->id_author = $id_autor;
            $curtidas->id_usuario = $id;
            $curtidas->nome_do_autor_do_Livro = $nome_do_autor_do_Livro;
            $curtidas->titulo_postagem = $titulo_postagem;
            $curtidas->imagem_postagem = $imagem_postagem;
            $curtidas->curtida = $Curtida['curtida'];
            $curtidas->data = date('d/m/Y');
            $curtidas->hora = date('H:i:s');
            if($curtidas->save())
            {
                if($Curtida['curtida'] === 'like'){
                    return response()->json(['status' => 'success' , 'message' => 'Você curtiu '.$titulo_postagem]);
                }
                else
                if($Curtida['curtida'] === 'deslike')
                {
                    return response()->json(['status' => 'success' , 'message' => 'Voce Não gostou de '.$titulo_postagem]);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error ao registrar sua curtida']);
            }
        }
        else
        {
            $curtidas = new Curtida();
            $curtidas->id_postagem = $id_postagem;
            $curtidas->id_author = $id_autor;
            $curtidas->id_usuario = $id;
            $curtidas->nome_do_autor_do_Livro = $nome_do_autor_do_Livro;
            $curtidas->titulo_postagem = $titulo_postagem;
            $curtidas->imagem_postagem = $imagem_postagem;
            $curtidas->curtida = $Curtida['curtida'];
            $curtidas->data = date('d/m/Y');
            $curtidas->hora = date('H:i:s');
            if($curtidas->save())
            {
                if($Curtida['curtida'] === 'like')
                {
                    return response()->json(['status' => 'success' , 'message' => 'Você curtiu '.$titulo_postagem]);
                }
                else
                if($Curtida['curtida'] === 'deslike')
                {
                    return response()->json(['status' => 'success' , 'message' => 'Você Não gostou de '.$titulo_postagem]);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error ao registrar sua curtida']);
            }
        }
    }
}










