<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\postarLivros;
use App\Models\LivrosSalvos;
class Livros_Salvos extends Controller
{
    public function LivrosSalvos($id,$id_autor,$id_postagem,Request $Validate)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'Você precisa fazer Login !!']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error' , 'message' => 'Error Inesperado !!!']);}
        if(Auth::user()->nivel_acessos !== 'usuario'){return response()->json(['status' => 'error' , 'message' => 'Você não acesso a essa área !!!']);}
        
        $Validate->validate(
            [
                'acao' => 'string|required|max:7|min:5|in:deletar,salvar,dados'
            ] , 
            [
                'acao.string' => 'Error o Resultado não foi reconhecido !!',
                'acao.required' => 'Error o Resultado não pode ser vazio !!',
                'acao.max' => 'Error o Limite Excedeu o Tamanho Requerido !!',
                'acao.min' => 'Error o Limite Não Excedeu o Tamanho Requerido !!',
                'acao.in' => 'Error ação não reconhecida'
            ]
        );
        if($Validate['acao'] === 'deletar')
        {
            $livros_salvos = LivrosSalvos::where('id_do_usuario',$id)->where('id_do_colaborador',$id_autor)->where('id_da_postagem',$id_postagem)->first();
            if($livros_salvos)
            {
                if($livros_salvos->delete()){
                    return response()->json(['status' => 'success' , 'message' => 'O Livro foi Deletado Corretamente !!!']);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'O Livro Não foi Deletado por algum problema  !!!']);
                }
            }
            else
            if($livros_salvos->isEmpty())
            {
                return response()->json(['status' => 'error' , 'message' => 'sua Biblioteca está vazia !!!']);
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'Error Livro Não foi Encontrado !!']);
            }
        }
        else
        if($Validate['acao'] === 'salvar')
        {
            $livros_salvos = LivrosSalvos::where('id_do_usuario',$id)->where('id_do_colaborador',$id_autor)->where('id_da_postagem',$id_postagem)->first();
            if($livros_salvos)
            {
                return response()->json(['status' => 'error' , 'message' => 'O Livro já foi Salvo na sua biblioteca']);
            }
            else
            {
                $livros = postarLivros::where('id',$id_postagem)->first();
                if($livros)
                {
                    $livros_salvos = new LivrosSalvos();
                    $livros_salvos->id_da_postagem = $id_postagem;
                    $livros_salvos->id_do_colaborador = $id_autor;
                    $livros_salvos->id_do_usuario = $id;
                    $livros_salvos->titulo_da_postagem = $livros->titulo;
                    $livros_salvos->livro = $livros->conteudo;
                    $livros_salvos->generos = $livros->genero;
                    $livros_salvos->data = date('d/m/Y');
                    $livros_salvos->hora = date('H:i:s');
                    $livros_salvos->imagem_postagem = $livros->imagem;
                    if($livros_salvos->save())
                    {
                        return response()->json(['status' => 'success' , 'message' => 'O Livro foi Salvo na sua Biblioteca !!!']);
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'Devido algum problema o Livro Não foi Salvo']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'error a postagem não foi encontrada']);
                }
            }
        }
        else
        if($Validate['acao'] === 'dados')
        {
            $livros_salvos = LivrosSalvos::where('id_da_postagem',$id_postagem)->where('id_do_usuario',$id)->where('id_do_colaborador',$id_autor)->first();
            if($livros_salvos)
            {
                return response()->json(['status' => 'success' , 'message' => $livros_salvos::all()->toArray()]);
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => null]);
            }
        }
    }
}
