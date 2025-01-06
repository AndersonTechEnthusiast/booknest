var Error_TryLogoutHome = document.getElementById("TryLogout").textContent;
var JsonErrorTryLogoutHome = JSON.parse(Error_TryLogoutHome);
if(JsonErrorTryLogoutHome.length > 0)
{
    // criando variaveis
    var OverLay_PopUp_TryLogouHome = document.createElement("div");
    var Index_PopUp_TryLogoutHome = document.createElement("div");
    var SubIndex_PopUp_TryLogoutHome = document.createElement("div");
    var Finality_PopUp_TryLogoutHome = document.createElement("div");
    var PopUp_TryLogoutHome = document.createElement("div");
    var title_TryLogoutHome = document.createElement("div");
    var text_title_TryLogoutHome = document.createElement("p");
    var container_PopUp_TryLogoutHome = document.createElement("div");
    // aplicando classes
    OverLay_PopUp_TryLogouHome.classList.add('overlay-popup-try-logout-home');
    Index_PopUp_TryLogoutHome.classList.add("index-popup-try-logout-home");
    SubIndex_PopUp_TryLogoutHome.classList.add('subindex-popup-try-logout-home');
    Finality_PopUp_TryLogoutHome.classList.add('finality-popup-try-logout-home');
    PopUp_TryLogoutHome.classList.add('popup-try-logout-home');
    title_TryLogoutHome.classList.add('title-try-logout-home');
    text_title_TryLogoutHome.classList.add('text-title-try-logout-home');
    container_PopUp_TryLogoutHome.classList.add('container-popup-try-logout-home');
    // aplicando estrutura
    Index_PopUp_TryLogoutHome.appendChild(SubIndex_PopUp_TryLogoutHome);
    SubIndex_PopUp_TryLogoutHome.appendChild(Finality_PopUp_TryLogoutHome);
    Finality_PopUp_TryLogoutHome.appendChild(PopUp_TryLogoutHome);
    PopUp_TryLogoutHome.appendChild(title_TryLogoutHome);
    title_TryLogoutHome.appendChild(text_title_TryLogoutHome);
    PopUp_TryLogoutHome.appendChild(container_PopUp_TryLogoutHome);
    // aplicando estilização
    OverLay_PopUp_TryLogouHome.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2;";
    Index_PopUp_TryLogoutHome.style.cssText = "position: fixed; top: 50%; left: 50%; width: 20%; height: 20%; background: #121212; border: none; border-radius: 10px; transform: translate(-50% , -50%); display: flex; align-items: center; justify-content: center; padding: 10px; z-index: 4;";
    SubIndex_PopUp_TryLogoutHome.style.cssText = "width: 98%; height: 97%; background: red; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    Finality_PopUp_TryLogoutHome.style.cssText = "width: 98%; height: 97%; background: #121212; border: none; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    PopUp_TryLogoutHome.style.cssText = "width: 100%; height: 100%; background: transparent; position: relative; top: 0; left: 0;";
    title_TryLogoutHome.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; background: transparent; position: absolute; top: -10px; left: 0;";
    text_title_TryLogoutHome.style.cssText = "font-family: 'Montserrat'; font-transform: uppercase; color: white; background: #121212;";
    container_PopUp_TryLogoutHome.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Montserrat'; ";
    // aplicação errors
    text_title_TryLogoutHome.textContent = "Ops, ...error";
    container_PopUp_TryLogoutHome.textContent = JsonErrorTryLogoutHome;
    // aplicação do Body
    document.body.appendChild(OverLay_PopUp_TryLogouHome);
    document.body.appendChild(Index_PopUp_TryLogoutHome);
    // retirando do Body
    OverLay_PopUp_TryLogouHome.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(Index_PopUp_TryLogoutHome);
    });
}