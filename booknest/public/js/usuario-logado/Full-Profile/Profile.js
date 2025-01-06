// scroll reveal , todos os elementos que tiverem essa classe aqui: "scroll_reveal" é porque foi afetado pelo scrollReveal
$("<head>").append("<link rel='stylesheet' href='https://fonts.cdnfonts.com/css/stencilla'");
$("<head>").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'");
$("<head>").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Timmana&display=swap'");
$("<head>").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Teko:wght@300..700&family=Timmana&display=swap'");
$("<head>").append(
    $("<style>").html(".scroll_reveal{visibility: hidden;}")
);
// etinerario do Usuario
$("body").append(
    // mudar foto de Perfil 
    $("<form>").css("margin","20px auto").addClass("scroll_reveal").attr("method","POST").attr("action","Profile-Photo/"+atob(window.user[0]).charCodeAt(0)).append(
        $("<input>").attr("type","hidden").attr("name","_token").attr("value",atob(window.user[1])),
        $("<div>").css({
            "width":"100%",
            "max-width":"90%",
            "height":"100%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-between",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "border-radius":"10px",
            "padding":"10px",
            "border-right":"3px groove white",
            "border-bottom":"5px groove white",
            "margin":"0 auto"
        }).append(
            $("<label>").css({"width":"30%","height":"100%","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).attr("for","input-foto").append(
                $("<img>").attr("id","imagem-de-perfil-do-usuario-profile-complete").css({
                    "width":"340px",
                    "height":"340px",
                    "border-radius":"50%",
                    "border":"2px dashed white",
                    "cursor":"pointer"
                })
            ),
            $("<div>").css({"width":"50%","height":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column"}).append(
                $("<span>").addClass("Nome-do-Usuario-Animated").attr("id","Nome-do-Usuario-Animated").css({"width":"100%","height":"calc(100%/4)","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}),
                $("<span>").addClass("Barra-do-Usuario-Animated").attr("id","Barra-do-Usuario-Animated").css({"width":"100%","height":"calc(100%/4)","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}),
                $("<span>").addClass("Classificacao-do-Usuario").attr("id","Classificacao-do-Usuario").css({"width":"100%","height":"calc(100%/4)","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}),
                $("<span>").addClass("container-dados-criação").attr("id","container-dados-criação").css({"width":"100%","height":"calc(100%/4)","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append(
                    $("<span>").addClass("Data-de-Criação-do-Usuario").attr("id","Data-de-Criação-do-Usuario").css({"width":"50%","height":"100%","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}),
                    $("<span>").addClass("Hora-de-Criação-do-Usuario").attr("id","Hora-de-Criação-do-Usuario").css({"width":"50%","height":"100%","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"})
                )
            )
        ),
        $("<input>").attr("type","file").attr("name","foto").css("display","none").attr("id","input-foto"),
    ).on("submit",function(event){
        event.preventDefault();
    }),
    $("<form>").css("margin","20px auto").addClass('scroll_reveal').append(
        $("<div>").css({"width":"100%","max-width":"30%","border-right":"2px groove white","border-bottom":"5px groove white","border-radius":"10px","margin":"20px 0","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
            $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png"),
            $("<span>").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic"}).text("Seus Dados Cadastrados"),
            $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png")
        ),
        $("<div>").css({"width":"100%","max-width":"90%","height":"200px","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column","margin":"15px auto"}).append(
            $("<div>").addClass("elemento-container-dados-do-usuario").css({"display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column","width":"100%","max-width":"90%","height":"30px","margin":"0 auto"}).append(
                $("<div>").css({"position":"relative","top":"0","left":"0","width":"100%","height":"20px","display":"flex","align-items":"center","justify-content":"flex-start","flex-wrap":"nowrap","flex-direction":"row","position":"relative","top":"0","left":"0"}).addClass("elemento-etinerario-usuario-seus-dados").attr("id","elemento-id-etinerario-Seus-Dados-Nome").append(
                    $("<div>").attr("id","Etinerario-Nome"),
                    $("<div>").css({"position":"absolute","top":"0","left":"80%"}).addClass("submit").append($("<label>").attr("for","elemento-input-submit-Nome").html('<i class="fa-solid fa-paper-plane"></i>').css({"transition":"1s","opacity":"0","cursor":"pointer"}),$("<input>").attr("id","elemento-input-submit-Nome").attr("type","submit").on("submit",function(event){event.preventDefault();}).css("display","none")),
                    $("<input>").attr("type","text").attr("id","Nome-do-usuario").css({"background":"transparent","font-family":"'Teko',sans-serif","font-size":"30px","font-style":"italic","border":"none","color":"white","outline":"none","text-transform":"capitalize","width":"80%","max-width":"80%","overflow-y":"hidden","overflow-x":"auto"})
                ),
                $("<div>").addClass("elemento-barra-underline").css({
                    "width":"0",
                    "height":"2px",
                    "background":"white",
                    "border-radius":"10px",
                    "transition":"1s"
                }),
            ),
            $("<div>").addClass("elemento-container-dados-do-usuario").css({"display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column","width":"100%","max-width":"90%","height":"30px","margin":"0 auto"}).append(
                $("<div>").css({"position":"relative","top":"0","left":"0","width":"100%","height":"20px","display":"flex","align-items":"center","justify-content":"flex-start","flex-wrap":"nowrap","flex-direction":"row","position":"relative","top":"0","left":"0"}).addClass("elemento-etinerario-usuario-seus-dados").attr("id","elemento-id-etinerario-Seus-Dados-Email").append(
                    $("<div>").attr("id","Etinerario-email"),
                    $("<div>").css({"position":"absolute","top":"0","left":"80%"}).addClass("submit").append($("<label>").attr("for","elemento-input-submit-Email").html('<i class="fa-solid fa-paper-plane"></i>').css({"transition":"1s","opacity":"0","cursor":"pointer"}),$("<input>").attr("id","elemento-input-submit-Email").attr("type","submit").on("submit",function(event){event.preventDefault();}).css("display","none")),
                    $("<input>").attr("type","email").attr("id","Email-do-usuario").css({"background":"transparent","font-family":"'Teko',sans-serif","font-size":"30px","font-style":"italic","color":"white","border":"none","outline":"none","width":"80%","max-width":"80%","overflow-y":"hidden","overflow-x":"auto"}).prop("contenteditable",true)
                ),
                $("<div>").addClass("elemento-barra-underline").css({
                    "width":"0",
                    "height":"2px",
                    "background":"white",
                    "border-radius":"10px",
                    "transition":"1s"
                }),
            ),
            $("<div>").addClass("elemento-container-dados-do-usuario").css({"display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column","width":"100%","max-width":"90%","height":"30px","margin":"0 auto"}).append(
                $("<div>").css({"position":"relative","top":"0","left":"0","width":"100%","height":"20px","display":"flex","align-items":"center","justify-content":"flex-start","flex-wrap":"nowrap","flex-direction":"row","position":"relative","top":"0","left":"0"}).addClass("elemento-etinerario-usuario-seus-dados").attr("id","elemento-id-etinerario-Seus-Dados-Data").append(
                    $("<div>").attr("id","Etinerario-Data"),
                    $("<div>").css({"position":"absolute","top":"0","left":"80%"}).addClass("submit").append($("<label>").attr("for","elemento-input-submit-Data").html('<i class="fa-solid fa-paper-plane"></i>').css({"transition":"1s","opacity":"0","cursor":"pointer"}),$("<input>").attr("id","elemento-input-submit-Data").attr("type","submit").on("submit",function(event){event.preventDefault();}).css("display","none")),
                    $("<input>").attr("type","text").attr("id","Data-do-usuario").css({"background":"transparent","font-family":"'Teko',sans-serif","font-size":"30px","font-style":"italic","outline":"none","border":"none","color":"white","width":"80%","max-width":"80%","overflow-y":"hidden","overflow-x":"auto"}).prop("contenteditable",true)
                ),
                $("<div>").addClass("elemento-barra-underline").css({
                    "width":"0",
                    "height":"2px",
                    "background":"white",
                    "border-radius":"10px",
                    "transition":"1s"
                }),
            ),
            $("<div>").addClass("elemento-container-dados-do-usuario").css({"display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column","width":"100%","max-width":"90%","height":"30px","margin":"0 auto"}).append(
                $("<div>").css({"position":"relative","top":"0","left":"0","width":"100%","height":"20px","display":"flex","align-items":"center","justify-content":"flex-start","flex-wrap":"nowrap","flex-direction":"row","position":"relative","top":"0","left":"0"}).addClass("elemento-etinerario-usuario-seus-dados").attr("id","elemento-id-etinerario-Seus-Dados-Genero").append(
                    $("<div>").attr("id","Etinerario-Genero"),
                    $("<div>").css({"position":"absolute","top":"0","left":"80%"}).addClass("submit").append($("<label>").attr("for","elemento-input-submit-Genero").html('<i class="fa-solid fa-paper-plane"></i>').css({"transition":"1s","opacity":"0","cursor":"pointer"}),$("<input>").attr("id","elemento-input-submit-Genero").attr("type","submit").on("submit",function(event){event.preventDefault();}).css("display","none")),
                    $("<input>").attr("type","text").attr("list","elemento-generos").attr("id","Genero-do-usuario").css({"background":"transparent","font-family":"'Teko',sans-serif","font-size":"30px","font-style":"italic","border":"none","color":"white","outline":"none","text-transform":"capitalize","width":"80%","max-width":"80%","overflow-y":"hidden","overflow-x":"auto"}).prop("contenteditable",true),
                    $("<datalist>").attr("id","elemento-generos").append(
                        $("<option>").attr("value","Ficção").text("Ficção"),
                        $("<option>").attr("value","Não-Ficção").text("Não-Ficção"),
                        $("<option>").attr("value","Poesia").text("Poesia"),
                        $("<option>").attr("value","Drama").text("Drama"),
                        $("<option>").attr("value","Conto").text("Conto"),
                        $("<option>").attr("value","Infantojuvenil").text("Infantojuvenil"),
                        $("<option>").attr("value","Novela Gráfica").text("Novela Gráfica"),
                        $("<option>").attr("value","Humor").text("Humor"),
                        $("<option>").attr("value","Guias de Viagem").text("Guias de Viagem"),
                        $("<option>").attr("value","Ensaios").text("Ensaios")
                    )
                ),
                $("<div>").addClass("elemento-barra-underline").css({
                    "width":"0",
                    "height":"2px",
                    "background":"white",
                    "border-radius":"10px",
                    "transition":"1s"
                }),
            )
        )
    ).on("submit",function(event){
        event.preventDefault();
    }),
    $("<div>").addClass('scroll_reveal').css({"width":"100%","max-width":"30%","border-right":"2px groove white","border-bottom":"5px groove white","border-radius":"10px","margin":"20px 0","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
        $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png"),
        $("<span>").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic"}).text("Seus Livros Curtidos"),
        $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png")
    ),
    $("<div>").addClass("scroll_reveal").css({"width":"100%","max-width":"90%","margin":"0 auto"}).append(
        $("<marquee>").attr("behavior","alternate").attr("smothamouth","5").css({"width":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","max-width":"100%","min-width":"100%","overflow-x":"hidden","overflow-y":"hidden","margin":"0 auto"}).attr("id","elemento-overflow-livros-curtidos").addClass("elemento-livros-curtidos")
    ),
    $("<div>").addClass('scroll_reveal').css({"width":"100%","max-width":"30%","border-right":"2px groove white","border-bottom":"5px groove white","border-radius":"10px","margin":"20px 0","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
        $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png"),
        $("<span>").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic"}).text("Meus Livros Salvos"),
        $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png")
    ),
    $("<div>").addClass("scroll_reveal").css({"width":"100%","max-width":"90%","margin":"0 auto"}).attr("id","elemento-Meus-Livros-Salvos").append($("<marquee>").attr("behavior","alternate").attr("smouthamouth","5").attr("id","elemento-scrolling-horizontal").css({"width":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","max-width":"100%","min-width":"100%","overflow-x":"hidden","overflow-y":"hidden","margin":"0 auto"})),
    $("<div>").addClass('scroll_reveal').css({"width":"100%","max-width":"30%","border-right":"2px groove white","border-bottom":"5px groove white","border-radius":"10px","margin":"20px 0","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).append(
        $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png"),
        $("<span>").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic"}).text("Meus Comentarios"),
        $("<img>").css({"width":"40px","height":"40px"}).attr("src","../../../img/welcome/Logo.png")
    ),
    $("<div>").addClass("scroll_reveal").css({"width":"100%","max-width":"90%","margin":"0 auto"}).attr("id","elemento-Meus-Comentarios").append($("<marquee>").attr("behavior","alternate").attr("smouthamout","5").attr("id","elemento-column-comentarios").css({"width":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","max-width":"100%","min-width":"100%","overflow-x":"hidden","overflow-y":"hidden","margin":"0 auto"}))
);
// verifica se o pathname (campo da foto do usuario) está vazio
if(atob(window.user[3]) === '')
{
    // se estiver adicione a foto default
   $("#imagem-de-perfil-do-usuario-profile-complete").attr("src","../../../img/Usuario-Logado/Foto-default.webp");
}
else
if(atob(window.user[3]) !== null)
{
    // se não adicione o valor que esta no pathname
    $("#imagem-de-perfil-do-usuario-profile-complete").attr("src","../../../imagens-de-perfil-de-usuarios/"+atob(window.user[3]));
}

// evento na ativação do botão foto (Photo Preview)
$("#input-foto").on("change",function(event){
    // event.target.files[0].name -> pega o nome do arquivo
    var extension = event.target.files[0].name.split(".")[event.target.files[0].name.split(".").length - 1];
    var extensions = ['jpg','png','avif','webp'];
    if(extensions.includes(extension))
    {
        $("#imagem-de-perfil-do-usuario-profile-complete").attr("src", URL.createObjectURL(event.target.files[0]));
        if(event.target.files[0])
        {
            // cria um objeto para armazenar o dado e o token
            let formData = new FormData();
            formData.append('foto',event.target.files[0]);
            formData.append('_token',atob(window.user[1]));
            $.ajax({
                // url (para onde enviar os dados)
                url: "/EditarFotoPerfilProfile/"+atob(window.user[0]).charCodeAt(0),
                // type (tipo de envio (GET ou POST))
                type: "POST",
                // Não deixe o jQuery tentar processar o FormData
                processData: false,  
                 // Não defina o tipo de conteúdo, o FormData já cuida disso
                contentType: false, 
                // data (dados)
                data: formData,
                // pega o response
                success: function(response)
                {
                    if(response.status === 'sucess')
                    {
                        $("body").append(
                            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                                $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                                $("<div>").append(
                                    $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                                )
                            ),
                        );
                        setTimeout(function(){
                            $("#modal-response-json").css({"top":"50%","opacity":"1"});
                        }, 500)
                        $("#overley-json-response").on("click",function(){
                            $(this).remove();
                            $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                            setTimeout(function(){
                                $("#modal-response-json").remove();
                            }, 500);
                        });
                    }
                    else
                    if(response.status === 'error')
                    {
                        $("body").append(
                            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                                $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                                $("<div>").append(
                                    $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                                )
                            ),
                        );
                        setTimeout(function(){
                            $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                        },500)
                        $("#overley-json-response").on("click",function(){
                            $(this).remove();
                            $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                            setTimeout(function(){
                                $("#modal-response-json").remove();
                            }, 500);
                        });
                    }
                },
                error: function(error)
                {
                    $("body").append(
                        $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                        $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                            $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                            $("<div>").append(
                                $("<span>").text(error.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                            )
                        ),
                    );
                    setTimeout(function(){
                        $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                    }, 500)
                    $("#overley-json-response").on("click",function(){
                        $(this).remove();
                        $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                        setTimeout(function(){
                            $("#modal-response-json").remove();
                        }, 500);
                    });
                }
            })
        }
    }
    else
    if(!extensions.includes(extension))
    {
        $("body").append(
            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                $("<div>").append(
                    $("<span>").text("A Extensão não é Permitida ").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                )
            ),
        );
        setTimeout(function(){
            $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
        }, 500)
        $("#overley-json-response").on("click",function(){
            $(this).remove();
            $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
            setTimeout(function(){
                $("#modal-response-json").remove();
            }, 500);
        });
    }
});
// container inicial
const MeusDadosLogado = {};
let keysMeusDadosLogado = "";
let valuesMeusDadosLogado = "";
Object.keys(window.user[4]).forEach(function(dados){
    if(/[A-Z]/.test(dados[dados.length - 1]))
    {
        dados = dados.substring(0 , dados.length - 1);
        dados = dados+"==";
    }
    dados.split("+-").map(function(dados){
        var encode = atob(dados).split("+-");
        encode = encode.map(function(chars){
            return String.fromCharCode(atob(chars));
        });
        keysMeusDadosLogado = keysMeusDadosLogado+encode.join("")+",";
    });
});
Object.values(window.user[4]).forEach(function(dados){
    if(/[A-Z]/.test(dados[dados.length - 1]))
    {
        dados = dados.substring(0 , dados.length - 1);
        dados = dados+"==";
    }
    dados.split("+-").map(function(dados){
        var encode = atob(dados).split("+-");
        encode = encode.map(function(chars){
            return String.fromCharCode(atob(chars));
        })
        valuesMeusDadosLogado = valuesMeusDadosLogado+encode.join("")+",";
    });
});
if(keysMeusDadosLogado.split(",").length === valuesMeusDadosLogado.split(",").length)
{
    for (let index = 0; index < keysMeusDadosLogado.split(",").length; index++) 
    {
        MeusDadosLogado[keysMeusDadosLogado.split(",")[index]] = valuesMeusDadosLogado.split(",")[index];
        if(index >= 10)
        {
            break
        }
    }
    
}
Object.keys(MeusDadosLogado).forEach(function(keys , index){
    if(keys === '')
    {
        delete MeusDadosLogado[index];
        delete MeusDadosLogado[keys];
    }
});
Object.keys(MeusDadosLogado).forEach(function(keys){
    if(keys === 'nome')
    {
        var barra = $("<div>").css({"width":"0","height":"2px","border-radius":"10px","background":"white","transition":"1s"});
        barra.hide();
        var contador = 0;
        // adicionando cada letra no container
        Object.values(MeusDadosLogado[keys]).forEach(function(letra , index){
            // cria variaveis que alocaram cada letra em uma tag
            var span = $("<span>").css({"font-size":"50px","font-style":"italic","font-family":"'Teko',sans-serif"}).addClass("elemento-da-letra").attr("id","elemento-da-letra-"+letra).text(letra);
            // adiciona o hide() -> esconder
            if(span.text() === ' ')
            {
                span.html("&nbsp");
            }
            span.hide();
            setTimeout(function(){
                // adiciona o elemento 
                $("#Nome-do-Usuario-Animated").append(span);
                // adiciona o fadeIn() que seria suavemente em 1000 milisegundos
                span.fadeIn(1000);
                contador++;
                if(contador === Object.values(MeusDadosLogado[keys]).length)
                {

                    contador = 0;
                    setTimeout(function(){
                        $("#Barra-do-Usuario-Animated").append(barra);
                        barra.fadeIn(1000);
                        barra.css("width",$("#Nome-do-Usuario-Animated").get(0).scrollWidth+"px")
                    }, 200);
                    Object.keys(MeusDadosLogado).forEach(function(keys){
                        if(keys === 'nivel_acessos')
                        {
                            var etinerario = "Seu Nivel De Acesso: ";
                            Object.values(etinerario).forEach(function(letras , index){
                                var span = $("<span>").css({"font-style":"italic","font-family":"'Teko',sans-serif","font-size":"30px"}).text(letras);
                                span.hide();
                                if(span.text() === ' ')
                                {
                                    span.html("&nbsp");
                                }
                                setTimeout(function(){
                                    $("#Classificacao-do-Usuario").append(span);
                                    span.fadeIn(1000);
                                    contador++;
                                    if(contador === Object.values(etinerario).length)
                                    {
                                        contador = 0;
                                        Object.values(MeusDadosLogado[keys]).forEach(function(letras , index){
                                            var span = $("<span>").css({"font-style":"italic","font-family":"'Teko',sans-serif","font-size":"30px","color":"rgba(0,255,0)"}).text(letras);
                                            span.hide();
                                            if(span.text() === ' ')
                                            {
                                                span.html('&nbsp');
                                            }
                                            setTimeout(function(){
                                                $("#Classificacao-do-Usuario").append(span);
                                                span.fadeIn(1000);
                                                contador++;
                                                if(contador === Object.values(MeusDadosLogado[keys]).length)
                                                {
                                                    contador = 0;
                                                    Object.keys(MeusDadosLogado).forEach(function(keys){
                                                        if(keys === 'created_at')
                                                        {
                                                            var Criada = "Conta criada em: ";
                                                            Object.values(Criada).forEach(function(letras,index){
                                                                var span = $("<span>").css({"font-size":"20px","font-family":"'Teko',sans-serif","font-style":"italic"}).addClass("element-de-data-de-etinerarios").attr("id","elemento-de-data-de-etinerarios-"+letras).text(letras);
                                                                span.hide();
                                                                if(span.text() === ' ')
                                                                {
                                                                    span.html('&nbsp');
                                                                }
                                                                setTimeout(function(){
                                                                    $("#Data-de-Criação-do-Usuario").append(span);
                                                                    span.fadeIn(1000);
                                                                    contador++;
                                                                    if(contador === Object.values(Criada).length)
                                                                    {
                                                                        contador = 0;
                                                                        var DataBr = [];
                                                                        Object.values(MeusDadosLogado[keys]).forEach(function(letras , index){
                                                                            if(index < 10)
                                                                            {
                                                                                DataBr.push(letras);
                                                                                contador++;
                                                                                if(contador === 10)
                                                                                {
                                                                                    contador = 0;
                                                                                    var [ano,mes,dia] = DataBr.join("").replace(/[-]/g,'/').split("/");
                                                                                    var Data = `${dia}/${mes}/${ano}`;
                                                                                    Object.values(Data).forEach(function(letras , index){
                                                                                        var span = $("<span>").css({"color":"rgba(0,255,0)","font-style":"italic","font-family":"'Teko',sans-serif","font-size":"20px"}).addClass("elemento-letras-data").attr("id","elemento-letras-data-"+letras).text(letras);
                                                                                        span.hide();
                                                                                        setTimeout(function(){
                                                                                            $("#Data-de-Criação-do-Usuario").append(span);
                                                                                            span.fadeIn(1000);
                                                                                        },50*index);
                                                                                    });
                                                                                }
                                                                            }
                                                                        });

                                                                        
                                                                    }
                                                                },index * 100);
                                                            });
                                                            var Hora = "No Horario de: ";
                                                            Object.values(Hora).forEach(function(letras , index){
                                                                var span = $("<span>").css({"font-style":"italic","font-family":"'Teko',sans-serif","font-size":"20px"}).addClass("elemento-de-letras-horario").attr("id","elemento-de-letras-horario").text(letras);
                                                                if(span.text() === ' ')
                                                                {
                                                                    span.html('&nbsp');
                                                                }
                                                                span.hide();
                                                                setTimeout(function(){
                                                                    $("#Hora-de-Criação-do-Usuario").append(span);
                                                                    span.fadeIn(1000);
                                                                    contador++;
                                                                    if(contador === Object.values(Hora).length)
                                                                    {
                                                                        contador = 0;
                                                                        Object.values(MeusDadosLogado[keys]).forEach(function(letras , index){
                                                                            if(index > 10 && index < 19)
                                                                            {
                                                                                var span = $("<span>").css({"color":"rgba(0,255,0)","font-style":"italic","font-family":"'Teko',sans-serif","font-size":"20px"}).addClass("elemento-de-letras-horario").attr("id","elemento-de-letras-horario-"+index).text(letras);
                                                                                if(span.text() === '')
                                                                                {
                                                                                    span.html("&nbsp");
                                                                                }
                                                                                span.hide();
                                                                                setTimeout(function(){
                                                                                    $("#Hora-de-Criação-do-Usuario").append(span);
                                                                                    span.fadeIn(1000);
                                                                                },index*50);
                                                                            }
                                                                        });
                                                                    }
                                                                },index*50);
                                                            });
                                                        }
                                                    });
                                                }
                                            }, 100*index);
                                        });
                                    }
                                },index*100);
                            });
                        }
                    });
                }
            // multiplica o valor em milisegundos pelo indice 
            },index * 100);
            
        });
    }
});
// container (Seus Dados Cadastrados)
Object.keys(MeusDadosLogado).forEach(function(keys){
    if(keys === 'nome')
    {
        var NomeIcone = $("<i>").addClass("fa-solid fa-user").css({"padding":"10px","color":"rgba(0,255,0)","font-size":"20px"});
        var contador = 0;
        NomeIcone.hide();
        var NomeEtinerario = "Seu Nome: ";
        setTimeout(function(){
            $("#Etinerario-Nome").append(NomeIcone);
            NomeIcone.fadeIn(1000);
            contador++;
            if(contador === 1)
            {
                contador = 0;
                Object.values(NomeEtinerario).forEach(function(dados , index){
                    var span = $("<span>").addClass("elemento-classes-nome-do-etinerario").css({"color":"rgba(0,255,0)","font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","pointer-events":"none"}).text(dados);
                    span.hide();
                    if(span.text() === ' ')
                    {
                        span.html("&nbsp");
                    }
                    setTimeout(function(){
                        $("#Etinerario-Nome").append(span);
                        span.fadeIn(1000);
                        contador++;
                        if(contador === Object.values(NomeEtinerario).length)
                        {
                            contador = 0;
                            Object.values(MeusDadosLogado[keys]).forEach(function(chars,index){
                                setTimeout(function(){
                                    $("#Nome-do-usuario").val($("#Nome-do-usuario").val()+chars).fadeIn(1000);
                                    contador++;
                                    if(contador === Object.values(MeusDadosLogado[keys]).length)
                                    {
                                        $("#Nome-do-usuario").attr("value",MeusDadosLogado[keys]);
                                        contador = 0;
                                        $("#Nome-do-usuario").closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
                                            "width":Math.round($("#Nome-do-usuario").get(0).offsetWidth+$("#Etinerario-Nome").get(0).offsetWidth)+"px",
                                            "transition":"1s"
                                        });
                                        $("#Nome-do-usuario").closest("div").find(".submit").css({
                                            "left":"90%"
                                        });
                                        $("#Nome-do-usuario").closest("div").find(".submit").find("label").css({
                                            "transition":"1s",
                                            "opacity":"1",
                                            "font-size":"20px",
                                            "color":"rgba(0,255,0)"
                                        });
                                    }
                                },index*100);
                            });
                        }
                    },index*100);
                });
            }
        },5000);
    }
    if(keys === 'email')
    {
        var EmailIcone = $("<i>").addClass("fa-solid fa-envelope").css({"padding":"10px","color":"rgba(0,255,0)","font-size":"20px"});
        var contador = 0;
        EmailIcone.hide();
        var EmailEtinerario = "Seu Email: ";
        setTimeout(function(){
            $("#Etinerario-email").append(EmailIcone);
            EmailIcone.fadeIn(1000);
            contador++;
            if(contador === 1)
            {
                contador = 0;
                Object.values(EmailEtinerario).forEach(function(dados , index){
                    var span = $("<span>").addClass("elemento-classes-Email-do-etinerario").css({"color":"rgba(0,255,0)","font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","pointer-events":"none"}).text(dados);
                    span.hide();
                    if(span.text() === ' ')
                    {
                        span.html("&nbsp");
                    }
                    setTimeout(function(){
                        $("#Etinerario-email").append(span);
                        span.fadeIn(1000);
                        contador++;
                        if(contador === Object.values(EmailEtinerario).length)
                        {
                            contador = 0;
                            Object.values(MeusDadosLogado[keys]).forEach(function(chars,index){
                                setTimeout(function(){
                                    $("#Email-do-usuario").val($("#Email-do-usuario").val()+chars).fadeIn(1000);
                                    contador++;
                                    if(contador === Object.values(MeusDadosLogado[keys]).length)
                                    {
                                        contador = 0;
                                        $("#Email-do-usuario").closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
                                            "width":Math.round($("#Email-do-usuario").get(0).offsetWidth+$("#Etinerario-email").get(0).offsetWidth)+"px",
                                            "transition":"1s"
                                        });
                                        $("#Email-do-usuario").closest("div").find(".submit").css({
                                            "left":"90%"
                                        });
                                        $("#Email-do-usuario").closest("div").find(".submit").find("label").css({
                                            "transition":"1s",
                                            "opacity":"1",
                                            "font-size":"20px",
                                            "color":"rgba(0,255,0)"
                                        });
                                    }
                                },index*100);
                            });
                        }
                    },index*100);
                });
            }
        },5000);
    }
    if(keys === 'date')
    {
        var DataIcone = $("<i>").addClass("fa-solid fa-calendar-days").css({"padding":"10px","color":"rgba(0,255,0)","font-size":"20px"});
        var contador = 0;
        DataIcone.hide();
        var DataEtinerario = "Seu Data: ";
        setTimeout(function(){
            $("#Etinerario-Data").append(DataIcone);
            DataIcone.fadeIn(1000);
            contador++;
            if(contador === 1)
            {
                contador = 0;
                Object.values(DataEtinerario).forEach(function(dados , index){
                    var span = $("<span>").addClass("elemento-classes-Data-do-etinerario").css({"color":"rgba(0,255,0)","font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","pointer-events":"none"}).text(dados);
                    span.hide();
                    if(span.text() === ' ')
                    {
                        span.html("&nbsp");
                    }
                    setTimeout(function(){
                        $("#Etinerario-Data").append(span);
                        span.fadeIn(1000);
                        contador++;
                        if(contador === Object.values(DataEtinerario).length)
                        {
                            contador = 0;
                            Object.values(MeusDadosLogado[keys]).forEach(function(chars,index){
                                setTimeout(function(){
                                    $("#Data-do-usuario").val($("#Data-do-usuario").val()+chars).fadeIn(1000);
                                    contador++;
                                    if(contador === Object.values(MeusDadosLogado[keys]).length)
                                    {
                                        contador = 0;
                                        $("#Data-do-usuario").closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
                                            "width":Math.round($("#Data-do-usuario").get(0).offsetWidth+$("#Etinerario-Data").get(0).offsetWidth)+"px",
                                            "transition":"1s"
                                        });
                                        $("#Data-do-usuario").closest("div").find(".submit").css({
                                            "left":"90%"
                                        });
                                        $("#Data-do-usuario").closest("div").find(".submit").find("label").css({
                                            "transition":"1s",
                                            "opacity":"1",
                                            "font-size":"20px",
                                            "color":"rgba(0,255,0)"
                                        });
                                    }
                                },index*100);
                            });
                        }
                    },index*100);
                });
            }
        },5000);
    }
    if(keys === 'generos')
    {
        var GeneroIcone = $("<i>").addClass("fa-solid fa-book").css({"padding":"10px","color":"rgba(0,255,0)","font-size":"20px"});
        var contador = 0;
        GeneroIcone.hide();
        var GeneroEtinerario = "Seu Genero: ";
        setTimeout(function(){
            $("#Etinerario-Genero").append(GeneroIcone);
            GeneroIcone.fadeIn(1000);
            contador++;
            if(contador === 1)
            {
                contador = 0;
                Object.values(GeneroEtinerario).forEach(function(dados , index){
                    var span = $("<span>").addClass("elemento-classes-Genero-do-etinerario").css({"color":"rgba(0,255,0)","font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","pointer-events":"none"}).text(dados);
                    span.hide();
                    if(span.text() === ' ')
                    {
                        span.html("&nbsp");
                    }
                    setTimeout(function(){
                        $("#Etinerario-Genero").append(span);
                        span.fadeIn(1000);
                        contador++;
                        if(contador === Object.values(GeneroEtinerario).length)
                        {
                            contador = 0;
                            Object.values(MeusDadosLogado[keys]).forEach(function(chars,index){
                                setTimeout(function(){
                                    $("#Genero-do-usuario").val($("#Genero-do-usuario").val()+chars).fadeIn(1000);
                                    contador++;
                                    if(contador === Object.values(MeusDadosLogado[keys]).length)
                                    {
                                        contador = 0;
                                        $("#Genero-do-usuario").closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
                                            "width":Math.round($("#Genero-do-usuario").get(0).offsetWidth+$("#Etinerario-Genero").get(0).offsetWidth)+"px",
                                            "transition":"1s"
                                        });
                                        $("#Genero-do-usuario").closest("div").find(".submit").css({
                                            "left":"90%"
                                        });
                                        $("#Genero-do-usuario").closest("div").find(".submit").find("label").css({
                                            "transition":"1s",
                                            "opacity":"1",
                                            "font-size":"20px",
                                            "color":"rgba(0,255,0)"
                                        });
                                    }
                                },index*100);
                            });
                        }
                    },index*100);
                });
            }
        },5000);
    }
});
// Validação de Divs (contenteditable)
$("#Nome-do-usuario").on("input",function(){
    var mascara = $(this).val();
    mascara = mascara.replace(/[^a-zA-Z ãçâáàéèêóòôõíìîúùû]/g ,'');
    if(mascara.length >= 40)
    {
        mascara = mascara.slice(0,40);
    }
    $(this).val(mascara);
    if($(this).val().length <= 5)
    {
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"100%",
            "opacity":"0",
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css({
                "display":"none"
            });
        },10000);
    }
    else
    {
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"90%",
            "opacity":"1"
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css("display","block");
        },10000);
    }
});
$("#elemento-input-submit-Nome").on("click",function(){
    $("#Nome-do-usuario").attr("value",$("#Nome-do-usuario").val());
    if($("#Nome-do-usuario").val() !== MeusDadosLogado['nome'])
    {
        $("#Nome-do-Usuario-Animated").find("span").each(function(index , elemento){
            $(elemento).remove();
        });
        Object.values($("#Nome-do-usuario").val()).forEach(function(dados , index){
            var span = $("<span>").css({"font-size":"50px","font-family":"'Teko',sans-serif","font-style":"italic"}).text(dados);
            if(span.text() === ' ')
            {
                span.html('&nbsp');
            }
            span.hide();
            setTimeout(function(){
                $("#Nome-do-Usuario-Animated").append(span);
                span.fadeIn(1000);
            }, index*50);
        });
    }
    var formData = new FormData();
    formData.append('_token',atob(window.user[5]));
    formData.append('nome',$("#Nome-do-usuario").val());
    $.ajax({
        // url
        url: '/EditarNomePerfil/'+atob(window.user[0]).charCodeAt(0),
        // type
        type: 'POST',
        // Data
        data: formData,
        // contentType
        contentType: false,
        // processData
        processData: false,
        // response
        success: function(response)
        {
            if(response.status === 'sucess')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","opacity":"1"});
                }, 500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
            else
            if(response.status === 'error')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                },500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
        },
        // error
        erro: function(response)
        {
            $("body").append(
                $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                    $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                    $("<div>").append(
                        $("<span>").text(response.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                    )
                ),
            );
            setTimeout(function(){
                $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
            }, 500)
            $("#overley-json-response").on("click",function(){
                $(this).remove();
                $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                setTimeout(function(){
                    $("#modal-response-json").remove();
                }, 500);
            });
        }
    });
});
$("#Email-do-usuario").on("input",function(){
    var mascara = $(this).val();
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mascara))
    {
        $(this).css({"color":"white","transition":"1s"});
        $(this).closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
            "transition":"1s",
            "background":"white",
        });
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"90%",
            "opacity":"1"
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css("display","block");
        },10000);
    }
    else
    {
        $(this).css({"color":"red","transition":"1s"});
        $(this).closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
            "transition":"1s",
            "background":"red",
        });
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"100%",
            "opacity":"0",
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css({
                "display":"none"
            });
        },10000);
    }
});
$("#elemento-input-submit-Email").on("click",function(){
    var formData = new FormData();
    formData.append('_token',atob(window.user[14]));
    formData.append('email',$("#Email-do-usuario").val());
    $.ajax({
        // url
        url: `/EditarEmailPerfil/${atob(window.user[0]).charCodeAt(0)}`,
        // type
        type: 'POST',
        // data
        data: formData,
        // contentType
        contentType: false,
        // processData
        processData: false,
        // sucess
        success: function(response)
        {
            if(response.status === 'sucess')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","opacity":"1"});
                }, 500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
            else
            if(response.status === 'error')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                },500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
        },
        // error
        erro: function(response)
        {
            $("body").append(
                $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                    $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                    $("<div>").append(
                        $("<span>").text(response.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                    )
                ),
            );
            setTimeout(function(){
                $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
            }, 500)
            $("#overley-json-response").on("click",function(){
                $(this).remove();
                $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                setTimeout(function(){
                    $("#modal-response-json").remove();
                }, 500);
            });
        }
    });
});
$("#Data-do-usuario").on("input",function(){
    var mascara = $(this).val();
    mascara = mascara.replace(/\s/g,'');
    mascara = mascara.replace(/\D/g,'');
    mascara = mascara.replace(/(\d{2})(\d{2})(\d{4})/ , '$1/$2/$3');
    mascara = mascara.slice(0,10);
    $(this).val(mascara);
    if($(this).val().length < 10)
    {
        $(this).css({"color":"red","transition":"1s"});
        $(this).closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
            "transition":"1s",
            "background":"red",
        });
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"100%",
            "opacity":"0",
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css({
                "display":"none"
            });
        },10000);
    }
    else
    {
        $(this).css({"color":"white","transition":"1s"});
        $(this).closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
            "transition":"1s",
            "background":"white",
        });
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"90%",
            "opacity":"1"
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css("display","block");
        },10000);
    }
});
$("#elemento-input-submit-Data").on("click",function(){
    var formData = new FormData();
    formData.append('_token',atob(window.user[15]));
    formData.append('data',$("#Data-do-usuario").val());
    $.ajax({
        // url
        url: `/EditarDataPerfil/${atob(window.user[0]).charCodeAt(0)}`,
        // type
        type: 'POST',
        // data
        data: formData,
        // contentType
        contentType: false,
        // processData
        processData: false,
         // sucess
         success: function(response)
         {
             if(response.status === 'sucess')
             {
                 $("body").append(
                     $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                     $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                         $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                         $("<div>").append(
                             $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                         )
                     ),
                 );
                 setTimeout(function(){
                     $("#modal-response-json").css({"top":"50%","opacity":"1"});
                 }, 500)
                 $("#overley-json-response").on("click",function(){
                     $(this).remove();
                     $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                     setTimeout(function(){
                         $("#modal-response-json").remove();
                     }, 500);
                 });
             }
             else
             if(response.status === 'error')
             {
                 $("body").append(
                     $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                     $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                         $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                         $("<div>").append(
                             $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                         )
                     ),
                 );
                 setTimeout(function(){
                     $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                 },500)
                 $("#overley-json-response").on("click",function(){
                     $(this).remove();
                     $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                     setTimeout(function(){
                         $("#modal-response-json").remove();
                     }, 500);
                 });
             }
         },
         // error
         erro: function(response)
         {
             $("body").append(
                 $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                 $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                     $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                     $("<div>").append(
                         $("<span>").text(response.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                     )
                 ),
             );
             setTimeout(function(){
                 $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
             }, 500)
             $("#overley-json-response").on("click",function(){
                 $(this).remove();
                 $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                 setTimeout(function(){
                     $("#modal-response-json").remove();
                 }, 500);
             });
         }
    })
});
$("#Genero-do-usuario").on("input",function(){
    var valores = [];
    $("#elemento-generos").find("option").each(function(index , elemento){
        valores.push($(elemento).text());
    });
    if(valores.includes($(this).val()))
    {
        $(this).css({"transition":"1s","color":"white"});
        $(this).closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
            "transition":"1s",
            "background":"white"
        });
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"90%",
            "opacity":"1"
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css("display","block");
        },10000);
    }
    else
    {
        $(this).css({"transition":"1s","color":"red"});
        $(this).closest("div").closest(".elemento-container-dados-do-usuario").find(".elemento-barra-underline").css({
            "transition":"1s",
            "background":"red"
        });
        $(this).closest("div").find(".submit").css({
            "transition":"1s",
            "left":"100%",
            "opacity":"0",
        });
        setTimeout(function(){
            $(this).closest("div").find(".submit").css({
                "display":"none"
            });
        },10000);
    }
});
$("#elemento-input-submit-Genero").on("click",function(){
    var formData = new FormData();
    formData.append('_token',atob(window.user[16]));
    formData.append('generos',$("#Genero-do-usuario").val());
    $.ajax({
        // url
        url: `/EditarGenerosPerfil/${atob(window.user[0]).charCodeAt(0)}`,
        // type
        type: 'POST',
        // data
        data: formData,
        // contentType
        contentType: false,
        // processData
        processData: false,
        // sucess
        // sucess
        success: function(response)
        {
            if(response.status === 'sucess')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","opacity":"1"});
                }, 500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
            else
            if(response.status === 'error')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                },500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
        },
        // error
        erro: function(response)
        {
            $("body").append(
                $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                    $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                    $("<div>").append(
                        $("<span>").text(response.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                    )
                ),
            );
            setTimeout(function(){
                $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
            }, 500)
            $("#overley-json-response").on("click",function(){
                $(this).remove();
                $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                setTimeout(function(){
                    $("#modal-response-json").remove();
                }, 500);
            });
        }
    });
});
var Curtidas_Base64_Keys = [];
var Curtidas_Number_Keys = [];
var Curtidas_Base64_Values = [];
var Curtidas_Number_Values = [];
decodeURIComponent(escape(atob(window.user[6]))).split('+-').forEach(function(variavel){Curtidas_Base64_Keys.push(String.fromCharCode(decodeURIComponent(escape(atob(variavel)))));});
Curtidas_Base64_Keys.join("").split("+-").forEach(function(variavel){Curtidas_Number_Keys.push(variavel);});
decodeURIComponent(escape(atob(window.user[7]))).split("+-").forEach(function(variavel){Curtidas_Base64_Values.push(String.fromCharCode(decodeURIComponent(escape(atob(variavel)))));});
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
const ViewMinhasPostagensCurtidas = {};
Object.keys(MinhasPostagensCurtidas).forEach(function(keys){
    Object.values(MinhasPostagensCurtidas[keys]).forEach(function(array){
        if(!(keys in ViewMinhasPostagensCurtidas))
        {
            ViewMinhasPostagensCurtidas[keys] = {'imagem':array.imagem_postagem , 'curtida':array.curtida , 'data': array.data};
        }
    });
});

