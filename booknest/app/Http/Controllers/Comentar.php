<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\postarLivros;
use App\Models\ComentariosTotal;
use App\Models\usuarios;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use Illuminate\Http\Request;

class Comentar extends Controller
{
    public function Comentar($id,$id_autor,$id_postagem,Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisa estar Logado']);
        }
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'contribuinte')
        {
            return response()->json(['status' => 'error' , 'message' => 'Você Não tem Acesso a essa àrea']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado']);
        }

        $Validate->validate(
            ['comentario'=>'required|string|max:10000|min:1'] , 
            [
                'comentario.required'=>'comentario é essencial' , 
                'comentario.string'=>'o comentario deve ser texto',
                'comentario.max' =>'o seu comentario excedeu o limite',
                'comentario.min' =>'o seu comentario não pode ser vazio'
            ]
        );
        // puxa o usuario que esta comentando
        $usuarios = usuarios::where('id',$id)->first();
        if(!$usuarios){return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado']);}
        // puxa o contribuinte que publicou a postagem
        $contribuinte = usuarios::where('id',$id_autor)->first();
        if(!$contribuinte){return response()->json(['status' => 'error' , 'message' => 'contribuinte Não encontrado']);}
        // puxa a postagem que está sendo comentada
        $postagem = postarLivros::where('id',$id_postagem)->first();
        if(!$postagem){return response()->json(['status' => 'error' , 'message' => 'postagem não foi encontrada']);}

        // preparando variaveis
        $imagem_postagem = $postagem->imagem;
        $titulo_postagem = $postagem->titulo;
        $Perfil = $usuarios->pathname;
        $nome = $usuarios->nome;
        $comentario = $Validate['comentario'];
        $data = date('d/m/Y');
        $hora = date('H:i:s');
        // puxa os comentarios
        $comentarios = ComentariosTotal::where('id_user',$id)->get();
        $verificacao = ComentariosTotal::where('id_user',$id)->where('id_postagem',$id_postagem)->where('comentario',$Validate['comentario'])->first();
        if($verificacao){return response()->json(['status' => 'error' , 'message' => 'Você já comentou isso']);}
        if($comentarios->isEmpty())
        {
            // cria uma instancia nova 
            $comentarios = new ComentariosTotal();
            $comentarios->id_user = (int)$id;
            $comentarios->id_autor = (int)$id_autor;
            $comentarios->id_postagem = (int)$id_postagem;
            $comentarios->imagem_postagem = $imagem_postagem;
            $comentarios->titulo_postagem = $titulo_postagem;
            $comentarios->Perfil = $Perfil;
            $comentarios->nome = $nome;
            $comentarios->comentario = $comentario;
            $comentarios->data = $data;
            $comentarios->hora = $hora;
            if($comentarios->save())
            {
                return response()->json(['status' => 'success' , 'message' => 'Comentado']);
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error comentario não publicado']);
            }
        }
        if(!$comentarios)
        {
            // cria uma instancia nova 
            $comentarios = new ComentariosTotal();
            $comentarios->id_user = (int)$id;
            $comentarios->id_autor = (int)$id_autor;
            $comentarios->id_postagem = (int)$id_postagem;
            $comentarios->imagem_postagem = $imagem_postagem;
            $comentarios->titulo_postagem = $titulo_postagem;
            $comentarios->Perfil = $Perfil;
            $comentarios->nome = $nome;
            $comentarios->comentario = $comentario;
            $comentarios->data = $data;
            $comentarios->hora = $hora;
            if($comentarios->save())
            {
                $controle_em_tempo_real_dos_dados_do_booknest = new controle_em_tempo_real_dos_dados_do_booknest();
                $controle_em_tempo_real_dos_dados_do_booknest->mensagem = "O usuario de nome: ".Auth::user()->nome." , comentou: ".$Validate['comentario']." , na postagem: ".$titulo_postagem." , do contribuinte: ".$contribuinte->nome." , na data: ".date('d/m/Y')." , no horario: ".date('H:i:s')." , tudo com Sucesso !!! no Bando de Dados do BookNest";
                if($controle_em_tempo_real_dos_dados_do_booknest->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'Comentado']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'o Comentario Não foi Postado , Erro no controle de Dados']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error comentario não publicado']);
            }
        }
        else
        if($comentarios)
        {
           // crie se de novo uma nova instancia (usuario vai fazer outro comentario)
           $comentarios = new ComentariosTotal();
           $comentarios->id_user = (int)$id;
           $comentarios->id_autor = (int)$id_autor;
           $comentarios->id_postagem = (int)$id_postagem;
           $comentarios->imagem_postagem = $imagem_postagem;
           $comentarios->titulo_postagem = $titulo_postagem;
           $comentarios->Perfil = $Perfil;
           $comentarios->nome = $nome;
           $comentarios->comentario = $comentario;
           $comentarios->data = $data;
           $comentarios->hora = $hora;
           if($comentarios->save())
           {
            $controle_em_tempo_real_dos_dados_do_booknest = new controle_em_tempo_real_dos_dados_do_booknest();
                $controle_em_tempo_real_dos_dados_do_booknest->mensagem = "O usuario de nome: ".Auth::user()->nome." , comentou: ".$Validate['comentario']." , na postagem: ".$titulo_postagem." , do contribuinte: ".$contribuinte->nome." , na data: ".date('d/m/Y')." , no horario: ".date('H:i:s')." , tudo com Sucesso !!! no Bando de Dados do BookNest";
                if($controle_em_tempo_real_dos_dados_do_booknest->save())
                {
                    return response()->json(['status' => 'success' , 'message' => 'Comentado']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'o Comentario Não foi Postado , Erro no controle de Dados']);
                }
           }
           else
           {
               return response()->json(['status' => 'error' , 'message' => 'comentario não publicado']);
           }
        }
    }
}