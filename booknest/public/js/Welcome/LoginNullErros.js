var Login_Erros = document.getElementById("erros-for-Auth").textContent;
var Erros_Login = JSON.parse(Login_Erros);
if(Erros_Login.length > 0)
{
    // criando variaveis popup
    var Overlay_PopUp_Errors_Login = document.createElement("div");
    var PopUp_Index_Errors_Login = document.createElement("div");
    var PopUp_SubIndex_Errors_Login = document.createElement("div");
    var PopUp_Finality_SubIndex_Errors_Login = document.createElement("div");
    var PopUp_Erros_Login = document.createElement("div");
    var title_popup_erros_login = document.createElement("div");
    var text_for_title_popup_erros_login = document.createElement("p");
    var container_errors_popup_login = document.createElement("div");
    // adicionando classes 
    PopUp_Index_Errors_Login.classList.add("PopUp-Index-Errors-Login");
    PopUp_SubIndex_Errors_Login.classList.add("PopUp-SubIndex-Errors-Login");
    PopUp_Finality_SubIndex_Errors_Login.classList.add("PopUp-Finality-SubIndex-Errors-Login");
    PopUp_Erros_Login.classList.add("PopUp-Erros-Login");
    title_popup_erros_login.classList.add("title-popup-erros-login");
    text_for_title_popup_erros_login.classList.add("text-for-title-popup-erros-login");
    container_errors_popup_login.classList.add("container-errors-popup-login");
    // inserindo a estrutura
    PopUp_Index_Errors_Login.appendChild(PopUp_SubIndex_Errors_Login);
    PopUp_SubIndex_Errors_Login.appendChild(PopUp_Finality_SubIndex_Errors_Login);
    PopUp_Finality_SubIndex_Errors_Login.appendChild(PopUp_Erros_Login);
    PopUp_Erros_Login.appendChild(title_popup_erros_login);
    title_popup_erros_login.appendChild(text_for_title_popup_erros_login);
    PopUp_Erros_Login.appendChild(container_errors_popup_login);
    // estilizando o PopUp
    Overlay_PopUp_Errors_Login.style.cssText = "position: fixed; top: 0; left: 0;  width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 4; border-radius: 10px; cursor: pointer;";
    PopUp_Index_Errors_Login.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); width: 30%; height: 30%; background: #121212; display: flex; align-items: center; justify-content: center; border-radius: 10px; padding: 10px; z-index: 5;";
    PopUp_SubIndex_Errors_Login.style.cssText = "width: 98%; height: 97%; background: red; display: flex; align-items: center; justify-content: center; border-radius: 10px;";
    PopUp_Finality_SubIndex_Errors_Login.style.cssText = "width: 98%; height: 97%; background: #121212; border-radius: 10px;";
    PopUp_Erros_Login.style.cssText = "width: 100%; height: 100%; position: relative; top: 0; left: 0;";
    title_popup_erros_login.style.cssText = "position: absolute; top: -60px; left: 0; width: 100%; text-align: center; background: transparent; display: flex; align-items: center; justify-content: center; ";
    text_for_title_popup_erros_login.style.cssText = "background: #121212; color: white; text-transform: uppercase; font-family: 'Montserrat';";
    text_for_title_popup_erros_login.textContent = "Errors";
    // mostrando os erros
    if(Array.isArray(Erros_Login))
    {
        Erros_Login.forEach(function(mensagem){
            var see_erros = document.createElement("div");
            container_errors_popup_login.appendChild(see_erros);
            see_erros.style.cssText = "width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; margin: 10px 0;";
            see_erros.textContent = mensagem;
        });
    }
    else
    {
        var see_erros = document.createElement("div");
        container_errors_popup_login.appendChild(see_erros);
        see_erros.style.cssText = "width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Montserrat'; border: 2px groove red; border-radius: 20px; max-width: 90%; margin: 50px auto;";
        see_erros.textContent = Erros_Login;
    }
    // adicionando no Body
    document.body.appendChild(Overlay_PopUp_Errors_Login);
    document.body.appendChild(PopUp_Index_Errors_Login);
    // retirando do Body
    Overlay_PopUp_Errors_Login.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(PopUp_Index_Errors_Login);
    });
}