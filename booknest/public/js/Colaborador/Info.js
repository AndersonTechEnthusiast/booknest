document.getElementById("icon-ativador-popup").addEventListener("click",function(event){
    event.preventDefault();
    var estilização = document.createElement("style");
    var overlay = document.createElement("div");
    var modal = document.createElement("div");
    var backcontainer = document.createElement("div");
    var line = document.createElement("div");
    var index = document.createElement("div");
    var title = document.createElement("div");
    var container = document.createElement("div");
    var end = document.createElement("button");
    overlay.classList.add("overlay-popup");
    modal.classList.add("modal-popup");
    backcontainer.classList.add("backcontainer-popup");
    line.classList.add("line-popup");
    index.classList.add("index-popup");
    title.classList.add("title-popup");
    container.classList.add("container-popup");
    end.classList.add("end-popup");
    modal.appendChild(backcontainer);
    backcontainer.appendChild(line);
    line.appendChild(index);
    index.appendChild(title);
    index.appendChild(container);
    index.appendChild(end);
    end.textContent = "Fechar";
    title.textContent = "Info";
    container.textContent = "Ao passar o mouse nas postagens a baixo , passe o mouse e espere um momento para a postagem se mostrar e suas informações adicionais, aparecerem...";
    estilização.textContent = 
    ".overlay-popup{"+
    "position: fixed;" +
    "top: 0;" + 
    "left: 0;" +
    "width: 100%;" +
    "height: 100%;" +
    "background: rgba(0,0,0,0.7);" +
    "z-index: 21;"
    +"}"+
    ".modal-popup{"+
    "position: fixed;" + 
    "top: 50%;" +
    "left: 50%;" + 
    "width: 50%;" +
    "height: 30%;" + 
    "transform: translate(-50% , -50%);" +
    "background: transparent;" +
    "border-radius: 20px;" +
    "z-index: 22;"
    +"}"+
    ".backcontainer-popup{"+
    "width: 100%;" +
    "height: 100%;" +
    "background: #333;" + 
    "padding: 10px;" +
    "border-radius: 20px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-wrap: nowrap;" +
    "flex-direction: row"
    +"}"+
    ".line-popup{"+
    "width: 98%;" + 
    "height: 98%;" +
    "background: white;" +
    "border-radius: 20px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-wrap: nowrap;" +
    "flex-direction: row"
    +"}"+
    ".index-popup{"+
    "width: 98%;" +
    "height: 98%;" +
    "background: #333;" +
    "border-radius: 20px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-wrap: nowrap;" +
    "flex-direction: column;" +
    "position: relative;" +
    "top: 0;" +
    "left: 0;" +
    "color: white;"
    +"}"+
    ".title-popup{"+
    "position: absolute;" +
    "top: -12px;"+
    "width: 100px;" +
    "text-align: center;" +
    "background: #333;"
    +"}"+
    ".container-popup{"+
    "width: 100%;"+
    "height: 300px;" +
    "max-height: 300px;" +
    "overflow-y: scroll;" +
    "padding: 20px;"
    +"}"+
    ".end-popup{"+
    "width: 100%;" +
    "height: 40px;" +
    "max-width: 20%;"+
    "border: 2px groove white;" +
    "border-radius: 20px;" +
    "background: transparent;" +
    "color: white;" +
    "font-family: 'Montserrat', sans-serif" +
    "font-size: 18px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "flex-wrap: nowrap;" +
    "flex-direction: row;" +
    "cursor: pointer;" +
    "transition: 1s;"+
    "margin: 10px auto;"
    +"}";
    end.addEventListener("mouseenter",function(){
        this.style.transition = "1s";
        this.style.border = "2px groove red";
        this.style.color = "red";
        line.style.background = "red";
        title.style.color = "red";
        title.style.transition = "1s";
        line.style.transition = "1s";
    });
    end.addEventListener("mouseleave",function(){
        this.style.transition = "1s";
        this.style.border = "2px groove white";
        this.style.color = "white";
        line.style.background = "white";
        line.style.color = "white";
        title.style.transition = "1s";
        title.style.color = "white";
        line.style.transition = "1s";
    });
    document.head.appendChild(estilização);
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    end.addEventListener("click",function(){
        document.head.removeChild(estilização);
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
    });
    overlay.addEventListener("click",function(){
        document.head.removeChild(estilização);
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
    });
});
