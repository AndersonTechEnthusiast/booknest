var Texto = document.querySelector(".text").textContent;
var link = document.createElement("a");
link.href = "#";
link.textContent = "  Ler Mais...";
link.style.textDecoration = "none";
link.style.color = "white";
link.style.transition = "1s";
var Elemento = document.querySelector(".text");
// console.log("letras total: "+Elemento.textContent.length+" letras");
// console.log("pixels total: "+Elemento.scrollHeight+" pixels");
// console.log("pixels elemento: "+Elemento.offsetHeight+" pixeis");
var X = ((Elemento.textContent.length * Elemento.offsetHeight) / Elemento.scrollHeight);
var Arrendondamento = Math.round(X);
var diferença = (Elemento.textContent.length - Arrendondamento);
if(document.querySelector(".text").scrollHeight > document.querySelector(".text").offsetHeight)
{
    document.querySelector(".text").textContent = document.querySelector(".text").textContent.slice(0,-diferença);
    if(document.querySelector(".text").textContent.length === Arrendondamento)
    {
        document.querySelector(".text").appendChild(link);
    link.addEventListener("click", function(event){
    event.preventDefault();
    //criando elementos
    var estilização = document.createElement("style");
    var OverLay = document.createElement("div");
    var Modal = document.createElement("div");
    var popup = document.createElement("div");
    var line = document.createElement("div");
    var index = document.createElement("div");
    var content = document.createElement("div");
    var title = document.createElement("div");
    var components = document.createElement("div");
    var close = document.createElement("div");
    var link_close = document.createElement("a");
    //classificando elementos
    OverLay.classList.add("overlay");
    Modal.classList.add("modal");
    popup.classList.add("popup");
    line.classList.add("line");
    index.classList.add("index");
    content.classList.add("content");
    title.classList.add("title");
    components.classList.add("components");
    close.classList.add("close");
    link_close.classList.add("link-close");
    //estruturando elementos
    Modal.appendChild(popup);
    popup.appendChild(line);
    line.appendChild(index);
    index.appendChild(content);
    content.appendChild(title);
    content.appendChild(components);
    content.appendChild(close);
    close.appendChild(link_close);
    //estilizando elementos
    estilização.textContent = 
    ".overlay{"+
    "position: fixed;" + 
    "top: 0;" + 
    "left: 0;" +
    "width: 100%;" + 
    "height: 100%;" + 
    "background: rgba(0,0,0,0.7);" + 
    "z-index: 10;"
    +"}" + 
    ".modal{"+
    "position: fixed;" +
    "top: 50%;" +
    "left: 50%;" +
    "width: 60%;" +
    "height: 60%;" +
    "transform: translate( -50% , -50%);" +
    "border-radius: 20px;" + 
    "background: #333;" + 
    "display: flex;" + 
    "align-items: center;" + 
    "padding: 10px;" +
    "justify-content: center;" +
    "z-index: 11;"
    +"}" + 
    ".popup{"+
    "width: 98%;" + 
    "height: 98%;" + 
    "background: white;" + 
    "display: flex;" + 
    "align-items: center;" +
    "justify-content: center;" +
    "border-radius: 20px;"
    +"}"+
    ".line{"+
    "width: 98%;" +
    "height: 98%;" + 
    "background: #333;" + 
    "display: flex;" + 
    "align-items: center;" + 
    "justify-content: center;" + 
    "border-radius: 20px;"
    +"}" + 
    ".index{"+
    "width: 100%;" + 
    "height: 100%;" + 
    "padding: 10px;" +
    "border-radius: 20px;"
    +"}" + 
    ".content{"+
    "position: relative;" + 
    "top: 0;" + 
    "left: 0;" +
    "width: 100%;" +
    "height: 100%;" + 
    "display: flex;" + 
    "align-items: center;" + 
    "justify-content: space-between;" +
    "flex-wrap: nowrap;" + 
    "flex-direction: column;" 
    +"}" +
    ".components{"+
    "width: 100%;" + 
    "height: 300px;" + 
    "max-height: 300px;" + 
    "overflow-y: scroll;" + 
    "overflow-x: hidden;" + 
    "padding: 10px;"
    +"}"+
    ".title{"+
    "width: 100%;" +
    "max-width: 22%;" +
    "padding: 0px;" + 
    "position: absolute;" + 
    "top: -14px;" +  
    "display: flex;" + 
    "align-items: center;" + 
    "justify-content: center;" +
    "background: #333;" +
    "margin: 0 auto;"
    +"}" + 
    ".close{"+
    "width: 100%;" + 
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" + 
    "flex-wrap: nowrap;" +
    "flex-direction: row;"  
    "margin: 0 auto;"
    +"}";
    link_close.style.textDecoration = "none";
    link_close.style.color = "white";
    link_close.style.cursor = "pointer";
    OverLay.style.cursor = "pointer";
    //tags nos elementos
    link_close.textContent = "Fechar";
    components.textContent = Texto;
    title.textContent = "Descrição Completa";
    //adicionando elementos
    document.head.appendChild(estilização);
    document.body.appendChild(OverLay);
    document.body.appendChild(Modal);
    //removendo elementos
    link_close.addEventListener("click",function(event){
        event.preventDefault();
        document.head.removeChild(estilização);
        document.body.removeChild(OverLay);
        document.body.removeChild(Modal);
    });
    OverLay.addEventListener("click",function(){
        document.head.removeChild(estilização);
        document.body.removeChild(this);
        document.body.removeChild(Modal);
    });
});
    }
}


