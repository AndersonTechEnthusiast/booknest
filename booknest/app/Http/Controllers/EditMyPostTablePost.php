<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use App\Models\usuarios;
use App\Models\postarLivros;
use Illuminate\Support\Facades\Auth;

class EditMyPostTablePost extends Controller
{
    public function EditarMyPostFromTable($id , Request $Validate)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'É necessario fazer Login']);
        }
        if(Auth::user()->nivel_acessos !== 'contribuinte')
        {
            return response()->json(['status' => 'error' , 'message' => 'Você não tem Acesso a essa Área']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado !!!']);
        }
        
        $Validate->validate(
            [
                'id' => 'numeric',
                'titulo' => 'string|max:255|min:1',
                'autor' => 'string|max:255|min:1',
                'genero' => 'string|in:Não-Ficção,Poesia,Drama,Conto,Infantojuvenil,Novela Gráfica,Humor,Guias de Viagem,Ensaios,Ficção',
                'sinopse' => 'string|max:300|min:10',
                'editora' => 'string|max:255|min:1',
                'numero' => 'numeric|max:1000|min:1',
                'isbn' => 'string|max:17|min:10',
                'classificacao' => 'string|in:+12,+14,+16,+18,Livre',
            ],
            [
                'id.numeric' => 'Error na Transferencia de Id',
                'titulo.string' => 'O titulo deve ser um texto','titulo.max' => 'O Limite Máximo foi Ultrapassado','titulo.min' => 'O Limite Mínimo foi Ultrapassado',
                'autor.string' => 'O autor deve ter um nome em texto','autor.max' => 'O Limite Máximo foi Ultrapassado','autor.min' => 'O Limite Mínimo foi Ultrapassado',
                'genero.string' => 'O genero deve ter ser um texto','genero.in' => 'genero não reconhecido',
                'sinopse.string' => 'A sinopse deve ser um texto','sinopse.max' => 'O Limite Máximo da Sinopse foi Ultrapassado','sinopse.min' => 'O Limite Minimo da Sinopse foi Ultrapassado',
                'editora.string' => 'A editora deve ser um texto','editora.max' => 'O Limite Máximo da Editora foi Ultrapassado','editora.min' => 'O Limite Minimo da Editora foi Ultrapassado',
                'numero.numeric' => 'O Número de Página deve ser em Números','numero.max' => 'O limite maximo de Páginas ultrapassou o limite','numero.min' => 'O limite minimo de Páginas ultrapassou o limite',
                'isbn.string' => 'ISBN deve ser no formato','isbn.max' => 'O Limite Máximo foi Ultrapassado','isbn.min' => 'O Limite Minimo foi Ultrapassado',
                'classificacao.string' => 'A classificação deve ser em texto','classificacao.in' => 'A Faixa Etaria não é reconhecida'
            ]
        );
        // puxando os dados no banco de dados
        $postagem = postarLivros::where('id',$Validate['id'])->where('id_do_autor',$id)->first();
        if(!$postagem)
        {
            return response()->json(['status' => 'error' , 'message' => 'Postagem não encontrada']);
        }
        $postagem->titulo = $Validate['titulo'];
        $postagem->autor = $Validate['autor'];
        $postagem->genero = $Validate['genero'];
        $postagem->sinopse = $Validate['sinopse'];
        $postagem->editora = $Validate['editora'];
        $postagem->num_paginas = $Validate['numero'];
        $postagem->isbn = $Validate['isbn'];
        $postagem->classificacao = $Validate['classificacao'];
        if($postagem->save())
        {
            return response()->json(['status' => 'sucess' , 'message' => 'Sucesso Noticia Editada']);
        }
        else
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Noticia Não Editada']);
        }
    }
}
