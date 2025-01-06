<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/Colaborador/Colaborador.css?v=1.1')}}">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-rounded/css/uicons-thin-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-straight/css/uicons-thin-straight.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-straight/css/uicons-bold-straight.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://kit.fontawesome.com/7bcc76ecaf.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css'>
    <!-- Esse link abaixo é necessario para o JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Esse link abaixo é necessario para o Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- defer significa depois que o arquivo estiver carregado já -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <meta name="auth-id" content="{{ base64_encode(mb_chr((int)Auth::user()->id)) }}" style="display: none" id="IdContent">
    <meta name="csrf-token" content="{{ csrf_token() }}" style="display: none" id="CsrfToken">
    <meta name='csrf-token-1' content="{{ csrf_token() }}" style="display: none" id="CsrfToken-1">
    <meta name='csrf-token-2' content="{{ csrf_token() }}" style="display: none" id="CsrfToken-2">
    <meta name='csrf-token-2' content="{{ csrf_token() }}" style="display: none" id="CsrfToken-3">
    <meta name="csrf-token-4" content="{{ csrf_token() }}" style="display: none" id="CsrfToken-4">
    <script src="{{asset('js/Colaborador/Tokens.js?v=1.1')}}"></script>
    <script src="{{asset('js/Colaborador/RequisoesAssicronicas.js?v=1.1')}}"></script>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css'>
    <title>Contribuinte</title>
