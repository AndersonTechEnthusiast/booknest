@if(Auth::user()->nivel_acessos === 'usuario')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $postagem['titulo'] }}</title>
    <link rel="stylesheet" href="{{ asset('css/Usuario-Logado/Comentarios/style.css?v=1.1') }}">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css'>
    <!-- Esse link abaixo é necessario para o JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Esse link abaixo é necessario para o Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- defer significa depois que o arquivo estiver carregado já -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    @php
        $id = $postagem['id'];
    @endphp
    <meta content="{{ base64_encode(mb_chr((int)Auth::user()->id)) }}" style="display: none" id="id">
    <meta content="{{ base64_encode(mb_chr((int)$id)) }}" style="display: none" id="IdContent">
    <meta style="display: none" content="{{ csrf_token() }}" id="CsrfToken-3">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('js/Colaborador/Tokens.js?v=1.1') }}"></script>
    <script src="{{ asset('js/usuario-logado/Comentarios/curtir.js?v=1.1') }}"></script>
    <script src="{{ asset('js/usuario-logado/Comentarios/Hypar.js?v=1.1') }}"></script>
</head>
<body>
    @php
        $capa = $postagem['imagem'];
    @endphp
    {{-- estilizando cada um dos possiveis tipos de Tela de Carregamento --}}
    @php
        $Generos = [
            'Ficção'=>'img/Usuario-Logado/Ficção-white.png',
            'Não-Ficção'=>'img/Usuario-Logado/Não-Ficção-white.png',
            'Poesia'=>'img/Usuario-Logado/Poesia-white.png',
            'Drama'=>'img/Usuario-Logado/Drama-white.png',
            'Conto'=>'img/Usuario-Logado/Conto-White.png',
            'Infantojuvenil'=>'img/Usuario-Logado/Infanto-White.png',
            'Novela Gráfica'=>'img/Usuario-Logado/Novela-Grafica-White.png',
            'Humor'=>'img/Usuario-Logado/Humor-White.png',
            'Guias de Viagem'=>'img/Usuario-Logado/Guia-de-Viagem-White.png',
            'Ensaios'=>'img/Usuario-Logado/Ensaio-White.png'
        ];
        $imagem = $Generos[$postagem['genero']];
    @endphp
    <div class="tela-de-carregamento-background hidden" id="backgroud-loading">
        <div class="tela-de-carregamento-mensagem" id="mensagem-loading">
            <div class="content-loading">
                <img src="{{ asset("$imagem") }}" alt="Genero">
                <h2><b>BookNest</b></h2>
                <div id="frases-famosas">
                    @php
                        $autores = array_keys(config('FrasesDosAutores'))[rand(0,count(array_keys(config('FrasesDosAutores'))) - 1)];
                    @endphp
                    <h3>{{ config('FrasesDosAutores.'.$autores.'')}}</h3>
                    <h4>- {{ $autores }}</h4>
                </div>
            </div>
        </div>
    </div>
    {{-- fim da Tela de Carregamento --}}
    <span id="content-marquete" class="hidden">
        <img src="{{ asset('img/welcome/Logo.png') }}" alt="">
        <marquee behavior="smooth" direction="right" scrollamount="5">
            <h1>
                {{ $postagem['titulo'] }}
            </h1>
        </marquee>
        <img src="{{ asset('img/welcome/Logo.png') }}" alt="">
    </span>
    <div class="content-elementos hidden">
        <div id="ver-conteudo">
            <div id="tela-de-carregamento-PDF">
                <div id="content-tela-de-carregamento-PDF">
                    <img src="{{ asset($imagem) }}">
                    <b>Carregando o seu Livro</b>
                </div>
            </div>
            <button type="button" class="button" id="prev-button"><i class="fa-solid fa-arrow-left"></i></button>
            <button type="button" class="button" id="next-button"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div id="ver-comenter">
            <div id="comenter"></div>
            <div id="comentar"></div>
        </div>
    </div>
    <hr class="hidden">
    <div class="etinerario-postagem hidden" id="Curtir-Postagem">
        <i class="fas fa-arrow-turn-right"></i>
        <i class="fas fa-arrow-turn-right"></i>
        <p>
            Curtir {{ $postagem['titulo'] }}
        </p>
    </div>
    <br>
    <br>
    <div id="curtir">
        <div id="curtir-titulo "class="hidden"><p>{{ $postagem['titulo'] }}</p></div>
        <div id="curtir-imagem"><img src="{{ asset('publicacao/'.$capa.'') }}" id="imagem-curtir"></div>
        <div id="curtir-autor" class="hidden">publicado por {{ $postagem['autor'] }}</div>
        <div id="buttons-curtir" class="buttons hidden">
            <form id="curtir-form" method="POST">
                <input type="submit" id="like" value="like" style="display: none">
                <input type="submit" id="deslike" value="deslike" style="display: none">
                <label id="for-like" for="like">
                    <i class="fas fa-thumbs-up"></i>
                </label>
                <label id="for-deslike" for="deslike">
                    <i class="fas fa-thumbs-down"></i>
                </label>
            </form>
        </div>
    </div>
    <br>
    <br>
    <hr class="hidden">
    <div class="etinerario-postagem hidden" id="Hypar-Postagem">
        <i class="fas fa-arrow-turn-right"></i>
        <i class="fas fa-arrow-turn-right"></i>
        <p>
            Hypar {{ $postagem['titulo'] }}
        </p>
    </div>
    <br>
    <br>
    <div id="lista-hypar" class="hidden">
        <ul>
            <li>
                <b> Ao Hypar essa Postagem , você estará contribuindo para que a mesma esteja no topo da Lista </b> 
            </li>
        </ul>
    </div>
    <div id="ver-hypar" class="hidden">
        <div id="ver-hypar-1">
            <div id="titulo">{{ $postagem['titulo'] }}</div>
            <div id="capas"><img src="{{ asset('publicacao/'.$capa.'') }}"></div>
            <div id="publicado">publicado por: {{ $postagem['autor'] }}</div>
        </div>
        <div id="ver-hypar-2">
            <div id="content-hypar">
                <div id="titulo-hypar">
                    <h3>
                        Deseja Hypar este Livro ?
                    </h3>
                </div>
                <div id="content-form">
                    <form id="formulario-content">
                        <div id="buttons-radio">
                            <input type="radio" name="hypar" value="hypar_postagem"> Hypar essa Postagem 
                            <input type="radio" name="hypar" value="nao_hypar_post"> Não Hypar essa Postagem
                        </div>
                        <div id="input-submit-radio">
                            <input type="submit" value="Enviar Resposta">
                        </div>
                    </form>
                    <div id="mensagem" style="display: none"></div>
                    <div id="mensagem-alert" style="display: none"></div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <hr class="hidden">
    <div class="etinerario-postagem hidden" id="salvar-livro">
        <i class="fas fa-arrow-turn-right"></i>
        <i class="fas fa-arrow-turn-right"></i>
        <p>
            Salvar o Livro {{ $postagem['titulo'] }}
        </p>
    </div>
    <br>
    <br>
    <div class="hidden" id="salvar-livro-content">
        <form action="#" id="remover-livro-salvos">
            <div class="salvo-image">
                <h2> O LIVRO <p> {{ $postagem['titulo'] }} </p> JÁ FOI ADICIONADO A SUA BIBLIOTECA </h2>
                <img src="{{ asset('img/usuario-logado/pngtree-hand-close-up-pure-hand-drawing-sketch-png-image_390098-Photoroom (7).png') }}" alt="">
                <div class="content-livro-remove">
                    <button type="submit" id="button-livro-remove">
                        <img src="{{ asset('img/Usuario-Logado/pngtree-hand-close-up-pure-hand-drawing-sketch-png-image_390098-Photoroom (9).png') }}" alt="">
                        <p>Remover Livro da sua Biblioteca</p>
                    </button>
                </div>
            </div>
        </form>
        <form action="#" id="salvar-livros-salvos">
            <div class="content-image"><img src="{{ asset('publicacao/'.$capa.'') }}" alt=""></div>
            <div class="content-appli">
                <button type="submit" id="button-saved">
                    <img src="{{asset('img/Usuario-Logado/pngtree-hand-close-up-pure-hand-drawing-sketch-png-image_390098-Photoroom (6).png')}}" alt="">
                    <p>Salvar esse Livro na sua Biblioteca</p>
                </button>
            </div>
        </form>
    </div>
    <hr class="hidden">
    <div class="etinerario-postagem hidden" id="denunciar-livro">
        <i class="fas fa-arrow-turn-right"></i>
        <i class="fas fa-arrow-turn-right"></i>
        <p>
            Denunciar o Livro {{ $postagem['titulo'] }}
        </p>
    </div>
    <br>
    <br>
    <div class="loading" style="display: none">
        <div class="circles" id="circles-1"></div>
        <div class="circles" id="circles-2"></div>
        <div class="circles" id="circles-3"></div>
        <div class="circles" id="circles-4"></div>
        <div class="circles" id="circles-5"></div>
        <div class="circles" id="circles-6"><img src="{{ asset('img/welcome/Logo.png') }}" alt=""></div>
    </div>
    <form action="#" id="denunciar-livros">
        <div class="content-image"><img src="{{ asset('publicacao/'.$capa.'') }}" alt=""></div>
        <div class="content-appli">
            <button type="submit" id="button-denunciar">
                <img src="{{asset('img/Usuario-Logado/29302-Photoroom.png')}}" alt="">
                <p>Denunciar Livro {{ $postagem['titulo'] }}</p>
            </button>
        </div>
    </form>
    <form action="#" id="retirar-denuncia-livros">
        <div class="content-image"><img src="{{ asset('publicacao/'.$capa.'') }}" alt=""></div>
        <div class="content-appli">
            <button type="submit" id="button-retirar-denuncia">
                <img src="{{asset('img/Usuario-Logado/vector-illustration-rotating-arrow-icon-260nw-1874557288-Photoroom.png')}}" alt="">
                <p>Retirar Denuncia do Livro {{ $postagem['titulo'] }}</p>
            </button>
        </div>
    </form>
    <hr class="hidden">
    <div class="etinerario-postagem hidden" id="visualizar-contribuinte">
        <i class="fas fa-arrow-turn-right"></i>
        <i class="fas fa-arrow-turn-right"></i>
        <p>
            Ver o contribuinte {{ $contribuinte_nome }}
        </p>
    </div>
    <br>
    <br>
    <div id="icone-clicavel-foto">
        @php
            $id_do_usuario = Auth::user()->id;
            $id_do_contribuinte = $contribuinte_id;
        @endphp
        <a id="contribuinte-redirect" href="{{ route('ver-perfil',['id' => $id_do_usuario , 'id_autor' => $id_do_contribuinte]) }}">
            @if($contribuinte_foto)
                <img src="{{ asset('imagens-de-perfil-de-usuarios/'.$contribuinte_foto.'') }}" alt="{{ $contribuinte_nome }}">
            @else
                <img src="{{ asset('img/Usuario-Logado/Foto-default.webp') }}" alt="{{ $contribuinte_foto }}">
            @endif
        </a>
    </div>
    <hr class="hidden">
</body>
<script type="module" src="{{ asset('js/usuario-logado/Comentarios/Comentarios.js?v=1.1') }}"></script>
<script src="{{ asset('js/usuario-logado/Comentarios/Livros-Salvos-Add-and-Remove.js?v=1.1') }}"></script>
<script src="{{ asset('js/usuario-logado/Comentarios/Denunciar.js') }}" defer></script>
</html>
@elseif(Auth::user()->nivel_acessos !==  'usuario')
    <p>
        você não tem Acesso a Essa Área
    </p>
@endif