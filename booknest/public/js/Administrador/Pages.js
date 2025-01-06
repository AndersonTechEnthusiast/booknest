window.addEventListener("load",function(){
    var elemento = localStorage.getItem('Page-Atual');
    if(elemento)
    {
        document.querySelectorAll(".containers-de-gerenciamento").forEach(function(variavel){
            variavel.style.transition = "1s";
            variavel.style.left = "100%";
            variavel.style.height = "0";
            variavel.style.overflow = "hidden";
        });
        document.querySelectorAll(".containers-de-gerenciamento")[elemento].style.transition = "1s";
        document.querySelectorAll(".containers-de-gerenciamento")[elemento].style.left = "0";
        document.querySelectorAll(".containers-de-gerenciamento")[elemento].style.height = "100%";
        document.querySelectorAll(".containers-de-gerenciamento")[elemento].style.overflow = "visible";
    }
    
});
document.querySelectorAll(".sections-gerenciamento").forEach(function(links,index){
    links.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelectorAll(".containers-de-gerenciamento").forEach(function(variavel){
            variavel.style.left = "100%";
            variavel.style.height = "0";
            variavel.style.overflow = "hidden";
        });
        document.querySelectorAll(".containers-de-gerenciamento")[index].style.transition = "1s";
        document.querySelectorAll(".containers-de-gerenciamento")[index].style.left = "0";
        document.querySelectorAll(".containers-de-gerenciamento")[index].style.height = "100%";
        document.querySelectorAll(".containers-de-gerenciamento")[index].style.overflow = "visible";
        if(document.getElementById("menu-adm").clientWidth != "70")
        {
            document.getElementById("close").style.display = "block";
            document.getElementById("open").style.display = "none";
            document.getElementById("menu-adm").style.transition = "1s";
            document.getElementById("menu-adm").style.width = "70px";
        }
        localStorage.setItem('Page-Atual',index);
    });
});