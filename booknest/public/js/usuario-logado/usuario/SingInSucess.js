var SingInSucess = document.getElementById("success-popup-sing-in").textContent;
var error_SingInSucess = JSON.parse(SingInSucess);
if(error_SingInSucess.length > 0)
{
    // criando variaveis
    var OverLay_PopUP_SingSucess = document.createElement("div");
    var Index_PopUp_SingSucess = document.createElement("div");
    var SubIndex_PopUp_SingSucess = document.createElement("div");
    var Finality_PopUp_SingSucess = document.createElement("div");
    var PopUp_SingSucess = document.createElement("div");
    var title_text_SingSucess = document.createElement("div");
    var text_for_title_singsucess = document.createElement("p");
    var container_mensagem_singsucess = document.createElement("div");
    var mensagem_singsucess = document.createElement("p");
    var container_link_and_button_close_singsucess = document.createElement("div");
    var link_from_button_close_singsucess = document.createElement("a");
    var button_close_singsucess = document.createElement("button");
    // adicionando classes
    OverLay_PopUP_SingSucess.classList.add("overlay-popup-sing-sucess");
    Index_PopUp_SingSucess.classList.add("index-popup-sing-sucess");
    SubIndex_PopUp_SingSucess.classList.add("subindex-popup-sing-sucess");
    Finality_PopUp_SingSucess.classList.add("finality-popup-sing-sucess");
    PopUp_SingSucess.classList.add("popup-sing-sucess");
    title_text_SingSucess.classList.add("title-text-sing-sucess");
    text_for_title_singsucess.classList.add("text-for-title-sing-sucess");
    container_mensagem_singsucess.classList.add("container-mensagem-sing-sucess");
    mensagem_singsucess.classList.add("mensagem-sing-sucesss");
    container_link_and_button_close_singsucess.classList.add("container-link-and-button-close-sing-sucess");
    link_from_button_close_singsucess.classList.add("link-from-button-close-sing-sucess");
    button_close_singsucess.classList.add("button-close-sing-sucess");
    // adicionando estrutura
    Index_PopUp_SingSucess.appendChild(SubIndex_PopUp_SingSucess);
    SubIndex_PopUp_SingSucess.appendChild(Finality_PopUp_SingSucess);
    Finality_PopUp_SingSucess.appendChild(PopUp_SingSucess);
    PopUp_SingSucess.appendChild(title_text_SingSucess);
    title_text_SingSucess.appendChild(text_for_title_singsucess);
    PopUp_SingSucess.appendChild(container_mensagem_singsucess);
    container_mensagem_singsucess.appendChild(mensagem_singsucess);
    PopUp_SingSucess.appendChild(container_link_and_button_close_singsucess);
    container_link_and_button_close_singsucess.appendChild(link_from_button_close_singsucess);
    link_from_button_close_singsucess.appendChild(button_close_singsucess);
    // adicionando estilizações
    OverLay_PopUP_SingSucess.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    Index_PopUp_SingSucess.style.cssText = "position: fixed; top: 50%; left: 50%; width: 30%; height: 30%; display: flex; align-items: center; justify-content: center; padding: 10px; border: none; border-radius: 10px; background: #121212; transform: translate(-50% , -50%); z-index: 4";
    SubIndex_PopUp_SingSucess.style.cssText = "width: 98%; height: 97%; background: rgb(0,255,0); display: flex; align-items: center; justify-content: center; border: none; border-radius: 10px;";
    Finality_PopUp_SingSucess.style.cssText = "width: 98%; height: 97%; background: #121212; display: flex; align-items: center; justify-content: center; border: none; border-radius: 10px;";
    PopUp_SingSucess.style.cssText = "width: 100%; height: 100%; background: transparent; position: relative; top: 0; left: 0; display: flex; align-items: center; justify-content: space-between; flex-direction: column;";
    title_text_SingSucess.style.cssText = "position: absolute; top: -25px; left: 0; width: 100%; display: flex; align-items: center; justify-content: center; background: transparent;";
    text_for_title_singsucess.style.cssText = "background: #121212; color: white; font-family: 'Montserrat'; text-transform: uppercase;";
    container_mensagem_singsucess.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center;";
    mensagem_singsucess.style.cssText = "font-family: 'Montserrat'; color: white;";
    container_link_and_button_close_singsucess.style.cssText = "width: 100%; max-width: 40%; padding: 10px; margin: 0 auto;";
    link_from_button_close_singsucess.style.cssText = "display: block; width: 100%; text-decoration: none;";
    button_close_singsucess.style.cssText = "width: 100%; padding: 10px; border: 2px groove rgb(0,255,0); border-radius: 10px; color: rgb(0,255,0); font-family: 'Montserrat'; transition: 1s; background: transparent; cursor: pointer;";
    button_close_singsucess.addEventListener("mouseenter",function(){
        this.style.cssText = "transition: 1s; cursor: pointer; width: 100%; padding: 10px; border: none; border-radius: 10px; color: #121212; font-family: 'Montserrat'; background: rgb(0,255,0);";
    });
    button_close_singsucess.addEventListener("mouseleave",function(){
        this.style.cssText = "transition: 1s; cursor: pointer; width: 100%; padding: 10px; border: 2px groove rgb(0,255,0); border-radius: 10px; color: rgb(0,255,0); font-family: 'Montserrat'; background: transparent;";
    });
    text_for_title_singsucess.textContent = "Sucesso !!!";
    button_close_singsucess.textContent = "Okay";
    // adicionando errors
    mensagem_singsucess.textContent = error_SingInSucess;
    // adicionando no Body
    document.body.appendChild(OverLay_PopUP_SingSucess);
    document.body.appendChild(Index_PopUp_SingSucess);
    // removendo do Body
    OverLay_PopUP_SingSucess.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(Index_PopUp_SingSucess);
    });
    link_from_button_close_singsucess.addEventListener("click",function(event){
        event.preventDefault();
        document.body.removeChild(OverLay_PopUP_SingSucess);
        document.body.removeChild(Index_PopUp_SingSucess);
    });
}