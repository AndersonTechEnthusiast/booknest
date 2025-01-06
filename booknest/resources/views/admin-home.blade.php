<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador</title>
    <link rel="stylesheet" href="{{asset('css/Administrador/home-style.css')}}">
    <script src="https://kit.fontawesome.com/7bcc76ecaf.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-straight/css/uicons-thin-straight.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-rounded/css/uicons-thin-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Esse link abaixo é necessario para o JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Esse link abaixo é necessario para o Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- defer significa depois que o arquivo estiver carregado já -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <meta id="CsrfToken-3" content="{{ csrf_token() }}" style="display: none">
    <meta id="id" content="{{ base64_encode(mb_chr((int)Auth::user()->id)) }}">
    <script src="{{asset('js/Colaborador/Tokens.js?v=1.1')}}"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css'>
</head>
<body>
    @if(Auth::check())
        @if(Auth::user()->nivel_acessos === "administrador")
            <div class="loading-interative">
                <div class="circle-load">
                    <img src="{{asset('img/Welcome/Logo.png')}}">
                </div>
            </div>
            <section class="menu-vertical-adm" id="menu-adm">
                <nav class="index-navegacion">
                    <nav class="subindex-navegacion">
                        <nav class="finality-navegacion">
                            <ul class="container-sections">
                                <li class="Menu">
                                    <a href="#" class="open-and-close">
                                        <i class="fa-sharp fa-solid fa-bars" id="close"></i>
                                        <i class="fa-sharp fa-solid fa-xmark" id="open"></i>
                                    </a>
                                </li>
                                <li class="sections-gerenciamento" id="section-1">
                                    <a href="#" class="link-redirect">
                                        <div class="sections-container-icon-text">
                                        <div class="icon-sections">
                                            <span>

                                            </span>
                                        </div>
                                        <div class="text-sections">
                                            <span>
                                                Home
                                            </span>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="sections-gerenciamento" id="section-2">
                                    <a href="#" class="link-redirect">
                                        <div class="sections-container-icon-text">
                                        <div class="icon-sections">
                                            <span>

                                            </span>
                                        </div>
                                        <div class="text-sections">
                                            <span>
                                                Usuarios
                                            </span>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="sections-gerenciamento" id="section-3">
                                    <a href="#" class="link-redirect">
                                        <div class="sections-container-icon-text">
                                        <div class="icon-sections">
                                            <span>

                                            </span>
                                        </div>
                                        <div class="text-sections">
                                            <span>
                                                Colaboradores
                                            </span>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="sections-gerenciamento" id="section-4">
                                    <a href="#" class="link-redirect">
                                        <div class="sections-container-icon-text">
                                            <div class="icon-sections">
                                                <span>

                                                </span>
                                            </div>
                                            <div class="text-sections">
                                                <span>
                                                    Postagens
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="sections-gerenciamento-exit" id="section-5">
                                    <form class="form-exit" style="position:relative; z-index: 10;" method="POST" action="{{route('logout-adm')}}">
                                        @csrf
                                        <div class="sections-container-icon-text">
                                            <div class="icon-sections">
                                                <span>
                                                    <label for="sair-logout"><i class="fi fi-br-exit"></i></label>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="text-sections">
                                            <span>
                                                <button type="submit" id="sair-logout"> Sair </button>
                                            </span>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </nav>
                    </nav>
                </nav>
            </section>
            <header class="admin-page">
                <div class="home-title">
                    <div class="home-title-name-adm">
                        {{Auth::user()->nome}}
                    </div>
                    <div class="home-title-level-access">
                        {{Auth::user()->nivel_acessos}}
                    </div>
                </div>
            </header>
            <div class="etinerario-links">
                <div class="controle" id="controle-1"><i class="fa-solid fa-gamepad"></i></div>
                <div class="controle" id="controle-2"><i class="fi fi-rs-bell-notification-social-media"></i></div>
            </div>
            <header class="gerenciar">
                <section class="containers-de-gerenciamento home">
                    <div class="fixed-button-start-page">
                        <a href="#">
                            <button>
                                <i class="fa-solid fa-arrow-up"></i>
                            </button>
                        </a>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p> Controle Geral </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="sumario-controle-geral">
                        <ul>
                            <li><a href="#controle-usuarios">Controle Geral de Usuarios</a></li>
                            <li><a href="#controle-colaboradores">Controle Geral de Colaboradores</a></li>
                            <li><a href="#controle-postagens">Controle Geral de Postagens</a></li>
                            <li><a href="#controle-redes-sociais">Controle Geral de Redes Sociais</a></li>
                            <li><a href="#controle-geral-denuncias">Controle Geral de Denuncias</a></li>
                            <li><a href="#controle-geral-categoria-Ficção">Controle Geral de Categoria Ficção</a></li>
                            <li><a href="#controle-geral-categoria-Não-Ficção">Controle Geral de Categoria Não-Ficção</a></li>
                            <li><a href="#controle-geral-categoria-Poesia">Controle Geral de Categoria Poesia</a></li>
                            <li><a href="#controle-geral-categoria-Drama">Controle Geral de Categoria Drama</a></li>
                            <li><a href="#controle-geral-categoria-Conto">Controle Geral de Categoria Conto</a></li>
                            <li><a href="#controle-geral-categoria-Infanto-Juvenil">Controle Geral de Categoria Infanto Juvenil</a></li>
                            <li><a href="#controle-geral-categoria-Novela-Grafica">Controle Geral de Categoria Novela Gráfica</a></li>
                            <li><a href="#controle-geral-categoria-Humor">Controle Geral de Categoria Humor</a></li>
                            <li><a href="#controle-geral-categoria-Guias-de-viagens">Controle Geral de Categoria Guias de Viagem</a></li>
                            <li><a href="#controle-geral-categoria-Ensaios">Controle Geral de Categoria Ensaios</a></li>
                        </ul>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 300px;"> Controle Geral de Usuarios  </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="container-graficos controle-geral-usuarios" id="controle-usuarios">
                        <div class="icon">
                            <div class="title-icon">Usuarios</div>
                            <div class="image-icon"><img src="{{asset('img/Admin/Usuários-Adm.png')}}"></div>
                            <div class="texto-icon"><p>Quantidade de Usuarios:  @if($usuarios) {{ count($usuarios) }}  @else Não Encontrado  @endif Usuarios</p></div>
                        </div>
                        <div class="Grafico">
                            <canvas width="400" height="400" class="dashbords" id="dashbords-usuarios"></canvas>
                            <img src="{{asset('img/Admin/Usuários-Adm.png')}}">
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 400px;"> Controle Geral de Colaboradores </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="container-graficos controle-geral-colaboradores" id="controle-colaboradores">
                        <div class="icon">
                            <div class="title-icon">Colaboradores</div>
                            <div class="image-icon"><img src="{{asset('img/Admin/Colaboradores-Adm.png')}}"></div>
                            <div class="texto-icon"><p>Quantidade de Colaboradores: @if($contribuinte) {{ count($contribuinte) }} @else 0 Colaboradores @endif</p></div>
                        </div>
                        <div class="Grafico">
                            <canvas width="400" height="400" class="dashbords" id="dashbords-colaboradores"></canvas>
                            <img src="{{asset('img/Admin/Colaboradores-Adm.png')}}">
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 400px;"> Controle Geral de Postagens </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="container-graficos controle-geral-postagens" id="controle-postagens">
                        <div class="icon">
                            <div class="title-icon">Postagens</div>
                            <div class="image-icon"><img src="{{asset('img/Admin/Livros-Adm.png')}}"></div>
                            <div class="texto-icon"><p>Quantidade de Postagens: @if($postagens) {{ count($postagens) }} @else 0 Postagens @endif</p></div>
                        </div>
                        <div class="Grafico">
                            <canvas class="dashbords" id="dashbords-postagens"></canvas>
                            <img src="{{asset('img/Admin/Livros-Adm.png')}}">
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 400px;"> Controle Geral de Redes Sociais </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="container-graficos controle-geral-redes" id="controle-redes-sociais">
                        <div class="title-icon">
                            Redes Sociais
                        </div>
                        <div class="Redes-Sociais">
                            <form action="#" method="post" id="facebook-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-facebook-f" id="Facebook"></i></div>          <input type="url" id="Facebook-input-link-valor" name="link-facebook" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma Facebook"><div class="container-icones-form"><i class="fa-brands fa-facebook-f" id="Facebook"></i></div></div></div><button type="submit" id="facebook-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-facebook-f" id="Facebook"></i></span></button></form>
                            <form action="#" method="post" id="twitter-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-x-twitter" id="Twitter"></i></div>            <input type="url" id="Twitter-input-link-valor" name="link-twitter" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma Twitter"><div class="container-icones-form"><i class="fa-brands fa-x-twitter" id="Twitter"></i></div></div></div><button type="submit" id="twitter-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-x-twitter" id="Twitter"></i></span></button></form>
                            <form action="#" method="post" id="instagram-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-instagram" id="Instagram"></i></div>          <input type="url" id="Instagram-input-link-valor" name="link-instagram" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma Instagram"><div class="container-icones-form"><i class="fa-brands fa-instagram" id="Instagram"></i></div></div></div><button type="submit" id="instagram-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-instagram" id="Instagram"></i></span></button></form>
                            <form action="#" method="post" id="linkedin-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-linkedin-in" id="LinkedIn"></i></div>         <input type="url" id="LinkedIn-input-link-valor" name="link-linkedin" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma LinkedIn"><div class="container-icones-form"><i class="fa-brands fa-linkedin-in" id="LinkedIn"></i></div></div></div><button type="submit" id="linkedin-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-linkedin-in" id="LinkedIn"></i></span></button></form>
                            <form action="#" method="post" id="youtube-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-youtube" id="YouTube"></i></div>              <input type="url" id="YouTube-input-link-valor" name="link-youtube" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma YouTube"><div class="container-icones-form"><i class="fa-brands fa-youtube" id="YouTube"></i></div></div></div><button type="submit" id="youtube-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-youtube" id="YouTube"></i></span></button></form>
                            <form action="#" method="post" id="pinterest-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-pinterest-p" id="Pinterest"></i></div>        <input type="url" id="Pinterest-input-link-valor" name="link-pinterest" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma Pinterest"><div class="container-icones-form"><i class="fa-brands fa-pinterest-p" id="Pinterest"></i></div></div></div><button type="submit" id="pinterest-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-pinterest-p" id="Pinterest"></i></span></button></form>
                            <form action="#" method="post" id="snapchat-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-snapchat" id="Snapchat"></i></div>            <input type="url" id="SnapChat-input-link-valor" name="link-snapchat" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma SnapChat"><div class="container-icones-form"><i class="fa-brands fa-snapchat" id="Snapchat"></i></div></div></div><button type="submit" id="snapchat-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-snapchat" id="Snapchat"></i></span></button></form>
                            <form action="#" method="post" id="tiktok-form-link"><div class="container-edited-values-links"><div class="containers-icones-edited"><div class="container-icones-form"><i class="fa-brands fa-tiktok" id="TikTok"></i></div>                <input type="url" id="TikTok-input-link-valor" name="link-tiktok" class="inputs-links-edit-adm" placeholder="Insira o Link/Novo da Plataforma TikTok"><div class="container-icones-form"><i class="fa-brands fa-tiktok" id="TikTok"></i></div></div></div><button type="submit" id="tiktok-input-link"><span> Adicionar/Atualizar o <i class="fa-brands fa-tiktok" id="TikTok"></i></span></button></form>
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 400px;"> Controle Geral de Denunicas </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="container-graficos controle-geral-denuncias" id="controle-geral-denuncias">
                        <div class="Grafico">
                            <canvas class="dashbords" id="dashbords-denuncias"></canvas>
                        </div>
                        <div class="table-grafico">
                            <table>
                                <tr>
                                    <th>Postagens Denuncias no BookNest</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 500px;"> Controle Geral de Postagens de Ficção </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Ficcao))
                        <div class="container-graficos controle-geral-categoria-Ficção" id="controle-geral-categoria-Ficção">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas width="600" height="600" class="dashbords" id="dashbords-ficção"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Ficção-white.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Ficção</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Ficção-white.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Ficção: @if($Ficcao) {{ count($Ficcao) }} @else 0 Postagens @endif </p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach ($Ficcao as $fic)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $fic['titulo'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Ficção-white.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $fic['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $fic['id'] }} </div>
                                            <div class="containers-view-posts">{{ $fic['autor'] }}</div>
                                            <div class="containers-view-posts">{{ $fic['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $fic['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $fic['data'] }}</div>
                                            <div class="containers-view-posts">{{ $fic['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de </i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 600px;"> Controle Geral de Postagens de Não-Ficção </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($NaoFiccao))
                        <div class="container-graficos controle-geral-categoria-Não-Ficção" id="controle-geral-categoria-Não-Ficção">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-NãoFicção"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Não-Ficção-white.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Não - Ficção</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Não-Ficção-white.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Não - Ficção: @if($NaoFiccao) {{ count($NaoFiccao) }} @else 0 Postagens @endif </p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach ($NaoFiccao as $NF)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $NF['titulo'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Não-Ficção-white.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $NF['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $NF['id'] }} </div>
                                            <div class="containers-view-posts">{{ $NF['titulo'] }}</div>
                                            <div class="containers-view-posts">{{ $NF['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $NF['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $NF['data'] }}</div>
                                            <div class="containers-view-posts">{{ $NF['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens do Genero Não Ficção</i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 500px;"> Controle Geral de Postagens de Poesia </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Poesia))
                        <div class="container-graficos controle-geral-categoria-Poesia" id="controle-geral-categoria-Poesia">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-Poesia"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Poesia-white.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Poesia</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Poesia-white.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Poesia: @if($Poesia) {{ count($Poesia) }} @else 0 Postagens @endif </p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($Poesia as $Poes)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $Poes['titulo'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Poesia-white.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $Poes['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $Poes['id'] }} </div>
                                            <div class="containers-view-posts">{{ $Poes['autor'] }}</div>
                                            <div class="containers-view-posts">{{ $Poes['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $Poes['genero'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $Poes['data'] }}</div>
                                            <div class="containers-view-posts">{{ $Poes['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Poesia </i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 500px;"> Controle Geral de Postagens de Drama</p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Drama))
                        <div class="container-graficos controle-geral-categoria-Drama" id="controle-geral-categoria-Drama">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-Drama"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Drama-white.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Poesia</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Drama-white.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Drama: @if($Drama) {{ count($Drama) }} @else 0 Postagens @endif</p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($Drama as $Dramas)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $Dramas['titulo'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Drama-white.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $Dramas['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $Dramas['id'] }} </div>
                                            <div class="containers-view-posts">{{ $Dramas['titulo'] }}</div>
                                            <div class="containers-view-posts">{{ $Dramas['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $Dramas['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $Dramas['data'] }}</div>
                                            <div class="containers-view-posts">{{ $Dramas['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Dramas</i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 500px;"> Controle Geral de Postagens de Conto </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Conto))
                        <div class="container-graficos controle-geral-categoria-Conto" id="controle-geral-categoria-Conto">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-Conto"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Conto-White.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Conto</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Conto-White.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Poesia: @if($Conto) {{ count($Conto) }} @else 0 Postagens @endif </p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($Conto as $Cont)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $Cont['id'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Conto-White.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $Cont['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $Cont['titulo'] }} </div>
                                            <div class="containers-view-posts">{{ $Cont['autor'] }}</div>
                                            <div class="containers-view-posts">{{ $Cont['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $Cont['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $Cont['data'] }}</div>
                                            <div class="containers-view-posts">{{ $Cont['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>O Nenhum Contribuinte Postou Postagens de Conto </i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 700px;"> Controle Geral de Postagens de Infanto Juvenil</p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Infantojuvenil))
                        <div class="container-graficos controle-geral-categoria-Infanto-Juvenil" id="controle-geral-categoria-Infanto-Juvenil">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas width="600" height="600" class="dashbords" id="dashbords-InfantoJuvenil"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Infanto-White.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Infanto Juvenil</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Infanto-White.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Infanto Juvenil: @if($Infantojuvenil) {{ count($Infantojuvenil) }} @else 0 Postagens @endif</p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($Infantojuvenil as $Ij)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{$Ij['titulo']}}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Infanto-White.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $Ij['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{$Ij['id']}} </div>
                                            <div class="containers-view-posts">{{$Ij['autor']}}</div>
                                            <div class="containers-view-posts">{{$Ij['genero']}}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{$Ij['sinopse']}}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{$Ij['data']}}</div>
                                            <div class="containers-view-posts">{{$Ij['hora']}}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Infanto Juvenil</i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 800px;"> Controle Geral de Postagens de Novela Grafica </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($NovelaGrafica))
                        <div class="container-graficos controle-geral-categoria-Novela-Grafica" id="controle-geral-categoria-Novela-Grafica">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-NovelaGrafica"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Novela-Grafica-white.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Novela Grafica</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Novela-Grafica-white.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Novela Grafica: @if($NovelaGrafica) {{ count($NovelaGrafica) }} @else 0 Postagens @endif</p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($NovelaGrafica as $NG)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $NG['titulo'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Novela-Grafica-white.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $NG['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $NG['id'] }} </div>
                                            <div class="containers-view-posts">{{ $NG['autor'] }}</div>
                                            <div class="containers-view-posts">{{ $NG['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $NG['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $NG['data'] }}</div>
                                            <div class="containers-view-posts">{{ $NG['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Novela Grafica</i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 500px;"> Controle Geral de Postagens de Humor</p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Humor))
                        <div class="container-graficos controle-geral-categoria-Humor" id="controle-geral-categoria-Humor">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-Humor"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Humor-White.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Humor</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Humor-White.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Humor: @if($Humor) {{ count($Humor) }} @else 0 Postagens @endif</p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($Humor as $Hu)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">{{ $Hu['titulo'] }}</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Humor-White.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $Hu['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{ $Hu['id'] }} </div>
                                            <div class="containers-view-posts">{{ $Hu['autor'] }}</div>
                                            <div class="containers-view-posts">{{ $Hu['genero'] }}</div>
                                            <div class="containers-view-posts"><p class="descrição">{{ $Hu['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">{{ $Hu['data'] }}</div>
                                            <div class="containers-view-posts">{{ $Hu['hora'] }}</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Humor</i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 900px;"> Controle Geral de Postagens de Guias de Viagens </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($GuiasdeViagem))
                        <div class="container-graficos controle-geral-categoria-Guias-de-viagens" id="controle-geral-categoria-Guias-de-viagens">
                            <div class="containers-dashbords">
                                <div class="Grafico">
                                    <canvas class="dashbords" id="dashbords-GuiasDeViagens"></canvas>
                                    <img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-White.png')}}" class="postagens-img">
                                </div>
                                <div class="icon">
                                    <div class="title-icon">Postagens de Guias de Viagens</div>
                                    <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-White.png')}}" width="200px" height="200px"></div>
                                    <div class="texto-icon"><p>Quantidade de Postagens de Guias de Viagens: @if($GuiasdeViagem) {{ count($GuiasdeViagem) }} @else 0 Postagens @endif</p></div>
                                </div>
                            </div>
                            <div class="show-postagens">
                                @foreach($GuiasdeViagem as $GV)
                                    <div class="postagem">
                                        <div class="Capa-Interative">
                                            <a href="#" class="link-container-flip-card">
                                                <div class="front">
                                                    <div class="title-front-post">Nome da Postagem</div>
                                                    <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-White.png')}}"> </div>
                                                </div>
                                                <div class="back">
                                                    @php
                                                        $imagem_da_postagem = $GV['imagem']
                                                    @endphp
                                                    <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="Informações">
                                            <div class="containers-view-posts"># {{$i}} </div>
                                            <div class="containers-view-posts">nome do autor</div>
                                            <div class="containers-view-posts">categoria da postagem</div>
                                            <div class="containers-view-posts"><p class="descrição">O Papel da Mulher na Sociedade Contemporânea: Apesar dos avanços significativos nas últimas décadas, as mulheres continuam a enfrentar desigualdade de gênero em muitas áreas da vida, incluindo no mercado de trabalho, na política e na família. Este texto examinará os desafios enfrentados pelas mulheres em todo o mundo, bem como os progressos que foram feitos na luta pela igualdade de gênero</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                            <div class="containers-view-posts">data</div>
                                            <div class="containers-view-posts">hora</div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Guias de Viagens</i></b></span>
                    @endif
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 500px;"> Controle Geral de Postagens de Ensaios </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    @if(!empty($Ensaios))
                        <div class="container-graficos controle-geral-categoria-Ensaios" id="controle-geral-categoria-Ensaios">
                        <div class="containers-dashbords">
                            <div class="Grafico">
                                <canvas class="dashbords" id="dashbords-Ensaio"></canvas>
                                <img src="{{asset('img/Usuario-Logado/Ensaio-White.png')}}" class="postagens-img">
                            </div>
                            <div class="icon">
                                <div class="title-icon">Postagens de Ensaios</div>
                                <div class="image-icon"><img src="{{asset('img/Usuario-Logado/Ensaio-White.png')}}" width="200px" height="200px"></div>
                                <div class="texto-icon"><p>Quantidade de Postagens de Ensaios: @if($Ensaios) {{ count($Ensaios) }} @else 0 Postagens @endif</p></div>
                            </div>
                        </div>
                        <div class="show-postagens">
                            @foreach($Ensaios as $Ensaio)
                                <div class="postagem">
                                    <div class="Capa-Interative">
                                        <a href="#" class="link-container-flip-card">
                                            <div class="front">
                                                <div class="title-front-post">{{ $Ensaio['titulo'] }}</div>
                                                <div class="container-image"> <img src="{{asset('img/Usuario-Logado/Ensaio-White.png')}}"> </div>
                                            </div>
                                            <div class="back">
                                                @php
                                                    $imagem_da_postagem = $Ensaio['imagem']
                                                @endphp
                                                <img src="{{asset('publicacao/'.$imagem_da_postagem.'')}}">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="Informações">
                                        <div class="containers-view-posts"># {{ $Ensaio['id'] }} </div>
                                        <div class="containers-view-posts">{{ $Ensaio['autor'] }}</div>
                                        <div class="containers-view-posts">{{ $Ensaio['genero'] }}</div>
                                        <div class="containers-view-posts"><p class="descrição">{{ $Ensaio['sinopse'] }}</p><div class="ReadMore"><a href="#" class="ReadMore-links">Ler Mais</a></div></div>
                                        <div class="containers-view-posts">{{ $Ensaio['data'] }}</div>
                                        <div class="containers-view-posts">{{ $Ensaio['hora'] }}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        
                        </div>
                    @else
                        <span style="color: red;"><b><i>Nenhum Contribuinte Postou Postagens de Ensaios</i></b></span>
                    @endif
                </section>
                <section class="containers-de-gerenciamento usuarios">
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p> Usuarios </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="sumario-container-usuarios">
                        <ul class="containers-options">
                            <!-- O id do <li class="options-reedict" id="Usuários"></li> deve ser o apenas o nome da imagem o caminho será adicionado pelo JavaScript -->
                            <li class="options-reedict" id="Usuários" @if($usuarios_deletados) aria-label="{{ count($usuarios_deletados) }}" @else aria-label="0" @endif><a href="#" class="links-reedirect" id="Deletados">Quantidade de Usuarios Deletados</a></li>
                            <li class="options-reedict" id="Usuários" @if($usuarios_suspensos) aria-label="{{ count($usuarios_suspensos) }}" @else aria-label="0" @endif><a href="#" class="links-reedirect" id="Suspensos">Quantidade de Usuarios Suspensos</a></li>
                            <li class="options-reedict" id="Usuários" @if($usuarios_bloqueados) aria-label="{{ count($usuarios_bloqueados) }}" @else aria-label="0" @endif><a href="#" class="links-reedirect" id="Bloqueados">Quantidade de Usuarios Bloqueados</a></li>
                            <li class="options-reedict" id="Usuários" @if($usuarios_desbloqueados) aria-label="{{ count($usuarios_desbloqueados) }}" @else aria-label="0" @endif><a href="#" class="links-reedirect" id="Desbloqueados">Quantidade de Usuarios Desbloqueados</a></li>
                            <li class="options-reedict" id="Usuários" @if($usuarios_nivel_de_acessos_alterados) aria-label="{{ count($usuarios_nivel_de_acessos_alterados) }}" @else aria-label="0" @endif><a href="#" class="links-reedirect" id="Niveis De Acessos">Quantidade de Usuarios Com Niveis de Acessos Alterados</a></li>
                        </ul>
                    </div>
                    <div class="containers-quantidade-de-generos">
                        <div class="title-quantidade-de-graficas">
                            <img src="{{asset('img/welcome/Logo.png')}}">
                            <p>Gerenciamento de Quantidade de Generos</p>
                            <div></div>
                            <img src="{{asset('img/welcome/Logo.png')}}">
                        </div>
                        <div class="container-grafico-quantidade-de-generos">
                            <canvas class="grafico" id="dashboard-Quantidade-de-Generos"></canvas>
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 300px"> Usuarios Cadastrados </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="tabela-de-usuarios">
                        <div class="etinerarios-titles-tabela-de-usuarios">
                            <div class="titles-tabela-de-usuarios-1">Perfil</div>
                            <div class="titles-tabela-de-usuarios-2">Nome</div>
                            <div class="titles-tabela-de-usuarios-3">Genero Literario</div>
                        </div>
                        <div class="usuarios-cadastrados-from-bank">
                            @if($usuarios)
                                @foreach ($usuarios as $usuario)
                                    <a href="#" class="links-containers-user-cadastrado">
                                        <div class="container-user-cadastrado">
                                            @php
                                                $imagem_do_usuario = "";
                                                if($usuario['pathname'])
                                                {
                                                    $imagem_do_usuario = $usuario['pathname'];
                                                }
                                                else
                                                {
                                                    $imagem_do_usuario = 'Foto-default.webp';
                                                }
                                            @endphp
                                            <div class="hidden-information" style="display: none"> {{ base64_encode(mb_chr((int)$usuario['id'])) }}</div>
                                            <div class="informacoes1"><img src="{{asset('imagens-de-perfil-de-usuarios/'.$imagem_do_usuario.'')}}"></div>
                                            <div class="informacoes2"><p>{{ $usuario['nome'] }}</p></div>
                                            <div class="informacoes3"><p>{{ $usuario['generos'] }}</p></div>
                                            <div class="hidden-Informações"><p style="color: rgb(0,255,0)">{{ $usuario['nivel_acessos'] }}</p></div>
                                        </div>
                                    </a>
                                @endforeach
                            @else
                                <span>
                                    <h2><b><i>O BOOKNEST NÃO POSSUI NENHUM CADASTRO DE USUARIOS NO BANCO DE DADOS !!!</i></b></h2>
                                </span>
                            @endif
                        </div>
                        <div class="end-tabela-de-usuarios">
                            <span>
                                <p>
                                    - Fim - 
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p style="width: 300px"> Comentarios </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="comentarios-dos-usuarios">
                        @if($comentarios)
                            @foreach ($comentarios as $comenter)
                                @php
                                    $imagem_de_perfil_do_usuario = null;
                                    if($comenter['Perfil'])
                                    {
                                        $imagem_de_perfil_do_usuario = $comenter['Perfil'];
                                    }
                                    else {
                                        $imagem_de_perfil_do_usuario = 'Foto-default.webp';
                                    }
                                    
                                    $imagem_postagem = $comenter['imagem_postagem'];
                                @endphp
                                <div class="container-posts-comentarios">
                                    <div class="foto-de-perfil-do-usuario">
                                        <img src="{{ asset('imagens-de-perfil-de-usuarios/'.$imagem_de_perfil_do_usuario.'') }}">
                                        <p>
                                            {{ $comenter['nome'] }}
                                        </p>
                                    </div>
                                    <div class="comentario-do-usuario">
                                        <span>
                                            {{ $comenter['comentario'] }}
                                        </span>
                                    </div>
                                    <div class="imagem-da-postagem">
                                        <img src="{{ asset('publicacao/'.$imagem_postagem.'') }}">
                                        <p>{{ $comenter['titulo_postagem'] }}</p>
                                    </div>
                                    <div class="data-e-hora-da-postagem">
                                        <p>data: {{ $comenter['data'] }}</p>
                                        <p>hora: {{ $comenter['hora'] }}</p>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </section>
                <section class="containers-de-gerenciamento colaboradores">
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p> Colaboradores </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <div class="colaboradores-containers">
                        <div class="conponentes-container-colaboradores">
                            @if($contribuintes)
                                @php
                                    $contador_id = 0;
                                @endphp
                                @foreach($contribuintes as $key => $value)
                                    @php
                                        $contador_id++;
                                    @endphp
                                    @php
                                        $imagem_Perfil = null;
                                        if($value['perfil'])
                                            $imagem_Perfil = $value['perfil'];
                                        else
                                        {
                                            $imagem_Perfil = 'Foto-default.webp';
                                        }
                                        
                                    @endphp
                                    <div class="containers-colab colab-".$contador_id>
                                        <div class="container-colab-view">
                                            <div class="imagem-from-perfil-from-colab"><img src="{{asset('imagens-de-perfil-de-usuarios/'.$imagem_Perfil.'')}}" alt="colaborador-".$contador_id></div>
                                            <div class="informações-from-colab">
                                                <div class="informacoes colab-1-info"><p> {{ $value['nome'] }} </p> @if($value['autentificado']) <span>Autentificado</span> @else  @endif</div>
                                                <div class="informacoes colab-2-info">@if($value['descricao']) <p class="js-component-conteud-verify"> {{ $value['descricao'] }} <div class="learn-more-colab"><a href="#" class="link-colab-learn-more"> Ler Mais </a></div></p> @else <p style="color: red"> {{ $value['nome'] }} não possui descrição </p> @endif </div>
                                                <div class="informacoes colab-3-info">@if($value['quantidade']) <p> Quantidade de Postagens: {{ $value['quantidade'] }}</p> @else <p style="color: red"> {{ $value['nome'] }} não postou nada </p> @endif</div>
                                                <div class="informacoes colab-4-info">
                                                    @php
                                                        $id_do_contribuinte_ver_perfil = $value['id'];
                                                        $id_do_administrador_ver_perfil = Auth::user()->id;
                                                    @endphp
                                                    <a href="{{ route('ver-perfil',['id' => $id_do_administrador_ver_perfil , 'id_autor' => $id_do_contribuinte_ver_perfil]) }}" id="view-profile-colab"> Ver Perfil </a>
                                                    <a href="#" id="delete-profile-colab" class="links-deletes-contribuintes" value="Deletar Perfil" aria-label="{{ base64_encode(mb_chr((int)$id_do_contribuinte_ver_perfil)) }}"> Deletar Perfil </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @else
                                <span>
                                    <h2><b><i>BOOKNEST NÃO POSSUI NENHUM CONTRIBUINTE AINDA</i></b></h2>
                                </span>
                            @endif
                        </div>
                    </div>
                </section>
                <section class="containers-de-gerenciamento postagens">
                    <div class="icon">
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                        <p> Postagens </p>
                        <div></div>
                        <img src="{{asset('img/welcome/Logo.png')}}" class="imgs-topic">
                    </div>
                    <span id="views">
                    
                    <a href="#" class="icon-views-table-or-block"><i class="fi fi-rr-ballot"></i></a>
                    <a href="#" class="icon-views-table-or-block"><i class="fi fi-ts-table-list"></i></a>
                    </span>
                    <div class="containers-links-categorias-choseing">
                        <div class="containers-categorias-category category-1"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Ficção-White.png')}}" alt="categoria">Ficção</a></div>
                        <div class="containers-categorias-category category-2"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Não-Ficção-white.png')}}" alt="categoria">Não Ficção</a></div>
                        <div class="containers-categorias-category category-3"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Poesia-white.png')}}" alt="categoria">Poesia</a></div>
                        <div class="containers-categorias-category category-4"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Drama-white.png')}}" alt="categoria">Drama</a></div>
                        <div class="containers-categorias-category category-5"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Conto-White.png')}}" alt="categoria">Conto</a></div>
                        <div class="containers-categorias-category category-6"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Infanto-White.png')}}" alt="categoria">Infanto Juvenil</a></div>
                        <div class="containers-categorias-category category-7"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Novela-Grafica-White.png')}}" alt="categoria">Novela Grafica</a></div>
                        <div class="containers-categorias-category category-8"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Humor-White.png')}}" alt="categoria">Humor</a></div>
                        <div class="containers-categorias-category category-9"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-White.png')}}" alt="categoria">Guia De Viajem</a></div>
                        <div class="containers-categorias-category category-10"><a href="#" class="link-translate-categorias"><img src="{{asset('img/Usuario-Logado/Ensaio-White.png')}}" alt="categoria">Ensaio</a></div>
                    </div>
                    <div class="containers-postagens">
                        <div class="post-view container-views-blocks">
                            <div class="content-views-books-blocks-style">
                                <div class="containers-category-books-view category-1">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Ficção-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Ficção')
                                                    @php
                                                        $imagem_do_gerenciamento_das_postagens = $Gp['imagem'];
                                                        $id_da_postagem_do_gerenciamento = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Ficção-White.png')}}" alt="postagem"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" id="excluir-post" class="excluir-post-content-postagem-contribuinte" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem_do_gerenciamento)) }}"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" id="editar-post" class="editar-post-content-postagem-contribuinte" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem_do_gerenciamento)) }}"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-2">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Não-Ficção-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Não-Ficção')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Não-Ficção-white.png')}}" alt="postagem"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" id="excluir-post" class="excluir-post-content-postagem-contribuinte" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" id="editar-post" class="editar-post-content-postagem-contribuinte" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-3">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Poesia-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Poesia')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Poesia-white.png')}}" alt="postagem" id="exception-image-category-small"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-4">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Drama-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Drama')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Drama-white.png')}}" alt="postagem"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" id="excluir-post" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" id="editar-post" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-5">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Conto-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Conto')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Conto-White.png')}}" alt="postagem" id="exception-image-biggest"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif 
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-6">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Infanto-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Infantojuvenil')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Infanto-White.png')}}" alt="postagem"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-7">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Novela-Grafica-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                       @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Novela Gráfica')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Novela-Grafica-White.png')}} " alt="postagem"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                       @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-8">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Humor-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Humor')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Humor-White.png')}}" alt="postagem" id="exception-image-biggest"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-9">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-Black.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Guias de Viagem')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-White.png')}}" alt="postagem" id="exception-image-biggest"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                        @endif
                                    </div>
                                </div>
                                <div class="containers-category-books-view category-10">
                                    <div class="etinerario-categoria">
                                        <div class="title-personalize-category-books"><img src="{{asset('img/Usuario-Logado/Ensaio.png')}}" alt="categoria"></div>
                                    </div>
                                    <div class="containers-posts-category">
                                       @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Ensaio')
                                                    @php
                                                        $id_da_postagem = $Gp['id'];
                                                    @endphp
                                                    <a href="#" class="posts-link-reedirect">
                                                        <div class="posts-views-category">
                                                            <div class="front">
                                                                <div class="title">{{ $Gp['titulo'] }}</div>
                                                                <div class="image"><img src="{{asset('img/Usuario-Logado/Ensaio-White.png')}}" alt="postagem"></div>
                                                                <div class="colab">{{ $Gp['contribuinte'] }}</div>
                                                            </div>
                                                            <div class="back">
                                                                <ul>
                                                                    <li><p>{{ $Gp['titulo'] }}</p></li>
                                                                    <li><p>{{ $Gp['contribuinte'] }}</p></li>
                                                                    <li><p>{{ $Gp['genero'] }}</p></li>
                                                                    <li><p>{{ $Gp['data'] }}</p></li>
                                                                    <li><p>{{ $Gp['hora'] }}</p></li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="excluir-post" class="excluir-post-content-postagem-contribuinte"><i class="fi fi-tr-trash-empty"></i></button>
                                                                        </form>
                                                                    </li>
                                                                    <li>
                                                                        <form method="POST" action="#" class="form-poster-adm">
                                                                            <button type="submit" aria-label="{{ base64_encode(mb_chr((int)$id_da_postagem)) }}" id="editar-post" class="editar-post-content-postagem-contribuinte"><i class="fi fi-rr-pencil"></i></button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                @endif
                                            @endforeach
                                       @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post-view container-views-tables">
                            <div class="table-view-category category-table-1">
                                <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Ficção-Black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Postagem</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Ficção')
                                                <tr class="category-dados-tables">
                                                    @php
                                                        $id_postagem = $Gp['id'];
                                                    @endphp
                                                    <td>#{{ $Gp['id'] }}</td>
                                                    <td>{{  $Gp['titulo'] }}</td>
                                                    <td>{{  $Gp['contribuinte'] }}</td>
                                                    <td>{{  $Gp['genero'] }}</td>
                                                    <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                    <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                    <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                                </tr>
                                                @endif
                                            @endforeach
                                        @endif
                                    </table>
                                </div>
                            </div>
                           <div class="table-view-category category-table-2">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Não-Ficção-black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Não-Ficção')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-3">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Poesia-black.png')}}" alt="categoria" id="excpetion-img-tables"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                            @foreach ($gerenciamento_postagens as $Gp)
                                                @if($Gp['genero'] === 'Poesia')
                                                <tr class="category-dados-tables">
                                                    @php
                                                        $id_postagem = $Gp['id'];
                                                    @endphp
                                                    <td>#{{ $Gp['id'] }}</td>
                                                    <td>{{  $Gp['contribuinte'] }}</td>
                                                    <td>{{  $Gp['genero'] }}</td>
                                                    <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                    <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                    <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                                </tr>
                                                @endif
                                            @endforeach
                                        @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-4">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Drama-black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Drama')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-5">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Conto-black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Conto')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-6">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Infanto-black.png')}}  " alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Infantojuvenil')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-7">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Novela-Grafica-black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Novela Gráfica')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-8">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Humor-black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Humor')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-9">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-black.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Guias de Viagem')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                           <div class="table-view-category category-table-10">
                            <div class="etinerario-table-style-category">
                                    <div class="circle-effect-table-style-category">
                                        <div class="img-table-style-category"><img src="{{asset('img/Usuario-Logado/Ensaio.png')}}" alt="categoria"></div>
                                    </div>
                                </div>
                                <div class="containers-content">
                                    <table class="tables-categorys">
                                        <tr class="category-headers-table">
                                            <th>#id</th>
                                            <th>Colaborador</th>
                                            <th>Categoria</th>
                                            <th>Data/Hora</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                        @if($gerenciamento_postagens)
                                        @foreach ($gerenciamento_postagens as $Gp)
                                            @if($Gp['genero'] === 'Ensaios')
                                            <tr class="category-dados-tables">
                                                @php
                                                    $id_postagem = $Gp['id'];
                                                @endphp
                                                <td>#{{ $Gp['id'] }}</td>
                                                <td>{{  $Gp['contribuinte'] }}</td>
                                                <td>{{  $Gp['genero'] }}</td>
                                                <td>{{  $Gp['data'] }} - {{ $Gp['hora'] }}</td>
                                                <td><button class="button-table-editar" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Editar Post</button></td>
                                                <td><button class="button-table-excluir" aria-label="{{ base64_encode(mb_chr((int)$id_postagem)) }}"> Excluir Post</button></td>
                                            </tr>
                                            @endif
                                        @endforeach
                                    @endif
                                    </table>
                                </div>
                           </div>
                        </div>
                    </div>
                </section>
            </header>
            <div class="errors-hidden" id="countUserGrafico">
                @if($usuarios)
                    {{count($usuarios)/100}}
                @endif
            </div>
        @else
            <p>Error de Acessos</p>
        @endif
    @else
        <p>Error de Autentificação</p>
    @endif
</body>
<script src="{{asset('js/Administrador/Translate.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/Pages.js?v=1.1')}}"></script>
<script type="module" src="{{asset('js/Administrador/dashbords.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/descrição-post-view.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/tabela-de-usuarios.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/usuarios-cadastrados-from-bank.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/learn-more-colab-popup.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/Posts-translate-views.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/Posts-translate-views-blocks.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/Loading.js?v=1.1')}}"></script>
<script src="{{asset('js/Administrador/Posts-translate-views-tables.js?v=1.1')}}"></script>
<script src="{{ asset('js/Administrador/DadosFromBanck.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/Postagens-Administrador.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/Link-Form-Redes-Sociais.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/excluir-contribuinte.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/Link-Form-Redes-Sociais.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/Editar-Postagem-Dinamic.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/Excluir-Posagem-Dinamic.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/controle.js?v=1.1') }}"></script>
<script src="{{ asset('js/Administrador/sino.js?v=1.1') }}"></script>
</html>