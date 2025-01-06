document.querySelectorAll(".js-component-conteud-verify").forEach(function(variavel){
    // offsetWidth -> tamanho do elemento
    // scrollWidth -> tamanho do conteudo do elemento
    if(variavel.offsetWidth < variavel.scrollWidth)
    {
        variavel.closest(".colab-2-info").querySelector(".link-colab-learn-more").style.display = "block";
        variavel.closest(".colab-2-info").querySelector(".link-colab-learn-more").addEventListener("click",function(event){
            event.preventDefault();
            // criando elementos
            var Overlay_PopUp_Colab = document.createElement("div");
            var Modal_PopUp_Colab = document.createElement("div");
            var PopUpIndex_colab = document.createElement("div");
            var PopUp_line_white = document.createElement("div");
            var PopUp_line_colab = document.createElement("div");
            var PopUp_cont_total = document.createElement("div");
            var PopUp_cont_title = document.createElement("div");
            var PopUp_cont_texte = document.createElement("div");
            var PopUp_link_close = document.createElement("a");
            var PopUp_butt_close = document.createElement("button");
            // classificando elementos
            Overlay_PopUp_Colab.classList.add("overlay-colaborations");
            Modal_PopUp_Colab.classList.add("Modal-colaborations");
            PopUpIndex_colab.classList.add("popup-colab-index-learn-complete-description");
            PopUp_line_white.classList.add("popup-colab-index-learn-line-color-white");
            PopUp_line_colab.classList.add("popup-colab-index-learn-line-color-colab");
            PopUp_cont_total.classList.add("popup-colab-index-learn-contente-total");
            PopUp_cont_title.classList.add("popup-colab-index-learn-contente-title");
            PopUp_cont_texte.classList.add("popup-colab-index-learn-contente-texte");
            PopUp_link_close.classList.add("popup-colab-index-learn-link-close-popup");
            PopUp_butt_close.classList.add("popup-colab-index-learn-button-close-popup");
            // estrutura elemental
            Modal_PopUp_Colab.appendChild(PopUpIndex_colab);
            PopUpIndex_colab.appendChild(PopUp_line_white);
            PopUp_line_white.appendChild(PopUp_line_colab);
            PopUp_line_colab.appendChild(PopUp_cont_total);
            PopUp_cont_total.appendChild(PopUp_cont_title);
            PopUp_cont_total.appendChild(PopUp_cont_texte);
            PopUp_cont_total.appendChild(PopUp_link_close);
            PopUp_link_close.appendChild(PopUp_butt_close);
            // estilizando os elementos
            // Overlay
            Overlay_PopUp_Colab.style.position = "fixed";
            Overlay_PopUp_Colab.style.top = "0";
            Overlay_PopUp_Colab.style.left = "0";
            Overlay_PopUp_Colab.style.width = "100%";
            Overlay_PopUp_Colab.style.height = "100%";
            Overlay_PopUp_Colab.style.background = "rgba(0,0,0,0.7)";
            Overlay_PopUp_Colab.style.zIndex = "1";
            // Modal
            Modal_PopUp_Colab.style.position = "fixed";
            Modal_PopUp_Colab.style.top = "50%";
            Modal_PopUp_Colab.style.left = "50%";
            Modal_PopUp_Colab.style.transform = "translate(-50% , -50%)";
            Modal_PopUp_Colab.style.background = "transparent";
            Modal_PopUp_Colab.style.width = "700px";
            Modal_PopUp_Colab.style.height = "500px";
            Modal_PopUp_Colab.style.zIndex = "2";
            // PopUp 
            PopUpIndex_colab.style.width = "100%";
            PopUpIndex_colab.style.height = "100%";
            PopUpIndex_colab.style.background = "#333";
            PopUpIndex_colab.style.color = "white";
            PopUpIndex_colab.style.borderRadius = "20px";
            PopUpIndex_colab.style.display = "flex";
            PopUpIndex_colab.style.alignItems = "center";
            PopUpIndex_colab.style.justifyContent = "center";
            PopUpIndex_colab.style.flexWrap = "nowrap";
            // Line 
            PopUp_line_white.style.width = "98%";
            PopUp_line_white.style.height = "98%";
            PopUp_line_white.style.background = "white";
            PopUp_line_white.style.borderRadius = "20px";
            PopUp_line_white.style.display = "flex";
            PopUp_line_white.style.alignItems = "center";
            PopUp_line_white.style.justifyContent = "center";
            PopUp_line_white.style.flexWrap = "nowrap";
            // popup-colaborador
            PopUp_line_colab.style.width = "98%";
            PopUp_line_colab.style.height = "98%";
            PopUp_line_colab.style.background = "#333";
            PopUp_line_colab.style.borderRadius = "20px";
            PopUp_line_colab.style.display = "flex";
            PopUp_line_colab.style.alignItems = "center";
            PopUp_line_colab.style.justifyContent = "center";
            PopUp_line_colab.style.flexWrap = "nowrap";
            // content total
            PopUp_cont_total.style.width = "100%";
            PopUp_cont_total.style.height = "100%";
            PopUp_cont_total.style.padding = "10px";
            // informacoes
            PopUp_cont_title.style.width = "50%";
            PopUp_cont_title.style.display = "flex";
            PopUp_cont_title.style.alignItems = "center";
            PopUp_cont_title.style.justifyContent = "center";
            PopUp_cont_title.style.textDecoration = "underline";
            PopUp_cont_title.style.margin = "20px auto";
            PopUp_cont_texte.style.width = "100%";
            PopUp_cont_texte.style.maxHeight = "400px";
            PopUp_cont_texte.style.minHeight = "400px";
            PopUp_cont_texte.style.overflowY = "scroll";
            PopUp_link_close.style.margin = "0 auto";
            PopUp_link_close.style.width = "200px";
            PopUp_link_close.href = "#";
            PopUp_cont_texte.textContent = variavel.closest(".informações-from-colab").querySelector(".colab-2-info").querySelector("p").textContent;
            PopUp_cont_title.textContent = variavel.closest(".informações-from-colab").querySelector(".colab-1-info").querySelector("p").textContent;
            PopUp_butt_close.style.width = "100%";
            PopUp_butt_close.style.border = "none";
            PopUp_butt_close.style.color = "white";
            PopUp_butt_close.style.cursor = "pointer";
            PopUp_butt_close.style.textDecoration = "underline";
            PopUp_butt_close.style.background = "transparent";
            PopUp_butt_close.textContent = "fechar popup";
            // adicionando no documento
            document.body.appendChild(Overlay_PopUp_Colab);
            document.body.appendChild(Modal_PopUp_Colab);
            // removendo do elemento
            PopUp_link_close.addEventListener("click",function(){
                document.body.removeChild(Overlay_PopUp_Colab);
                document.body.removeChild(Modal_PopUp_Colab);
            });
        });
    }
    else
    {
        variavel.closest(".colab-2-info").querySelector(".link-colab-learn-more").style.display = "none";
    }
});