</head>
<body>
    @if(Auth::check())
        @if(session('message'))
            <div class="mensagem">{{ session('message') }}</div>
        @endif
        <div class="loading">
            <div class="logo-name">
                <img src="{{asset('img/welcome/Logo.png')}}" alt="">
                <p>BookNest</p>
            </div>
        </div>
        <div class="etinerario-name-colaborador">
            <p>
                {{Auth::user()->nome}}
            </p>
            <div class="imgs-tags">
                <img src="{{asset('img/welcome/Logo.png')}}" alt="links">
                <img src="{{asset('img/welcome/Logo.png')}}" alt="links">
            </div>
        </div>
        <div class="notificações-contribuinte">
            @if($Notificacao)
                <i class="fi fi-rs-bell-notification-social-media" id="notify" aria-label="{{ base64_encode(mb_chr((int)Auth::user()->id)) }}"></i>
            @endif
        </div>
        @if($errors->any())
            @foreach ($errors->all() as $error)
                <p>{{ $error }}</p>
            @endforeach
        @endif
        <div class="Credenciais-colaborador">
            <div class="activador-popup-colaborador">
                <a href="#" class="link-photo">
                    @if(Auth::user()->pathname)
                        <img src="{{asset('imagens-de-perfil-de-usuarios/'.Auth::user()->pathname.'')}}" alt="sua Imagem de Perfil">
                    @else
                        <img src="{{asset('img/Usuario-Logado/Foto-default.webp')}}" alt="sua Imagem de Perfil">
                    @endif
                </a>
            </div>
        </div>
        <div class="menu">
            <div class="submenu">
                <div class="redirect-pages">
                    <ul>
                        <li>
                            <div class="container-icons">
                                <div class="icon-open-and-close-menu">
                                    <a href="#" class="link-open-and-close-menu">
                                        <i class="fi fi-rr-menu-burger" id="open-menu"></i>
                                        <i class="fi fi-br-cross" id="close-menu"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                       <a href="#" class="link-menu-colaborador">
                        <li>
                            <div class="options-menu">
                                <span class="background-reedirect-options" id="section-1"></span>
                                <div class="text-redirect">
                                    <p>Home</p>
                                </div>
                            </div>
                        </li>
                       </a>
                       <a href="#" class="link-menu-colaborador">
                        <li>
                            <div class="options-menu">
                                <span class="background-reedirect-options" id="section-2"></span>
                                <div class="text-redirect">
                                    <p>DashBoard</p>
                                </div>
                            </div>
                        </li>
                       </a>
                       <a href="#" class="link-menu-colaborador">
                        <li>
                            <div class="options-menu">
                                <span class="background-reedirect-options" id="section-3"></span>
                                <div class="text-redirect">
                                    <p>Meus Posts</p>
                                </div>
                            </div>
                        </li>
                       </a>
                       <a href="#" class="link-menu-colaborador">
                        <li>
                            <div class="options-menu">
                                <span class="background-reedirect-options" id="section-4"></span>
                                <div class="text-redirect">
                                    <p>Meu Perfil</p>
                                </div>
                            </div>
                        </li>
                       </a>
                       <a href="#" class="link-menu-colaborador">
                        <li>
                            <div class="options-menu">
                                <span class="background-reedirect-options" id="section-5"></span>
                                <div class="text-redirect">
                                    <p>Termos de Responsabilidades do Colaborador</p>
                                </div>
                            </div>
                        </li>
                       </a>
                       <li>
                            <form id="form-exit" method="POST" action="{{route('logout')}}">
                                @csrf
                                    <div class="options-menu">
                                        <span class="background-reedirect-options" id="section-6"><label for="sair" class="link-sair"><i class="fi fi-br-exit"></i></label></span>
                                        <div class="text-redirect">
                                            <p><label for="sair" class="link-sair"> Sair </label></p>
                                        </div>
                                    </div>
                                <input type="submit" value="sair" id="sair">
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="Pages-Colaborador">
            <div class="Pages" id="Page-1">
                <div class="your-description">
                    <div class="text-descripty">
                        <span class="title-descripty"><img src="{{asset('img/welcome/Logo.png')}}" alt="icone"><p> Descrição  </p></span>
                        <div class="text"></div>
                    </div>
                    <div class="your-tags">
                        <span class="title-descripty" id="secound-title"><img src="{{asset('img/welcome/Logo.png')}}" alt="icone"><p> Objetivos e Importancia do Colaborador </p></span>
                        <div class="tags-container">
                            <div class="tags-objetivos-e-importancia tags-1">
                                <ul>
                                    <li>
                                        <div id="titulo-tags"><img src="{{asset('img/welcome/Logo.png')}}" alt="tags"><b>Garantir a Qualidade do Conteúdo</b></div>
                                        <div><b>objetivo:</b><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores dicta at provident veniam. Est eos corrupti illo doloremque possimus eligendi earum corporis? Temporibus, velit odit. Dicta temporibus ut sapiente?lorem</span></div>
                                        <div><b>Importancia</b><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, atque minima repellat aperiam veritatis cupiditate est vero ab, dignissimos quaerat distinctio perferendis accusantium harum, eligendi vel animi maiores at. Sunt?</span></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tags-objetivos-e-importancia tags-2">
                                <ul>
                                    <li>
                                        <div id="titulo-tags"><img src="{{asset('img/welcome/Logo.png')}}" alt="tags"><b>Promover a Experiência do Usuário</b></div>
                                        <div><b>objetivo:</b><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores dicta at provident veniam. Est eos corrupti illo doloremque possimus eligendi earum corporis? Temporibus, velit odit. Dicta temporibus ut sapiente?lorem</span></div>
                                        <div><b>Importancia</b><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, atque minima repellat aperiam veritatis cupiditate est vero ab, dignissimos quaerat distinctio perferendis accusantium harum, eligendi vel animi maiores at. Sunt?</span></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tags-objetivos-e-importancia tags-3">
                                <ul>
                                    <li>
                                        <div id="titulo-tags"><img src="{{asset('img/welcome/Logo.png')}}" alt="tags"><b>Gerenciar e Atualizar o Catálogo de Livros</b></div>
                                        <div id="objetivo-tags"><b>objetivo:</b><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores dicta at provident veniam. Est eos corrupti illo doloremque possimus eligendi earum corporis? Temporibus, velit odit. Dicta temporibus ut sapiente?lorem</span></div>
                                        <div id="importancia-tags"><b>Importancia</b><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, atque minima repellat aperiam veritatis cupiditate est vero ab, dignissimos quaerat distinctio perferendis accusantium harum, eligendi vel animi maiores at. Sunt?</span></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tags-objetivos-e-importancia tags-4">
                                <ul>
                                    <li>
                                        <div id="titulo-tags"><img src="{{asset('img/welcome/Logo.png')}}" alt="tags"><b>Fomentar a Interação e Comunidade</b></div>
                                        <div><b>objetivo:</b><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores dicta at provident veniam. Est eos corrupti illo doloremque possimus eligendi earum corporis? Temporibus, velit odit. Dicta temporibus ut sapiente?lorem</span></div>
                                        <div><b>Importancia</b><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, atque minima repellat aperiam veritatis cupiditate est vero ab, dignissimos quaerat distinctio perferendis accusantium harum, eligendi vel animi maiores at. Sunt?</span></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tags-objetivos-e-importancia tags-5">
                                <ul>
                                    <li>
                                        <div id="titulo-tags"><img src="{{asset('img/welcome/Logo.png')}}" alt="tags"><b>Implementar e Monitorar Estratégias de Marketing e SEO</b></div>
                                        <div><b>objetivo:</b><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut maiores dicta at provident veniam. Est eos corrupti illo doloremque possimus eligendi earum corporis? Temporibus, velit odit. Dicta temporibus ut sapiente?lorem</span></div>
                                        <div><b>Importancia</b><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, atque minima repellat aperiam veritatis cupiditate est vero ab, dignissimos quaerat distinctio perferendis accusantium harum, eligendi vel animi maiores at. Sunt?</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="your-last-posts">
                    <span class="title-your-last-posts"><img src="{{asset('img/welcome/Logo.png')}}" alt="Logo"><b> Suas Últimas Postagens </b><img src="{{asset('img/welcome/Logo.png')}}" alt="Logo"></span>
                    <div class="info-your-lasts-posts">
                        <a href="#" id="icon-ativador-popup">
                            <i class="fi fi-tr-comment-info"></i>
                        </a>
                    </div>
                    <!-- pega as primeiras postagens do colaborador -->
                    <div class="container-images-hover-scale">
                        @php
                            $contador_the_last = 0;
                        @endphp
                        @if(!empty($Postagem))
                            @foreach ($Postagem as $Post)
                                @php $contador_the_last++; @endphp
                                <div class="card-scale" id="@php echo "card-scale-".$contador_the_last @endphp">
                                    @php
                                        $imagem = $Post['imagem'];
                                    @endphp
                                    <img src='{{ asset('publicacao/'.$imagem)}}' alt="sua imagem">
                                    <div class="paralelograma">
                                        <ul>
                                            <li class="lista-de-informacoes" id="informacoes-1"><b>Titulo</b> {{ $Post['titulo'] }}</li>
                                            <li class="lista-de-informacoes" id="informacoes-2"><b>Autor</b> {{ $Post['autor'] }}</li>
                                            <li class="lista-de-informacoes" id="informacoes-3"><b>Genero</b> {{ $Post['genero'] }}</li>
                                            {{-- <li class="lista-de-informacoes" id="informacoes-4"><b></b> {{ $Post['sinopse'] }}</li> --}}
                                            <li class="lista-de-informacoes" id="informacoes-6"><b>Editora</b> {{ $Post['editora'] }}</li>
                                            <li class="lista-de-informacoes" id="informacoes-7"><b>Numero de Página</b> {{ $Post['num_paginas'] }} <b>Páginas</b></li>
                                            <li class="lista-de-informacoes" id="informacoes-8"><b>Formato</b> {{ $Post['formato'] }}</li>
                                            <li class="lista-de-informacoes" id="informacoes-9"><b>ISBN</b> {{ $Post['isbn'] }}</li>
                                            <li class="lista-de-informacoes" id="informacoes-11"><b>Classificação</b> {{ $Post['classificacao'] }}</li>
                                        </ul>
                                    </div>
                                </div>
                                @if ($contador_the_last === 15)
                                    @break
                                @endif
                            @endforeach
                        @endif
                    </div>
                </div>
                <!-- Traga a coluna em que especifica se o usuario possui a autentificação é true ou false -->
                <div class="autenfic">
                    <div class="etinerario">
                        <div class="stars">
                            <div class="icon-starts-and-text">
                                <img src="{{asset('img/Colaborador/download-Photoroom (1).png')}}" alt="autenficação">
                                <p> Autentificação </p>
                            </div>
                        </div>
                    </div>
                    <div class="containers-explificacoes" id="what-is-we-autenficacio">
                        
                    </div>
                    <div class="show-certificado">
                        <a href="#" id="link-show-certificado">
                            <img src="{{asset('img/Colaborador/Certificado (3).png')}}" alt="Certificado">
                            <p>ver o Certificado do Colaborador ?</p>
                        </a>
                    </div>
                    <!-- se for true -->
                    <div class="autenficacao-view">
                        <div class="view-perfil-autentificacao">
                            <img src="{{asset('img/Colaborador/penas-ouro.png')}}" alt="gratificação" id="gratificação">
                            @if(Auth::user()->pathname)
                                <img src="{{asset('imagens-de-perfil-de-usuarios/'.Auth::user()->pathname.'')}}" alt="sua Imagem de Perfil" id="default">
                            @else
                                <img src="{{asset('img/Usuario-Logado/Foto-default.webp')}}" alt="sua Imagem de Perfil" id="default">
                            @endif
                        </div>
                    </div>
                    <div class="nao-autentificado">
                        <div class="box-nao-autentificacao">
                            <p>
                                NÃO AUTENTIFICADO
                            </p>
                            <i class="fi fi-ts-sad"></i>
                            <p>
                                continue postando !!!
                            </p>
                        </div>
                        <span>
                            <a href="#" id="info-não-autentificado">
                                <i class="fi fi-ts-comment-info"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="Pages" id="Page-2">
                <span class="DashBoard-title">
                    <div class="icone-dashboard">
                        <i class="fi fi-br-angle-double-right"></i>
                        <b>
                            DashBoard 
                        </b>
                        <i class="fi fi-bs-chart-simple"></i>
                    </div>
                    <div class="sumario-DashBoard">
                        <ul>
                            <a href="#inicio-dashboard" class="smooth-redirect" id="smooth-redirect-1"><li>Inicio</li></a>
                            <a href="#section-1-dashboard" class="smooth-redirect" id="smooth-redirect-2"><li>Visão Geral de Atividades</li></a>
                            <a href="#section-2-dashboard" class="smooth-redirect" id="smooth-redirect-3"><li>Postagem de Novos Livros</li></a>
                            <a href="#section-3-dashboard" class="smooth-redirect" id="smooth-redirect-4"><li>Gerenciamento de Livros P.</li></a>
                            <a href="#section-4-dashboard" class="smooth-redirect" id="smooth-redirect-5"><li>Editor de Texto Avançado</li></a>
                            <a href="#section-5-dashboard" class="smooth-redirect" id="smooth-redirect-6"><li>Histórico de Edições e Versões</li></a>
                            <a href="#section-6-dashboard" class="smooth-redirect" id="smooth-redirect-7"><li>Pré-visualização de Livros</li></a>
                            <a href="#section-7-dashboard" class="smooth-redirect" id="smooth-redirect-8"><li>Estatísticas e Análises de Desempenho</li></a>
                            <a href="#section-11-dashboard" class="smooth-redirect" id="smooth-redirect-12"><li>Configurações de Notificações</li></a>
                            <a href="#section-12-dashboard" class="smooth-redirect" id="smooth-redirect-13"><li>Suporte ao Colaborador</li></a>
                            <a href="#section-15-dashboard" class="smooth-redirect" id="smooth-redirect-16"><li>Moderação de Conteúdos</li></a>
                        </ul>
                    </div>
                </span>
                {{-- <div class="sininho">
                    <a class="icone-sininho" href="#section-11-dashboard">
                        <span>
                            @if ($Notificacao)
                                @php $notificacao_array = []; @endphp
                                @foreach ($Notificacao as $notificacao)
                                    @php
                                        $notificacao_array[] = $notificacao['status'];
                                    @endphp
                                @endforeach
                                @php $notificacao_count = count($notificacao_array); @endphp
                                Você tem {{ (int)$notificacao_count }} Novas Mensagens
                            @endif
                        </span>
                        <i class="fas fa-bell" style="color: white; font-size: 24px;"></i>
                    </a>
                </div> --}}
                <div class="boxes-dashboads">
                    <div class="boxes-dashboards-explication" id="boxes-dashboards1"></div>
                    <div class="boxes-dashboards-explication" id="boxes-dashboards2"></div>
                    <div class="boxes-dashboards-explication" id="boxes-dashboards3"></div>
                    <div class="boxes-dashboards-explication" id="boxes-dashboards4"></div>
                    <div class="boxes-dashboards-explication" id="boxes-dashboards5"></div>
                    <div class="boxes-dashboards-explication" id="boxes-dashboards6"></div>
                </div>
                <section class="boxes-dashboards-introdution hidden-sumario" id="inicio-dashboard"></section>
                <section class="boxes-dashboards-1 hidden-sumario conjunto-DashBoard" id="section-1-dashboard">
                @if(!empty($Postagem))
                    @if(isset($Postagem) && $Postagem > 0)
                        @php
                            $quantidade = [];
                            $quantidade_strlen = [];
                            $quantidade_encode = [];
                            $quantidade_chars = [];
                            foreach ($Postagem as $item) {
                                $quantidade[$item['id']] = $item['imagem'];
                                $quantidade_strlen[] = grapheme_strlen($item['imagem']);
                            }
                            $quantidade_str = mb_str_split(implode(':',$quantidade));
                            foreach ($quantidade_str as $item) {
                                $quantidade_encode[] = base64_encode(mb_ord($item));
                            }
                            $quantidade_final = base64_encode(implode(':',$quantidade_encode));
                        @endphp
                    @endif
                @endif
                </section>
                <section class="boxes-dashboards-2 hidden-sumario conjunto-DashBoard" id="section-2-dashboard"></section>
                <section class="boxes-dashboards-3 hidden-sumario conjunto-DashBoard" id="section-3-dashboard"></section>
                <section class="boxes-dashboards-4 hidden-sumario conjunto-DashBoard" id="section-4-dashboard"></section>
                @if(!empty($Postagem))
                    @php
                        // verifica se é uma Array
                        if(is_array($Postagem))
                        {
                            // cria uma array de imagens
                            $imagens = [];

                            // percorre as Variaveis
                            foreach ($Postagem as $dados) {
                                // aloca em imagens os ids => imagens
                                $imagens[$dados['titulo']] = $dados['imagem'];

                            }

                            $stringJson = implode(",",array_values($imagens));
                            $stringKJson = implode(",",array_keys($imagens));
                            for($i = 0; $i < 1; $i++)
                            {
                                $stringJson = base64_encode($stringJson);
                                $stringKJson = base64_encode($stringKJson);
                            }

                            $stringJson;
                            $stringKJson;
                        }
                    @endphp
                @endif
                @if(!empty($Postagem))
                    @php
                        $class = "Postagens";

                        for($c = 0; $c <= 20; $c++)
                        {
                            $class = base64_encode($class);
                        }
                    @endphp
                    <section class="boxes-dashboards-5 hidden-sumario conjunto-DashBoard @php echo $class; @endphp" id="section-5-dashboard" data-message="@php echo $stringJson; @endphp">
                        @php
                            $classDiv = "containerInformaçãoPostagem";

                            for($cd = 0; $cd <= 20; $cd++)
                            {
                                $classDiv = base64_encode($classDiv);
                            }

                            $classDiv;
                        @endphp 
                        <div class="@php echo $classDiv; @endphp" id="@php echo $classDiv."-1"; @endphp" style="display: none;">
                            @if($Postagem)
                            @php
                            $Alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                            $chars_postagem_1 = "";
                            $chars_postagem_2 = "";
                            @endphp
                            @foreach ($Postagem as $Column)
                                @foreach ($Column as $keys => $value)
                                    @php
                                        $chars_postagem_1 = $chars_postagem_1.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($keys)))."§";
                                        $chars_postagem_2 = $chars_postagem_2.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($value)))."§";
                                    @endphp
                                @endforeach
                            @endforeach
                            @php $chars_postagem_1 = rtrim($chars_postagem_1,"§"); $chars_postagem_2 = rtrim($chars_postagem_2,"§"); @endphp
                            @php $chars_postagem_1 = base64_encode(str_replace("=",$Alfabeto[rand(0,25)],$chars_postagem_1)); $chars_postagem_2 = base64_encode(str_replace("=",$Alfabeto[rand(0,25)],$chars_postagem_2)); @endphp
                        @endif
                        <script>
                            window.Keys = @json($chars_postagem_1);
                            window.Values = @json($chars_postagem_2);
                        </script>
                        </div>
                    </section>
                @endif
                <!-- separando imagens -->
                <!-- As Arrays vinda do Banco de Dados não podem rederizar imagem diretamente de Js para Blade.php -->
                <!-- 
                    -> Quando os Dados do Banco de Dados Vier , sera Adicionado com o Id da mesma postagem 
                    -> assim quando o JavaScript for integrado com a bight com o PHP 
                    -> JSON
                    -> Representação de Aplicação Pratica seria assim:
                -->
                @if($Postagem)
                    <div style="display: none;" class="@php echo $stringJson; @endphp container-section-5" data-message="@php echo $stringJson; @endphp">{{ $stringJson }}</div>
                    <div style="display: none;" class="@php echo $stringKJson; @endphp container-section-5-1" data-message="@php echo $stringKJson; @endphp">{{ $stringKJson }}</div>
                @endif    
                <section class="boxes-dashboards-6 hidden-sumario conjunto-DashBoard" id="section-6-dashboard"></section>
                <section class="boxes-dashboards-7 hidden-sumario conjunto-DashBoard" id="section-7-dashboard">
                    @if($Nomes)
                        @php
                            $QuantidadeDeValues7 = [];
                            foreach ($Nomes as $key => $value) {
                                $QuantidadeDeValues7[] = grapheme_strlen($value);
                            }
                            $stringValues7 = implode("-",$QuantidadeDeValues7);
                            for($qk7 = 0; $qk7 < 1; $qk7++)
                            {
                                $stringValues7 = base64_encode($stringValues7);
                            }
                            $stringValues7;
                        @endphp
                    @endif
                    @if($Nomes)
                        @php
                            $charsNomes = [];
                            foreach ($Nomes as $key => $value) {
                                foreach(mb_str_split($value) as $chars)
                                {
                                    $charsNomes[] = mb_ord($chars);
                                }
                            }
                            $chars_implode = implode("-",$charsNomes);
                            for($j = 0; $j < 1; $j++)
                            {
                                $chars_implode = base64_encode($chars_implode);
                            }
                            $CharsNumbers_Implode = [];
                            foreach(mb_str_split($chars_implode) as $dados)
                            {
                                $CharsNumbers_Implode[] = mb_ord($dados);
                            }
                            $charsString = implode(",",$CharsNumbers_Implode);
                            for($k = 0; $k < 1; $k++)
                            {
                                $charsString = base64_encode($charsString);
                            }
                            $charsString;
                        @endphp
                        @endif
                        @if($Vizualizacao)
                        @php $dados_visualização = []; @endphp
                        @php $chaves_visualização = []; @endphp
                        @php $valores_visualização = []; @endphp
                        @php $temporario_visualização = []; @endphp
                        @foreach ($Vizualizacao as $item)
                            @foreach ($item->toArray() as $key => $value)
                                @if($key === 'Perfil')
                                    @php $chaves_visualização[] = $item[$key]; @endphp
                                @endif
                                @if($key === 'nome')
                                    @php $valores_visualização[] = $item[$key]; @endphp
                                @endif
                            @endforeach        
                        @endforeach
                        @php $count_chaves = count($chaves_visualização); @endphp
                        @php $count_valores = count($valores_visualização); @endphp
                        @if($count_chaves === $count_valores)
                            @for($v = 0; $v < ($count_valores + $count_chaves)/2; $v++)
                                @php $temporario_visualização[$chaves_visualização[$v]] = $valores_visualização[$v]; @endphp
                                @php $count_temporaria = count($temporario_visualização); @endphp
                                @if($count_temporaria === 1) @php array_push($dados_visualização,$temporario_visualização); @endphp @php $temporario_visualização = []; @endphp @endif
                            @endfor
                        @endif
                        @php $values_visualizações = []; @endphp
                        @php $keys_visualizações = []; @endphp
                        @php $keys_visualizações_strlen = []; @endphp
                        @php $values_visualizações_strlen = []; @endphp
                        @foreach ($dados_visualização as $item)
                            @php
                                array_walk($item , function($value_visualização,$key_visualização) use (&$values_visualizações,&$keys_visualizações,&$keys_visualizações_strlen,&$values_visualizações_strlen){
                                    $array_keys_ord = [];
                                    $array_value_ord = [];
                                    $array_strlen_values = [];
                                    $array_strlen_keys = [];
                                    foreach (mb_str_split($key_visualização) as $letras){$array_keys_ord[] = mb_ord($letras);}
                                    foreach (mb_str_split($value_visualização) as $letras){$array_value_ord[] = mb_ord($letras);}
                                    $keys_strings_visualização = implode("-",$array_keys_ord);
                                    $value_strings_visualização = implode("-",$array_value_ord);
                                    for($lk = 0 ; $lk < 1; $lk++)
                                    {
                                        $keys_strings_visualização = base64_encode($keys_strings_visualização);
                                        $value_strings_visualização = base64_encode($value_strings_visualização);
                                    }
                                    $vstrlen = grapheme_strlen($value_visualização);
                                    $kstrlen = grapheme_strlen($key_visualização);

                                    for($b64 = 0; $b64 < 1; $b64++)
                                    {
                                        $vstrlen = base64_encode($vstrlen);
                                        $kstrlen = base64_encode($kstrlen);
                                    }
                                    $array_strlen_values[] = $vstrlen;
                                    $array_strlen_keys[] = $kstrlen;


                                    $values_visualizações[] = $value_strings_visualização;
                                    $keys_visualizações[] = $keys_strings_visualização;
                                
                                    // $keys_visualizações_strlen[] = $array_strlen_keys;
                                    foreach ($array_strlen_keys as $item) {
                                        $keys_visualizações_strlen[] = $item;
                                    }
                                    // $values_visualizações_strlen[] = $array_strlen_values;
                                    foreach ($array_strlen_values as $item) {
                                        $values_visualizações_strlen[] = $item;
                                    }

                                });
                            @endphp
                        @endforeach    
                        @php $implode_values        = implode(",",$values_visualizações); @endphp
                        @php $implode_keys          = implode(",",$keys_visualizações); @endphp
                        @php $implode_strlen_k      = implode(",",$keys_visualizações_strlen); @endphp
                        @php $implode_strlen_v      = implode(",",$values_visualizações_strlen); @endphp
                    @endif
                    <div style="display: none;" id="@php echo $stringValues7; @endphp" class="@php echo $charsString; echo $charsString; @endphp" data-message="@php echo $charsString; @endphp">
                        <div style="display: none;" id="{{ $stringValues7 }}" class="{{ $stringValues7 }} elemento1-subelemento-section-7" data-message="{{ $stringValues7 }}">{{ $stringValues7 }}</div>
                        <div style="display: none;" id="{{$charsString }}" class="{{$charsString }} elemento2-subelemento-section-7" data-message="{{$charsString }}">{{$charsString }}</div>
                    </div>
                    @if($Comentarios)
                        @php $keys_comentarios_str = []; @endphp
                        @php $keys_comentarios_number = []; @endphp
                        @php $keys_comentarios_final = []; @endphp
                        @php $values_comentarios_str = []; @endphp
                        @php $values_comentarios_number = []; @endphp
                        @php $values_comentarios_final = []; @endphp
                        @php $keys_comentarios_strlen = []; @endphp
                        @php $values_comentarios_strlen = []; @endphp
                        @php $keys_comentarios_strlen_codify = []; @endphp
                        @php $values_comentarios_strlen_codify = []; @endphp
                        
                        @foreach ($Comentarios as $Dados)
                            @foreach ($Dados->toArray() as $key => $value)
                                @php
                                    $keys_comentarios_str[] = mb_str_split($key);
                                    $values_comentarios_str[] = mb_str_split($value);
                                    $keys_comentarios_strlen[] = grapheme_strlen($key);
                                    $values_comentarios_strlen[] = grapheme_strlen($value);
                                @endphp
                            @endforeach
                        @endforeach
                        @foreach ($keys_comentarios_str as $items)
                            @foreach ($items as $item)
                                @php $keys_comentarios_number[] = mb_ord($item); @endphp
                            @endforeach 
                        @endforeach
                        @foreach ($keys_comentarios_number as $item)
                            @for($i = 0; $i < 1; $i++)
                                @php $item = base64_encode($item); @endphp
                                @php $keys_comentarios_final[] = $item; @endphp
                            @endfor
                        @endforeach
                        @foreach ($keys_comentarios_strlen as $item)
                            @php $keys_comentarios_strlen_codify[] = base64_encode($item); @endphp
                        @endforeach
                        @foreach ($values_comentarios_strlen as $item)
                            @php $values_comentarios_strlen_codify[] = base64_encode($item); @endphp
                        @endforeach
                        @foreach ($values_comentarios_str as $items)
                            @foreach ($items as $item)
                                @php $values_comentarios_number[] = mb_ord($item); @endphp
                            @endforeach 
                        @endforeach
                        @foreach ($values_comentarios_number as $item)
                            @for($i = 0; $i < 1; $i++)
                                @php $item = base64_encode($item); @endphp
                                @php $values_comentarios_final[] = $item; @endphp
                            @endfor
                        @endforeach
                        @php $comentarios_keys = implode("-",$keys_comentarios_final); @endphp
                        @php $comentarios_values = implode("-",$values_comentarios_final); @endphp
                        @php
                            $comentarios_keys   = base64_encode($comentarios_keys);
                            $comentarios_values = base64_encode($comentarios_values);
                            $string_keys_comentarios_strlen_codify = base64_encode(implode("-",$keys_comentarios_strlen_codify));
                            $string_values_comentarios_strlen_codify = base64_encode(implode("-",$values_comentarios_strlen_codify));
                        @endphp
                    @endif
                    @if ($Curtidas && !empty($Curtidas))
                        @php  $curtidas_likes_and_deslikes_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_values = [];@endphp
                        @php  $curtidas_likes_and_deslikes_strlen_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_strlen_values = [];@endphp
                        @php  $curtidas_likes_and_deslikes_str_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_str_values = [];@endphp
                        @php  $curtidas_likes_and_deslikes_string_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_string_values = [];@endphp
                        @php  $curtidas_likes_and_deslikes_number_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_number_values = [];@endphp
                        @php  $curtidas_likes_and_deslikes_encode_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_encode_values = [];@endphp
                        @php  $curtidas_likes_and_deslikes_strlen_number_keys = [];@endphp
                        @php  $curtidas_likes_and_deslikes_strlen_number_values= [];@endphp

                        <!-- primeiramente separando keys e values em arrays diferentes -->
                        @foreach ($Curtidas as $Item)
                            @foreach($Item->toArray() as $key => $value)
                                @php $curtidas_likes_and_deslikes_keys[]   = $key; @endphp
                                @php $curtidas_likes_and_deslikes_values[] = $value; @endphp
                                @php $curtidas_likes_and_deslikes_strlen_keys[] = grapheme_strlen($key); @endphp
                                @php $curtidas_likes_and_deslikes_strlen_values[] = grapheme_strlen($value); @endphp       
                            @endforeach
                        @endforeach
                        <!-- segundamente transformando cada chave e valor em uma array -->
                        <!-- Chave -->
                        @foreach ($curtidas_likes_and_deslikes_keys as $item)
                            @php $curtidas_likes_and_deslikes_str_keys[] = mb_str_split($item); @endphp
                        @endforeach
                        <!-- Valor -->
                        @foreach ($curtidas_likes_and_deslikes_values as $item)
                            @php $curtidas_likes_and_deslikes_str_values[] = mb_str_split($item); @endphp
                        @endforeach
                        <!-- terceiramente transformando cada elemento da array em número -->
                        <!-- Chave -->
                        @foreach ($curtidas_likes_and_deslikes_str_keys as $item)
                            @foreach ($item as $dados)
                                @php $curtidas_likes_and_deslikes_number_keys[] = mb_ord($dados); @endphp    
                            @endforeach
                        @endforeach
                        <!-- Valor -->
                        @foreach ($curtidas_likes_and_deslikes_str_values as $item)
                            @foreach ($item as $dados)
                                @php $curtidas_likes_and_deslikes_number_values[] = mb_ord($dados); @endphp    
                            @endforeach
                        @endforeach
                        <!-- quartamente transformando cada elemento da array (número) em base64_encode -->
                        <!-- Chave -->
                        @foreach ($curtidas_likes_and_deslikes_number_keys as $item)
                            @php $curtidas_likes_and_deslikes_encode_keys[] = base64_encode($item); @endphp
                        @endforeach
                        <!-- Valor -->
                        @foreach ($curtidas_likes_and_deslikes_number_values as $item)
                            @php $curtidas_likes_and_deslikes_encode_values[] = base64_encode($item); @endphp
                        @endforeach
                        <!-- transformando ambas em string -->
                        <!-- Chave -->
                        @php $string_curtidas_likes_and_deslikes_keys = base64_encode(implode('-',$curtidas_likes_and_deslikes_encode_keys)); @endphp
                        <!-- Valor -->
                        @php $string_curtidas_likes_and_deslikes_values = base64_encode(implode('-',$curtidas_likes_and_deslikes_encode_values)); @endphp
                        <!-- transformando o strlen da quantidade de caracteres dos proprios dados em base64_encode -->
                        <!-- Chave -->
                        @foreach ($curtidas_likes_and_deslikes_strlen_keys as $item)
                            @php
                                $curtidas_likes_and_deslikes_strlen_number_keys[] = mb_chr(64 + $item);
                            @endphp
                        @endforeach
                        <!-- Value -->
                        @foreach ($curtidas_likes_and_deslikes_strlen_values as $item)
                            @php
                                $curtidas_likes_and_deslikes_strlen_number_values[] = mb_chr(64 + $item);
                            @endphp
                        @endforeach
                        <!-- transformando os números (transcritos em letras) em base64_encode e string para a bright -->
                        @php
                            $string_strlen_like_and_deslike_keys = base64_encode(implode('-',$curtidas_likes_and_deslikes_strlen_number_keys));
                            $string_strlen_like_and_deslike_values = base64_encode(implode('-',$curtidas_likes_and_deslikes_strlen_number_values));
                        @endphp
                    @endif 
                    <!--verifica se a variavel (array) existe -->
                    @if ($Popularidade)
                        @php $keys_popularidade = []; @endphp
                        @php $values_popularidade = []; @endphp
                        @php $encode_k = []; @endphp
                        @php $encode_v = []; @endphp
                        <!--percorre com foreach e pega cada array -->
                        @foreach ($Popularidade as $item)
                        <!--percorre as arrays e puxa as chaves e valores -->
                            @foreach ($item->toArray() as $keys => $values)
                            <!--aloca as chaves em um Array -->
                            @php $keys_popularidade[] = $keys; @endphp
                            <!--aloca os valores em um Array -->
                            @php $values_popularidade[] = $values; @endphp
                            @endforeach
                        @endforeach
                        @php
                            // variavel que aloca o mb_str_split() das chaves 
                            $str_keys_popularidade = mb_str_split(implode('+-',$keys_popularidade));
                            // variavel que aloca o mb_str_split() dos valores
                            $str_values_popularidade = mb_str_split(implode('+-',$values_popularidade));
                            // percorre a Array de chaves
                            foreach ($str_keys_popularidade as $key){$encode_k[] = base64_encode(mb_ord($key));}
                            // codifica com base64_encode os caracteres (chars) transcritos em números com mb_ord
                            // percorre a Array de valores
                            foreach ($str_values_popularidade as $value){$encode_v[] = base64_encode(mb_ord($value));}
                            // codifica com base64_encode os caracteres (chars) transcritos em números com mb_ord
                            // crio uma variavel (chave) que aloca a array chave transformada em string e codificada
                            $keys_popularidade_string = base64_encode(implode('+-',$encode_k));
                            // crio uma variavel (valor) que aloca a array valor transformada em string e codificada
                            $values_popularidade_string = base64_encode(implode('+-',$encode_v));
                        @endphp
                    @endif 
                </section>
                <section class="boxes-dashboards-11 hidden-sumario conjunto-DashBoard" id="section-11-dashboard">
                    @if($Notificacao)
                        @php $keys_notificacao_keys_str = []; @endphp
                        @php $values_notificacao_values_str = []; @endphp
                        @foreach ($Notificacao as $dados)
                            @foreach ($dados as $key => $value)
                                @php $keys_notificacao_keys_str[] = $key; @endphp
                                @php $values_notificacao_values_str[] = $value; @endphp
                            @endforeach
                        @endforeach
                        @php
                            $array_notificacao_keys = mb_str_split(implode('+-',$keys_notificacao_keys_str));
                            $array_notificacao_values =  mb_str_split(implode('+-',$values_notificacao_values_str));
                            $array_notificacao_values_encode = [];
                            $array_notificacao_keys_encode = [];
                            foreach ($array_notificacao_keys as $keys) {
                                $array_notificacao_keys_encode[] = base64_encode(mb_ord($keys));
                            }
                            foreach ($array_notificacao_values as $values) {
                                $array_notificacao_values_encode[] = base64_encode(mb_ord($values));
                            }

                            $string_array_notificacao_keys_encode = base64_encode(implode('+-',$array_notificacao_keys_encode));
                            $string_array_notificacao_values_encode = base64_encode(implode('+-',$array_notificacao_values_encode));
                        @endphp
                    @endif
                </section>
                <section class="boxes-dashboards-12 hidden-sumario conjunto-DashBoard" id="section-12-dashboard"></section>
                <section class="boxes-dashboards-15 hidden-sumario conjunto-DashBoard" id="section-15-dashboard"></section>    
            </div>
            <div class="Pages" id="Page-3">
                @if(!empty($Postagem))
                    @php $keys_postagens_my_posts = []; @endphp
                    @php $values_postagens_my_posts = []; @endphp
                    @foreach ($Postagem as $posts)
                        @foreach ($posts as $key => $value)
                            @php $keys_postagens_my_posts[] = $key; @endphp
                            @php $values_postagens_my_posts[] = $value; @endphp
                        @endforeach
                    @endforeach
                    @php $str_keys_postagens_my_posts = mb_str_split(implode('+-',$keys_postagens_my_posts)); @endphp
                    @php $str_values_postagens_my_posts = mb_str_split(implode('+-',$values_postagens_my_posts)); @endphp
                    @php $My_Posts_cody_keys = []; @endphp
                    @php $My_Posts_cody_values = []; @endphp
                    @foreach ($str_keys_postagens_my_posts as $My_Posts)
                    @php $My_Posts_cody_keys[] = base64_encode(mb_ord($My_Posts)); @endphp
                    @endforeach
                    @foreach ($str_values_postagens_my_posts as $My_Posts)
                    @php $My_Posts_cody_values[] = base64_encode(mb_ord($My_Posts)); @endphp
                    @endforeach
                    @php $MY_POSTS_KEYS = base64_encode(implode('+-',$My_Posts_cody_keys)); @endphp
                    @php $MY_POSTS_VALUES = base64_encode(implode('+-',$My_Posts_cody_values)); @endphp
                @endif
            </div>
            <div class="Pages" id="Page-4">
                @php
                    $nome = Auth::user()->nome;
                    $email = Auth::user()->email;
                    $data = Auth::user()->date;
                    $genero = Auth::user()->generos;
                    $nivel_acessos = Auth::user()->nivel_acessos;
                    $informacoes_dados_perfil = [
                        'nome' => $nome,
                        'email' => $email,
                        'data' => $data,
                        'genero' => $genero,
                        'nivel_acessos' => $nivel_acessos
                    ];
                @endphp
                @php $informacoes_dados_perfil_keys = []; @endphp
                @php $informacoes_dados_perfil_values = []; @endphp
                @foreach ($informacoes_dados_perfil as $key => $value)
                    @php $informacoes_dados_perfil_keys[] = $key; @endphp
                    @php $informacoes_dados_perfil_values[] = $value; @endphp
                @endforeach
                @php
                    $string_info_colab_k_array = [];
                    $string_info_colab_v_array = [];
                    foreach(mb_str_split(implode("+-",$informacoes_dados_perfil_keys)) as $dados)
                    {
                        $string_info_colab_k_array[] = mb_ord($dados);
                    }
                    foreach(mb_str_split(implode("+-",$informacoes_dados_perfil_values)) as $dados)
                    {
                        $string_info_colab_v_array[] = mb_ord($dados);
                    }
                    $string_info_colab_k = base64_encode(implode("+-",$string_info_colab_k_array));
                    $string_info_colab_v = base64_encode(implode("+-",$string_info_colab_v_array));
                @endphp
            </div>
            <div class="Pages" id="Page-5"></div>
        </div>
        <div class="sajdhasdjksahkdjhsakjdhaskjhdkjashdkjhsakjdhkasjhdkjsahdkjashkdjshkasjhdakjhsads">
            <!--aqui ficará a autentificação do colaborador -->
            @if(!empty($Autentificacao))
                {{ $Autentificacao['autenitificacion'] }}
            @else
                {{ false }}
            @endif
        </div>
        <div class="imagem" style="display: none;">
            {{asset('img/welcome/Logo.png')}}
        </div>
        <div class="emblema">
            {{asset('img/Colaborador/emblema-Photoroom.png')}}
        </div>
    @elseif(!Auth::check())
    @endif 