// Chaves do Livros Salvos
var TesteArrayK = [];
var NovosDadosK = [];
var KeysDadosLivrosSalvosK = [];
var DadosKeysCodificadas = decodeURIComponent(escape(atob(window.user[8]))).split('+-');
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
var DadosValuesCodificadas = decodeURIComponent(escape(atob(window.user[9]))).split('+-');
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
const MeusLivrosSalvos = {};
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
// dados do perfil
const DadosProfile = {};
let contadorProfile = 0;
let chars = "";
decodeURIComponent(escape(atob(window.user[10]))).split("+-").forEach(function(dados){
    chars = chars+String.fromCharCode(decodeURIComponent(escape(atob(dados))));
    contadorProfile++;
    if(contadorProfile === decodeURIComponent(escape(atob(window.user[10]))).split("+-").length)
    {
        var keys = chars.split("+-");
        contadorProfile = 0;
        chars = ""; 
        decodeURIComponent(escape(atob(window.user[11]))).split("+-").forEach(function(dados){
            chars = chars+String.fromCharCode(decodeURIComponent(escape(atob(dados))));
            contadorProfile++;
            if(contadorProfile === decodeURIComponent(escape(atob(window.user[11]))).split("+-").length)
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
// comentarios
var contadorLivrosComentados = 0;
var arrayLivrosComentadoskeys = [];
var arrayLivrosComentadosValues = [];
const Meus_Comentarios = {};
decodeURIComponent(escape(atob(window.user[12]))).split("§").forEach(function(dados){
    arrayLivrosComentadoskeys.push(dados.split("+-"));

    contadorLivrosComentados++;
    if(contadorLivrosComentados === decodeURIComponent(escape(atob(window.user[12]))).split("§").length)
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
decodeURIComponent(escape(atob(window.user[13]))).split("§").forEach(function(dados){
    arrayLivrosComentadosValues.push(dados.split("+-"));
    contadorLivrosComentados++;
    if(contadorLivrosComentados === decodeURIComponent(escape(atob(window.user[13]))).split("§").length)
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
console.log(MinhasPostagensCurtidas);
console.log(MeusLivrosSalvos);
console.log(DadosProfile);
console.log(Meus_Comentarios);
// Postagens Curtidas
Object.keys(MinhasPostagensCurtidas).forEach(function(keys){
    var Postagens = $("<div>").css({"min-width":"400px","height":"400px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","transition":"1s","margin":"10px 30px"}).addClass("elemento-my-posts-like");
    var redirects = $("<a>").css({"display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"column","width":"400px","height":"400px","transition":"1s","font-family":"'Teko',sans-serif","font-style":"italic","font-size":"20px","text-decoration":"none"})
    Object.values(MinhasPostagensCurtidas[keys]).forEach(function(dados){
        const id_MinhasPostagensCurtidas = "/ViewPostFull/"+dados.id+"";
        var titulo = $("<div>").css({"color":"white","width":"100%","height":"40px","text-align":"center","padding":"5px"}).append($("<p>").text(dados.titulo_postagem));
        var imagem = $("<div>").css({"width":"calc(400px - (40px + 40px))","height":"calc(400px - (40px + 40px))"}).append($("<img>").attr("src","../../../publicacao/"+dados.imagem_postagem).css({"width":"100%","height":"100%"}));
        var curtida = $("<div>").css({"width":"100%","height":"40px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append(
        $("<div>").css({"width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"center"}).append(
            $("<span>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<p>").css("color","white").text("Você avaliou como:"),$("<p>").css("color","rgba(0,255,0)").text(dados.curtida)),
            $("<span>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<p>").css("color","white").text("Na data de: "),$("<p>").css("color","rgba(0,255,0)").text(dados.data)))
        );
        Postagens.append(
            redirects.attr("href","#").on("click", (event) => {
                event.preventDefault();
                window.location.href = id_MinhasPostagensCurtidas;
            }).append(titulo,imagem,curtida)
        );
    });
    $("#elemento-overflow-livros-curtidos").append(Postagens);
});
// Postagens Salvas
Object.keys(MeusLivrosSalvos).forEach(function(keys){
    var Postagens = $("<div>").css({"min-width":"400px","height":"400px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","transition":"1s","margin":"10px 30px"}).addClass("elemento-my-posts-like");
    var redirects = $("<a>").css({"display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"column","width":"400px","height":"400px","transition":"1s","font-family":"'Teko',sans-serif","font-style":"italic","font-size":"20px","text-decoration":"none"})
    Object.values(MeusLivrosSalvos[keys]).forEach(function(dados){
        const id_MeusLivrosSalvos = "/ViewPostFull/"+dados.id+"";
        var titulo = $("<div>").css({"color":"white","width":"100%","height":"40px","text-align":"center","padding":"5px"}).append($("<p>").text(dados.titulo_postagem));
        var imagem = $("<div>").css({"width":"calc(400px - (40px + 40px))","height":"calc(400px - (40px + 40px))"}).append($("<img>").attr("src","../../../publicacao/"+dados.imagem_postagem).css({"width":"100%","height":"100%"}));
        var curtida = $("<div>").css({"width":"100%","height":"40px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append(
        $("<div>").css({"width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"center"}).append(
            $("<span>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<p>").css("color","white").text("Na hora de: "),$("<p>").css("color","rgba(0,255,0)").text(dados.hora)),
            $("<span>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<p>").css("color","white").text("Na data de: "),$("<p>").css("color","rgba(0,255,0)").text(dados.data)))
        );
        Postagens.append(
            redirects.attr("href","#").on("click", (event) => {
                event.preventDefault();
                window.location.href = id_MeusLivrosSalvos;
            }).append(titulo,imagem,curtida)
        );
    });
    $("#elemento-scrolling-horizontal").append(Postagens);
});
// Postagens Comentadas
Object.keys(Meus_Comentarios).forEach(function(keys){
    var Postagens = $("<div>").css({"min-width":"400px","height":"400px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","transition":"1s","margin":"10px 30px"}).addClass("elemento-my-posts-like");
    var redirects = $("<a>").css({"display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"column","width":"400px","height":"400px","transition":"1s","font-family":"'Teko',sans-serif","font-style":"italic","font-size":"20px","text-decoration":"none"})
    Object.values(Meus_Comentarios[keys]).forEach(function(dados){
        const id_Meus_Comentarios = "/ViewPostFull/"+dados.id+"";
        var titulo = $("<div>").css({"color":"white","width":"100%","height":"40px","text-align":"center","padding":"5px"}).append($("<p>").text(dados.titulo_postagem));
        var imagem = $("<div>").css({"width":"calc(400px - (40px + 40px))","height":"calc(400px - (40px + 40px))"}).append($("<img>").attr("src","../../../publicacao/"+dados.imagem_postagem).css({"width":"100%","height":"100%"}));
        var curtida = $("<div>").css({"width":"100%","height":"40px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append(
        $("<div>").css({"width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"center"}).append(
            $("<span>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<p>").css("color","white").text("Na hora de: "),$("<p>").css("color","rgba(0,255,0)").text(dados.hora)),
            $("<span>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<p>").css("color","white").text("Na data de: "),$("<p>").css("color","rgba(0,255,0)").text(dados.data)))
        );
        Postagens.append(
            redirects.attr("href","#").on("click", (event) => {
                event.preventDefault();
                window.location.href = id_Meus_Comentarios;
            }).append(titulo,imagem,curtida)
        );
    });
    $("#elemento-column-comentarios").append(Postagens);
});
if($("#elemento-column-comentarios").find("div").length === 0)
{
    $("#elemento-column-comentarios").css({"display":"none"});
    $("#elemento-column-comentarios").closest("div").append(
        $("<div>").css({
            "width":"100%",
            "height":"400px",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center",
            "flex-wrap":"nowrap",
            "flex-direction":"row"
        }).append(
            $("<div>").text("Você Ainda Não Comentou em Postagem Nenhuma !!!")
        )
    )
}
// window.addEventListener("load",function(){
//     var contador = 0;
//     var index = 0;
//     var elementoCurtidas = $(".elemento-my-posts-like");
//     setInterval(function(){
//         contador = contador + 10;
//         index++;
//         $(".elemento-my-posts-like").css({
//             "transition":"1s",
//             "transform":`translate(-${contador}%)`
//         });
//         if(contador === Math.round(elementoCurtidas.length * 100))
//         {
//             contador = 0;

//         }
//     }, 1000)
//     // Diferença entre setTimeout e setInterval
//     // setTimeout executa uma função apenas uma unica vez em um limite no tempo , ex: executa um unico olá após uns 1s , 2s... 
//     // setInterval executa a função repetidas vezes em um intervalo de tempo , ex: executa um olá a cada 1s , 2s... 
// });
// $("#elemento-scrolling-horizontal")