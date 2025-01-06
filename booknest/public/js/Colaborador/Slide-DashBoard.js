// Passando Slides Carrossel
var index = 0;
var translate = 0;
const items = document.querySelectorAll(".containers-dinamic-view-posts").length;
if(items > 0)
{
    document.getElementById("Button-Nexts-DashBoards-3D").addEventListener("click",function(){
        // variavel será usada para impletar o transform: translate()
        translate = translate + 100;
        // Explicando o Modulo:
        // caso você esteja no elemento de número [0]
        // 0 = 0 + 1 % 100
        // 0 = 1 % 100 (dividindo) -> divindo 1 / 100 , quando cabe 100 em 1 ? nenhuma , então o cociente é 0 , o resultado é 0 e o Resto é 1 
        // 1 |100
        // 
        // 1 |100
        //     0
        // 1 |100
        // 0   0
        // 
        // 1 |100
        // 0   0
        //--- 
        // 1 , o proximo número de 0 é 1 , então passa para o proximo [1]
        document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

            variavel.style.transition = "1s";

            variavel.style.transform = "translate(-"+translate+"%)";
        });


        document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

            variavel.classList.remove("active");

        });

        index = (index + 1) % items;

        document.querySelectorAll(".containers-dinamic-view-posts")[index].classList.add("active");
        // document.querySelectorAll(".containers-dinamic-view-posts")[index].querySelector("div").style.transform = "scale(1.1)";

        if(index === 0)
        {

            translate = index;

            document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

                variavel.style.transition = "1s";

                variavel.style.transform = "translate("+translate+"%)";

            });
        }
    });
    document.getElementById("Button-Previous-DashBoards-3D").addEventListener("click",function(){
        translate = translate - 100; // menos porque no transform = translate(-valor) afinal - menos com - menos da mais
        // explicando com Matematica Basica 
        // quando usamos 
        //
        // translate = translate - 100
        //
        // translate está como 0 (é uma variavel definida fora do escopo tanto do escopo do botão nexts e previous)
        //
        // então reformulando 
        // 
        // translate = 0 - 100
        // translate = -100
        // quando colocamos esse valor no transform = translate(-) , ja com o sinal de menos, isso acontece:
        // transform = translate("-"+translate+"%");
        // transform = translate("-"+-100+"%");
        // o computador faz o calculo por si so -(-100) = 100 
        // por isso da positivo
        // se o elemento estiver no 0 
        // explicando o que é Modulo
        // Modulo é o resto da Divisão
        // Caso você esteja no primeiro elemento do conjunto ou seja [0]
        // 0 - 1 + 100 % 100
        // -1 + 100 % 100
        // 99 % 100 (dividindo) 99 / 100 = 0 , quantas vezes 100 cabe em 99 ? nenhuma , ou seja cociente 0 , se o cociente é 0 então o resultado é 0 sendo assim resto 99
        // 99 |100
        //      0
        // 99 |100
        // 0    0
        // 99 |100
        // 0   0
        //----
        // 99 - > Resto 99
        document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

        variavel.classList.remove("active");

        });

        document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

        variavel.style.transform = "translate(-"+translate+"%)";

        });
        index = (index - 1 + items) % items;

        document.querySelectorAll(".containers-dinamic-view-posts")[index].classList.add("active");

        document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

            variavel.addEventListener("click",function(){

                if(variavel.clientWidth > 400)
                {

                    document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

                        variavel.style.transition = "1s";

                        variavel.style.minWidth = "30%";

                        variavel.style.transform = "translate(-"+translate+"%)";
                        
                    });
                }
                else
                {
                    document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){
                        
                        variavel.style.transition = "1s";

                        variavel.style.minWidth = "0";

                    });
                    document.querySelectorAll(".containers-dinamic-view-posts")[index].style.transition = "1s";

                    document.querySelectorAll(".containers-dinamic-view-posts")[index].style.minWidth = "100%";

                    document.querySelectorAll(".containers-dinamic-view-posts")[index].style.transform = "translate(0)";
                }
            });

        });

        if(index === (items -1))
        {
            translate = index * 100;

            document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

            variavel.style.transform = "translate(-"+translate+"%)";
        
            });
        }
        
    });
    // abrindo os elementos 
    document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel,index){

        variavel.addEventListener("click",function(){
            if(variavel.clientWidth > 400)
            {
                // retorne a função do Botão
                document.getElementById("Button-Nexts-DashBoards-3D").disabled = false;
                document.getElementById("Button-Previous-DashBoards-3D").disabled = false;
                
                document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

                    variavel.style.transition = "1s";

                    variavel.style.minWidth = "30%";

                    // isso daqui é algo impressionando demorei para saber o porque funcionava 
                    // a variavel definida no escopo (var translate = 0)
                    // a cada clique abaxo tipo:
                    // 
                    // -> document.getElementById("Button-Nexts-DashBoards-3D").addEventListener("click",function(){ ... que acresenta mais 100 no trasnlate a cada clique , que ao adicionado no parametro ficando transform: "translate(-"+translate+"%)";
                    // caso fossem dois cliques ficaram 200 que aplicado no parametro transform: "translate(-"+translate+")"; seriam -200%
                    // e assim por diante 
                    //
                    // -> document.getElementById("Button-Previous-DashBoards-3D").addEventListener("click",function(){... que tira mais 100 no translate a cada clique , que ao adicionado no parametro ficando transform: "translate(-"+translate+")";
                    // explicando mais afundo essa Evento Ouvinte , sendo ele um evento diferente 
                    // na Matematica temos ... , -3 , -2 , -1 , 0 , 1 , 2 , 3 ,...
                    // -> sendo que no translate tiramos 100 e no escopo definimos como 0 
                    // 0 - 100 = -100
                    // então a cada vez que clicamos (-100) são retirados sendo assim , se 
                    // se clicarmos duas vezes = primeira vez (0 - 100 = -100) , segunda vez (-100 -100 = -200)
                    // e assim por diante 
                    // mas na hora de colocar no parametro que vem a parte interessante
                    // no parametro colocaremos da mesma forma do clique anterior
                    // sendo assim colocaremos transform: "translate(-"+translate+"%)";
                    // se clicamos um unica vez seria então 0 - 100 = -100
                    // que ficaria transform: "translate(-"+(-100)+"%)";
                    // mas na matematica vemos que -(-100) fica 100 positivo afinal menos * menos = mais 
                    // caso clicassemos duas vezes seria então:
                    // Primeira Vez = 0 - 100 = -100
                    // Segunda Vez = -100 - 100 = -200
                    // sendo assim aplicando no parametro
                    // transform: "translate(-"+translate+"%)";
                    // sendo no estilo:
                    // transform: "translate(-"+(-200)+"%)";
                    // que ficaria:
                    // transform "translate(200%)";
                    variavel.style.transform = "translate(-"+translate+"%)";
                    
                });
            }
            else
            {
                document.querySelectorAll(".containers-dinamic-view-posts").forEach(function(variavel){

                    variavel.style.transition = "1s";

                    variavel.style.minWidth = "0";

                });
                document.querySelectorAll(".containers-dinamic-view-posts")[index].style.transition = "1s";

                document.querySelectorAll(".containers-dinamic-view-posts")[index].style.minWidth = "100%";

                document.querySelectorAll(".containers-dinamic-view-posts")[index].style.transform = "translate(0)";
                // não permite mudar de slide quando um elemento estiver acionado
                document.getElementById("Button-Nexts-DashBoards-3D").disabled = true;
                document.getElementById("Button-Previous-DashBoards-3D").disabled = true;
            }
        });
    });
}
else
{
    null
}