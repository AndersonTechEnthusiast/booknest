var Quantidade = [1,2,3,4,5];
var Etinerario = "Normas de Autentificação de Colaboradores no BookNest";
var SubTitulos = ["Cadastro Básico para Postagem:","Requisitos de Autentificação:","Autentificação Administrativa:","Normas de Conteúdo:","Monitoramento e Revisão:"];
var textos1 = ["Colaboradores podem postar livros sem autentificação, mas devem fornecer informações básicas como nome, e-mail, e uma senha ao se registrarem na plataforma."];
var titulos2 = ["Verificação de e-mail:","Submissão de Perfil:","Avaliação de Contribuições:"];
var textos2 = ["Um e-mail de verificação é enviado para confirmar a identidade.","Preenchimento de um perfil completo com nome, biografia e outros detalhes relevantes para a função.","O administrador avalia a qualidade e relevância das contribuições do colaborador antes da autentificação."];
var titulos3 = ["Atribuição de Funções:","Acesso a Funcionalidades Extras:"];
var textos3 = [" Após autentificação, os colaboradores podem ser atribuídos a diferentes funções (colaborador regular, moderador, etc.).","Colaboradores autentificados podem ter acesso a ferramentas de edição mais avançadas, controle sobre suas postagens, ou a possibilidade de postar conteúdo sem moderação prévia."];
var textos4 = ["Mesmo sem autentificação inicial, os colaboradores devem seguir as normas de conteúdo estabelecidas pela plataforma, como:","Respeitar direitos autorais.","Publicar material apropriado e relevante.","Garantir que o conteúdo é original ou devidamente citado."];
var textos5 = ["O administrador pode revisar as postagens dos colaboradores não autentificados periodicamente. Caso os conteúdos sejam inadequados ou violem as diretrizes do site, o colaborador pode ser banido ou alertado."];
var container_Titulo = document.createElement("span");
var titulo = document.createElement("p");
var imagem1 = document.createElement("img");
var imagem2 = document.createElement("img");
titulo.textContent = Etinerario;
document.querySelector(".containers-explificacoes").appendChild(container_Titulo);
container_Titulo.appendChild(imagem1);
container_Titulo.appendChild(titulo);
container_Titulo.appendChild(imagem2);
imagem1.style.cssText = "width: 50px; height: 50px;";
imagem2.style.cssText = "width: 50px; height: 50px;";
imagem1.src = document.querySelector(".imagem").innerHTML;
imagem2.src = document.querySelector(".imagem").innerHTML;
container_Titulo.style.cssText = "width: 100; text-align: center; padding: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; max-width: 80%; margin: 0 auto;";
titulo.style.cssText = "font-size: 20px; font-weight: 1000; border-bottom: 2px groove white; padding: 10px;";
for(index = 0; index < Quantidade.length; index++)
{
    var boxes = document.createElement("div");
    var titles = document.createElement("span");
    var etinerarios = document.createElement("p");
    var imagens1 = document.createElement("img");
    var imagens2 = document.createElement("img");
    imagens1.classList.add("imagem-autentificação-1");
    imagens2.classList.add("imagem-autentificação-2");
    imagens1.id = "imagem-1-from-"+[index];
    imagens2.id = "imagem-2-from-"+[index];
    imagens1.src = document.querySelector(".imagem").textContent;
    imagens2.src = document.querySelector(".imagem").textContent;
    boxes.classList.add("boxes-autentificação");
    titles.classList.add("titles-autentifição");
    etinerarios.classList.add("etinerarios-autentificação");
    boxes.id = "boxes-"+[index];
    titles.id = "titles-"+[index];
    etinerarios.id = "etinerarios-"+[index];
    boxes.style.cssText = "width: 45%; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7); height: 500px; margin: 20px 0;";
    document.querySelector(".containers-explificacoes").appendChild(boxes);
    if(boxes.id === "boxes-0")
    {
        if(titles.id === "titles-0")
        {
            if(etinerarios.id === "etinerarios-0")
            {
                if(imagens1.id === "imagem-1-from-0")
                {
                    if(imagens2.id === "imagem-2-from-0")
                    {
                        boxes.appendChild(etinerarios);
                        etinerarios.appendChild(imagens1);
                        etinerarios.appendChild(titles);
                        etinerarios.appendChild(imagens2);
                        titles.textContent = SubTitulos[0];
                        imagens1.style.cssText = "width: 50px; height: 50px;";
                        imagens2.style.cssText = "width: 50px; height: 50px;";
                        titles.style.cssText = "border-bottom: 2px groove white; padding: 10px;";
                        etinerarios.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 0 auto;";
                        var ul = document.createElement("ul");
                        for(vetor1 = 0; vetor1 < textos1.length; vetor1++)
                        {
                            var li = document.createElement("li");
                            ul.appendChild(li);
                            li.textContent = textos1[vetor1];
                        }
                        boxes.appendChild(ul);
                    }
                }
            }

        }
    }
    if(boxes.id === "boxes-1")
    {
        if(titles.id === "titles-1")
        {
            if(etinerarios.id === "etinerarios-1")
            {
                if(imagens1.id === "imagem-1-from-1")
                {
                    if(imagens2.id === "imagem-2-from-1")
                    {
                        boxes.appendChild(etinerarios);
                        boxes.appendChild(etinerarios);
                        etinerarios.appendChild(imagens1);
                        etinerarios.appendChild(titles);
                        etinerarios.appendChild(imagens2);
                        titles.textContent = SubTitulos[1];
                        imagens1.style.cssText = "width: 50px; height: 50px;";
                        imagens2.style.cssText = "width: 50px; height: 50px;";
                        titles.style.cssText = "border-bottom: 2px groove white; padding: 10px;";
                        etinerarios.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 0 auto;";
                        var ul = document.createElement("ul");
                        for(vector2 = 0; vector2 < titulos2.length; vector2++)
                        {
                            var li = document.createElement("li");
                            var b = document.createElement("b");
                            var p = document.createElement("p");
                            b.textContent = titulos2[vector2];
                            p.textContent = textos2[vector2];
                            li.appendChild(b);
                            li.appendChild(p);
                            ul.appendChild(li);
                        }
                        boxes.appendChild(ul);
                        ul.style.height = "calc(100% - 50px)";
                        ul.style.display = "flex";
                        ul.style.alignItems = "center";
                        ul.style.justifyContent = "space-evenly";
                        ul.style.flexWrap = "nowrap";
                        ul.style.flexDirection = "column";
                    }
                }
            }
        }
    }
    if(boxes.id === "boxes-2")
    {
        if(titles.id === "titles-2")
        {
            if(etinerarios.id === "etinerarios-2")
            {
                if(imagens1.id === "imagem-1-from-2")
                {
                    if(imagens2.id === "imagem-2-from-2")
                    {
                        boxes.appendChild(etinerarios);
                        etinerarios.appendChild(imagens1);
                        etinerarios.appendChild(titles);
                        etinerarios.appendChild(imagens2);
                        titles.textContent = SubTitulos[2];
                        var ul = document.createElement("ul");
                        imagens1.style.cssText = "width: 50px; height: 50px;";
                        imagens2.style.cssText = "width: 50px; height: 50px;";
                        titles.style.cssText = "border-bottom: 2px groove white; padding: 10px;";
                        etinerarios.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 0 auto;";
                        for(vector3 = 0; vector3 < titulos3.length; vector3++)
                        { 
                            var li = document.createElement("li");
                            var b = document.createElement("b");
                            var p = document.createElement("p");
                            b.textContent = titulos3[vector3];
                            p.textContent = textos3[vector3];
                            li.appendChild(b);
                            li.appendChild(p);
                            ul.appendChild(li);
                        }
                        boxes.appendChild(ul);
                        ul.style.cssText = "height: calc(100% - 50px); display: flex; align-items: center; justify-content: space-evenly; flex-wrap: nowrap; flex-direction: column;";
                    }
                }
            }
        }
    }
    if(boxes.id === "boxes-3")
    {
        if(titles.id === "titles-3")
        {
            if(etinerarios.id === "etinerarios-3")
            {
                if(imagens1.id === "imagem-1-from-3")
                {
                    if(imagens2.id === "imagem-2-from-3")
                    {
                        boxes.appendChild(etinerarios);
                        etinerarios.appendChild(imagens1);
                        etinerarios.appendChild(titles);
                        etinerarios.appendChild(imagens2);
                        titles.textContent = SubTitulos[3];
                        var ul = document.createElement("ul");
                        imagens1.style.cssText = "width: 50px; height: 50px;";
                        imagens2.style.cssText = "width: 50px; height: 50px;";
                        titles.style.cssText = "border-bottom: 2px groove white; padding: 10px;";
                        etinerarios.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 0 auto;";
                        for(vector4 = 0; vector4 < textos4.length; vector4++)
                        {
                            var li = document.createElement("li");
                            li.textContent = textos4[vector4];
                            ul.appendChild(li);
                        }
                        boxes.appendChild(ul);
                        ul.style.cssText = "height: calc(100% - 50px); display: flex; align-items: center; justify-content: space-evenly; flex-wrap: nowrap; flex-direction: column;";
                    }
                }
            }
        }
    }
    if(boxes.id == "boxes-4")
    {
        boxes.style.width = "100%";
        boxes.style.height = "300px";
        if(titles.id === "titles-4")
        {
            if(etinerarios.id === "etinerarios-4")
            {
                if(imagens1.id === "imagem-1-from-4")
                {
                    if(imagens2.id === "imagem-2-from-4")
                    {
                        boxes.appendChild(etinerarios);
                        etinerarios.appendChild(imagens1);
                        etinerarios.appendChild(titles);
                        etinerarios.appendChild(imagens2);
                        titles.textContent = SubTitulos[4];
                        var ul = document.createElement("ul");
                        imagens1.style.cssText = "width: 50px; height: 50px;";
                        imagens2.style.cssText = "width: 50px; height: 50px;";
                        titles.style.cssText = "border-bottom: 2px groove white; padding: 10px;";
                        etinerarios.style.cssText = "width: 100%; max-width: 90%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 0 auto;";
                        for(vector5 = 0; vector5 < textos5.length; textos5++)
                        {
                            var li = document.createElement("li");
                            li.textContent = textos5[vector5];
                            ul.appendChild(li);
                        }
                        boxes.appendChild(ul);
                        ul.style.cssText = "height: calc(100% - 50px); display: flex; align-items: center; justify-content: space-evenly; flex-wrap: nowrap; flex-direction: column;";
                    }
                }
            }
        }
    }
}
document.getElementById("link-show-certificado").addEventListener("click",function(event){
    event.preventDefault();
    // verifique a variavel que definirá se o colaborador é autentificado ou não 
    // se não for mostre esse codigo
    var autentificacao = document.querySelector(".sajdhasdjksahkdjhsakjdhaskjhdkjashdkjhsakjdhkasjhdkjsahdkjashkdjshkasjhdakjhsads").textContent;
    if(autentificacao == false)
    {
    var style = document.createElement("style");
    var overlay = document.createElement("div");
    var modal = document.createElement("div");
    var index = document.createElement("div");
    var superiorBarra = document.createElement("div");
    var inferiorBarra = document.createElement("div");
    var lateralDireita = document.createElement("div");
    var lateralEsquerda = document.createElement("div");
    var BordaSuperiorDireita = document.createElement("div");
    var BordarSuperiorEsquerda = document.createElement("div");
    var BordaInferiorDireita = document.createElement("div");
    var BordaInferiorEsquerda = document.createElement("div");
    var Titulo = document.createElement("div");
    var textTitulo = document.createElement("p");
    var textItalico = document.createElement("i");
    var containerImagem1 = document.createElement("div");
    var containerImagem2 = document.createElement("div");
    var textos = document.createElement("span");
    var BookNestConference = ["Certificado de Colaborador BookNest","A equipe BookNest , esta parabenizando o Colaborador do site,"+"______________________________________________________________________"+"por estar colaborando de forma autentificada pelo nosso site , e colaborando e auxiliando com as postagens no nosso site.","Assinado:","___________________________________________________________________________________"];
    titulodoCertificado = BookNestConference.shift();
    var BookNestImagemLogo = document.createElement("img");
    var BookNestImagemCertificado = document.createElement("img");
    for(paragrafos = 0; paragrafos < BookNestConference.length; paragrafos++)
    {
        var p = document.createElement("p");
        p.classList.add("paragrafos-show-certificados");
        p.id = "paragrafos-"+paragrafos;
        p.textContent = BookNestConference[paragrafos];
        textos.appendChild(p);
    }
    overlay.classList.add("overlay-show-certificado");
    modal.classList.add("modal-show-certificado");
    index.classList.add("index-show-certificado");
    superiorBarra.classList.add("superior-barra-show-certificado");
    inferiorBarra.classList.add("inferior-barra-show-certificado");
    lateralDireita.classList.add("lateral-direita-show-certificado");
    lateralEsquerda.classList.add("lateral-esquerda-show-certificado");
    BordaSuperiorDireita.classList.add("borda-superior-direita-show-certificado");
    BordarSuperiorEsquerda.classList.add("bordar-superior-esquerda-show-certificado");
    BordaInferiorDireita.classList.add("bordar-inferior-direita-show-certificado");
    BordaInferiorEsquerda.classList.add("borda-inferior-esquerda-show-certificado");
    Titulo.classList.add("titulo-show-certificado");
    textTitulo.classList.add("text-titulo-show-certificado");
    textItalico.classList.add("italic-text-titulo-show-certificado");
    containerImagem1.classList.add("container-imagem-1-show-certificado");
    textos.classList.add("textos-show-certificado");
    containerImagem2.classList.add("container-imagem-2-show-certificado");
    BookNestImagemLogo.classList.add("booknest-imagem-logo-show-certificado");
    BookNestImagemCertificado.classList.add("booknest-imagem-certificado-show-certificado");
    modal.appendChild(index);
    index.appendChild(superiorBarra);
    index.appendChild(inferiorBarra);
    index.appendChild(lateralDireita);
    index.appendChild(lateralEsquerda);
    index.appendChild(BordaSuperiorDireita);
    index.appendChild(BordarSuperiorEsquerda);
    index.appendChild(BordaInferiorDireita);
    index.appendChild(BordaInferiorEsquerda);
    index.appendChild(Titulo);
    Titulo.appendChild(textTitulo);
    textTitulo.appendChild(textItalico);
    index.appendChild(containerImagem1);
    index.appendChild(textos);
    index.appendChild(containerImagem2);
    containerImagem1.appendChild(BookNestImagemLogo);
    containerImagem2.appendChild(BookNestImagemCertificado);
    BookNestImagemLogo.src = document.querySelector(".imagem").innerHTML;
    BookNestImagemCertificado.src = document.querySelector(".emblema").innerHTML;
    style.textContent = 
    ".overlay-show-certificado{"+
    "position: fixed;" +
    "top: 0;" +
    "left: 0;" +
    "width: 100%;" +
    "height: 100%;" +
    "background: rgba(0,0,0,0.7);" +
    "z-index: 20;" +
    "cursor: pointer;"
    +"}"+
    ".modal-show-certificado{"+
    "position: fixed;" +
    "top: 50%;" +
    "left: 50%;" +
    "width: 70%;" +
    "height: 80%;" +
    "transform: translate(-50% , -50%);" +
    "background: transparent;" +
    "z-index: 21"
    +"}"+
    ".index-show-certificado{"+
    "width: 100%;" +
    "height: 100%;" +
    "background: white;" +
    "position: relative;" +
    "top: 0;" +
    "left: 0;" +
    "font-family: 'Playwrite CU',sans-serif"
    +"}"+
    ".superior-barra-show-certificado{"+
    "position: absolute;" +
    "top: 0;"+
    "width: 100%;" +
    "height: 20px;" +
    "background: orange;"
    +"}"+
    ".inferior-barra-show-certificado{"+
    "position: absolute;" +
    "bottom: 0;" +
    "width: 100%;" +
    "height: 20px;" +
    "background: orange;"
    +"}"+
    ".lateral-direita-show-certificado{"+
    "position: absolute;" +
    "right: 0;" +
    "width: 20px;" +
    "height: 100%;" +
    "background: orange;"
    +"}"+
    ".lateral-esquerda-show-certificado{"+
    "position: absolute;" +
    "left: 0;" +
    "width: 20px;" +
    "height: 100%;" +
    "background: orange;"
    +"}"+
    ".borda-superior-direita-show-certificado{"+
    "position: absolute;" +
    "top: 0;" +
    "right: 0;" +
    "width: 100px;" +
    "height: 100px;" +
    "background: blue;" +
    "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
    "transform: rotate(180deg);"
    +"}"+
    ".bordar-superior-esquerda-show-certificado{"+
    "position: absolute;" +
    "top: 0;" +
    "left: 0;" +
    "width: 100px;" +
    "height: 100px;" +
    "background: blue;" +
    "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
    "transform: rotate(90deg);"
    +"}"+
    ".bordar-inferior-direita-show-certificado{"+
    "position: absolute;" +
    "bottom: 0;" +
    "right: 0;" +
    "width: 100px;" +
    "height: 100px;" +
    "background: blue;" +
    "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
    "transform: rotate(270deg);"
    +"}"+
    ".borda-inferior-esquerda-show-certificado{"+
    "position: absolute;" +
    "bottom: 0;" +
    "left: 0;" +
    "width: 100px;" +
    "height: 100px;" +
    "background: blue;" +
    "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
    "transform: rotate(360deg);"
    +"}"+
    ".titulo-show-certificado{"+
    "position: relative;" +
    "top: 30px;" +
    "color: black;" +
    "width:100%;" +
    "max-width: 90%;" +
    "text-align: center;" +
    "margin: 0 auto;"
    +"}"+
    ".container-imagem-1-show-certificado{" +
    "position: relative;" +
    "top: 0;"+
    "left: 100px;"+
    "width: 100px;"+
    "height: 100px;"+
    "background: black;"+
    "border-radius: 50%;"
    +"}"+
    ".container-imagem-1-show-certificado > img{"+
    "position: absolute;" +
    "top: -6px;" +
    "left: 0;" +
    "width: 100px;" +
    "height: 100px;"
    +"}"+
    ".textos-show-certificado{"+
    "display: block;" +
    "width: 100%;" +
    "max-width: 80%;" +
    "color: black;" +
    "margin: 0 auto;"
    +"}"+
    ".container-imagem-2-show-certificado{"+
    "position: relative;" +
    "top: -120px;" +
    "left: 820px;" +
    "width: 100px;" +
    "height: 100px;" +
    "border-radius: 50%;"
    +"}" +
    ".container-imagem-2-show-certificado > img{"+
    "width: 100px;" +
    "height: 100px;"
    +"}";
    textItalico.textContent = titulodoCertificado;
    document.head.appendChild(style);
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    overlay.addEventListener("click",function(){
        document.head.removeChild(style);
        document.body.removeChild(this);
        document.body.removeChild(modal);
    });
    }
    else
    if(autentificacao == 1)
    {
        var style = document.createElement("style");
        var overlay = document.createElement("div");
        var modal = document.createElement("div");
        var index = document.createElement("div");
        var superiorBarra = document.createElement("div");
        var inferiorBarra = document.createElement("div");
        var lateralDireita = document.createElement("div");
        var lateralEsquerda = document.createElement("div");
        var BordaSuperiorDireita = document.createElement("div");
        var BordarSuperiorEsquerda = document.createElement("div");
        var BordaInferiorDireita = document.createElement("div");
        var BordaInferiorEsquerda = document.createElement("div");
        var Titulo = document.createElement("div");
        var textTitulo = document.createElement("p");
        var textItalico = document.createElement("i");
        var containerImagem1 = document.createElement("div");
        var containerImagem2 = document.createElement("div");
        var textos = document.createElement("span");
        var Nome = window.certificado.nome;
        var BookNestConference = ["Certificado de Colaborador BookNest","A equipe BookNest , esta parabenizando o Colaborador do site,",window.certificado.nome,"por estar colaborando de forma autentificada pelo nosso site , e colaborando e auxiliando com as postagens no nosso site.","Assinado:","Equipe BookNest"];
        titulodoCertificado = BookNestConference.shift();
        var BookNestImagemLogo = document.createElement("img");
        var BookNestImagemCertificado = document.createElement("img");
        for(paragrafos = 0; paragrafos < BookNestConference.length; paragrafos++)
        {
            var p = document.createElement("p");
            p.classList.add("paragrafos-show-certificados");
            p.id = "paragrafos-"+paragrafos;
            p.textContent = BookNestConference[paragrafos];
            textos.appendChild(p);
        }
        overlay.classList.add("overlay-show-certificado");
        modal.classList.add("modal-show-certificado");
        index.classList.add("index-show-certificado");
        superiorBarra.classList.add("superior-barra-show-certificado");
        inferiorBarra.classList.add("inferior-barra-show-certificado");
        lateralDireita.classList.add("lateral-direita-show-certificado");
        lateralEsquerda.classList.add("lateral-esquerda-show-certificado");
        BordaSuperiorDireita.classList.add("borda-superior-direita-show-certificado");
        BordarSuperiorEsquerda.classList.add("bordar-superior-esquerda-show-certificado");
        BordaInferiorDireita.classList.add("bordar-inferior-direita-show-certificado");
        BordaInferiorEsquerda.classList.add("borda-inferior-esquerda-show-certificado");
        Titulo.classList.add("titulo-show-certificado");
        textTitulo.classList.add("text-titulo-show-certificado");
        textItalico.classList.add("italic-text-titulo-show-certificado");
        containerImagem1.classList.add("container-imagem-1-show-certificado");
        textos.classList.add("textos-show-certificado");
        containerImagem2.classList.add("container-imagem-2-show-certificado");
        BookNestImagemLogo.classList.add("booknest-imagem-logo-show-certificado");
        BookNestImagemCertificado.classList.add("booknest-imagem-certificado-show-certificado");
        modal.appendChild(index);
        index.appendChild(superiorBarra);
        index.appendChild(inferiorBarra);
        index.appendChild(lateralDireita);
        index.appendChild(lateralEsquerda);
        index.appendChild(BordaSuperiorDireita);
        index.appendChild(BordarSuperiorEsquerda);
        index.appendChild(BordaInferiorDireita);
        index.appendChild(BordaInferiorEsquerda);
        index.appendChild(Titulo);
        Titulo.appendChild(textTitulo);
        textTitulo.appendChild(textItalico);
        index.appendChild(containerImagem1);
        index.appendChild(textos);
        index.appendChild(containerImagem2);
        containerImagem1.appendChild(BookNestImagemLogo);
        containerImagem2.appendChild(BookNestImagemCertificado);
        BookNestImagemLogo.src = document.querySelector(".imagem").innerHTML;
        BookNestImagemCertificado.src = document.querySelector(".emblema").innerHTML;
        style.textContent = 
        ".overlay-show-certificado{"+
        "position: fixed;" +
        "top: 0;" +
        "left: 0;" +
        "width: 100%;" +
        "height: 100%;" +
        "background: rgba(0,0,0,0.7);" +
        "z-index: 20;" +
        "cursor: pointer;"
        +"}"+
        ".modal-show-certificado{"+
        "position: fixed;" +
        "top: 50%;" +
        "left: 50%;" +
        "width: 70%;" +
        "height: 80%;" +
        "transform: translate(-50% , -50%);" +
        "background: transparent;" +
        "z-index: 21"
        +"}"+
        ".index-show-certificado{"+
        "width: 100%;" +
        "height: 100%;" +
        "background: white;" +
        "position: relative;" +
        "top: 0;" +
        "left: 0;" +
        "font-family: 'Playwrite CU',sans-serif"
        +"}"+
        ".superior-barra-show-certificado{"+
        "position: absolute;" +
        "top: 0;"+
        "width: 100%;" +
        "height: 20px;" +
        "background: orange;"
        +"}"+
        ".inferior-barra-show-certificado{"+
        "position: absolute;" +
        "bottom: 0;" +
        "width: 100%;" +
        "height: 20px;" +
        "background: orange;"
        +"}"+
        ".lateral-direita-show-certificado{"+
        "position: absolute;" +
        "right: 0;" +
        "width: 20px;" +
        "height: 100%;" +
        "background: orange;"
        +"}"+
        ".lateral-esquerda-show-certificado{"+
        "position: absolute;" +
        "left: 0;" +
        "width: 20px;" +
        "height: 100%;" +
        "background: orange;"
        +"}"+
        ".borda-superior-direita-show-certificado{"+
        "position: absolute;" +
        "top: 0;" +
        "right: 0;" +
        "width: 100px;" +
        "height: 100px;" +
        "background: blue;" +
        "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
        "transform: rotate(180deg);"
        +"}"+
        ".bordar-superior-esquerda-show-certificado{"+
        "position: absolute;" +
        "top: 0;" +
        "left: 0;" +
        "width: 100px;" +
        "height: 100px;" +
        "background: blue;" +
        "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
        "transform: rotate(90deg);"
        +"}"+
        ".bordar-inferior-direita-show-certificado{"+
        "position: absolute;" +
        "bottom: 0;" +
        "right: 0;" +
        "width: 100px;" +
        "height: 100px;" +
        "background: blue;" +
        "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
        "transform: rotate(270deg);"
        +"}"+
        ".borda-inferior-esquerda-show-certificado{"+
        "position: absolute;" +
        "bottom: 0;" +
        "left: 0;" +
        "width: 100px;" +
        "height: 100px;" +
        "background: blue;" +
        "clip-path: polygon(0% 0%, 100% 100%, 0% 100%);"+
        "transform: rotate(360deg);"
        +"}"+
        ".titulo-show-certificado{"+
        "position: relative;" +
        "top: 30px;" +
        "color: black;" +
        "width:100%;" +
        "max-width: 90%;" +
        "text-align: center;" +
        "margin: 0 auto;"
        +"}"+
        ".container-imagem-1-show-certificado{" +
        "position: relative;" +
        "top: 0;"+
        "left: 100px;"+
        "width: 100px;"+
        "height: 100px;"+
        "background: black;"+
        "border-radius: 50%;"
        +"}"+
        ".container-imagem-1-show-certificado > img{"+
        "position: absolute;" +
        "top: -6px;" +
        "left: 0;" +
        "width: 100px;" +
        "height: 100px;"
        +"}"+
        ".textos-show-certificado{"+
        "display: block;" +
        "width: 100%;" +
        "max-width: 80%;" +
        "color: black;" +
        "margin: 0 auto;"
        +"}"+
        ".container-imagem-2-show-certificado{"+
        "position: relative;" +
        "top: -120px;" +
        "left: 820px;" +
        "width: 100px;" +
        "height: 100px;" +
        "border-radius: 50%;"
        +"}" +
        ".container-imagem-2-show-certificado > img{"+
        "width: 100px;" +
        "height: 100px;"
        +"}";
        textItalico.textContent = titulodoCertificado;
        document.head.appendChild(style);
        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        overlay.addEventListener("click",function(){
            document.head.removeChild(style);
            document.body.removeChild(this);
            document.body.removeChild(modal);
        });
    }
});
var autentificado = document.querySelector(".sajdhasdjksahkdjhsakjdhaskjhdkjashdkjhsakjdhkasjhdkjsahdkjashkdjshkasjhdakjhsads").textContent;
if(autentificado == 1)
{
    document.querySelector(".autenficacao-view").style.display = "block";
    document.querySelector(".nao-autentificado").style.display = "none";
}
else
{
    document.querySelector(".autenficacao-view").style.display = "none";
    document.querySelector(".nao-autentificado").style.display = "block";
}