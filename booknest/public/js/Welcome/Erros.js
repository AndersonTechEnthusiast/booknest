// Linkando JS com PHP (Laravel)
// |------ Mostrando Erros vindo da Validação --------|
// primeiro Criamos uma Variavel que alocará os Dados (erros) escondido em um elemento HTML
errors = document.getElementById("hidden-erros").textContent;
let ConversionJS = JSON.parse(errors);
if(ConversionJS.length > 0)
{
    if(!document.querySelector(".mensagem-de-erros-Laravel-Js-background"))
    {
        var documento_erros = document.createElement("div");
        documento_erros.classList.add("mensagem-de-erros-Laravel-Js-background");
        document.body.appendChild(documento_erros);
        documento_erros.style.position = "absolute";
        documento_erros.style.top = "50%";
        documento_erros.style.left = "50%";
        documento_erros.style.transform = "translate(-50% , -50%)";
        documento_erros.style.width = "30%";
        documento_erros.style.height = "400px";
        documento_erros.style.background = "white";
        documento_erros.style.borderRadius = "10px";
        documento_erros.style.display = "flex";
        documento_erros.style.alignItems = "center";
        documento_erros.style.justifyContent = "center";
        documento_erros.style.flexWrap = "nowrap";
        documento_erros.style.zIndex = "2";
        var documento_erros_middle = document.createElement("div");
        documento_erros_middle.classList.add("mensagem-de-erros-Laravel-Js-Middle");
        documento_erros.appendChild(documento_erros_middle);
        documento_erros_middle.style.width = "98%";
        documento_erros_middle.style.height = "98%";
        documento_erros_middle.style.background = "#121212";
        documento_erros_middle.style.borderRadius = "10px";
        documento_erros_middle.style.display = "flex";
        documento_erros_middle.style.alignItems = "center";
        documento_erros_middle.style.justifyContent = "center";
        var documento_first = document.createElement("div");
        documento_first.classList.add("mensagem-de-erros-Laravel-Js");
        documento_erros_middle.appendChild(documento_first);
        documento_first.style.position = "relative";
        documento_first.style.top = "0";
        documento_first.style.left = "0";
        documento_first.style.width = "98%";
        documento_first.style.height = "98%";
        documento_first.style.background = "white";
        documento_first.style.borderRadius = "10px";
        documento_first.style.padding = "10px;"
        var title_Error_PopUp = document.createElement("div");
        var middle_Error_PopUp = document.createElement("div");
        var End_Error_PopUp = document.createElement("div");
        title_Error_PopUp.classList.add("titles-erros");
        middle_Error_PopUp.classList.add("middle-erros");
        End_Error_PopUp.classList.add("end-erros");
        documento_first.appendChild(title_Error_PopUp);
        documento_first.appendChild(middle_Error_PopUp);
        documento_first.appendChild(End_Error_PopUp);
        var text_title_Error_PopUp = document.createElement("p");
        text_title_Error_PopUp.classList.add("text-errors");
        title_Error_PopUp.appendChild(text_title_Error_PopUp);
        text_title_Error_PopUp.textContent = "Errors";
        text_title_Error_PopUp.style.background = "white";
        text_title_Error_PopUp.style.fontFamily = "Montserrat";
        text_title_Error_PopUp.style.textTransform = "uppercase";
        text_title_Error_PopUp.style.fontWeight = "700";
        title_Error_PopUp.style.position = "absolute";
        title_Error_PopUp.style.top = "-23px";
        title_Error_PopUp.style.left = "0";
        title_Error_PopUp.style.width = "100%";
        title_Error_PopUp.style.height = "50px";
        title_Error_PopUp.style.display = "flex";
        title_Error_PopUp.style.alignItems = "center";
        title_Error_PopUp.style.justifyContent = "center";
        var listas = document.createElement("ul");
        listas.classList.add("listas-de-erros");
        middle_Error_PopUp.appendChild(listas);
        middle_Error_PopUp.style.width = "100%";
        middle_Error_PopUp.style.maxWidth = "90%";
        ConversionJS.forEach(function(variavel){
            var options_listas = document.createElement("li");
            options_listas.textContent = variavel;
            options_listas.style.fontFamily = "Montserrat";
            listas.append(options_listas);
        });
        middle_Error_PopUp.appendChild(listas);
        middle_Error_PopUp.style.padding = "10px";
        middle_Error_PopUp.style.maxHeight = "90%";
        middle_Error_PopUp.style.overflowY = "auto";
        middle_Error_PopUp.style.overflowX = "auto";
        middle_Error_PopUp.style.border = "2px solid red";
        middle_Error_PopUp.style.borderRadius = "10px";
        middle_Error_PopUp.style.margin = "10px auto";
        var style_scrolling = document.createElement("style");
        style_scrolling.classList.add("estilização");
        style_scrolling.textContent = 
        ".middle-erros::-webkit-scrollbar{background: transparent; width: 5px;}" + 
        ".middle-erros::-webkit-scrollbar-track{background: transparent; width: 5px;}" +
        ".middle-erros::-webkit-scrollbar-thumb{background: red; width: 5px; border-radius: 10px;}";
        document.head.appendChild(style_scrolling);
        End_Error_PopUp.style.width = "100%";
        End_Error_PopUp.style.height = "10%";
        End_Error_PopUp.style.textAlign = "center";
        End_Error_PopUp.style.fontFamily = "Montserrat";
        End_Error_PopUp.style.fontWeight = "700";
        End_Error_PopUp.style.color = "red";
        End_Error_PopUp.textContent = ConversionJS.length + " Erros";
    }
    if(!document.querySelector(".overlay-mensagem-error-Laravel-Js"))
    {
        var Overlay_Error = document.createElement("div");
        Overlay_Error.classList.add(".overlay-mensagem-error-Laravel-Js");
        Overlay_Error.style.position = "fixed";
        Overlay_Error.style.top = "0";
        Overlay_Error.style.left = "0";
        Overlay_Error.style.width = "100%";
        Overlay_Error.style.height = "100%";
        Overlay_Error.style.background = "rgba(0,0,0,0.7)";
        Overlay_Error.style.cursor = "pointer";
        Overlay_Error.style.zIndex = "1";
        document.body.appendChild(Overlay_Error);
        Overlay_Error.addEventListener("click",function(){
            document.body.removeChild(this);
            document.body.removeChild(document.querySelector(".mensagem-de-erros-Laravel-Js-background"));
            document.head.removeChild(document.querySelector(".estilização"));
        });
    }
   
}
