var mensagem = "O se seu Certificado não tem seu Nome não aparece , é porque você não é Autorizado !!!, continue postando para que possa autentificado";
document.getElementById("info-não-autentificado").addEventListener("click", function(event){
    event.preventDefault();
    var estilização = document.createElement("style");
    var overlay = document.createElement("div");
    var modal = document.createElement("div");
    var index = document.createElement("div");
    var title = document.createElement("span");
    var etinerario = document.createElement("p");
    var texto = document.createElement("span");
    var close = document.createElement("div");
    var link = document.createElement("a");
    overlay.classList.add("overlay-info-home");
    modal.classList.add("modal-info-home");
    index.classList.add("index-info-home");
    title.classList.add("title-info-home");
    etinerario.classList.add("etinerario-info-home");
    texto.classList.add("texto-info-home");
    close.classList.add("close-info-home");
    link.classList.add("link-info-home");
    modal.appendChild(index);
    index.appendChild(title);
    title.appendChild(etinerario);
    index.appendChild(texto);
    index.appendChild(close);
    close.appendChild(link);
    estilização.textContent = 
    ".overlay-info-home{"+
    "position: fixed;" +
    "top: 0;" +
    "left: 0;" +
    "width: 100%;" +
    "height: 100%;" +
    "background: rgba(0,0,0,0.7);"+
    "z-index: 20;" +
    "cursor: pointer;"
    +"}"+
    ".modal-info-home{"+
    "position: fixed;" +
    "top: 50%;" +
    "left: 50%;" +
    "transform: translate(-50% , -50%);" +
    "background: transparent;" +
    "height: 60%;" +
    "width: 60%;" +
    "z-index: 21;"
    +"}"+
    ".index-info-home{"+
    "width: 100%;" +
    "height: 100%;" +
    "background: white;" +
    "border-radius: 20px;" +
    "padding: 20px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-wrap: nowrap;" +
    "flex-direction: column;"
    +"}"+
    ".title-info-home{"+
    "position: relative;" +
    "top: 0;" +
    "left: 0;" +
    "width: 100%;" +
    "height: 20px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: space-between;" +
    "flex-wrap: nowrap;" +
    "flex-direction: center;" +
    "font-size: 20px;" +
    "color: #333;"
    +"}"+
    ".title-info-home::after,.title-info-home::before{"+
    "content: '';" +
    "display: block;" +
    "width: 40%;" +
    "height: 5px;" +
    "background: #333;"+
    "border-radius: 20px;"
    +"}" +
    ".texto-info-home{"+
    "width: 100%;" +
    "height: 80%;" +
    "color: #333;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "text-align: center;"
    +"}"+
    ".close-info-home{"+
    "width: 100%;" +
    "height: 20%;" +
    "text-align: center;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" 
    +"}"+
    ".link-info-home{"+
    "text-decoration: none;" +
    "color: #333;" +
    "font-size: 18px;" +
    "cursor: pointer;"
    +"}";
    etinerario.textContent = "Certificado";
    texto.textContent = mensagem;
    link.textContent = "fechar";
    document.head.appendChild(estilização);
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    link.addEventListener("click",function(event){
        event.preventDefault();
        document.head.removeChild(estilização);
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
    });

    overlay.addEventListener("click", function(){
        document.head.removeChild(estilização);
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
    });
});