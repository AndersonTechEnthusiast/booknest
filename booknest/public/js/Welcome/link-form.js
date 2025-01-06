document.querySelector(".Cadastrar-form").addEventListener("click",function(event)
{
    event.preventDefault();
    var link_login = document.getElementById("Login");
    var link_cadastrar = document.getElementById("Cadastrar");

    link_login.style.left = "-100%";
    link_login.style.transition = "1s";
    link_cadastrar.style.left = "50%";
    link_cadastrar.style.transition = "1s";
});
document.querySelector(".Login-form").addEventListener("click", function(event){
    event.preventDefault();
    var link_login = document.getElementById("Login");
    var link_cadastrar = document.getElementById("Cadastrar");

    link_login.style.left = "50%";
    link_login.style.transition = "1s";
    link_cadastrar.style.left = "-100%";
    link_cadastrar.style.transition = "1s";
});
document.querySelector(".containers-popups").addEventListener("click",function(){
    this.style.display = "none";
    var link_login = document.getElementById("Login");
    var link_cadastrar = document.getElementById("Cadastrar");
    link_login.style.left = "50%";
    link_login.style.display = "none";
    link_cadastrar.style.left = "-100%";
    link_cadastrar.style.transition = "none";
});