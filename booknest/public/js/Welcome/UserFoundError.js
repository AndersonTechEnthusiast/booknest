var Error_User_Found = document.getElementById("feedback-erros").textContent;
var Json_Error_User_Found = JSON.parse(Error_User_Found);
if(Json_Error_User_Found.length > 0)
{
    // criando elementos
    var OverLay_PopUp_FeedBack = document.createElement("div");
    var Index_PopUp_FeedBack = document.createElement("div");
    var SubIndex_PopUp_FeedBack = document.createElement("div");
    var Finality_PopUp_FeedBack = document.createElement("div");
    var PopUp_FeedBack = document.createElement("div");
    var title_popup_feedback = document.createElement("div");
    var text_title_popup_feedback = document.createElement("div");
    // adicionando classe
    OverLay_PopUp_FeedBack.classList.add("overlay-popup-feedback");
    Index_PopUp_FeedBack.classList.add("index-popup-feedback");
    SubIndex_PopUp_FeedBack.classList.add("subindex-popup-feedback");
    Finality_PopUp_FeedBack.classList.add("finality-popup-feedback");
    PopUp_FeedBack.classList.add("popup-feedback");
    title_popup_feedback.classList.add("title-popup-feedback");
    text_title_popup_feedback.classList.add("text-title-popup-feedback");
    // adicionando estrutura
    Index_PopUp_FeedBack.appendChild(SubIndex_PopUp_FeedBack);
    SubIndex_PopUp_FeedBack.appendChild(Finality_PopUp_FeedBack);
    Finality_PopUp_FeedBack.appendChild(PopUp_FeedBack);
    PopUp_FeedBack.appendChild(title_popup_feedback);
    title_popup_feedback.appendChild(text_title_popup_feedback);
    // Mostrando o FeedBack
    if(Array.isArray(Json_Error_User_Found))
    {
        Json_Error_User_Found.forEach(function(feedback){
            var feedbacks = document.createElement("div");
            PopUp_FeedBack.appendChild(feedback);
            feedbacks.textContent = feedback;
            feedbacks.style.cssText = "width: 100%; max-width: 90%; border: 2px groove red; border-radius: 10px; padding: 10px; text-align: center; font-family: 'Montserrat'; color: white;";
        });
    }
    else
    {
        var feedbacks = document.createElement("div");
        PopUp_FeedBack.appendChild(feedbacks);
        feedbacks.textContent = Json_Error_User_Found;
        feedbacks.style.cssText = "width: 100%; max-width: 90%; height: 100%; max-height: 20%; border: 2px groove red; border-radius: 10px; padding: 10px; display: flex; align-items: center; justify-content: center; margin: auto auto; font-family: 'Montserrat'; color: white;";
    }
    // estilizando os Elementos
    OverLay_PopUp_FeedBack.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); cursor: pointer; z-index: 4;";
    Index_PopUp_FeedBack.style.cssText = "position: fixed; top: 50%; left: 50%; width: 30%; height: 30%; background: #121212; border-radius: 10px; display: flex; align-items: center; justify-content: center; transform: translate(-50% , -50%); padding: 10px; z-index: 6";
    SubIndex_PopUp_FeedBack.style.cssText = "width: 98%; height: 97%; background: red; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    Finality_PopUp_FeedBack.style.cssText = "width: 98%; height: 97%; background: #121212; border-radius: 10px; display: flex; align-items: center; justify-content: center;";
    PopUp_FeedBack.style.cssText = " position: relative; top: 0; left: 0; width: 100%; height: 100%; background: transparent; display: flex; align: center; justify-content: space-between; flex-direcion: column;";
    title_popup_feedback.style.cssText = "position: absolute; top: -10px; left: 0; width: 100%; text-align: center; background: transparent; display: flex; align-items: center; justify-content: center;";
    text_title_popup_feedback.style.cssText = "background: #121212; text-transform: uppercase; font-family:'Montserrat'; color: white;";
    text_title_popup_feedback.textContent = "Atenção";
    // adicionando no Body
    document.body.appendChild(OverLay_PopUp_FeedBack);
    document.body.appendChild(Index_PopUp_FeedBack);
    // removendo do Body
    OverLay_PopUp_FeedBack.addEventListener("click",function(){
        document.body.removeChild(this);
        document.body.removeChild(Index_PopUp_FeedBack);
    });
}