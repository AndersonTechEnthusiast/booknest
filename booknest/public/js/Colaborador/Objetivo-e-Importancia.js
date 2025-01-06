// |----- Atualizado e Otimizado ------|
var Elemento = document.querySelector(".tags-container").innerHTML;
var conteudo = document.querySelector(".tags-container");
var incongnita = ((conteudo.innerHTML.length * conteudo.offsetHeight)/conteudo.scrollHeight);
// console.log("Valor de X:"+incongnita+" letras");
// conteudo.textContent.length (letras) ===> conteudo.scrollHeight (pixels)
// X (letras) ===> conteudo.offsetHeight (pixels)
// Matematica de Proporção (Regra de Três)
// total de letras ===> total de pixels
// letras que caberiam no elemento ===> pixels do elemento
// scrollHeight => tamanho do conteudo do elemento
// offsetHeight => tamanho do elemento
// logica: se sei que o total de letras está para o tamanho do conteudo do elemento (que é completo)
// tambem saberei a quantidade de letras que caibam no tamanho do elemento 
// total de letras ===> conteudo do elemento (scrollHeight)
// X letras ===>  elemento (offsetHeight)
// ao descobrir quanto é o X de letras , aplicamos da seguinte maneira 
// subtraimos o X do número total de letras 
// na aplicação pratica demonstrativa: X - (total de letras) = y (letras que devem ser tiradas para que fiquem no valor de X)
// na aplicação pratica demonstrativa reversa: (total de letras) - y = X 
// então na pratica estamos deixando a quantidade de letras X no quadrante do (offsetHeight) 
// para que a condição igualitaria matematica (X letras ===> elemento(offsetHeight)) seja verdadeira
// Math.round() -> usado para arredondar números aleatorios
// console.log("Caracteres do Conteudo: "+conteudo.textContent.length+" letras");
// console.log("Pixels do Conteudo: "+conteudo.scrollHeight+" px");
// console.log("Pixels do Elemento do Conteudo: "+conteudo.offsetHeight+" px");
// console.log("diferença das letras: "+ diferença + " letras");
var Arrendondado = Math.round(incongnita);
// console.log("Valor de X: "+Arrendondado+" letras");
var diferença = (conteudo.innerHTML.length - Arrendondado);
if(document.querySelector(".tags-container").scrollHeight > document.querySelector(".tags-container").offsetHeight)
{
    // e melhor usar neste contexto o "innerHTML" , pois mantem a estilização , enquanto o "textContent" , ignora toda estilização e estrutura , e considera apenas os textos
    document.querySelector(".tags-container").innerHTML = document.querySelector(".tags-container").innerHTML.slice(0,-diferença);
    if(document.querySelector(".tags-container").innerHTML.length === Arrendondado)
    {
        document.querySelector(".tags-container").innerHTML = document.querySelector(".tags-container").innerHTML.slice(0,-40);
    }
}
// pegando todos os elementos com a classe de ".tags-objetivos-e-importancia"
var array = document.querySelectorAll(".tags-objetivos-e-importancia");
// variavel de valor 0 (para somar)
var container_soma_de_tamanho_de_conteudo_do_elemento_juntos = 0;
// laço de repetição para acessar todos os elementos com a classe ".tags-objetivos-e-importancia"
for (let index = 0; index < array.length; index++) {
    // soma de scrollHeight de cada elemento restante (estavam ultrapassando ainda)
    container_soma_de_tamanho_de_conteudo_do_elemento_juntos = container_soma_de_tamanho_de_conteudo_do_elemento_juntos + array[index].scrollHeight;
}
// for (let index = 0; index < array.length; index++) {
//     console.log("quantidade de caracteres das divs ('.tags-objetivos-e-importancia') restantes: "+array[index].innerHTML.length);
// }
// console.log("quantidade de caracteres da ultima div ('.tags-objetivos-e-importancia'): "+document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML.length);
// estou pegando o ultimo elemento da array de divs classificadas como (".tags-objetivos-e-importancia")
// pegando o ultimo elemento document.querySelectorAll(".tags-objetivos-e-importancia")[chave da array]
// chave da array será document.querySelectorAll(".tags-objetivos-e-importancia").length que pegara todos os elementos que no caso são 5 elementos , mas adicionaremos -1 , ficando document.querySelectorAll(".tags-objetivos-e-importancia").length - 1 , então a chave será 4 , ou seja a chave do ultimo termo da array 
// depois pegamos o innerHTML dele (lembrando que o innerHTML é para não ignoramos a estilização) 
//e depois retiramos do proprio innerHTML desse modo aqui: document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML = document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML.slice(0, -document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML.length)
// nesse caso ai encima aloco no proprio innerHTML o innerHTML.slice(0 , retirando o innerHTML.length)
// de modo estrutural seria algo do tipo: 
// ARRAY[ARRAY.lenght - 1].innerHTML = ARRAY[ARRAY - 1].innerHTML.slice(0 , -ARRAY[ARRAY - 1].innerHTML.length)
document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML = document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML.slice(0 , -document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML.length);
var nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados = 0;
for (let index = 0; index < array.length; index++) {
    nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados = nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados + array[index].scrollHeight;
}
// diminuindo os Pixels (não as caracteres)
if(nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados > document.querySelector(".tags-container").offsetHeight)
{
    // o que foi feita aqui ? 
    // Nota: Mesmo que as Caracteres dos containers foram retiradas mas o height do elemento ainda estava contando , (um elemento vazio mas com height definido)
    // em (valor_de_pixels_a_se_retirar) estamos pegando a soma do tamanho dos conteudo (".tags-objetivo-e-importancia") dos subelementos (scrollHeight) dos elementos restantes que ainda ultrapassam do elemento (".tags-container") , menos o tamanho do elemento do elemento (offsetHeight)
    // com esse valor , eu tiro ele do tamanho atual do elemento (.clientHeight) , ou seja subtraio do tamanho (height) do elemento atual
    // com esse novo valor (diferença do tamanho atual pelo menos o valor da diferença do tamanho dos conteudos do subelementos somados menos o tamanho do elemento) se torna o novo height do ultimo subelemento
    // estrutura seria mais ou menos assim: 
    // X = soma dos tamanhos somados do subelementos (".tags-objetivo-e-importancia") = nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados
    // Y = tamanho do elemento (".tags-container") = document.querySelector(".tags-container").offsetHeight
    // Z = X - Y
    // Z = diferença de (X) e (Y)
    // W = altura atual do ultimo subelemento (.clientHeight)
    // A = W - Z
    // Altura do ultimo subelemento.height = A
    // demonstração pratica com valores reais:
    // vamos supor que: 
    // os valores dos subelementos somados dê 600
    // o valor do elemento é 500
    // a diferença dos valores acima é (600 - 500) = 100
    // essa diferença menos o valor atual da altura do subelemento (.clientHeight) que seria no caso 300 - 100 = 200
    // essa nova diferença objtida acima sera a nova altura do ultimo subelemento , sendo a altura do ultimo subelemento 200
    var valor_de_pixels_a_se_retirar = (nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados - document.querySelector(".tags-container").offsetHeight);
    var valor_da_diferença_do_valor_de_pixels_a_se_retirar_e_tamanho_atual_do_elemento = (document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].clientHeight - valor_de_pixels_a_se_retirar);
    document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].style.height = document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].clientHeight - valor_da_diferença_do_valor_de_pixels_a_se_retirar_e_tamanho_atual_do_elemento + "px";
    
}
// console.log(nova_diferneça_entre_tamanho_do_elemento_e_tamanho_do_conteudo_do_elemento_interno_das_divs_somados);
var soma_dos_subconjuntos = 0;
for (let index = 0; index < array.length; index++) {
    soma_dos_subconjuntos = soma_dos_subconjuntos + array[index].scrollHeight;
}
// console.log("novo tamanho da soma dos subjconjuntos: "+soma_dos_subconjuntos);
if(soma_dos_subconjuntos <= document.querySelector(".tags-container").offsetHeight)
{
    var link = document.createElement("a");
    link.href = "#";
    link.classList.add("link-tags-objetivos-e-importancia");
    link.id = "objetivo-e-importancia";
    link.textContent = "Ler Mais...";
    link.style.width = "300px";
    link.style.textDecoration = "none";
    link.style.color = "white";
    link.style.cursor = "pointer";
    document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML = document.querySelectorAll(".tags-objetivos-e-importancia")[document.querySelectorAll(".tags-objetivos-e-importancia").length - 1].innerHTML.slice(0 , -20);
    document.querySelector(".tags-container").appendChild(link);
    link.addEventListener("click",function(event){
        event.preventDefault();
        //criado elementos
        var estilização = document.createElement("style");
        var overlay = document.createElement("div");
        var modal = document.createElement("div");
        var popup = document.createElement("div");
        var line = document.createElement("div");
        var index = document.createElement("div");
        var title = document.createElement("div");
        var text = document.createElement("p")
        var container = document.createElement("div");
        //classificando elementos
        overlay.classList.add("overlay-popup-objetivos-e-importancias");
        modal.classList.add("modal-popup-objetivos-e-importancias");
        popup.classList.add("popup-objetivos-e-importancias");
        line.classList.add("line-objetivos-e-importancias");
        index.classList.add("index-objetivo-e-importancia");
        title.classList.add("title-objetivo-e-importancia");
        text.classList.add("text-objetivos-e-importancia");
        container.classList.add("container-objetivos-e-importancia");
        //adicionando valores
        text.textContent = "Objetivos e Importâncias de um Colaborador do BookNest";
        container.innerHTML = Elemento;
        //estruturando elementos
        modal.appendChild(popup);
        popup.appendChild(line);
        line.appendChild(index);
        index.appendChild(title);
        title.appendChild(text);
        index.appendChild(container);
        //estilizando elementos
        estilização.textContent = 
        ".overlay-popup-objetivos-e-importancias{"+
        "position: fixed;" +
        "top: 0;" +
        "left: 0;" +
        "width: 100%;" + 
        "height: 100%;" + 
        "background: rgba(0,0,0,0.7);" + 
        "z-index: 10;" + 
        "cursor: pointer;"
        +"}" + 
        ".modal-popup-objetivos-e-importancias{"+
        "position: fixed;" +
        "top: 50%;" + 
        "left: 50%;" +
        "width: 90%;" + 
        "height: 90%;" +
        "transform: translate(-50% , -50%);" +  
        "background: #333;" +
        "border-radius: 20px;" + 
        "display: flex;" + 
        "align-items: center;" + 
        "justify-content: center;" +
        "flex-wrap: nowrap;" +
        "flex-direction: row;" +
        "padding: 10px;" +
        "z-index: 11;" +
        "font-family: 'Montserrat',sans-serif;"
        +"}"+
        ".popup-objetivos-e-importancias{"+
        "width: 98%;" + 
        "height: 98%;" +
        "display: flex;" + 
        "align-items: center;" +
        "justify-content: center;" +
        "flex-wrap: nowrap;" + 
        "flex-direction: row;" +
        "background: white;" +
        "border-radius: 20px;"
        +"}"+
        ".line-objetivos-e-importancias{"+
        "width: 98%;" +
        "height: 98%;" + 
        "display: flex;" + 
        "align-items: center;" +
        "justify-content: center;" + 
        "flex-wrap: nowrap;" +
        "flex-direction: row;" + 
        "background: #333;" +
        "border-radius: 20px;"
        +"}"+
        ".index-objetivo-e-importancia{"+
        "position: relative;" +
        "top: 0;" +
        "left: 0;" +
        "width: 100%;" +
        "height: 100%;" +
        "background: transparent;" + 
        "display: flex;" +
        "align-items: center;" +
        "justify-content: space-between;" + 
        "flex-wrap: nowrap;" +
        "flex-direction: column;"
        +"}"+
        ".title-objetivo-e-importancia{"+
        "position: absolute;" +
        "top: -13px;" +
        "width: 100%;" +
        "height: 20px;" +
        "max-width: 40%;" +
        "background: #333;" +
        "display: flex;" +
        "align-items: center;" +
        "justify-content: center;" +
        "margin: 0 auto;" 
        +"}"+
        ".text-objetivos-e-importancia{"+
        "color: white;"
        +"}" + 
        ".container-objetivos-e-importancia{"+
        "width: 100%;" +
        "height: 500px;" +
        "max-height: 500px;" +
        "display: flex;" + 
        "align-items: center;" +
        "justify-content: space-between;" +
        "flex-wrap: nowrap;" +
        "flex-direction: column;" +
        "overflow-y: scroll;" + 
        "padding: 20px 0;" 
        +"}"+
        ".tags-objetivos-e-importancia{"+
        "width: 50%;"
        +"}";
        //adicionando elementos
        document.head.appendChild(estilização);
        document.body.appendChild(overlay);
        document.body.appendChild(modal);
        //removendo elementos
        overlay.addEventListener("click",function(){
            document.head.removeChild(estilização);
            document.body.removeChild(this);
            document.body.removeChild(modal);
        });
    });
}
