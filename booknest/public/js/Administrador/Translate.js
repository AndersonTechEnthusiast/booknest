document.querySelector(".open-and-close").addEventListener("click",function(event){
    event.preventDefault();
    if(document.getElementById("menu-adm").clientWidth == "70")
    {
        document.getElementById("close").style.display = "none";
        document.getElementById("open").style.display = "block";

        document.getElementById("menu-adm").style.cssText = "transition: 1s; width: 600px";
    }
    else
    if(document.getElementById("menu-adm").clientWidth != "70")
    {
        document.getElementById("close").style.display = "block";
        document.getElementById("open").style.display = "none";

        document.getElementById("menu-adm").style.cssText = "transition: 1s; width: 70px";
    }
});