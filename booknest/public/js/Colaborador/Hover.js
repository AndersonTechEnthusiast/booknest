var backScale = [
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1.0,
    1.1,
    1.2,
    1.1,
    1.0,
    0.9,
    0.8,
    0.7,
    0.6,
    0.5

];
var backIndex = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
];
var backlefts = [];
for(index = 0; index < document.querySelectorAll(".card-scale").length; index++)
{
    backlefts[index] = index*5;
}
// console.log(backlefts);
document.querySelectorAll(".card-scale").forEach(function(variavel,index){
    variavel.addEventListener("mouseenter",function(){
        variavel.style.transform = "scale(1)";
        variavel.style.width = "100%";
        variavel.style.height = "500px";
        variavel.style.zIndex = "1";
        variavel.style.left = "0";
        variavel.style.transition = "1s";
        variavel.querySelector(".paralelograma").style.transition = "1s";
        variavel.querySelector(".paralelograma").style.opacity = "1";
        variavel.querySelector(".paralelograma").style.height = "500px";
        variavel.querySelector(".paralelograma").style.clipPath = "polygon(0% 0%, 40% 0%, 100% 100%, 0% 100%)";
        document.querySelector(".autenfic").style.opacity = "0";
        document.querySelector(".autenfic").style.transition = "1s";
        document.querySelectorAll(".card-scale").forEach(function(subvariavel){
            if(variavel != subvariavel)
            {
                subvariavel.style.transition = "0";
                subvariavel.style.transform = "scale(0)";
                subvariavel.style.width = "0";
                subvariavel.style.zIndex = "-1";
            }
            variavel.addEventListener("mouseleave",function(){
                for(index = 0; index < document.querySelectorAll(".card-scale").length; index++)
                {
                    document.querySelectorAll(".card-scale")[index].style.transform = "scale("+backScale[index]+")";
                    document.querySelectorAll(".card-scale")[index].style.width = "300px";
                    document.querySelectorAll(".card-scale")[index].style.height = "300px";
                    document.querySelectorAll(".card-scale")[index].style.zIndex = backIndex[index];
                    document.querySelectorAll(".card-scale")[index].style.left = backlefts[index]+"%";
                }
                document.querySelectorAll(".card-scale > .paralelograma").forEach(function(li){
                    li.style.transition = "1s";
                    li.style.opacity = "0";
                    li.style.height = "300px";
                    li.style.clipPath = "polygon(0% 0%, 60% 0%, 90% 100%, 0% 100%)";
                });
                document.querySelector(".autenfic").style.opacity = "1";
                document.querySelector(".autenfic").style.transition = "1s";
            });
        });
    });
});