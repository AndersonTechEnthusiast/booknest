window.addEventListener("load",function(){
    var Pages = localStorage.getItem('page');
    if(Pages)
    {
        document.querySelectorAll(".Pages").forEach(function(variavel){
            variavel.style.transition = "1s";
            variavel.style.left = "100%";
            variavel.style.height = "0";
            variavel.style.overflow = "hidden";
        });
        document.querySelectorAll(".Pages")[Pages].style.transition = "1s";
        document.querySelectorAll(".Pages")[Pages].style.left = "0";
        document.querySelectorAll(".Pages")[Pages].style.height = "100%";
        document.querySelectorAll(".Pages")[Pages].style.overflow = "visible";
    }
});
document.querySelectorAll(".link-menu-colaborador").forEach(function(link,index){
    link.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelectorAll(".Pages").forEach(function(container){
            container.style.transition = "1s";
            container.style.left = "100%";
            container.style.height = "0";
            container.style.overflow = "hidden";
        });
        document.querySelectorAll(".Pages")[index].style.transition = "1s";
        document.querySelectorAll(".Pages")[index].style.left = "0";
        document.querySelectorAll(".Pages")[index].style.height = "100%";
        document.querySelectorAll(".Pages")[index].style.overflow = "visible";
        localStorage.setItem('page',index);
    });
});