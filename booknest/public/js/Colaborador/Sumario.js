document.querySelector(".icone-dashboard").addEventListener("mouseenter",function(){
    document.querySelector(".sumario-DashBoard").style.transition = "1s";
    document.querySelector(".sumario-DashBoard").style.height = "1020px";
    document.querySelectorAll(".hidden-sumario").forEach(function(containers){
        containers.style.transition = "1s";
        containers.style.opacity = "0";
    });
    document.querySelector(".sumario-DashBoard > ul").addEventListener("mouseenter",function(){
        document.querySelector(".sumario-DashBoard").style.transition = "1s";
        document.querySelector(".sumario-DashBoard").style.height = "1020px";
        document.querySelectorAll(".hidden-sumario").forEach(function(containers){
            containers.style.transition = "1s";
            containers.style.opacity = "0";
        });
    });
    document.querySelectorAll(".smooth-redirect").forEach(function(links){
        links.addEventListener("click", function(){
            document.querySelector(".sumario-DashBoard").style.transition = "1s";
            document.querySelector(".sumario-DashBoard").style.height = "0";
        });
    });
});
document.querySelector(".icone-dashboard").addEventListener("mouseleave", function(){
    document.querySelector(".sumario-DashBoard").style.transition = "1s";
    document.querySelector(".sumario-DashBoard").style.height = "0";
    document.querySelectorAll(".hidden-sumario").forEach(function(containers){
        containers.style.transition = "1s";
        containers.style.opacity = "1";
    });
    document.querySelector(".sumario-DashBoard > ul").addEventListener("mouseleave",function(){
        document.querySelector(".sumario-DashBoard").style.transition = "1s";
        document.querySelector(".sumario-DashBoard").style.height = "0";
        document.querySelectorAll(".hidden-sumario").forEach(function(containers){
            containers.style.transition = "1s";
            containers.style.opacity = "1";
        });
    });
});