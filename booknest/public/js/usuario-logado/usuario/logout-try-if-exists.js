var Error_TryLogoutHomeIfExists = document.getElementById("errors-logout-try-if-exists").textContent;
var Json_TryLogoutHomeIfExists = JSON.parse(Error_TryLogoutHomeIfExists);
if(Json_TryLogoutHomeIfExists.length > 0)
{
    // criando variaveis
    var OverLay_PopUp_TryLogoutHomeIfExists = document.createElement("div");
    var Index_PopUp_TryLogoutHomeIfExists = document.createElement("div");
    var SubIndex_PopUp_TryLogoutHomeIfExists = document.createElement("div");
    var Finality_PopUp_TryLogoutHomeIfExists = document.createElement("div");
    var PopUp_TryLogoutHomeIfExists = document.createElement("div");
    var title_PopUp_TryLogoutHomeIfExists = document.createElement("div");
    var text_title_PopUp_TryLogoutHomeIfExists = document.createElement("p");
    var container_PopUp_TryLogoutHomeIfExists = document.createElement("div");
    // adicionando classes
    OverLay_PopUp_TryLogoutHomeIfExists.classList.add('overlay-popup-try-logout-home-if-exists');
    Index_PopUp_TryLogoutHomeIfExists.classList.add('index-popup-try-logout-home-if-exists');
    SubIndex_PopUp_TryLogoutHomeIfExists.classList.add('subindex-popup-try-logout-home-if-exists');
    Finality_PopUp_TryLogoutHomeIfExists.classList.add('finality-popup-try-logout-home-if-exists');
    PopUp_TryLogoutHomeIfExists.classList.add('popup-try-logout-home-if-exists');
    title_PopUp_TryLogoutHomeIfExists.classList.add('title-popup-try-logout-home-if-exists');
    text_title_PopUp_TryLogoutHomeIfExists.classList.add('text-title-popup-try-logout-home-if-exists');
    container_PopUp_TryLogoutHomeIfExists.classList.add('container-popup-try-logout-home-if-exists');
    // adicionando estrutura
    Index_PopUp_TryLogoutHomeIfExists.appendChild(SubIndex_PopUp_TryLogoutHomeIfExists);
    SubIndex_PopUp_TryLogoutHomeIfExists.appendChild(Finality_PopUp_TryLogoutHomeIfExists);
    Finality_PopUp_TryLogoutHomeIfExists.appendChild(PopUp_TryLogoutHomeIfExists);
    PopUp_TryLogoutHomeIfExists.appendChild(title_PopUp_TryLogoutHomeIfExists);
    title_PopUp_TryLogoutHomeIfExists.appendChild(text_title_PopUp_TryLogoutHomeIfExists);
    PopUp_TryLogoutHomeIfExists.appendChild(container_PopUp_TryLogoutHomeIfExists);
    // adicionando estilização
    OverLay_PopUp_TryLogoutHomeIfExists.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    Index_PopUp_TryLogoutHomeIfExists.style.cssText = "position: fixed; top: 50%; left: 50%; width: 50%; height: 50%; transform: translate(-50% , -50%); background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center; z-index: 4;";
    SubIndex_PopUp_TryLogoutHomeIfExists.style.cssText = "width: 98%; height: 97%; background: red; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    Finality_PopUp_TryLogoutHomeIfExists.style.cssText = "width: 98%; height: 97%; background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    PopUp_TryLogoutHomeIfExists.style.cssText = "width: 100%; height: 100%; position: relative; top: 0; left: 0; background: transparent;";
    title_PopUp_TryLogoutHomeIfExists.style.cssText = "position: absolute; top: -10px; left: 0; width: 100%; display: flex; align-items: center; justify-content: center;";
    text_title_PopUp_TryLogoutHomeIfExists.style.cssText = "background: #121212; font-transform: uppercase; font-family: 'Montserrat'; color: white;";
    container_PopUp_TryLogoutHomeIfExists.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; color: white;";
    // adicionando errors
    container_PopUp_TryLogoutHomeIfExists.textContent = Json_TryLogoutHomeIfExists;
    // adicionando no Body
    document.body.appendChild(OverLay_PopUp_TryLogoutHomeIfExists);
    document.body.appendChild(Index_PopUp_TryLogoutHomeIfExists);
    // removendo do Body
    OverLay_PopUp_TryLogoutHomeIfExists.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(Index_PopUp_TryLogoutHomeIfExists);
    });
}