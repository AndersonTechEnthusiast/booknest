<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\postarLivros;
use App\Models\historico_de_postagens;
use App\Models\controle_das_postagens_do_contribuinte_em_tempo_real;
use App\Models\controle_em_tempo_real_dos_dados_do_booknest;
use App\Models\autentificado;
use Illuminate\Http\UploadedFile;

class PostarLivro extends Controller
{
    public function PostarLivro($id , Request $Validade)
    {
        if(!Auth::check())
        {
            return response()->json(['status' => 'error' , 'message' => 'Você precisa fazer Login para Postar']);
        }
        if(Auth::user()->nivel_acessos !== 'contribuinte')
        {
            return response()->json(['status' => 'error', 'message' => 'Você não tem Acesso a Essa Área']);
        }
        if((int)$id !== (int)Auth::user()->id)
        {
            return response()->json(['status' => 'error' , 'message' => 'Error Inesperado !!!']);
        }
        $Validade->validate(
            [
                'titulo' => 'string|max:255|min:1|required',
                'autor' => 'string|max:50|min:5|required',
                'genero' => 'string|in:Ficção,Não-Ficção,Poesia,Drama,Conto,Infantojuvenil,Novela Gráfica,Humor,Guias de Viagem,Ensaios|required',
                'sinopse' => 'string|max:400|min:10|required',
                'data' => 'string|max:10|min:10|required',
                'editora' => 'string|max:255|min:1|required',
                'numero' => 'numeric|min:1|required',
                'formato' => 'string|max:255|min:1|required',
                'isbn' => 'string|max:17|min:10|required',
                'conteudo' => 'required|mimes:pdf|max:10240', 
                'classificacao' => 'string|in:+10,+12,+14,+16,+18,Livre|required',
                'imagem' => 'image|required|max:2048',
                'more_imagens' => 'array',
                // quando uso "*." para cada elemento da array imagens aplique a regra
                'more_imagens.*' => 'image|mimes:png,jpg,jpeg,webp,avif,gif,svg|max:2048',
               
                
            ],
            [
                'titulo.string' => 'O Titulo deve ser em Letras','titulo.max' => 'O limite Maximo de caracteres Excedeu o limite','titulo.min' => 'O limite Minimo de Caracteres não foi Excedido','titulo.required' => 'O titulo não pode ser vazio',
                'autor.string' => 'O Nome do Autor deve ser em Letras','autor.max' => 'O limite o Maximo de Caracteres foi Excedido','autor.min' => 'O limite Minimo de Caracteres não foi Excedido','autor.required' => 'O autor não pode ser vazio',
                'genero.string' => 'O Genero Deve ser uma string', 'genero.in' => 'Genero não identificado','genero.required' => 'O Genero não pode ser vazio',
                'sinopse.string' => 'A Sinopse deve ser String', 'sinopse.max' => 'O Limite de caracteres excedeu o limite', 'sinopse.min' => 'O Limite Minimo de caracteres não excedeu o limite','sinopse.required' => 'A sinopse não pode ser vazio',
                'data.string' => 'A deve ser string', 'data.max' => 'A Data deve ter no Máximo 10 caracteres' , 'data.min' => 'A Deve ter no Minimo 10 caracteres','data.required' => 'A Data não pode ser vazia',
                'editora.string' => 'A editora deve ser uma string' , 'editora.max' => 'O limite de caracteres excedeu o limite' , 'editora.min' => 'O limite de caracteres não excedeu o limite','editora.required' => 'A Editora não pode ser vazia',
                'numero.numeric' => 'O número de páginas deve ser em número', 'numero.min' => 'O Livro deve ter pelo menos 1 página','numero.required' => 'O Número de Páginas não pode ser vazio',
                'formato.string' => 'O Formato do Livro , deve ser string', 'formato.max' => 'O caracteres excedeu o limite','formato.min' => 'O caracteres não excedeu o limite','formato.required' => 'O formato não pode ser vazio',
                'isbn.string' => 'O ISBN do Livro deve ser string', 'isbn.max' => 'O Limite do caracteres deve ser de 13 caracteres' , 'isbn.min' => 'O Limite Minimo de caracteres deve ser de 10 caracteres','isbn.required' => 'O formato não pode ser vazio',
                'conteudo.required' => 'O Conteudo do Livro não pode ser Vazio',
                'classificacao.string' => 'A Classificação deve ser String' , 'classificacao.in' => 'Classificação Não foi Identificada','classificacao.required' => 'A Classificação não pode ser nula',
                'imagem.image' => 'A Imagem não é uma Imagem' , 'imagem.required' => 'A imagem não pode ser vazia', 'imagem.max' => 'O Limite excedeu os 2MB',
                'more_imagens.*.image' => 'Todos os Arquivos devem ser Imagens',
                'more_imagens.*.mimes' => 'As Imagens devem ser nos Formatos: png,jpg,jpeg,avif,gif,webp,svg',
                'more_imagens.*.max' => 'As Imagens Ultrapassaram o Limite de 2MB'
            ]
        );
        // imagem
        // $Validade->file('imagem')
        // $file->isValid()
        // $file->extension
        // time()
        // $file->move(public_path('pasta'),$new_file)
        // aloca a validação da imagem no file importado do UploadFile
        $file = $Validade->file('imagem');
        // verifica se é valido
        if($file->isValid())
        {
            $extensions = ['png','jpg','webp','avif'];
            if(!in_array($file->extension(),$extensions))
            {
                return response()->json(['status' => 'error' , 'message' => 'Error Extensão não Aceita']);
            }
            $new_file = time().".".$file->extension();
            if($file->move(public_path('publicacao'),$new_file))
            {
                $postagem = postarLivros::where('titulo',$Validade['titulo'])->where('autor',$Validade['autor'])->where('genero',$Validade['genero'])->first();
                if($postagem)
                {
                    return response()->json(['status' => 'error' , 'message' => 'A Postagem já existe no BookNest']);
                }
                // instancia a classe 
                $postagem = new postarLivros();
                $postagem->titulo = $Validade['titulo'];
                $postagem->autor = $Validade['autor'];
                $postagem->genero = $Validade['genero'];
                $postagem->sinopse = $Validade['sinopse'];
                $postagem->data = $Validade['data'];
                $postagem->editora = $Validade['editora'];
                $postagem->num_paginas = $Validade['numero'];
                $postagem->formato = $Validade['formato'];
                $postagem->isbn = $Validade['isbn'];
                $postagem->hora = date('H:i:s');
                $postagem->id_do_autor = $id;
                $conteudo = $Validade->file('conteudo');
                if($conteudo->isValid())
                {
                    if($conteudo->extension() !== 'pdf')
                    {
                        return response()->json(['status' => 'error' , 'message' => 'deve ser um pdf']);
                    }
                    $pdf = time().".".$conteudo->extension();
                    if($conteudo->move(public_path('livros') , $pdf))
                    {
                        $postagem->conteudo = $pdf;
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'error ao tentar inserir livro no banco de dados']);
                    }
                }
                $postagem->imagem = $new_file;
                $postagem->classificacao = $Validade['classificacao'];
                // verifica se o dado foi enviado
                if($Validade->has('more_imagens'))
                {
                     // pegando todos os dados 
                    $files = $Validade->file('more_imagens');
                    // pega a array toda
                    // extensões 
                    $extensions_files = ['png','jpg','jpeg','avif','webp','gif','svg'];
                    $imagems_de_postagens = [];
                    foreach($files as $file)
                    {
                        if($file->isValid())
                        {
                            if(!in_array($file->extension(),$extensions_files))
                            {
                                return response()->json(['status' => 'error' , 'message' => 'A extensão não corresponde ']);
                            }
                            $novas_imagens = time().".".$file->extension();
                            if($file->move(public_path('publicacao'),$novas_imagens))
                            {
                                $imagems_de_postagens[] = $novas_imagens;
                            }
                        }
                    }
                    $postagem->imagens = implode(',',$imagems_de_postagens);
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'Error Fotos adicionais não enviadas']);
                }
                if($postagem->save())
                {
                    // a postagem foi publicada 
                    // o historico será publicado
                    $buscar = postarLivros::where('titulo',$Validade['titulo'])->where('autor',$Validade['autor'])->where('sinopse',$Validade['sinopse'])->where('data',$Validade['data'])->where('isbn',$Validade['isbn'])->first();
                    if($buscar)
                    {
                        $historico = new historico_de_postagens();
                        $historico->titulo = $buscar->titulo;
                        $historico->autor = $buscar->autor;
                        $historico->genero = $buscar->genero;
                        $historico->sinopse = $buscar->sinopse;
                        $historico->data = $buscar->data;
                        $historico->editora = $buscar->editora;
                        $historico->num_paginas = $buscar->num_paginas;
                        $historico->formato = $buscar->formato;
                        $historico->isbn = $buscar->isbn;
                        $historico->hora = $buscar->hora;
                        $historico->id_do_autor = $buscar->id_do_autor;
                        $historico->conteudo = $buscar->conteudo;
                        $historico->imagem = $buscar->imagem;
                        $historico->classificacao = $buscar->classificacao;
                        $historico->imagens = $buscar->imagens;
                        $historico->data_do_historico = date('d/m/Y');
                        $historico->hora_do_historico = date('H:i:s');
                        if($historico->save())
                        {
                            $controle_das_postagens_do_contribuinte_em_tempo_real = new controle_das_postagens_do_contribuinte_em_tempo_real();
                            $controle_das_postagens_do_contribuinte_em_tempo_real->mensagem = "O contribuinte ".Auth::user()->nome." , postou uma postagem de titulo: ".$Validade['titulo']." na data: ".date('d/m/Y')." no horario: ".date('H:i:s').". A Postagem foi Postada com Sucesso !!! no Banco de Dado do BookNest";
                            if($controle_das_postagens_do_contribuinte_em_tempo_real->save())
                            {
                                $autentificacao = autentificado::where('id_do_autor',Auth::user()->id)->first();
                                if(!$autentificacao)
                                {
                                    $postagens_do_usuario = postarLivros::where('id_do_autor',$id)->count();
                                    if($postagens_do_usuario >= 3)
                                    {
                                        $autentificacao = new autentificado();
                                        $autentificacao->autenitificacion = true;
                                        $autentificacao->id_do_autor = Auth::user()->id;
                                        $autentificacao->data = date('d/m/Y');
                                        $autentificacao->hora = date('H:i:s');
                                        if($autentificacao->save())
                                        {
                                            $controle_do_contribuinte = new controle_em_tempo_real_dos_dados_do_booknest();
                                            $controle_do_contribuinte->mensagem = 'O contribuinte de nome: '.Auth::user()->nome.' , foi autentificado automaticamente no sistema booknest por ter alcançado a meta de 100 postagens no booknest , na data de: '.date('d/m/Y').' , no horario de: '.date('H:i:s').'.';
                                            $controle_do_contribuinte->save();
                                            return response()->json(['status' => 'sucess' , 'message' => 'Sucesso Noticia Postada !!!']);
                                        }
                                    }
                                    else
                                    {
                                        return response()->json(['status' => 'sucess' , 'message' => 'Sucesso Noticia Postada !!!']);
                                    }
                                }
                                else
                                {
                                    return response()->json(['status' => 'sucess' , 'message' => 'Sucesso Noticia Postada !!!']);
                                }
                                return response()->json(['status' => 'sucess' , 'message' => 'Sucesso Noticia Postada !!!']);
                            }
                            else
                            {
                                return response()->json(['status' => 'error' , 'message' => 'Error ao Tentar Fazer o Controle do Contribuinte']);
                            }
                        }
                        else
                        {
                            return response()->json(['status' => 'error' , 'message' => 'Error ao Replicar Postagem !!!']);
                        }
                    }
                    else
                    {
                        return response()->json(['status' => 'error' , 'message' => 'A Postagem Publicada Não foi Encontrada !!!']);
                    }
                }
                else
                {
                    return response()->json(['status' => 'error' , 'message' => 'Error Noticia não publicada']);
                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'Error Ao Mover Pasta']);
            }
        }
        else
        if(!$file->isValid())
        {
            return response()->json(['status' => 'error','message' => $file->getErrorMessage()]);
        }

    }
}
