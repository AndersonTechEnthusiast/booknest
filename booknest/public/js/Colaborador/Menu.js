document.querySelector(".link-open-and-close-menu").addEventListener("click",function(event){
    event.preventDefault();
    if(document.querySelector(".menu").clientWidth === 70)
    {
        document.querySelector(".menu").style.transition = "1s";
        document.querySelector(".menu").style.width = "600px";
        document.querySelector(".submenu").style.transition = "1s";
        document.querySelector(".submenu").style.width = "98%";
        document.querySelector(".redirect-pages").style.transition = "1s";
        document.querySelector(".redirect-pages").style.width = "98%";
        document.getElementById("open-menu").style.display = "none";
        document.getElementById("close-menu").style.display = "block";
        document.querySelector(".container-icons").style.transition = "1s";
        document.querySelector(".container-icons").style.width = "calc(100% - 60px)";
        document.querySelector(".container-icons").style.paddingLeft = "60px";
    }
    else
    if(document.querySelector(".menu").clientWidth !== 70)
    {
        document.querySelector(".menu").style.transition = "1s";
        document.querySelector(".menu").style.width = "70px";
        document.querySelector(".submenu").style.transition = "1s";
        document.querySelector(".submenu").style.width = "90%";
        document.querySelector(".redirect-pages").style.transition = "1s";
        document.querySelector(".redirect-pages").style.width = "90%";
        document.getElementById("open-menu").style.display = "block";
        document.getElementById("close-menu").style.display = "none";
        document.querySelector(".container-icons").style.transition = "1s";
        document.querySelector(".container-icons").style.width = "100%";
        document.querySelector(".container-icons").style.paddingLeft = "0";
    }
});