// aplique um Para Cada (forEach) em cada Link, quando cada link for clicado ele trará o (index) indice da array (todos os elementos que possuem a mesma classe compoem uma array)
// Para Cada (forEach) Variavel traga o (index) indice da array 
// se o primeiro link for clicado o (index) indice será trazido no caso [0]
// se o segundo link for clicado o (index) indice será trazido no caso [1]
// se o terceiro link for clicado o (index) indice será trazido no caso [2]
// se o quarto link for clicado o (index) indice será trazido no caso [3]
// se o quinto link for clicado o (index) indice será trazido no caso [4]
document.querySelectorAll(".links-li").forEach(function(variavel,index){
    // quando clicado...
    variavel.addEventListener("click",function(event){
        // previna o evento de link
        event.preventDefault();
        // quando qualquer link for clicado todos os popups serão escondidos (display = "none";)
        document.querySelectorAll(".popup").forEach(function(PopUps){
            PopUps.style.display = "none";
            if(PopUps.id == "Cadastrar")
            {
                PopUps.style.display = "block";
            }
        });
        // o overlay será mostrado
        document.querySelector(".containers-popups").style.display = "block";
        // todos escondidos, mas o popup que tiver o mesmo indice do link clicado será mostrado
        document.querySelectorAll(".popup")[index].style.display = "block";
        // pegando o nome do link que foi clicaco 
        var Link_Texto = variavel.textContent;
        // adicionando no PopUp
        document.querySelectorAll(".popup")[index].querySelector(".container-background").querySelector(".container-line").querySelector(".informacoes").querySelector(".elements").querySelector(".title-for-informacoes").querySelector(".title").textContent = Link_Texto;
        // quando o overlay for clicado tudo será desaparecido (display = "none";)
        document.querySelector(".containers-popups").addEventListener("click",function(){
            this.style.display = "none";
            document.querySelectorAll(".popup")[index].style.display = "none";
        });
    });
});
