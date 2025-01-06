var Error_UserNotFoundInTheSystem_Error_1 = document.getElementById("LoginReturnIfNotFoundUser").textContent;
var Error_UserNotFoundInTheSystem_Error_2 = document.getElementById("Login-Ask").textContent;
var Json_Encode_UserNotFoundInTheSystem_1 = JSON.parse(Error_UserNotFoundInTheSystem_Error_1);
var Json_Encode_UserNotFoundInTheSystem_2 = JSON.parse(Error_UserNotFoundInTheSystem_Error_2);
if(Json_Encode_UserNotFoundInTheSystem_1.length > 0 && Json_Encode_UserNotFoundInTheSystem_2.length > 0)
{
    // criando variaveis (elementos)
    var OverLay_PopUp_UserNotFound = document.createElement("div");
    var Index_PopUp_UserNotFound = document.createElement("div");
    var SubIndex_PopUp_UserNotFound = document.createElement("div");
    var Finality_PopUp_UserNotFound = document.createElement("div");
    var PopUp_UserNotFound = document.createElement("div");
    var title_UserNotFound = document.createElement("div");
    var text_for_title_UserNotFound = document.createElement("p");
    var first_container_usernotfound = document.createElement("div");
    var secound_container_usernotfound = document.createElement("div");
    // adicionando classes
    OverLay_PopUp_UserNotFound.classList.add("overlay-popup-user-not-found");
    Index_PopUp_UserNotFound.classList.add('index-popup-user-not-found');
    SubIndex_PopUp_UserNotFound.classList.add('subindex-popup-user-not-found');
    Finality_PopUp_UserNotFound.classList.add('finality-popup-user-not-found');
    PopUp_UserNotFound.classList.add('popup-user-not-found');
    title_UserNotFound.classList.add('title-user-not-found');
    text_for_title_UserNotFound.classList.add('text-for-title-user-not-found');
    first_container_usernotfound.classList.add('first-container-user-not-found');
    secound_container_usernotfound.classList.add('secound-container-user-not-found');
    // adicionando na estrutura 
    Index_PopUp_UserNotFound.appendChild(SubIndex_PopUp_UserNotFound);
    SubIndex_PopUp_UserNotFound.appendChild(Finality_PopUp_UserNotFound);
    Finality_PopUp_UserNotFound.appendChild(PopUp_UserNotFound);
    PopUp_UserNotFound.appendChild(title_UserNotFound);
    title_UserNotFound.appendChild(text_for_title_UserNotFound);
    PopUp_UserNotFound.appendChild(first_container_usernotfound);
    PopUp_UserNotFound.appendChild(secound_container_usernotfound);
    // adicionando estilização
    OverLay_PopUp_UserNotFound.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 2";
    Index_PopUp_UserNotFound.style.cssText = "position: fixed; top: 50%; left: 50%; width: 30%; height: 50%; background: #121212; border: none; border-radius: 10px; transform: translate(-50% , -50%); display: flex; align-items: center; justify-content: center; z-index: 3;";
    SubIndex_PopUp_UserNotFound.style.cssText = "width: 98%; height: 97%; background: red; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    Finality_PopUp_UserNotFound.style.cssText = "width: 98%; height: 97%; background: #121212; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    PopUp_UserNotFound.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-direction: column; position: relative; top: 0; left: 0;";
    title_UserNotFound.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; background: transparent; position: absolute; top: -10px; left: 0;";
    text_for_title_UserNotFound.style.cssText = "background: #121212; color: white; text-transform: uppercase; font-family:'Montserrat';";
    first_container_usernotfound.style.cssText = "width: 100%; max-width: 90%; height: 100%; max-height: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; color: white; border: 2px groove red; border-radius: 10px; margin: 10px auto;";
    secound_container_usernotfound.style.cssText = "width: 100%; max-width: 90%; height: 100%; max-height: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Montserrat'; color: white; border: 2px groove red; border-radius: 10px; margin: 10px auto;";
    // adicionado Errors
    text_for_title_UserNotFound.textContent = "Ops... Erro !!!";
    first_container_usernotfound.textContent = Json_Encode_UserNotFoundInTheSystem_1;
    secound_container_usernotfound.textContent = Json_Encode_UserNotFoundInTheSystem_2;
    // adicionando no Body
    document.body.appendChild(OverLay_PopUp_UserNotFound);
    document.body.appendChild(Index_PopUp_UserNotFound);
    // removendo do Body
    OverLay_PopUp_UserNotFound.addEventListener("click", function(){
        document.body.removeChild(this);
        document.body.removeChild(Index_PopUp_UserNotFound);
    });
}