var feedback_logout = document.getElementById("logout-feedback").textContent;
var Json_feedback_logout = JSON.parse(feedback_logout);
if(Json_feedback_logout.length > 0)
{
    // Criando Elementos
    var overlay_logout = document.createElement("div");
    var popup_index_logout = document.createElement("div");
    var popup_subindex_logout = document.createElement("div");
    var popup_finality_logout = document.createElement("div");
    var popup_logout = document.createElement("div");
    var title_popup_logout = document.createElement("div");
    var text_for_title_popup_logout = document.createElement("p");
    var container_logout = document.createElement("div");
    var conteudo_cotainer_logout = document.createElement("div");
    var container_link_logout = document.createElement("div");
    var link_logout = document.createElement("a");
    var button_logout = document.createElement("button");
    // Adicionando Classes nos Elementos
    overlay_logout.classList.add("overlay-logout");
    popup_index_logout.classList.add("popup-index-logout");
    popup_subindex_logout.classList.add("popup-subindex-logout");
    popup_finality_logout.classList.add("popup-finality-logout");
    popup_logout.classList.add("popup-logout");
    title_popup_logout.classList.add("title-popup-logout");
    text_for_title_popup_logout.classList.add("text-for-title-popup-logout");
    container_logout.classList.add("container-logout");
    conteudo_cotainer_logout.classList.add("conteudo-container-logout");
    container_link_logout.classList.add("container-link-logout");
    link_logout.classList.add("link-logout");
    button_logout.classList.add("button-logout");
    // Adicionando Estruturas nos Elementos
    popup_index_logout.appendChild(popup_subindex_logout);
    popup_subindex_logout.appendChild(popup_finality_logout);
    popup_finality_logout.appendChild(popup_logout);
    popup_logout.appendChild(title_popup_logout);
    title_popup_logout.appendChild(text_for_title_popup_logout);
    popup_logout.appendChild(container_logout);
    container_logout.appendChild(conteudo_cotainer_logout);
    popup_logout.appendChild(container_link_logout);
    container_link_logout.appendChild(link_logout);
    link_logout.appendChild(button_logout);
    // Adicionando Estilizações nos Elementos
    overlay_logout.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    popup_index_logout.style.cssText = "position: fixed; top: 50%; left: 50%; width: 30%; height: 30%; background: #121212; border: none; border-radius: 10px; padding: 10px; display: flex; align-items: center; justify-content: center; transform: translate(-50%,-50%); z-index: 4;";
    popup_subindex_logout.style.cssText = "width: 98%; height: 97%; border: none; border-radius: 10px; background: rgb(0,255,0); display: flex; align-items: center; justify-content: center;";
    popup_finality_logout.style.cssText = "width: 98%; height: 97%; border: none; border-radius: 10px; background: #121212; display: flex; align-items: center; justify-content: center;";
    popup_logout.style.cssText = "width: 100%; height: 100%; position: relative; top: 0; left: 0; display: flex; align-items: center; justify-content: space-around; flex-direction: column;";
    title_popup_logout.style.cssText = "position: absolute; top: -10px; left: 0; width: 100%; display: flex; align-items: center; justify-content: center; background: transparent;";
    text_for_title_popup_logout.style.cssText = "background: #121212; color: white; font-family: 'Montserrat'; text-transform: uppercase;";
    container_logout.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; color: white;";
    conteudo_cotainer_logout.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center;";
    container_link_logout.style.cssText = "width: 100%; max-width: 50%; padding: 10px; margin: 0 auto;";
    link_logout.style.cssText = "width: 100%; text-decoration: none; cursor: pointer; display: block;";
    button_logout.style.cssText = "width: 100%; height: 100%; background: transparent; border: 2px groove rgb(0,255,0); border-radius: 10px; font-family: 'Montserrat'; color: rgb(0,255,0); padding: 20px; font-size: 20px; transition: 1s; cursor: pointer;";
    button_logout.textContent = "Okay";
    button_logout.addEventListener("mouseenter",function(){
        this.style.cssText = "transition: 1s; width: 100%; height: 100%; background: rgb(0,255,0); border: none; border-radius: 10px; font-family: 'Montserrat'; color: #121212; padding: 20px; font-size: 20px; transition: 1s; cursor: pointer;";
    });
    button_logout.addEventListener("mouseleave",function(){
        this.style.cssText = "transition: 1s; width: 100%; height: 100%; background: transparent; border: 2px groove rgb(0,255,0); border-radius: 10px; font-family: 'Montserrat'; color: rgb(0,255,0); padding: 20px; font-size: 20px; transition: 1s; cursor: pointer;";
    });
    link_logout.href = "#";
    // Adicionando Errors nos Elementos
    text_for_title_popup_logout.textContent = "Deslogado !!!";
    conteudo_cotainer_logout.textContent = Json_feedback_logout;
    // Adicionando Elementos no Body
    document.body.appendChild(overlay_logout);
    document.body.appendChild(popup_index_logout);
    // Removendo Elementos do Body
    overlay_logout.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(popup_index_logout);
    });
    link_logout.addEventListener("click",function(event){
        event.preventDefault();
        document.body.removeChild(overlay_logout);
        document.body.removeChild(popup_index_logout);
    });
}