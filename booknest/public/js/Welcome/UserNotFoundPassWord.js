var Error_Not_Found_PassWord = document.getElementById("UserFoundButPassWordNotCheckForPassWordSaved").textContent;
var Js_Error_Not_Found_PassWord = JSON.parse(Error_Not_Found_PassWord);
if(Js_Error_Not_Found_PassWord.length > 0)
{
    // Criando Variaveis
    var Overlay_PopUp_PassWord_Not_Check = document.createElement("div");
    var Index_PopUp_PassWord_Not_Check = document.createElement("div");
    var SubIndex_PopUp_PassWord_Not_Check = document.createElement("div");
    var Finality_PoUp_PassWord_Not_Check = document.createElement("div");
    var PopUp_PassWord_Not_Check = document.createElement("div");
    var title_popup_password_not_check = document.createElement("div");
    var text_for_title_popup_password_not_check = document.createElement("p");
    var container_popup_password_not_check = document.createElement("div");
    // Adicionando Classes 
    Overlay_PopUp_PassWord_Not_Check.classList.add("overlay-popup-password-not-check");
    Index_PopUp_PassWord_Not_Check.classList.add("index-popup-password-not-check");
    SubIndex_PopUp_PassWord_Not_Check.classList.add('subindex-popup-password-not-check');
    Finality_PoUp_PassWord_Not_Check.classList.add('finality-popup-not-check');
    PopUp_PassWord_Not_Check.classList.add('popup-password-not-check');
    title_popup_password_not_check.classList.add('title-popup-password-not-check');
    text_for_title_popup_password_not_check.classList.add('text-for-title-popup-password-not-check');
    container_popup_password_not_check.classList.add('container-popup-password-not-check');
    // Adicionando Estrutura
    Index_PopUp_PassWord_Not_Check.appendChild(SubIndex_PopUp_PassWord_Not_Check);
    SubIndex_PopUp_PassWord_Not_Check.appendChild(Finality_PoUp_PassWord_Not_Check);
    Finality_PoUp_PassWord_Not_Check.appendChild(PopUp_PassWord_Not_Check);
    PopUp_PassWord_Not_Check.appendChild(title_popup_password_not_check);
    title_popup_password_not_check.appendChild(text_for_title_popup_password_not_check);
    PopUp_PassWord_Not_Check.appendChild(container_popup_password_not_check);
    // Adicionando Estilização
    Overlay_PopUp_PassWord_Not_Check.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    Index_PopUp_PassWord_Not_Check.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); width: 20%; height: 50%; display: flex; align-items: center; justify-content: center; border: none; border-radius: 10px; background: #121212; z-index: 3";
    SubIndex_PopUp_PassWord_Not_Check.style.cssText = "width: 98%; height: 97%; border: none; border-radius: 10px; background: red; display: flex; align-items: center; justify-content: center;";
    Finality_PoUp_PassWord_Not_Check.style.cssText = "width: 98%; height: 97%; border: none; border-radius: 10px; background: #121212; display: flex; align-items: center; justify-content: center;";
    PopUp_PassWord_Not_Check.style.cssText = "width: 100%; height: 100%; position: relative; top: 0; left: 0; display: flex; align-items: center; justify-content: space-between; flex-direction: column;";
    title_popup_password_not_check.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; background: transparent; position: absolute; top: -10px; left: 0;";
    text_for_title_popup_password_not_check.style.cssText  = "background: #121212; color: white; text-transform: uppercase; font-family: 'Montserrat';";
    container_popup_password_not_check.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; color: white; margin: auto auto;";
    // Adicionando Errors
    container_popup_password_not_check.textContent = Js_Error_Not_Found_PassWord;
    text_for_title_popup_password_not_check.textContent = "ops ...Error!!!";
    // Adicionando no Body
    document.body.appendChild(Overlay_PopUp_PassWord_Not_Check);
    document.body.appendChild(Index_PopUp_PassWord_Not_Check);
    // Removendo no Body
    Overlay_PopUp_PassWord_Not_Check.addEventListener("click", function(){
        document.body.removeChild(this);
        document.body.removeChild(Index_PopUp_PassWord_Not_Check);
    });
}