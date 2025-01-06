@if(Auth::check())
    @if(Auth::user()->nivel_acessos === 'usuario' || Auth::user()->nivel_acessos === 'contribuinte' || Auth::user()->nivel_acessos === 'administrador')
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>{{ $contribuinte->nome }}</title>
        <link rel="stylesheet" href="{{ asset('css/Usuario-Logado/PerfilDoAutor/PerfilDoAutor.css?v=1.1') }}">
        <!-- Esse link abaixo é necessario para o JQuery -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <!-- Esse link abaixo é necessario para o Axios -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <!-- defer significa depois que o arquivo estiver carregado já -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    </head>
    <body>
        <div class="overlay">
            <div class="modal">
                <div class="modal-circle-1">
                    <img src="{{ asset('img/welcome/Logo.png') }}">
                </div>
            </div>
        </div>
        <header id="Nome-Do-Contribuinte">
            <div id="Nome">
                <img src="{{ asset('img/welcome/Logo.png') }}" class="icon-booknest" alt="Icone Do BookNest">
                <h2>{{ $contribuinte['nome'] }}</h2>
                <img src="{{ asset('img/welcome/Logo.png') }}" class="icon-booknest" alt="Icone Do BookNest">
            </div>
        </header>
        <header class="containers" id="container-perfil-contribuinte">
            <span id="imagem-perfil-contribuinte"></span>
            <section id="container-descricao-contribuinte">
                <span id="descricao-do-contribuinte">
                    <p>
                        @if($descricao)
                            {{ $descricao['descricao'] }}      
                        @endif
                    </p>
                </span>
               
            </section>
        </header>
        <hr>
        <div class="title-header">
            <img src="{{ asset('img/welcome/Logo.png') }}" class="icon-booknest" alt="Icone Do BookNest">
            <h3>Melhores Postagens de {{ $contribuinte['nome'] }}</h3>
        </div>
        <header class="containers" id="container-Melhores-postagens-contribuinte">
            <marquee behavior="alternate" scrollamount="5" id="Melhores-Postagens">
                @if($hypagem)
                    @foreach ($hypagem as $key => $value)
                        <img src="{{ asset('publicacao/'.$key.'') }}">
                    @endforeach
                @endif
            </marquee>
        </header>
        <hr>
        <div class="title-header">
            <img src="{{ asset('img/welcome/Logo.png') }}" class="icon-booknest" alt="Icone Do BookNest">
            <h3>Postagens de {{ $contribuinte['nome'] }}</h3>
        </div>
        <header class="containers" id="container-Postagens-contribuinte">
            <div id="postagens">
                @if($postagens)
                    @foreach ($postagens as $posts)
                        @php
                            $imagem = $posts['imagem'];
                        @endphp
                        @php $id = $posts['id']; @endphp
                        <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="container-postagens">
                                <div class="front">
                                    <div class="container-titulos">{{ $posts['titulo'] }}</div>
                                    <div class="container-imagem"><img src="{{ asset(config('Imagens-generos.'.$posts['genero'].'')) }}" alt="imagem da postagem"></div>
                                    <div class="container-data">{{ $posts['data'] }}</div>
                                </div>
                                <div class="back">
                                    <img src="{{ asset('publicacao/'.$imagem.'') }}">
                                </div>
                            </div>
                        </a>
                    @endforeach
                @endif
            </div>
        </header>
        <hr>
        <div class="title-header">
            <img src="{{ asset('img/welcome/Logo.png') }}" class="icon-booknest" alt="Icone Do BookNest">
            <h3>Autentificação do Contribuinte {{ $contribuinte['nome'] }}</h3>
        </div>
        <header class="containers" id="container-autentificacao-contribuinte">
            @if ($autentificado)
                @if(is_array($autentificado))
                    <div id="autentificacao">
                        @if($autentificado['autenitificacion'])
                        @if($contribuinte)
                            @if($contribuinte['pathname'])
                                @php $perfil_do_contribuinte = $contribuinte['pathname']; $nome_do_contribuinte = $contribuinte['nome'] @endphp
                                <img src="{{ asset('imagens-de-perfil-de-usuarios/'.$perfil_do_contribuinte.'') }}" alt="{{ $nome_do_contribuinte }}" id="imagem-de-perfil-contribuinte">
                                <img src="{{ asset('img/Colaborador/penas-ouro.png') }}" alt="coroa" id="ouro">    
                                <div id="ficha-autor">
                                    <div class="nome">{{ $contribuinte['nome'] }}</div>
                                    <div class="nivel">{{ $contribuinte['nivel_acessos'] }}</div>
                                    <div class="menssage"> Autentificado </div>
                                    <div class="autentifi-info">
                                        {{-- <div class="data-auti">{{ $autentificado['data'] }}</div> --}}
                                        <div class="data-auti">dd/mm/YYYY</div>
                                        {{-- <div class="hora-auti">{{ $autentificado['hora'] }}</div> --}}
                                        <div class="hora-auti">h:i:s</div>
                                    </div>
                                </div>
                            @else
                                @php $nome_do_contribuinte = $contribuinte['nome'] @endphp
                                <img src="{{ asset('img/Usuario-Logado/Foto-default.webp') }}" alt="{{ $nome_do_contribuinte }}" id="imagem-de-perfil-contribuinte">
                                <img src="{{ asset('img/Colaborador/penas-ouro.png') }}" alt="coroa" id="ouro">    
                                <div id="ficha-autor">
                                    <div class="nome">{{ $contribuinte['nome'] }}</div>
                                    <div class="nivel">{{ $contribuinte['nivel_acessos'] }}</div>
                                    <div class="menssage"> Autentificado </div>
                                    <div class="autentifi-info">
                                        {{-- <div class="data-auti">{{ $autentificado['data'] }}</div> --}}
                                        <div class="data-auti">dd/mm/YYYY</div>
                                        {{-- <div class="hora-auti">{{ $autentificado['hora'] }}</div> --}}
                                        <div class="hora-auti">h:i:s</div>
                                    </div>
                                </div>
                            @endif
                        @endif
                        @else
                            contribuinte não autentificado
                        @endif
                    </div>
                @elseif(is_string($autentificado))
                    <div id="autentificacao" style="height: 20px">
                        {{ $autentificado }}
                    </div>
                @endif

            @endif
        </header>
        <header>
            <div class="click-back">
                <button class="button-back">
                    <a href="{{ route('usuario-verify') }}">
                        <span class="span-back">
                            
                        </span>
                    </a>
                </button>
            </div>
        </header>
    </body>
    <script src="{{ asset('js/usuario-logado/Comentarios/Descrição.js?v=1.1') }}"></script>
    <script src="{{ asset('js/usuario-logado/Comentarios/loading.js?v=1.1') }}"></script>
    </html>
    @else
    <p>Error De Acessos</p>
    @endif
@endif