var popup_success = document.getElementById("success-popup").textContent;
var json_popup = JSON.parse(popup_success);
if(json_popup.length > 0)
{
    // criando variaveis
    var overlay_index_success = document.createElement("div");
    var popup_index_success = document.createElement("div");
    var popup_subindex_success = document.createElement("div");
    var popup_finality_success = document.createElement("div");
    var popup_success_mensagem = document.createElement("div");
    var title_success = document.createElement("div");
    var text_success = document.createElement("p");
    var container_mensagem_success = document.createElement("div");
    var mensagem_success = document.createElement("p");
    var container_link_button_success = document.createElement("div");
    var link_button_success = document.createElement("a");
    var button_success_closed = document.createElement("button");
    // adicionando classes
    overlay_index_success.classList.add("overlay-index-success");
    popup_index_success.classList.add("popup-index-success");
    popup_subindex_success.classList.add("popup-subindex-success");
    popup_finality_success.classList.add("popup-finality-success");
    popup_success_mensagem.classList.add("popup-success");
    container_mensagem_success.classList.add("container-mensagem-success");
    title_success.classList.add("title-success");
    text_success.classList.add("text-success");
    container_link_button_success.classList.add("container-link-button-success");
    link_button_success.classList.add("link-button-success");
    button_success_closed.classList.add("button-success-closed");
    // adicionando estrutura
    popup_index_success.appendChild(popup_subindex_success);
    popup_subindex_success.appendChild(popup_finality_success);
    popup_finality_success.appendChild(popup_success_mensagem);
    popup_success_mensagem.appendChild(title_success);
    title_success.appendChild(text_success);
    container_link_button_success.appendChild(link_button_success);
    link_button_success.appendChild(button_success_closed);
    container_mensagem_success.appendChild(mensagem_success);
    container_mensagem_success.appendChild(container_link_button_success);
    popup_success_mensagem.appendChild(container_mensagem_success);
    // adicionando estilização
    overlay_index_success.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    popup_index_success.style.cssText = "position: fixed; top: 50%; left: 50%; width: 20%; height: 20%; background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; transform: translate(-50% , -50%); padding: 10px; z-index: 4;";
    popup_subindex_success.style.cssText = "width: 98%; height: 97%; background: rgb(0,255,0); border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    popup_finality_success.style.cssText = "width: 98%; height: 97%; background: #121212; border: none; border-radius: 10px;";
    popup_success_mensagem.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; top: 0; left: 0;";
    title_success.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; background: transparent; position: absolute; top: -25px; left: 0;";
    text_success.style.cssText = "background: #121212; color: white; text-transform: uppercase; font-family: 'Montserrat';";
    container_mensagem_success.style.cssText = "width: 100%; height: 100%; max-height: 90%; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; display: flex; align-items: center; justify-content: space-between; flex-direction: column;";
    container_link_button_success.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: center; margin: 0 auto;";
    link_button_success.style.cssText = "text-decoration: none;";
    button_success_closed.style.cssText = "width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; font-size: 20px; color: rgb(0,255,0); border: 2px groove rgb(0,255,0); background: transparent; transition: 1s; cursor: pointer; border-radius: 10px;";
    button_success_closed.addEventListener("mouseenter",function(){
        this.style.cssText = "transition: 1s; width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; font-size: 20px; color: #121212; border: none; background: rgb(0,255,0); cursor: pointer; border-radius: 10px;";
    });
    button_success_closed.addEventListener("mouseleave",function(){
        this.style.cssText = "transition: 1s; width: 200px; height: 50px; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; font-size: 20px; color: rgb(0,255,0); border: 2px groove rgb(0,255,0); background: transparent; cursor: pointer; border-radius: 10px;";
    });
    // adicionando errors
    link_button_success.href = "#";
    button_success_closed.textContent = "Okay";
    mensagem_success.textContent = json_popup;
    text_success.textContent = "Sucesso";
    // adicionando no Body
    document.body.appendChild(overlay_index_success);
    document.body.appendChild(popup_index_success);
    // removendo do Body
    overlay_index_success.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(popup_index_success);
    });
    link_button_success.addEventListener("click",function(event){
        event.preventDefault();
        document.body.removeChild(overlay_index_success);
        document.body.removeChild(popup_index_success);
    });
}