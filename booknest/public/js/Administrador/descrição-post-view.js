document.querySelectorAll(".descrição").forEach(function(variavel){
    if(variavel.offsetWidth < variavel.scrollWidth)
    {
        variavel.closest(".containers-view-posts").querySelector(".ReadMore").style.display = "block";
        variavel.closest(".containers-view-posts").querySelector(".ReadMore").querySelector("a").addEventListener("click",function(click){
            click.preventDefault();
            // criando variaveis
            var overlay_popup = document.createElement("div");
            var index_popup = document.createElement("div");
            var subdex_popup = document.createElement("div");
            var finaly_popup = document.createElement("div");
            var popup = document.createElement("div");
            var title = document.createElement("div");
            var texto = document.createElement("p");
            var content = document.createElement("div");
            var fechar = document.createElement("div");
            var link = document.createElement("a");
            var button = document.createElement("button"); 
            var style = document.createElement("style");
            // adicionando classes
            overlay_popup.classList.add("overlay-popup");
            index_popup.classList.add("index-popup");
            subdex_popup.classList.add("subdex-popup");
            finaly_popup.classList.add("finaly-popup");
            popup.classList.add("popup");
            title.classList.add("title");
            texto.classList.add("texto");
            content.classList.add("content");
            fechar.classList.add("fechar");
            link.classList.add("link");
            button.classList.add("button");
            // adicionando estrutura
            index_popup.appendChild(subdex_popup);
            subdex_popup.appendChild(finaly_popup);
            finaly_popup.appendChild(popup);
            popup.appendChild(title);
            title.appendChild(texto);
            popup.appendChild(content);
            popup.appendChild(fechar);
            fechar.appendChild(link);
            link.appendChild(button);
            // adicionando estilização
            overlay_popup.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1; cursor: pointer;";
            index_popup.style.cssText = "position: fixed; top: 50%; left: 50%; width: 80%; height: 80%; background: #121212; border-radius: 10px; display: flex; align-items: center; justify-content: center; transform: translate(-50% , -50%); z-index: 2;";
            subdex_popup.style.cssText = "width: 98%; height: 97%; display: flex; align-items: center; justify-content: center; background: white; border-radius: 10px;";
            finaly_popup.style.cssText = "width: 98%; height: 97%; display: flex; align-items: center; justify-content: center; background: #121212; border-radius: 10px;";
            popup.style.cssText = "width: 100%; height: 100%; position: relative; top: 0; left: 0; background: transparent; display: flex; align-items: center; justify-content: space-around; flex-direction: column; padding: 20px;";
            title.style.cssText = "width: 100%; position: absolute; top: -9px; left: 0; background: transparent; display: flex; align-items: center; justify-content: center;";
            texto.style.cssText = "background: #121212; color: white; font-family: 'Montserrat'; text-transform: uppercase;";
            texto.textContent = "descrição";
            fechar.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; padding: 10px;";
            link.style.cssText = "width: 200px; height: 50px; text-decoration: none;";
            button.style.cssText = "width: 100%; height: 100%; background: transparent; color: white; border: 2px groove white; border-radius: 20px; cursor: poiner; transition: 1s; font-size: 18px; cursor: pointer";
            button.addEventListener("mouseenter",function(){
                this.style.cssText = "width: 100%; height: 100%; background: white; color: #121212; border: none; border-radius: 20px; cursor: poiner; transition: 1s; font-size: 18px; cursor: pointer";
            });
            button.addEventListener("mouseleave",function(){
                this.style.cssText = "width: 100%; height: 100%; background: transparent; color: white; border: 2px groove white; border-radius: 20px; cursor: poiner; transition: 1s; font-size: 18px; cursor: pointer";
            });
            content.style.cssText = "width: 100%; height: 100%; max-height: 100%; overflow: auto; padding: 10px;";
            content.textContent = variavel.textContent;
            style.textContent = ".content::-webkit-scrollbar{width: 5px; background: transparent;}"+
            ".content::-webkit-scrollbar-track{width: 5px; background: transparent;}" + ".content::-webkit-scrollbar-thumb{width: 5px; background: white; border-radius: 10px;}";
            button.textContent = "fechar";
            link.href = "#";
            // adicionando no Body
            document.body.appendChild(overlay_popup);
            document.body.appendChild(index_popup);
            document.head.appendChild(style);
            // removendo no Body
            overlay_popup.addEventListener("click", function(){
                document.body.removeChild(this);
                document.body.removeChild(index_popup);
                document.head.removeChild(style);
            });
            link.addEventListener("click", function(event){
                event.preventDefault();
                document.body.removeChild(overlay_popup);
                document.body.removeChild(index_popup);
                document.head.removeChild(style);
            });
        });
    }
    else
    if(variavel.offsetWidth > variavel.scrollWidth)
    {
        variavel.closest(".containers-view-posts").querySelector(".ReadMore").style.display = "none";
    }
});