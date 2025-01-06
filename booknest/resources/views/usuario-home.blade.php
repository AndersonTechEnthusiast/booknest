@if(Auth::check())
    @if(Auth::user()->nivel_acessos === 'usuario')
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BookNest - Usuario {{  Auth::user()->nome }}</title>
        <link rel="stylesheet" href="{{asset('css/Usuario-Logado/style.css')}}">
        <link rel="stylesheet" href="{{asset('css/slides/style.css')}}">
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
        <script src="https://kit.fontawesome.com/7bcc76ecaf.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <meta content="{{ base64_encode(mb_chr((int)Auth::user()->id)) }}" id="IdContent">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <meta id="CsrfToken-3" content="{{ csrf_token() }}">
        <script src="{{ asset('js/Colaborador/Tokens.js?v=1.1') }}"></script>
    </head>
    <body class="body_teste">  
        <div class="loading-interative">
            <div class="circle-load">
                <img src="{{asset('img/Welcome/Logo.png')}}">
            </div>
        </div>
        <div class="etinerario-BookNest">
            <nav class="etinerario">
                <ul>
                    <li class="categorias">
                        <a href="#Ficção-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Ficção"></div>
                                <div class="Texto-Category-BookNest">Ficção</div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Não-Ficção-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Não-Ficção"></div>
                                <div class="Texto-Category-BookNest">Não-Ficção</div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Poesia-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Poesia"></div>
                                <div class="Texto-Category-BookNest">Poesia</div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Drama-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Drama"></div>
                                <div class="Texto-Category-BookNest">Drama </div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Conto-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Conto"></div>
                                <div class="Texto-Category-BookNest">Conto </div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Infanto-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="InfantoJuvenil"></div>
                                <div class="Texto-Category-BookNest">Infanto juvenil</div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Novela-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="NovelaGrafica"></div>
                                <div class="Texto-Category-BookNest">Novela Gráfica</div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Humor-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Humor"></div>
                                <div class="Texto-Category-BookNest">Humor </div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Guia-de-Viajens-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="GuiaDeViajem"></div>
                                <div class="Texto-Category-BookNest">G. de Viagem</div>
                           </div>
                        </a>
                    </li>
                    <li class="categorias">
                        <a href="#Ensaio-container" class="link-sumario-digit">
                            <div class="options-category">
                                <div class="Icone-Img-BookNest" id="Ensaio"></div>
                                <div class="Texto-Category-BookNest">Ensaio</div>
                           </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div> 
        <div class="slides-books">
            @php
                $contador_slides = 0;
            @endphp
            @foreach ($Postagens as $Post)
                @php
                    $contador_slides++;
                @endphp
                @php
                    $imagens_slides = [];
                @endphp
                @foreach (explode(',',$Post['imagens']) as $imagens)
                    @php
                        $imagens_slides[] = $imagens;
                    @endphp
                @endforeach
                <div class="slides" id="@php echo 'slides-'.$contador_slides; @endphp" @php echo "style='background-image: url(../../publicacao/".$imagens_slides[rand(0,count($imagens_slides) - 1)].")'" @endphp>
                    <div class="container-shadow-text-slide">
                        <span>
                            <p>
                                <b>{{ $Post['titulo'] }}</b>
                                <p>{{ $Post['sinopse'] }}</p>
                            </p>
                        </span>
                    </div>
                </div>
                @if($contador_slides === 50)
                    @break
                @endif
            @endforeach
            <!-- <div class="slides" id="slides-1"><div class="container-shadow-text-slide"><span><p><b>"Cem Anos de Solidão"</b></p><p>Este romance épico de Gabriel García Márquez narra a saga da família Buendía ao longo de sete gerações na cidade fictícia de Macondo, explorando temas de solidão, destino e os ciclos repetitivos da história.</p></span></div></div>
            <div class="slides" id="slides-2"><div class="container-shadow-text-slide"><span><p><b>"O Grande Gatsby"</b></p><p>A obra de F. Scott Fitzgerald, ambientada nos loucos anos 20, é uma crítica à sociedade americana da época, centrada na história de Jay Gatsby e seu amor inflexível por Daisy Buchanan.</p></span></div></div>
            <div class="slides" id="slides-3"><div class="container-shadow-text-slide"><span><p><b>"Orgulho e Preconceito"</b></p><p>Jane Austen cria uma obra-prima da literatura inglesa, explorando as questões de moralidade, educação e casamento na sociedade rural da Inglaterra do século XIX através da perspicaz Elizabeth Bennet e seu eventual interesse amoroso, o Sr. Darcy.</p></span></div></div>
            <div class="slides" id="slides-4"><div class="container-shadow-text-slide"><span><p><b>"Duna"</b></p><p>Criado por Frank Herbert, este romance de ficção científica aborda a luta pelo controle de um planeta desértico chamado Arrakis, única fonte da substância mais valiosa do universo, a especiaria "melange".</p></span></div></div>
            <div class="slides" id="slides-5"><div class="container-shadow-text-slide"><span><p><b>"O Nome do Vento"</b></p><p>Patrick Rothfuss conta a história de Kvothe, um aventureiro e músico talentoso, que narra sua própria história desde a infância até se tornar uma figura lendária em um mundo cheio de magia e mistério.</p></span></div></div>
            <div class="slides" id="slides-6"><div class="container-shadow-text-slide"><span><p><b>"Neuromancer"</b></p><p>William Gibson introduziu o termo "ciberespaço" nesta obra que definiu o subgênero cyberpunk, descrevendo uma realidade futurista dominada por megacorporações e submersa em redes de dados digitais.</p></span></div></div>
            <div class="slides" id="slides-7"><div class="container-shadow-text-slide"><span><p><b>"O Código Da Vinci"</b></p><p>Dan Brown combina mistério, arte, códigos e teorias de conspiração com as aventuras de Robert Langdon, que investiga um assassinato no Louvre e descobre segredos ocultos em obras de Leonardo da Vinci.</p></span></div></div>
            <div class="slides" id="slides-8"><div class="container-shadow-text-slide"><span><p><b>"Garota Exemplar"</b></p><p>Gillian Flynn apresenta uma narrativa emocionante e perturbadora sobre o desaparecimento de uma mulher em um casamento aparentemente perfeito, que desvenda uma série de segredos sombrios e reviravoltas psicológicas.</p></span></div></div>
            <div class="slides" id="slides-9"><div class="container-shadow-text-slide"><span><p><b>"Sherlock Holmes"</b></p><p>Sir Arthur Conan Doyle criou um dos mais famosos detetives da literatura, destacando-se por seu método científico e lógico de dedução aplicado a casos intrigantes e complicados.</p></span></div></div>
            <div class="slides" id="slides-10"><div class="container-shadow-text-slide"><span><p><b>"Steve Jobs"</b></p><p>Biografia de Walter Isaacson que detalha a vida de Steve Jobs, co-fundador da Apple, destacando sua carreira, personalidade complexa e como ele influenciou a tecnologia moderna.</p></span></div></div>
            <div class="slides" id="slides-11"><div class="container-shadow-text-slide"><span><p><b>"Eu Sou Malala"</b></p><p>Malala Yousafzai, co-autora desta autobiografia, narra sua luta pela educação das meninas no Paquistão sob o regime do Talibã, culminando no atentado contra sua vida e seu subsequente ativismo global.</p></span></div></div>
            <div class="slides" id="slides-12"><div class="container-shadow-text-slide"><span><p><b>"Longa Caminhada Até a Liberdade"</b></p><p>Autobiografia de Nelson Mandela, que relata sua juventude, carreira como advogado, seus 27 anos na prisão e seu papel decisivo na abolição do apartheid como presidente da África do Sul.</p></span></div></div>
            <div class="slides" id="slides-13"><div class="container-shadow-text-slide"><span><p><b>"Sapiens: Uma Breve História da Humanidade"</b></p><p>Yuval Noah Harari explora toda a história da humanidade, desde a Idade da Pedra até a era moderna, focando em como os humanos moldaram o mundo e uns aos outros através da cultura e das revoluções sociais.</p></span></div></div>
            <div class="slides" id="slides-14"><div class="container-shadow-text-slide"><span><p><b>"Armas, Germes e Aço"</b></p><p>Jared Diamond examina como as variações geográficas e ambientais moldaram as sociedades humanas ao longo da história, determinando quais civilizações se tornariam dominantes.</p></span></div></div>
            <div class="slides" id="slides-15"><div class="container-shadow-text-slide"><span><p><b>"O Poder do Hábito"</b></p><p>Charles Duhigg explora a ciência por trás de por que fazemos o que fazemos na vida e nos negócios, analisando como os hábitos são formados e como podem ser mudados para melhor.</p></span></div></div>
            <div class="slides" id="slides-16"><div class="container-shadow-text-slide"><span><p><b>"Como Fazer Amigos e Influenciar Pessoas"</b></p><p>Este clássico de Dale Carnegie oferece estratégias para melhorar as habilidades interpessoais e de liderança, ensinando a influenciar as pessoas de maneira positiva e duradoura.</p></span></div></div>
            <div class="slides" id="slides-17"><div class="container-shadow-text-slide"><span><p><b>"O Poder do Agora"</b></p><p>Eckhart Tolle oferece um guia espiritual sobre como viver no momento presente e superar os pensamentos dominados pelo tempo para encontrar a verdadeira paz interior.</p></span></div></div>
            <div class="slides" id="slides-18"><div class="container-shadow-text-slide"><span><p><b>"Mindset: A Nova Psicologia do Sucesso"</b></p><p>Carol S. Dweck apresenta a ideia de que com uma "mentalidade de crescimento", que abraça desafios e vê o fracasso não como uma prova de incapacidade mas como uma oportunidade para o crescimento, qualquer pessoa pode alcançar sucesso significativo.</p></span></div></div>
            <div class="slides" id="slides-19"><div class="container-shadow-text-slide"><span><p><b>"A Metamorfose"</b></p><p>Franz Kafka explora o absurdo e a alienação através da história de um homem que, sem motivo aparente, acorda um dia transformado em um inseto monstruoso.</p></span></div></div>
            <div class="slides" id="slides-20"><div class="container-shadow-text-slide"><span><p><b>"To Kill a Mockingbird"</b></p><p>Harper Lee apresenta um poderoso retrato do racismo no Sul dos EUA, através dos olhos de uma jovem menina, enquanto seu pai advogado luta para defender um homem negro injustamente acusado de estupro.</p></span></div></div>
            <div class="slides" id="slides-21"><div class="container-shadow-text-slide"><span><p><b>"1984"</b></p><p>Obra distópica de George Orwell sobre uma sociedade totalitária governada pelo Partido, onde o líder, o Grande Irmão, vigia todos, e a verdade é constantemente manipulada.</p></span></div></div>
            <div class="slides" id="slides-22"><div class="container-shadow-text-slide"><span><p><b>"A Amiga Genial"</b></p><p>Elena Ferrante narra a vida e amizade tumultuada de duas mulheres, Elena e Lila, desde sua infância em Nápoles até a idade adulta, explorando a complexidade dos laços femininos e sociais.</p></span></div></div>
            <div class="slides" id="slides-23"><div class="container-shadow-text-slide"><span><p><b>"Trilogia Fundação"</b></p><p>Isaac Asimov cria um universo futurista onde a humanidade, espalhada por planetas em toda a galáxia, é governada pelos princípios da Psico-História, que prediz o futuro em larga escala.</p></span></div></div>
            <div class="slides" id="slides-24"><div class="container-shadow-text-slide"><span><p><b>"O Senhor dos Anéis"</b></p><p>J.R.R. Tolkien oferece uma saga épica de fantasia onde um pequeno hobbit, Frodo Bolseiro, é encarregado de destruir um anel poderoso que é desejado por forças malignas determinadas a dominar o mundo.</p></span></div></div>
            <div class="slides" id="slides-25"><div class="container-shadow-text-slide"><span><p><b>"As Crônicas de Nárnia"</b></p><p>C.S. Lewis escreve uma série de histórias que transportam crianças de nosso mundo para Nárnia, onde elas ajudam a lutar contra o mal e descobrem profundas verdades sobre o bem, o mal e a natureza humana.</p></span></div></div>
            <div class="slides" id="slides-26"><div class="container-shadow-text-slide"><span><p><b>"Hyperion"</b></p><p>Dan Simmons combina elementos de ficção científica e fantasia em uma narrativa que atravessa o tempo e o espaço, focando em um grupo de peregrinos que viajam para um mundo distante para entender os mistérios do Tempo e do espaço.</p></span></div></div>
            <div class="slides" id="slides-27"><div class="container-shadow-text-slide"><span><p><b>"O Silêncio dos Inocentes"</b></p><p>Thomas Harris mergulha no mundo do terror psicológico e suspense ao introduzir Hannibal Lecter, um psiquiatra canibal, que ajuda uma jovem agente do FBI a capturar outro serial killer.</p></span></div></div>
            <div class="slides" id="slides-28"><div class="container-shadow-text-slide"><span><p><b>"A Mulher na Janela"</b></p><p>A.J. Finn conta a história de uma mulher que, lidando com agorafobia e isolamento, acredita ter visto um crime ocorrer na casa de seus vizinhos, o que a leva a questionar sua própria sanidade e segurança.</p></span></div></div>
            <div class="slides" id="slides-29"><div class="container-shadow-text-slide"><span><p><b>"Ponto de Impacto"</b></p><p>Dan Brown entrelaça ciência, religião e conspiração em uma narrativa que segue um acadêmico e uma analista da NASA que descobrem um meteorito extraordinário, que pode ter profundas implicações para a fé e a ciência.</p></span></div></div>
            <div class="slides" id="slides-30"><div class="container-shadow-text-slide"><span><p><b>"Walt Disney: O Triunfo da Imaginação Americana"</b></p><p>Neal Gabler detalha a vida de Walt Disney, mostrando como suas inovações no campo da animação e seu império de entretenimento transformaram a cultura americana.</p></span></div></div>
            <div class="slides" id="slides-31"><div class="container-shadow-text-slide"><span><p><b>"Benjamin Franklin: An American Life"</b></p><p>Walter Isaacson explora a vida de Benjamin Franklin, detalhando suas múltiplas facetas como inventor, político, escritor e diplomata, e seu impacto na formação dos Estados Unidos.</p></span></div></div>
            <div class="slides" id="slides-32"><div class="container-shadow-text-slide"><span><p><b>"O Gene Egoísta"</b></p><p>Richard Dawkins apresenta uma teoria da evolução centrada na replicação e sobrevivência dos genes, propondo que somos meros veículos para os nossos genes.</p></span></div></div>
            <div class="slides" id="slides-33"><div class="container-shadow-text-slide"><span><p><b>"O Dilema do Onívoro"</b></p><p>Michael Pollan investiga as escolhas alimentares humanas do ponto de vista das espécies que consumimos, explorando as complexidades éticas, políticas e ecológicas da alimentação contemporânea.</p></span></div></div>
            <div class="slides" id="slides-34"><div class="container-shadow-text-slide"><span><p><b>"O Milagre da Manhã"</b></p><p>Hal Elrod propõe uma técnica matinal para melhorar a produtividade e o bem-estar pessoal, argumentando que uma rotina matinal bem-estruturada pode levar a melhorias significativas na vida de uma pessoa.</p></span></div></div>
            <div class="slides" id="slides-35"><div class="container-shadow-text-slide"><span><p><b>"A Vida Secreta das Árvores"</b></p><p>Peter Wohlleben compartilha insights fascinantes sobre a vida complexa e interconectada das árvores, utilizando a ciência para revelar como elas se comunicam, compartilham recursos e enfrentam desafios.</p></span></div></div>
            <div class="slides" id="slides-36"><div class="container-shadow-text-slide"><span><p><b>"Quando Nietzsche Chorou"</b></p><p>Irvin D. Yalom mistura ficção e realidade para explorar a vida e o pensamento do filósofo Friedrich Nietzsche através de uma narrativa que envolve sessões de psicoterapia fictícias com o próprio Nietzsche.</p></span></div></div>
            <div class="slides" id="slides-37"><div class="container-shadow-text-slide"><span><p><b>"O Homem que Calculava"</b></p><p>Malba Tahan (pseudônimo de Júlio César de Mello e Souza) apresenta uma coleção de histórias matemáticas e problemas intrigantes narrados através das aventuras do personagem Beremiz Samir no mundo islâmico.</p></span></div></div>
            <div class="slides" id="slides-38"><div class="container-shadow-text-slide"><span><p><b>"Beloved"</b></p><p>Toni Morrison explora os impactos psicológicos e sociais da escravidão nos EUA através da história de uma mulher que, para escapar do sofrimento da escravidão, faz uma escolha devastadora.</p></span></div></div>
            <div class="slides" id="slides-39"><div class="container-shadow-text-slide"><span><p><b>"Middlemarch"</b></p><p>George Eliot (pseudônimo de Mary Ann Evans) cria uma vasta tapeçaria da vida rural inglesa, explorando questões sociais, políticas e pessoais através de múltiplas histórias entrelaçadas centradas em torno da inteligente e idealista Dorothea Brooke.</p></span></div></div>
            <div class="slides" id="slides-40"><div class="container-shadow-text-slide"><span><p><b>"A Ilha do Conhecimento"</b></p><p>Marcelo Gleiser discute as limitações do conhecimento humano sobre o universo, explorando a relação entre ciência e filosofia e questionando até que ponto podemos realmente entender a natureza da realidade.</p></span></div></div>
            <div class="slides" id="slides-41"><div class="container-shadow-text-slide"><span><p><b>"The Catcher in the Rye"</b></p><p>J.D. Salinger captura a angústia adolescente através da história de Holden Caulfield, um jovem que foge de seu internato e passa três dias perdido em Nova York, criticando a falsidade que percebe no mundo adulto.</p></span></div></div>
            <div class="slides" id="slides-42"><div class="container-shadow-text-slide"><span><p><b>"Moby-Dick"</b></p><p>Herman Melville narra a obsessiva caçada do capitão Ahab ao grande baleia branca, Moby Dick, em uma obra que explora temas de vingança, destino e a luta do homem contra a natureza.</p></span></div></div>
            <div class="slides" id="slides-43"><div class="container-shadow-text-slide"><span><p><b>"O Fio da Navalha"</b></p><p>Somerset Maugham conta a jornada espiritual e física de Larry Darrell, que, desiludido com a sociedade pós-Primeira Guerra Mundial, busca significado e iluminação espiritual na Índia e em outros lugares.</p></span></div></div>
            <div class="slides" id="slides-44"><div class="container-shadow-text-slide"><span><p><b>"A Divina Comédia"</b></p><p>Dante Alighieri compõe uma alegoria da jornada da alma em direção a Deus, atravessando os reinos do Inferno, Purgatório e Paraíso, enquanto explora temas de moralidade, justiça e a natureza divina.</p></span></div></div>
            <div class="slides" id="slides-45"><div class="container-shadow-text-slide"><span><p><b>"Ulysses"</b></p><p>James Joyce descreve um dia na vida de Leopold Bloom em Dublin, utilizando uma série de técnicas literárias inovadoras para capturar os detalhes íntimos e mundanos da experiência humana.</p></span></div></div>
            <div class="slides" id="slides-46"><div class="container-shadow-text-slide"><span><p><b>"Os Irmãos Karamazov"</b></p><p>Fiódor Dostoiévski explora temas profundos como fé, dúvida, livre arbítrio e paternidade, através da história de quatro irmãos e seu relacionamento com seu pai em uma Rússia marcada por mudanças sociais e políticas.</p></span></div></div>
            <div class="slides" id="slides-47"><div class="container-shadow-text-slide"><span><p><b>"Crime e Castigo"</b></p><p>Gabriel García Márquez combina o real e o mágico em uma história sobre o amor proibido entre dois jovens, que esperam toda a vida para estar juntos, defrontando-se com os desafios das normas sociais e da própria mortalidade.</p></span></div></div>
            <div class="slides" id="slides-48"><div class="container-shadow-text-slide"><span><p><b>"Anna Karenina"</b></p><p>Paulo Coelho narra a busca espiritual de um jovem pastor andaluz que viaja do seu lar na Espanha até as pirâmides do Egito em busca de um tesouro, mas acaba encontrando uma compreensão mais profunda de si mesmo e do mundo ao seu redor.</p></span></div></div>
            <div class="slides" id="slides-49"><div class="container-shadow-text-slide"><span><p><b>"Guerra e Paz"</b></p><p>Anne Frank oferece um olhar comovente e profundamente pessoal sobre a vida em esconderijo durante a ocupação nazista da Holanda, através do diário que manteve durante os anos em que permaneceu oculta.</p></span></div></div>
            <div class="slides" id="slides-50"><div class="container-shadow-text-slide"><span><p><b>"Os Miseráveis"</b></p><p>Antoine de Saint-Exupéry conta a história de um piloto perdido no deserto que encontra um príncipe misterioso de outro planeta, com lições sobre amor, perda e humanidade.</p></span></div></div> -->
        </div>
        <div class="buttons-circle-slides">
            @php
                $contador_circle_button = 0;
            @endphp
            @foreach ($Postagens as $Post)
                @php
                    $contador_circle_button++;
                @endphp
                <a href="#" class="links-options-circle-slides" id="@php echo 'links-activados-circle-'.$contador_circle_button @endphp"><div class="circle-slides-activador" id="@php echo 'circle-activador-'.$contador_circle_button @endphp"></div></a>
                @if($contador_circle_button === 50)
                    @break
                @endif
            @endforeach
            <!-- <a href="#" class="links-options-circle-slides" id="links-activados-circle-1"><div class="circle-slides-activador" id="circle-activador-1"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-2"><div class="circle-slides-activador" id="circle-activador-2"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-3"><div class="circle-slides-activador" id="circle-activador-3"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-4"><div class="circle-slides-activador" id="circle-activador-4"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-5"><div class="circle-slides-activador" id="circle-activador-5"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-6"><div class="circle-slides-activador" id="circle-activador-6"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-7"><div class="circle-slides-activador" id="circle-activador-7"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-8"><div class="circle-slides-activador" id="circle-activador-8"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-9"><div class="circle-slides-activador" id="circle-activador-9"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-10"><div class="circle-slides-activador" id="circle-activador-10"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-11"><div class="circle-slides-activador" id="circle-activador-11"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-12"><div class="circle-slides-activador" id="circle-activador-12"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-13"><div class="circle-slides-activador" id="circle-activador-13"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-14"><div class="circle-slides-activador" id="circle-activador-14"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-15"><div class="circle-slides-activador" id="circle-activador-15"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-16"><div class="circle-slides-activador" id="circle-activador-16"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-17"><div class="circle-slides-activador" id="circle-activador-17"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-18"><div class="circle-slides-activador" id="circle-activador-18"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-19"><div class="circle-slides-activador" id="circle-activador-19"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-20"><div class="circle-slides-activador" id="circle-activador-20"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-21"><div class="circle-slides-activador" id="circle-activador-21"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-22"><div class="circle-slides-activador" id="circle-activador-22"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-23"><div class="circle-slides-activador" id="circle-activador-23"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-24"><div class="circle-slides-activador" id="circle-activador-24"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-25"><div class="circle-slides-activador" id="circle-activador-25"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-26"><div class="circle-slides-activador" id="circle-activador-26"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-27"><div class="circle-slides-activador" id="circle-activador-27"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-28"><div class="circle-slides-activador" id="circle-activador-28"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-29"><div class="circle-slides-activador" id="circle-activador-29"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-30"><div class="circle-slides-activador" id="circle-activador-30"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-31"><div class="circle-slides-activador" id="circle-activador-31"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-32"><div class="circle-slides-activador" id="circle-activador-32"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-33"><div class="circle-slides-activador" id="circle-activador-33"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-34"><div class="circle-slides-activador" id="circle-activador-34"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-35"><div class="circle-slides-activador" id="circle-activador-35"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-36"><div class="circle-slides-activador" id="circle-activador-36"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-37"><div class="circle-slides-activador" id="circle-activador-37"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-38"><div class="circle-slides-activador" id="circle-activador-38"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-39"><div class="circle-slides-activador" id="circle-activador-39"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-40"><div class="circle-slides-activador" id="circle-activador-40"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-41"><div class="circle-slides-activador" id="circle-activador-41"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-42"><div class="circle-slides-activador" id="circle-activador-42"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-43"><div class="circle-slides-activador" id="circle-activador-43"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-44"><div class="circle-slides-activador" id="circle-activador-44"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-45"><div class="circle-slides-activador" id="circle-activador-45"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-46"><div class="circle-slides-activador" id="circle-activador-46"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-47"><div class="circle-slides-activador" id="circle-activador-47"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-48"><div class="circle-slides-activador" id="circle-activador-48"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-49"><div class="circle-slides-activador" id="circle-activador-49"></div></a>
            <a href="#" class="links-options-circle-slides" id="links-activados-circle-50"><div class="circle-slides-activador" id="circle-activador-50"></div></a> -->
        </div>
        <div class="container-arrow">
            <div class="container-Welcome">
                <div class="icone-arrows">
                <i class="fi fi-rr-angle-double-small-right"></i><i class="fi fi-rr-angle-double-small-right"></i><i class="fi fi-rr-angle-double-small-right"></i>
                </div>
                <div class="Perfil">
                   <a id="Perfil-link">
                        <label>
                            @if(Auth::user()->pathname)
                                <img src="{{asset('imagens-de-perfil-de-usuarios/' .Auth::user()->pathname )}}" alt="Sua foto de Perfil" id="Imagem">
                            @else
                                <img src="{{asset('img/Usuario-Logado/Foto-default.webp')}}" alt="Sua foto de Perfil" id="Imagem">
                            @endif
                        </label>
                   </a>
                </div>
                <div class="nome-do-usuario">
                    <p>Bem - Vindo , {{Auth::user()->nome}}</p>
                </div>
            </div>
        </div>
        <div class="container-config-icon-gear">
            <form id="logout-icon" method="POST" action="{{ route('logout') }}">
                @csrf
                <input type="submit" style="display: none" id="submit">
                <label for="submit">
                    <img src="{{ asset('img/Usuario-Logado/pngtree-hand-close-up-pure-hand-drawing-sketch-png-image_390098-Photoroom (10).png') }}" alt="">
                </label>
            </form>
            @if(!empty($Verificacao))
                <a href="#" id="trocarDeNivelDeAcessos" style="text-decoration: none; display: block; width: 170px;">
                    <img style="width:100%; height:100%" src="{{ asset('img/Usuario-Logado/ilustracao-de-mesas-de-cafe-de-madeira-minimalistas_1308-166094-Photoroom (1).png') }}">
                </a>
            @endif
            <a id="gear-user-config" href="#">
                <i class="fa-solid fa-gear"></i>
            </a>
        </div>
        <div class="icon-search">
            <a href="{{ route('pesquisar') }}">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
        <!-- FICÇÃO -->
        <div class="title-category" id="Ficção-container">
            <h3>
                FICÇÃO
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @if($Postagens)
                    @foreach ($Postagens as $Post)
                        @if($Post['genero'] === 'Ficção')
                            @php
                                $id = $Post['id'];
                            @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                                <div class="Posts">
                                    <div class="Front">
                                        <div class="title-posts">{{ $Post['titulo'] }}</div>
                                        <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Ficção-white.png')}}"></div>
                                        <div class="infos-posts"></div>
                                    </div>
                                    <div class="Back">
                                        @php
                                            $imagem = "../../publicacao/".$Post['imagem'];
                                        @endphp
                                        <img src="@php echo $imagem @endphp">
                                    </div>
                                </div>
                            </a>
                        @endif
                    @endforeach
                @endif
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO FICÇÃO
                </h4>
            </div>
        </div>
        <!-- NÃO-FICÇÃO -->
        <div class="title-category" id="Não-Ficção-container">
            <h3>
                NÃO FICÇÃO
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @if($Postagens)
                    @foreach ($Postagens as $Post)
                        @if($Post['genero'] === 'Não-Ficção')
                            @php
                                $id = $Post['id'];
                            @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                                <div class="Posts">
                                    <div class="Front">
                                        <div class="title-posts">{{ $Post['titulo'] }}</div>
                                        <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Não-Ficção-white.png')}}"></div>
                                        <div class="infos-posts"></div>
                                    </div>
                                    <div class="Back">
                            @php
                                $imagem = "../../publicacao/".$Post['imagem'];
                            @endphp
                            <img src="@php echo $imagem; @endphp">
                        </div>
                                </div>
                            </a>
                        @endif
                    @endforeach
                @endif                
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO NÃO-FICÇÃO
                </h4>
            </div>
        </div>
        <!-- POESIA -->
        <div class="title-category" id="Poesia-container">
            <h3>
                POESIA
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach($Postagens as $Post)
                    @if($Post['genero'] === 'Poesia')
                        @php
                            $id = $Post['id'];
                        @endphp
                        <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Poesia-white.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO POESIA
                </h4>
            </div>
        </div>
        <!-- DRAMA -->
        <div class="title-category" id="Drama-container">
            <h3>
                DRAMA
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach ($Postagens as $Post)
                    @if($Post['genero'] === 'Drama')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Drama-white.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach   
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO DRAMA
                </h4>
            </div>
        </div>
        <!-- CONTO -->
        <div class="title-category" id="Conto-container">
            <h3>
                CONTO
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach ($Postagens as $Post)
                    @if($Post['genero'] === 'Conto')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Conto-White.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach       
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO CONTO
                </h4>
            </div>
        </div>
        <!-- INFANTO JUVENIL-->
        <div class="title-category" id="Infanto-container">
            <h3>
                INFANTO JUVENIL
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach ($Postagens as $Post)
                    @if($Post['genero'] === 'Infantojuvenil')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Infanto-White.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach
                        
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO INFANTO JUVENIL
                </h4>
            </div>
        </div>
        <!-- NOVELA GRÁFICA-->
        <div class="title-category" id="Novela-container">
            <h3>
                NOVELA GRAFICA
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach($Postagens as $Post)
                    @if($Post['genero'] === 'Novela Gráfica')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Novela-Grafica-White.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO NOVELA GRÁFICA
                </h4>
            </div>
        </div>
        <!-- HUMOR-->
        <div class="title-category" id="Humor-container">
            <h3>
                HUMOR
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach($Postagens as $Post)
                    @if($Post['genero'] === 'Humor')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Humor-White.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO HUMOR
                </h4>
            </div>
        </div>
        <!-- GUIA DE VIAJENS -->
        <div class="title-category" id="Guia-de-Viajens-container">
            <h3>
                GUIA DE VIAJENS
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach($Postagens as $Post)
                    @if($Post['genero'] === 'Guia de Viagem')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Guia-de-Viagem-White.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO GUIA DE VIAJENS
                </h4>
            </div>
        </div>
        <!-- ENSAIO -->
        <div class="title-category" id="Ensaio-container">
            <h3>
                ENSAIO
            </h3>
        </div>
        <div class="container-mensagem-extendido">
            <div class="container-Posts">
                @foreach($Postagens as $Post)
                    @if($Post['genero'] === 'Ensaio')
                        @php
                            $id = $Post['id'];
                        @endphp
                            <a href="{{ route('ver-postagem-completa',['id' => $id]) }}">
                            <div class="Posts">
                                <div class="Front">
                                    <div class="title-posts">{{ $Post['titulo'] }}</div>
                                    <div class="image-posts"><img src="{{asset('img/Usuario-Logado/Ensaio-White.png')}}"></div>
                                    <div class="infos-posts"></div>
                                </div>
                                <div class="Back">
                                    @php
                                        $imagem = "../../publicacao/".$Post['imagem'];
                                    @endphp
                                    <img src="@php echo $imagem; @endphp">
                                </div>
                            </div>
                        </a>
                    @endif
                @endforeach
            </div>
            <div class="mensagem-barra-exedido">
                <h4>
                    FIM DA SESSÃO ENSAIO
                </h4>
            </div>
        </div>
        <footer>
            <div>
                <p>BookNest</p>
            </div>
        </footer>
        <!-- adicionando o @ csrf so que no Js -->
        <meta class="hidden" id="token" content="{{csrf_token()}}">
    </body>
    <script src="{{asset('js/usuario-logado/slides/slides.js?v=1.1')}}"></script>
    {{-- <script src="{{asset('js/usuario-logado/Image-preview/Imagem-preview-user.js?v=1.1')}}" defer></script> --}}
    <script src="{{asset('js/usuario-logado/usuario/logout-try-if-exists.js?v=1.1')}}"></script>
    <script src="{{asset('js/usuario-logado/usuario/ErrorUploads.js?v=1.1')}}"></script>
    <script src="{{asset('js/usuario-logado/usuario/SuccessUpload.js?v=1.1')}}"></script>
    <script src="{{asset('js/Administrador/Loading.js?v=1.1')}}"></script>
    <script src="{{asset('js/usuario-logado/Config/Config.js?v=1.1')}}" defer></script>
    <script src="{{ asset('js/usuario-logado/NivelDeAcessos/NivelDeAcessos.js?v=1.1') }}" defer></script>
    @php 
        mb_internal_encoding("UTF-8");
        $dados = [
            base64_encode(Auth::user()->id) ,
            base64_encode(Auth::user()->nome) , 
            base64_encode(Auth::user()->email) ,
            base64_encode(Auth::user()->date) , 
            base64_encode(Auth::user()->generos) , 
            base64_encode(Auth::user()->senha)
        ];
        $string_dados = base64_encode(implode('+-',$dados));
        $string_logout = base64_encode(route('logout'));
        $string_photo = base64_encode(route('perfil-photo',['id' => Auth::user()->id]));
    @endphp
    @if($Curtidas)
        @php $curtidas_encode_K = []; @endphp
        @php $curtidas_encode_V = []; @endphp
        @php $curtidas_encode_chars_K = []; @endphp
        @php $curtidas_encode_chars_V = []; @endphp
        @php $curtidas_encode_base64_K = []; @endphp
        @php $curtidas_encode_base64_V = []; @endphp
        @foreach ($Curtidas as $curtida)
            @foreach ($curtida->toArray() as $key => $value)
                @php
                    $curtidas_encode_K[] = $key;
                    $curtidas_encode_V[] =  $value;
                @endphp
            @endforeach
        @endforeach
        @foreach (mb_str_split(implode('+-', $curtidas_encode_K)) as $encode_K)
            @php $curtidas_encode_chars_K[] = base64_encode(mb_ord($encode_K)); @endphp
        @endforeach
        @foreach (mb_str_split(implode('+-', $curtidas_encode_V)) as $encode_V)
            @php $curtidas_encode_chars_V[] = base64_encode(mb_ord($encode_V)); @endphp
        @endforeach
        @php
            $json_keys_encode = base64_encode(implode('+-',$curtidas_encode_chars_K));
            $json_values_encode = base64_encode(implode('+-',$curtidas_encode_chars_V));
        @endphp
    @endif
    @if($Livros_Salvos)
        @php
            $livros_encode_K = [];
            $livros_encode_V = [];
            $livros_encode_chars_K = [];
            $livros_encode_chars_V = [];
        @endphp
        <!-- Aloca os valores e as chaves dentro das arrays criadas -->
        @foreach ($Livros_Salvos as $livro_salvo)
            @foreach ($livro_salvo->toArray() as $key => $value)
                @php $livros_encode_K[] = $key; @endphp
                @php $livros_encode_V[] = $value; @endphp
            @endforeach
        @endforeach
        <!-- transforma em string com um separador e depois transforma em array de novo -->
        @foreach (mb_str_split(implode('+-',$livros_encode_K)) as $encode_K)
            @php
                $livros_encode_chars_K[] = base64_encode(mb_ord($encode_K));
            @endphp
        @endforeach
        <!-- transforma em string com um separador e depois transforma em array de novo -->
        @foreach (mb_str_split(implode('+-',$livros_encode_V)) as $encode_V)
            @php
                $livros_encode_chars_V[] = base64_encode(mb_ord($encode_V));
            @endphp
        @endforeach
        @php
            $string_livros_k = mb_str_split(implode('+-',$livros_encode_chars_K));
            $string_livros_v = mb_str_split(implode('+-',$livros_encode_chars_V));
            $array_dados_livros_k = [];
            $array_dados_livros_v = [];
            $Alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        @endphp
        @foreach ($string_livros_k as $k)
            @php
                $array_dados_livros_k[] = str_replace('=',$Alfabeto[rand(0,25)],base64_encode(mb_ord($k)))
            @endphp
        @endforeach
        @foreach ($string_livros_v as $v)
            @php
                $array_dados_livros_v[] = str_replace('=',$Alfabeto[rand(0,25)],base64_encode(mb_ord($v)));
            @endphp
        @endforeach
        @php
            $string_livros_keys_json = base64_encode(implode('+-',$array_dados_livros_k));
            $string_livros_values_json = base64_encode(implode('+-',$array_dados_livros_v));
        @endphp
    @endif
    @if ($Complemento_do_Perfil)
        @php
            $profile_em_k = [];
            $profile_em_v = [];
            $contador_profile = 0;
        @endphp
        @foreach ($Complemento_do_Perfil as $key => $value)
            @php $profile_em_k[] = $key; @endphp
            @php $profile_em_v[] = $value; @endphp
            @php $contador_profile++; @endphp
            @if((int)$contador_profile === (int)count($Complemento_do_Perfil))
                @php $contador_profile_k = 0; @endphp
                @php $contador_profile_v = 0; @endphp
                @php $temporaria_profile_k = []; @endphp
                @php $temporaria_profile_v = []; @endphp
                @foreach (mb_str_split(implode('+-',$profile_em_k)) as $k)
                    @php $temporaria_profile_k[] = base64_encode(mb_ord($k)); @endphp
                    @php $contador_profile_k++; @endphp
                    @if((int)$contador_profile_k === (int)count((mb_str_split(implode('+-',$profile_em_k)))))
                        @php $profile_em_k = []; @endphp
                        @php $profile_em_k[] = $temporaria_profile_k; @endphp
                    @endif
                @endforeach
                @foreach (mb_str_split(implode('+-',$profile_em_v)) as $v)
                    @php $temporaria_profile_v[] = base64_encode(mb_ord($v)); @endphp
                    @php $contador_profile_v++; @endphp
                    @if((int)$contador_profile_v === (int)count(mb_str_split(implode('+-',$profile_em_v))))
                        @php $profile_em_v = []; @endphp
                        @php $profile_em_v[] = $temporaria_profile_v; @endphp
                    @endif
                @endforeach
            @endif
        @endforeach
        @php
            $string_profile_k_json = "";
            $string_profile_v_json = "";
        @endphp
        @foreach ($profile_em_k as $json_profile_k)
            @php $string_profile_k_json = base64_encode(implode('+-',$json_profile_k)); @endphp
        @endforeach
        @foreach ($profile_em_v as $json_profile_v)
            @php
                $string_profile_v_json = base64_encode(implode('+-',$json_profile_v));
            @endphp
        @endforeach
    @endif
    @if($Livros_Comentados)
        @php
        $chars_livros_1 = "";
        $chars_livros_2 = "";
        @endphp
        @foreach ($Livros_Comentados as $Column)
            @foreach ($Column->toArray() as $keys => $value)
                @php
                    $chars_livros_1 = $chars_livros_1.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($keys)))."§";
                    $chars_livros_2 = $chars_livros_2.implode('+-',array_map(function($dados){return base64_encode(mb_ord($dados));},mb_str_split($value)))."§";
                @endphp
            @endforeach
        @endforeach
        @php $chars_livros_1 = rtrim($chars_livros_1,"§"); $chars_livros_2 = rtrim($chars_livros_2,"§"); @endphp
        @php $chars_livros_1 = base64_encode(str_replace("=",$Alfabeto[rand(0,25)],$chars_livros_1)); $chars_livros_2 = base64_encode(str_replace("=",$Alfabeto[rand(0,25)],$chars_livros_2)); @endphp
    @endif
    </html>
    <script> 
        window.user = [
            @json($string_logout),                // [0]
            @json($string_photo),                 // [1]
            @json($string_dados),                 // [2]
            @json($json_keys_encode),             // [3]
            @json($json_values_encode),           // [4]
            @json($string_livros_keys_json),      // [5]
            @json($string_livros_values_json),    // [6]
            @json($string_profile_k_json),        // [7]
            @json($string_profile_v_json),        // [8]
            @json($chars_livros_1),               // [9]
            @json($chars_livros_2)                // [10] 
        ];
    </script>
    @endif
@endif
