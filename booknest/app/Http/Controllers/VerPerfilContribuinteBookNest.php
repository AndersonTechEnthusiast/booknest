<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visualizacao_do_Autor;
use App\Models\descricao_do_contribuinte;
use App\Models\usuarios;
use App\Models\postarLivros;
use App\Models\Hypar;
use App\Models\autentificado;
use Illuminate\Support\Facades\Auth;
class VerPerfilContribuinteBookNest extends Controller
{
    public function PerfilAutor($id,$id_autor)
    {
        if(!Auth::check()){return response()->json(['status' => 'error' , 'message' => 'você precisa fazer login']);}
        if(Auth::user()->nivel_acessos !== 'usuario' && Auth::user()->nivel_acessos !== 'administrador' && Auth::user()->nivel_acessos !== 'contribuinte'){return response()->json(['status' => 'error' , 'message' => 'você não tem acesso a essa área']);}
        if((int)$id !== (int)Auth::user()->id){return response()->json(['status' => 'error' , 'message' => 'error inesperado']);}
        
        // puxando dados
        $usuario = usuarios::where('id',$id)->first();
        $contribuinte = usuarios::where('id',$id_autor)->first();
        $descricao = descricao_do_contribuinte::where('id_do_autor',$id_autor)->first();
        $postagens = postarLivros::where('id_do_autor',$id_autor)->get();
        $hypagens = Hypar::where('id_author',$id_autor)->get();
        $autentificacao = autentificado::where('id_do_autor',$id_autor)->first();
        // verificando 
        if(!$usuario){return response()->json(['status' => 'error' , 'message' => 'usuario não encontrado']);}
        if(!$contribuinte){return response()->json(['status' => 'error' , 'message' => 'contribuinte não encontrado']);}
        // verificando se quem está acessando é um autor
        if($usuario->nivel_acessos === 'contribuinte')
        {
            // se não for um usuario e um administrador 
            if((int)Auth::user()->id !== (int)$id)
            {
                return response()->json(['status' => 'error' , 'message' => 'error inesperado ao tentar ver sua página']);
            }
            if((int)$id !== (int)$id_autor)
            {
                return response()->json(['status' => 'error' , 'message' => 'não tem acesso a essa página']);
            }

            if(!$descricao){
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => $postagens,
                        'descricao' => 'Você ainda não criou a sua descrição',
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => $autentificacao
                    ]);
                }
            }
            if(!$postagens){
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => 'Você não publicou nada ainda !!!',
                        'descricao' => $postagens,
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => $autentificacao
                    ]);
                }
            }
            if(!$hypagens)
            {
                return view('visualizacao-do-autor',[
                    'postagens' => $postagens,
                    'descricao' => $descricao,
                    'contribuinte' => $contribuinte,
                    'hypagem' => 'Você ainda não possui Postagens Hypadas'
                ]);
            }
            if($hypagens)
            {
                // cria uma array para alocar os novos valores
                $postagens_hypadas = [];
                // percorre a array com foreach
                foreach($hypagens as $post)
                {
                    // preenche a nova array com arrays [chave => valor] 
                    $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                }
                // cria uma nova array 
                $Hypadas_postagens = [];
                // percorre a array criada anteriormente , acessando a array interna
                foreach ($postagens_hypadas as $array) {
                    // percorre de novo a array interna em chave => valor
                    foreach ($array as $key => $value) {
                        // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                        $Hypadas_postagens[$key][] = $value;
                    }
                }
                $mais_hypadas = [];
                foreach ($Hypadas_postagens as $key => $value) {
                    $mais_hypadas[$key] = count($value);
                }
                // asort ordena do menor para o maior
                asort($mais_hypadas);
                return view('visualizacao-do-autor',[
                    'postagens' => $postagens,
                    'descricao' => $descricao,
                    'contribuinte' => $contribuinte,
                    'hypagem' => $mais_hypadas,
                    'autentificado' => $autentificacao
                ]);
            }
            if(!$autentificacao)
            {
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => $postagens,
                        'descricao' => $descricao,
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => 'Você ainda não foi atentificado'
                    ]);
                }

            }

        }
        // aplicando na tabela de vizualização que o usuario visualizou a página do Autor
        $vizualizou = Visualizacao_do_Autor::where('id_do_usuario',$id)->where('id_do_contribuinte',$id_autor)->first();
        if($vizualizou)
        {
            if(!$descricao){
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => $postagens,
                        'descricao' => 'o contribuinte não possui descrição',
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => $autentificacao
                    ]);
                }
            }
            if(!$postagens){
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => 'o contribuinte não postou nada ainda',
                        'descricao' => $postagens,
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => $autentificacao
                    ]);
                }
            }
            if(!$hypagens)
            {
                return view('visualizacao-do-autor',[
                    'postagens' => $postagens,
                    'descricao' => $descricao,
                    'contribuinte' => $contribuinte,
                    'hypagem' => 'O Autor não possui Postagens Hypadas'
                ]);
            }
            if(!$autentificacao)
            {
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => $postagens,
                        'descricao' => $descricao,
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => 'Contribuinte ainda não foi autentificado'
                    ]);
                }

            }
            if($hypagens)
            {
                // cria uma array para alocar os novos valores
                $postagens_hypadas = [];
                // percorre a array com foreach
                foreach($hypagens as $post)
                {
                    // preenche a nova array com arrays [chave => valor] 
                    $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                }
                // cria uma nova array 
                $Hypadas_postagens = [];
                // percorre a array criada anteriormente , acessando a array interna
                foreach ($postagens_hypadas as $array) {
                    // percorre de novo a array interna em chave => valor
                    foreach ($array as $key => $value) {
                        // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                        $Hypadas_postagens[$key][] = $value;
                    }
                }
                $mais_hypadas = [];
                foreach ($Hypadas_postagens as $key => $value) {
                    $mais_hypadas[$key] = count($value);
                }
                // asort ordena do menor para o maior
                asort($mais_hypadas);
                return view('visualizacao-do-autor',[
                    'postagens' => $postagens,
                    'descricao' => $descricao,
                    'contribuinte' => $contribuinte,
                    'hypagem' => $mais_hypadas,
                    'autentificado' => $autentificacao
                ]);
            }
            
        }
        else
        {
            // cria uma nova instância 
            $vizualizou = new Visualizacao_do_Autor();
            $vizualizou->Perfil = $usuario->pathname;
            $vizualizou->nome = $usuario->nome;
            $vizualizou->id_do_usuario = $id;
            $vizualizou->id_do_contribuinte = $id_autor;
            $vizualizou->data = date('dd/mm/YY');
            $vizualizou->hora = date('H:i:s');
            if($vizualizou->save())
            {
                if(!$descricao){
                    if($hypagens)
                    {
                        // cria uma array para alocar os novos valores
                        $postagens_hypadas = [];
                        // percorre a array com foreach
                        foreach($hypagens as $post)
                        {
                            // preenche a nova array com arrays [chave => valor] 
                            $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                        }
                        // cria uma nova array 
                        $Hypadas_postagens = [];
                        // percorre a array criada anteriormente , acessando a array interna
                        foreach ($postagens_hypadas as $array) {
                            // percorre de novo a array interna em chave => valor
                            foreach ($array as $key => $value) {
                                // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                                $Hypadas_postagens[$key][] = $value;
                            }
                        }
                        $mais_hypadas = [];
                        foreach ($Hypadas_postagens as $key => $value) {
                            $mais_hypadas[$key] = count($value);
                        }
                        // asort ordena do menor para o maior
                        asort($mais_hypadas);
                        return view('visualizacao-do-autor',[
                            'postagens' => $postagens,
                            'descricao' => 'o contribuinte não possui descrição',
                            'contribuinte' => $contribuinte,
                            'hypagem' => $mais_hypadas,
                            'autentificado' => $autentificacao
                        ]);
                    }
                }
                if(!$postagens){
                    if($hypagens)
                    {
                        // cria uma array para alocar os novos valores
                        $postagens_hypadas = [];
                        // percorre a array com foreach
                        foreach($hypagens as $post)
                        {
                            // preenche a nova array com arrays [chave => valor] 
                            $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                        }
                        // cria uma nova array 
                        $Hypadas_postagens = [];
                        // percorre a array criada anteriormente , acessando a array interna
                        foreach ($postagens_hypadas as $array) {
                            // percorre de novo a array interna em chave => valor
                            foreach ($array as $key => $value) {
                                // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                                $Hypadas_postagens[$key][] = $value;
                            }
                        }
                        $mais_hypadas = [];
                        foreach ($Hypadas_postagens as $key => $value) {
                            $mais_hypadas[$key] = count($value);
                        }
                        // asort ordena do menor para o maior
                        asort($mais_hypadas);
                        return view('visualizacao-do-autor',[
                            'postagens' => 'o contribuinte não postou nada ainda',
                            'descricao' => $postagens,
                            'contribuinte' => $contribuinte,
                            'hypagem' => $mais_hypadas,
                            'autentificado' => $autentificacao
                        ]);
                    }
                }
                if(!$hypagens)
                {
                    return view('visualizacao-do-autor',[
                        'postagens' => $postagens,
                        'descricao' => $descricao,
                        'contribuinte' => $contribuinte,
                        'hypagem' => 'O Autor não possui Postagens Hypadas',
                        'autentificado' => $autentificacao

                    ]);
                }
                if($hypagens)
                {
                    // cria uma array para alocar os novos valores
                    $postagens_hypadas = [];
                    // percorre a array com foreach
                    foreach($hypagens as $post)
                    {
                        // preenche a nova array com arrays [chave => valor] 
                        $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                    }
                    // cria uma nova array 
                    $Hypadas_postagens = [];
                    // percorre a array criada anteriormente , acessando a array interna
                    foreach ($postagens_hypadas as $array) {
                        // percorre de novo a array interna em chave => valor
                        foreach ($array as $key => $value) {
                            // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                            $Hypadas_postagens[$key][] = $value;
                        }
                    }
                    $mais_hypadas = [];
                    foreach ($Hypadas_postagens as $key => $value) {
                        $mais_hypadas[$key] = count($value);
                    }
                    // asort ordena do menor para o maior
                    asort($mais_hypadas);
                    return view('visualizacao-do-autor',[
                        'postagens' => $postagens,
                        'descricao' => $descricao,
                        'contribuinte' => $contribuinte,
                        'hypagem' => $mais_hypadas,
                        'autentificado' => $autentificacao
                    ]);
                }
                if(!$autentificacao)
                {
                    if($hypagens)
                    {
                        // cria uma array para alocar os novos valores
                        $postagens_hypadas = [];
                        // percorre a array com foreach
                        foreach($hypagens as $post)
                        {
                            // preenche a nova array com arrays [chave => valor] 
                            $postagens_hypadas[] = [$post['imagem_postagem'] => $post['hypar_postagem']];
                        }
                        // cria uma nova array 
                        $Hypadas_postagens = [];
                        // percorre a array criada anteriormente , acessando a array interna
                        foreach ($postagens_hypadas as $array) {
                            // percorre de novo a array interna em chave => valor
                            foreach ($array as $key => $value) {
                                // e dentro da nova array adiciona que cada chave tera uma array que alocará todos os valores recorrentes a essa chave
                                $Hypadas_postagens[$key][] = $value;
                            }
                        }
                        $mais_hypadas = [];
                        foreach ($Hypadas_postagens as $key => $value) {
                            $mais_hypadas[$key] = count($value);
                        }
                        // asort ordena do menor para o maior
                        asort($mais_hypadas);
                        return view('visualizacao-do-autor',[
                            'postagens' => $postagens,
                            'descricao' => $descricao,
                            'contribuinte' => $contribuinte,
                            'hypagem' => $mais_hypadas,
                            'autentificado' => 'O Contribuinte ainda não foi atentificado'
                        ]);
                    }

                }
            }
            else
            {
                return response()->json(['status' => 'error' , 'message' => 'error não foi possivel mostrar a Página do Contribuinte']);
            }
        }
    }
}
