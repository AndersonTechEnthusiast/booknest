<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BookNest</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="icon" href="{{asset('img/welcome/Logo.png')}}">
    <link rel="stylesheet" href="{{asset('css/PopUps/PopUps-All.css')}}">
    <script src="https://kit.fontawesome.com/7bcc76ecaf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>
<body>
    <div id="hidden-erros" class="erros-container" style="display: none;">
        @if($errors)
            @json($errors->all())
        @else
            return null
        @endif 
    </div>
    <div class="hidden-erros" id="erros-for-Auth">
        @if(session('Mensagem'))
            @json(session('Mensagem'))
        @else
            return null
        @endif
    </div>
    <div class="hidden-erros" id="feedback-erros">
        @if(session('feedback'))
            @json(session('feedback'))
        @endif
    </div>
    <div class="hidden-erros" id="LoginReturnIfNotFoundUser">
        @if(session('Login-feedback'))
            @json(session('Login-feedback'))
        @endif
    </div>
    <div class="hidden-erros" id="Login-Ask">
        @if(session('Return'))
            @json(session('Return'))
        @endif
    </div>
    <div class="hidden-erros" id="UserFoundButPassWordNotCheckForPassWordSaved">
        @if(session('Login-feedback-failed'))
            @json(session('Login-feedback-failed'))
        @endif
    </div>
    <div class="hidden-erros" id="TryLogout">
        @if(session('middleware-return-mensagem-try-logout-autentificação'))
            @json(session('middleware-return-mensagem-try-logout-autentificação'))
        @endif
    </div>
    <div class="hidden-erros" id="TryLogoutIfExists">
        @if(session('middleware-return-mensagem-try-logout-nivel-de-acessos'))
            @json(session('middleware-return-mensagem-try-logout-nivel-de-acessos'))
        @endif
    </div>
    <div class="hidden-erros" id="logout-feedback">
        @if(session('confirm-logout'))
            @json(session('confirm-logout'))
        @endif
    </div>
    <section class="container-welcome">
        <div class="logo-container"><img src="{{asset('img/welcome/Logo.png')}}" alt="BookNest"></div>
        <nav class="container-lista">
            <ul>
                <li class="container-links"><a href="#" class="links-li" id="Quem_Somos">Quem Somos</a></li>
                <li class="container-links"><a href="#" class="links-li" id="Como_Funciona">Como Funciona</a></li>
                <li class="container-links"><a href="#" class="links-li" id="FAQ_Perguntas_Frequentes">FAQ (Perguntas Frequentes)</a></li>
                <li class="container-links"><a href="#" class="links-li" id="Contato">Contato</a></li>
                <li class="container-links"><a href="#" class="links-li" id="Blog_ou_Notícias">Blog ou Notícias</a></li>
                <li class="container-links"><a href="#" class="links-li" id="Redes_Sociais">Redes Sociais</a></li>
                <li class="container-links"><a href="#" class="links-li" id="Cadastro_Login">Cadastro / Login</a></li>
            </ul>
        </nav>
    </section>
    <div class="site">
        <div class="icone-site"><img src="{{asset('img/welcome/Logo.png')}}" alt="icone"></div>
        <div class="nome-site"><p>BookNest</p></div>
    </div>
    <section class="img-background"></section>
    <!-- <section class="img-background"><img src="{{asset('img/welcome/Book_technology.jpg')}}" alt=""></section> -->
    <div class="containers-popups"></div>
    <div class="popup">
        <!-- Quem Somos -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title"></p></div>
                        <div class="separator">
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>História da Organização</h3></div>
                                    <div class="text"><span>Uma narrativa sobre como e por que o BookNest foi criado, incluindo momentos chave da sua evolução.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Missão e Visão</h3></div>
                                    <div class="text"><span>Uma declaração combinada que explica a missão de facilitar o acesso a livros digitais e a visão de promover uma comunidade global de leitores.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Equipe Fundadora</h3></div>
                                    <div class="text"><span>Apresentação dos fundadores e suas motivações para iniciar o BookNest, destacando suas experiências relevantes.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Valores Centrais</h3></div>
                                    <div class="text"><span>Uma lista dos valores que norteiam todas as decisões e operações no BookNest, como inovação, integridade, e acessibilidade.</span></div>
                                </div>
                            </div>
                            <div class="line-separator"></div>
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Compromissos Sociais</h3></div>
                                    <div class="text"><span>Descrição de iniciativas de responsabilidade social, como programas de alfabetização ou parcerias educacionais.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Conquistas Importantes</h3></div>
                                    <div class="text"><span>Destaques dos principais marcos alcançados pela organização, como expansões do catálogo, inovações tecnológicas, ou prêmios recebidos.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Cultura Organizacional</h3></div>
                                    <div class="text"><span>Uma descrição de como é trabalhar no BookNest, abordando a dinâmica da equipe e o ambiente de trabalho.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Depoimentos de Membros da Equipe</h3></div>
                                    <div class="text"><span>Citações ou pequenos depoimentos de membros da equipe sobre o que significa trabalhar no BookNest e o impacto que acredita que a organização tem na sociedade.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup">
        <!-- Como Funciona -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title"></p></div>
                        <div class="separator">
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Cadastro e Acesso</h3></div>
                                    <div class="text"><span>Explicação de como os novos usuários podem se registrar no site, incluindo os requisitos e os benefícios de ser um membro.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Navegação pelo Site</h3></div>
                                    <div class="text"><span>Orientações sobre como os usuários podem navegar pelo site para encontrar livros, utilizando ferramentas de pesquisa e categorias organizadas.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Seleção de Livros</h3></div>
                                    <div class="text"><span>Descrição de como escolher livros do catálogo, incluindo informações sobre formatos disponíveis (e-book, audiobook) e visualizações de amostra.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Processo de Empréstimo</h3></div>
                                    <div class="text"><span>Explicação do processo de empréstimo de livros, detalhando o tempo de empréstimo, renovações e como os livros são acessados digitalmente.</span></div>
                                </div>
                            </div>
                            <div class="line-separator"></div>
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Leitura Online e Offline</h3></div>
                                    <div class="text"><span>Instruções sobre como os usuários podem ler livros online através da plataforma ou baixá-los para dispositivos compatíveis para leitura offline.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Interatividade e Ferramentas</h3></div>
                                    <div class="text"><span>Informações sobre recursos adicionais disponíveis, como marcações, anotações e o uso de dicionários integrados ou links para recursos externos.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Devoluções e Penalidades</h3></div>
                                    <div class="text"><span>Orientações sobre como devolver os livros emprestados e esclarecimentos sobre as políticas de atraso ou penalidades por danos aos livros digitais.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Suporte ao Usuário</h3></div>
                                    <div class="text"><span>Informações sobre como os usuários podem obter ajuda com questões técnicas ou outras dúvidas relacionadas ao uso da biblioteca, incluindo canais de suporte como chat ao vivo, e-mail e telefone.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="popup">
        <!-- FAQ -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title"></p></div>
                        <div class="separator">
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Como me Cadastro?</h3></div>
                                    <div class="text"><span>Explicações passo a passo sobre como novos usuários podem se registrar no site, incluindo informações sobre os requisitos necessários.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Como Posso Acessar os Livros?</h3></div>
                                    <div class="text"><span>Instruções sobre como os usuários podem buscar, acessar e ler livros digitais disponíveis na biblioteca.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Existem Custos Envolvidos?</h3></div>
                                    <div class="text"><span>Informações claras sobre qualquer custo ou taxa associada ao serviço, ou confirmação de que é um serviço gratuito, se for o caso.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Quais são os Limites de Empréstimo?</h3></div>
                                    <div class="text"><span>Detalhes sobre quantos livros um usuário pode emprestar por vez e por quanto tempo os empréstimos são válidos.</span></div>
                                </div>
                            </div>
                            <div class="line-separator"></div>
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Posso Reservar Livros que Estão Emprestados?</h3></div>
                                    <div class="text"><span>Explicações sobre se os usuários têm a opção de reservar livros que estão atualmente emprestados e como podem fazer isso.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Como Renovo um Empréstimo?</h3></div>
                                    <div class="text"><span>Instruções sobre o processo de renovação de empréstimos, incluindo quaisquer limitações ou condições especiais.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>O que Acontece se eu Não Devolver um Livro a Tempo?</h3></div>
                                    <div class="text"><span>Política de atrasos, incluindo possíveis penalidades ou restrições para usuários que não devolvem os livros dentro do prazo estabelecido.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Como Posso Cancelar Minha Conta?</h3></div>
                                    <div class="text"><span>Procedimento para usuários que desejam cancelar sua inscrição no site, incluindo informações sobre dados pessoais e como eles são tratados após o cancelamento.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup">
        <!-- Contato --> 
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title"></p></div>
                        <div class="Desenv-container">
                            <i class="fa-solid fa-face-frown"></i>
                            <p>
                                Não temos Contato , ainda...
                            </p>
                        </div>
                        <!-- <div class="separator">
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                            </div>
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup">
        <!-- Blog -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title"></p></div>
                        <div class="separator">
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Últimas Atualizações</h3></div>
                                    <div class="text"><span>Notícias recentes sobre atualizações de recursos, expansões do catálogo e mudanças importantes na plataforma.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Destaques da Comunidade</h3></div>
                                    <div class="text"><span>Histórias de sucesso e experiências de membros que demonstram o impacto positivo da biblioteca.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Artigos de Opinião</h3></div>
                                    <div class="text"><span>Artigos que exploram temas sobre livros, leitura digital e tendências educacionais, escritos por equipe ou colaboradores.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Entrevistas</h3></div>
                                    <div class="text"><span>Conversas com autores, educadores e profissionais sobre literatura e educação.</span></div>
                                </div>
                            </div>
                            <div class="line-separator"></div>
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Dicas de Leitura</h3></div>
                                    <div class="text"><span>Recomendações regulares e curadorias de livros baseadas em gêneros ou temas atuais.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Eventos e Webinars</h3></div>
                                    <div class="text"><span>Informações sobre eventos organizados pelo BookNest, incluindo webinars e workshops.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Inovações Tecnológicas</h3></div>
                                    <div class="text"><span>Atualizações sobre novas tecnologias adotadas pela plataforma para melhorar a experiência de leitura digital.</span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3>Contribuições de Usuários</h3></div>
                                    <div class="text"><span>Postagens de usuários compartilhando suas experiências de leitura, análises de livros e outros conteúdos relevantes.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup">
        <!-- Redes Sociais -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title"></p></div>
                        <div class="separator">
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.facebook.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-facebook-f" id="Facebook"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://twitter.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-x-twitter" id="Twitter"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.instagram.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-instagram" id="Instagram"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.linkedin.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-linkedin-in" id="LinkedIn"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                            </div>
                            <div class="line-separator"></div>
                            <div class="Aba">
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.youtube.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-youtube" id="YouTube"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.pinterest.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-pinterest-p" id="Pinterest"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.snapchat.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-snapchat" id="Snapchat"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                                <div class="containers-Abas">
                                    <div class="title-containers-Abas"><h3><a href="https://www.tiktok.com/" target="_blank" class="link-icon-title"><i class="fa-brands fa-tiktok" id="TikTok"></i></a></h3></div>
                                    <div class="text"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup" id="Login">
        <!-- Cadastro\Login -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title">Login</p></div>
                        <form action="{{route('login-pathname')}}" method="POST" class="form-login" id="form-login">
                            @csrf
                            <div class="title"><h2>LOGIN</h2></div>
                            <div class="inputs"><i class="fa-solid fa-envelope"></i><input type="email" name="email-login" id="email-login" class="email-login" required maxlength="255" placeholder="Insira seu E-mail Cadastrado"><i class="fa-solid fa-check" id="check-email-login"></i></div>
                            <div class="inputs"><i class="fa-solid fa-lock"></i><input type="password" name="password-login" id="passoword-login" class="password-login" required maxlength="16" minlength="8" placeholder="Insira sua Senha Cadastrada"><i class="fa-solid fa-eye i-login-open" id="eye-open"></i><i class="fa-solid fa-eye-slash i-login-close" id="eye-close"></i><i class="fa-solid fa-check" id="check-password-login"></i></div>
                            <div class="submit"><input type="submit" value="Entrar" class="submit-value-login" id="submit-value"></div>
                        </form>
                        <a href="#" class="Cadastrar-form">Não Tenho Cadastro ?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup" id="Cadastrar">
        <!-- Cadastro\Login -->
        <div class="container-background">
            <div class="container-line">
                <div class="informacoes">
                    <div class="elements">
                        <div class="title-for-informacoes"><p class="title">CADASTRO/LOGIN</p></div>
                        <form action="{{route('cadastro-pathname')}}" method="POST" class="form-cadastrar" id="form-cadastrar">
                            @csrf
                            <div class="cadastrar-info">
                                <div class="title"><h2>CADASTRAR</h2></div>
                                <div class="inputs"><i class="fa-solid fa-user"></i><input type="text" name="nome-cadastrar" id="nome-cadastrar" class="nome-cadastrar" maxlength="255" minlength="10" require placeholder="Insira seu Nome Completo"><i class="fa-solid fa-check" id="check-nome-cadastrar"></i></div>
                                <div class="inputs"><i class="fa-solid fa-envelope"></i><input type="text" name="email-cadastrar" id="email-cadastrar" class="email-cadastrar" maxlength="255" minlength="20" require placeholder="Insira Um E-mail valido"><i class="fa-solid fa-check" id="check-email-cadastrar"></i></div>
                                <div class="inputs"><i class="fa-regular fa-calendar"></i><input type="text" name="date-cadastrar" id="date-cadastrar" class="date-cadastrar" maxlength="10" minlength="10" placeholder="Insira sua Data de Nascimento"><i class="fa-solid fa-check" id="check-data-cadastrar"></i></div>
                                <div class="inputs"> 
                                    <i class="fa-solid fa-book"></i>
                                    <input type="text" name="generos-cadastrar" id="generos-cadastrar" class="generos-cadastrar" placeholder="Insira o Genero de Livro" list="generos">
                                    <datalist id="generos">
                                        <option class="generos-topicos" value="Ficção">Ficção</option>
                                        <option class="generos-topicos" value="Não-Ficção">Não-Ficção</option>
                                        <option class="generos-topicos" value="Poesia">Poesia</option>
                                        <option class="generos-topicos" value="Drama">Drama</option>
                                        <option class="generos-topicos" value="Conto">Conto</option>
                                        <option class="generos-topicos" value="Infantojuvenil">Infantojuvenil</option>
                                        <option class="generos-topicos" value="Novela Gráfica">Novela Gráfica</option>
                                        <option class="generos-topicos" value="Humor">Humor</option>
                                        <option class="generos-topicos" value="Guias de Viagem">Guias de Viagem</option>
                                        <option class="generos-topicos" value="Ensaios">Ensaios</option>
                                    </datalist>
                                    <i class="fa-solid fa-check" id="check-generos-cadastrar"></i>
                                </div>
                                <div class="inputs"><i class="fa-solid fa-key"></i><input type="password" name="password-cadastrar" id="password-cadastrar" class="password-cadastrar" maxlength="16" minlength="8" require placeholder="Crie Uma Senha"><i class="fa-solid fa-eye i-cadastrar-open" id="eye-open"></i><i class="fa-solid fa-eye-slash i-cadastrar-close" id="eye-close"></i><i class="fa-solid fa-check" id="check-senha-cadastrar"></i></div>
                                <div class="submit"><input type="submit" value="Cadastrar" class="submit-cadastrar" id="submit-cadastrar"></div>
                            </div>
                        </form>
                        <a href="#" class="Login-form">Tenho Login ?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="{{asset('js/Welcome/Welcome.js')}}"></script>
<script src="{{asset('js/Welcome/link-form.js')}}"></script>
<script src="{{asset('js/Welcome/eyes-cadastrar.js')}}"></script>
<script src="{{asset('js/Welcome/eyes-login.js')}}"></script>
<script src="{{asset('js/Welcome/inputs.js')}}"></script>
<script src="{{asset('js/Welcome/Erros.js')}}"></script>
<script src="{{asset('js/Welcome/LoginNullErros.js')}}"></script>
<script src="{{asset('js/Welcome/UserFoundError.js')}}"></script>
<script src="{{asset('js/Welcome/UserNotFoundLogin.js')}}"></script>
<script src="{{asset('js/Welcome/UserNotFoundPassWord.js')}}"></script>
<script src="{{asset('js/Welcome/TryLogout-Home.js')}}"></script>
<script src="{{asset('js/Welcome/TryLogout-Home-IfExists.js')}}"></script>
<script src="{{asset('js/Welcome/Logout.js')}}"></script>
</html>

