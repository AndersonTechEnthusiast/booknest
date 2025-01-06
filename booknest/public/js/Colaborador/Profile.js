// document.querySelector(".link-photo").addEventListener("click",function(event){
//     event.preventDefault();
//     // criados Elementos
//     var Estilização = document.createElement("style");
//     var OverLay = document.createElement("div");
//     var Modal = document.createElement("div");
//     var PopUp = document.createElement("div");
//     var Line = document.createElement("div");
//     var Index = document.createElement("div");
//     var Content = document.createElement("div");
//     var Title = document.createElement("div");
//     var Congruentes = document.createElement("div");
//     var Profile = document.createElement("div");
//     var Form = document.createElement("form");
//     var img = document.createElement("img");
//     var file = document.createElement("input");
//     var label = document.createElement("label");
//     var submit = document.createElement("input");
//     var Informações = document.createElement("div");
//     var array = [
//         "nome",
//         "email",
//         "date",
//         "generos"
//     ];
//     var barra = document.createElement("div");
//     var close = document.createElement("div");
//     var link = document.createElement("a");
//     var button = document.createElement("button");
//     // classificando Elementos
//     OverLay.classList.add("overlay");
//     Modal.classList.add("modal");
//     PopUp.classList.add("popup");
//     Line.classList.add("line");
//     Index.classList.add("index");
//     Content.classList.add("content");
//     Title.classList.add("title");
//     Congruentes.classList.add("congruentes");
//     Profile.classList.add("profile");
//     Form.classList.add("form");
//     img.classList.add("img");
//     file.classList.add("file");
//     label.classList.add("ativador");
//     submit.classList.add("send-img");
//     Informações.classList.add("container-informação");
//     barra.classList.add("barra");
//     close.classList.add("container-close");
//     link.classList.add("ativador-close-popup");
//     button.classList.add("button-close-popup");
//     // estruturando Elementos
//     Modal.appendChild(PopUp);
//     PopUp.appendChild(Line);
//     Line.appendChild(Index);
//     Index.appendChild(Content);
//     Content.appendChild(Title);
//     Content.appendChild(Congruentes);
//     Congruentes.appendChild(Profile);
//     Congruentes.appendChild(barra);
//     Profile.appendChild(label);
//     label.appendChild(img);
//     Profile.appendChild(Form);
//     Form.appendChild(file);
//     Form.appendChild(submit);
//     Congruentes.appendChild(Informações);
//     var Dados_Json = window.user;
//     for (let index = 0; index < array.length; index++) {
//         var Informação = document.createElement("fieldset");
//         Informação.classList.add("Informação");
//         var Titulos = document.createElement("legend");
//         Titulos.classList.add("Titulos");
//         Informação.id = "Informação" + index;
//         Titulos.id = "Titulos" + index;
//         var Forms = document.createElement("form");
//         Forms.classList.add("Forms");
//         var Inputs = document.createElement("input");
//         Inputs.classList.add("Dados");
//         Inputs.id = "Inputs-"+index;
//         Inputs.type = "hidden";
//         var Dados = document.createElement("input");
//         Dados.classList.add("input-dados-view");
//         Dados.id = "input-view-"+array[index];
//         Dados.name = "ver-"+array[index];
//         Dados.type = "text";
//         Dados.disabled = true;
//         Dados.value = Dados_Json[index];
//         var Icones = document.createElement("i");
//         Icones.id = "icone-edit-"+array[index];
//         Icones.classList.add("fa-solid");
//         Icones.classList.add("fa-pen-to-square");
//         Icones.classList.add("icones-popup-edit")
//         var Labels = document.createElement("label");
//         Labels.classList.add("labels-ativadores-de-edit-form-popup");
//         Labels.id = "labels-ativadores-de-edit-form-popup-from"+array[index];
//         Labels.appendChild(Icones);
//         var Submits = document.createElement("input");
//         Submits.classList.add("edits-dado");
//         Submits.id = "editar-"+array[index];
//         Submits.type = "submit";
//         Submits.style.display = "none";
//         Titulos.style.textTransform = "capitalize";
//         Informação.style.width = "90%";
//         Labels.htmlFor = "editar-"+array[index];
//         Informação.appendChild(Titulos);
//         Titulos.textContent = array[index];
//         Informação.appendChild(Forms);
//         Forms.appendChild(Inputs);
//         Forms.appendChild(Dados);
//         Forms.appendChild(Labels);
//         Forms.appendChild(Submits);
//         Inputs.name = array[index];
//         Informações.appendChild(Informação);
//     }
//     // ativadores
//     img.id = "imagem_popup";
//     // estilizando Elementos
//     Estilização.textContent = 
//     ".overlay{"+
//     "position: fixed;" + 
//     "top: 0;" + 
//     "left: 0;" + 
//     "width: 100%;" + 
//     "height: 100%;" + 
//     "background: rgba(0,0,0,0.7);" + 
//     "z-index: 2;" +
//     "cursor: pointer;"
//     +"}"+
//     ".modal{"+
//     "position: fixed;" + 
//     "top: 50%;" + 
//     "left: 50%;" + 
//     "transform: translate(-50% , -50%);" + 
//     "width: 90%;" + 
//     "height: 90%;" +
//     "background: #333;" + 
//     "border-radius: 20px;" + 
//     "display: flex;" + 
//     "align-items: center;" + 
//     "justify-content: center;" + 
//     "flex-wrap: nowrap;" +
//     "flex-direction: column;" + 
//     "border-radius: 20px;" + 
//     "z-index: 3;"
//     +"}"+
//     ".popup{"+
//     "width: 98%;" +
//     "height: 98%;" + 
//     "background: white;" +
//     "display: flex;" + 
//     "align-items: center;" +
//     "justify-content: center;" + 
//     "flex-wrap: nowrap;" + 
//     "flex-direction: column;" +
//     "border-radius: 20px;"
//     +"}"+
//     ".line{"+
//     "width: 98%;" + 
//     "height: 98%;" + 
//     "background: #333;" + 
//     "display: flex;" + 
//     "align-items: center;" +
//     "justify-content: center;" +
//     "flex-wrap: nowrap;" + 
//     "flex-direction: column;" +
//     "border-radius: 20px;"
//     +"}"+
//     ".index{"+
//     "width: 100%;" +
//     "height: 100%;" + 
//     "display: flex;" +
//     "align-items: center;" +
//     "justify-content: center;" + 
//     "flex-wrap: nowrap;" +
//     "flex-direction: column;"
//     +"}"+
//     ".content{"+
//     "width: 100%;" + 
//     "height: 100%;" + 
//     "display: flex;" + 
//     "align-items: center;" + 
//     "justify-content: space-between;" + 
//     "flex-wrap: nowrap;" + 
//     "flex-direction: column;"
//     +"}"+
//     ".congruentes{"+
//     "width: 100%;" +
//     "height: 100%;" + 
//     "display: flex;" + 
//     "align-items: center;" + 
//     "justify-content: space-between;" + 
//     "flex-wrap: nowrap;" + 
//     "flex-direction: row;"
//     +"}"+
//     ".profile{"+
//     "width:50%;" +
//     "height: 80%;" +
//     "display: flex;" + 
//     "align-items: center;" +
//     "justify-content: space-between;" + 
//     "flex-direction: column;" + 
//     "flex-wrap: nowrap;"
//     +"}"+
//     ".file{"+
//     "display: none;"
//     +"}"+
//     ".img{"+
//     "width: 360px;" + 
//     "height: 360px;" +
//     "border-radius: 50%;" + 
//     "cursor: pointer;"
//     +"}"+
//     ".send-img{"+
//     "width: 200px;" +
//     "height: 50px;" +
//     "padding: 10px;" +
//     "text-align: center;" +
//     "font-family: 'Montserrat' , sans-serfi;" +
//     "color: white;" + 
//     "border: 2px groove white;" +
//     "border-radius: 20px;" +
//     "background: transparent;" + 
//     "transition: 1s;" + 
//     "cursor: pointer;"
//     +"}"+
//     ".barra{"+
//     "width: 5px;" + 
//     "height: 100%;" + 
//     "background: white;" + 
//     "border-radius: 20px;"
//     +"}"+
//     ".Informação{"+
//     "border-radius: 20px;"
//     +"}" +
//     ".container-informação{"+
//     "width:50%;" + 
//     "height: 80%;" + 
//     "display: flex;" +
//     "align-items: center;" +
//     "justify-content: space-between;" + 
//     "flex-wrap: nowrap;" +
//     "flex-direction: column;"
//     +"}" + 
//     ".input-dados-view{"+
//     "width: 90%;" + 
//     "height: 100%;" + 
//     "background: transparent;" + 
//     "color: white;" + 
//     "font-family: 'Montserrat' , sans-serif;" + 
//     "text-align: center;" + 
//     "border: none;" + 
//     "font-size: 18px;"
//     +"}" + 
//     ".icones-popup-edit{"+
//     "font-size: 18px;"
//     +"}"+
//     ".labels-ativadores-de-edit-form-popup{"+
//     "cursor: pointer;"
//     +"}";
//     // transições hovers
//     submit.addEventListener("mouseenter",function(){
//         this.style.transition = "1s";
//         this.style.background = "white";
//         this.style.color = "#333";
//         this.style.border = "none";
//     });
//     submit.addEventListener("mouseleave", function(){
//         this.style.transition = "1s";
//         this.style.background = "transparent";
//         this.style.color = "white";
//         this.style.border = "2px groove white";
//     });
//     // adicionando tags
//     img.src = document.querySelector(".link-photo > img").src;
//     file.type = "file";
//     file.id = "file";
//     label.htmlFor = "file";
//     file.name = "foto_de_Perfil_do_colaborador";
//     submit.type = "submit";
//     submit.value = "Enviar Foto !";
//     // funcionalidade do Elemento
//     file.addEventListener("change",function(event){
//         img.src = URL.createObjectURL(event.target.files[0]);
//     });
//     // adicionando Elemento
//     document.head.appendChild(Estilização);
//     document.body.appendChild(OverLay);
//     document.body.appendChild(Modal);
//     // removendo Elemento
//     link.addEventListener("click",function(event){
//         event.preventDefault();
//         document.head.removeChild(Estilização);
//         document.body.removeChild(OverLay);
//         document.body.removeChild(Modal); 
//     });
//     OverLay.addEventListener("click",function(){
//         document.head.removeChild(Estilização);
//         document.body.removeChild(this);
//         document.body.removeChild(Modal);
//     });
// });
var ImageClick = 0;
$(".link-photo").on("click",function(event){
    event.preventDefault();
    ImageClick++
    if(ImageClick === 1)
    {
        $(this).find("img").css({
            "position":"fixed",
            "top":"50%",
            "left":"50%",
            "transform":"translate(-50%,-50%) scale(5)",
            "z-index":"10",
            "transition":"1s"
        });
        $(".Pages").each(function(index,Elemento){
            $(Elemento).css("opacity","0");
            $(Elemento).css("transition","1s");
        });
    }
    else
    if(ImageClick === 2)
    {
        $(this).find("img").css({
            "position":"absolute",
            "top":"0",
            "left":"80%",
            "transform":"scale(1)",
            "z-index":"1",
            "transition":"1s"
        });
        $(".Pages").each(function(index,elemento){
            $(elemento).css("opacity","1");
            $(elemento).css("transition","1s");
        })
        ImageClick = 0;
    }
});