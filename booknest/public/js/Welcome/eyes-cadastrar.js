document.querySelector(".i-cadastrar-open").addEventListener("click",function(){
    document.querySelector(".password-cadastrar").type = "text";
    this.style.display = "none";
    document.querySelector(".i-cadastrar-close").style.display = "block";
    document.querySelector(".i-cadastrar-close").addEventListener("click",function(){
        document.querySelector(".password-cadastrar").type = "password";
        this.style.display = "none";
        document.querySelector(".i-cadastrar-open").style.display = "block";
    });
});
