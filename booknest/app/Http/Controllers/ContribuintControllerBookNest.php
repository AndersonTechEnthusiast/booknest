<?php

namespace App\Http\Controllers;
use App\Models\usuarios;
use App\Models\postarLivros;
use App\Models\Visualizacao_do_Autor;
use App\Models\ComentariosTotal;
use App\Models\Curtida;
use App\Models\Hypar;
use App\Models\historico_de_postagens;
use App\Models\autentificado;
use App\Models\NotificacaoBookNest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ContribuintControllerBookNest extends Controller
{
    
    public function VerifyContribuint(Request $Contribuint)
    {
        if(Auth::check())
        {
            if(Auth::user()->nivel_acessos != "contribuinte")
            {
                return redirect()->back()->with('Error_contribuinte', 'Não Tem Permissão para Esta Área');
            }
            else
            {
                $Postagem = [];
                $Livro = [];
                $chaves = ['id','titulo','autor','genero','sinopse','data','hora','editora','num_paginas','formato','isbn','classificacao','id_do_autor','imagem'];
                $Livros = postarLivros::where('id_do_autor',Auth::user()->id)->get();
                // acessa o Array Associativo do Banco
                foreach($Livros as $livro)
                {
                    // puxa o array dos dados
                    $array = $livro->toArray();
                    // toArray() transforma o Modelo Eloquent em um objeto de array associativo
                    for ($i=0; $i < count($chaves); $i++) {
                        // passos as chaves que quero tanto na nova array quanto na array de valores
                        $Livro[$chaves[$i]] = $array[$chaves[$i]];
                        // quando o valor da quantidade de chaves for igual a quantidade de chaves da array
                        if((int)count($chaves) === (int)count(array_keys($Livro)))
                        {
                            // adicione tudo na array
                            $Postagem[] = $Livro;
                            // esvazie a array para receber mais dados
                            $Livro = [];
                        }
                    }
                }
                $Nomes_dos_Livros = postarLivros::where('id_do_autor',Auth::user()->id)->pluck('titulo');
                $Vizualizações_usuarios = Visualizacao_do_Autor::where('id_do_contribuinte',Auth::user()->id)->get();
                $comentarios = ComentariosTotal::where('id_autor',Auth::user()->id)->get();
                $curtidas = Curtida::where('id_author',Auth::user()->id)->get();
                $popularidade = Hypar::where('id_author',Auth::user()->id)->get();
                $historico = historico_de_postagens::where('id_do_autor',Auth::user()->id)->get();
                $notificação = NotificacaoBookNest::where('id_do_remetente',Auth::user()->id)->where('status','não-lida')->get()->toArray();
                $autentificacao = autentificado::where('id_do_autor',Auth::user()->id)->first();
                // if(!$Postagem)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => [] , 
                //         'Nomes' => $Nomes_dos_Livros ,
                //         'Vizualizacao' => $Vizualizações_usuarios,
                //         'Comentarios' => $comentarios,
                //         'Curtidas' => $curtidas,
                //         'Popularidade' => $popularidade,
                //         'Historico' => $historico,
                //     ]);
                // }
                // if(!$Nomes_dos_Livros)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => $Postagem , 
                //         'Nomes' => [] ,
                //         'Vizualizacao' => $Vizualizações_usuarios,
                //         'Comentarios' => $comentarios,
                //         'Curtidas' => $curtidas,
                //         'Popularidade' => $popularidade,
                //         'Historico' => $historico,
                //     ]);
                // }
                // if(!$Vizualizações_usuarios)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => $Postagem , 
                //         'Nomes' => $Nomes_dos_Livros ,
                //         'Vizualizacao' => [],
                //         'Comentarios' => $comentarios,
                //         'Curtidas' => $curtidas,
                //         'Popularidade' => $popularidade,
                //         'Historico' => $historico,
                //     ]);
                // }
                // if(!$comentarios)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => $Postagem , 
                //         'Nomes' => $Nomes_dos_Livros ,
                //         'Vizualizacao' => $Vizualizações_usuarios,
                //         'Comentarios' => [],
                //         'Curtidas' => $curtidas,
                //         'Popularidade' => $popularidade,
                //         'Historico' => $historico,
                //     ]);
                // }
                // if(!$curtidas)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => $Postagem , 
                //         'Nomes' => $Nomes_dos_Livros ,
                //         'Vizualizacao' => $Vizualizações_usuarios,
                //         'Comentarios' => $comentarios,
                //         'Curtidas' => [],
                //         'Popularidade' => $popularidade,
                //         'Historico' => $historico,
                //     ]);
                // }
                // if(!$popularidade)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => $Postagem , 
                //         'Nomes' => $Nomes_dos_Livros ,
                //         'Vizualizacao' => $Vizualizações_usuarios,
                //         'Comentarios' => $comentarios,
                //         'Curtidas' => $curtidas,
                //         'Popularidade' => [],
                //         'Historico' => $historico,
                //     ]);
                // }
                // if(!$historico)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => $Postagem , 
                //         'Nomes' => $Nomes_dos_Livros ,
                //         'Vizualizacao' => $Vizualizações_usuarios,
                //         'Comentarios' => $comentarios,
                //         'Curtidas' => $curtidas,
                //         'Popularidade' => $popularidade,
                //         'Historico' => [],
                //     ]);
                // }

                // if(!$Postagem && !$Nomes_dos_Livros && !$Vizualizações_usuarios && !$comentarios && !$curtidas && !$popularidade && !$historico)
                // {
                //     return view('Contribuinte-Home',[
                //         'Postagem' => [],
                //         'Nomes' => [],
                //         'Vizualizacao' => [],
                //         'Comentarios' => [],
                //         'Curtidas' => [],
                //         'Popularidade' => [],
                //         'Historico' => [],
                //         'Notificacao' => [],
                //     ]);
                // }
                return view('Contribuinte-Home',[
                    'Postagem' => $Postagem , 
                    'Nomes' => $Nomes_dos_Livros ,
                    'Vizualizacao' => $Vizualizações_usuarios,
                    'Comentarios' => $comentarios,
                    'Curtidas' => $curtidas,
                    'Popularidade' => $popularidade,
                    'Historico' => $historico,
                    'Autentificacao' => $autentificacao,
                    'Notificacao' => $notificação
                ]);
            }
        }
        else
        if(!Auth::check())
        {
            return redirect()->back()->with('Error_contribuinte','Faça Login Por Favor');
        }
    }
}
