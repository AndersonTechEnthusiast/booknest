var error_upload = document.getElementById("ErrorsImage").textContent;
var json_errorUpload = JSON.parse(error_upload);
if(json_errorUpload.length > 0)
{
    // criando variaveis 
    var overlay_error_upload = document.createElement("div");
    var popup_index_error_upload = document.createElement("div");
    var popup_subindex_error_upload = document.createElement("div");
    var popup_finality_error_upload = document.createElement("div");
    var popup_error_upload = document.createElement("div");
    var title_popup_error_upload = document.createElement("div");
    var text_for_title_popup_error_upload = document.createElement("p");
    var container_error_upload = document.createElement("div");
    var conteudo_error_upload = document.createElement("div");
    var container_link_error_upload = document.createElement("div");
    var link_error_upload = document.createElement("a");
    var button_error_upload = document.createElement("button");
    // adicionando classes 
    overlay_error_upload.classList.add("overlay-error-upload");
    popup_index_error_upload.classList.add("popup-index-error-upload");
    popup_subindex_error_upload.classList.add("popup-subintex-error-upload");
    popup_finality_error_upload.classList.add("popup-finality-error-upload");
    popup_error_upload.classList.add("popup-error-upload");
    title_popup_error_upload.classList.add("title-popup-error-upload");
    text_for_title_popup_error_upload.classList.add("text-for-title-popup-error-upload");
    container_error_upload.classList.add("container-error-upload");
    conteudo_error_upload.classList.add("conteudo-error-upload");
    container_link_error_upload.classList.add("container-link-error-upload");
    link_error_upload.classList.add("link-error-upload");
    button_error_upload.classList.add("button-error-upload");    
    // adicionando estrutura
    popup_index_error_upload.appendChild(popup_subindex_error_upload);
    popup_subindex_error_upload.appendChild(popup_finality_error_upload);
    popup_finality_error_upload.appendChild(popup_error_upload);
    popup_error_upload.appendChild(title_popup_error_upload);
    title_popup_error_upload.appendChild(text_for_title_popup_error_upload);
    popup_error_upload.appendChild(container_error_upload);
    container_error_upload.appendChild(conteudo_error_upload);
    container_error_upload.appendChild(container_link_error_upload);
    container_link_error_upload.appendChild(link_error_upload);
    link_error_upload.appendChild(button_error_upload);
    // adicionando estilizações
    overlay_error_upload.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    popup_index_error_upload.style.cssText = "position: fixed; top: 50%; left: 50%; width: 30%; height: 30%; background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; padding: 10px; transform: translate(-50% , -50%); z-index: 4;";
    popup_subindex_error_upload.style.cssText = "width: 98%; height: 97%; display: flex; align-items: center; justify-content: center; background: red; border: none; border-radius: 10px;";
    popup_finality_error_upload.style.cssText = "width: 98%; height: 97%; display: flex; align-items: center; justify-content: center; background: #121212; border: none; border-radius: 10px;";
    popup_error_upload.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-around; flex-direction: column; font-family:'Montserrat'; color: white; position: relative; top: 0; left: 0;";
    title_popup_error_upload.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; background: transparent; text-transform: uppercase; color: white; position: absolute; top: -25px; left: 0;";
    text_for_title_popup_error_upload.style.cssText = "background: #121212;";
    container_error_upload.style.cssText = "width: 100%; max-width: 50%; height: 100%; display: flex; align-items: center; justify-content: space-around; flex-direction: column; color: white; margin: 0 auto;";
    conteudo_error_upload.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center;";
    container_link_error_upload.style.cssText = "width: 100%; max-width: 50%; margin: 0 auto;";
    link_error_upload.style.cssText = "display: block; width: 100px; text-decoration: none; height: 100%;";
    button_error_upload.style.cssText = "width: 100%; padding: 10px; background: transparent; color: red; font-family: 'Montserrat'; font-size: 18px; border: 2px groove red; border-radius: 10px; transition: 1s; cursor: pointer;";
    button_error_upload.addEventListener("mouseenter",function(){
        this.style.cssText = "width: 100%; padding: 10px; background: red; color: #121212; font-family: 'Montserrat'; font-size: 18px; border: none; border-radius: 10px; transition: 1s; cursor: pointer;";
    });
    button_error_upload.addEventListener("mouseleave",function(){
        this.style.cssText = "width: 100%; padding: 10px; background: transparent; color: red; font-family: 'Montserrat'; font-size: 18px; border: 2px groove red; border-radius: 10px; transition: 1s; cursor: pointer;";
    });
    // adicionando errors 
    text_for_title_popup_error_upload.textContent = "error !!!";
    conteudo_error_upload.textContent = json_errorUpload;
    button_error_upload.textContent = "Okay";
    // adicionando no body
    document.body.appendChild(overlay_error_upload);
    document.body.appendChild(popup_index_error_upload);
    // removendo do body
    overlay_error_upload.addEventListener("click", function(){
        document.body.removeChild(this);
        document.body.removeChild(popup_index_error_upload);
    });
    link_error_upload.addEventListener("click",function(event){
        event.preventDefault();
        document.body.removeChild(overlay_error_upload);
        document.body.removeChild(popup_index_error_upload);
    });
}