</body>
<script src="{{asset('js/Colaborador/Boxes-DashBoards-Introdution.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/loading.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Your_Descripy.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/loading.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Menu.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Profile.js?v=1.1')}}" defer></script>
<script>
    window.user = {
        0: @json(Auth::user()->nome), 
        1: @json(Auth::user()->email), 
        2: @json(Auth::user()->date), 
        3: @json(Auth::user()->generos)
    }
    window.certificado = 
    {
        nome: @json(Auth::user()->nome)
    }
</script>
<script src="{{asset('js/Colaborador/CaracteresAndNumber.js')}}" defer></script>
<script src="{{asset('js/Colaborador/Objetivo-e-Importancia.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Hover.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Info.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/Boxes.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/info-home.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/Pages.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/Sumario.js?v=1.1')}}"defer></script>
<script type="module" src="{{asset('js/Colaborador/DashBoard.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Slide-DashBoard.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Grafico-1.js?v=1.1')}}"defer></script>
<script src="{{asset('js/Colaborador/Tabela.js?v=1.1')}}" defer></script>
<script src="{{asset('js/cache.js?v=1.1')}}"></script>
<script type="module" src="{{asset('js/Colaborador/My-Posts.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/Profile-Page.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/T&C.js?v=1.1')}}" defer></script>
<script src="{{asset('js/Colaborador/PostagemChecagemInputDashBoard.js?v=1.1')}}" defer></script>
<script src="{{ asset('js/Colaborador/postarLivro.js?v=1.1') }}"defer></script>
<script src="{{ asset('js/Colaborador/notify.js?v=1.1') }}" defer></script>
@if($Historico)
@php
    $Alfabeto_Historico = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    $chars_historico_1 = "";
    $chars_historico_2 = "";
    @endphp
    @foreach ($Historico as $Column)
        @foreach ($Column->toArray() as $keys => $value)
            @php
                $chars_historico_1 = $chars_historico_1.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($keys)))."§";
                $chars_historico_2 = $chars_historico_2.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($value)))."§";
            @endphp
        @endforeach
    @endforeach
    @php $chars_historico_1 = rtrim($chars_historico_1,"§"); $chars_historico_2 = rtrim($chars_historico_2,"§"); @endphp
    @php $chars_historico_1 = base64_encode(str_replace("=",$Alfabeto_Historico[rand(0,25)],$chars_historico_1)); $chars_historico_2 = base64_encode(str_replace("=",$Alfabeto_Historico[rand(0,25)],$chars_historico_2)); @endphp
