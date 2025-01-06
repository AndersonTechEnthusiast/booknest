const ViewMinhasPostagensCurtidas = {};
if(window.user[3] && window.user[4])
{
    var Curtidas_Base64_Keys = [];
    var Curtidas_Number_Keys = [];
    var Curtidas_Base64_Values = [];
    var Curtidas_Number_Values = [];
    decodeURIComponent(escape(atob(window.user[3]))).split('+-').forEach(function(variavel){Curtidas_Base64_Keys.push(String.fromCharCode(decodeURIComponent(escape(atob(variavel)))));});
    Curtidas_Base64_Keys.join("").split("+-").forEach(function(variavel){Curtidas_Number_Keys.push(variavel);});
    decodeURIComponent(escape(atob(window.user[4]))).split("+-").forEach(function(variavel){Curtidas_Base64_Values.push(String.fromCharCode(decodeURIComponent(escape(atob(variavel)))));});
    Curtidas_Base64_Values.join("").split("+-").forEach(function(variavel){Curtidas_Number_Values.push(variavel);});
    // criando uma array final de chaves unicas e valores totais
    const DadosCurtidas = [];
    // verifica se a Array de Valores e a Array de Chaves é Igual
    if(Curtidas_Number_Keys.length === Curtidas_Number_Values.length)
    {
        // array temporaria de divisão
        var divisãoArrays = {};
        // array temporaria de seraparação
        var separaçãoArrays = {};
        // laço de repetição para percorrimento da array 
        for (let index = 0; index < Curtidas_Number_Keys.length; index++) {
            divisãoArrays[Curtidas_Number_Keys[index]] = Curtidas_Number_Values[index];
            // se a array tiver valores , ou chaves iguais a 7 
            if(Object.values(divisãoArrays).length === 10)
            {
                // adiciona um valor como chave e adiciona os valores a esse valor que é a nova chave
                separaçãoArrays[divisãoArrays.titulo_postagem] = divisãoArrays;
    
                // adiciona os dados na array que foi definida antes da verificação
                DadosCurtidas.push(separaçãoArrays);
    
                // zera a array para receber mais dados 
                separaçãoArrays = {};
    
                // zera a array para receber mais dados
                divisãoArrays = {};
            }
        }
    }
    // cria uma constante que alocará todos os dados 
    const MinhasPostagensCurtidas = {};
    // condicional de repetição para percorrer a array de dados criado acima
    for (let index = 0; index < DadosCurtidas.length; index++) {
        // cria uma variavel que alocará a array atual
        var Dado = DadosCurtidas[index];
        // pega a chave desse Array Atual Analisado
        var key = Object.keys(Dado)[0];
        // pega o valor desse Array Atual Analisado , referente a chave do mesmo
        var value = Dado[key];
        // verifica se na constante criada a chave é undefined (indefinida) , se for
        if(MinhasPostagensCurtidas[key] === undefined)
        {
            // dentro da constente que tem a chave , crie outra array referente a essa chave 
            MinhasPostagensCurtidas[key] = [];
        }
        // no final aloca todos os valores referete a essa chave na mesma chave
        MinhasPostagensCurtidas[key].push(value);
    }

    Object.keys(MinhasPostagensCurtidas).forEach(function(keys){
        Object.values(MinhasPostagensCurtidas[keys]).forEach(function(array){
            if(!(keys in ViewMinhasPostagensCurtidas))
            {
                ViewMinhasPostagensCurtidas[keys] = {'imagem':array.imagem_postagem , 'curtida':array.curtida , 'data': array.data};
            }
        });
    });
    
}
else
{
}
const MeusLivrosSalvos = {};
// Chaves do Livros Salvos
if(window.user[5])
{
    var TesteArrayK = [];
    var NovosDadosK = [];
    var KeysDadosLivrosSalvosK = [];
    var DadosKeysCodificadas = decodeURIComponent(escape(atob(window.user[5]))).split('+-');
    const LivrosSalvos1 = [];
    for (let index = 0; index < DadosKeysCodificadas.length; index++) {
        var atual = DadosKeysCodificadas[index];
        var array = atual.split("");
        if(/[A-Z]/.test(atual[3]))
        {
            array.pop();
            array.push("=");
        }
        array.join("");
        TesteArrayK.push(array);
    }
    TesteArrayK.forEach(function(Dados){NovosDadosK.push(Dados.join(""));});
    NovosDadosK.forEach(function(base64){KeysDadosLivrosSalvosK.push(String.fromCharCode(decodeURIComponent(escape(atob(base64)))));});
    KeysDadosLivrosSalvosK.join("").split("+-").forEach(function(dados){LivrosSalvos1.push(String.fromCharCode(decodeURIComponent(escape(atob(dados)))));});
    LivrosSalvos1.join("").split("+-");
    // Valores do Livro Salvos
    var TesteArrayV = [];
    var NovosDadosV = [];
    var ValuesDadosLivrosSalvosV = [];
    var  LivrosSalvos2 = [];
    var DadosValuesCodificadas = decodeURIComponent(escape(atob(window.user[6]))).split('+-');
    for (let index = 0; index < DadosValuesCodificadas.length; index++)
    {
        var valor = DadosValuesCodificadas[index];
        var array = valor.split("");
        if(/[A-Z]/.test(array[3]))
        {
            array.pop();
            array.push("=");
        }
        array.join("");
        TesteArrayV.push(array);
    }
    TesteArrayV.forEach(function(Dados){
        NovosDadosV.push(Dados.join(""));
    });
    var contadorLivrosSalvos = 0;
    NovosDadosV.forEach(function(Dados){
        ValuesDadosLivrosSalvosV.push(String.fromCharCode(decodeURIComponent(escape(atob(Dados)))));
        contadorLivrosSalvos++;
        if(contadorLivrosSalvos === NovosDadosV.length)
        {
            var newcontador = 0;
            // looping foreach finalizado , pois o contador é o mesmo do tamanho da array
            ValuesDadosLivrosSalvosV.join("").split("+-").forEach(function(Dados){
                LivrosSalvos2.push(String.fromCharCode(decodeURIComponent(escape(atob(Dados)))));
                newcontador++;
                if(newcontador === ValuesDadosLivrosSalvosV.join("").split("+-").length)
                {
                    var dadosprecessados = LivrosSalvos2.join("").split("+-");
                    LivrosSalvos2 = [];
                    LivrosSalvos2 = dadosprecessados;
                }
            });
        }
    });
    // testando Array
    var Teste = [];
    var elementoValues = null; 
    for (let index = 0; index < LivrosSalvos1.join("").split("+-").length; index++) 
    {
        var atual = LivrosSalvos1.join("").split("+-")[index];
        if(atual === 'id')
        {
            Teste.push(atual);
        }
    }

    var QuantidadeDeKeysBookSalvos = LivrosSalvos1.join("").split("+-").length;
    var QuantidadeDeVezesQueUmDadoSeRepeteNaArray = Math.round(Number(QuantidadeDeKeysBookSalvos/Teste.length));
    if(QuantidadeDeKeysBookSalvos === LivrosSalvos2.length)
    {
        var  Meus_Livros_Salvos_Pre = [];
        var  Meus_Livros_Salvos_Temporarios = {};
        var  Meus_Livros_Salvos_Temporarios_Valor_Chave = {};
        for (let index = 0; index < LivrosSalvos2.length; index++) {
            Meus_Livros_Salvos_Temporarios[LivrosSalvos1.join("").split("+-")[index]] = LivrosSalvos2[index];
            if(Object.keys(Meus_Livros_Salvos_Temporarios).length === QuantidadeDeVezesQueUmDadoSeRepeteNaArray)
            {
                Meus_Livros_Salvos_Temporarios_Valor_Chave[Meus_Livros_Salvos_Temporarios.titulo_da_postagem] = Meus_Livros_Salvos_Temporarios;
    
                Meus_Livros_Salvos_Pre.push(Meus_Livros_Salvos_Temporarios_Valor_Chave);
    
                Meus_Livros_Salvos_Temporarios_Valor_Chave = {};
    
                Meus_Livros_Salvos_Temporarios = {};
            }
        }
        if(Meus_Livros_Salvos_Pre)
        {
            
            for (let index = 0; index < Meus_Livros_Salvos_Pre.length; index++) {
                var atual = Meus_Livros_Salvos_Pre[index];
                var keys = Object.keys(atual)[0];
                var values = atual[keys];
    
                if(MeusLivrosSalvos[keys] === undefined)
                {
                    MeusLivrosSalvos[keys] = [];
                }
    
                MeusLivrosSalvos[keys].push(values);
            }
        }
    }
}
else
{
}
const DadosProfile = {};
if(window.user[2] && window.user[7])
{
    // dados do perfil
    let contadorProfile = 0;
    let chars = "";
    decodeURIComponent(escape(atob(window.user[2]))).split("+-").forEach(function(dados){
        chars = chars+decodeURIComponent(escape(atob(dados)))+"+-";
        contadorProfile++;
        if(contadorProfile === decodeURIComponent(escape(atob(window.user[2]))).split("+-").length)
        {
            var value = chars.split("+-");
            value.pop();
            chars = "";
            contadorProfile = 0;
            var keys = ['id','nome','e-mail','data','genero','senha'];
            if(value.length === keys.length)
            {
                for (let index = 0; index < keys.length; index++) {
                    DadosProfile[keys[index]] = value[index];
                }
            }
        }
    });
    decodeURIComponent(escape(atob(window.user[7]))).split("+-").forEach(function(dados){
        chars = chars+String.fromCharCode(decodeURIComponent(escape(atob(dados))));
        contadorProfile++;
        if(contadorProfile === decodeURIComponent(escape(atob(window.user[7]))).split("+-").length)
        {
            var keys = chars.split("+-");
            contadorProfile = 0;
            chars = "";
            decodeURIComponent(escape(atob(window.user[8]))).split("+-").forEach(function(dados){
                chars = chars+String.fromCharCode(decodeURIComponent(escape(atob(dados))));
                contadorProfile++;
                if(contadorProfile === decodeURIComponent(escape(atob(window.user[8]))).split("+-").length)
                {
                    var value = chars.split("+-");
                    contadorProfile = 0;
                    chars = "";
                    if(keys.length === value.length)
                    {
                        for (let index = 0; index < keys.length; index++) {
                            DadosProfile[keys[index]] = value[index];
                        }
                    }
                }
            });
        }
    });
}
else
{
    console.log('você não tem dados de perfil');
}
// comentarios
if(window.user[9] && window.user[10])
{
    var contadorLivrosComentados = 0;
    var arrayLivrosComentadoskeys = [];
    var arrayLivrosComentadosValues = [];
    const Meus_Comentarios = {};
    decodeURIComponent(escape(atob(window.user[9]))).split("§").forEach(function(dados){
        arrayLivrosComentadoskeys.push(dados.split("+-"));

        contadorLivrosComentados++;
        if(contadorLivrosComentados === decodeURIComponent(escape(atob(window.user[9]))).split("§").length)
        {
            contadorLivrosComentados = 0;
            var dadosarray = arrayLivrosComentadoskeys;
            arrayLivrosComentadoskeys = [];
            for (let index1 = 0; index1 < dadosarray.length; index1++) {
                var atual = dadosarray[index1];
                atual = atual.map(function(dados){
                    var string = dados;
                    if(/[A-Z]/.test(string[string.length - 1]))
                    {
                        string = string.substring(0,string.length - 1);
                        string = string + "=";
                    }
                    return String.fromCharCode(decodeURIComponent(escape(atob(string))));
                });
                arrayLivrosComentadoskeys.push(atual.join(""));
            }
        }
    });
    decodeURIComponent(escape(atob(window.user[10]))).split("§").forEach(function(dados){
        arrayLivrosComentadosValues.push(dados.split("+-"));
        contadorLivrosComentados++;
        if(contadorLivrosComentados === decodeURIComponent(escape(atob(window.user[10]))).split("§").length)
        {
            var dadosarray = arrayLivrosComentadosValues;
            arrayLivrosComentadosValues = [];
            for (let index = 0; index < dadosarray.length; index++) {
                var atual = dadosarray[index];
                atual = atual.map(function(dados){
                    var string = dados;
                    if(/[A-Z]/.test(string[string.length - 1]))
                    {
                        string = string.substring(0 , string.length - 1);
                        string = string + "=";
                    }
                    return String.fromCharCode(decodeURIComponent(escape(atob(string))));
                });
                arrayLivrosComentadosValues.push(atual.join(""));
            }
        }
    });
    if(arrayLivrosComentadoskeys.length === arrayLivrosComentadosValues.length)
    {
        var DadosRepetidos = [];
        for (let index = 0; index < arrayLivrosComentadoskeys.length; index++) {
            if(arrayLivrosComentadoskeys[index] === 'id')
            {
                DadosRepetidos.push(arrayLivrosComentadoskeys[index]);
            }
        }
        var QuantidadeDeDadosRepetidos = parseInt(DadosRepetidos.length);
        var LinhasDaColuna = parseInt(Math.round(arrayLivrosComentadoskeys.length/DadosRepetidos.length));
        var Dados = [];
        var Temp1 = {};
        var Temp2 = {};
        for (let index = 0; index < arrayLivrosComentadoskeys.length; index++) {
            Temp1[arrayLivrosComentadoskeys[index]] = arrayLivrosComentadosValues[index];
            if(Object.keys(Temp1).length === LinhasDaColuna)
            {
                Temp2[Temp1.titulo_da_postagem] = Temp1;
                Dados.push(Temp2);

                Temp1 = {};
                Temp2 = {};
            }
        }
        for (let index = 0; index < Dados.length; index++) {
            var atual = Dados[index];
            var key = Object.keys(atual)[0];
            var value = atual[key];
            if(Meus_Comentarios[key] === undefined)
            {
                Meus_Comentarios[key] = [];
            }
            Meus_Comentarios[key].push(value);
        }
    }
}
else
{
    console.log('você não possui comentarios em nenhum livro !!!');
}
$("#gear-user-config").on("click",function(event){
    event.preventDefault();
    $("body").append(
        $("<div>").attr("id","overlay").css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "width":"100%",
            "height":"100%",
            "background":"rgba(0,0,0,0.7)",
            "z-index":"11",
            "cursor":"pointer"
        }).on("click",function(){
            $(this).remove();
            $("#modal").remove();
        }),
        $("<div>").attr("id","modal").css({
            "position":"fixed",
            "top":"50%",
            "left":"50%",
            "transform":"translate(-50%,-50%)",
            "width":"80%",
            "height":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "border-radius":"10px",
            "background":"#333",
            "color":"white",
            "z-index":"12"
        }).append(
            $("<div>").attr("id","line").css({
                "width":"97%",
                "height":"97%",
                "background":"white",
                "border-radius":"10px",
                "display":"flex",
                "align-items":"center",
                "justify-content":"center",
                "flex-wrap":"nowrap",
                "flex-direction":"row"
            }).append(
                $("<div>").attr("id","index").css({
                    "width":"99%",
                    "height":"99%",
                    "background":"#333",
                    "border-radius":"10px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                }).append(
                    $("<div>").css({
                        "position":"absolute",
                        "top":"0",
                        "left":"50%",
                        "background":"#333",
                        "color":"white",
                        "transform":"translate(-50% , 0)"
                    }).attr("id","title").append(
                        $("<p>").css({"padding":"0","margin":"0"}).text("Configurações")
                    ),
                    $("<div>").attr("id","content").css({
                        "width":"100%",
                        "height":"100%"
                    }).append(
                        $("<div>").attr("id","etinerario").css({"position":"relative","width":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","height":"20px","max-width":"90%","margin":"10px auto"}).append(
                            $("<a>").addClass("elemento-links-pages-config-pop-up-etinerarios").attr("href","#").css({"width":"calc(100%/5)","height":"100%","text-decoration":"white","color":"white","text-align":"center"}).on("mouseenter",function(){$(this).css({"transition":"1s","background":"white","color":"black"})}).on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"white"})}).append($("<p>").css({"padding":"0","margin":"0"}).text("status")),
                            $("<a>").addClass("elemento-links-pages-config-pop-up-etinerarios").attr("href","#").css({"width":"calc(100%/5)","height":"100%","text-decoration":"white","color":"white","text-align":"center"}).on("mouseenter",function(){$(this).css({"transition":"1s","background":"white","color":"black"})}).on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"white"})}).append($("<p>").css({"padding":"0","margin":"0"}).text("contribuinte")),
                            $("<a>").addClass("elemento-links-pages-config-pop-up-etinerarios").attr("href","#").css({"width":"calc(100%/5)","height":"100%","text-decoration":"white","color":"white","text-align":"center"}).on("mouseenter",function(){$(this).css({"transition":"1s","background":"white","color":"black"})}).on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"white"})}).append($("<p>").css({"padding":"0","margin":"0"}).text("Livros Curtidos")),
                            $("<a>").addClass("elemento-links-pages-config-pop-up-etinerarios").attr("href","#").css({"width":"calc(100%/5)","height":"100%","text-decoration":"white","color":"white","text-align":"center"}).on("mouseenter",function(){$(this).css({"transition":"1s","background":"white","color":"black"})}).on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"white"})}).append($("<p>").css({"padding":"0","margin":"0"}).text("Livros Salvos")),
                            $("<a>").addClass("elemento-links-pages-config-pop-up-etinerarios").attr("href","#").css({"width":"calc(100%/5)","height":"100%","text-decoration":"white","color":"white","text-align":"center"}).on("mouseenter",function(){$(this).css({"transition":"1s","background":"white","color":"black"})}).on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"white"})}).append($("<p>").css({"padding":"0","margin":"0"}).text("Perfil")),
                        ),
                        $("<div>").attr("id","paginas-up").css({"position":"relative","width":"100%","height":"calc(100% - 20px)","overflow":"hidden"}).append(
                            $("<div>").addClass("elemento-pagina-popup-configuracoes").attr("id","status").css({
                                "position":"absolute",
                                "top":"0",
                                "left":"0",
                                "width":"100%",
                                "height":"100%",
                                "overflow":"visible"
                            }).append(
                                $("<span>").css({"width":"100%","height":"20px","border-bottom":"2px groove white","padding":"10px","max-width":"20%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                                    $("<p>").css({"padding":"0","margin":"0"}).text("Seus Status"),
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"})
                                ),
                                $("<div>").css({
                                    "width":"100%",
                                    "height":"100%",
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"space-between",
                                    "flex-wrap":"nowrap",
                                    "flex-direction":"row"
                                }).append(
                                    $("<div>").css({
                                        "width":"30%",
                                        "height":"calc(100% - 60px)",
                                        "display":"flex",
                                        "align-items":"center",
                                        "justify-content":"center",
                                        "flex-wrap":"nowrap",
                                        "flex-direction":"row"
                                    }).append(
                                        $("<i>").addClass("fa-solid fa-signal").attr("id","status-icone").css({
                                            "font-size":"200px",
                                            "color":"white"
                                        })
                                    ),
                                    $("<div>").css({
                                        "width":"70%",
                                        "height":"calc(100% - 60px)",
                                        "display":"flex",
                                        "align-items":"center",
                                        "justify-content":"center",
                                        "flex-wrap":"nowrap",
                                        "flex-direction":"column"
                                    }).append(
                                        $("<div>").attr("id","Livros_Curtidos"),  // Livros Curtidos
                                        $("<div>").attr("id","Livros_Salvos"),  // Livros Salvos
                                        $("<div>").attr("id","Perfil_Criado_em"),  // Perfil Criado em
                                        $("<div>").attr("id","Nivel_de_Acessos"),  // Nivel de Acessos 
                                        $("<div>").attr("id","Livros_Comentados"),  // Livros Comentados
                                        $("<div>").attr("id","Quantidade_de_Comentarios"),  // Quantidade de Comentarios
                                        $("<div>").attr("id","Conta"),  // Conta (ativa)
                                    )
                                )
                            ),
                            $("<div>").addClass("elemento-pagina-popup-configuracoes").attr("id","contribuinte").css({
                                "position":"absolute",
                                "top":"0",
                                "left":"100%",
                                "width":"100%",
                                "height":"0",
                                "overflow":"hidden"
                            }).append(
                                $("<span>").css({"width":"100%","height":"20px","border-bottom":"2px groove white","padding":"10px","max-width":"20%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                                    $("<p>").css({"padding":"0","margin":"0"}).text("Contribuinte"),
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                                ),
                                $("<div>").css({
                                    "width":"100%",
                                    "height":"calc(100% - 20px)",
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"space-between",
                                    "flex-wrap":"nowrap",
                                    "flex-direction":"row"
                                }).append(
                                    $("<div>").css({"width":"50%","height":"100%"}).append(
                                        $("<img>").attr("src","../../img/Usuario-Logado/images-Photoroom.png").css({"width":"470px"})
                                    ),
                                    $("<div>").css({"width":"50%","height":"100%","max-height":"90%","overflow-x":"hidden","overflow-y":"auto"}).append(
                                        $("<h2>").append($("<p>").text("Torne-se um Colaborador do BookNest!")),
                                        $("<h3>").append($("<p>").text("Bem-vindo à comunidade BookNest, um espaço dedicado à disseminação gratuita de conhecimento! Como colaborador, você terá a oportunidade de:")),
                                        $("<h4>").append(
                                            $("<ul>").append(
                                                $("<li>").text("Publicar conteúdos de forma intuitiva e interativa."),
                                                $("<li>").text("Ajudar a construir uma biblioteca digital diversificada e acessível."),
                                                $("<li>").text("Participar ativamente no crescimento e na gestão colaborativa da plataforma.")
                                            )
                                        ),
                                        $("<h3>").append($("<p>").text("Critérios para se tornar um colaborador:")),
                                        $("<h4>").append(
                                            $("<ul>").append(
                                                $("<li>").text("Demonstrar comprometimento com a missão do BookNest."),
                                                $("<li>").text("Manter uma conduta ética e respeitosa com a comunidade."),
                                                $("<li>").text("Seguir as diretrizes e os padrões de publicação definidos pelo administrador.")
                                            )
                                        ),
                                        $("<h3>").append($("<p>").text("Como funciona:")),
                                        $("<h4>").append(
                                            $("<ul>").append(
                                                $("<li>").text("Sua solicitação será analisada pelo administrador."),
                                                $("<li>").text("Você receberá uma resposta em até 20 dias , por e-mail ou notificação no sistema."),
                                                $("<li>").text("Após a aprovação, serão fornecidos acessos e orientações sobre suas novas responsabilidades.")
                                            )
                                        ),
                                        $("<h3>").append($("<p>").text("Pronto para contribuir com o BookNest?")),
                                        $("<h4>").append(
                                            $("<ul>").append(
                                                $("<li>").text("Clique no botão abaixo e envie sua solicitação para análise.")
                                            )
                                        ),
                                        $("<div>").append(
                                            // crie tabela para pedir para ser contribuinte 
                                            // depois verifica se ja foi enviado para não permitir o botão aparecer de novo
                                            // está apenas com localStorage
                                            $("<form>").attr("id","formulario-solicitacao-contribuinte-usuario").css({
                                                "width":"100%",
                                                "display":"flex",
                                                "align-items":"center",
                                                "justify-content":"center",
                                                "flex-wrap":"nowrap",
                                                "flex-direction":"row"
                                            }).attr("method","POST").attr("action","#").append(
                                                $("<input>").attr("id","input-solicitacao-usuario-para-contribuinte").attr("type","submit").attr("value","Solicitar Meu Passe-Contribuinte BookNest").css({"transition":"1s","width":"400px","height":"50px","border":"2px groove rgba(0,255,0)","color":"rgba(0,255,0)","background":"transparent","cursor":"pointer","border-radius":"10px","font-family":"'Montserrat',sans-serif"}).on("mouseenter",function(){$(this).css({"transition":"1s","background":"rgba(0,255,0)","border":"none","color":"black"});}).on("mouseleave",function(){$(this).css({"transition":"1s","background":"transparent","border":"2px groove rgba(0,255,0)","color":"rgba(0,255,0)"});}).on("click",()=>{
                                                
                                                    axios.post(`/solicitacao/${atob($("#IdContent").attr("content")).charCodeAt(0)}`,{
                                                        requisicao: 'solicitacao'
                                                    }).then(response => {
                                                        console.log(response.data);
                                                        if(response.data.status === 'success')
                                                        {
                                                            if(response.data.message === 'dados')
                                                            {
                                                                if($("#input-solicitacao-usuario-para-contribuinte").attr("type") === "submit")
                                                                {
                                                                    $("#input-solicitacao-usuario-para-contribuinte").css({"display":"none"});
                                                                    $("#formulario-solicitacao-contribuinte-usuario").append(
                                                                        $("<span>").append(
                                                                            $("<p>").text("Agradecemos seu interesse em ajudar a tornar o BookNest um espaço ainda mais rico para todos.")
                                                                        )
                                                                    )
                                                                }
                                                            }
                                                        }
                                                        else
                                                        if(response.data.status === 'error')
                                                        {
                                                            Swal.fire({
                                                                title: response.data.message,
                                                                icon: "error",
                                                                draggable: true
                                                            });
                                                        }
                                                    }).catch(error => {
                                                        console.log(error);
                                                        Swal.fire({
                                                            title: error.response.data,
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    });
                                                })
                                            ).on("submit",function(event){
                                                event.preventDefault();
                                            })
                                        )
                                    )
                                )
                            ),
                            $("<div>").addClass("elemento-pagina-popup-configuracoes").attr("id","LivrosCurtidos").css({
                                "position":"absolute",
                                "top":"0",
                                "left":"100%",
                                "width":"100%",
                                "height":"0",
                                "overflow":"hidden"
                            }).append(
                                $("<span>").css({"width":"100%","height":"20px","border-bottom":"2px groove white","padding":"10px","max-width":"20%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                                    $("<p>").css({"padding":"0","margin":"0"}).text("Livros Curtidos"),
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"})
                                ),
                                $("<div>").attr("id","elemento-Livros-Curtidos-Mostrar-Ao-Usuario").css({
                                    "width":"100%",
                                    "height":"calc(100% - 20px)",
                                    "overflow-x":"hidden",
                                    "overflow-y":"auto",
                                    "max-height":"calc(100% - 50px)"
                                })
                            ),
                            $("<div>").addClass("elemento-pagina-popup-configuracoes").attr("id","LivrosSalvos").css({
                                "position":"absolute",
                                "top":"0",
                                "left":"100%",
                                "width":"100%",
                                "height":"0",
                                "overflow":"hidden"
                            }).append(
                                $("<span>").css({"width":"100%","height":"20px","border-bottom":"2px groove white","padding":"10px","max-width":"20%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                                    $("<p>").css({"padding":"0","margin":"0"}).text("Livros Salvos"),
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"})
                                ),
                                $("<div>").attr("id","elemento-Livros-salvos-Mostrar-Ao-Usuario").css({
                                    "width":"100%",
                                    "height":"calc(100% - 20px)",
                                    "overflow-x":"hidden",
                                    "overflow-y":"auto",
                                    "max-height":"calc(100% - 50px)"
                                })
                            ),
                            $("<div>").addClass("elemento-pagina-popup-configuracoes").attr("id","Perfil").css({
                                "position":"absolute",
                                "top":"0",
                                "left":"100%",
                                "width":"100%",
                                "height":"0",
                                "overflow":"hidden"
                            }).append(
                                $("<span>").css({"width":"100%","height":"20px","border-bottom":"2px groove white","padding":"10px","max-width":"20%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                                    $("<p>").css({"padding":"0","margin":"0"}).text("Meu Perfil"),
                                    $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"})
                                ),
                                $("<div>").attr("id","elemento-Perfil-Mostrar-ao-usuario").css({
                                    "width":"100%",
                                    "height":"calc(100% - 20px)",
                                    "overflow-x":"hidden",
                                    "overflow-y":"auto",
                                    "max-height":"calc(100% - 50px)"
                                })
                            )
                        )
                    )
                )
            )
        )
    )
    $(".elemento-links-pages-config-pop-up-etinerarios").each(function(index , elemento){
        $(elemento).on("click",function(event){
            event.preventDefault();
            for (let StyleI= 0; StyleI < $(".elemento-pagina-popup-configuracoes").length; StyleI++) {
                $(".elemento-pagina-popup-configuracoes").eq(StyleI).css({"transition":"1s","left":"100%","height":"0","overflow":"hidden"});
            }
            $(".elemento-pagina-popup-configuracoes").eq(index).css({"transition":"1s","left":"0","height":"calc(100% - 20px)","overflow":"visible"});
            if(index === $(".elemento-pagina-popup-configuracoes").length - 1)
            {
                $(".nome-do-usuario").text().split(",")[1].split("").forEach(function(char , index){
                    var span = $("<span>").css("font-style","italic").text(char);
                    if(span.text() === ' ')
                    {
                        span.html('&nbsp');
                    }
                    span.hide();
                    setTimeout(function(){
                        $("#elemento-span-elemento-Perfil-Mostrar-ao-Usuario").append(span);
                        span.fadeIn(1000);
                    },100*index);
                });

                var contadorstring = 0;
                var subtitulo = "Ver seu Perfil Completo ?".split("").forEach(function(chars,index){
                    var p = $("<a>").attr("href","VerifyRedirectProfileFull").css({"text-decoration":"none","color":"white","font-style":"italic","font-size":"20px","cursor":"pointer"}).text(chars);
                    if(p.text() === ' ')
                    {
                        p.html('&nbsp');
                    }
                    p.hide();
                    setTimeout(function(){
                        $("#elemento-span-elemento-Perfil-Mostrar-ao-Usuario-ver-perfil").append(p);
                        p.fadeIn(1000);
                    },100*index);
                });
            }
            else
            {
                $("#elemento-span-elemento-Perfil-Mostrar-ao-Usuario").find("span").each(function(index , elemento){
                    $(elemento).remove();
                });
                $("#elemento-span-elemento-Perfil-Mostrar-ao-Usuario-ver-perfil").find("p").each(function(index , elemento){
                    $(elemento).remove();
                });
            }
        });
    });
    $("#Livros_Curtidos").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-livros-curtidos-books-nest-curtidos").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-livros-curtidos").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Seus Livros Curtidos"),
            $("<p>").text(QuantidadeDePostagens = typeof MinhasPostagensCurtidas !== 'undefined' ? Object.keys(MinhasPostagensCurtidas).length : '0'),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-thumbs-up"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-livros-curtidos").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-curtidos").remove();
                }),
                $("<div>").attr("id","modal-curtidos").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"50%",
                    "height":"50%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"white",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"white",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Seus Livros Curtidos")
                            ),
                            $("<div>").attr("id","content-livros-curtidos").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-between",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            for (let index = 0; index < Object.keys(MinhasPostagensCurtidas).length; index++) {
                $("#content-livros-curtidos").append(
                    $("<p>").text(Object.keys(MinhasPostagensCurtidas)[index])
                );
            }
        })
    )
    $("#Livros_Salvos").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-livros-salvos-books-nest-salvos").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-livros-salvos").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Seus Livros Salvos"),
            $("<p>").text(QuantidadeDeLivrosSalvos = typeof MeusLivrosSalvos !== 'undefined' ? Object.keys(MeusLivrosSalvos).length : '0'),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-bookmark"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-livros-salvos").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-salvos").remove();
                }),
                $("<div>").attr("id","modal-salvos").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"50%",
                    "height":"50%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line-salvos").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"white",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index-salvos").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"white",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Seus Livros Salvos")
                            ),
                            $("<div>").attr("id","content-livros-salvos").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-between",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            for (let index = 0; index < Object.keys(MeusLivrosSalvos).length; index++) {
                $("#content-livros-salvos").append(
                    $("<p>").text(Object.keys(MeusLivrosSalvos)[index])
                );
            }
        })
    )
    $("#Perfil_Criado_em").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-dados-perfil-books-nest-perfil").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-perfil-dados").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Seus Dados de Perfil"),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-user"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-perfil-dados").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-perfil").remove();
                }),
                $("<div>").attr("id","modal-perfil").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"50%",
                    "height":"50%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line-perfil").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"white",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index-perfil").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"white",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Seus Dados de Perfil")
                            ),
                            $("<div>").attr("id","content-perfil").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-between",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            for (let index = 0; index < Object.keys(DadosProfile).length; index++) {
                $("#content-perfil").append(
                    $("<fieldset>").addClass("elemento-fieldset-pop-up-profile").attr("id",Object.keys(DadosProfile)[index]).css({
                        "margin":"20px",
                        "width":"400px",
                        "border-radius":"20px",
                        "text-align":"center",
                        "max-width":"90%",
                    }).append(
                        $("<legend>").text(
                            Object.keys(DadosProfile)[index].replace(/[_]/g,' ')
                        ),
                        $("<p>").css({"padding":"0","margin":"0"}).text(Object.values(DadosProfile)[index])
                    )
                );
            }
            $(".elemento-fieldset-pop-up-profile").each(function(index , elemento){
                if($(elemento).attr("id") === "senha" || $(elemento).attr("id") === "id")
                {
                    $(elemento).remove();
                }
            })
        })
    )
    $("#Nivel_de_Acessos").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-dados-nivel-de-acessos-books-nest-nivel-de-acessos").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-nivel-de-acessos-dados").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Seus Dados de nivel-de-acessos"),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-user-tie"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-nivel-de-acessos-dados").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-nivel-de-acessos").remove();
                }),
                $("<div>").attr("id","modal-nivel-de-acessos").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"50%",
                    "height":"50%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line-nivel-de-acessos").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"white",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index-nivel-de-acessos").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"white",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Seus Dados de nivel-de-acessos")
                            ),
                            $("<div>").attr("id","content-nivel-de-acessos").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-evenly",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            $("#content-nivel-de-acessos").append(
                $("<p>").css({"margin":"0","padding":"0"}).text("Nivel de Acessos: Usuario"),
                $("<p>").css({"margin":"0","padding":"0"}).text("Para ser Contribuinte do Book-Nest , é necessario pedir uma autorização"),
                $("<p>").css({"margin":"0","padding":"0"}).html("<p>Para mais informações , vá até a sessão <b>'Contribuinte'</b> das <b>'Configurações'</b> !!</p>")
            );
        })
    )
    $("#Livros_Comentados").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-dados-livros-comentados-books-nest-livros-comentados").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-livros-comentados-dados").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Livros Comentados no BookNest"),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-comment"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-livros-comentados-dados").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-livros-comentados").remove();
                }),
                $("<div>").attr("id","modal-livros-comentados").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"50%",
                    "height":"50%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line-livros-comentados").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"white",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index-livros-comentados").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"white",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Seus Dados de livros-comentados")
                            ),
                            $("<div>").attr("id","content-livros-comentados").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-evenly",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            Object.keys(Meus_Comentarios).forEach(function(comentarios){
                Object.values(Meus_Comentarios[comentarios]).forEach(function(Dados){
                    $("#content-livros-comentados").append(
                        $("<span>").css({"width":"500px","margin":"20px","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column"}).append($("<p>").css({"width":"500px","padding":"0","text-align":"center","white-space":"nowrap","margin":"0"}).attr("id","elemento-comentario-comentado-na-postagem-completo").text(Dados.comentario),$("<p>").attr("id","elemento-titulo-da-postagem-comentarios").css({"width":"500px","font-size":"10px","padding":"0","text-align":"center","margin":"0"}).text("Postagem: "+comentarios))
                    );
                });
            });
            $("#elemento-comentario-comentado-na-postagem-completo").each(function(index , elemento){
                if($(elemento).get(0).offsetWidth < $(elemento).get(0).scrollWidth)
                {
                    // pixels X letras 
                    // scrollWidth (pixels) => text().length (letras)
                    // offsetWidth (pixels) => X (letras) (?)
                    var textoTotal = $(elemento).text();
                    var pixelsTotal = $(elemento).get(0).scrollWidth;
                    var LetrasTotal = $(elemento).text().length;
                    var pixelsConte = $(elemento).get(0).offsetWidth;
                    var X = parseInt(Math.round((pixelsConte * LetrasTotal)/pixelsTotal));
                    var LetrasParaTirar = parseInt(Math.round(LetrasTotal - X));
                    $(elemento).css("cursor","pointer");
                    $(elemento).text($(elemento).text().slice(0, -(LetrasParaTirar + 3))+"...");
                    $(elemento).on("click",function(){
                        $("body").append(
                            $("<div>").attr("id","overlay-ver-comentario-completo-dados").css({
                                "position":"fixed",
                                "top":"0",
                                "left":"0",
                                "width":"100%",
                                "height":"100%",
                                "background":"rgba(0,0,0,0.7)",
                                "cursor":"pointer",
                                "z-index":"14"
                            }).on("click",function(){
                                $(this).remove();
                                $("#modal-ver-comentario-completo").remove();
                            }),
                            $("<div>").attr("id","modal-ver-comentario-completo").css({
                                "position":"fixed",
                                "top":"50%",
                                "left":"50%",
                                "width":"50%",
                                "height":"50%",
                                "transform":"translate(-50% , -50%)",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"center",
                                "flex-wrap":"nowrap",
                                "flex-direction":"row",
                                "z-index":"15",
                                "background":"white",
                                "border-radius":"10px",
                                "background":"#333"
                            }).append(
                                $("<div>").attr("id","line-ver-comentario-completo").css({
                                    "width":"95%",
                                    "height":"95%",
                                    "background":"white",
                                    "border-radius":"10px",
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"center",
                                    "flex-wrap":"nowrap",
                                    "flex-direction":"row"
                                }).append(
                                    $("<div>").attr("id","index-ver-comentario-completo").css({
                                        "position":"relative",
                                        "top":"0",
                                        "left":"0",
                                        "width":"95%",
                                        "height":"95%",
                                        "background":"#333",
                                        "border-radius":"10px",
                                        "display":"flex",
                                        "align-items":"center",
                                        "justify-content":"center",
                                        "flex-wrap":"nowrap",
                                        "flex-direction":"row"
                                    }).append(
                                        $("<div>").css({
                                            "position":"absolute",
                                            "top":"-12px",
                                            "left":"50%",
                                            "color":"white",
                                            "background":"#333",
                                            "transform":"translate(-50% , 0)"
                                        }).append(
                                            $("<p>").css({
                                                "white-space":"nowrap",
                                                "padding":"0",
                                                "margin":"0"
                                            }).text("Seu Comentario na "+$(this).closest("span").find("#elemento-titulo-da-postagem-comentarios").text())
                                        ),
                                        $("<div>").attr("id","content-ver-comentario-completo").css({
                                            "width":"100%",
                                            "height":"100%",
                                            "max-height":"100%",
                                            "background":"transparent",
                                            "display":"flex",
                                            "align-items":"center",
                                            "justify-content":"center",
                                            "flex-wrap":"nowrap",
                                            "flex-direction":"column",
                                            "overflow-x":"hidden",
                                            "overflow-y":"auto"
                                        }).text(textoTotal)
                                    )
                                )
                            )
                        )
                    });
                }
            });
        })
    )
    $("#Quantidade_de_Comentarios").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-dados-quantidade-de-comentarios-books-nest-quantidade-de-comentarios").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-quantidade-de-comentarios-dados").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Quantidade de Livros Comentados"),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-comment"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-quantidade-de-comentarios-dados").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-quantidade-de-comentarios").remove();
                }),
                $("<div>").attr("id","modal-quantidade-de-comentarios").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"40%",
                    "height":"40%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line-quantidade-de-comentarios").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"white",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index-quantidade-de-comentarios").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"white",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Quantidade seus Comentarios")
                            ),
                            $("<div>").attr("id","content-quantidade-de-comentarios").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-evenly",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            var contadorQuantidadeDeComentarios = 0;
            Object.keys(Meus_Comentarios).forEach(function(keys){
                Object.values(Meus_Comentarios[keys]).forEach(function(values){
                    if(values.comentario)
                    {
                        contadorQuantidadeDeComentarios++;
                    }
                });
            });
            $("#content-quantidade-de-comentarios").append(
                $("<p>").text(contadorQuantidadeDeComentarios+" Comentarios")
            );
        })
    )
    $("#Conta").css({
        "width":"100%",
        "max-width":"70%",
        "height":"50px",
        "margin":"0 auto"
    }).append(
        $("<div>").on("mouseenter",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"2px 5px 0px 0px white"
            });
        }).on("mouseleave",function(){
            $(this).css({
                "transition":"1s",
                "box-shadow":"none"
            });
        }).attr("id","elemento-dados-conta-do-usuario-books-nest-conta-do-usuario").css({
            "width":"100%",
            "height":"50px",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "cursor":"pointer",
            "transition":"1s"
        }).append(
            $("<i>").addClass("fa-solid fa-book").attr("id","elemento-icones-conta-do-usuario-dados").css({"font-size":"20px","color":"white"}),
            $("<p>").text("Sua Conta"),
            $("<i>").css({"font-size":"20px","color":"white"}).addClass("fa-solid fa-trash"),

        ).on("click",function(){
            $("body").append(
                $("<div>").attr("id","overlay-conta-do-usuario-dados").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "cursor":"pointer",
                    "z-index":"13"
                }).on("click",function(){
                    $(this).remove();
                    $("#modal-conta-do-usuario").remove();
                }),
                $("<div>").attr("id","modal-conta-do-usuario").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"40%",
                    "height":"40%",
                    "transform":"translate(-50% , -50%)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "z-index":"14",
                    "background":"white",
                    "border-radius":"10px",
                    "background":"#333"
                }).append(
                    $("<div>").attr("id","line-conta-do-usuario").css({
                        "width":"95%",
                        "height":"95%",
                        "background":"red",
                        "border-radius":"10px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","index-conta-do-usuario").css({
                            "position":"relative",
                            "top":"0",
                            "left":"0",
                            "width":"95%",
                            "height":"95%",
                            "background":"#333",
                            "border-radius":"10px",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"row"
                        }).append(
                            $("<div>").css({
                                "position":"absolute",
                                "top":"-12px",
                                "left":"50%",
                                "color":"red",
                                "background":"#333",
                                "transform":"translate(-50% , 0)"
                            }).append(
                                $("<p>").css({
                                    "padding":"0",
                                    "margin":"0"
                                }).text("Sua Conta")
                            ),
                            $("<div>").attr("id","content-conta-do-usuario").css({
                                "width":"100%",
                                "height":"100%",
                                "max-height":"100%",
                                "background":"transparent",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-evenly",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "overflow-x":"hidden",
                                "overflow-y":"auto"
                            })
                        )
                    )
                )
            );
            $("#content-conta-do-usuario").append(
                $("<div>").append(
                    $("<form>").attr("method","POST").attr("action","#").append(
                        $("<input>").attr("type","submit").attr("value","Excluir Minha Conta !!").css({
                            "width":"300px",
                            "height":"50px",
                            "border":"2px groove red",
                            "border-radius":"20px",
                            "background":"transparent",
                            "font-family":"'Montserrat',sans-serif",
                            "color":"red",
                            "cursor":"pointer"
                        }).on("mouseenter",function(){
                            $(this).css({"transition":"1s","border":"none","background":"red","color":"white"});
                        }).on("mouseleave",function(){
                            $(this).css({"transition":"1s","border":"2px groove red","background":"#333","color":"red"});
                        })
                        // caso queira pode tirar isso daqui e redireciona-ló para uma pagina de exclusão de conta
                    ).on("submit",function(event){
                        event.preventDefault();  
                    })
                )
            )
        })
    )
    if(ViewMinhasPostagensCurtidas.length === 0)
    {
        Object.keys(ViewMinhasPostagensCurtidas).forEach(function(keys){
            var Livros = $("<div>").css({
                "width":"100%",
                "height":"200px",
                "display":"flex",
                "align-items":"center",
                "justify-content":"space-between",
                "flex-wrap":"nowrap",
                "flex-direction":"row",
                "margin":"20px auto"
            });
            var titulo = $("<div>").css({"width":"100%","height":"66.70px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append($("<p>").text(keys));
            var imagem = $("<div>").css({"width":"100%","height":"100%"}).append($("<img>").css({"width":"100%","height":"100%"}).attr("src","../../../publicacao/"+ViewMinhasPostagensCurtidas[keys].imagem));
            var curtida = $("<div>").css({"width":"100%","height":"66.70px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append($("<p>").text("Você curtiu: "+ViewMinhasPostagensCurtidas[keys].curtida));
            var data = $("<div>").css({"width":"100%","height":"66.70px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append($("<p>").text("em: "+ViewMinhasPostagensCurtidas[keys].data));
            var parte1 = $("<div>").css({"width":"40%","height":"100%"}).append(imagem);
            var parte2 = $("<div>").css({"width":"60%","height":"100%"}).append(titulo,curtida,data);
            Livros.append(parte1,parte2);
            $("#elemento-Livros-Curtidos-Mostrar-Ao-Usuario").append(Livros);
        });
    }
    else
    {
        var Livros = $("<div>").css({
            "position":"relative",
            "top":"0",
            "left":"0",
            "width":"100%",
            "height":"100%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-between",
            "flex-wrap":"nowrap",
            "flex-direction":"row"
        });
        var texto = $("<div>").css({"position":"absolute","top":"30%","left":"50%","width":"100%","text-align":"center","transform":"translate(-50% , -50%)","font-size":"50px","font-family":"'Teko',sans-serif","font-style":"italic"}).append($("<p>").text("Você Ainda Não Curtiu Nenhum Livro !!!"));
        var imagem = $("<div>").css({"width":"100%","height":"100%"}).append($("<img>").css({"width":"100%","height":"100%"}).attr("src","../../../img/Usuario-Logado/ilustracao-de-mesas-de-cafe-de-madeira-minimalistas_1308-166094-Photoroom.png"));
        var parte1 = $("<div>").css({"width":"100%","height":"100%"}).append(texto,imagem);
        Livros.append(parte1);
        $("#elemento-Livros-Curtidos-Mostrar-Ao-Usuario").append(Livros);
    }
   
    if(MeusLivrosSalvos.length === 0)
    {
        Object.keys(MeusLivrosSalvos).forEach(function(keys){
            var ContainerHouver = $("<div>").css({
                "width":"100%",
                "max-width":"90%",
                "height":"500px",
                "border-radius":"20px",
                "display":"flex",
                "align-items":"center",
                "justify-content":"space-evenly",
                "flex-wrap":"nowrap",
                "flex-direction":"column",
                "margin":"20px auto"
            });
            Object.values(MeusLivrosSalvos[keys]).forEach(function(array){
                var imagem = $("<img>").css({"width":"100%","height":"400px"}).attr("src","../../../img/Usuario-Logado/ilustracao-de-mesas-de-cafe-de-madeira-minimalistas_1308-166094-Photoroom.png");
                var titulo = $("<p>").text(array.titulo_da_postagem);
                var data = $("<p>").text(array.data);
                ContainerHouver.append(imagem)
                ContainerHouver.append(titulo)
                ContainerHouver.append(data);
            });
            $("#elemento-Livros-salvos-Mostrar-Ao-Usuario").append(ContainerHouver);
        });
    }
    else
    {
        var ContainerHouver = $("<div>").css({
            "position":"relative",
            "top":"0",
            "left":"0",
            "width":"100%",
            "max-width":"90%",
            "height":"500px",
            "border-radius":"20px",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"column",
            "margin":"20px auto"
        });
        var imagem = $("<img>").css({"width":"100%","height":"400px"}).attr("src","../../../img/Usuario-Logado/ilustracao-de-mesas-de-cafe-de-madeira-minimalistas_1308-166094-Photoroom.png");
        var texto = $("<div>").css({"position":"absolute","top":"30%","left":"50%","width":"100%","text-align":"center","transform":"translate(-50% , -50%)","font-size":"50px","font-family":"'Teko',sans-serif","font-style":"italic"}).append($("<p>").text("Você Ainda Não Salvou Nenhum Livro !!!"));
        ContainerHouver.append(texto,imagem);
        $("#elemento-Livros-salvos-Mostrar-Ao-Usuario").append(ContainerHouver);
    }
    $("#elemento-Perfil-Mostrar-ao-usuario").append(
        $("<div>").css({
            "width":"100%",
            "height":"calc(100% - 50px)",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-between",
            "flex-wrap":"nowrap",
            "flex-direction":"row"
        }).append(
            $("<img>").css({
                "width":"400px",
                "height":"400px",
                "border-radius":"50%"
            }).attr("src",$("#Perfil-link").find("label").find("#Imagem").attr("src")),
            $("<div>").css({
                "display":"flex",
                "align-items":"center",
                "justify-content":"center",
                "flex-wrap":"nowrap",
                "flex-direction":"column"
            }).append(
                $("<span>").attr("id","elemento-span-elemento-Perfil-Mostrar-ao-Usuario").css({
                    "position":"relative",
                    "top":"0",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "font-family":"'Teko',sans-serif",
                    "text-transform":"uppercase",
                    "font-size":"50px",
                    'font-style':'italic',
                }),
                $("<span>").attr("id","elemento-span-elemento-Perfil-Mostrar-ao-Usuario-ver-perfil").css({
                    "position":"relative",
                    "top":"0",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "font-family":"'Teko',sans-serif",
                    "text-transform":"uppercase",
                    "font-size":"50px",
                    'font-style':'italic',
                }),
            )
        )
    );
    
});
$(document).on("click","#gear-user-config",()=>{
    axios.post(`/solicitacao/${atob($("#IdContent").attr("content")).charCodeAt(0)}`,{
        requisicao: 'minha_solicitacao'
    }).then(response => {
        console.log(response.data);
        if(response.data.status === 'error')
        {
            if(response.data.message === null)
            {
                $("#input-solicitacao-usuario-para-contribuinte").css({"display":"block"});
            }
        }
        else
        if(response.data.status === 'success')
        {
            if($("#input-solicitacao-usuario-para-contribuinte").attr("type") === "submit")
            {
                $("#input-solicitacao-usuario-para-contribuinte").css({"display":"none"});
                $("#formulario-solicitacao-contribuinte-usuario").append(
                    $("<span>").append(
                        $("<p>").text("Agradecemos seu interesse em ajudar a tornar o BookNest um espaço ainda mais rico para todos.")
                    )
                )
            }
        }
    }).catch(error => {
        console.log(error);
    }); 
});