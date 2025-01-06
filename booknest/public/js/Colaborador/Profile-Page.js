// Edição De Dados do Colaborador 
var ProfilePage = $("<div>").addClass("elemento-page-profile-container-class").attr("id","elemento-page-profile-container-id").css({"width":"100%","max-width":"90%","height":"700px","position":"relative","top":"0","left":"0","overflow-y":"hidden","overflow-x":"hidden","transition":"1s","margin":"20px auto"});
$("#Page-4").append(ProfilePage);
var ElementosStylesBarrasAndsCircles = [];
var ElementosStylesBarrasAndsCirclesClass = [
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-image-absolute-label',
    'elemento-class-conten-input-absolute-infos'
];
var ElementosStylesBarrasAndsCirclesIds = [
    'barra-superior',
    'barra-inferior',
    'barra-direta',
    'barra-esquerda',
    'circle-superior-right',
    'circle-superior-left',
    'circle-inferior-right',
    'circle-inferior-left',
    'Label-alteravel-colab',
    'Inputs-alteravel-colab'
];
var ElementosStylesBarrasAndsCirclesStyles = [
    {"width":"100%","height":"10px","background":"white","position":"absolute","top":"-1%","left":"0","z-index":"2","transition":"2s"},
    {"width":"100%","height":"10px","background":"white","position":"absolute","bottom":"-1%","right":"0","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"0","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"-100%","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"-4%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"-4%","z-index":"2","transition":"2s"},
    {"width":"500px","height":"500px","border-radius":"50%","position":"absolute","top":"-10%","left":"-10%","cursor":"pointer","z-index":"1","transition":"2s"},
    {"position":"absolute","top":"0","left":"20%","width":"80%","height":"100%","transition":"2s"}
];
for (let index = 0; index < 8; index++) {
    var ElementosStylesBarrasAndsCirclesHTMLElements = $("<div>");
    ElementosStylesBarrasAndsCircles.push(ElementosStylesBarrasAndsCirclesHTMLElements);
}
ElementosStylesBarrasAndsCircles.push($("<label>").attr("for","file-edited-autor-photo-perfil"));
ElementosStylesBarrasAndsCircles.push($("<div>"));
var ArrayProfilePagesKeys = [];
var ArrayProfilePagesValues = [];
if(window.informacoes)
{
    atob(window.informacoes.keys).split("+-").forEach(function(number){ArrayProfilePagesKeys.push(String.fromCharCode(Number(number)));});
var ProfilePageArrayDadosKeys = ArrayProfilePagesKeys.join("").split("+-");
atob(window.informacoes.values).split("+-").forEach(function(number){ArrayProfilePagesValues.push(String.fromCharCode(Number(number)));});
var ProfilePageArrayDadosValues = ArrayProfilePagesValues.join("").split("+-");
for (let index = 0; index < ElementosStylesBarrasAndsCircles.length; index++) {

    ElementosStylesBarrasAndsCircles[index].addClass(ElementosStylesBarrasAndsCirclesClass[index]).attr("id",ElementosStylesBarrasAndsCirclesIds[index]).css(ElementosStylesBarrasAndsCirclesStyles[index]);
    ProfilePage.append(ElementosStylesBarrasAndsCircles[index]);
    if(ElementosStylesBarrasAndsCircles[index].attr("id") === "Inputs-alteravel-colab")
    {
        var form = $("<form>").addClass("elemento-formulario-edit-Perfil-Autor").attr("id","elemento-formulario-edit-Perfil-Autor").css({"width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"wrap","flex-direction":"column"}).attr("method","POST").attr("action","#").attr("enctype","multipart/form-data");
        var span = $("<span>").addClass("elemento-span-edit-Perfil-Autor").attr("id","elemento-span-edit-Perfil-Autor").css({"width":"100%","max-width":"40%","height":"50px","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","border-top":"none","border-right":"none","border-left":"none","border-bottom":"2px groove white","margin":"0 auto"});
        var iconImg1 = $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"});
        var iconImg2 = $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"});
        var p = $("<p>").css({"font-family":"stencilla","font-size":"20px"}).text("Suas Informações");
        form.append(span);
        span.append(iconImg1);
        span.append(p);
        span.append(iconImg2);
        for (let index = 0; index < 5; index++) {
            var DivsInputs = $("<div>").addClass("elemento-formulario-edit-Perfil-Autor-Divs").attr("id","elemento-formulario-edit-Perfil-Autor-Divs").css({"width":"100%","max-width":"40%","height":"50px","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","border-top":"none","border-right":"none","border-left":"none","border-bottom":"2px groove white","margin":"10px auto"});
            form.append(DivsInputs);
        }
        ElementosStylesBarrasAndsCircles[index].append(form);
        for (let index = 0; index < $(".elemento-formulario-edit-Perfil-Autor-Divs").length; index++) {
            var iconImg1 = $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"});
            var iconImg2 = $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"});
            var input = $("<input>").addClass("elemento-input-form-editavel").css({"width":"100%","height":"100%","background":"transparent","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","text-transform":"capitalize","text-align":"center"}).attr("name",`input-${ProfilePageArrayDadosKeys[index]}`).attr("id",`input-${ProfilePageArrayDadosKeys[index]}`).prop('disabled',true);
            $(".elemento-formulario-edit-Perfil-Autor-Divs").eq(index).append(iconImg1);
            $(".elemento-formulario-edit-Perfil-Autor-Divs").eq(index).append(input.val(ProfilePageArrayDadosValues[index]).attr("value",ProfilePageArrayDadosValues[index]));
            $(".elemento-formulario-edit-Perfil-Autor-Divs").eq(index).append(iconImg2);
            if(input.attr("id") === "nome")
            {
                input.attr("type","text");
                input.prop("readonly",true);
            }
            if(input.attr("id") === "email")
            {
                input.attr("type","text");
                input.css({"text-transform":"none"});
                input.prop("readonly",true);
            }
            if(input.attr("id") === "data")
            {
                input.attr("type","text");
                input.prop("readonly",true);
            }
            if(input.attr("id") === "generos")
            {
                input.attr("id","text");
                input.prop("readonly",true);
            }
        }
        form.append(
            $("<div>").css({"position":"relative","bottom":"0","right":"0","width":"100%","height":"50px","max-width":"100%","max-height":"50px","overflow-y":"hidden","overflow-x":"hidden","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append(
                $("<div>").attr("id","elemento-perfil-id-botão-editavel-ativador").css({"width":"100%","height":"100%","position":"absolute","top":"0","left":"0","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row","transition":"1s"}).append($("<button>").attr("type","button").css({"width":"200px","height":"40px","text-align":"center","font-family":"'Montserrat',sans-serif","background":"transparent","border":"2px groove white","border-radius":"10px","color":"white","cursor":"pointer"}).text("Editar Meus Dados").on("mouseenter",function(){$(this).css({"transition":"1s","border":"none","background":"white","color":"#333"});}).on("mouseleave",function(){$(this).css({"transition":"1s","border":"2px groove white","background":"transparent","color":"white"});}).on("click",function(){
                    $(this).closest("div").css({"transition":"1s","top":"50px"}); $("#elemento-perfil-id-botão-editavel-modificador").css({"transition":"1s","top":"0"}); $("#file-edited-autor-photo-perfil").prop("disabled",false);
                    $(".elemento-input-form-editavel").each(function(index , elemento){
                        $(elemento).prop("disabled",false);
                        $(elemento).prop("readonly",false);
                        if($(elemento).attr("id") === "input-nome")
                        {
                            var SpanMessageErrorNome = $("<span>").addClass("elemento-span-error-if-name-not-chars-in-input").attr("id","elemento-span-error-if-name-not-chars-in-input").css({
                                "position":"absolute",
                                "top":"100%",
                                "left":"50%",
                                "transform":"translate(-50%,0)",
                                "padding":"10px",
                                "text-align":"center",
                                "width":"100%",
                                "font-size":"small",
                                "color":"red",
                                "opacity":"0"
                            }).text("O Nome não Pode ser Vazio");
                            $(elemento).closest("div").append(SpanMessageErrorNome);
                            $(elemento).on("input",function(){
                                var mascara = $(this).val();
                                mascara = mascara.replace(/[0-9]/g,'');
                                mascara = mascara.replace(/[*]/g,'');
                                mascara = mascara.replace(/[+]/g,'');
                                mascara = mascara.replace(/[-]/g,'');
                                mascara = mascara.replace(/[_]/g,'');
                                mascara = mascara.replace(/[(]/g,'');
                                mascara = mascara.replace(/[)]/g,'');
                                mascara = mascara.replace(/[\[\]]/g,'');
                                mascara = mascara.replace(/[=]/g,'');
                                mascara = mascara.replace(/[§]/g,'');
                                mascara = mascara.replace(/[º]/g,'');
                                mascara = mascara.replace(/[´]/g,'');
                                mascara = mascara.replace(/[`]/g,'');
                                mascara = mascara.replace(/[{]/g,'');
                                mascara = mascara.replace(/[}]/g,'');
                                mascara = mascara.replace(/[~]/g,'');
                                mascara = mascara.replace(/[:]/g,'');
                                mascara = mascara.replace(/[;]/g,'');
                                mascara = mascara.replace(/[ª]/g,'');
                                mascara = mascara.replace(/[&]/g,'');
                                mascara = mascara.replace(/[¨]/g,'');
                                mascara = mascara.replace(/[¬]/g,'');
                                mascara = mascara.replace(/[%]/g,'');
                                mascara = mascara.replace(/[¢]/g,'');
                                mascara = mascara.replace(/[$]/g,'');
                                mascara = mascara.replace(/[£]/g,'');
                                mascara = mascara.replace(/[³]/g,'');
                                mascara = mascara.replace(/[#]/g,'');
                                mascara = mascara.replace(/[²]/g,'');
                                mascara = mascara.replace(/[@]/g,'');
                                mascara = mascara.replace(/[¹]/g,'');
                                mascara = mascara.replace(/[!]/g,'');
                                mascara = mascara.replace(/[""]/g,'');
                                mascara = mascara.replace(/['']/g,'');
                                mascara = mascara.replace(/[,]/g,'');
                                mascara = mascara.replace(/[.]/g,'');
                                mascara = mascara.replace(/[<]/g,'');
                                mascara = mascara.replace(/[>]/g,'');
                                mascara = mascara.replace(/[--]/g,'');
                                mascara = mascara.replace(/[|]/g,'');
                                mascara = mascara.slice(0 , 40);
                                $(this).val(mascara);
                                if($(elemento).val() === '')
                                {
                                    $(elemento).closest("div").css({
                                        "position":"relative",
                                        "top":"0",
                                        "left":"0",
                                        "border-bottom":"2px groove red"
                                    });
                                    SpanMessageErrorNome.css("opacity","1");
                                    $(elemento).closest("div").closest("form").find("div").eq($(elemento).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"absolute","top":"-100px","transition":"1s"});
                                        }
                                    });
                                }
                                else
                                {
                                    $(elemento).closest("div").css({
                                        "position":"relative",
                                        "top":"0",
                                        "left":"0",
                                        "border-bottom":"2px groove white"
                                    });
                                    SpanMessageErrorNome.css("opacity","0");
                                    $(elemento).closest("div").closest("form").find("div").eq($(elemento).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"initial","top":"0","transition":"1s"});
                                        }
                                    });
                                }
                            });
                            
                        }
                        if($(elemento).attr("id") === "input-email")
                        {
                            var RegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                            var span = $("<span>").addClass("elemento-mensagem-span-div-email-if-email-not-valid-profile-edit-colab").attr("id","elemento-mensagem-span-div-email-if-email-not-valid-profile-edit-colab-id").css({"position":"absolute","top":"100%","left":"50%","transform":"translate(-50%,0)","padding":"10px","text-align":"center","width":"100%","font-size":"small","color":"red","opacity":"0"});
                            span.text("O E-mail deve ser Valído !!!");
                            $(this).closest("div").append(span);
                            $(elemento).on("input",function(){
                                if(!RegexEmail.test($(this).val()))
                                { 
                                    $(this).closest("div").css("border-bottom","2px groove red");
                                    $(this).closest("div").css("position","relative");
                                    $(this).closest("div").css("top","0");
                                    $(this).closest("div").css("left","0");
                                    span.css("opacity","1");
                                    $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"absolute","top":"-100px","transition":"1s"});
                                        }
                                    });
                                }
                                else
                                {
                                   $(this).closest("div").css("border-bottom","2px groove white");
                                   if($(".elemento-mensagem-span-div-email-if-email-not-valid-profile-edit-colab"))
                                   {
                                     $(".elemento-mensagem-span-div-email-if-email-not-valid-profile-edit-colab").css("opacity","0");
                                   }
                                   $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"initial","top":"0","transition":"1s"});
                                        }
                                   });
                                }
                            });
                        }
                        if($(elemento).attr("id") === "input-data")
                        {
                            var mensagemErrorData = $("<span>").css({
                                "position":"absolute",
                                "top":"100%",
                                "left":"0",
                                "width":"100%",
                                "color":"red",
                                "opacity":"0",
                                "text-align":"center",
                                "padding":"10px",
                                "font-size":"small"
                            }).addClass("elemento-mesagem-error-if-data-not-valid-edit-dado-from-autor-profile").attr("id","elemento-mesagem-error-if-data-not-valid-edit-dado-from-autor-profile-id").text("Data Invalida");
                            $(elemento).closest("div").append(mensagemErrorData);
                            
                            $(elemento).on("input",function(){
                                var mascara = $(this).val();
                                mascara = mascara.replace(/\D/g,'');
                                mascara = mascara.replace(/(\d{2})(\d{2})(\d{4})/ , '$1/$2/$3');
                                mascara = mascara.slice(0,10);
                                mascara = mascara.replace(/\s/g,'');
                                $(this).val(mascara);
                                if($(elemento).val().length === 10)
                                {
                                    var Data = $(elemento).val().split("/");
                                    var Dia = Number(Data[0]);
                                    var Mes = Number(Data[1]);
                                    var Ano = Number(Data[2]);
                                    if(Dia <= 31 && Mes <= 12 && Ano >= 1925 && Ano <= 2006)
                                    {
                                        $(elemento).closest("div").css({
                                            "position":"relative",
                                            "top":"0",
                                            "left":"0",
                                            "border-bottom":"2px groove white"
                                        });
                                        mensagemErrorData.css("opacity","0");
                                        $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                            if($(elemento).attr("type") === "submit")
                                            {
                                                $(elemento).css({"position":"initial","top":"0","transition":"1s"});
                                            }
                                        });
                                    }
                                    else
                                    {
                                        $(elemento).closest("div").css({
                                            "position":"relative",
                                            "top":"0",
                                            "left":"0",
                                            "border-bottom":"2px groove red"
                                        });
                                        mensagemErrorData.css("opacity","1");
                                        $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                            if($(elemento).attr("type") === "submit")
                                            {
                                                $(elemento).css({"position":"absolute","top":"-100px","transition":"1s"});
                                            }
                                        });
                                    }
                                }
                                if($(elemento).val() === '')
                                {
                                    mensagemErrorData.css("opacity","0");
                                    $(elemento).closest("div").css({
                                        "position":"relative",
                                        "top":"0",
                                        "left":"0",
                                        "border-bottom":"2px groove white"
                                    });
                                    $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"absolute","top":"-100px","transition":"1s"});
                                        }
                                    });
                                }
                                if($(elemento).val().length < 10)
                                {
                                    $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"absolute","top":"-100px","transition":"1s"});
                                        }
                                    });
                                }
                            });
                        }
                        if($(elemento).attr("id") === "input-genero")
                        {
                            var spanMessageError = $("<span>").addClass("elemento-span-error").attr("id","elemento-span-error-id").css({
                                "position":"absolute",
                                "top":"100%",
                                "left":"0",
                                "width":"100%",
                                "color":"red",
                                "opacity":"0",
                                "text-align":"center",
                                "padding":"10px",
                                "font-size":"small"
                            }).text("O Genero Não Existe");
                            $(elemento).closest("div").append(spanMessageError);
                            $(elemento).on("input",function(){
                                var mascara = $(this).val();
                                mascara = mascara.replace(/[0-9]/g,'');
                                // mascara = mascara.replace(/[*]/g,'');
                                // mascara = mascara.replace(/[+]/g,'');
                                // // mascara = mascara.replace(/[-]/g,'');
                                // mascara = mascara.replace(/[_]/g,'');
                                // mascara = mascara.replace(/[(]/g,'');
                                // mascara = mascara.replace(/[)]/g,'');
                                // mascara = mascara.replace(/[\[\]]/g,'');
                                // mascara = mascara.replace(/[=]/g,'');
                                // mascara = mascara.replace(/[§]/g,'');
                                // mascara = mascara.replace(/[º]/g,'');
                                // mascara = mascara.replace(/[´]/g,'');
                                // mascara = mascara.replace(/[`]/g,'');
                                // mascara = mascara.replace(/[{]/g,'');
                                // mascara = mascara.replace(/[}]/g,'');
                                // mascara = mascara.replace(/[~]/g,'');
                                // mascara = mascara.replace(/[:]/g,'');
                                // mascara = mascara.replace(/[;]/g,'');
                                // mascara = mascara.replace(/[ª]/g,'');
                                // mascara = mascara.replace(/[&]/g,'');
                                // mascara = mascara.replace(/[¨]/g,'');
                                // mascara = mascara.replace(/[¬]/g,'');
                                // mascara = mascara.replace(/[%]/g,'');
                                // mascara = mascara.replace(/[¢]/g,'');
                                // mascara = mascara.replace(/[$]/g,'');
                                // mascara = mascara.replace(/[£]/g,'');
                                // mascara = mascara.replace(/[³]/g,'');
                                // mascara = mascara.replace(/[#]/g,'');
                                // mascara = mascara.replace(/[²]/g,'');
                                // mascara = mascara.replace(/[@]/g,'');
                                // mascara = mascara.replace(/[¹]/g,'');
                                // mascara = mascara.replace(/[!]/g,'');
                                // mascara = mascara.replace(/[""]/g,'');
                                // mascara = mascara.replace(/['']/g,'');
                                // mascara = mascara.replace(/[,]/g,'');
                                // mascara = mascara.replace(/[.]/g,'');
                                // mascara = mascara.replace(/[<]/g,'');
                                // mascara = mascara.replace(/[>]/g,'');
                                // mascara = mascara.replace(/[--]/g,'');
                                // mascara = mascara.replace(/[|]/g,'');
                                $(this).val(mascara);
                                if(generos.includes($(this).val()))
                                {
                                    $(this).closest("div").find("span").css("opacity","0");
                                    $(this).closest("div").css({
                                        "position":"relative",
                                        "border-bottom":"2px groove white",
                                        "top":"0",
                                        "left":"0"
                                    });
                                    $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"initial","top":"0","transition":"1s"});
                                        }
                                   });
                                }
                                else
                                {
                                    $(this).closest("div").find("span").css("opacity","1");
                                    $(this).closest("div").css({
                                        "position":"relative",
                                        "border-bottom":"2px groove red",
                                        "top":"0",
                                        "left":"0"
                                    });
                                    $(this).closest("div").closest("form").find("div").eq($(this).closest("div").closest("form").find("div").length - 1).find("button").each(function(index , elemento){
                                        if($(elemento).attr("type") === "submit")
                                        {
                                            $(elemento).css({"position":"absolute","top":"-100px","transition":"1s"});
                                        }
                                    });
                                }
                                
                            });
                            var datalist = $("<datalist>").attr("id","datalist-generos-editavel-autor");
                            var generos = [
                               'Ficção','Não-Ficção','Poesia','Drama','Conto','Infantojuvenil','Novela Gráfica','Humor','Guias de Viagem','Ensaios',
                            ];
                            for (let index = 0; index < generos.length; index++) {
                                var options = $("<option>").attr("value",generos[index]).text(generos[index]);
                                datalist.append(options);   
                            }
                            $(elemento).attr("list","datalist-generos-editavel-autor");
                            $(elemento).closest("div").append(datalist);
                        }
                        if($(elemento).attr("id") === "input-nivel_acessos")
                        {
                            $(elemento).prop("disabled",true);
                        }
                    });
                })),
                $("<div>").attr("id","elemento-perfil-id-botão-editavel-modificador").css({"width":"100%","height":"100%","position":"absolute","top":"50px","left":"0","display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"nowrap","flex-direction":"row","transition":"1s"}).append(
                    $("<button>").attr("type","submit").attr("id","button-salvar-novas-informacoes-do-contribuinte").css({"width":"200px","height":"40px","text-align":"center","font-family":"'Montserrat',sans-serif","background":"transparent","border":"2px groove white","border-radius":"10px","color":"white","cursor":"pointer"}).on("mouseenter",function(){$(this).css({"transition":"1s","color":"#333","background":"white","border":"none"});}).on("mouseleave",function(){$(this).css({"transition":"1s","color":"white","background":"transparent","border":"2px groove white"});}).text("Salvar Novas Informações"),
                    $("<button>").attr("type","button").css({"width":"200px","height":"40px","text-align":"center","font-family":"'Montserrat',sans-serif","background":"transparent","border":"2px groove red","border-radius":"10px","color":"red","cursor":"pointer"}).on("mouseenter",function(){$(this).css({"transition":"1s","border":"none","color":"white","background":"red"});}).on("mouseleave",function(){$(this).css({"transition":"1s","border":"2px groove red","color":"red","background":"transparent"});}).on("click",function(){
                        $(this).closest("div").css({"transition":"1s","top":"50px"}); $("#elemento-perfil-id-botão-editavel-ativador").css({"transition":"1s","top":"0"}); $("#file-edited-autor-photo-perfil").prop("disabled",false); $("#Label-alteravel-colab").find("img").attr("src",$(".link-photo").find("img").attr("src")); 
                        $(".elemento-input-form-editavel").each(function(index , elemento){
                            $(elemento).prop("disabled",true);
                            $(elemento).closest("div").css("border-bottom","2px groove white");
                            $(elemento).closest("div").find("span").css("opacity","0");
                            $(elemento).val(ProfilePageArrayDadosValues[index]);
                        });
                    }).text("Cancelar Edição de Dados")
                )
            )
        );
        form.on("submit",function(event){event.preventDefault();});
        
    }
}
$("#Label-alteravel-colab").append(
    $("<img>").addClass("imagem-perfil-editavel").attr("id","imagem-colab-perfil").attr("src",$(".link-photo").find("img").attr("src")).css({"width":"100%","height":"100%","border-radius":"50%"}),
    $("<input>").attr("type","file").attr("name","Perfil-Photo-editavel-autor").attr("id","file-edited-autor-photo-perfil").css("display","none")
);
$("#file-edited-autor-photo-perfil").on("change",function(event){
    $(this).closest("#Label-alteravel-colab").find("img").attr("src",URL.createObjectURL(event.target.files[0]));
    var newForm = new FormData();
    newForm.append('foto',event.target.files[0]);
    axios.post(`/FotodePerfilDoContribuinte/${atob($("#IdContent").attr("content")).charCodeAt(0)}`,newForm ,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then(response => {
        if(response.data.status === 'success')
        {
            $(".link-photo").find("img").attr("src",URL.createObjectURL(event.target.files[0]));
        }
    }).catch(error => {
        console.log(error);
    });
});
// Edição/Postagem de Descrição do Autor 
var DescripityEditColab = $("<div>").css({"width":"100%","max-width":"90%","height":"700px","position":"relative","top":"0","left":"0","overflow-y":"hidden","overflow-x":"hidden","transition":"1s","margin":"20px auto"});
var elementosStylesBordersAndsCircles = [];
var elementosStylesBordersAndsCirclesStyles = [
    {"width":"100%","height":"10px","background":"white","position":"absolute","top":"-1%","left":"0","z-index":"2","transition":"2s"},
    {"width":"100%","height":"10px","background":"white","position":"absolute","bottom":"-1%","right":"0","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"0","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"-100%","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"-4%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"-4%","z-index":"2","transition":"2s"},
    {"width":"500px","height":"500px","border-radius":"50%","position":"absolute","top":"-10%","left":"-10%","cursor":"pointer","z-index":"1","transition":"2s"},
    {"position":"absolute","top":"0","left":"20%","width":"80%","height":"100%","transition":"2s"}
];
var elementosStylesBordersAndsCirclesClasses = [
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-image-absolute-label',
    'elemento-class-conten-input-absolute-infos'
];
var elementosStylesBordersAndsCirclesIds = [
    'barra-superior',
    'barra-inferior',
    'barra-direta',
    'barra-esquerda',
    'circle-superior-right',
    'circle-superior-left',
    'circle-inferior-right',
    'circle-inferior-left'
];
for (let index = 0; index < 8; index++) {
    elementosStylesBordersAndsCircles.push($("<div>").addClass(elementosStylesBordersAndsCirclesClasses[index]).attr("id",elementosStylesBordersAndsCirclesIds[index]).css(elementosStylesBordersAndsCirclesStyles[index]));
}
for (let index = 0; index < elementosStylesBordersAndsCircles.length; index++) {
    DescripityEditColab.append(elementosStylesBordersAndsCircles[index]);
}
$("#Page-4").append(DescripityEditColab);
DescripityEditColab.append(
    $("<form>").addClass("teste-closest").attr("method","POST").attr("action","#").css({"position":"relative","top":"0","left":"0","width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).on("submit",function(event){event.preventDefault();}).append(
        $("<div>").css({"position":"absolute","top":"-10%","left":"-10%","background":"rgba(0,0,0,0.7)","width":"500px","height":"500px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row","overflow":"hidden"}).append(
            $("<i>").addClass("fa-solid fa-user").attr("id","elemento-icone-user-style-descripty").css({"color":"white","font-size":"500px"})
        ),
        $("<div>").css({"position":"relative","top":"0","left":"40%","width":"60%","height":"100%"}).append(
            $("<span>").append(
                $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),
                $("<p>").text("Sua Descrição").css({"font-family":"stencilla","font-size":"20px","margin":"0"}),
                $("<img>").attr("src","../../img/welcome/Logo.png").css({"width":"40px","height":"40px"}),            
            ).css({"width":"100%","max-width":"80%","display":"flex","align-items":"center","justify-content":"space-evenly","flex-wrap":"nowrap","flex-direction":"row","border-bottom":"2px groove white","margin":"20px auto"}),
            $("<textarea>").addClass("elemento-textarea-form-description").attr("id","elemento-textarea-form-descrition-id").attr("name","descrição-do-autor").css({"width":"100%","max-width":"98%","padding":"0","height":"70%","border":"none","background":"transparent","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","resize":"none"}).attr("placeholder","Insira uma Descrição Breve ou Extensa de suas Intensões ao se Tornar Colaborador com o BookNest").on("input",function(){
                var mascara = $(this).val();
                mascara = mascara.replace(/[0-9]/g,'');
                mascara = mascara.replace(/[0-9]/g,'');
                mascara = mascara.replace(/[*]/g,'');
                mascara = mascara.replace(/[+]/g,'');
                mascara = mascara.replace(/[-]/g,'');
                mascara = mascara.replace(/[_]/g,'');
                mascara = mascara.replace(/[(]/g,'');
                mascara = mascara.replace(/[)]/g,'');
                mascara = mascara.replace(/[\[\]]/g,'');
                mascara = mascara.replace(/[=]/g,'');
                mascara = mascara.replace(/[§]/g,'');
                mascara = mascara.replace(/[º]/g,'');
                mascara = mascara.replace(/[{]/g,'');
                mascara = mascara.replace(/[}]/g,'');
                mascara = mascara.replace(/[:]/g,'');
                mascara = mascara.replace(/[;]/g,'');
                mascara = mascara.replace(/[ª]/g,'');
                mascara = mascara.replace(/[&]/g,'');
                mascara = mascara.replace(/[¨]/g,'');
                mascara = mascara.replace(/[¬]/g,'');
                mascara = mascara.replace(/[%]/g,'');
                mascara = mascara.replace(/[¢]/g,'');
                mascara = mascara.replace(/[$]/g,'');
                mascara = mascara.replace(/[£]/g,'');
                mascara = mascara.replace(/[³]/g,'');
                mascara = mascara.replace(/[#]/g,'');
                mascara = mascara.replace(/[²]/g,'');
                mascara = mascara.replace(/[@]/g,'');
                mascara = mascara.replace(/[¹]/g,'');
                mascara = mascara.replace(/[!]/g,'');
                mascara = mascara.replace(/[""]/g,'');
                mascara = mascara.replace(/['']/g,'');
                mascara = mascara.replace(/[<]/g,'');
                mascara = mascara.replace(/[>]/g,'');
                mascara = mascara.replace(/[--]/g,'');
                mascara = mascara.replace(/[|]/g,'');
                mascara = mascara.slice(0, 7500);
                $(this).val(mascara);
                if($(this).val() === '')
                {
                    $(this).css({"text-decoration":"none"});
                    $(this).closest("div").find("#elemento-view-chars-inserts-number").text("7500/7500 caracteres restantes");
                }
                else
                {
                    $(this).css({"text-decoration":"underline","text-transform":"capitalize"});
                    var limite = 7500;
                    var mostrar = $(this).closest("div").find("#elemento-view-chars-inserts-number");
                    var calculo = Math.round(limite - $(this).val().length);
                    mostrar.text(limite+" / "+calculo+" caracteres restantes");
                }
                
            }),
            $("<div>").css({"width":"100%","max-width":"90%","color":"gray","text-align":"right","margin":"0 auto"}).attr("id","elemento-view-chars-inserts-number").text("7500/7500 caracteres restantes"),
            $("<div>").css({"width":"100%","height":"20%","max-height":"10%","display":"flex","align-items":"center","justify-content":"space-evenly","flex-wrap":"nowrap","flex-direction":"row","margin":"auto 0"}).append(
                $("<div>").append($("<input>").css({"width":"200px","height":"40px","border":"2px groove red","border-radius":"10px","background":"transparent","color":"red","font-family":"'Montserrat',sans-serif","text-align":"center","cursor":"pointer"}).attr("type","reset").on("mouseenter",function(){$(this).css({"transition":"1s","color":"white","background":"red","border":"none"});}).on("mouseleave",function(){$(this).css({"transition":"1s","color":"red","background":"transparent","border":"2px groove red"});}).on("click",function(){$(this).closest("form").find("textarea").css("text-decoration","none"); $(this).closest("form").find("#elemento-view-chars-inserts-number").text("7500/7500 caracteres restantes");})),
                $("<div>").append($("<input>").attr("id","enviar-descricao-do-contribuinte").css({"width":"200px","height":"40px","border":"2px groove rgb(0,255,0)","border-radius":"10px","background":"transparent","color":"rgb(0,255,0)","font-family":"'Montserrat',sans-serif","text-align":"center","cursor":"pointer"}).attr("type","submit").on("input",function(event){event.preventDefault();}).on("mouseenter",function(){$(this).css({"transition":"1s","color":"white","background":"rgb(0,255,0)","border":"none"});}).on("mouseleave",function(){$(this).css({"transition":"1s","color":"rgb(0,255,0)","background":"transparent","border":"2px groove rgb(0,255,0)"});}))
            )
        )
    ).on("submit",function(event){
        event.preventDefault();
    })
);
var ElementosExcluirConta = [];
var ElementosExcluirContaStyles = [
    {"width":"100%","height":"10px","background":"white","position":"absolute","top":"-1%","left":"0","z-index":"2","transition":"2s"},
    {"width":"100%","height":"10px","background":"white","position":"absolute","bottom":"-1%","right":"0","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"0","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"-100%","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"-4%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"-4%","z-index":"2","transition":"2s"},
    {"width":"500px","height":"500px","border-radius":"50%","position":"absolute","top":"-10%","left":"-10%","cursor":"pointer","z-index":"1","transition":"2s"},
    {"position":"absolute","top":"0","left":"20%","width":"80%","height":"100%","transition":"2s"}
];
var ElementosExcluirContaClasses = [
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-image-absolute-label',
    'elemento-class-conten-input-absolute-infos'
];
var ElementosExcluirContaIds = [
    'barra-superior',
    'barra-inferior',
    'barra-direta',
    'barra-esquerda',
    'circle-superior-right',
    'circle-superior-left',
    'circle-inferior-right',
    'circle-inferior-left'
];
var ExcluirConta = $("<div>").addClass("excluir-conta-do-colaborador-container").attr("id","excluir-conta-do-colaborador-container").css({
    "width":"100%",
    "max-width":"90%",
    "height":"700px",
    "position":"relative",
    "top":"0",
    "left":"0",
    "transition":"1s",
    "overflow-y":"hidden",
    "overflow-x":"hidden",
    "margin":"20px auto"
});
for (let index = 0; index < 8; index++) {
    ElementosExcluirConta.push($("<div>").addClass(ElementosExcluirContaClasses[index]).attr("id",ElementosExcluirContaIds[index]).css(ElementosExcluirContaStyles[index]));
    ExcluirConta.append(ElementosExcluirConta[index]);
}
$("#Page-4").append(ExcluirConta);
ExcluirConta.append(
    $("<div>").addClass("elemento-container-first-delete-conta-colaborador").attr("id","elemento-container-first-delete-conta-colaborador").css({
        "position":"absolute",
        "top":"-10%",
        "left":"-10%",
        "width":"500px",
        "height":"500px",
        "border-radius":"50%",
        "display":"flex",
        "align-items":"center",
        "justify-content":"center",
        "flex-wrap":"nowrap",
        "flex-direction":"row",
        "overflow":"hidden",
        "background":"black"
    }).append(
        $("<i>").addClass("fa-solid fa-trash").attr("id","icone-dash").css({
            "font-size":"500px",
            "color":"red"
        })
    ),
    $("<div>").addClass("elemento-container-secound-delete-conta-colaborador").attr("id","elemento-container-secound-delete-conta-colaborador").css({
        "position":"absolute",
        "top":"0",
        "left":"40%",
        "width":"60%",
        "height":"100%"
    }).append(
        $("<form>").attr("method","POST").attr("action","#").css({
            "width":"100%",
            "height":"100%"
        }).append(
            $("<div>").css({
                "height":"100%",
                "display":"flex",
                "align-items":"center",
                "justify-content":"space-evenly",
                "flex-wrap":"nowrap",
                "flex-direction":"column"
            }).append(
                $("<span>").append(
                    $("<img>").attr("src","../../img/Welcome/Logo.png").css({"width":"50px","height":"50px"}),
                    $("<p>").css({"font-family":"'stencilla', sans-serif","font-size":"20px","padding":"0","margin":"0"}).text("Excluir Minha Conta"),
                    $("<img>").attr("src","../../img/Welcome/Logo.png").css({"width":"50px","height":"50px"})
                ).css({
                    "width":"100%",
                    "max-width":"90%",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"space-evenly",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "border-bottom":"2px groove white",
                    "margin":"20px auto"
                }),
                $("<div>").css({
                    "height":"100%",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"space-between",
                    "flex-wrap":"nowrap",
                    "flex-direction":"column"
                }).append(
                    $("<span>").css({
                        "height":"100%",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"space-evenly",
                        "flex-wrap":"nowrap",
                        "flex-direction":"column"
                    }).append(
                        $("<b>").text("Aviso Importante sobre a Exclusão da Conta"),
                        $("<p>").text("Ao solicitar a exclusão de sua conta no BookNest, queremos informá-lo de que este processo é irreversível. Após a exclusão, você não poderá retornar, nem mesmo como usuário do site, e todos os dados associados à sua conta serão permanentemente apagados, incluindo históricos de contribuição, preferências e interações."),
                        $("<p>").text("Por favor, tenha certeza de que deseja continuar, pois não será possível recuperar sua conta ou qualquer informação relacionada a ela após a exclusão."),
                    ),
                    $("<div>").css({
                        "width":"100%",
                        "height":"50px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row",
                        "padding":"20px"
                    }).append(
                        $("<button>").addClass("elemento-final-actions").attr("id","elemento-final-actions").attr("type","button").css({
                            "width":"200px",
                            "height":"40px",
                            "border":"2px groove red",
                            "border-radius":"20px",
                            "color":"red",
                            "text-align":"center",
                            "font-family":"'Montserrat',sans-serif",
                            "background":"transparent",
                            "cursor":"pointer",
                            "transition":"1s"
                        }).text("Excluir Minha Conta").on("click",function(){
                            $("body").append(
                                $("<div>").addClass("overlay").attr("id","overlay").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}).on("click",function(){
                                    $(this).remove();
                                    $("#modal").remove();
                                }),
                                $("<div>").addClass("modal").attr("id","modal").css({"position":"fixed","top":"50%","left":"50%","transform":"translate(-50%,-50%)","width":"60%","height":"70%","background":"#333","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"wrap","flex-direction":"row","border-radius":"10px","z-index":"12"}).append(
                                    $("<div>").addClass("line").attr("id","line").css({"width":"95%","height":"95%","background":"white","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                        $("<div>").addClass("index").css({"width":"95%","height":"95%","background":"#333","color":"white","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","position":"relative","top":"0","left":"0","border-radius":"10px"}).attr("id","index").append(
                                            $("<div>").addClass("title").css({"position":"absolute","top":"-14px","left":"50%","transform":"translate(-50%,0px)","background":"#333"}).attr("id","title").append($("<p>").css({"padding":"0","margin":"0"}).text("Alerta !!!")),
                                            $("<div>").addClass("content").css({"width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row"}).attr("id","content").append(
                                                $("<div>").addClass("imagem-comunicado").css({"width":"50%","height":"100%"}).attr("id","imagem-comunicado-id").append($("<img>").attr("src","../../img/Colaborador/iconAlerta-Photoroom.png").css({"width":"100%","height":"100%"})),
                                                $("<div>").addClass("textos-comunicado").css({"width":"50%","height":"100%"}).attr("id","textos-comunicado-id").append(
                                                    $("<span>").css({"height":"80%","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}).text("Tem certeza que Deseja Excluir sua Conta ?"),
                                                    $("<form>").attr("method","POST").attr("action","#").css({"padding":"10px","text-align":"center"}).append(
                                                        $("<button>").css({
                                                            "width":"200px",
                                                            "height":"40px",
                                                            "border":"2px groove red",
                                                            "border-radius":"20px",
                                                            "color":"red",
                                                            "text-align":"center",
                                                            "font-family":"'Montserrat',sans-serif",
                                                            "background":"transparent",
                                                            "cursor":"pointer",
                                                            "transition":"1s"
                                                        }).attr("type","submit").on("mouseenter",function(){
                                                            $(this).css({
                                                                "transition":"1s",
                                                                "border":"none",
                                                                "background":"red",
                                                                "color":"white"
                                                            })
                                                        }).on("mouseleave",function(){
                                                            $(this).css({
                                                                "transition":"1s",
                                                                "border":"2px groove red",
                                                                "background":"transparent",
                                                                "color":"red"
                                                            })
                                                        }).text("Excluir Minha Conta")
                                                    ).on("submit",function(event){event.preventDefault();})
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        }).on("mouseenter",function(){
                            $(this).css({
                                "transition":"1s",
                                "border":"none",
                                "background":"red",
                                "color":"white"
                            })
                        }).on("mouseleave",function(){
                            $(this).css({
                                "transition":"1s",
                                "border":"2px groove red",
                                "background":"transparent",
                                "color":"red"
                            })
                        })
                    )
                )       
            )
        ).on("submit",function(event){event.preventDefault();})
    )
);
var TrocarNivelDeAcessos = $("<div>").addClass("elemento-troca-de-nivel-acessos").attr("id","elemento-troca-de-nivel-acessos").css({"width":"100%","max-width":"90%","height":"700px","position":"relative","top":"0","left":"0","overflow-y":"hidden","overflow-x":"hidden","transition":"1s","margin":"20px auto"});;
var ElementosTrocaDeNivelDeAcessosContribuinteParaUsuario = [];
var ElementosTrocaDeNivelDeAcessosContribuinteParaUsuarioStyles = [
    {"width":"100%","height":"10px","background":"white","position":"absolute","top":"-1%","left":"0","z-index":"2","transition":"2s"},
    {"width":"100%","height":"10px","background":"white","position":"absolute","bottom":"-1%","right":"0","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"0","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"200%","height":"10px","background":"white","position":"absolute","top":"0","left":"-100%","transform":"rotate(90deg)","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","top":"-10%","left":"-4%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"95%","z-index":"2","transition":"2s"},
    {"width":"100px","height":"100px","background":"white","border-radius":"50%","position":"absolute","bottom":"-10%","right":"-4%","z-index":"2","transition":"2s"},
    {"width":"500px","height":"500px","border-radius":"50%","position":"absolute","top":"-10%","left":"-10%","cursor":"pointer","z-index":"1","transition":"2s"},
    {"position":"absolute","top":"0","left":"20%","width":"80%","height":"100%","transition":"2s"}
];
var ElementosTrocaDeNivelDeAcessosContribuinteParaUsuarioClasses = [
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-barra-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-style-absolute-white',
    'elemento-class-circle-image-absolute-label',
    'elemento-class-conten-input-absolute-infos'
];
var ElementosTrocaDeNivelDeAcessosContribuinteParaUsuarioIds = [
    'barra-superior',
    'barra-inferior',
    'barra-direta',
    'barra-esquerda',
    'circle-superior-right',
    'circle-superior-left',
    'circle-inferior-right',
    'circle-inferior-left'
];
for (let index = 0; index < 8; index++) {
    ElementosTrocaDeNivelDeAcessosContribuinteParaUsuario.push($("<div>").addClass(ElementosTrocaDeNivelDeAcessosContribuinteParaUsuarioClasses[index]).attr("id",ElementosTrocaDeNivelDeAcessosContribuinteParaUsuarioIds[index]).css(ElementosTrocaDeNivelDeAcessosContribuinteParaUsuarioStyles[index]));
    TrocarNivelDeAcessos.append(
        ElementosTrocaDeNivelDeAcessosContribuinteParaUsuario[index]
    );
}
$("#Page-4").append(TrocarNivelDeAcessos);
TrocarNivelDeAcessos.append(
    $("<div>").css({
        "position":"absolute",
        "top":"-10%",
        "left":"-10%",
        "width":"500px",
        "height":"500px",
        "border-radius":"50%",
        "display":"flex",
        "align-items":"center",
        "justify-content":"center",
        "flex-direction":"row",
        "flex-wrap":"nowrap",
        "overflow-x":"hidden",
        "overflow-y":"hidden",
        "background":"black"
    }).append(
        $("<div>").append(
            $("<i>").addClass("fa-solid fa-repeat").css({"font-size":"500px","color":"blue"})
        )
    ),
    $("<div>").css({
        "position":"absolute",
        "top":"0",
        "left":"30%",
        "width":"70%",
        "height":"100%"
    }).append(
        $("<span>").css({
            "width":"100%",
            "max-width":"90%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "border-bottom":"2px groove white",
            "margin":"10px auto"
        }).append(
            $("<img>").attr("src","../../img/Welcome/Logo.png").css({"width":"50px","height":"50px"}),
            $("<p>").css({"font-family":"stencilla , sans-serif","font-size":"20px","padding":"0","margin":"0"}).text("Nivel de Acesso no BookNest"),
            $("<img>").attr("src","../../img/Welcome/Logo.png").css({"width":"50px","height":"50px"})
        ),
        $("<div>").css({
            "width":"100%",
            "height":"100%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-evenly",
            "flex-wrap":"nowrap",
            "flex-direction":"column"
        }).append(
            $("<ul>").css({
                "width":"100%",
                "height":"60%",
                "display":"flex",
                "align-items":"center",
                "justify-content":"space-evenly",
                "flex-wrap":"nowrap",
                "flex-direction":"column"
            }).append(
                $("<li>").text("Cancelará sua Sessão Como Colaborador"),
                $("<li>").text("Reiniciará sua Página Atual"),
                $("<li>").text("Redirecionamento de Pagina e Permissões"),
                $("<li>").text("Login como Usuário"),
                $("<li>").text("Poderá Voltar a Hora que Quiser em Configurações no Perfil do Usuario , da Sessão Usuário")
            ),
            $("<div>").css("padding","20px").append(
                $("<button>").text("Trocar de Colaborador BookNest para Usuario BookNest").css({
                    "width":"400px",
                    "height":"40px",
                    "padding":"5px",
                    "border":"2px groove blue",
                    "color":"blue",
                    "font-family":"'Montserrat',sans-serif",
                    "background":"transparent",
                    "border-radius":"10px",
                    "cursor":"pointer",
                    "transition":"1s"
                }).on("mouseenter",function(){
                    $(this).css({
                        "transition":"1s",
                        "background":"blue",
                        "color":"white",
                        "border":"none"
                    })
                }).on("mouseleave",function(){
                    $(this).css({
                        "transition":"1s",
                        "background":"transparent",
                        "color":"blue",
                        "border":"2px groove blue"
                    })
                }).on("click",function(){
                    $("body").append(
                        $("<div>").addClass("overlay").attr("id","overlay").css({
                            "position":"fixed",
                            "top":"0",
                            "left":"0",
                            "width":"100%",
                            "height":"100%",
                            "background":"rgba(0,0,0,0.7)",
                            "z-index":"11",
                            "cursor":"pointer",
                        }).on("click",function(){
                            $(this).remove();
                            $("#formulario-modal-overlay").remove();
                        }),
                        $("<form>").attr("id","formulario-modal-overlay").attr("method","POST").attr("action","/TrocarNivelDeAcessos/"+atob($("#IdContent").attr("content")).charCodeAt(0)).append(
                            $("<input>",{
                                type: 'hidden',
                                name: '_token',
                                value: $("#CsrfToken-1").attr("content")
                            }),
                            $("<div>").addClass("modal").attr("id","modal").css({
                                "position":"fixed",
                                "top":"50%",
                                "left":"50%",
                                "transform":"translate(-50%,-50%)",
                                "width":"60%",
                                "height":"70%",
                                "background":"#333",
                                "border-radius":"10px",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"center",
                                "flex-wrap":"nowrap",
                                "flex-direction":"row",
                                "z-index":"12"
                            }).append(
                                $("<div>").addClass("line").attr("id","line").css({
                                    "width":"95%",
                                    "height":"95%",
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"center",
                                    "background":"white",
                                    "border-radius":"10px"
                                }).append(
                                    $("<div>").addClass("index").attr("id","index").css({
                                        "position":"relative",
                                        "top":"0",
                                        "left":"0",
                                        "width":"95%",
                                        "height":"95%",
                                        "border-radius":"10px",
                                        "background":"#333",
                                        "display":"flex",
                                        "align-items":"center",
                                        "justify-content":"space-between",
                                        "flex-wrap":"nowrap",
                                        "flex-direction":"row"
                                    }).append(
                                        $("<div>").addClass("title").attr("id","title").css({
                                            "position":"absolute",
                                            "top":"-14px",
                                            "left":"50%",
                                            "transform":"translate(-50%,0)",
                                            "background":"#333",
                                            "color":"white",
                                        }).append(
                                            $("<p>").addClass("paragrafo").attr("id","paragrafo").text("Aviso de Mudança de Nivel de Acesso").css({
                                                "padding":"0",
                                                "margin":"0"
                                            })
                                        ),
                                        $("<div>").css({
                                            "width":"50%",
                                            "height":"100%",
                                            "display":"flex",
                                            "align-items":"center",
                                            "justify-content":"center",
                                            "flex-wrap":"nowrap",
                                            "flex-direction":"row"
                                        }).append(
                                            $("<i>").addClass("fa-solid fa-repeat").attr("id","icone-de-popup").css({"font-size":"300px","color":"blue"})
                                        ),
                                        $("<div>").css({
                                            "width":"50%",
                                            "height":"100%",
                                            "display":"flex",
                                            "align-items":"center",
                                            "justify-content":"center",
                                            "flex-wrap":"nowrap",
                                            "flex-direction":"column",
                                        }).append(
                                            $("<b>").text("Troca de Nivel de Acessos").css("padding","10px"),
                                            $("<span>").css({"width":"100%","height":"100%"}).append(
                                                $("<ul>").css({
                                                    "width":"100%",
                                                    "height":"90%",
                                                    "display":"flex",
                                                    "align-items":"center",
                                                    "justify-content":"space-evenly",
                                                    "flex-wrap":"nowrap",
                                                    "flex-direction":"column",
                                                    "padding":"0",
                                                    "margin":"0"
                                                }).append(
                                                    $("<li>").text("Ao clicar em 'Trocar de Nivel de Acessos' , você estará trocando de Nivel de Acessos de Colaborador-BookNest -> Usuario-BookNest"),
                                                    $("<li>").text("Você não poderá postar postagens como Colaborador-BookNest , pois terá o Nivel de Acesso de usuario"),
                                                    $("<li>").text("Você poderá voltar como Colaborador-BookNest , em Configurações de Perfil do Usuário , caso já tenha sido colaborador"),
                                                    $("<li>").text("Você está ciente que de que sairá dessa página e continuara a seguir como usuario")
                                                )
                                            ),
                                            $("<div>").css({
                                                "width":"100%",
                                                "height":"50px",
                                                "display":"flex",
                                                "align-items":"center",
                                                "justify-content":"center",
                                                "flex-wrap":"nowrap",
                                                "flex-direction":"row",
                                                "align-items":"center"
                                            }).append(
                                                $("<button>").attr("type","submit").css({
                                                    "width":"400px",
                                                    "height":"40px",
                                                    "border":"2px groove blue",
                                                    "color":"blue",
                                                    "background":"transparent",
                                                    "text-align":"center",
                                                    "font-family":"'Montserrat',sans-serif",
                                                    "cursor":"pointer",
                                                    "transition":"1s"
                                                }).text("Trocar Nivel de Acessos Colaborador para Usuario").on("mouseenter",function(){
                                                    $(this).css({
                                                        "transition":"1s",
                                                        "background":"blue",
                                                        "color":"white",
                                                        "border":"none"
                                                    })
                                                }).on("mouseleave",function(){
                                                    $(this).css({
                                                        "transition":"1s",
                                                        "background":"transparent",
                                                        "color":"blue",
                                                        "border":"2px groove blue"
                                                    })
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                })
            )
        )
    )
)

// Formulario Editar Dados do Perfil do Contribuinte AJAX
$(document).ready(function(){
    $("#button-salvar-novas-informacoes-do-contribuinte").on("click",function(){
        var NovosDadosUser = {};
        var formData = new FormData();
        formData.append('_token',$("#CsrfToken-2").attr("content"));
        formData.append('nome',$("#input-nome").val());
        formData.append('email',$("#input-email").val());
        formData.append('data',$("#input-data").val());
        formData.append('genero',$("#input-genero").val());

        $.ajax({
            // url
            url: `/EditarDadosContribuinte/${atob($("#IdContent").attr("content")).charCodeAt(0)}`,
            // type
            type: "POST",
            // data
            data: formData,
            // contentType
            contentType: false,
            // processData
            processData: false,
            // success
            success: function(response)
            {
                if(response.status === 'success')
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
                    
                    // se deu Sucesso faz o seguinte
                    var Dados = ['input-nome','input-email','input-data','input-genero'];
                    for (let index = 0; index < 1; index++) {
                        NovosDadosUser[$(`#${Dados[index]}`).attr("value")] = $(`#${Dados[index]}`).val();
                    }
                    $(".etinerario-name-colaborador").find("p").text($("#input-nome").val());
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
            error: function(response)
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
                if(error.responseJSON.error.length > 0)
                {
                    $("body").append(
                        $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                        $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                            $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                            $("<div>").append(
                                $("<span>").attr("id","elemento-mensagem-error-globals").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
                    var GlobalErrors = error.responseJSON.error;
                    Object.values(GlobalErrors).forEach(function(value){
                        var p = $("<p>").text(value);
                        $("#elemento-mensagem-error-globals").append(p);
                    });
                }
            }
        });
    });
});
// Formulario Enviar Descrição do Perfil do Contribuinte AJAX
// |---> ATUALIZAÇÃO <---|
// -> UTILIZAÇÃO DE AXIOS PARA MELHORAÇÃO , OTIMIZAÇÃO E SEGURANÇA DA REQUISIÇÃO DO CODIGO
$(document).ready(function(){
    $("#enviar-descricao-do-contribuinte").on("click",function(){
        // estrutura da requisição AXIOS
        // axios.type('/caminho url/',{
        //      dado1: 'valor1',
        //      dado2: 'valor2',
        //      dado3: 'valor3',
        //      dado4: 'valor4'
        // })
        // estrutura da resposta:
        // .then(response => {
        //  console.log(response.data); // response.data , essa é a estrutura , necessaria sem alterar nada pois devolve o valor
        // }).catch(error => {
        //  console.log(error);
        // });
        // |->> OBSERVAÇÃO
        // |-> no Controller (Laravel)
        // |-> se tiver assim (return response()->json(['status' => 'success' , 'message' => 'sucesso']);
        // |-> para pegar esses dados é necessario usar response.data.status , e se no controller tiver assim:
        // |-> (return response()->json(['status' => 'success' , 'message' => 'sucesso' , 'dados' => ['nome' => 'João' , 'idade' => 30] ]));
        // |-> se quiser pegar o nome desse retorno como seria ?
        // |-> seria assim nesse caso aqui: response.data.dados.nome
        // |-> se quiser pegar o idade desse retorno como seria ? 
        // |-> seria assim nesse caso aqui: response.data.dados.idade
        axios.post(`/PostarDescricao/${atob($("#IdContent").attr("content")).charCodeAt(0)}`,{
            descricao: $("#elemento-textarea-form-descrition-id").val()
        }).then(response => {
            if(response.data.status === 'success')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.data.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
                setTimeout(()=>{
                    var texto = $("#elemento-textarea-form-descrition-id").val();
                    $(".text").text($("#elemento-textarea-form-descrition-id").val());
                    if(
                        $(".text").get(0).offsetHeight < $(".text").get(0).scrollHeight
                    )
                    {
                        // pixels por letras 
                        // pixelsTotal => letrasTotal
                        // X           => letrasTexto
                        // Cross Multiplications = (Multiplicação Cruzada)
                        var pixelsTotal = $(".text").get(0).offsetHeight;
                        var letrasTotal = $(".text").get(0).scrollHeight;
                        var letrasTexto = texto.length;
                        var X = Math.round((pixelsTotal * letrasTexto)/letrasTotal);
                        var pixels = X;
                        var textoAserRetirado = Math.round(letrasTexto - pixels);
                        $(".text").text($(".text").text().slice(0,-textoAserRetirado));
                        $(".text").append(
                            $("<a>").attr("href","#").text("  Ler Mais...").css({
                                "text-decoration":"none",
                                "color":"white",
                                "font-weight":"700"
                            }).on("click",(event)=>{
                                event.preventDefault();
                                $("body").append(
                                    $("<div>").addClass("overlay").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"10","cursor":"pointer"}).on("click",()=>{(this).remove(); $(".modal").remove();}),
                                    $("<div>").addClass("modal").css({"position":"fixed","top":"50%","left":"50%","width":"60%","height":"60%","transform":"translate( -50% , -50%)","border-radius":"20px ","background":"#333 ","display":"flex ","align-items":"center ","padding":"10px","justify-content":"center","z-index":"11"}).append(
                                        $("<div>").addClass("popup").css({"width":"98% ","height":"98% ","background":"white ","display":"flex ","align-items":"center","justify-content":"center","border-radius":"20px"}).append(
                                            $("<div>").addClass("line").css({"width":"98%","height":"98% ","background":"#333 ","display":"flex ","align-items":"center ","justify-content":"center ","border-radius":"20px"}).append(
                                                $("<div>").addClass("index").css({"width":"100% ","height":"100% ","padding":"10px","border-radius":"20px"}).append(
                                                    $("<div>").addClass("content").css({"position":"relative ","top":"0 ","left":"0","width":"100%","height":"100% ","display":"flex ","align-items":"center ","justify-content":"space-between","flex-wrap":"nowrap ","flex-direction":"column "}).append(
                                                        $("<div>").addClass("title").css({"width":"100% ","height":"300px ","max-height":"300px ","overflow-y":"scroll ","overflow-x":"hidden ","padding":"10px"}).text(Texto),
                                                        $("<div>").addClass("components").css({"width":"100%","max-width":"22%","padding":"0px ","position":"absolute ","top":"-14px  ","display":"flex ","align-items":"center ","justify-content":"center","background":"#333","margin":"0 auto"}).text("Descrição Completa"),
                                                        $("<div>").addClass("close").css({"width":"100% ","display":"flex","align-items":"center","justify-content":"center ","flex-wrap":"nowrap","flex-direction":"row","margin":"0 auto"}).append(
                                                            $("<a>").attr("href","#").css({"text-decoration":"none","color":"white","cursor":"pointer"}).on("click",(event)=>{event.preventDefault(); $(".overlay").remove(); $(".modal").remove();}).text("Fechar PopUp")
                                                        )
                                                    )
                                                )
                                            )
                                            
                                        )
                                    )
                                )
                            })
                        );
                    }
                },2000)
            }
            else
            if(response.data.status === 'error')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.data.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
        }).catch(error => {
            $("body").append(
                $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                    $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                    $("<div>").append(
                        $("<span>").text(error).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
        });
    });
});
}