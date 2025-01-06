var success_upload = document.getElementById("SuccessUpload").textContent;
var json_successUpload = JSON.parse(success_upload);
if(json_successUpload.length > 0)
{
    // criando variaveis 
    var overlay_success_upload = document.createElement("div");
    var popup_index_success_upload = document.createElement("div");
    var popup_subindex_success_upload = document.createElement("div");
    var popup_finality_success_upload = document.createElement("div");
    var popup_success_upload = document.createElement("div");
    var title_popup_success_upload = document.createElement("div");
    var text_for_title_popup_success_upload = document.createElement("p");
    var container_success_upload = document.createElement("div");
    var conteudo_success_upload = document.createElement("div");
    var container_link_success_upload = document.createElement("div");
    var link_success_upload = document.createElement("a");
    var button_success_upload = document.createElement("button");
    // adicionando classes 
    overlay_success_upload.classList.add("overlay-success-upload");
    popup_index_success_upload.classList.add("popup-index-success-upload");
    popup_subindex_success_upload.classList.add("popup-subintex-success-upload");
    popup_finality_success_upload.classList.add("popup-finality-success-upload");
    popup_success_upload.classList.add("popup-success-upload");
    title_popup_success_upload.classList.add("title-popup-success-upload");
    text_for_title_popup_success_upload.classList.add("text-for-title-popup-success-upload");
    container_success_upload.classList.add("container-success-upload");
    conteudo_success_upload.classList.add("conteudo-success-upload");
    container_link_success_upload.classList.add("container-link-success-upload");
    link_success_upload.classList.add("link-success-upload");
    button_success_upload.classList.add("button-success-upload");    
    // adicionando estrutura
    popup_index_success_upload.appendChild(popup_subindex_success_upload);
    popup_subindex_success_upload.appendChild(popup_finality_success_upload);
    popup_finality_success_upload.appendChild(popup_success_upload);
    popup_success_upload.appendChild(title_popup_success_upload);
    title_popup_success_upload.appendChild(text_for_title_popup_success_upload);
    popup_success_upload.appendChild(container_success_upload);
    container_success_upload.appendChild(conteudo_success_upload);
    container_success_upload.appendChild(container_link_success_upload);
    container_link_success_upload.appendChild(link_success_upload);
    link_success_upload.appendChild(button_success_upload);
    // adicionando estilizações
    overlay_success_upload.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    popup_index_success_upload.style.cssText = "position: fixed; top: 50%; left: 50%; width: 30%; height: 30%; background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; padding: 10px; transform: translate(-50% , -50%); z-index: 4;";
    popup_subindex_success_upload.style.cssText = "width: 98%; height: 97%; display: flex; align-items: center; justify-content: center; background: rgb(0,255,0); border: none; border-radius: 10px;";
    popup_finality_success_upload.style.cssText = "width: 98%; height: 97%; display: flex; align-items: center; justify-content: center; background: #121212; border: none; border-radius: 10px;";
    popup_success_upload.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-around; flex-direction: column; font-family:'Montserrat'; color: white; position: relative; top: 0; left: 0;";
    title_popup_success_upload.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; background: transparent; text-transform: uppercase; color: white; position: absolute; top: -25px; left: 0;";
    text_for_title_popup_success_upload.style.cssText = "background: #121212;";
    container_success_upload.style.cssText = "width: 100%; max-width: 50%; height: 100%; display: flex; align-items: center; justify-content: space-around; flex-direction: column; color: white; margin: 0 auto;";
    conteudo_success_upload.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center;";
    container_link_success_upload.style.cssText = "width: 100%; max-width: 50%; margin: 0 auto;";
    link_success_upload.style.cssText = "display: block; width: 100px; text-decoration: none; height: 100%;";
    button_success_upload.style.cssText = "width: 100%; padding: 10px; background: transparent; color: rgb(0,255,0); font-family: 'Montserrat'; font-size: 18px; border: 2px groove rgb(0,255,0); border-radius: 10px; transition: 1s; cursor: pointer;";
    button_success_upload.addEventListener("mouseenter",function(){
        this.style.cssText = "width: 100%; padding: 10px; background: rgb(0,255,0); color: #121212; font-family: 'Montserrat'; font-size: 18px; border: none; border-radius: 10px; transition: 1s; cursor: pointer;";
    });
    button_success_upload.addEventListener("mouseleave",function(){
        this.style.cssText = "width: 100%; padding: 10px; background: transparent; color: rgb(0,255,0); font-family: 'Montserrat'; font-size: 18px; border: 2px groove rgb(0,255,0); border-radius: 10px; transition: 1s; cursor: pointer;";
    });
    // adicionando errors 
    text_for_title_popup_success_upload.textContent = "success !!!";
    conteudo_success_upload.textContent = "teste";
    button_success_upload.textContent = "Okay";
    // adicionando no body
    document.body.appendChild(overlay_success_upload);
    document.body.appendChild(popup_index_success_upload);
    // removendo do body
    overlay_success_upload.addEventListener("click", function(){
        document.body.removeChild(this);
        document.body.removeChild(popup_index_success_upload);
    });
    link_success_upload.addEventListener("click",function(event){
        event.preventDefault();
        document.body.removeChild(overlay_success_upload);
        document.body.removeChild(popup_index_success_upload);
    });
}