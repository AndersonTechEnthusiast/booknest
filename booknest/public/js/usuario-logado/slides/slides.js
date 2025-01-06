document.querySelectorAll(".links-options-circle-slides").forEach(function(variavel,index){
    variavel.addEventListener("click",function(event){
        event.preventDefault();
        document.querySelectorAll(".slides").forEach(function(slides){
            slides.style.transition = "1s";
            slides.style.left = "100%";
        });
        document.querySelectorAll(".circle-slides-activador").forEach(function(circle){
            circle.style.transition = "1s";
            circle.style.background = "transparent";
        });
        document.querySelectorAll(".circle-slides-activador")[index].style.transition = "1s";
        document.querySelectorAll(".circle-slides-activador")[index].style.background = "white";
        document.querySelectorAll(".slides")[index].style.transition = "1s";
        document.querySelectorAll(".slides")[index].style.left = "0";
    });
});