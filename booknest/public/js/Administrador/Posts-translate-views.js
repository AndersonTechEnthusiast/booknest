window.addEventListener("load",function(){
    var Mode = localStorage.getItem('Mode');
    if(Mode)
    {
        document.querySelectorAll(".post-view").forEach(function(selecioned){
            selecioned.style.transition = "1s";
            selecioned.style.left = "100%";
        });
        document.querySelectorAll(".post-view")[Mode].style.transition = "1s";
        document.querySelectorAll(".post-view")[Mode].style.left = "0";
    }
    else
    {
        return null;
    }
});
document.querySelectorAll(".icon-views-table-or-block").forEach(function(variavel,index){
    variavel.addEventListener("click",function(event){
        event.preventDefault();
        document.querySelectorAll(".post-view").forEach(function(containers){
            containers.style.transition = "1s";
            containers.style.left = "100%";
        });
        document.querySelectorAll(".post-view")[index].style.transition = "1s";
        document.querySelectorAll(".post-view")[index].style.left = "0";
    });
    localStorage.setItem('Mode',index);
});