@endif
<script>
    window.KeysH = @json($chars_historico_1);
    window.ValuesH = @json($chars_historico_2);
</script>
@php $string_class_id_data_message = "classes-and-id-and-data-message"; @endphp
@if(!empty($Postagem))
    @php $string_class_id_data_message = "classes-and-id-and-data-message"; @endphp
    @for($i = 0; $i < 10; $i++)@php$string_class_id_data_message = base64_encode($string_class_id_data_message); @endphp @endfor
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.base = {base: @json($quantidade_final)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.dadosviewsv = { v: @json($implode_values),      }</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.dadosviewsk = { k: @json($implode_keys),        }</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.dadosviewssk = { sk: @json($implode_strlen_k),   }</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.dadosviewssv = { sk: @json($implode_strlen_v)    }</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.comenterKeys = {comenter_keys: @json($comentarios_keys)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.comenterValues = {comenter_values: @json($comentarios_values)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.comenterStrlenKeys = {comenter_strlen_keys: @json($string_keys_comentarios_strlen_codify)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.comenterStrlenValues = {comenter_strlen_values: @json($string_values_comentarios_strlen_codify)}</script>
@endif
@if(!empty($Curtidas))
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.curtidas1 = {dadosCurtidas_keys: @json($string_curtidas_likes_and_deslikes_keys)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.curtidas2 = {dadosCurtidas_values: @json($string_curtidas_likes_and_deslikes_values )}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.curtidas3 = {dadosCurtidas_strlen_keys: @json($string_strlen_like_and_deslike_keys)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.curtidas4 = {dadosCurtidas_strlen_values: @json($string_strlen_like_and_deslike_values)}</script>


    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.publicidades = {keys: @json($keys_popularidade_string),values: @json($values_popularidade_string)}</script> 
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.notificacaoKeys = {notificacaoK: @json($string_array_notificacao_keys_encode)}</script>
    <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.notificacaoValues = {notificacaoV: @json($string_array_notificacao_values_encode)}</script>
    @if(!empty($Postagem))
        <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}"> window.MyPostsKeys = {MyPosts_Keys: @json($MY_POSTS_KEYS)}</script>
        <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}"> window.MyPostsValues = {MyPosts_Values: @json($MY_POSTS_VALUES)}</script>
        <script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}"></script>
    @endif
@endif
<script class="{{ $string_class_id_data_message }}" id="{{ $string_class_id_data_message }}" data-message="{{ $string_class_id_data_message }}">window.informacoes = {keys: @json($string_info_colab_k),values: @json($string_info_colab_v)}</script>
</html>