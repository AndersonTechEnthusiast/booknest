document.querySelector(".i-login-open").addEventListener("click",function(){
    document.querySelector(".password-login").type = "text";
    this.style.display = "none";
    document.querySelector(".i-login-close").style.display = "block";
    document.querySelector(".i-login-close").addEventListener("click",function(){
        document.querySelector(".password-login").type = "password";
        this.style.display = "none";
        document.querySelector(".i-login-open").style.display = "block";
    });
});
