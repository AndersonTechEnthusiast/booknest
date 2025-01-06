import * as pdfjsLib from '../../PDFjs/build/pdf.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = '../../PDFjs/build/pdf.worker.mjs';
import * as pdf from '../../PDFjs/build/pdf.mjs';
pdf.GlobalWorkerOptions.workerSrc = '../../PDFjs/build/pdf.worker.mjs';
//Container 1
if(window.base)
{
    var base = Object.values(window.base);
    var baseDecode = atob(base).split(":");
    var baseDecodeDecode = [];
    for (let index = 0; index < baseDecode.length; index++) {
        baseDecodeDecode.push(String.fromCharCode(atob(baseDecode[index])));
    }
    var ArrayImagensBase = baseDecodeDecode.join("").split(":");
    // for(let baseDecode = 0; baseDecode < 1; baseDecode++)
    // {
    //     //decodifica o codigo codificado em PHP com base64_encode
    //     //atob -> decodifica
    //     //btoa -> codifica
    //     base = atob(base);
    // }
    var DashBoard = document.createElement("div");
    DashBoard.classList.add("DashBoards-Slides-Container-Total");
    DashBoard.id = "DashBoard-1-Slides";
    var Button_previous = document.createElement("button");
    var Button_Nexts = document.createElement("button");
    var Icon_Button_previous = document.createElement("i");
    var Icon_Button_Next = document.createElement("i");
    Icon_Button_Next.classList.add("icon-button");
    Icon_Button_previous.classList.add("icon-button");
    Icon_Button_Next.id = "icon-button-next";
    Icon_Button_previous.id = "icon-button-previous";
    Icon_Button_previous.classList.add("fa-solid");
    Icon_Button_previous.classList.add("fa-arrow-left");
    Icon_Button_Next.classList.add("fa-solid");
    Icon_Button_Next.classList.add("fa-arrow-right");
    Button_previous.classList.add("button-corrossel-3d-dashboards-1");
    Button_Nexts.classList.add("button-corrossel-3d-dashboards-2");
    Button_Nexts.id = "Button-Nexts-DashBoards-3D";
    Button_previous.id = "Button-Previous-DashBoards-3D";
    var EstilizaçãoDocumentosPDF = document.createElement("style");
    EstilizaçãoDocumentosPDF.textContent = ".active-document-PDF{left: 0; transition: 1s;}";
    document.head.appendChild(EstilizaçãoDocumentosPDF);
    var estilização = document.createElement("style");
    estilização.textContent = 
    ".containers-dinamic-view-posts{"+
    "width: 100%;" +
    "min-width: 30%;" +
    "height: 100%;" +
    "box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7);" +
    "margin-top: 10px;" +
    "margin-right: 0px;"
    +"}"+
    ".DashBoards-Slides-Container-Total{position: relative;top: 0;left: 0;width: 100%;max-width: 90%;display: flex;align-items: center;justify-content: flex-start;flex-wrap: nowrap;flex-direction: row;height: 500px;overflow: hidden;scroll-snap-type: x mandatory;padding: 20px;margin: 0 auto;box-sizing: border-box;}";
    var DashBoard = document.createElement("div");
    DashBoard.classList.add("DashBoards-Slides-Container-Total");
    DashBoard.id = "DashBoards-Slides-Container-Total-1";

    for(let createDocuments = 0; createDocuments < ArrayImagensBase.length; createDocuments++)
    {
        var divs = document.createElement("div");
        divs.classList.add("containers-dinamic-view-posts");
        divs.id = "containers-dinamic-view-posts-"+createDocuments;
        divs.style.backgroundImage = "url(../../publicacao/"+ArrayImagensBase[createDocuments]+")";
        divs.style.backgroundSize = "100% 100%";
        divs.style.backgroundPosition = "center";
        divs.style.backgroundRepeat = "no-repeat";
        divs.style.backgroundAttachment = "fixed";
        if(divs.id === "containers-dinamic-view-posts-0")
        {
            divs.classList.add("active");
        }

        Button_previous.style.position = "absolute";
        Button_previous.style.top = "50%";
        Button_previous.style.left = "0";
        Button_previous.style.transform = "translate(0, -50%)";
        Button_previous.style.width = "100px";
        Button_previous.style.height = "100px";
        Button_previous.style.border = "none";
        Button_previous.style.background = "gray";
        Button_previous.style.color = "white";
        Button_previous.style.opacity = "0.5";
        Button_previous.style.display = "flex";
        Button_previous.style.alignItems = "center";
        Button_previous.style.justifyContent = "center";
        Button_previous.style.fontSize = "20px";
        Button_previous.style.transition = "1s";
        Button_previous.style.cursor = "pointer";

        Button_Nexts.style.position = "absolute";
        Button_Nexts.style.top = "50%";
        Button_Nexts.style.left = "100%";
        Button_Nexts.style.transform = "translate(-100% , -50%)";
        Button_Nexts.style.width = "100px";
        Button_Nexts.style.height = "100px";
        Button_Nexts.style.border = "none";
        Button_Nexts.style.background = "gray";
        Button_Nexts.style.color = "white";
        Button_Nexts.style.opacity = "0.5";
        Button_Nexts.style.display = "flex";
        Button_Nexts.style.alignItems = "center";
        Button_Nexts.style.justifyContent = "center";
        Button_Nexts.style.fontSize = "20px";
        Button_Nexts.style.transition = "1s";
        Button_Nexts.style.cursor = "pointer";

        Button_previous.addEventListener("mouseenter",function(){
            this.style.transition = "1s";
            this.style.opacity = "1";
        });

        Button_previous.addEventListener("mouseleave", function(){
            this.style.transition = "1s";
            this.style.opacity = "0.5";
        });

        Button_Nexts.addEventListener("mouseenter",function(){
            this.style.transition = "1s";
            this.style.opacity = "1";
        });

        Button_Nexts.addEventListener("mouseleave", function(){
            this.style.transition = "1s";
            this.style.opacity = "0.5";
        });

        DashBoard.appendChild(divs);
        DashBoard.appendChild(Button_previous);
        Button_previous.appendChild(Icon_Button_previous);
        DashBoard.appendChild(Button_Nexts);
        Button_Nexts.appendChild(Icon_Button_Next);
        document.getElementById("section-1-dashboard").appendChild(DashBoard);
    }

    document.head.appendChild(estilização);
}
else
{
    var div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.flexWrap = "nowrap";
    div.style.flexDirection = "row";
    div.innerHTML = "<p>Você Não Possui Publicações Recentes !!!</p>";
    document.getElementById("section-1-dashboard").appendChild(div);
}
// fim do Container 1
// Container 2
var TítulodoLivro = document.createElement("input");
var Autor = document.createElement("input");
var Gênero = document.createElement("input");
var Sinopse = document.createElement("input");
var DatadePublicação = document.createElement("input");
var Editora = document.createElement("input");
var NúmerodePáginas = document.createElement("input");
var Formato = document.createElement("input");
var ISBN = document.createElement("input");
var Preço = document.createElement("input");
var Classificação = document.createElement("input");
var SubmitPost = document.createElement("button");
var PostarLivroContainer = document.createElement("form");
var Container2 = {
    titulo: TítulodoLivro,
    autor: Autor,
    genero: Gênero,
    sinopse: Sinopse,
    data: DatadePublicação,
    editora: Editora,
    numero: NúmerodePáginas,
    formato: Formato,
    isbn: ISBN,
    preco: Preço,
    classificacao: Classificação
}
var Classes = [
    'titulo-dashboards-input',
    'autor-dashboards-input',
    'genero-dashboards-input',
    'sinopse-dashboards-input',
    'data-dashboards-input',
    'editora-dashboards-input',
    'numero-dashboards-input',
    'formato-dashboards-input',
    'isbn-dashboards-input',
    'preco-dashboards-input',
    'classificacao-dashboards-input'
];
var ids = [
    'titulo-dashboards-input-',
    'autor-dashboards-input-',
    'genero-dashboards-input-',
    'sinopse-dashboards-input-',
    'data-dashboards-input-',
    'editora-dashboards-input-',
    'numero-dashboards-input-',
    'forrmato-dashboards-input-',
    'isbn-dashboards-input-',
    'preco-dashboards-input-',
    'classificacao-dashboards-input-',
];
var names = [
    'titulo',
    'autor',
    'genero',
    'sinopse',
    'data',
    'editora',
    'numero',
    'formato',
    'ISBN',
    'preco',
    'classificacao'
];
var placeholders = [
    'Insira o Título do Livro...',
    'Insira o Autor do Livro...',
    'Insira o Gênero do Livro...',
    'Insira a Sinopse do Livro...',
    'Insida a Data de Publicação do Livro...',
    'Insira a Editora do Livro...',
    'Insira o Número de Páginas do Livro...',
    'Insira o Formato do Livro...',
    'Insira o ISBN do Livro...',
    'Insira o Preço do Livro...',
    'Insira a Classificação do Livro...'
];
var textLabels = [
    'Título: ',
    'Autor: ',
    'Gênero: ',
    'Sinopse: ',
    'Data de Publicação: ',
    'Editora: ',
    'Números de Páginas: ',
    'Formato: ',
    'ISBN: ',
    'Preço: ',
    'Classificação: '
];

var InputFileImagemDaPostagemDashBoards = document.createElement("input");

InputFileImagemDaPostagemDashBoards.type = "file";

InputFileImagemDaPostagemDashBoards.classList.add("arquivo-Imagem-do-Post-File-Input-DashBoards");

InputFileImagemDaPostagemDashBoards.id = "arquivo-Imagem-do-Post-File-Input-DashBoards";

InputFileImagemDaPostagemDashBoards.name = "Imagem-da-Postagem";

InputFileImagemDaPostagemDashBoards.accept = "image/png, image/jpeg, image/webp, image/avif, image/jpg, image/gif, image/bmp, image/tiff, image/svg+xml";
var ImagemPreview = document.createElement("img");

ImagemPreview.classList.add("imagem-preview-dashboards");

ImagemPreview.id = "imagem-preview-dashboards-1";



var labelImagemPreview = document.createElement("label");

labelImagemPreview.classList.add("label-for-Imagem-Preview");

labelImagemPreview.id = "label-for-Imagem-Preview-1";

var firstContainerForPostagem = document.createElement("div");

firstContainerForPostagem.classList.add("primeiro-container-para-a-postagem-do-Livro");

firstContainerForPostagem.id = "primeiro-container-para-a-postagem-do-Livro-1";

labelImagemPreview.appendChild(ImagemPreview);

firstContainerForPostagem.appendChild(labelImagemPreview);

firstContainerForPostagem.appendChild(InputFileImagemDaPostagemDashBoards);

var secoundContainerForPostagem = document.createElement("div");

secoundContainerForPostagem.classList.add("segundo-container-para-a-postagem-do-Livro");

secoundContainerForPostagem.id = "segundo-container-para-a-postagem-do-Livro";

var ContainerTotalFromForm = document.createElement("div");

ContainerTotalFromForm.classList.add("Container-Total-From-Form-DashBoards-Postagem");

ContainerTotalFromForm.id = "Container-Total-From-Form-DashBoards-Postagem-1";

for(let vetor = 0; vetor < Object.keys(Container2).length; vetor++)
{
    var LabelsForInputsDashBoardsPostagem = document.createElement("label");
    LabelsForInputsDashBoardsPostagem.classList.add("Labels-DashBoards-Postagem");
    LabelsForInputsDashBoardsPostagem.id = "Labels-DashBoards-Postagem-"+vetor;
    LabelsForInputsDashBoardsPostagem.textContent = textLabels[vetor];
    var DivsContainersForInputsDashBoardsPostagem = document.createElement("div");
    DivsContainersForInputsDashBoardsPostagem.classList.add("Container-For-Inputs-DashBoards-Postagem");
    DivsContainersForInputsDashBoardsPostagem.id = "Container-For-Inputs-DashBoards-Postagem-"+vetor;
            //Pega as Chaves (titulo,autor,genero,...)
    var Keys = Object.keys(Container2);
            // Container2[Keys[vetor]]
            //Keys pega as Chaves do Array Container2
            //Keys[vetor] percorre todos os elementos
            //Keys[vetor] dentro do Container2 é o Valor da Chave 
    Container2[Keys[vetor]].classList.add(Classes[vetor]);
            //Pega os Valores 
    var Values = Object.values(Container2)
    Values[vetor].id = ids[vetor]+[vetor];
    Values[vetor].name = names[vetor];
    Values[vetor].placeholder = placeholders[vetor];
    DivsContainersForInputsDashBoardsPostagem.appendChild(LabelsForInputsDashBoardsPostagem);
    DivsContainersForInputsDashBoardsPostagem.appendChild(Values[vetor]);
    Values[vetor].style.cssText = "width: 100%; background: transparent; border: none; font-family: 'Montserrat', sans-serif; outline: none; color: white; padding-left: 10px;";
    secoundContainerForPostagem.appendChild(DivsContainersForInputsDashBoardsPostagem);
    DivsContainersForInputsDashBoardsPostagem.style.cssText = "width: 100%; border: 2px groove white; display: flex; padding: 10px; flex-wrap: nowrap; flex-direction: row; white-space: nowrap;";
}
ContainerTotalFromForm.appendChild(firstContainerForPostagem);
ContainerTotalFromForm.appendChild(secoundContainerForPostagem);
document.getElementById("section-2-dashboard").appendChild(PostarLivroContainer);
ImagemPreview.src = "../../img/Usuario-Logado/Foto-default.webp";
PostarLivroContainer.classList.add("Container-Postar-Livro");
PostarLivroContainer.id = "Container-Postar";
PostarLivroContainer.method = "POST";
PostarLivroContainer.action = "";
PostarLivroContainer.enctype = "multipart/form-data";
PostarLivroContainer.appendChild(ContainerTotalFromForm);
var ContainerSubmit = document.createElement("div");
ContainerSubmit.classList.add("Container-Submit-DashBoards-Postagem");
ContainerSubmit.id = "Container-Submit-DashBoards-Postagem-1";
PostarLivroContainer.style.cssText = "width: 100%; height: 2500px; display: flex; align-items: center; justify-content: space-between; flex-direction: column; flex-wrap: nowrap; transition: 1s;";
labelImagemPreview.htmlFor = "arquivo-Imagem-do-Post-File-Input-DashBoards";

InputFileImagemDaPostagemDashBoards.style.display = "none";

ContainerTotalFromForm.style.cssText = "width: 100%;"+"height: 500px;"+"display: flex;"+"align-items: center;"+"justify-content: space-between;"+"flex-wrap: nowrap;"+"flex-direction: row;";

labelImagemPreview.style.cssText = "display: block; width: 100%; height: 100%;";

firstContainerForPostagem.style.cssText = "width: 50%; height: 100%;";

secoundContainerForPostagem.style.cssText = "width: 50%; max-width: 40%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; flex-direction: column; margin: 0 auto;";

ImagemPreview.style.cssText = "width: 100%; height: 100%; cursor: pointer";


ContainerSubmit.appendChild(SubmitPost);

ContainerSubmit.style.cssText = "width: 100%; height: 80px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;";

SubmitPost.type = "submit";

SubmitPost.textContent = "Cadastrar Nova Postagem";

SubmitPost.style.cssText = "position: relative; top: 0; left: 0; width: 300px; height: 40px; border: 2px groove white; border-radius: 10px; background: transparent; color: white; font-family: 'Montserrat',sans-serif; cursor: pointer;";

var BarraHoverMouseSubmitButton = document.createElement("span");

BarraHoverMouseSubmitButton.style.cssText = "position: absolute; top: 0; left: 0; border-radius: 10px; width: 0;  height: 100%; background: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; color: #333; transition: 1s; opacity: 0";
SubmitPost.appendChild(BarraHoverMouseSubmitButton);
SubmitPost.addEventListener("mouseenter",function(){
    BarraHoverMouseSubmitButton.style.cssText = "position: absolute; top: 0; left: 0; border-radius: 10px; width: 100%;  height: 100%; background: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; color: #333; transition: 1s; opacity: 1";
});
SubmitPost.addEventListener("mouseleave",function(){
    BarraHoverMouseSubmitButton.style.cssText = "position: absolute; top: 0; left: 0; border-radius: 10px; width: 0;  height: 100%; background: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; color: #333; transition: 1s; opacity: 0";
});
BarraHoverMouseSubmitButton.textContent = "Cadastrar Nova Postagem !!!";
BarraHoverMouseSubmitButton.style.fontWeight = "700";
        //change é tipo alterar em português
InputFileImagemDaPostagemDashBoards.addEventListener("change",function(event){
            //no src , aplico um 
            //URL e nesse URL aplico
            //createObjectURL que seria 
            //crie um objeto URL
    ImagemPreview.src = URL.createObjectURL(event.target.files[0]);
});
        //Envio do Texto (conteudo do livro)
var COntainerConteudoDoLivro = document.createElement("div");
COntainerConteudoDoLivro.classList.add("Container-Conteudo-Do-Livro-PDF");
COntainerConteudoDoLivro.id = "Container-Conteudo-Do-Livro-PDF";
COntainerConteudoDoLivro.style.cssText = "width: 100%; height: 1000px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;";
var TitleContainerElementosConteudoDoLivro = document.createElement("span");
var TextoTitleContainerElementosConteudodDoLivro = document.createElement("p");
TitleContainerElementosConteudoDoLivro.classList.add("title-container-elementos-conteudo-do-livro");
TitleContainerElementosConteudoDoLivro.id = "title-container-elementos-conteudo-do-livro-1";
TextoTitleContainerElementosConteudodDoLivro.classList.add("texto-title-container-elementos-conteudo-do-livro");
TextoTitleContainerElementosConteudodDoLivro.id = "texto-title-container-elementos-conteudo-do-livro-1";
TitleContainerElementosConteudoDoLivro.style.cssText = "width: 100%; max-width: 30%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; border-bottom: 2px groove white; margin: 0 auto;";
TextoTitleContainerElementosConteudodDoLivro.textContent = "Conteudo Do Livro";
TitleContainerElementosConteudoDoLivro.appendChild(TextoTitleContainerElementosConteudodDoLivro);
var ContainerElementosConteudoDoLivro = document.createElement("div");
ContainerElementosConteudoDoLivro.classList.add("Container-Elementos-Conteudo-Do-Livro");
ContainerElementosConteudoDoLivro.id = "Container-Elementos-Conteudo-Do-Livro";
ContainerElementosConteudoDoLivro.style.cssText = "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; gap: 10px;";
var ConteudoDoLivro = document.createElement("input");
ConteudoDoLivro.type = "file";
ConteudoDoLivro.name = "conteudo-do-livro-pdf";
ConteudoDoLivro.id = "conteudo-do-livro-pdf-1";
ConteudoDoLivro.accept = "application/pdf";
ConteudoDoLivro.style.display = "none";
var LabelDoConteudoDoLivro = document.createElement("label");
LabelDoConteudoDoLivro.htmlFor = "conteudo-do-livro-pdf-1";
var ClickActivadorDoConteudoDoLivro = document.createElement("div");
LabelDoConteudoDoLivro.appendChild(ClickActivadorDoConteudoDoLivro);
LabelDoConteudoDoLivro.style.cssText  = "width: 50%; height: 841px;";
ClickActivadorDoConteudoDoLivro.style.cssText = "width: 100%; height: 100%; border: 2px dashed white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: column; margin: 0 auto;";
var TextoClickAtivadorDoConteudoDoLivro = document.createElement("p");
TextoClickAtivadorDoConteudoDoLivro.style.cssText = "width: 100%; text-align: center; white-space: nowrap; font-size: 20px; opacity: 0.1;";
TextoClickAtivadorDoConteudoDoLivro.textContent = "Clique Aqui para Anexar o Conteudo do seu Livro:";
var iconClickActivadorDoConteudoDoLivro = document.createElement("i");
iconClickActivadorDoConteudoDoLivro.classList.add("fi");
iconClickActivadorDoConteudoDoLivro.classList.add("fi-rr-square-plus");
iconClickActivadorDoConteudoDoLivro.style.cssText = "font-size: 200px; color: white; opacity: 0.1; transition: 1s;";

var ContainerPreviewPDF = document.createElement("div");
ContainerPreviewPDF.classList.add("Container-Preview-PDF");
ContainerPreviewPDF.id = "Container-Preview-PDF-1";
ContainerPreviewPDF.style.cssText = "position: relative; top: 0; left: 0; width: 50%; height: 841px; max-height: 841px; background: transparent; overflow: hidden;";



ClickActivadorDoConteudoDoLivro.appendChild(TextoClickAtivadorDoConteudoDoLivro);
ClickActivadorDoConteudoDoLivro.appendChild(iconClickActivadorDoConteudoDoLivro);
COntainerConteudoDoLivro.appendChild(TitleContainerElementosConteudoDoLivro);
COntainerConteudoDoLivro.appendChild(ContainerElementosConteudoDoLivro);
ContainerElementosConteudoDoLivro.appendChild(ConteudoDoLivro);
ContainerElementosConteudoDoLivro.appendChild(LabelDoConteudoDoLivro);
ContainerElementosConteudoDoLivro.appendChild(ContainerPreviewPDF);

var ButtonsNextsPDFsPages = document.createElement("button");
var ButtonsPreviousPDFsPages = document.createElement("button");
ButtonsNextsPDFsPages.type = "button";
ButtonsPreviousPDFsPages.type = "button";
var Icon_Button_Next_PDFs = document.createElement("i");
var Icon_Button_previous_PDFs = document.createElement("i");
Icon_Button_previous_PDFs.classList.add("fa-solid");
Icon_Button_previous_PDFs.classList.add("fa-arrow-left");
Icon_Button_Next_PDFs.classList.add("fa-solid");
Icon_Button_Next_PDFs.classList.add("fa-arrow-right");
ButtonsNextsPDFsPages.appendChild(Icon_Button_Next_PDFs);
ButtonsPreviousPDFsPages.appendChild(Icon_Button_previous_PDFs);
ButtonsNextsPDFsPages.style.cssText = "width: 100px; height: 100px; background: gray; color: white; position: absolute; top: 50%; left: 100%; transform: translate(-100%); border: none; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; cursor: pointer; outline: none; font-size: 20px;";
ButtonsPreviousPDFsPages.style.cssText = "width: 100px; height: 100px; background: gray; color: white; position: absolute; top: 50%; border: none; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; cursor: pointer; outline: none; font-size: 20px;";


ConteudoDoLivro.addEventListener("change",function(event){
            //verificando a existencia de mais um elemento que contem outro PDF
    if(document.querySelector(".Container-Preview-PDF"))
    {
        if(document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length > 0)
        {
            document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){
                variavel.remove();
            });
        }
    }
            //alocando o valor do Evento Change em uma variavel
    var file = event.target.files[0];
            //verificando se existe
    if(file)
    {
                //verifica se o elemento de carregamento já existe 
        if(getComputedStyle(document.querySelector(".Loading-PDFs-interative")).display === "none")
        {
            document.querySelector(".Loading-PDFs-interative").style.display = "flex";
        }
        else
        {
            document.querySelector(".Loading-PDFs-interative").style.display = "none";
        }
                //se existir
                //instancie a classe FileReader (provavelmente ja vem com o link do header, não sei ainda...)
        var LeitorDoPDF = new FileReader(file);
                //verificando a Instância
                    //console.log("Usando o Leitor FileReader no file: ",LeitorDoPDF);
        //

                //Ao instanciar FileReader estou lendo este file como um ArrayButter
                //adicionar um ouvinte com evento load na variavel
        LeitorDoPDF.onload = function(){
                    //retira o elemento de carregamento 
            if(getComputedStyle(document.querySelector(".Loading-PDFs-interative")).display === "flex")
            {
                document.querySelector(".Loading-PDFs-interative").style.display = "none";
            }
            else
            {
                document.querySelector(".Loading-PDFs-interative").style.display = "flex";
            }
                    //digo qual o tipo da array que quero
                    //para isso instanciamos uma nova classe 
                    //nesse trecho estou instanciado uma nova classe Uint8Array com o result da instancia (FileReader) do file (file) na Uint8Array para armazenar dados binarios de 8 Bits
            var TipoDaArray = new Uint8Array(LeitorDoPDF.result);
                    //uso a Biblioteca do JavaScript para PDFs
                    //getDocument -> pege o Documento
                    //getDocument(TypoDaArray) -> pega o documento do tipo da Array
            var BibliotecaDoJavaScriptPDF = pdfjsLib.getDocument(TipoDaArray);
                    //Verificando a Bibilioteca JavaScript PDF 
                        //console.log("Biblioteca JavaScript do PDF: ",BibliotecaDoJavaScriptPDF);
            //
                    //Verificando a Biblioteca JavaScript PDF (promise)
                        //console.log("Biblioteca (tentando descobrir o que é esse promise): ", BibliotecaDoJavaScriptPDF.promise);
            //
                    //Verificando o tipo da Array 
                        //console.log("Tipo da Array: ",TipoDaArray);
            //
            BibliotecaDoJavaScriptPDF.promise.then(function(pdf){

                for(let PDFPages = 1; PDFPages <= pdf.numPages; PDFPages++)
                {
                    pdf.getPage(PDFPages).then(function(pages){
                        var PaginasPDF = document.createElement("canvas");
                        PaginasPDF.classList.add("paginas-PDF-dashboards-conteudo");
                        PaginasPDF.getContext("2d");
                        PaginasPDF.style.cssText = "position: absolute; top: 0; left: 100%; transition: 1s;";
                        var view = pages.getViewport({scale: 1});

                        PaginasPDF.width = view.width;
                        PaginasPDF.height = view.height;

                        ContainerPreviewPDF.appendChild(PaginasPDF);

                        var Rederização = {
                        canvasContext: PaginasPDF.getContext("2d"),
                        viewport: view
                        }
                        if(document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length > 0)
                        {
                                    //criando botões de ação 
            
                            ContainerPreviewPDF.appendChild(ButtonsNextsPDFsPages);
                            ContainerPreviewPDF.appendChild(ButtonsPreviousPDFsPages);
            
                            var indexModulo = 0;
            
                            ButtonsNextsPDFsPages.addEventListener("click",function(){
                                indexModulo = (indexModulo + 1) % document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length;
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){variavel.classList.remove("active-document-PDF"); variavel.style.transition = "1s"; variavel.style.left = "100%";});
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].classList.add("active-document-PDF");
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.transition = "1s";
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.left = "0";
                            });
            
                            ButtonsPreviousPDFsPages.addEventListener("click",function(){
                                indexModulo = (indexModulo - 1 + document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length) % document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length;
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){variavel.classList.remove("active-document-PDF"); variavel.style.transition = "1s"; variavel.style.left = "100%";});
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].classList.add("active-document-PDF");
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.transition = "1s";
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.left = "0";
                            });
                    
                        }
                        document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel,index){
                                    //a numeração de cada pagina é de 1 a 26 
                                    //a array de elementos da mesma classe é de 0 a 25 
                                    //adicionando mais um (+1) em cada index da array equivale ao mesmo da numeração de paginas
                            variavel.id = "paginas-PDF-dashboards-conteudo-"+(1 + index);
                        });
                        document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){
                            if(variavel.classList.contains("active-document-PDF"))
                            {
                                variavel.style.transition = "1s";
                                variavel.style.left = "0";
                            }
                        });
                        document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel,index){
                        if(variavel.id == "paginas-PDF-dashboards-conteudo-1")
                        {
                            variavel.classList.add("active-document-PDF");
                        }
                        });
                
                        pages.render(Rederização);

                    });
                }
            });

        }
        LeitorDoPDF.readAsArrayBuffer(file);
    }
});

        //ContainerElementosConteudoDoLivro.appendChild();

PostarLivroContainer.appendChild(COntainerConteudoDoLivro);

var LabelContainersAnexosFromLivros = document.createElement("label");
var ContainersAnexosFromLivros = document.createElement("div");
var CenterItemFromContainersAnexosFromLivros = document.createElement("div");
LabelContainersAnexosFromLivros.classList.add("Label-Containers-Anexos-From-Livros");
LabelContainersAnexosFromLivros.id = "Label-Containers-Anexos-From-Livros";
ContainersAnexosFromLivros.classList.add("Containers-Anexos-From-Livros");
ContainersAnexosFromLivros.id = "Containers-Anexos-From-Livros-1";
CenterItemFromContainersAnexosFromLivros.classList.add("Center-Item-From-Containers-Anexos-From-Livros");
CenterItemFromContainersAnexosFromLivros.id = "Center-Item-From-Containers-Anexos-From-Livros-1";
var ContainerTextoEtinerarioForContainersAnexosFromLivros = document.createElement("div");
var TextoEtinerarioForContainersAnexosFromLivros = document.createElement("span");
var EtinerarioForContainersAnexosFromLivros = document.createElement("p");
LabelContainersAnexosFromLivros.appendChild(ContainersAnexosFromLivros);
ContainerTextoEtinerarioForContainersAnexosFromLivros.appendChild(TextoEtinerarioForContainersAnexosFromLivros);
TextoEtinerarioForContainersAnexosFromLivros.appendChild(EtinerarioForContainersAnexosFromLivros);
PostarLivroContainer.appendChild(ContainerTextoEtinerarioForContainersAnexosFromLivros);
PostarLivroContainer.appendChild(LabelContainersAnexosFromLivros);
LabelContainersAnexosFromLivros.style.cssText = "width: 100%; cursor: pointer;";
ContainerTextoEtinerarioForContainersAnexosFromLivros.style.cssText = "width: 100%; max-width: 50%; margin: 10px auto;";
TextoEtinerarioForContainersAnexosFromLivros.style.cssText = "display: block; width: 100%; border-bottom: 2px groove white; text-align: center;";
EtinerarioForContainersAnexosFromLivros.style.cssText = "padding: 0;";
EtinerarioForContainersAnexosFromLivros.textContent = "Anexos de Imagens para seus Livros";
ContainersAnexosFromLivros.style.cssText = "width: 100%; max-width: 90%; height: 400px; border-width: 2px; border-color: white; border-style: dashed; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: column; margin: 10px auto; ";
var IconeForContainersAnexosFromLivros = document.createElement("i");
IconeForContainersAnexosFromLivros.classList.add("fi");
IconeForContainersAnexosFromLivros.classList.add("fi-rr-square-plus");
ContainersAnexosFromLivros.appendChild(IconeForContainersAnexosFromLivros);
IconeForContainersAnexosFromLivros.style.cssText = "font-size: 250px; opacity: 0.1;";
var TextoForContainersAnexosFromLivros = document.createElement("span");
TextoForContainersAnexosFromLivros.textContent = "Clique para Adicionar mais Fotos , apenas Fotos com a Extensão (jpeg , jpg , png e webp)";
TextoForContainersAnexosFromLivros.style.cssText = "font-size: 18px; opacity: 0.1;";
var fileMoreImagensForAnexos = document.createElement("input");
fileMoreImagensForAnexos.name = "more-files-for-anexos[]";
fileMoreImagensForAnexos.classList.add("input-file-for-dashboards-foto");
fileMoreImagensForAnexos.id = "more-files-for-dashboards-foto-1";
fileMoreImagensForAnexos.type = "file";
fileMoreImagensForAnexos.style.display = "none";
fileMoreImagensForAnexos.multiple = true;
LabelContainersAnexosFromLivros.htmlFor = "more-files-for-dashboards-foto-1";
fileMoreImagensForAnexos.addEventListener("change",function(event){
            //verifica se existe
    if(document.querySelector(".Container-Imagem-For-Anexos"))
    {
        document.querySelector(".Container-Imagem-For-Anexos").remove();
    }
            //this elemento que disparou o evento (input.file)
            //files pega os file adicionado no elemento 
            //length pega a quantidade de elementos
    var containerImagemforAnexos = document.createElement("div");
    containerImagemforAnexos.classList.add("Container-Imagem-For-Anexos");
    containerImagemforAnexos.id = "container-imagem-for-anexos-1";
    containerImagemforAnexos.style.display = "flex";
    containerImagemforAnexos.style.alignItems = "center";
    containerImagemforAnexos.style.justifyContent = "space-between";
    containerImagemforAnexos.style.flexWrap = "nowrap";
    containerImagemforAnexos.style.flexDirection = "row";
    containerImagemforAnexos.style.position = "relative";
    containerImagemforAnexos.style.top = "0";
    containerImagemforAnexos.style.left = "0";
    containerImagemforAnexos.style.width = "100%";
    containerImagemforAnexos.style.maxWidth = "100%";
    containerImagemforAnexos.style.overflow = "hidden";
    containerImagemforAnexos.style.height = "390px";
    var ButtonsNexts = document.createElement("button");
    var ButtonPrevious = document.createElement("button");
    ButtonsNexts.appendChild(Icon_Button_Next);
    ButtonPrevious.appendChild(Icon_Button_previous);
    ButtonsNexts.classList.add("Button-Slides-Fotos-Previews");
    ButtonPrevious.classList.add("Button-Slides-Fotos-Previews");
    ButtonsNexts.id = "Button-Nexts-Slides-Fotos-Nexts";
    ButtonPrevious.id = "Button-Nexts-Slides-Fotos-Previews";

    for(let vetor2 = 0; vetor2 < this.files.length; vetor2++)
    {
        var SlidesViewAnexos = document.createElement("img");
        SlidesViewAnexos.classList.add("Slides-Views-Anexos");
        SlidesViewAnexos.id = "Slides-Views-Anexos-"+vetor2;
        SlidesViewAnexos.src = URL.createObjectURL(event.target.files[vetor2]);
        containerImagemforAnexos.appendChild(SlidesViewAnexos);
        PostarLivroContainer.appendChild(containerImagemforAnexos);
        PostarLivroContainer.style.transition = "1s";
        PostarLivroContainer.style.height = (PostarLivroContainer.clientHeight + 390)+"px";
    }
    containerImagemforAnexos.appendChild(ButtonsNexts);
    containerImagemforAnexos.appendChild(ButtonPrevious);
    ButtonsNexts.style.cssText = "width: 100px; height: 100px; background: gray; color: white; position: absolute; left: 100%; transform: translate(-100%); border: none; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; cursor: pointer; outline: none; font-size: 20px;";
    ButtonPrevious.style.cssText = "width: 100px; height: 100px; background: gray; color: white; position: absolute; border: none; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; cursor: pointer; outline: none; font-size: 20px;";
    ButtonsNexts.type = "button";
    ButtonPrevious.type = "button";
    var translateslidesViewsAnexos = 0;
    var ModuloNextsandPrevious = 0;
    if(document.getElementById("Button-Nexts-Slides-Fotos-Nexts"))
    {
        document.getElementById("Button-Nexts-Slides-Fotos-Nexts").addEventListener("mouseenter",function(){
            this.style.transition = "1s";
            this.style.opacity = "1";
        });

        document.getElementById("Button-Nexts-Slides-Fotos-Nexts").addEventListener("mouseleave",function(){
            this.style.transition = "1s";
            this.style.opacity = "0.7";
        });

        document.getElementById("Button-Nexts-Slides-Fotos-Nexts").addEventListener("click",function(){
            translateslidesViewsAnexos = translateslidesViewsAnexos + 100;
            var Ultimo = (document.querySelectorAll(".Slides-Views-Anexos").length - 1)
                if(ModuloNextsandPrevious === Ultimo)
                {
                    translateslidesViewsAnexos = 0;
                }
            if(document.querySelectorAll(".Slides-Views-Anexos").length > 0)
            {
                ModuloNextsandPrevious = (ModuloNextsandPrevious + 1) % document.querySelectorAll(".Slides-Views-Anexos").length;
                document.querySelectorAll(".Slides-Views-Anexos").forEach(function(variavel){variavel.classList.remove("active");});
                document.querySelectorAll(".Slides-Views-Anexos")[ModuloNextsandPrevious].classList.add("active");
                document.querySelectorAll(".Slides-Views-Anexos").forEach(function(variavel){
                    variavel.style.transition = "1s";
                    variavel.style.transform = "translate(-"+translateslidesViewsAnexos+"%)";
                });
        
            }
        });
    }
    if(document.getElementById("Button-Nexts-Slides-Fotos-Previews"))
    {
        document.getElementById("Button-Nexts-Slides-Fotos-Previews").addEventListener("mouseenter",function(){
            this.style.transition = "1s";
            this.style.opacity = "1";
        });

        document.getElementById("Button-Nexts-Slides-Fotos-Previews").addEventListener("mouseleave",function(){
            this.style.transition = "1s";
            this.style.opacity = "0.7";
        });

        document.getElementById("Button-Nexts-Slides-Fotos-Previews").addEventListener("click",function(){
            translateslidesViewsAnexos = translateslidesViewsAnexos - 100;
            var Ultimo = (document.querySelectorAll(".Slides-Views-Anexos").length - 1)
                if(ModuloNextsandPrevious === 0)
                {
                    translateslidesViewsAnexos = Ultimo*100;
                }
            if(document.querySelectorAll(".Slides-Views-Anexos").length > 0)
            {
                ModuloNextsandPrevious = (ModuloNextsandPrevious - 1 + document.querySelectorAll(".Slides-Views-Anexos").length) % document.querySelectorAll(".Slides-Views-Anexos").length;
                document.querySelectorAll(".Slides-Views-Anexos").forEach(function(variavel){variavel.classList.remove("active");});
                document.querySelectorAll(".Slides-Views-Anexos")[ModuloNextsandPrevious].classList.add("active");
                document.querySelectorAll(".Slides-Views-Anexos").forEach(function(variavel){
                    variavel.style.transition = "1s";
                    variavel.style.transform = "translate(-"+translateslidesViewsAnexos+"%)";
                });
        
            }
        });
    }
});
ContainersAnexosFromLivros.appendChild(TextoForContainersAnexosFromLivros);
PostarLivroContainer.appendChild(fileMoreImagensForAnexos);
PostarLivroContainer.appendChild(ContainerSubmit);

var LoadingPDF = document.createElement("div");
LoadingPDF.classList.add("Loading-PDFs-interative");
LoadingPDF.id = "Loading-PDFs-interative";
LoadingPDF.style.cssText = "width: 100%; height: 100%; background: #333; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: column;";
var iconLoadingPDF = document.createElement("div");
var textLoadingPDF = document.createElement("p");
iconLoadingPDF.classList.add("icone-de-carregamento-do-leitor-de-visualizador-de-PDF");
textLoadingPDF.classList.add("texto-de-carregamento-de-leitor-de-visualizador-de-PDF");
iconLoadingPDF.id = "icone-de-carregamento-do-leitor-de-visualizador-de-PDF-1";
textLoadingPDF.id = "texto-de-carregamento-de-leitor-de-visualizador-de-PDF-1";
iconLoadingPDF.style.cssText = "width: 100px; height: 100px; border-top: 10px dashed white; border-radius: 50%;";
textLoadingPDF.style.cssText = "font-size: 20px; color: white;";
textLoadingPDF.textContent = "Carregando seu Documento PDF , por favor Aguarde";
ContainerPreviewPDF.appendChild(LoadingPDF);
LoadingPDF.appendChild(iconLoadingPDF);
LoadingPDF.appendChild(textLoadingPDF);
LoadingPDF.style.display = "none";
        //Fim do Container 2 
        //Container 4
var Container4 = document.getElementById("section-4-dashboard");
var InputFilePDF = document.createElement("input");
var AtivadorReceberDocumentoPDF = document.createElement("label");
var ReceberDocumentoPDF = document.createElement("div");
var TextoReceberDocumentoPDF = document.createElement("p");
var ContainerStyleDocumentosPDFs = document.createElement("div");
var StyleCardDocumentoPDF_1 = document.createElement("div");
var StyleCardDocumentoPDF_2 = document.createElement("div");
var StyleCardDocumentoPDF_3 = document.createElement("div");

var ElementosCriados = [
    AtivadorReceberDocumentoPDF,
    ReceberDocumentoPDF,
    TextoReceberDocumentoPDF,
    ContainerStyleDocumentosPDFs,
    StyleCardDocumentoPDF_1,
    StyleCardDocumentoPDF_2,
    StyleCardDocumentoPDF_3
];

var ClassesContainer4 = [
    "Label-Ativador-Receber-Documento-PDF",
    "Receber-Documentos-PDF",
    "Texto-Receber-Documentos-PDF",
    "Container-Estilo-Documentos-PDFs",
    "Estilo-Cartão-Documento-1",
    "Estilo-Cartão-Documento-2",
    "Estilo-Cartão-Documento-3"
];

var IdsContainer4 = [
    "Label-Ativador-Receber-Documento-PDF-1",
    "Receber-Documentos-PDF-1",
    "Texto-Receber-Documentos-PDF-1",
    "Container-Estilo-Documentos-PDFs-1",
    "Estilo-Cartão-Documento-1-1",
    "Estilo-Cartão-Documento-2-1",
    "Estilo-Cartão-Documento-3-1"
];

var StyleContainer4 = [
    "display: block; width: 100%; height: 600px; cursor: pointer; border: 2px dashed white; opacity: 0.2;",
    "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-evenly; flex-wrap: wrap; flex-direction: column;",
    "width: 100%; max-width: 40%; height: 61px; border-bottom: 2px groove white; display: flex; align-items: center; justify-content: center; text-align: center; margin: 0 auto;",
    "width: 100%; max-width: 50%; height: calc(500px - 80px); position: relative; top: 0; left: 0; margin: 0 auto;",
    "position: absolute; top: 0; left: 0; border: 2px solid white; width: 200px; height: 98%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; transform: rotateX(20deg) rotateY(30deg);",
    "position: absolute; top: 0; left: 200px; border: 2px solid white; width: 200px; height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;",
    "position: absolute; top: 0; left: 400px; border: 2px solid white; width: 200px; height: 98%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; transform: rotateX(20deg) rotateY(-30deg);"
];

var ElementosContainer4 = [
    ElementosCriados,
    ClassesContainer4,
    IdsContainer4,
    StyleContainer4
];

if(ElementosCriados.length === ClassesContainer4.length && 
    ElementosCriados.length === IdsContainer4.length && 
    ElementosCriados.length === StyleContainer4.length
)
{
    for(let vetor3 = 0; vetor3 < (ElementosCriados.length + ClassesContainer4.length + IdsContainer4.length + StyleContainer4.length)/ElementosContainer4.length; vetor3++)
    {
        ElementosCriados[vetor3].classList.add(ClassesContainer4[vetor3]);
        ElementosCriados[vetor3].id = IdsContainer4[vetor3];
        ElementosCriados[vetor3].style.cssText = StyleContainer4[vetor3];
    }
}

InputFilePDF.classList.add("input-file-elemento-PDF");
InputFilePDF.id = "input-file-elemento-PDF-1";
InputFilePDF.accept = "application/pdf";
InputFilePDF.style.display = "none";
InputFilePDF.type = "file";
AtivadorReceberDocumentoPDF.htmlFor = "input-file-elemento-PDF-1";
AtivadorReceberDocumentoPDF.appendChild(ReceberDocumentoPDF);
ReceberDocumentoPDF.appendChild(TextoReceberDocumentoPDF);
ReceberDocumentoPDF.appendChild(ContainerStyleDocumentosPDFs);
ContainerStyleDocumentosPDFs.appendChild(StyleCardDocumentoPDF_1);
ContainerStyleDocumentosPDFs.appendChild(StyleCardDocumentoPDF_2);
ContainerStyleDocumentosPDFs.appendChild(StyleCardDocumentoPDF_3);
Container4.appendChild(AtivadorReceberDocumentoPDF);
Container4.appendChild(InputFilePDF);
TextoReceberDocumentoPDF.textContent = "Adicione o Seu Documento PDF Aqui";
StyleCardDocumentoPDF_1.textContent = "PAGE 1";
StyleCardDocumentoPDF_2.textContent = "PAGE 2";
StyleCardDocumentoPDF_3.textContent = "PAGE 3";
var ViewPDFsPagesEdits = document.createElement("div");
ViewPDFsPagesEdits.style.cssText = "width: 100%; position: relative; top: 0; left: 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; overflow: hidden;";
var LoadingViewPDFsPagesEdits = document.createElement("div");
LoadingViewPDFsPagesEdits.classList.add("tela-de-carregamento-de-preview-das-paginas-de-PDF");
LoadingViewPDFsPagesEdits.id = "tela-de-carregamento-de-preview-das-paginas-de-PDF-1";
var CircleInterative = document.createElement("div");
CircleInterative.classList.add("circulo-interativo-da-tela-de-carregamento-de-preview-das-paginas-de-PDF");
CircleInterative.id = "circulo-interativo-da-tela-de-carregamento-de-preview-das-paginas-de-PDF-1";
var TextoInterative = document.createElement("p");
TextoInterative.classList.add("texto-interativo-da-tela-de-carregamento-de-preview-das-paginas-de-PDF");
TextoInterative.id = "texto-interativo-da-tela-de-carregamento-de-preview-das-paginas-de-PDF-1";
LoadingViewPDFsPagesEdits.appendChild(CircleInterative);
LoadingViewPDFsPagesEdits.appendChild(TextoInterative);
CircleInterative.style.cssText = "border-top: 5px groove white; border-radius: 50%; width: 300px; height: 300px; display: flex; align-items: center; justify-content: center;";
var imagemCircle = document.createElement("img");
imagemCircle.classList.add("imagem-do-circulo-de-carregamento-do-documento-PDF-preview-das-paginas-de-PDF");
imagemCircle.id = "imagem-do-circulo-de-carregamento-do-documento-PDF-preview-das-paginas-de-PDF-1";
imagemCircle.src = document.querySelector(".imagem").textContent;
imagemCircle.style.width = "300px";
CircleInterative.appendChild(imagemCircle);
LoadingViewPDFsPagesEdits.style.cssText = "width: 100%; height: 100%; max-height: 70%; max-width: 80%;  display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column; margin: 0 auto;";
ViewPDFsPagesEdits.appendChild(LoadingViewPDFsPagesEdits);
TextoInterative.textContent = "Seu Documento esta Sendo Carregado !!!";
TextoInterative.style.fontSize = "30px";
TextoInterative.style.fontFamily = "'stencilla',sans-serif";
LoadingViewPDFsPagesEdits.style.display = "none";
var Button_NextsPDF = document.createElement("button");
var Button_PreviousPDF = document.createElement("button");
var Icon_ButtonPreviousPDFs = document.createElement("i");
var Icon_ButtonNextsPDFs = document.createElement("i");
Icon_ButtonPreviousPDFs.classList.add("icon-button");
Icon_ButtonPreviousPDFs.classList.add("icon-button");
Icon_ButtonNextsPDFs.id = "icon-button-next";
Icon_ButtonPreviousPDFs.id = "icon-button-previous";
Icon_ButtonPreviousPDFs.classList.add("fa-solid");
Icon_ButtonPreviousPDFs.classList.add("fa-arrow-left");
Icon_ButtonNextsPDFs.classList.add("fa-solid");
Icon_ButtonNextsPDFs.classList.add("fa-arrow-right");
Button_NextsPDF.classList.add("botão-proximo-PDF-Page-Edit");
Button_PreviousPDF.classList.add("botão-anterior-PDF-Page-Edit");
Button_NextsPDF.style.cssText = "position: absolute; top: 50%; left: 90%; background: gray; color: white; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 20px; opacity: 0.7; cursor: pointer;";
Button_PreviousPDF.style.cssText = "position: absolute; top: 50%; background: gray; color: white; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; font-size: 20px; opacity: 0.7; cursor: pointer;";

        //Quando o arquivo for carregado
InputFilePDF.onchange = function(evento) {
    var arquivoPDF = evento.target.files[0];
    if (getComputedStyle(LoadingViewPDFsPagesEdits).display === "none") {
        LoadingViewPDFsPagesEdits.style.display = "flex";
    }
    if (arquivoPDF.type === "application/pdf") {
        var leitor = new FileReader();
        leitor.readAsArrayBuffer(arquivoPDF);

        leitor.onload = function(e) {
            LoadingViewPDFsPagesEdits.style.display = "none";
            var bytesPDF = new Uint8Array(e.target.result);
            pdfjsLib.getDocument(bytesPDF).promise.then(function(pdf) {
                ViewPDFsPagesEdits.innerHTML = '';        //Limpa o container antes de adicionar o novo conteúdo

                var numeroPaginas = pdf.numPages;
                var paginasDivs = [];        //Array para armazenar os divs das páginas

                for (var i = 1; i <= numeroPaginas; i++) {
                    (function(i) {
                        pdf.getPage(i).then(function(pagina) {
                            pagina.getTextContent().then(function(conteudoTexto) {
                                var itensTexto = conteudoTexto.items;
                                var textoPagina = '';

                                for (var j = 0; j < itensTexto.length; j++) {
                                    textoPagina += itensTexto[j].str + ' ';
                                }

                                var divPagina = document.createElement('div');
                                divPagina.classList.add("Page-do-Documento");
                                divPagina.style.cssText = "min-width: 500px; height: 100%; padding: 10px;";
                                divPagina.contentEditable = true;        //Torna o div editável
                                divPagina.textContent = 'Página ' + i + ': ' + textoPagina;

                                paginasDivs.push(divPagina);        //Adiciona o div ao array
                                ViewPDFsPagesEdits.appendChild(divPagina);
                                ViewPDFsPagesEdits.appendChild(Button_NextsPDF);
                                ViewPDFsPagesEdits.appendChild(Button_PreviousPDF);
                                Button_NextsPDF.appendChild(Icon_ButtonNextsPDFs);
                                Button_PreviousPDF.appendChild(Icon_ButtonPreviousPDFs);
    
                            });
                        });
                    })(i);
                }

                var IndexModuloPDFPagesEdits = 0;
                var TranslateModuloPDFPagesEdits = 0;

                Button_NextsPDF.addEventListener("click", function() {
                    IndexModuloPDFPagesEdits = (IndexModuloPDFPagesEdits + 1) % paginasDivs.length;
                    TranslateModuloPDFPagesEdits = TranslateModuloPDFPagesEdits + 100;
                    paginasDivs.forEach(function(variavel){variavel.classList.remove("active");});
                    paginasDivs[IndexModuloPDFPagesEdits].classList.add("active");
                    paginasDivs.forEach(function(containers){containers.style.transition = "1s"; containers.style.transform = "translate(-"+TranslateModuloPDFPagesEdits+"%)";});
                    if(IndexModuloPDFPagesEdits === 0)
                    {
                        TranslateModuloPDFPagesEdits = 0;
                    }
                });

                Button_PreviousPDF.addEventListener("click", function() {
                    IndexModuloPDFPagesEdits = (IndexModuloPDFPagesEdits - 1 + paginasDivs.length) % paginasDivs.length;
                    TranslateModuloPDFPagesEdits = TranslateModuloPDFPagesEdits - 100;

                    paginasDivs.forEach(function(variavel){variavel.classList.remove("active");});
                    paginasDivs[IndexModuloPDFPagesEdits].classList.add("active");
                    paginasDivs.forEach(function(containers){containers.style.transition = "1s"; containers.style.transform = "translate(-"+TranslateModuloPDFPagesEdits+"%)";});
                });

                        //Inicialmente, exibe apenas a primeira página
                paginasDivs.forEach(function(div, index) {
                    if (index !== 0) {
                        div.style.display = "none";
                    }
                });
            });
        };
    } else {
        alert("Por favor, selecione um arquivo PDF.");
    }
};

var ContainerBotaoDownload = document.createElement("div");
var BotaoDownload = document.createElement("button");
ContainerBotaoDownload.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; height: 200px;";
ContainerBotaoDownload.appendChild(BotaoDownload);
BotaoDownload.style.cssText = "width: 150px; height: 50px; font-family: 'Montserrat' sans-serif; color:white; background: transparent; border: 2px groove white; border-radius: 10px; text-align: center; cursor: pointer; font-size: 18px;";
        //Função para baixar o texto editado
BotaoDownload.onclick = function() {
    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    var paginas = ViewPDFsPagesEdits.getElementsByClassName('Page-do-Documento');
    var margemEsquerda = 10;
    var posicaoVertical = 10;
    var alturaPagina = 280;        //Altura disponível na página PDF
    var espacoEntrePaginas = 10;

    for (var i = 0; i < paginas.length; i++) {
        var textoPagina = paginas[i].textContent;
        var linhasTexto = doc.splitTextToSize(textoPagina, 180);        //Divide o texto para caber na largura da página

                //Renderiza cada linha do texto
        for (var j = 0; j < linhasTexto.length; j++) {
                    //Verifica se a altura ultrapassou o limite da página
            if (posicaoVertical + 10 > alturaPagina) {
                doc.addPage();        //Adiciona uma nova página
                posicaoVertical = 10;        //Reseta a posição vertical para o topo da nova página
            }
            doc.text(linhasTexto[j], margemEsquerda, posicaoVertical);
            posicaoVertical += espacoEntrePaginas;        //Avança para a próxima linha
        }

                //Após cada página do PDF original, adiciona uma nova página no PDF se necessário
        if (i < paginas.length - 1) {
            doc.addPage();
            posicaoVertical = 10;        //Reinicia a posição vertical para a nova página
        }
    }

            //Salva o arquivo PDF
    doc.save('texto-editado.pdf');
};

BotaoDownload.textContent = "Baixar PDF";
Container4.appendChild(ViewPDFsPagesEdits);
Container4.appendChild(ContainerBotaoDownload);

        //Fim do Container4 
//Container 5
if(window.KeysH && window.ValuesH)
{
    var Container5 = document.getElementById("section-5-dashboard");
    var TabelaContainer5 = document.createElement("table");
    var ContainerTabelaContainer5 = document.createElement("div");
    var ContainerTabela5 = document.createElement("div");
    var ShowButtonShowMore = document.createElement("div");
    var ButtonShowMore = document.createElement("button");
    var ElementesContainer = [
        ContainerTabelaContainer5,
        ContainerTabela5,
        ShowButtonShowMore,
        ButtonShowMore,

    ];
    var CssTextes = [
        "width: 100%; height: 300px; max-height: calc(200px + 100px); max-width: 90%; margin: 0 auto;",
        "width: 100%; height: 200px; max-height: 200px;",
        "width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: column;",
        "width: 150px height: 20px; border-radius: 10px; outline: none; text-align: center; font-family:'Montserrat',sans-serif; color: white; background: transparent; border: 2px groove white; padding: 10px; cursor: pointer; transition: 1s"
    ];
    var ClassesAndIdNotCodify = [
        "Container-Tabela-Total-Historico-de-Edições",
        "Container-Tabela-5",
        "Container-Botão-Mostrar-Mais",
        "Botão-Mostrar-Mais"
    ];
    var ClassesCodify = [];
    ClassesAndIdNotCodify.forEach(function(codify){
                //for(let clas = 0; clas <= 50; clas++)
                //{
                //    codify = btoa(codify);
                //}
        ClassesCodify.push(codify);
    });
    var AttributesContainer = [

        CssTextes,
        ClassesAndIdNotCodify,
        ElementesContainer
    ];
    for(let attributes1 = 0; attributes1 < (ElementesContainer.length + CssTextes.length + ClassesCodify.length)/AttributesContainer.length; attributes1++)
    {
        ElementesContainer[attributes1].classList.add(ClassesCodify[attributes1]);
        ElementesContainer[attributes1].id = ClassesCodify+"-number-"+attributes1;
        ElementesContainer[attributes1].style.cssText = CssTextes[attributes1];
    }
    ContainerTabelaContainer5.appendChild(ContainerTabela5);
    ContainerTabela5.appendChild(TabelaContainer5);
    ContainerTabelaContainer5.appendChild(ShowButtonShowMore);
    ShowButtonShowMore.appendChild(ButtonShowMore);
    ButtonShowMore.textContent = "Ver Tabela Completa";
    ButtonShowMore.addEventListener("mouseenter", function(){
        this.style.transition = "1s";
        this.style.background = "white";
        this.style.border = "none";
        this.style.color = "#333";
    });
    ButtonShowMore.addEventListener("mouseleave", function(){
        this.style.transition = "1s";
        this.style.background = "transparent";
        this.style.border = "2px groove white";
        this.style.color = "white";
    });
    TabelaContainer5.style.cssText = "width: 100%; text-align: center;";
    var ClassNameTabelaContainer5 = "Tabela-container-5";
    for(let codificacão5 = 0; codificacão5 <= 1; codificacão5++)
    {
        ClassNameTabelaContainer5 = btoa(ClassNameTabelaContainer5);
    }
    TabelaContainer5.classList.add(ClassNameTabelaContainer5);
    TabelaContainer5.id = ClassNameTabelaContainer5+"-1";
    const TodosCaracteres = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?', '~',
        'ç', 'á', 'à', 'â', 'ã', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú', 'ü', " ","-"
    ];

    ASCII = [];
    TodosCaracteres.forEach(function(variavel){
        ASCII[variavel.charCodeAt(0)] = variavel;
    });
    var Keys = window.KeysH;        //pegando as Chaves
    var Values = window.ValuesH;        //pegando os Valores
    var contadorPostagemComentados = 0;
    var arrayPostagemComentadoskeys1 = [];
    var arrayPostagemComentadosValues2 = [];
    const Postagem2 = {};
    decodeURIComponent(escape(atob(Keys))).split("§").forEach(function(dados){
        arrayPostagemComentadoskeys1.push(dados.split("+-"));

        contadorPostagemComentados++;
        if(contadorPostagemComentados === decodeURIComponent(escape(atob(Keys))).split("§").length)
        {
            contadorPostagemComentados = 0;
            var dadosarray = arrayPostagemComentadoskeys1;
            arrayPostagemComentadoskeys1 = [];
            for (let index1 = 0; index1 < dadosarray.length; index1++) {
                var atual = dadosarray[index1];
                atual = atual.map(function(dados){
                    var string = dados;
                    if(/[A-Z]/.test(string[string.length - 1]))
                    {
                        string = string.substring(0,string.length - 1);
                        string = string + "=";
                    }
                    return String.fromCharCode(decodeURIComponent(escape(atob(string))));
                });
                arrayPostagemComentadoskeys1.push(atual.join(""));
            }
        }
    });
    decodeURIComponent(escape(atob(Values))).split("§").forEach(function(dados){
        arrayPostagemComentadosValues2.push(dados.split("+-"));
        contadorPostagemComentados++;
        if(contadorPostagemComentados === decodeURIComponent(escape(atob(Values))).split("§").length)
        {
            var dadosarray = arrayPostagemComentadosValues2;
            arrayPostagemComentadosValues2 = [];
            for (let index = 0; index < dadosarray.length; index++) {
                var atual = dadosarray[index];
                atual = atual.map(function(dados){
                    var string = dados;
                    if(/[A-Z]/.test(string[string.length - 1]))
                    {
                        string = string.substring(0 , string.length - 1);
                        string = string + "=";
                    }
                    return String.fromCharCode(decodeURIComponent(escape(atob(string))));
                });
                arrayPostagemComentadosValues2.push(atual.join(""));
            }
        }
    });
    if(arrayPostagemComentadoskeys1.length === arrayPostagemComentadosValues2.length)
    {
        var DadosRepetidos = [];
        for (let index = 0; index < arrayPostagemComentadoskeys1.length; index++) {
            if(arrayPostagemComentadoskeys1[index] === 'id')
            {
                DadosRepetidos.push(arrayPostagemComentadoskeys1[index]);
            }
        }
        var QuantidadeDeDadosRepetidos = parseInt(DadosRepetidos.length);
        var LinhasDaColuna = parseInt(Math.round(arrayPostagemComentadoskeys1.length/DadosRepetidos.length));
        var Dados = [];
        var Temp1 = {};
        var Temp2 = {};
        for (let index = 0; index < arrayPostagemComentadoskeys1.length; index++) {
            Temp1[arrayPostagemComentadoskeys1[index]] = arrayPostagemComentadosValues2[index];
            if(Object.keys(Temp1).length === LinhasDaColuna)
            {
                Temp2[Temp1.titulo] = Temp1;
                Dados.push(Temp2);

                Temp1 = {};
                Temp2 = {};
            }
        }
        for (let index = 0; index < Dados.length; index++) {
            var atual = Dados[index];
            var key = Object.keys(atual)[0];
            var value = atual[key];
            if(Postagem2[key] === undefined)
            {
                Postagem2[key] = [];
            }
            Postagem2[key].push(value);
        }
    }
    var ShowInformacoes = [];
    Object.keys(Postagem2).forEach(function(keys){
        Object.values(Postagem2[keys]).forEach(function(array){
            ShowInformacoes.push({
                id: array.id,
                titulo: array.titulo,
                autor: array.autor,
                genero: array.genero,        //depois trocar para estar no banco de dados
                data: array.data,
                hora: array.hora
            });
        })
    });
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var th6 = document.createElement("th");
    th1.textContent = "id";
    th2.textContent = "titulo";
    th3.textContent = "autor";
    th4.textContent = "genero";
    th5.textContent = "data";
    th6.textContent = "hora";
    var ClassNameHeaders = "tabela-cabeca";

    for(let ClassNameTabelaTH = 0; ClassNameTabelaTH <= 1; ClassNameTabelaTH++)
    {
        ClassNameHeaders = btoa(ClassNameHeaders);
    }
    th1.classList.add(ClassNameHeaders);
    th1.id = ClassNameHeaders+"1";
    th2.classList.add(ClassNameHeaders);
    th2.id = ClassNameHeaders+"2";
    th3.classList.add(ClassNameHeaders);
    th3.id = ClassNameHeaders+"3";
    th4.classList.add(ClassNameHeaders);
    th4.id = ClassNameHeaders+"4";
    th5.classList.add(ClassNameHeaders);
    th5.id = ClassNameHeaders+"5";
    th6.classList.add(ClassNameHeaders);
    th6.id = ClassNameHeaders+"6";
    TabelaContainer5.appendChild(th1);
    TabelaContainer5.appendChild(th2);
    TabelaContainer5.appendChild(th3);
    TabelaContainer5.appendChild(th4);
    TabelaContainer5.appendChild(th5);
    TabelaContainer5.appendChild(th6);
    ShowInformacoes.forEach(function(TableRows){
        var tr = document.createElement("tr");
        var classNameTableRows = "coluna-da-tabela";
        for(let codificarTr = 0; codificarTr <= 1; codificarTr++)
        {
        classNameTableRows = btoa(classNameTableRows);
        }
        tr.classList.add(classNameTableRows);
        tr.id = classNameTableRows+"-1";
        tr.style.cursor = "pointer";
        Object.values(TableRows).forEach(function(TableData)
        {
            var td = document.createElement("td");
            td.style.cssText = "padding: 10px; border-bottom: 2px groove white;";
            var classNameTableData = "coluna-da-tabela";
            for(let codificarTd = 0; codificarTd <= 1; codificarTd++)
            {
                classNameTableData = btoa(classNameTableData);
            }
            td.classList.add(classNameTableData);
            td.id = classNameTableData+"-1";
            td.textContent = TableData;
            tr.appendChild(td);
        });
        TabelaContainer5.appendChild(tr);

        tr.addEventListener("click", function(){
            var atual = this.querySelectorAll("td");
            //verifica se o valor do contem caracteres como a até z e A até Z
            if(/[0-9]/.test(atual[1].textContent))
            {
                //recarrega a pagina 
                return location.reload(true);
            }
            else
            {
                Object.keys(Postagem2).forEach(function(keys){
                    Object.values(Postagem2[keys]).forEach(function(array){
                        if(array.titulo === atual[1].textContent)
                        {
                            var popup1 = document.createElement("div");        //overlay
                            var popup2 = document.createElement("div");        //modal
                            var popup3 = document.createElement("div");        //index
                            var popup4 = document.createElement("div");        //line
                            var popup5 = document.createElement("div");        //container
                            var popup6 = document.createElement("span");        //title
                            var popup7 = document.createElement("div");        //Abas
                            var popup8 = document.createElement("div");        //Aba1
                            var popup9 = document.createElement("div");        //Aba2
                            var PopUp = {
                                overlay:popup1,
                                modal:popup2,
                                index:popup3,
                                line:popup4,
                                container:popup5,
                                title:popup6,
                                Abas:popup7,
                                Abas1:popup8,
                                Abas2:popup9,
                            };
                    
                            //Alocando Keys
                            var LegendsKeys = Object.keys(array);
                            //Alocando Values
                            var FieldSetsValues = Object.values(array);
                            //guardas os FieldSets
                            var fieldsets = [];
                            //guardas os Legends 
                            var Legends = [];
                            //tirando as Keys 
                            LegendsKeys.pop();
                            //tirando as Values
                            var UltimoElemento = FieldSetsValues.pop();
                            //criando Fieldsets
                            FieldSetsValues.forEach(function(variavel){
                                var elementosAntigos = document.createElement("fieldset");

                                elementosAntigos.innerHTML = `<p style="margin: 0; padding: 0;"> ${variavel} </p>`;
                                fieldsets.push(elementosAntigos);
                            });
                            //criando Legends
                            LegendsKeys.forEach(function(variavel){
                                var titulos = document.createElement("legend");
                                var className = "titulos-que-foram-atualizados";
                                var idsName = "titulos-que-foram-atualizados";
                                for(let codificarField = 0; codificarField <= 1; codificarField++)
                                {
                                    className = btoa(className);
                                    idsName = btoa(idsName);
                                }
                                        //titulos.classList.add(className);
                                        //titulos.id = idsName+"-1";
                                titulos.textContent = variavel;
                                Legends.push(titulos);
                            });
                            //coletanea
                            var Aba = [
                                fieldsets,
                                Legends
                            ];
                    
                            for(let elementos = 0; elementos < (fieldsets.length + Legends.length)/Aba.length; elementos++)
                            {
                                fieldsets[elementos].appendChild(Legends[elementos]);
                            }
                            var ClassesPOPUP = 
                            [
                                "overlay",
                                "modal",
                                "index",
                                "line",
                                "container",
                                "title",
                                "Abas",
                                "Aba1",
                                "Aba2"
                            ];
                            var IdsPOPUP = 
                            [
                                "overlay-1",
                                "modal-1",
                                "index-1",
                                "line-1",
                                "container-1",
                                "title-1",
                                "Abas-1",
                                "Aba1-1",
                                "Aba2-1"
                            ];
                            var CssTexts = [
                                "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 20; cursor: pointer;",
                                "position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: transparent; width: 80%; height: 80%; z-index: 21;",
                                "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: #333; border-radius: 20px; padding: 10px;",
                                "width: 98%; height: 98%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: white; border-radius: 20px;",
                                "position: relative; top: 0; left: 0; width: 98%; height: 98%; display: flex; align-items: center; justify-content: space-evenly; flex-wrap: nowrap; flex-direction: column; background: #333; border-radius: 20px;",
                                "position: absolute; top: -10px; width: 100%; background: #333; color: white; max-width: 50%; text-align: center; margin: 0 auto;",
                                "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-evenly; flex-wrap: nowrap; flex-direction: row;",
                                "width: 50%; height: 100%; padding: 5px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;",
                                "width: 50%; height: 100%; padding: 5px; max-height: 100%; overflow-x: hidden; overflow-y: scroll;",
                            ];
                            var Attributos = [
                                ClassesPOPUP,
                                IdsPOPUP,
                                CssTexts
                            ];
                            ClassesPOPUP.forEach(function(codificacao){
                                for(let codifica = 0; codifica <= 1; codifica++)
                                {
                                    codificacao = btoa(codificacao);
                                }
                            });
                            IdsPOPUP.forEach(function(codificacao){
                                for(let codifica = 0; codifica <= 1; codifica++)
                                {
                                    codificacao = btoa(codificacao);
                                }
                            });
                            var KeysPOPUP = Object.keys(PopUp);
                            for(let attribute = 0; attribute < (ClassesPOPUP.length + IdsPOPUP.length + CssTexts.length)/Attributos.length; attribute++)
                            {
                                PopUp[KeysPOPUP[attribute]].classList.add(ClassesPOPUP[attribute]);
                                PopUp[KeysPOPUP[attribute]].id = IdsPOPUP[attribute];
                                PopUp[KeysPOPUP[attribute]].style.cssText = CssTexts[attribute];
                            }
                            document.body.appendChild(PopUp.overlay);
                            PopUp.modal.appendChild(PopUp.index);
                            PopUp.index.appendChild(PopUp.line);
                            PopUp.line.appendChild(PopUp.container);
                            PopUp.container.appendChild(PopUp.title);
                            PopUp.container.appendChild(PopUp.Abas);
                            PopUp.Abas.appendChild(PopUp.Abas1);
                            PopUp.Abas.appendChild(PopUp.Abas2);
                            document.body.appendChild(PopUp.modal);
                            PopUp.title.textContent = atual[1].textContent;
                            PopUp.overlay.addEventListener("click",function()
                            {
                                document.body.removeChild(this);
                                document.body.removeChild(PopUp.modal);
                            });
                            var imagemAba1 = document.createElement("img");
                            var Codificacion = document.querySelector(".container-section-5").textContent;
                            var Codificacion2 = document.querySelector(".container-section-5-1").textContent;
                            for(let c = 0; c < 1; c++)
                            {
                                Codificacion = decodeURIComponent(escape(atob(Codificacion)));
                                Codificacion2 = decodeURIComponent(escape(atob(Codificacion2)));
                            }
                            var ArrayTransform = Codificacion.split(",");
                            var ArrayTransform2 = Codificacion2.split(",");
                            var NovaColunadeImagem = {};
                            for(let NeW = 0; NeW < ArrayTransform.length; NeW++)
                            {
                                NovaColunadeImagem[ArrayTransform2[NeW]] = ArrayTransform[NeW];
                            }
                            imagemAba1.style.width = "338px";
                            imagemAba1.style.height = "443px";
                            imagemAba1.src = "../../publicacao/"+NovaColunadeImagem[atual[1].textContent];
                            PopUp.Abas1.appendChild(imagemAba1);
                            fieldsets.forEach(function(fieldset){
                                PopUp.Abas2.appendChild(fieldset);
                                fieldset.style.marginTop = "4%";
                            });
                        }
                    });
                });
            }
        });
    });
    Container5.appendChild(ContainerTabelaContainer5);
    if(ContainerTabela5.offsetHeight < ContainerTabela5.scrollHeight){
        ButtonShowMore.style.display = "block";
        if(getComputedStyle(ButtonShowMore).display == "block")
        {
            ButtonShowMore.addEventListener("click",function(){
                if(ContainerTabelaContainer5.clientHeight > 300 && ContainerTabela5.clientHeight > 200)
                {
                    this.textContent = "Ver Tabela Completa";                
                    ContainerTabelaContainer5.style.transition = "1s";
                    ContainerTabela5.style.transition = "1s";
                    ContainerTabela5.style.height = "200px";
                    ContainerTabela5.style.maxHeight = "200px";
                    ContainerTabelaContainer5.style.height = "300px";
                    ContainerTabelaContainer5.style.maxHeight = "300px";
                }
                else
                if(ContainerTabelaContainer5.clientHeight == 300 && ContainerTabela5.clientHeight == 200)
                {
                    this.textContent = "Mostrar Menos";
                    ContainerTabelaContainer5.style.transition = "1s";
                    ContainerTabela5.style.transition = "1s";
                    ContainerTabela5.style.height = TabelaContainer5.clientHeight+"px";
                    ContainerTabela5.style.maxHeight = TabelaContainer5.clientHeight+"px";
                    ContainerTabelaContainer5.style.height = TabelaContainer5.clientHeight+ShowButtonShowMore.clientHeight+"px";
                    ContainerTabelaContainer5.style.maxHeight = TabelaContainer5.clientHeight+ShowButtonShowMore.clientHeight+"px";
                }
            });
        }
        ContainerTabela5.style.overflowY = "hidden";
    }
    else
    if(ContainerTabela5.offsetHeight >= ContainerTabela5.scrollHeight)
    {
        ButtonShowMore.style.display = "none";
    }
}
var div5 = document.createElement("div");
div5.style.width = "100%";
div5.style.height = "100%";
div5.style.display = "flex";
div5.style.alignItems = "center";
div5.style.justifyContent = "center";
div5.style.flexWrap = "nowrap";
div5.style.flexDirection = "row";
div5.innerHTML = "<p>Você Não Possui Historicos de Publicações !!!</p>";
if(document.getElementById("section-5-dashboard"))
{
    document.getElementById("section-5-dashboard").appendChild(div5);
}
//container 6 
var Container6 = document.getElementById("section-6-dashboard");
let Documento_container_Total = document.createElement("div");
let Icon_Question = document.createElement("div");
let A_Question = document.createElement("a");
let I_Question = document.createElement("i");
I_Question.classList.add("fa-solid");
I_Question.classList.add("fa-exclamation");
let Documento_container_SubTotal = document.createElement("div");
let Documento_container_Activador = document.createElement("label");
let Documento_container_Left = document.createElement("div");
let Documento_container_Right = document.createElement("div");
let ArrayClassesCodificadas6 = [];
let IdsCodificadas6 = [];
let ArrayContainers6 = [
    Documento_container_Total,
    Icon_Question,
    A_Question,
    I_Question,
    Documento_container_SubTotal,
    Documento_container_Activador,
    Documento_container_Left,
    Documento_container_Right
];
let ArrayClassesContainers6 = [
    "Documento_container_Total",
    "Icon_Question",
    "A_Question",
    "I_Question",
    "Documento_container_SubTotal",
    "Documento_container_Activador",
    "Documento_container_Left",
    "Documento_container_Right"
];
let ArrayCSSContainers6 = [
    "width: 100%; height: 1600px; display: flex; align-items: center; justify-content: space-between; flex-direction: column; flex-wrap: nowrap;",
    "width: 100%; max-width: 70%; height: 20px; display: flex; align-items: flex-end; justify-content: flex-end; flex-direction: row; flex-wrap: nowrap; margin: 0 auto;",
    "text-decoration: none; color: white;",
    "font-size: 30px;",
    "width: 100%; height: 400px; max-width: 80%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;",
    "display: block; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; cursor: pointer;",
    "width: 500px; height: 100%; border: 2px dashed white; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;",
    "width: 100%; height: 100%;"
];
let IdsContainers6 = [
    "Documento_container_Total",
    "Icon_Question",
    "A_Question",
    "I_Question",
    "Documento_container_SubTotal",
    "Documento_container_Activador",
    "Documento_container_Left",
    "Documento_container_Right"
];
for(let c6 = 0; c6 < ArrayClassesContainers6.length; c6++)
{
    for(let codify6 = 0; codify6 < 1; codify6++)
    {
        ArrayClassesContainers6[c6] = btoa(ArrayClassesContainers6[c6]);
    }
    ArrayClassesCodificadas6.push(ArrayClassesContainers6[c6]);
}
for(let c6i = 0; c6i < IdsContainers6.length; c6i++)
{
    for(let codify6 = 0; codify6 < 1; codify6++)
    {
        IdsContainers6[c6i] = btoa(IdsContainers6[c6i]);
    }
    IdsCodificadas6.push(IdsContainers6[c6i]);
}
for(let Containers6 = 0; Containers6 < ArrayContainers6.length; Containers6++)
{
    ArrayContainers6[Containers6].classList.add(ArrayClassesCodificadas6[Containers6]);
    ArrayContainers6[Containers6].id = IdsCodificadas6[Containers6];
    ArrayContainers6[Containers6].style.cssText = ArrayCSSContainers6[Containers6];
}
Documento_container_Total.appendChild(Icon_Question);
Icon_Question.appendChild(A_Question);
A_Question.appendChild(I_Question);
Documento_container_Activador.appendChild(Documento_container_Left);
Documento_container_SubTotal.appendChild(Documento_container_Activador);
Documento_container_Total.appendChild(Documento_container_SubTotal);
A_Question.href = "#";
var FileContainer6 = document.createElement("input");
FileContainer6.style.cssText = "display: none;";
FileContainer6.id = "File-container-6";
FileContainer6.type = "file";
FileContainer6.accept = "application/pdf";
Documento_container_Total.appendChild(FileContainer6);
Documento_container_Activador.htmlFor = "File-container-6";
var StylePage1 = document.createElement("div");
var StylePage2 = document.createElement("div");
var StylePage3 = document.createElement("div");
Documento_container_Left.appendChild(StylePage1);
Documento_container_Left.appendChild(StylePage2);
Documento_container_Left.appendChild(StylePage3);
var mini_title = document.createElement("div");
var paragrafo_title = document.createElement("p");
var mini_circle = document.createElement("div");
StylePage1.style.cssText = "width: 200px; height: 250px; max-width: 200px; max-height: 250px; border: 2px solid white; margin-right: 10px; transform: rotateX(20deg) rotateY(50deg); background-image: url(../../img/Colaborador/Imagem-File.png); background-size: 100%; background-repeat: no-repeat; background-position: center; ";
StylePage2.style.cssText = "width: 200px; height: 300px; max-width: 200px; max-height: 300px; border: 2px solid white; background: white; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; color: black; font-size: 5px;";
StylePage3.style.cssText = "width: 200px; height: 250px; max-width: 200px; max-height: 250px; border: 2px solid white; background: white; margin-left: 10px; transform: rotateX(20deg) rotateY(-50deg); color: black; font-size: 5px;";
var mini_texto = document.createElement("div");
mini_texto.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro, incidunt nemo nulla, quam, est quaerat cum adipisci natus voluptates aspernatur omnis minima ut ad recusandae dolore temporibus iure optio.Commodi iste ducimus iure consequuntur, aperiam numquam explicabo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae incidunt, quis assumenda asperiores harum impedit sit culpa dolorum voluptatum laboriosam in error qui. Mollitia quisquam est sapiente amet harum.Quasi nisi praesentium omnis magni, ipsam pariatur, nam, enim quaerat consectetur sapiente nemo dolorum molestias earum cumque accusantium. Ab, iusto deleniti debitis quidem nostrum illum. Obcaecati aut aliquid placeat amet?Animi perferendis dolores incidunt magnam, dignissimos eum corrupti repudiandae ducimus enim libero. Molestias accusamus sapiente dolores esse consectetur repudiandae saepe, ducimus velit, incidunt impedit laborum! Sequi quod numquam deserunt minima!Sunt aut dicta distinctio ipsa, nihil voluptates, odio fugit culpa quisquam perferendis fuga, enim quaerat magni iusto illum voluptatibus possimus error ratione. Dolores minima sed debitis dolore in tempora consequuntur?Doloremque necessitatibus, voluptates nemo dolorem consequatur perspiciatis illo quos impedit ratione iste dignissimos. Iure nulla impedit voluptatem voluptate veritatis similique, eius qui in, illo natus quasi cumque delectus nam mollitia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum necessitatibus repellendus ipsum eos ad molestiae qui omnis, quos nam cum architecto quae quibusdam placeat voluptatem libero aut soluta. Quae, quaerat.";
mini_circle.style.cssText = "width: 10px; height: 10px; background: black; color: white; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center;";
mini_title.style.cssText = "width: 100%; max-width: 30%; border-bottom: 2px groove black; padding: 5px; margin: 0 auto;";
paragrafo_title.textContent = "Adventure";
paragrafo_title.style.cssText = "width: 100%; font-size: 10px; paading: 0; margin: 0;";
var container_circle = document.createElement("div");
container_circle.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: center;";
container_circle.appendChild(mini_circle);
StylePage2.appendChild(mini_title);
mini_title.appendChild(paragrafo_title);
StylePage2.appendChild(mini_texto);
StylePage2.appendChild(container_circle);
mini_circle.textContent = "1";
var mini_texto3 = document.createElement("div");
mini_texto3.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro, incidunt nemo nulla, quam, est quaerat cum adipisci natus voluptates aspernatur omnis minima ut ad recusandae dolore temporibus iure optio.Commodi iste ducimus iure consequuntur, aperiam numquam explicabo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae incidunt, quis assumenda asperiores harum impedit sit culpa dolorum voluptatum laboriosam in error qui. Mollitia quisquam est sapiente amet harum.Quasi nisi praesentium omnis magni, ipsam pariatur, nam, enim quaerat consectetur sapiente nemo dolorum molestias earum cumque accusantium. Ab, iusto deleniti debitis quidem nostrum illum. Obcaecati aut aliquid placeat amet?Animi perferendis dolores incidunt magnam, dignissimos eum corrupti repudiandae ducimus enim libero. Molestias accusamus sapiente dolores esse consectetur repudiandae saepe, ducimus velit, incidunt impedit laborum! Sequi quod numquam deserunt minima!Sunt aut dicta distinctio ipsa, nihil voluptates, odio fugit culpa quisquam perferendis fuga, enim quaerat magni iusto illum voluptatibus possimus error ratione. Dolores minima sed debitis dolore in tempora consequuntur?Doloremque necessitatibus, voluptates nemo dolorem consequatur perspiciatis illo quos impedit ratione iste dignissimos. Iure nulla impedit voluptatem voluptate veritatis similique, eius qui in, illo natus quasi cumque delectus nam mollitia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum necessitatibus repellendus ipsum eos ad molestiae qui omnis, quos nam cum architecto quae quibusdam placeat voluptatem libero aut soluta. Quae, quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus porro, incidunt nemo nulla, quam, est quaerat cum adipisci natus voluptates aspernatur omnis minima ut ad recusandae dolore temporibus iure optio.Commodi iste ducimus iure consequuntur, aperiam numquam explicabo.Lorem ipsum dolor sit, amet consectetur adipisicing";
StylePage3.appendChild(mini_texto3);
//Seleciona o input de arquivo e o container onde as páginas e botões serão exibidos
const InputFile = FileContainer6;
const ContainerPreviewPDF2 = document.createElement("div");
var classescontainerpreview = [
    "container-preview-pdf"
];
var classe = classescontainerpreview[0];
for(let classes = 0; classes < 1; classes++)
{
    classe = btoa(classe);
}
var button_nextions_pdf = document.createElement("button");
var button_previous_pdf = document.createElement("button");
button_previous_pdf.type = "button";
button_nextions_pdf.type = "button";

ContainerPreviewPDF2.classList.add(classe);
ContainerPreviewPDF2.classList.add("Container-de-Paginas-PDF-preview-Book");
ContainerPreviewPDF2.style.cssText = "position: relative; top: 200px; width: 100%; height: calc(1600px - (400px + 20px)); max-width: 50%; margin: 0 auto; overflow: hidden;";
var Icon_Button_Next_PDFs_1 = document.createElement("i");
var Icon_Button_previous_PDFs_1 = document.createElement("i");
Icon_Button_previous_PDFs_1.classList.add("fa-solid");
Icon_Button_previous_PDFs_1.classList.add("fa-arrow-left");
Icon_Button_Next_PDFs_1.classList.add("fa-solid");
Icon_Button_Next_PDFs_1.classList.add("fa-arrow-right");
button_nextions_pdf.appendChild(Icon_Button_Next_PDFs_1);
button_previous_pdf.appendChild(Icon_Button_previous_PDFs_1);
button_nextions_pdf.style.cssText = "width: 100px; height: 100px; background: gray; color: white; position: absolute; top: 30%; left: 100%; transform: translate(-100%); border: none; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; cursor: pointer; outline: none; font-size: 20px;";
button_previous_pdf.style.cssText = "width: 100px; height: 100px; background: gray; color: white; position: absolute; top: 30%; border: none; opacity: 0.7; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; cursor: pointer; outline: none; font-size: 20px;";

InputFile.addEventListener("change",function(event){
            //verificando a existencia de mais um elemento que contem outro PDF
    if(document.querySelector(".Container-de-Paginas-PDF-preview-Book"))
    {
        if(document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length > 0)
        {
            document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){
                variavel.remove();
            });
            button_nextions_pdf.remove();
            button_previous_pdf.remove();
            Documento_container_Total.style.transition = "1s";
            Documento_container_Total.style.height = "calc(1600px - 1180px)";
            ContainerPreviewPDF2.style.top = "0";
            ContainerPreviewPDF2.style.height = "0";
        }
    }
            //alocando o valor do Evento Change em uma variavel
    var file = event.target.files[0];
            //verificando se existe
    if(file)
    {
                //verifica se o elemento de carregamento já existe 
        if(getComputedStyle(document.querySelector(".Loading-PDFs-interative")).display === "none")
        {
            document.querySelector(".Loading-PDFs-interative").style.display = "flex";
        }
        else
        {
            document.querySelector(".Loading-PDFs-interative").style.display = "none";
        }
                //se existir
                //instancie a classe FileReader (provavelmente ja vem com o link do header, não sei ainda...)
        var LeitorDoPDF = new FileReader(file);
                //verificando a Instância
                    //console.log("Usando o Leitor FileReader no file: ",LeitorDoPDF);
        //

                //Ao instanciar FileReader estou lendo este file como um ArrayButter
                //adicionar um ouvinte com evento load na variavel
        LeitorDoPDF.onload = function(){
                    //retira o elemento de carregamento 
            if(getComputedStyle(document.querySelector(".Loading-PDFs-interative")).display === "flex")
            {
                document.querySelector(".Loading-PDFs-interative").style.display = "none";
            }
            else
            {
                document.querySelector(".Loading-PDFs-interative").style.display = "flex";
            }
                    //digo qual o tipo da array que quero
                    //para isso instanciamos uma nova classe 
                    //nesse trecho estou instanciado uma nova classe Uint8Array com o result da instancia (FileReader) do file (file) na Uint8Array para armazenar dados binarios de 8 Bits
            var TipoDaArray = new Uint8Array(LeitorDoPDF.result);
                    //uso a Biblioteca do JavaScript para PDFs
                    //getDocument -> pege o Documento
                    //getDocument(TypoDaArray) -> pega o documento do tipo da Array
            var BibliotecaDoJavaScriptPDF = pdf.getDocument(TipoDaArray);
                    //Verificando a Bibilioteca JavaScript PDF 
                        //console.log("Biblioteca JavaScript do PDF: ",BibliotecaDoJavaScriptPDF);
            //
                    //Verificando a Biblioteca JavaScript PDF (promise)
                        //console.log("Biblioteca (tentando descobrir o que é esse promise): ", BibliotecaDoJavaScriptPDF.promise);
            //
                    //Verificando o tipo da Array 
                        //console.log("Tipo da Array: ",TipoDaArray);
            //
            BibliotecaDoJavaScriptPDF.promise.then(function(pdf){
                for(let PDFPages = 1; PDFPages <= pdf.numPages; PDFPages++)
                {
                    pdf.getPage(PDFPages).then(function(pages){
                        var PaginasPDF = document.createElement("canvas");
                        PaginasPDF.classList.add("paginas-PDF-dashboards-conteudo");
                        PaginasPDF.getContext("2d");
                        PaginasPDF.style.cssText = "position: absolute; top: 0; left: 100%; transition: 1s;";
                        var view = pages.getViewport({scale: 1});

                        PaginasPDF.width = view.width;
                        PaginasPDF.height = view.height;

                        ContainerPreviewPDF2.appendChild(PaginasPDF);

                        var Rederização = {
                        canvasContext: PaginasPDF.getContext("2d"),
                        viewport: view
                        }
                        if(document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length > 0)
                        {
                                    //criando botões de ação 
            
                            ContainerPreviewPDF2.appendChild(button_nextions_pdf);
                            ContainerPreviewPDF2.appendChild(button_previous_pdf);
            
                            var indexModulo = 0;
            
                            button_nextions_pdf.addEventListener("click",function(){
                                indexModulo = (indexModulo + 1) % document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length;
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){variavel.classList.remove("active-document-PDF"); variavel.style.transition = "1s"; variavel.style.left = "100%";});
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].classList.add("active-document-PDF");
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.transition = "1s";
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.left = "0";
                            });
            
                            button_previous_pdf.addEventListener("click",function(){
                                indexModulo = (indexModulo - 1 + document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length) % document.querySelectorAll(".paginas-PDF-dashboards-conteudo").length;
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){variavel.classList.remove("active-document-PDF"); variavel.style.transition = "1s"; variavel.style.left = "100%";});
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].classList.add("active-document-PDF");
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.transition = "1s";
                                document.querySelectorAll(".paginas-PDF-dashboards-conteudo")[indexModulo].style.left = "0";
                            });
                    
                        }
                        document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel,index){
                                    //a numeração de cada pagina é de 1 a 26 
                                    //a array de elementos da mesma classe é de 0 a 25 
                                    //adicionando mais um (+1) em cada index da array equivale ao mesmo da numeração de paginas
                            variavel.id = "paginas-PDF-dashboards-conteudo-"+(1 + index);
                        });
                        document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel){
                            if(variavel.classList.contains("active-document-PDF"))
                            {
                                variavel.style.transition = "1s";
                                variavel.style.left = "0";
                            }
                        });
                        document.querySelectorAll(".paginas-PDF-dashboards-conteudo").forEach(function(variavel,index){
                        if(variavel.id == "paginas-PDF-dashboards-conteudo-1")
                        {
                            variavel.classList.add("active-document-PDF");
                        }
                        });
                
                        pages.render(Rederização);

                    });
                }
            });

        }
        LeitorDoPDF.readAsArrayBuffer(file);

        if(getComputedStyle(Documento_container_Total).height !== 1600)
        {
            Documento_container_Total.style.transition = "1s";
            Documento_container_Total.style.height = "1600px";
            ContainerPreviewPDF2.style.top = "200px";
            ContainerPreviewPDF2.style.height = "calc(1600px - (40px + 200px))";
        }
        else
        if(getComputedStyle(Documento_container_Total).height === 1600)
        {
            Documento_container_Total.style.transition = "1s";
            Documento_container_Total.style.height = "calc(1600px - 1180px)";
            ContainerPreviewPDF2.style.top = "0";
            ContainerPreviewPDF2.style.height = "0";
        }
    }
});
Container6.appendChild(Documento_container_Total);
Documento_container_Total.appendChild(ContainerPreviewPDF2);
Documento_container_Total.style.height = "calc(1600px - 1180px)";
ContainerPreviewPDF2.style.top = "0";
ContainerPreviewPDF2.style.height = "0";
Documento_container_Total.style.transition = "1s";

A_Question.addEventListener("click",function(event){
    event.preventDefault();
            //criando Elementos 
    var classesPopUpPreviewYourBook = [
    'Overlay',
    'Modal',
    'Line',
    'Index',
    'title',
    'Container-POPUP-Preview-Your-Book',
    'boxe-1',
    'boxe-2',
    'boxe-3',
    'boxe-4'];
    var ElementosPopUpConjunto = [];
    var classes = "classes-elemento-popup-dinamico";
    var ids = "ids-elemento-popup-dinamico";
    for(let elementosPopUp = 0; elementosPopUp < 10; elementosPopUp++)
    {
        var documentoElemento = document.createElement("div");
        documentoElemento.id = ids;
        ElementosPopUpConjunto.push(documentoElemento);
        ElementosPopUpConjunto[elementosPopUp].classList.add(classesPopUpPreviewYourBook[elementosPopUp]);
    }
    var ElementosPopUpConjuntoStyle = [
        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: block; z-index: 1000; cursor: pointer;",
        "position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); width: 60%; height: 50%; background: #333; border-radius: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; z-index: 1001; padding: 10px;",
        "width: 98%; height: 98%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: white; border-radius: 20px;",
        "position: relative; top: 0; left: 0; width: 98%; height: 98%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: #333; border-radius: 20px;",
        "position: absolute; width: 400px; background: #333; color: white; top: -12px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;",
        "width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; flex-direction: row; overflow: auto;",
        "width: 340px; height: 190px; border: 2px solid white; background: #333; color: white; border-radius: 20px; margin: 10px; padding: 5px;",
        "width: 340px; height: 190px; border: 2px solid white; background: #333; color: white; border-radius: 20px; margin: 10px; padding: 5px;",
        "width: 340px; height: 190px; border: 2px solid white; background: #333; color: white; border-radius: 20px; margin: 10px; padding: 5px;",
        "width: 340px; height: 190px; border: 2px solid white; background: #333; color: white; border-radius: 20px; margin: 10px; padding: 5px;"
    ];
            //Estilizando Elementos
    for(let estilizando = 0; estilizando < ElementosPopUpConjunto.length; estilizando++)
    {
        ElementosPopUpConjunto[estilizando].style.cssText = ElementosPopUpConjuntoStyle[estilizando];
    }
    var Overlay = "";
    var Modal = "";
    var Line = "";
    var Index = "";
    var title = "";
    var ContainerPreviewYourBook = "";
    var boxe1 = "";
    var boxe2 = "";
    var boxe3 = "";
    var boxe4 = "";

            //Estruturando Elementos
    ElementosPopUpConjunto.forEach(function(elemento){
        if(elemento.classList.contains('Overlay')){Overlay = elemento;}
        else if(elemento.classList.contains('Modal')){Modal = elemento;}
        else if(elemento.classList.contains('Line')){Line = elemento;}
        else if(elemento.classList.contains('Index')){Index = elemento;}
        else if(elemento.classList.contains('title')){title = elemento;}
        else if(elemento.classList.contains('Container-POPUP-Preview-Your-Book')){ContainerPreviewYourBook = elemento;}
        else if(elemento.classList.contains('boxe-1')){boxe1 = elemento;}
        else if(elemento.classList.contains('boxe-2')){boxe2 = elemento;}
        else if(elemento.classList.contains('boxe-3')){boxe3 = elemento;}
        else if(elemento.classList.contains('boxe-4')){boxe4 = elemento;}
    });
    document.body.appendChild(Overlay);
    document.body.appendChild(Modal);
    Modal.appendChild(Line);
    Line.appendChild(Index);
    Index.appendChild(title);
    Index.appendChild(ContainerPreviewYourBook);
    ContainerPreviewYourBook.appendChild(boxe1);
    ContainerPreviewYourBook.appendChild(boxe2);
    ContainerPreviewYourBook.appendChild(boxe3);
    ContainerPreviewYourBook.appendChild(boxe4);
    title.textContent = "Termos para Melhor Resolução do seu Livro";
    var Boxes = [boxe1,boxe2,boxe3,boxe4];
    var TitlesBoxesPopUpPreviewBook = [
        '<div style="width: 100%; max-width: 50%; display: flex; align-items: center; justify-content: center; border-bottom: 2px groove white; margin: 0 auto;">Estilo da Postagem</div>',
        '<div style="width: 100%; max-width: 55%; display: flex; align-items: center; justify-content: center; border-bottom: 2px groove white; margin: 0 auto;">Verifique a Ortografia</div>',
        '<div style="width: 100%; max-width: 50%; display: flex; align-items: center; justify-content: center; border-bottom: 2px groove white; margin: 0 auto;">Verifique a fonte</div>',
        '<div style="width: 100%; max-width: 50%; display: flex; align-items: center; justify-content: center; border-bottom: 2px groove white; margin: 0 auto;">Normas ABNT</div>'
    ];
    var TextosBoxesPopUpPreviewBook = [
        'Verifique se o estilo da Postagem esta em "Retrato"',
        'Verifique se a ortografia esta regida corretamente ',
        'Verifique se a fonte do Livro esta regida com 12 pt',
        'Verifique se suas páginas estão seguindo as Normas ABNT'
    ];
    for(let b= 0; b < Boxes.length; b++)
    {
        Boxes[b].innerHTML = TitlesBoxesPopUpPreviewBook[b]+TextosBoxesPopUpPreviewBook[b];
    }
            //Ações 
    Overlay.addEventListener("click",function(){document.body.removeChild(this); document.body.removeChild(Modal);});
});

//Container 7 
if(
    window.dadosviewsv &&
    window.dadosviewsk &&
    window.dadosviewssk &&
    window.dadosviewssv
)
{
    var Container7 = document.getElementById("section-7-dashboard");
    var EtineararioContainer7 = document.createElement("div");
    var ElementoEtineario7_1 = document.createElement("div");
    var ElementoEtineario7_2 = document.createElement("div");
    var ElementoEtineario7_3 = document.createElement("div");
    var Estatisticas = document.createElement("div");
    var visãoGeral = document.createElement("div");
    var engajamento = document.createElement("div");
    var popularidade = document.createElement("div");
    var TotaldeLivrosPostados = document.createElement("div");
    var TotalVisualizações = document.createElement("div");
    var ContainerImagemTotaldeLivrosPostados = document.createElement("div");
    var ContainerImagemVizualização = document.createElement("div");
    var ImagemTotaldeLivrosPostados = document.createElement("img");
    var ImagemVizualização = document.createElement("img");
    var ContainerBooksNamesPublicados = document.createElement("div");
    var ContainerBooksVizualizações = document.createElement("div");
    var ContainerScrollEngajamento = document.createElement("div");
    var Elementos7 = [
        EtineararioContainer7, 
        ElementoEtineario7_1, 
        ElementoEtineario7_2, 
        ElementoEtineario7_3,
        Estatisticas,
        visãoGeral,
        engajamento,
        popularidade,
        TotaldeLivrosPostados,
        TotalVisualizações,
        ContainerImagemTotaldeLivrosPostados,
        ContainerImagemVizualização,
        ImagemTotaldeLivrosPostados,
        ImagemVizualização,
        ContainerBooksNamesPublicados,
        ContainerBooksVizualizações,
        ContainerScrollEngajamento
    ];

    var Classes7 = [];
    var string7classes = "classe-7";
    var string7classesEtinerario = "etinerarios-7";
    var pagesEstatisticas = "Paginas-da-Estatisticas";
    for(let h = 0; h < 1; h++)
    {
        string7classes = btoa(string7classes);
    }

    for(let c7 = 0; c7 < Elementos7.length; c7++)
    {
        Classes7.push(string7classes.replace(/[=/\/.,#]/g,''));
    }
    var EstilizaçãoContainer7 = [
        "width: 100%; max-width: 40%; margin: 0 auto; display: flex; align-items: flex-start; justify-content: flex-start; height: 50px; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;",
        "transition: 1s; width: 100px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;",
        "transition: 1s; width: 100px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;",
        "transition: 1s; width: 100px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;",
        "transition: 1s; width: 100%; height: 800px; position: relative; top: 0; left: 0; overflow: hidden;",
        "transition: 1s; width: 100%; height: 100%; position: absolute; top: 0; left: 0; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;",
        "transition: 1s; width: 100%; height: 100%; position: absolute; top: 0; left: 100%; background: transparent;",
        "transition: 1s; width: 100%; height: 100%; max-height: 100%;position: absolute; top: 0; left: 100%; background: transparent; overflow-y: auto; overflow-x: hidden;",
        "transition: 1s; width: 50%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;",
        "transition: 1s; width: 50%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;",
        "transition: 1s; width: 70%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; flex-direction: column;",
        "transition: 1s; width: 70%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; flex-direction: column;",
        "transition: 1s; width: 100%; border-bottom: 2px groove white;",
        "transition: 1s; width: 340.66px; height: 311.75px; border-bottom: 2px groove white;",
        "transition: 1s; width: 100%; height: 60%; max-height: 60%; min-height: 60%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column; overflow-y: scroll; overflow-x: hidden;",
        "transition: 1s; width: 100%; height: 60%; max-height: 60%; min-height: 60%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column; overflow-y: scroll; overflow-x: hidden;",
        "transition: 1s; width: 100%; height: 100%; background: transparent; max-height: 100%; overflow-y: auto; overflow-x: hidden;"
    ];

    for(let seteClass = 0; seteClass < Elementos7.length; seteClass++)
    {
        Elementos7[seteClass].classList.add(Classes7[seteClass]);
    }

    for(let sete = 0; sete < Elementos7.length; sete++)
    {
        Elementos7[sete].style.cssText = EstilizaçãoContainer7[sete];
    }

    EtineararioContainer7.appendChild(ElementoEtineario7_1);
    EtineararioContainer7.appendChild(ElementoEtineario7_2);
    EtineararioContainer7.appendChild(ElementoEtineario7_3);
    ElementoEtineario7_1.textContent = "Visão Geral";
    ElementoEtineario7_2.textContent = "Engajamento";
    ElementoEtineario7_3.textContent = "Popularidade";

    ElementoEtineario7_1.addEventListener("mouseenter",function(){this.style.cssText = "transition: 1s; width: 100px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;";});
    ElementoEtineario7_1.addEventListener("mouseleave",function(){this.style.cssText = "transition: 1s; width: 100px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;";});
    ElementoEtineario7_2.addEventListener("mouseenter",function(){this.style.cssText = "transition: 1s; display: flex; align-items: center; justify-content: center; width: 200px; max-width: 200px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;";});
    ElementoEtineario7_2.addEventListener("mouseleave",function(){this.style.cssText = "transition: 1s; width: 200px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;";});
    ElementoEtineario7_3.addEventListener("mouseenter",function(){this.style.cssText = "transition: 1s; display: flex; align-items: center; justify-content: center; width: 200px; max-width: 200px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;";});
    ElementoEtineario7_3.addEventListener("mouseleave",function(){this.style.cssText = "transition: 1s; width: 200px; max-width: 100px; min-width: 100px; overflow: hidden; background: black; color: white; border-radius: 10px; padding: 10px; cursor: pointer; white-space: nowrap; text-overflow: ellipsis;";});

    Estatisticas.appendChild(visãoGeral);
    Estatisticas.appendChild(engajamento);
    Estatisticas.appendChild(popularidade);
    Container7.appendChild(EtineararioContainer7);
    Container7.appendChild(Estatisticas);

    ElementoEtineario7_1.classList.add(string7classesEtinerario);
    ElementoEtineario7_2.classList.add(string7classesEtinerario);
    ElementoEtineario7_3.classList.add(string7classesEtinerario);

    visãoGeral.classList.add(pagesEstatisticas);
    engajamento.classList.add(pagesEstatisticas);
    popularidade.classList.add(pagesEstatisticas);

    window.addEventListener("load",function(){
        document.querySelectorAll("."+string7classesEtinerario).forEach(function(elemento,index){
            elemento.addEventListener("click",function(){
                document.querySelectorAll("."+pagesEstatisticas).forEach(function(variavel){variavel.style.transition = "1s"; variavel.style.left = "100%";});
                document.querySelectorAll("."+pagesEstatisticas)[index].style.transition = "1s";
                document.querySelectorAll("."+pagesEstatisticas)[index].style.left = "0";
            });
        });
    });

    visãoGeral.appendChild(TotaldeLivrosPostados);
    TotaldeLivrosPostados.appendChild(ContainerImagemTotaldeLivrosPostados);
    ContainerImagemTotaldeLivrosPostados.appendChild(ImagemTotaldeLivrosPostados);
    ContainerImagemTotaldeLivrosPostados.appendChild(ContainerBooksNamesPublicados);
    visãoGeral.appendChild(TotalVisualizações);
    TotalVisualizações.appendChild(ContainerImagemVizualização);
    ContainerImagemVizualização.appendChild(ImagemVizualização);
    ContainerImagemVizualização.appendChild(ContainerBooksVizualizações);
    ImagemTotaldeLivrosPostados.src = "../../img/Colaborador/afd1e65cacca8822d1f857d5182b3aed-Photoroom.png";
    ImagemTotaldeLivrosPostados.style.cursor = "pointer";
    ImagemVizualização.src = "../../img/Colaborador/Leitor-Photoroom.png";
    ImagemVizualização.style.cursor = "pointer";
    var DataMessage7 = Container7.querySelector("div").querySelector(".elemento2-subelemento-section-7").textContent;

    for(let d7 = 0; d7 < 1; d7++)
    {
        DataMessage7 = atob(DataMessage7);
    }
    var DataArrayChars = [];
    var DataArray7 = DataMessage7.split(",");
    DataArray7.forEach(function(Data){
        DataArrayChars.push(String.fromCharCode(Number(Data)));
    });

    var EncodeBase = DataArrayChars.join("");

    for(let y = 0; y < 1; y++)
    {
        EncodeBase = atob(EncodeBase);
    }

    var ArrayEncodeBase7 = EncodeBase.split("-");
    var StringCharsNumberForChars = [];
    ArrayEncodeBase7.forEach(function(elemento){
        StringCharsNumberForChars.push(String.fromCharCode(Number(elemento)));
    });

    var NomesTexto7 = StringCharsNumberForChars.join("");

    var QuantidadesValues7 = Container7.querySelector("div").querySelector(".elemento1-subelemento-section-7").textContent;
    for(let b = 0; b < 1; b++)
    {
        QuantidadesValues7 = atob(QuantidadesValues7);
    }

    var ArrayQuantidadeValues7 = QuantidadesValues7.split("-");

    var ArrayQuantidadeValuesNumeros7 = [];

    ArrayQuantidadeValues7.forEach(function(variavel){
        ArrayQuantidadeValuesNumeros7.push(Number(variavel));
    });

    const QuantidadedeNomesBooks = [];
    let IndexNomesBooks = 0;
    for(let TextoNomes = 0; TextoNomes < ArrayQuantidadeValuesNumeros7.length; TextoNomes++)
    {
                //Array                    TextoCompleto/ substring separa uma string 
                //                                     substring(0 , 3) -> pega a primeira letra (0) até a (2) , não pega a (3)
                //no caso , como o incrementador inicia-se em 0 , temos teriamos Array = [11 , 12 , 13, ...]; sendo [0] => 11
                //(0) = (0) + Array[0]
                //(0) = (0) + 11
                //0 = 11
                //pega as primeiras 10 caracteres do "NomeTexto7"
        QuantidadedeNomesBooks.push(NomesTexto7.substring(IndexNomesBooks, IndexNomesBooks + ArrayQuantidadeValuesNumeros7[TextoNomes]));
        IndexNomesBooks = IndexNomesBooks + ArrayQuantidadeValuesNumeros7[TextoNomes];
    }
    QuantidadedeNomesBooks.forEach(function(elementos){

        var documento = document.createElement("div");

        var imagem = document.createElement("img");

        documento.classList.add("elemento-dinamico-book-cadastrado-booknest-div");

        imagem.classList.add("elemento-dinamico-book-cadastrado-booknest-imagem");

        imagem.id = elementos+"-imagem";

        documento.id = elementos;

        documento.innerHTML = elementos;

        documento.appendChild(imagem);

        imagem.style.cssText = "width: 50px; height: 50px;";

        imagem.src = "../../img/Colaborador/afd1e65cacca8822d1f857d5182b3aed-Photoroom.png";

        ContainerBooksNamesPublicados.appendChild(documento);

        documento.style.cssText = "width: 100%; max-width: 90%; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; margin: 10px 0; border-radius: 10px; padding: 5px;";
    });
    window.addEventListener("load",function(){
        ContainerBooksNamesPublicados.classList.add("container-listas-de-livros-cadastrados-booknest");
        ContainerBooksVizualizações.classList.add("container-listas-de-livros-cadastrados-booknest");
        var styleContainerBookNest = document.createElement("style");
        styleContainerBookNest.textContent = ".container-listas-de-livros-cadastrados-booknest::-webkit-scrollbar{"+
        "width: 5px;"+
        "background: transparent;"
        +"}"+
        ".container-listas-de-livros-cadastrados-booknest::-webkit-scrollbar-thumb{"+
        "width: 5px;"+
        "background: white;"+
        "border-radius: 10px;"
        +"}";
        document.head.appendChild(styleContainerBookNest);
    });
    var k7 = []; var qk7 = [];
    var v7 = []; var qv7 = [];
    var Keys7 = []; var KeysNumber7 = [];
    var Values7 = []; var ValuesNumber7 = [];
    Object.values(window.dadosviewsv).forEach(function(variavel){v7.push(variavel.split(","));});
    Object.values(window.dadosviewsk).forEach(function(variavel){k7.push(variavel.split(","));});
    Object.values(window.dadosviewssk).forEach(function(variavel){qk7.push(variavel.split(","));});
    Object.values(window.dadosviewssv).forEach(function(variavel){qv7.push(variavel.split(","));});
    k7.forEach(function(dados){
        dados.forEach(function(item){
            for(let y = 0; y < 1; y++)
            {
                item = atob(item);
            }
            item.split("-").forEach(function(numeros){
                Keys7.push(String.fromCharCode(Number(numeros)));
            });
        });
    });
    qk7.forEach(function(dados){
        dados.forEach(function(items){
            for(let y = 0; y < 1; y++)
            {
                items = atob(items);
            }
            KeysNumber7.push(Number(items));
        });
    });
    v7.forEach(function(dados){
        dados.forEach(function(item){
            for(let y = 0; y < 1; y++)
            {
                item = atob(item);
            }
            item.split("-").forEach(function(numeros){
                Values7.push(String.fromCharCode(Number(numeros)));
            });
        });
    });
    qv7.forEach(function(dados){
        dados.forEach(function(items){
            for(let y = 0; y < 1; y++)
            {
                items = atob(items);
            }
            ValuesNumber7.push(Number(items));
        });
    });
    var stringUsuariosViews = Values7.join("");
    var stringPerfilsViews = Keys7.join("");
    var UsuariosViews = [];
    var PerfilViews = [];
    let indexusuariosviews = 0;
    let indexperfilsviews = 0;
    for(let UserViews = 0; UserViews < ValuesNumber7.length; UserViews++)
    {
        UsuariosViews.push(stringUsuariosViews.substring(indexusuariosviews , indexusuariosviews + ValuesNumber7[UserViews]));
        indexusuariosviews = indexusuariosviews + ValuesNumber7[UserViews];
    }
    for(let KeysViews = 0; KeysViews < KeysNumber7.length; KeysViews++)
    {
        PerfilViews.push(stringPerfilsViews.substring(indexperfilsviews , indexperfilsviews + KeysNumber7[KeysViews]));
        indexperfilsviews = indexperfilsviews + KeysNumber7[KeysViews];
    }
    if(UsuariosViews.length === PerfilViews.length)
    {
        var TempUsuariosViews = {};
        var UsuariosVisualizam = [];
        for(let Uvs = 0; Uvs < UsuariosViews.length; Uvs++)
        {
            TempUsuariosViews[PerfilViews[Uvs]] = UsuariosViews[Uvs];

            if(Object.keys(TempUsuariosViews).length == 1)
            {
                UsuariosVisualizam.push(TempUsuariosViews);

                TempUsuariosViews = {}
            }
        }
        UsuariosVisualizam.forEach(function(Dados){
            Object.keys(Dados).forEach(function(key){
                var documento_barra = document.createElement("div");
                var documento_texto = document.createElement("p");
                var documento_image = document.createElement("img");
                documento_image.style.cssText = "width: 50px; height: 50px; border-radius: 50%;";
                documento_texto.textContent = Dados[key];
                documento_texto.style.cssText = "text-align: center; margin: 0; padding: 0; width: 100%; text-transform: capitalize;";
                if(key === '')
                {
                    documento_image.src = "../../img/Usuario-Logado/Foto-default.webp";
                }
                else
                {
                    documento_image.src = "../../imagens-de-perfil-de-usuarios/"+key;
                }
                documento_barra.style.cssText = "width: 90%; cursor: pointer; padding: 5px; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; border-radius: 10px; margin: 20px auto;";
                documento_barra.appendChild(documento_image);
                documento_barra.appendChild(documento_texto);
                ContainerBooksVizualizações.appendChild(documento_barra);
            });
        });
    }
    window.addEventListener("load",function(){
        ContainerBooksVizualizações.querySelectorAll("div").forEach(function(variavel){
            variavel.addEventListener("click",function(){
                var overlay_userViews   = document.createElement("div");
                var modal_userViews     = document.createElement("div");
                var elemento_userViews  = document.createElement("div");
                var index_userViews     = document.createElement("div");
                var popup_userViews     = document.createElement("div");
                var pages_userViews     = document.createElement("div");
                var title_userViews     = document.createElement("div");
                var parag_userViews     = document.createElement("p");
                var first_userViews     = document.createElement("div");
                var segun_userViews     = document.createElement("div");
                var image_userViews     = document.createElement("img");
                var texto_userViews     = document.createElement("p");
                var Elementos_userViews = [
                    overlay_userViews,
                    modal_userViews,
                    elemento_userViews,
                    index_userViews,
                    popup_userViews,
                    pages_userViews,
                    title_userViews,
                    parag_userViews,
                    first_userViews,
                    segun_userViews,
                    image_userViews,
                    texto_userViews
                ]; 
                var Estilização_userViews = [
                    'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;',
                    'position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60%; height: 70%; background: #333; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; border-radius: 10px; z-index: 11;',
                    'width: 98%; height: 98%; background: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
                    'width: 98%; height: 98%; background: #333; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
                    'position: relative; top: 0; left: 0; width: 100%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;',
                    'width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;',
                    'position: absolute; top: -8px; background: #333; color: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
                    'color: white; padding: 0; margin: 0;',
                    'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center;',
                    'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center;',
                    'width: 300px; height: 300px; border-radius: 50%;',
                    'color: white; font-size: 30px;'
                ];
                if(Elementos_userViews.length === Estilização_userViews.length)
                {
                    var i = 0;
                    while(i < Elementos_userViews.length)
                    {
                        Elementos_userViews[i].style.cssText = Estilização_userViews[i];
                        i++;
                    }
                    document.body.appendChild(overlay_userViews);
                    document.body.appendChild(modal_userViews);
                    modal_userViews.appendChild(elemento_userViews);
                    elemento_userViews.appendChild(index_userViews);
                    index_userViews.appendChild(popup_userViews);
                    popup_userViews.appendChild(title_userViews);
                    popup_userViews.appendChild(pages_userViews);
                    title_userViews.appendChild(parag_userViews);
                    pages_userViews.appendChild(first_userViews);
                    pages_userViews.appendChild(first_userViews);
                    pages_userViews.appendChild(segun_userViews);
                    parag_userViews.textContent = "USUARIO QUE VISUALIZOU SEU PERFIL";
                    first_userViews.appendChild(image_userViews);
                    segun_userViews.appendChild(texto_userViews);
                    image_userViews.src = this.querySelector("img").src;
                    texto_userViews.textContent = this.querySelector("p").textContent;

                    overlay_userViews.addEventListener("click",function(){
                        document.body.removeChild(this);
                        document.body.removeChild(modal_userViews);
                    });

                }
            });
        });
    });
    window.addEventListener("load", function(){
        ImagemTotaldeLivrosPostados.addEventListener("click",function(){
        var overlay_ImagemTotaldeLivrosPostados   = document.createElement("div");
        var modal_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var elemento_ImagemTotaldeLivrosPostados  = document.createElement("div");
        var index_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var popup_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var pages_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var title_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var parag_ImagemTotaldeLivrosPostados     = document.createElement("p");
        var first_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var segun_ImagemTotaldeLivrosPostados     = document.createElement("div");
        var image_ImagemTotaldeLivrosPostados     = document.createElement("img");
        var texto_ImagemTotaldeLivrosPostados     = document.createElement("p");
        var Elementos_ImagemTotaldeLivrosPostados = [
            overlay_ImagemTotaldeLivrosPostados,
            modal_ImagemTotaldeLivrosPostados,
            elemento_ImagemTotaldeLivrosPostados,
            index_ImagemTotaldeLivrosPostados,
            popup_ImagemTotaldeLivrosPostados,
            pages_ImagemTotaldeLivrosPostados,
            title_ImagemTotaldeLivrosPostados,
            parag_ImagemTotaldeLivrosPostados,
            first_ImagemTotaldeLivrosPostados,
            segun_ImagemTotaldeLivrosPostados,
            image_ImagemTotaldeLivrosPostados,
            texto_ImagemTotaldeLivrosPostados
        ]; 
        var Estilização_ImagemTotaldeLivrosPostados = [
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;',
            'position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60%; height: 70%; background: #333; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; border-radius: 10px; z-index: 11;',
            'width: 98%; height: 98%; background: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
            'width: 98%; height: 98%; background: #333; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
            'position: relative; top: 0; left: 0; width: 100%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;',
            'width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;',
            'position: absolute; top: -8px; background: #333; color: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
            'color: white; padding: 0; margin: 0;',
            'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center;',
            'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center;',
            'width: 300px; height: 300px; border-radius: 50%;',
            'color: white; font-size: 30px;'
        ];
        if(Elementos_ImagemTotaldeLivrosPostados.length === Estilização_ImagemTotaldeLivrosPostados.length)
        {
            var i = 0;
            while(i < Elementos_ImagemTotaldeLivrosPostados.length)
            {
                Elementos_ImagemTotaldeLivrosPostados[i].style.cssText = Estilização_ImagemTotaldeLivrosPostados[i];
                i++;
            }
            document.body.appendChild(overlay_ImagemTotaldeLivrosPostados);
            document.body.appendChild(modal_ImagemTotaldeLivrosPostados);
            modal_ImagemTotaldeLivrosPostados.appendChild(elemento_ImagemTotaldeLivrosPostados);
            elemento_ImagemTotaldeLivrosPostados.appendChild(index_ImagemTotaldeLivrosPostados);
            index_ImagemTotaldeLivrosPostados.appendChild(popup_ImagemTotaldeLivrosPostados);
            popup_ImagemTotaldeLivrosPostados.appendChild(title_ImagemTotaldeLivrosPostados);
            popup_ImagemTotaldeLivrosPostados.appendChild(pages_ImagemTotaldeLivrosPostados);
            title_ImagemTotaldeLivrosPostados.appendChild(parag_ImagemTotaldeLivrosPostados);
            pages_ImagemTotaldeLivrosPostados.appendChild(first_ImagemTotaldeLivrosPostados);
            pages_ImagemTotaldeLivrosPostados.appendChild(first_ImagemTotaldeLivrosPostados);
            pages_ImagemTotaldeLivrosPostados.appendChild(segun_ImagemTotaldeLivrosPostados);
            parag_ImagemTotaldeLivrosPostados.textContent = "QUANTIDADE DE LIVROS PUBLICADOS";
            first_ImagemTotaldeLivrosPostados.appendChild(image_ImagemTotaldeLivrosPostados);
            segun_ImagemTotaldeLivrosPostados.appendChild(texto_ImagemTotaldeLivrosPostados);
            image_ImagemTotaldeLivrosPostados.src = this.src;
            texto_ImagemTotaldeLivrosPostados.innerHTML = "<div style='display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;'> <p>" +  ContainerBooksNamesPublicados.querySelectorAll("div").length+"</p> <p>Livros Postados</p></div>";
            overlay_ImagemTotaldeLivrosPostados.addEventListener("click",function(){
                document.body.removeChild(this);
                document.body.removeChild(modal_ImagemTotaldeLivrosPostados);
            });

        }
        });
    });
    window.addEventListener("load", function(){
        ImagemVizualização.addEventListener("click",function(){
        var overlay_ImagemVizualização   = document.createElement("div");
        var modal_ImagemVizualização     = document.createElement("div");
        var elemento_ImagemVizualização  = document.createElement("div");
        var index_ImagemVizualização     = document.createElement("div");
        var popup_ImagemVizualização     = document.createElement("div");
        var pages_ImagemVizualização     = document.createElement("div");
        var title_ImagemVizualização     = document.createElement("div");
        var parag_ImagemVizualização     = document.createElement("p");
        var first_ImagemVizualização     = document.createElement("div");
        var segun_ImagemVizualização     = document.createElement("div");
        var image_ImagemVizualização     = document.createElement("img");
        var texto_ImagemVizualização     = document.createElement("p");
        var Elementos_ImagemVizualização = [
            overlay_ImagemVizualização,
            modal_ImagemVizualização,
            elemento_ImagemVizualização,
            index_ImagemVizualização,
            popup_ImagemVizualização,
            pages_ImagemVizualização,
            title_ImagemVizualização,
            parag_ImagemVizualização,
            first_ImagemVizualização,
            segun_ImagemVizualização,
            image_ImagemVizualização,
            texto_ImagemVizualização
        ]; 
        var Estilização_ImagemVizualização = [
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;',
            'position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60%; height: 70%; background: #333; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; border-radius: 10px; z-index: 11;',
            'width: 98%; height: 98%; background: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
            'width: 98%; height: 98%; background: #333; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
            'position: relative; top: 0; left: 0; width: 100%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;',
            'width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;',
            'position: absolute; top: -8px; background: #333; color: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
            'color: white; padding: 0; margin: 0;',
            'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center;',
            'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center;',
            'width: 300px; height: 300px; border-radius: 50%;',
            'color: white; font-size: 30px;'
        ];
        if(Elementos_ImagemVizualização.length === Estilização_ImagemVizualização.length)
        {
            var i = 0;
            while(i < Elementos_ImagemVizualização.length)
            {
                Elementos_ImagemVizualização[i].style.cssText = Estilização_ImagemVizualização[i];
                i++;
            }
            document.body.appendChild(overlay_ImagemVizualização);
            document.body.appendChild(modal_ImagemVizualização);
            modal_ImagemVizualização.appendChild(elemento_ImagemVizualização);
            elemento_ImagemVizualização.appendChild(index_ImagemVizualização);
            index_ImagemVizualização.appendChild(popup_ImagemVizualização);
            popup_ImagemVizualização.appendChild(title_ImagemVizualização);
            popup_ImagemVizualização.appendChild(pages_ImagemVizualização);
            title_ImagemVizualização.appendChild(parag_ImagemVizualização);
            pages_ImagemVizualização.appendChild(first_ImagemVizualização);
            pages_ImagemVizualização.appendChild(first_ImagemVizualização);
            pages_ImagemVizualização.appendChild(segun_ImagemVizualização);
            parag_ImagemVizualização.textContent = "QUANTIDADE DE USUARIOS QUE VISUALIZARAM O SEU PERFIL";
            first_ImagemVizualização.appendChild(image_ImagemVizualização);
            segun_ImagemVizualização.appendChild(texto_ImagemVizualização);
            image_ImagemVizualização.src = this.src;
            texto_ImagemVizualização.innerHTML = "<div style='display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;'> <p>" + ContainerBooksVizualizações.querySelectorAll("div").length+"</p> <p>Usuarios Visualizaram seu Perfil </p></div>";
            overlay_ImagemVizualização.addEventListener("click",function(){
                document.body.removeChild(this);
                document.body.removeChild(modal_ImagemVizualização);
            });
        }
        });
    });
    var Keys_Comenter = Object.values(window.comenterKeys);
    var Values_Comenter = Object.values(window.comenterValues);
    var StrlenValuesComenter = Object.values(window.comenterStrlenValues);
    var StrlenKeysComenter = Object.values(window.comenterStrlenKeys);

    for(let i = 0; i < 1; i++)
    {
        Keys_Comenter = atob(Keys_Comenter);
        Values_Comenter = atob(Values_Comenter);
        StrlenKeysComenter = atob(StrlenKeysComenter);
        StrlenValuesComenter = atob(StrlenValuesComenter);
    }
    var ArrayKeysComenter = Keys_Comenter.split("-");
    var ArrayValuesComenter = Values_Comenter.split("-");
    var ArrayKeysComenterStrlen = StrlenKeysComenter.split("-");
    var ArrayValuesComenterStrlen = StrlenValuesComenter.split("-");
    var KeysComenter = [];
    var ValuesComenter = [];
    var KeysComenterDecodify = [];
    var ValuesComenterDecodify = [];
    ArrayKeysComenter.forEach(function(variavel){KeysComenter.push(String.fromCharCode(Number(atob(variavel))));});
    ArrayValuesComenter.forEach(function(variavel){ValuesComenter.push(String.fromCharCode(Number(atob(variavel))));});
    ArrayKeysComenterStrlen.forEach(function(variavel){KeysComenterDecodify.push(Number(atob(variavel)))});
    ArrayValuesComenterStrlen.forEach(function(variavel){ValuesComenterDecodify.push(Number(atob(variavel)))});
    var StringArrayKeysComenter = KeysComenter.join("");
    var StringArrayValuesComenter = ValuesComenter.join("");
    var IndexKeysComenterString = 0;
    var IndexValuesComenterString = 0;
    var ComenterKeysTotal = [];
    var ComenterValuesTotal = [];
    for (let index = 0; index < KeysComenterDecodify.length; index++) 
    {
        ComenterKeysTotal.push(StringArrayKeysComenter.substring(IndexKeysComenterString , IndexKeysComenterString + KeysComenterDecodify[index]));
        IndexKeysComenterString = IndexKeysComenterString + KeysComenterDecodify[index];
    }
    for (let index = 0; index < ValuesComenterDecodify.length; index++) 
    {
        ComenterValuesTotal.push(StringArrayValuesComenter.substring(IndexValuesComenterString , IndexValuesComenterString + ValuesComenterDecodify[index]));
        IndexValuesComenterString = IndexValuesComenterString + ValuesComenterDecodify[index];
    }
    var ArrayComenter = [];
    var ArrayComenterTemp = {};

    if(ComenterValuesTotal.length === ComenterKeysTotal.length)
    {
        for (let index = 0; index < ComenterValuesTotal.length; index++) {
            ArrayComenterTemp[ComenterKeysTotal[index]] = ComenterValuesTotal[index];
            if(Object.values(ArrayComenterTemp).length === 10)
            {
                var DadosComenterTemp = {};
                DadosComenterTemp[ArrayComenterTemp.titulo_postagem] = ArrayComenterTemp
                ArrayComenter.push(DadosComenterTemp);

                ArrayComenterTemp = {};
            }
        }
    }
    const NewArrayComenterNotReplit = {};
            //Percorre cada item no array original
    for (let i = 0; i < ArrayComenter.length; i++) {
                //Pega o item atual do array
        let item = ArrayComenter[i];

                //Como cada item tem uma única chave, pegamos a chave e o valor desse item
        let key = Object.keys(item)[0];        //Pega a chave do objeto (ex: "Cem Anos de Solidão")
        let value = item[key];        //Pega o valor associado a essa chave

                //Verifica se a chave já existe em NewArrayComenterNotReplit
        if (NewArrayComenterNotReplit[key] === undefined) {
                    //nesse condicional if e else , ele verifica se a chave já existe na nova array , caso exista ele pula , tipo 
                    //no Caso na Array ArrayComenter possui:
                    //a primeira chave é "Os Cem Anos de Solidão" , ou seja [0] -> é undefined pois não existe na nova Array 
                    //a segunda chave é "Os Cem Anos de Solidão" , ou seja [1] -> não é undefined pois a primeira [0] , já foi adicionada
                    //a terceira chave é "Os Cem Anos de Solidão" , ou seja [2] -> não é undefined pois a primeira [0] , ja foi adicionada
                    //...
                    //ao chegar na chave que não é mais "Os Cem Anos de Solidão" , vamos supor que la decima primeira chave 11° , ou seja chave [10] , não seja mais "Os Cem Anos de Solidão"
                    //ele não vai dar undefined , ou seja ele dará que essa nova chave não existe , vamos supor que seja "Orgulho e Preconceito" , tipo
                    //a decima primeira chave é "Orgulho e Preconceito" , ou seja [10] é undefined pois não existe na Nova Array 
                    //a decima segunda chave é "Orgulho e Preconceito" , ou seja [11] -> não é undefined pois a decima primeira [10] , ja foi adicionada
                    //a decima terceira chave é "Orgulho e Preconceito" , ou seja [12] -> não é undefined pois a decima primeira [10] , ja foi adicionada

            NewArrayComenterNotReplit[key] = [];        //Se não existir, cria um array vazio
                    //caso for undefine crie uma nova array , tipo:
                    //a primeira chave é "Os Cem Anos de Solidão" , ou seja [0] -> é undefined pois não existe na nova Array , então crie ["Os Cem Anos de Solidão"]
                    //a segunda chave é "Os Cem Anos de Solidão" , ou seja [1] -> não é undefined pois a primeira [0] , já foi adicionada
                    //a terceira chave é "Os Cem Anos de Solidão" , ou seja [2] -> não é undefined pois a primeira [0] , ja foi adicionada
                    //...
                    //a decima primeira chave é "Orgulho e Preconceito" , ou seja [10] é undefined pois não existe na Nova Array , então crie ["Orgulho e Preconceito"]
                    //a decima segunda chave é "Orgulho e Preconceito" , ou seja [11] -> não é undefined pois a decima primeira [10] , ja foi adicionada
                    //a decima terceira chave é "Orgulho e Preconceito" , ou seja [12] -> não é undefined pois a decima primeira [10] , ja foi adicionada
        }

                //Adiciona o valor ao array da chave correspondente
        NewArrayComenterNotReplit[key].push(value);
    }
    var IconeCurtidas = document.createElement("div");
    var IconeCurtidas_I = document.createElement("i");
    IconeCurtidas_I.classList.add("fa-solid");
    IconeCurtidas_I.classList.add("fa-thumbs-up");
    IconeCurtidas.classList.add("icone-de-curtidas-ativador-popup-dinamico-interative-class");
    IconeCurtidas.id = "icone-de-curtidas-ativador-popup-dinamico-interative-class-id";
    IconeCurtidas.style.cssText = "width: 100px; height: 50px; background: transparent; display: flex; align-items: center; justify-content: center; float: right;";
    IconeCurtidas.appendChild(IconeCurtidas_I);
    IconeCurtidas_I.style.cssText = "font-size: 20px; cursor: pointer;";

    engajamento.appendChild(IconeCurtidas);
    engajamento.appendChild(ContainerScrollEngajamento);
    Object.keys(NewArrayComenterNotReplit).forEach(function(variavel){
        var documentoPostagemComenter =  document.createElement("div");
        var documentoPostagemComenterContainerTotal =  document.createElement("div");
        var documentoPostagemComenterContainerRight =  document.createElement("div");
        var documentoPostagemComenterContainerLeft  =  document.createElement("div");
        var documentoPostagemComenterTitle  =  document.createElement("div");
        var documentoPostagemComenterTitleParagraf  =  document.createElement("p");
        var documentoPostagemComenterRight =  document.createElement("div");
        var documentoPostagemComenterLeft =  document.createElement("div");
        var documentoPostagemComenterImage =  document.createElement("img");
        documentoPostagemComenter.classList.add("documentoPostagemComenter");
        documentoPostagemComenterContainerTotal.classList.add("documentoPostagemComenterContainerTotal");
        documentoPostagemComenterContainerRight.classList.add("documentoPostagemComenterContainerRight");
        documentoPostagemComenterContainerLeft.classList.add("documentoPostagemComenterContainerLeft");
        documentoPostagemComenterTitle.classList.add("documentoPostagemComenterTitle");
        documentoPostagemComenterTitleParagraf.classList.add("documentoPostagemComenterTitleParagraf");
        documentoPostagemComenterRight.classList.add("documentoPostagemComenterRight");
        documentoPostagemComenterLeft.classList.add("documentoPostagemComenterLeft");
        documentoPostagemComenterImage.classList.add("documentoPostagemComenterImage");
        documentoPostagemComenterImage.classList.add("imagem-user-comenter");
        documentoPostagemComenter.style.cssText = "width: 100%; max-width: 90%; padding: 10px; height: 400px; max-height: 400px; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7);  display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column; margin: 20px auto;";
        documentoPostagemComenter.appendChild(documentoPostagemComenterTitle);
        documentoPostagemComenter.appendChild(documentoPostagemComenterContainerTotal);
        documentoPostagemComenterContainerTotal.style.cssText = "width: 100%; height: 80%; display: flex; align-items: center; justify-content: space-between; flex-wrap; nowrap; flex-direction: row;";
        documentoPostagemComenterContainerTotal.appendChild(documentoPostagemComenterContainerLeft);
        documentoPostagemComenterContainerLeft.style.cssText = "width: 50%; height: 100%;";
        documentoPostagemComenterContainerLeft.appendChild(documentoPostagemComenterImage);
        documentoPostagemComenterImage.style.cssText = "width: 100%; height: 100%;";
        documentoPostagemComenterContainerTotal.appendChild(documentoPostagemComenterContainerRight);
        documentoPostagemComenterContainerRight.style.cssText = "width: 50%; height: 100%; max-height: 100%; overflow-y: auto; overflow-x: hidden;";
                //title
        documentoPostagemComenterTitle.appendChild(documentoPostagemComenterLeft);
        documentoPostagemComenterTitle.appendChild(documentoPostagemComenterTitleParagraf);
        documentoPostagemComenterTitle.appendChild(documentoPostagemComenterRight);
                //end title 
        documentoPostagemComenterTitleParagraf.textContent = variavel;
        documentoPostagemComenterLeft.style.cssText = "width: 40%; height: calc(10px - 8px); background: white;";
        documentoPostagemComenterRight.style.cssText = "width: 40%; height: calc(10px - 8px); background: white;";
        documentoPostagemComenterTitle.style.cssText = "width: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;";

        Object.values(NewArrayComenterNotReplit[variavel]).forEach(function(dados){
            var documentoComenters       = document.createElement("div");
            var documentoComentersTitle  = document.createElement("div");
            var documentoComentersImage  = document.createElement("img");
            var documentoComentersTexto  = document.createElement("div");
            var documentoComentersDatas  = document.createElement("div");
            var documentoComentersHoras  = document.createElement("div");
            var documentoComentersTop    = document.createElement("div");
            var documentoComentersBottom = document.createElement("div");
            documentoComentersTitle.innerHTML = "<b>"+dados.nome+"</b> comentou em <p>"+dados.titulo_postagem+"</p>";
            documentoComentersImage.src = "../../imagens-de-perfil-de-usuarios/"+dados.Perfil;
            documentoComentersImage.alt = "Usuario: "+dados.nome;
            documentoComentersImage.title = "Usuario: "+dados.nome;
            documentoComentersTitle.style.cssText = "width: 80%; font-size: 10px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;";
            documentoComentersImage.style.cssText = "width: 50px; height: 50px; border-radius: 50%; cursor: pointer;";
            documentoComenters.style.cssText = "width: 90%; height: 130px; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7); padding: 10px; margin: 20px auto;";
            documentoComentersTexto.style.cssText = "width: 100%; max-width: 100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; cursor: pointer;";
            documentoComentersTexto.innerHTML = dados.comentario;
            documentoComentersTop.style.cssText = "width: 100%; height: 60px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;";
            documentoComentersBottom.style.cssText = "width: 100%; height: 60px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; font-size: 10px;";
            documentoPostagemComenterContainerRight.appendChild(documentoComenters);
            documentoComentersDatas.innerHTML = dados.data;
            documentoComentersHoras.innerHTML = dados.hora;
            documentoComentersTop.appendChild(documentoComentersImage);
            documentoComentersTop.appendChild(documentoComentersTitle);
            documentoComentersBottom.appendChild(documentoComentersDatas);
            documentoComentersBottom.appendChild(documentoComentersHoras);
            documentoComenters.appendChild(documentoComentersTop);
            documentoComenters.appendChild(documentoComentersTexto);
            documentoComenters.appendChild(documentoComentersBottom);
            documentoComenters.classList.add("documentoComenters");
            documentoComentersTitle.classList.add("documentoComentersTitle");
            documentoComentersImage.classList.add("documentoComentersImage");
            documentoComentersTexto.classList.add("documentoComentersTexto");
            documentoComentersDatas.classList.add("documentoComentersDatas");
            documentoComentersHoras.classList.add("documentoComentersHoras");
            documentoComentersTop.classList.add("documentoComentersTop");
            documentoComentersBottom.classList.add("documentoComentersBottom");
            documentoPostagemComenterImage.src = "../../publicacao/"+dados.imagem_postagem;
            documentoComentersTexto.classList.add("comentario-usuario-na-postagem");

        });
        ContainerScrollEngajamento.appendChild(documentoPostagemComenter);
    });
    window.addEventListener("load",function(){
        document.querySelectorAll(".comentario-usuario-na-postagem").forEach(function(variavel){
            variavel.addEventListener("click", function(){
                var OverLay_Comenters                = document.createElement("div");
                var Modal_Comenters                  = document.createElement("div");
                var Index_Comenters                  = document.createElement("div");
                var Element_Comenters                = document.createElement("div");
                var Background_Comenters             = document.createElement("div");
                var PopUp_Comenters                  = document.createElement("div");
                var PopUpTitle_Comenters             = document.createElement("div");
                var PopUpContent_Comenters           = document.createElement("div");
                var PopUpImagens_Comenters           = document.createElement("img");
                var PopUpComenter_Comenters          = document.createElement("div");
                var PopUpInformações_Comenters       = document.createElement("div");
                var PopUpInformaçõesData_Comenters   = document.createElement("div");
                var PopUpInformaçõesHora_Comenters   = document.createElement("div");
                var ElementosPopUp_Comenters = [
                    OverLay_Comenters,
                    Modal_Comenters,
                    Index_Comenters,
                    Element_Comenters,
                    Background_Comenters,
                    PopUp_Comenters,
                    PopUpTitle_Comenters,
                    PopUpContent_Comenters,
                    PopUpImagens_Comenters,
                    PopUpComenter_Comenters,
                    PopUpInformações_Comenters,
                    PopUpInformaçõesData_Comenters,
                    PopUpInformaçõesHora_Comenters
                ];
                var EstilizaçãoPopUp_Comenters = [
                    'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;', //OverLay_Comenters
                    'position: fixed; top: 50%; left: 50%; width: 60%; height: 70%; transform: translate(-50%,-50%); display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: #333; border-radius: 10px; z-index: 11;',//Modal_Comenters
                    'width: 95%; height: 95%; background: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',//Index_Comenters
                    'width: 98%; height: 98%; background: #333; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',//Element_Comenters
                    'width: 100%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',//Background_Comenters
                    'position: relative; top: 0; left: 0; width: 100%; height: 100%; background: transparent; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;',//PopUp_Comenters
                    'position: absolute; top: -12px; background: #333; color: white; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;',//PopUpTitle_Comenters
                    'width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;',//PopUpContent_Comenters
                    'width: 300px; height: 300px; border-radius: 50%; margin: 20px;',//PopUpImagens_Comenters
                    'width: 50%; height: 100%; max-height: 100%; overflow-y: auto; overflow-x: hidden; display: flex; align-items: center;',//PopUpComenter_Comenters
                    'width: 100%; height: 200px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;',//PopUpInformações_Comenters
                    'width: 50%; height: 100%; color: white; text-align: center;',//PopUpInformaçõesData_Comenters
                    'width: 50%; height: 100%; color: white; text-align: center;'//PopUpInformaçõesHora_Comenters
                ];
                if(ElementosPopUp_Comenters.length === EstilizaçãoPopUp_Comenters.length)
                {
                    for (let index = 0; index < ElementosPopUp_Comenters.length; index++) {
                        ElementosPopUp_Comenters[index].style.cssText = EstilizaçãoPopUp_Comenters[index];
                    }
                    document.body.appendChild(OverLay_Comenters);
                    Modal_Comenters.appendChild(Index_Comenters);
                    Index_Comenters.appendChild(Element_Comenters);
                    Element_Comenters.appendChild(Background_Comenters);
                    Background_Comenters.appendChild(PopUp_Comenters);
                    PopUp_Comenters.appendChild(PopUpTitle_Comenters);
                    PopUp_Comenters.appendChild(PopUpContent_Comenters);
                    PopUpContent_Comenters.appendChild(PopUpImagens_Comenters);
                    PopUpContent_Comenters.appendChild(PopUpComenter_Comenters);
                    PopUp_Comenters.appendChild(PopUpInformações_Comenters);
                    PopUpInformações_Comenters.appendChild(PopUpInformaçõesData_Comenters);
                    PopUpInformações_Comenters.appendChild(PopUpInformaçõesHora_Comenters);
                    document.body.appendChild(Modal_Comenters);
                    PopUpTitle_Comenters.textContent = "Comentario de: "+variavel.closest(".documentoComenters").querySelector(".documentoComentersTop").querySelector(".documentoComentersTitle").querySelector("b").textContent;
                    PopUpImagens_Comenters.src = variavel.closest(".documentoComenters").querySelector(".documentoComentersTop").querySelector(".documentoComentersImage").src;
                    PopUpComenter_Comenters.textContent = variavel.closest(".documentoComenters").querySelector(".documentoComentersTexto").textContent;
                    PopUpInformaçõesData_Comenters.textContent = "Data: "+variavel.closest(".documentoComenters").querySelector(".documentoComentersBottom").querySelector(".documentoComentersDatas").textContent;
                    PopUpInformaçõesHora_Comenters.textContent = "Hora: "+variavel.closest(".documentoComenters").querySelector(".documentoComentersBottom").querySelector(".documentoComentersHoras").textContent;
                }
                OverLay_Comenters.addEventListener("click", function(){document.body.removeChild(this); document.body.removeChild(Modal_Comenters);});
            });

        });
    });
    window.addEventListener("load", function(){
        var styleRollScrollEstilização = this.document.createElement("style");
        styleRollScrollEstilização.textContent = "<style>"+
            ".documentoPostagemComenterContainerRight::-webkit-scrollbar{background: transparent; width: 5px; color: white;}"+
            ".documentoPostagemComenterContainerRight::-webkit-scrollbar-thumb{background: white; width: 5px; border-radius: 10px; color: white;}"+
            ".Y2xhc3NlLTc::-webkit-scrollbar{background: transparent; width: 5px; color: white;}"+
            ".Y2xhc3NlLTc::-webkit-scrollbar-thumb{background: white; width: 5px; border-radius: 10px; color: white;}"
        +"</style>";
        this.document.head.appendChild(styleRollScrollEstilização);
    });
    // Curtidas 
    var CurtidasKeys = Object.values(window.curtidas1);         var DecodifyKeys = atob(CurtidasKeys);                  var ArrayCurtidasKeys  = DecodifyKeys.split("-");
    var CurtudasValues = Object.values(window.curtidas2);       var DecodifyValues = atob(CurtudasValues);              var ArrayCurtidasValues = DecodifyValues.split("-");
    var CurtidasKeysStrlen = Object.values(window.curtidas3);   var DecodifyKeysStrlen = atob(CurtidasKeysStrlen);      var ArrayCurtidasKeysStrlen = DecodifyKeysStrlen.split("-");
    var CurtidasValuesStrlen = Object.values(window.curtidas4); var DecodifyValuesStrlen = atob(CurtidasValuesStrlen);  var ArrayCurtidasValuesStrlen = DecodifyValuesStrlen.split("-");
    var ArrayKeysCurtidas = [];
    var ArrayValuesCurtidas = [];
    var ArrayKeysStrlenCurtidas = [];
    var ArrayValuesStrlenCurtidas = [];
    ArrayCurtidasKeys.forEach(function(variavel){
        ArrayKeysCurtidas.push(String.fromCharCode(Number(atob(variavel))));
    });
    var StringCurtidasKeys = ArrayKeysCurtidas.join("");
    ArrayCurtidasValues.forEach(function(variavel){
        ArrayValuesCurtidas.push(String.fromCharCode(Number(atob(variavel))));
    });
    var StringCurtidasValues = ArrayValuesCurtidas.join("");
    ArrayCurtidasKeysStrlen.forEach(function(variavel){
        ArrayKeysStrlenCurtidas.push(variavel.charCodeAt(0) - 64);
    });
    ArrayCurtidasValuesStrlen.forEach(function(variavel){
    ArrayValuesStrlenCurtidas.push(variavel.charCodeAt(0) - 64); 
    });

    var IndexCurtidasKeys   = 0;
    var IndexCurtidasValues = 0;

    var ValuesCurtidas = [];
    var KeysCurtidas = [];
    for (let index = 0; index < ArrayKeysStrlenCurtidas.length; index++) {
        KeysCurtidas.push(StringCurtidasKeys.substring(IndexCurtidasKeys , IndexCurtidasKeys + ArrayKeysStrlenCurtidas[index]));
        IndexCurtidasKeys = IndexCurtidasKeys + ArrayKeysStrlenCurtidas[index];
    }
    for (let index = 0; index < ArrayValuesStrlenCurtidas.length; index++) {
    ValuesCurtidas.push(StringCurtidasValues.substring(IndexCurtidasValues , IndexCurtidasValues + ArrayValuesStrlenCurtidas[index]));
    IndexCurtidasValues = IndexCurtidasValues + ArrayValuesStrlenCurtidas[index]; 
    }
    if(KeysCurtidas.length === ValuesCurtidas.length)
    {
        var ArrayFinalCurtidas1 = [];
        var ArrayTempCurtidas = {};
        for (let index = 0; index < KeysCurtidas.length; index++) {
            ArrayTempCurtidas[KeysCurtidas[index]] = ValuesCurtidas[index];
            if(Object.values(ArrayTempCurtidas).length === 9)
            {
                ArrayFinalCurtidas1.push(
                    {
                        [ArrayTempCurtidas.titulo_postagem]: ArrayTempCurtidas
                    });
                ArrayTempCurtidas = {};
            }
        }
        const ArrayFinalCurtidas = {};
        for(let i = 0; i < ArrayFinalCurtidas1.length; i++)
        {
            // elemento atual
            var item = ArrayFinalCurtidas1[i];
            // tira da array
            // se var key = Object.keys(item)[0];
            // o resultado viria 
            // ['Os Cem Anos de Solidão']
            // ['Orgulho e Preconceito']
            // ['O Morro dos Ventos Uivantes']
            var key = Object.keys(item)[0];
            // mas se for , var key = Object.keys(item)[0];
            // resultado viria
            // Os Cem Anos de Solidão
            // Orgulho e Preconceito
            // O Morro dos Ventos Uivantes
            var value = item[key];
            // verificação
            if(ArrayFinalCurtidas[key] === undefined)
            {
                ArrayFinalCurtidas[key] = [];
            }
            ArrayFinalCurtidas[key].push(value);
        }
        IconeCurtidas_I.addEventListener("click",function(){
            var elementosCurtidasPreDados = ['overlay','modal','element','index','conjunto','title'];
            var ElementosEstilizarCurtidas = 
            [
                // overlay
                'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 10; cursor: pointer;'
                // modal
                ,'position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60%; height: 70%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; background: #333; border-radius: 10px; z-index: 11;'
                // element
                ,'width: 95%; height: 95%; background: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;'
                // index
                ,'position: relative; top: 0; left: 0; width: 98%; height: 98%; background: #333; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: column;'
                // conjunto
                ,'width: 100%; height: 100%; max-width: 100%; max-height: 100%; overflow-y: auto; overflow-x: hidden;'
                // title
                ,'position: absolute; top: -10px; background: #333; color: white; z-index: 4;'
            ];
            var ElementosCurtidas = [];
            for (let index = 0; index < elementosCurtidasPreDados.length; index++){ElementosCurtidas.push(document.createElement("div"));}
            for (let index = 0; index < ElementosCurtidas.length; index++){ElementosCurtidas[index].classList.add(elementosCurtidasPreDados[index]+"-curtidas"); ElementosCurtidas[index].style.cssText = ElementosEstilizarCurtidas[index];}
            for (let index = 0; index < ElementosCurtidas.length; index++)
            {
                var item = ElementosCurtidas[index]; // item analisado

                if(item.classList.contains("overlay-curtidas"))
                {
                    document.body.appendChild(item);
                    item.addEventListener("click",function(){
                        document.body.removeChild(this);
                        document.body.removeChild(ElementosCurtidas[index + 1]);
                    });
                }

                if(item.classList.contains("modal-curtidas"))
                {
                    var modal = item;
                    document.body.appendChild(modal);
                    var element = ElementosCurtidas[index + 1];
                    modal.appendChild(element);
                    var indexP = ElementosCurtidas[index + 2];
                    element.appendChild(indexP);
                    var conjunto = ElementosCurtidas[index + 3];
                    indexP.appendChild(conjunto);
                    var title = ElementosCurtidas[index + 4];
                    indexP.appendChild(title);
                    Object.keys(ArrayFinalCurtidas).forEach(function(variavel){
                        var documentoPopUp = document.createElement("div");
                        documentoPopUp.classList.add("elementos-pop-up-curtidas");
                        documentoPopUp.id = "elementos-popup-curtidas-"+variavel;
                        documentoPopUp.style.cssText = "position: relative; top: 0; left: 0; width: 90%; height: 400px; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7); display: flex; align-items: center; flex-wrap: nowrap; flex-direction: column; margin: 20px auto; overflow: hidden;";
                        var documentoPopUptitle = document.createElement("div");
                        documentoPopUptitle.style.cssText = "position: absolute; top: 0; width: 100%; height: 10%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; z-index: 2;";
                        var documentoBarraWhite1 = document.createElement("div"); 
                        var documentoNameMiddle  = document.createElement("div"); 
                        var documentoBarraWhite2 = document.createElement("div"); 

                        documentoBarraWhite1.style.cssText = "width: 30%; height: 2px; background: white; border-radius: 10px;";
                        documentoBarraWhite2.style.cssText = "width: 30%; height: 2px; background: white; border-radius: 10px;";
                        documentoNameMiddle.style.cssText =  "color: white; white-space: nowrap;";
                        
                        documentoPopUptitle.appendChild(documentoBarraWhite1);
                        documentoPopUptitle.appendChild(documentoNameMiddle);
                        documentoPopUptitle.appendChild(documentoBarraWhite2);

                        documentoPopUp.appendChild(documentoPopUptitle);
                        documentoNameMiddle.textContent = variavel;
                        var imagens  = [];
                        var likes = [];
                        var deslikes = [];
                        var contentLikes = document.createElement("div");
                        var contentDeslikes = document.createElement("div");
                        var Clicks = 0;

                        ArrayFinalCurtidas[variavel].forEach(function(dado){
                            if(!imagens.includes(dado.imagem_postagem))
                            {
                                var documentoT3 = document.createElement("img");
                                imagens.push(dado.imagem_postagem);
                                documentoT3.src = "../../publicacao/"+imagens.toString();
                                documentoT3.style.cssText = "position: absolute; top: -50px; left: -50px; width: 400px; height: 400px; border-radius: 50%; filter:brightness(0.5); transition: 1s; cursor: pointer; z-index: 1;";
                                documentoT3.addEventListener("mouseenter", function(){this.style.transition = "1s"; this.style.filter = "brightness(1)";});
                                documentoT3.addEventListener("mouseleave", function(){this.style.transition = "1s"; this.style.filter = "brightness(0.5)"});
                                documentoT3.addEventListener("click", function(){
                                    Clicks++ 
                                    if(Clicks === 1)
                                    {
                                        this.style.transition = "1s";
                                        this.style.width = "100%";
                                        this.style.height = "100%";
                                        this.style.top = "0";
                                        this.style.left = "0";
                                        this.style.borderRadius = "0";
                                    }
                                    if(Clicks === 2)
                                    {
                                        this.style.transition = "1s";
                                        this.style.width = "400px";
                                        this.style.height = "400px";
                                        this.style.top = "-50px";
                                        this.style.left = "-50px";
                                        this.style.borderRadius = "50%";
                                        
                                        Clicks = 0;
                                    }
                                    
                                });
                                documentoPopUp.appendChild(documentoT3);
                            }
                            if(dado.curtida === 'like')
                            {
                                likes.push(dado.curtida);
                            }
                            else
                            if(dado.curtida === 'deslike')
                            {
                                deslikes.push(dado.curtida);
                            }
                        });
                        contentLikes.innerHTML = "<span style='display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; width: 30%; margin: 0 auto;'><p><i class='fa-solid fa-thumbs-up'></i></p><p style='padding: 0; margin: 0;'>"+likes.length+"</p>";
                        contentDeslikes.innerHTML = "<span style='display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; width: 30%; margin: 0 auto;'><p style='padding: 0; margin: 0;'><i class='fa-solid fa-thumbs-down'></i></p><p style='padding: 0; margin: 0;'>"+deslikes.length+"</p>";
                        var contentCurtidas = document.createElement("div");
                        contentCurtidas.appendChild(contentLikes);
                        contentCurtidas.appendChild(contentDeslikes);
                        contentCurtidas.style.cssText = "position: absolute; top: 40%; left: 20%; width: 100%; height: 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;";
                        contentLikes.style.cssText =    "width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; text-align: center;";
                        contentDeslikes.style.cssText = "width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; text-align: center;";
                        documentoPopUp.appendChild(contentCurtidas);
                        conjunto.appendChild(documentoPopUp);
                    });
                    title.textContent = "Curtidas - Likes & Deslikes";
                }
            }

        });

    }
    // popularidade

    // pega o valor
    var KeysGraficoPopularidade = window.publicidades.keys;
    // decodifica a string (implode(array) - PHP)
    var Decode1 = atob(KeysGraficoPopularidade);
    // transforma a string em array com split("+-")
    var ArraysKeysGraficoPopularidade = Decode1.split("+-");
    // cria uma nova Array
    var ArraysElementosKeysGraficoPopularidade = [];
    // com um laço de repetição percorremos a Array que antes era String
    for (let index = 0; index < ArraysKeysGraficoPopularidade.length; index++) {
        // Inserindo Elementos na Array , transformando em Letras (String.fromCharCode()) , os números decodificados atob()
        ArraysElementosKeysGraficoPopularidade.push(String.fromCharCode(atob(ArraysKeysGraficoPopularidade[index])));
    }
    // transforma tudo em string e depois transforma em array com o separador em comum ("--")
    // join("") -> junta tudo (transforma string)
    // split("-") -> separa atras de um separador em comum (no caso é "-")
    var DadosKeysGraficoPopularidade =  ArraysElementosKeysGraficoPopularidade.join("").split("+-");
    // pega o valor
    var ValuesGraficoPopularidade = window.publicidades.values;
    // decodifica a string (implode(array) - PHP)
    var Decode1 = atob(ValuesGraficoPopularidade);
    // transforma a string em array com split("+-")
    var ArraysValuesGraficoPopularidade = Decode1.split("+-");
    // cria uma nova Array
    var ArraysElementosValuesGraficoPopularidade = [];
    // com um laço de repetição percorremos a Array que antes era String
    for (let index = 0; index < ArraysValuesGraficoPopularidade.length; index++) {
        // Inserindo Elementos na Array , transformando em Letras (String.fromCharCode()) , os números decodificados atob()
        ArraysElementosValuesGraficoPopularidade.push(String.fromCharCode(atob(ArraysValuesGraficoPopularidade[index])));
    }
    // transforma tudo em string e depois transforma em array com o separador em comum ("--")
    // join("") -> junta tudo (transforma string)
    // split("-") -> separa atras de um separador em comum (no caso é "-")
    var DadosValuesGraficoPopularidade =  ArraysElementosValuesGraficoPopularidade.join("").split("+-");
    var ColumnDadosGraficoPopularidade = [];
    var ColumnDadosGraficoPopularidadeTemp1 = {};
    var ColumnDadosGraficoPopularidadeTemp2 = {};
    for (let index = 0; index < DadosValuesGraficoPopularidade.length; index++) {
        var Keys = DadosKeysGraficoPopularidade[index];
        var value = DadosValuesGraficoPopularidade[index];
        ColumnDadosGraficoPopularidadeTemp1[Keys] = value;
        if(Object.values(ColumnDadosGraficoPopularidadeTemp1).length === 9)
        {
            ColumnDadosGraficoPopularidadeTemp2[ColumnDadosGraficoPopularidadeTemp1.titulo_postagem] = ColumnDadosGraficoPopularidadeTemp1;
            ColumnDadosGraficoPopularidade.push(ColumnDadosGraficoPopularidadeTemp2);

            ColumnDadosGraficoPopularidadeTemp2 = {}
            ColumnDadosGraficoPopularidadeTemp1 = {};
        } 
    }
    // console.log(ColumnDadosGraficoPopularidade);
    const DadosColumnGraficosPopularidade = {};

    for (let index = 0; index < ColumnDadosGraficoPopularidade.length; index++) {
        var item = ColumnDadosGraficoPopularidade[index];

        var key = Object.keys(item)[0];
        var value = item[key];

        if(DadosColumnGraficosPopularidade[key] === undefined)
        {
            DadosColumnGraficosPopularidade[key] = [];
        }

        DadosColumnGraficosPopularidade[key].push(value);
    }
    var HyperPostagem = {};
    Object.keys(DadosColumnGraficosPopularidade).forEach(function(variavel){
        var HyperNumber = [];
        DadosColumnGraficosPopularidade[variavel].forEach(function(dados){
            HyperNumber.push(dados.hypar_postagem);
        });
        HyperPostagem[variavel] = HyperNumber.length;
    });

    // ordenando de maneira decrescente
    var OrdenandoHyperPostagem = Object.keys(HyperPostagem).sort((a , b) => HyperPostagem[b] - HyperPostagem[a]);
    // HyperPostagem = {
    // 1984: 6
    // A Revolução dos Bichos: 2
    // Dom Quixote: 5
    // Grande Sertão: 
    // Veredas: 4
    // Jane Eyre: 10
    // Memórias Póstumas de Brás Cubas: 7
    // O Apanhador no Campo de Centeio: 9
    // O Conde de Monte Cristo: 8
    // O Morro dos Ventos Uivantes: 1
    // O Sol é Para Todos: 3
    // Orgulho e Preconceito: 12
    // Os Cem Anos de Solidão: 12
    //}
    //
    // Object.keys(HyperPostagem) 
    //
    // "1984"
    // "Os Cem Anos de Solidão"
    // "Orgulho e Preconceito"
    // "O Morro dos Ventos Uivantes"
    // "A Revolução dos Bichos"
    // "O Sol é Para Todos"
    // "Grande Sertão: Veredas"
    // "Dom Quixote"
    // "Memórias Póstumas de Brás Cubas"
    // "O Conde de Monte Cristo"
    // "O Apanhador no Campo de Centeio"
    // "Jane Eyre"
    // 
    // .sort((a , b) => HyperPostagem[b] - HyperPostagem[a]);
    // 
    // O "a" e o "b" do sort são representação de cada chave mencionada acima 
    // ao adicionarmos HyperPostagem[b] e HyperPostagem[a] , pegamos os valores correspondentes a essa chave na array 
    // e assim fazendo o calculo para posicionarmos em ordem decrescente
    // 
    // Nota: .sort((a , b) => a - b) = crescente
    // Nota: .sort((a , b) => b - a) = decrescente
    OrdenandoHyperPostagem.forEach(function(divs){
        var divsHyperPostagem = document.createElement("div");
        var divsBarraWhiteright = document.createElement("div");
        var divsBarraWhiteleft = document.createElement("div");
        var pHyperPostagem = document.createElement("p");
        var divstop = document.createElement("div");
        divstop.appendChild(divsBarraWhiteright);
        divstop.appendChild(pHyperPostagem);
        pHyperPostagem.textContent = divs;
        divstop.appendChild(divsBarraWhiteleft)
        divstop.style.position = "absolute";
        divstop.style.top = "0";
        divstop.style.width = "100%";
        divstop.style.display = "flex";
        divstop.style.alignItems = "center";
        divstop.style.justifyContent = "space-between";
        divstop.style.flexWrap = "nowrap";
        divstop.style.flexDirection = "row";
        divstop.style.whiteSpace = "nowrap";
        divstop.style.zIndex = "1";
        divstop.style.background = "#333";
        divsBarraWhiteright.style.width = "40%";
        divsBarraWhiteleft.style.width = "40%";
        divsBarraWhiteright.style.height = "5px";
        divsBarraWhiteleft.style.height = "5px";
        divsBarraWhiteright.style.background = "white";
        divsBarraWhiteleft.style.background = "white";
        divsBarraWhiteright.style.borderRadius = "10px";
        divsBarraWhiteleft.style.borderRadius = "10px";
        divsHyperPostagem.style.position = "relative";
        divsHyperPostagem.style.top = "0";
        divsHyperPostagem.style.left = "0";
        divsHyperPostagem.style.width = "100%";
        divsHyperPostagem.style.height = "500px";
        divsHyperPostagem.style.overflow = "hidden";
        divsHyperPostagem.style.maxHeight = "500px";
        divsHyperPostagem.style.maxWidth = "100%";
        popularidade.appendChild(divsHyperPostagem);
        divsHyperPostagem.appendChild(divstop);
        var ImagemHypada = document.createElement("img");
        divsHyperPostagem.appendChild(ImagemHypada);
        var DadosInformações = [];
        DadosColumnGraficosPopularidade[divs].forEach(function(dados){
            if(!DadosInformações.includes(dados.imagem_postagem))
            {
                DadosInformações.push(dados.imagem_postagem);
            }
        });
        ImagemHypada.src = "../../publicacao/"+DadosInformações.toString();
        ImagemHypada.style.cssText = "position: absolute; top: -60px; left: -100px; width: 700px; height: 700px; border-radius: 50%;";
        var FiveStarts = document.createElement("img");
        FiveStarts.src = "../../img/Colaborador/five-stars-Photoroom.png";
        var containerImagemFive = document.createElement("div");
        FiveStarts.style.cssText = "width: 300px;"
        containerImagemFive.appendChild(FiveStarts);
        containerImagemFive.style.cssText = "position: absolute; top: 140px; left: 700px; width: 300px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;";
        var TextoHyper = document.createElement("span");
        containerImagemFive.appendChild(TextoHyper);
        divsHyperPostagem.appendChild(containerImagemFive);
        if(HyperPostagem[divs] === 1)
        {
            TextoHyper.textContent = HyperPostagem[divs]+" de Hyper";
        }
        else
        if(HyperPostagem[divs] > 1)
        {
            TextoHyper.textContent = HyperPostagem[divs]+" de Hypers";
        }
    });
}
else
{
    var div7 = document.createElement("div");
    div7.style.width = "100%";
    div7.style.height = "100%";
    div7.style.display = "flex";
    div7.style.alignItems = "center";
    div7.style.justifyContent = "center";
    div7.style.flexWrap = "nowrap";
    div7.style.flexDirection = "row";
    div7.innerHTML = "<p>Você Não Possui Historicos de Publicações !!!</p>";
    var Container7 = document.getElementById("section-7-dashboard").append(div7);
}
// Notificação 
if(window.notificacaoKeys && window.notificacaoValues)
{
    var Notificacao = document.createElement("div");
    var ArrayNotificacao = atob(Object.values(window.notificacaoKeys)).split('+-');
    var ArrayNotificacaoString = [];
    ArrayNotificacao.forEach(function(keys){ArrayNotificacaoString.push(String.fromCharCode(atob(keys)));});
    var StringNotificacao = ArrayNotificacaoString.join("");
    var ArrayFinalNotificacaoKeys = StringNotificacao.split("+-");

    var NotificacaoDados = atob(Object.values(window.notificacaoValues)).split('+-');
    var NotificacaoDadosArrayString = [];
    NotificacaoDados.forEach(function(values){NotificacaoDadosArrayString.push(String.fromCharCode(atob(values)));});
    var StringNotificacaoDados = NotificacaoDadosArrayString.join("");
    var ArrayFinalNotificacaoV = StringNotificacaoDados.split('+-');

    var ArrayAssociativaNotificacao = [];
    var ArrayAssociativaNotificacaoTemp = {};

    if(ArrayFinalNotificacaoKeys.length == ArrayFinalNotificacaoV.length){
        for (let index = 0; index < ArrayFinalNotificacaoKeys.length; index++) {
            ArrayAssociativaNotificacaoTemp[ArrayFinalNotificacaoKeys[index]] = ArrayFinalNotificacaoV[index];

            if(Object.values(ArrayAssociativaNotificacaoTemp).length === 7)
            {
                ArrayAssociativaNotificacao.push(ArrayAssociativaNotificacaoTemp);

                ArrayAssociativaNotificacaoTemp = {};
            }
        }
    }
    Object.values(ArrayAssociativaNotificacao).forEach(function(variavel){
        var documentoNotificacao = document.createElement("div");
        var titledocumentoNotificacao = document.createElement("div");
        var ptitledocumentoNotificacao = document.createElement("p");
        var headDocumento = document.createElement("div");
        var textoDocumento = document.createElement("div");
        var rodapeDocumento = document.createElement("div");
        var DataDocumento = document.createElement("span");
        var HoraDocumento = document.createElement("span");
        headDocumento.appendChild(titledocumentoNotificacao);
        headDocumento.appendChild(ptitledocumentoNotificacao);
        textoDocumento.textContent = variavel.notificacao;
        textoDocumento.style.cssText = "width: 100%; height: 130px; max-height: 130px;";
        rodapeDocumento.appendChild(DataDocumento);
        rodapeDocumento.appendChild(HoraDocumento);
        DataDocumento.textContent = "Data de Recebimento: "+variavel.data;
        HoraDocumento.textContent = "Hora de Recebimento: "+variavel.hora;
        documentoNotificacao.appendChild(headDocumento);
        documentoNotificacao.appendChild(textoDocumento);
        documentoNotificacao.appendChild(rodapeDocumento);
        documentoNotificacao.style.cssText = "position: relative; top: 0; left: 0; width: 90%; height: 200px; box-shadow: 2px 5px 5px 10px rgba(0,0,0,0.7); margin: 20px auto; padding: 10px; border-radius: 10px;";
        headDocumento.style.cssText = "width: 100%; height: 20px; display: flex; align-items: center; justify-content: flex-start; flex-wrap: nowrap; flex-direction: row; padding: 10px; ";
        titledocumentoNotificacao.style.cssText = "width: 200px; height: 5px; background: white; border-radius: 10px; margin-right: 10px;";
        ptitledocumentoNotificacao.textContent = variavel.assunto+document.querySelector(".etinerario-name-colaborador").textContent;
        rodapeDocumento.style.cssText = "position: absolute; bottom: 0; right: 0; width: 100%; height: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row; padding: 10px;";
        DataDocumento.style.cssText = "width: 50%; text-align: center; border-right: 2px groove white;";
        HoraDocumento.style.cssText = "width: 50%; text-align: center; border-left: 2px groove white;";
        Notificacao.appendChild(documentoNotificacao);
        documentoNotificacao.classList.add("documento-notificacao");
        headDocumento.classList.add("head-da-notificacao");
        ptitledocumentoNotificacao.classList.add("title-notificacao");
        textoDocumento.classList.add("texto-da-notificacao");
        documentoNotificacao.classList.add("notificação-não-vista");
    });
    document.getElementById("section-11-dashboard").appendChild(Notificacao);
    Notificacao.style.cssText = "width: 100%; height: 300px; max-height: 300px; overflow-y: auto; overflow-x: hidden;";
    Notificacao.querySelectorAll(".texto-da-notificacao").forEach(function(Documento){
        if(Documento.offsetHeight < Documento.scrollHeight)
        {
            var Texto = Documento.textContent;
           // Explicação Matematica para Redução de Tempo de Tela de Carregamento
           // primeiro: 
           // valor total dos pixels que englobam as caracteres 
           var TamanhoDoConteudoDoElementoEmPixels = Documento.scrollHeight;
           // valor total do elemento que engloba o elemento em que estão as caracteres
           var TamanhoDoElementoEmPixels = Documento.offsetHeight;
           // a ideia é reduzir o texto (letras) ao tamanho do offsetHeight para que ele não consuma nenhuma letra
           // quantas letras temos ?
           var QuantidadeTotalDeLetras = Documento.textContent.length;
           // quantidade de letras que cabem no offsetHeight: 
           // chamaremos de X , então , reformulando:
           // -> .scrollHeight (pixels) ==== .textContent.length (letras)
           // -> .offsetHeight (pixels) ==== X
           // aplicando regra de 3
           // .scrollHeight * X ==== .offsetHeight * .textContent.length
           // passando o X dividindo
           // X = (.offsetHeight * .textContent.length) / .scrollHeight
           var X = ((TamanhoDoElementoEmPixels * QuantidadeTotalDeLetras)/TamanhoDoConteudoDoElementoEmPixels);
           // Math.round -> arredonda o valor numerico
           var Arredondamento = Math.round(X);
           // para alcançar esse valor automaticamente precisamos fazer outro calculo
           // vou tirar do valor de letras total o valor do arredondamento , tendo em mãos o valor que devo retirar do valor total para ter o arredondamento
           // supondo que
           // o valor de caracteres sejam: 1000 caracteres (letras)
           // o valor que cabem no elemento (Arredondamento) é de 600
           // tirando 600 de 1000 , teremos 400 , 400 é o valor que devemos tirar de 1000 para alcançarmos o valor cabivel a ter 600 caracteres 
           var ValorASerRetirado = (QuantidadeTotalDeLetras - Arredondamento);
           var LetrasQueCabemNoTamanhoDoElemento = (QuantidadeTotalDeLetras - ValorASerRetirado);
           Documento.textContent = Documento.textContent.slice(0 , Number(LetrasQueCabemNoTamanhoDoElemento));
    
           // Adicionando o Ler Mais...
           // Espaço -> 1 
           // Letra (L) -> 1
           // Letra (e) -> 1
           // Letra (r) -> 1
           // Espaço -> 1
           // Letra (M) -> 1
           // Letra (a) -> 1
           // Letra (i) -> 1
           // Letra (s) -> 1
           // Ponto (.) -> 1
           // Ponto (.) -> 1
           // Ponto (.) -> 1
           var linkAtivador = document.createElement("a");
           linkAtivador.href = "#";
           linkAtivador.textContent = "Ler Mais...";
           linkAtivador.style.cssText = "text-decoration: none; color: green;";
           linkAtivador.classList.add("link-de-ativação-popup");
           Documento.textContent = Documento.textContent.slice(0 , -12);
           Documento.appendChild(linkAtivador);
    
           linkAtivador.addEventListener("click",function(event){
                event.preventDefault();
                var ElementosPopup = [];
                for (let index = 0; index < 7; index++) {
                    ElementosPopup.push(document.createElement("div"));
                }
                var ClassesElementosPopUpAndId = [
                    'OverLayDocumento',
                    'ModalDocumento',
                    'ElementoWhite',
                    'background',
                    'titleDocumento',
                    'paragrafoDocumento',
                    'BodyPopup'
                ];
                var ElementosPopupStyle = [
                    "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 11; cursor: pointer;",
                    "position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60%; height: 70%; background: #333; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; border-radius: 10px; z-index: 12;",
                    "width: 96%; height: 96%; background: white; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;",
                    "position: relative; top: 0; left: 0; width: 98%; height: 98%; background: #333;",
                    "position: absolute; top: -12px; left: 50%; background: #333; transform: translate(-50% , 0); color: white; z-index: 1;",
                    "color: white; text-transform: uppercase;",
                    "width: 100%; height: 100%; padding-top: 10px; overflow-y: auto; overflow-x: hidden;"
                ];
                if(ElementosPopup.length === ElementosPopupStyle.length)
                {
                    for (let index = 0; index < ElementosPopup.length; index++) {
                        ElementosPopup[index].style.cssText = ElementosPopupStyle[index];
                        ElementosPopup[index].classList.add(ClassesElementosPopUpAndId[index]);
                        ElementosPopup[index].id = ClassesElementosPopUpAndId[index];
                    }
                    for (let index = 0; index < ElementosPopup.length; index++) {
                        if(ElementosPopup[index].id === "OverLayDocumento")
                        {
                            var Overlay = ElementosPopup[index];
                            if(ElementosPopup[index + 1].id === "ModalDocumento")
                            {
                                var Modal = ElementosPopup[index + 1];
                                if(ElementosPopup[index + 2].id === "ElementoWhite")
                                {
                                    var Elemento = ElementosPopup[index + 2];
                                    if(ElementosPopup[index + 3].id === "background")
                                    {
                                        var Background = ElementosPopup[index + 3];
                                        if(ElementosPopup[index + 4].id === "titleDocumento")
                                        {
                                            var Title = ElementosPopup[index + 4];
                                            Title.textContent = this.closest(".documento-notificacao").querySelector(".head-da-notificacao").querySelector(".title-notificacao").textContent.split(",")[0];
                                            if(ElementosPopup[index + 5].id === "paragrafoDocumento")
                                            {
                                                var Paragrafo = ElementosPopup[index + 5];
                                                if(ElementosPopup[index + 6].id === "BodyPopup")
                                                {
                                                    var Body = ElementosPopup[index + 6];
                                                    Body.textContent = Texto;
                                                    document.body.appendChild(Overlay);
                                                    document.body.appendChild(Modal);
                                                    Modal.appendChild(Elemento);
                                                    Elemento.appendChild(Background);
                                                    Background.appendChild(Title);
                                                    Title.appendChild(Paragrafo);
                                                    Background.appendChild(Body);
                                                    Overlay.addEventListener("click",function(){
                                                        document.body.removeChild(this);
                                                        document.body.removeChild(Modal);
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
           });
        }
    });
}
else
{
    var div11 = document.createElement("div");
    div11.style.width = "100%";
    div11.style.height = "100%";
    div11.style.display = "flex";
    div11.style.alignItems = "center";
    div11.style.justifyContent = "center";
    div11.style.flexWrap = "nowrap";
    div11.style.flexDirection = "row";
    div11.innerHTML = "<p>Você Não Possui Historicos de Publicações !!!</p>";
    document.getElementById("section-11-dashboard").appendChild(div11);
}
// usando sistematização JQuery - Js
var JQueryFAQDiv =  $("<div>").addClass("Perguntas-Frequentes-FAQ-id","Perguntas-Frequentes-FAQ-class");
var JQueryFAQb = $("<b>").addClass("Perguntas-Frequentes-FAQ-weight-id","Perguntas-Frequentes-FAQ-weight-class");
var JQueryFAQi = $("<i>").addClass("fas fa-info-circle").attr("id","Perguntas-Frequentes-FAQ-icon-id");
JQueryFAQDiv.append(JQueryFAQi);
JQueryFAQDiv.append(JQueryFAQb);
JQueryFAQb.text("FAQ – Colaboradores do BookNest");
$("#section-12-dashboard").append(JQueryFAQDiv);
JQueryFAQDiv.css({"width":"100%","color":"white","display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"nowrap","flex-direction":"column"});
JQueryFAQb.css({"text-decoration":"underline","text-decoration-color":"yellow","color":"yellow"});
JQueryFAQi.css({"color":"yellow","font-size":"20px","margin-right":"10px"});
var ArrayPerguntasFAQs = [
    'O que é o BookNest?',                                           
    'Como posso publicar meu livro no BookNest?',                                            
    'O BookNest cobra alguma taxa para publicar livros?',                                            
    'O BookNest oferece edição de livros?',                                          
    'O que acontece com os meus direitos autorais ao publicar no BookNest?',                                         
    'Posso adicionar mais de um livro na plataforma?',                                           
    'O que significa "publicação interativa"?',                                          
    'Como faço para adicionar ou editar informações do meu perfil de colaborador?',                                          
    'O BookNest oferece suporte ao colaborador?',                                            
    'O que acontece se meu livro for plágio?',                                          
    'Como posso remover um livro publicado do BookNest?',                                           
    'Como posso atualizar meu livro já publicado?',                                         
    'O BookNest realiza transações financeiras entre colaboradores e leitores?',                                            
    'O que é a "Visibilidade Pública" do meu livro?',                                           
    'Existe um limite de páginas ou palavras para os livros publicados?',                                           
    'Posso adicionar imagens no meu livro?',                                            
    'Como funciona o sistema de avaliação de livros?',                                          
    'O BookNest oferece ferramentas para promover meus livros?',                                            
    'Posso colaborar com outros escritores na mesma obra?',                                         
    'O BookNest possui restrições quanto ao conteúdo publicado?',                                           
    'Como o BookNest armazena meus livros?',                                                 
    'O BookNest oferece estatísticas sobre a performance do meu livro?',                                            
    'Posso usar o BookNest para publicar minha obra em diversos idiomas?',                                          
    'Como posso garantir que meu livro não seja copiado ou pirateado?',                                         
    'Existe um limite de livros que posso publicar no BookNest?'                                            
];
var ArrayRespostasFAQs = [
    'R: O BookNest é uma plataforma online que permite a publicação e o armazenamento interativo de livros gratuitamente. Nosso objetivo é dar a oportunidade a novos escritores e entusiastas de obras literárias de colaborar, publicando suas próprias obras ou demonstrando suas obras preferidas.',
    'R: Para publicar seu livro, basta criar uma conta de colaborador, acessar sua área e seguir os passos para enviar o manuscrito em formato digital. Nossa plataforma suporta diversos formatos de arquivo, incluindo PDF, EPUB e DOCX.',
    'R: Não. A publicação de livros no BookNest é completamente gratuita. Nossa missão é dar visibilidade a novos autores e entusiastas sem custos envolvidos.',
    'R: Não, o BookNest não oferece serviços de edição. Você é responsável pela edição do seu livro antes de enviá-lo para a plataforma. Contudo, oferecemos diretrizes de formatação para facilitar o processo.',
    'R: Ao publicar seu livro no BookNest, você mantém todos os direitos autorais da sua obra. O BookNest não interfere nos direitos sobre o conteúdo. A plataforma apenas armazena e exibe seus livros.',
    'R: Sim, você pode adicionar quantos livros desejar. Cada obra será registrada individualmente e ficará disponível para o público de acordo com as configurações de visibilidade que você escolher.',
    'R: A publicação interativa permite que os leitores interajam com o conteúdo do livro, como adicionar comentários, avaliar e recomendar as obras. Você também pode integrar links, imagens e vídeos dentro do conteúdo do seu livro, proporcionando uma experiência mais rica.',
    'R: Você pode atualizar seu perfil a qualquer momento acessando as configurações do perfil em sua conta de colaborador. Lá você pode adicionar ou modificar informações pessoais, biografia, foto de perfil e preferências.',
    'R: Sim, o BookNest oferece uma área de suporte ao colaborador onde você pode encontrar ajuda sobre o processo de publicação, problemas técnicos, e mais. Além disso, nossa equipe está disponível para responder dúvidas em nossa seção de "Suporte ao Colaborador".',
    'R: O BookNest não permite publicações de livros que infringem direitos autorais de terceiros. Se um livro for identificado como plágio, ele será removido da plataforma. É responsabilidade do colaborador garantir que sua obra não viole direitos autorais.',
    'R: Se você deseja remover um livro da plataforma, basta acessar a seção "Meus Livros" na sua conta de colaborador e selecionar a opção "Remover" para excluir o conteúdo.',
    'R: Você pode atualizar seu livro a qualquer momento. Basta acessar a página do livro e fazer o upload da nova versão do arquivo. As atualizações serão automaticamente refletidas na plataforma.',
    'R: Não, o BookNest não está envolvido em transações financeiras entre colaboradores e leitores. Nosso papel é apenas oferecer uma plataforma gratuita para publicação e armazenamento de livros. Qualquer envolvimento financeiro ou comercial é responsabilidade dos próprios colaboradores.',
    'R: A visibilidade pública permite que seu livro seja encontrado por qualquer usuário da plataforma. Você pode escolher se deseja que seu livro seja visível para todos ou restrito a um grupo selecionado.',
    'R: Não há limite de páginas ou palavras para os livros publicados no BookNest. No entanto, recomendamos que você siga as melhores práticas de formatação para garantir uma boa experiência de leitura.',
    'R: Sim, você pode adicionar imagens no seu livro. Nosso sistema suporta inserção de imagens dentro do conteúdo, o que permite que você enriqueça a apresentação da sua obra.',
    'R: Os leitores podem avaliar seu livro utilizando uma escala de 1 a 5 estrelas, e também podem deixar comentários. Essas avaliações ajudam outros usuários a decidir quais livros ler, além de proporcionar feedback valioso para os autores.',
    'R: Embora o BookNest não forneça ferramentas de promoção pagas, você pode promover sua obra dentro da plataforma, compartilhando links para seu livro nas redes sociais ou em outras plataformas de mídia.',
    'R: Sim, o BookNest permite que você adicione co-autores e colaboradores à sua obra. Isso facilita o processo de escrita colaborativa e a publicação de livros de múltiplos autores.',
    'R: Sim, o BookNest tem uma política contra conteúdo que seja ofensivo, discriminatório ou ilegal. É importante que todo conteúdo publicado na plataforma respeite nossas regras de conduta e as leis de direitos autorais.',
    'R: Seus livros são armazenados de forma segura em servidores de alta qualidade, com backups regulares para garantir a preservação do conteúdo. O BookNest se preocupa com a segurança dos dados dos colaboradores.',
    'R: Não, o BookNest não fornece estatísticas detalhadas sobre a performance do livro. No entanto, você pode acompanhar o número de visualizações e interações básicas por meio do painel de controle de sua conta.',
    'R: Sim, você pode publicar seu livro em diferentes idiomas. Se você tem a versão de um livro em outro idioma, pode publicá-lo separadamente ou como uma versão alternativa dentro da plataforma.',
    'R: O BookNest toma medidas para proteger os dados, mas não podemos garantir a prevenção de cópias não autorizadas. Recomendamos que você inclua uma licença de direitos autorais na introdução ou no rodapé de suas obras.',
    'R: Não, não há limite de livros que você pode publicar na plataforma. Você pode adicionar quantos livros desejar, desde que o conteúdo esteja de acordo com nossas políticas.'
]
if(ArrayPerguntasFAQs.length === ArrayRespostasFAQs.length)
{
    var FAQS = {};
    for (let index = 0; index < ArrayPerguntasFAQs.length; index++) {
        FAQS[ArrayPerguntasFAQs[index]] = ArrayRespostasFAQs[index];
    }
    if(Object.keys(FAQS).length > 0)
    {
        var KeysFAQs = Object.keys(FAQS);
        if(KeysFAQs.length > 0)
        {
            var FAQsElementos = $("<div>").addClass("elemento-container-Perguntas-Frequentes-FAQs-class").attr("id","elemento-container-Perguntas-Frequentes-FAQs-id");
            for (let index = 0; index < KeysFAQs.length; index++) {
                var details = $("<details>").addClass("elemento-container-interative-translative");
                var summary = $("<summary>").addClass("elemento-question-translative");
                var p = $("<p>").addClass("elemento-ask-translative");
                details.css({"width":"650px","font-size":"15px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","max-width":"90%","padding":"10px","margin":"20px auto"});
                summary.css({"font-size":"15px","white-space":"nowrap"});
                summary.text((index+1)+". "+KeysFAQs[index]);
                p.text(FAQS[KeysFAQs[index]]);
                p.css({"background":"rgba(0,0,0,0.7)","padding":"5px","border-radius":"10px"})
                details.append(summary);
                details.append(p);
                FAQsElementos.append(details);
            }
            JQueryFAQDiv.append(FAQsElementos);
        }
        else
        {
            alert("Error ao Criar Tabela de FAQS");
        }
    }
    else
    {
        alert("Error ao Mostrar os FAQs , por favor Reinicie sua Página !!!");
    }
}
// // $("#teste-submit").click(function(){
// //     $("#mostrar").text("O seu Nome é: "+$("#teste-textos").val()+" ! ");
    
// //     // $.ajax({
// //     //     // url -> para enviarei os dados
// //     //     // type -> tipo de envio (GET , POST)
// //     //     // data -> quais dados enviarei
// //     //     // sucess -> resposta de sucesso !!!
// //     // });
// // });

// Moderação 
var Moderacao = $("<div>").addClass("elemento-moderacao-complete-content-class").attr("id","elemento-moderacao-complete-content-id");
Moderacao.css({
    "width":"100%",
    "max-width":"90%",
    "margin":"20px auto"
});
var ModeracaoColaboradorTitles = [
    'Introdução à Moderação',
    'Funções e Responsabilidades',
    'Diretrizes de Conteúdo',
    'Ferramentas de Moderação',
    'Processo de Revisão de Conteúdo',
    'Como Lidar com Controvérsias',
    'Treinamento e Melhores Práticas',
    'Documentação e Suporte'
];
var ModeracaoColaboradorSubTitles = [
    'Objetivo da Moderação',
    'Importância da Moderação de Conteúdo',
    'Como a Moderação Contribui para a Experiência do Usuário',
    'História da Moderação na Plataforma',
    'Quem São os Moderadores',
    'Revisão de Conteúdo Submetido',
    'Identificação de Violação de Diretrizes',
    'Notificação ao Autor sobre Conteúdo Rejeitado',
    'Resolução de Conflitos entre Colaboradores',
    'Manter a Imparcialidade e Profissionalismo',
    'Conteúdo Proibido',
    'Requisitos para Conteúdo Aceitável',
    'Direitos Autorais e Propriedade Intelectual',
    'Padrões de Qualidade do Conteúdo',
    'Respeito à Diversidade e Inclusão',
    'Painel de Moderação',
    'Filtros Automáticos de Conteúdo',
    'Sistema de Marcação de Conteúdo',
    'Ferramentas de Feedback para Colaboradores',
    'Relatórios de Moderação',
    'Análise Inicial do Conteúdo',
    'Aplicação das Diretrizes de Moderação',
    'Avaliação de Conteúdos Sensíveis',
    'Aprovação vs. Rejeição',
    'Documentação da Decisão de Moderação',
    'Reclamações de Colaboradores',
    'Processo de Revisão de Decisões',
    'Escalabilidade para Supervisores',
    'Gerenciamento de Discussões Públicas',
    'Prevenção de Conflitos',
    'Treinamento Inicial para Novos Moderadores',
    'Desenvolvimento Contínuo e Feedback',
    'Manutenção de Consistência nas Decisões',
    'Boas Práticas de Moderação',
    'Monitoramento de Desempenho',
    'Manual de Diretrizes para Moderadores',
    'FAQs para Moderadores',
    'Suporte Técnico',
    'Recursos de Treinamento',
    'Contato com a Equipe de Supervisão'
];
var ValuesTopicos = [
    'A moderação tem como objetivo garantir que o conteúdo seja apropriado e em conformidade com as regras da plataforma, criando um ambiente seguro para os usuários. Ela impede a publicação de material prejudicial ou indesejado, promovendo uma experiência positiva.',
    'A importância da moderação de conteúdo é fundamental para manter a plataforma em um padrão elevado, protegendo usuários de conteúdo ofensivo, inadequado ou ilegal, e garantindo que as interações sejam construtivas e respeitosas.',
    'A moderação contribui para a experiência do usuário ao filtrar conteúdo nocivo e fornecer um ambiente agradável, onde os usuários se sentem seguros e confortáveis para interagir. Isso melhora a satisfação e a confiança dos participantes na plataforma.',
    'A história da moderação nas plataformas evoluiu com o tempo, inicialmente sendo feita de forma manual, mas hoje é amplamente suportada por algoritmos e sistemas automatizados que ajudam a filtrar o conteúdo, mas ainda dependem de moderadores humanos para tomar decisões finais.',
    'Moderadores são responsáveis por aplicar as políticas da plataforma e garantir que os usuários sigam as diretrizes, analisando conteúdos suspeitos, resolvendo disputas e fazendo ajustes conforme necessário para manter a ordem e segurança no ambiente online.',
    'Revisão de conteúdo submetido envolve avaliar o material postado pelos usuários para garantir que ele cumpra as normas estabelecidas pela plataforma, desde textos até imagens e vídeos, identificando quaisquer violações ou problemas de qualidade.',
    'Identificação de violação de diretrizes exige que os moderadores verifiquem se o conteúdo infringe as regras, como a disseminação de discurso de ódio, pornografia, plágio ou outros comportamentos indesejáveis que possam prejudicar o ambiente da plataforma.',
    'Quando o conteúdo é rejeitado, notificar o autor é uma parte importante do processo. A comunicação clara e educada ajuda o colaborador a entender os motivos da rejeição e, se necessário, a corrigir o material para reapresentá-lo.',
    'Resolução de conflitos entre colaboradores ocorre quando há disputas sobre conteúdo ou ações de moderação. Os moderadores devem intervir de forma justa, buscando um entendimento mútuo e uma solução que respeite as regras e a convivência.',
    'Manter a imparcialidade e profissionalismo é essencial para que os moderadores ajam de maneira consistente e justa, sem preconceitos ou favoritismos, aplicando as regras igualmente a todos os usuários, garantindo a confiança na moderação.',
    'Conteúdo proibido abrange material que não pode ser publicado, como discurso de ódio, violência, assédio, pornografia e outros conteúdos ilegais ou prejudiciais que violam as diretrizes da plataforma.',
    'Requisitos para conteúdo aceitável envolvem a publicação de material que seja relevante, original, educacional ou que se encaixe no objetivo da plataforma, respeitando as normas de qualidade e evitando infrações.',
    'Os moderadores devem garantir que o conteúdo esteja em conformidade com as direitos autorais e propriedade intelectual, evitando o uso não autorizado de material protegido e respeitando as leis vigentes sobre criação e reprodução de obras.',
    'Existem padrões de qualidade que o conteúdo precisa atender para ser aprovado, incluindo clareza, relevância, boa escrita, e uma apresentação visual adequada, além de atender aos critérios específicos da plataforma.',
    'O respeito à diversidade e inclusão significa que o conteúdo não deve discriminar ou excluir nenhum grupo, devendo ser sensível às diferenças culturais, raciais, de gênero e sociais, promovendo um ambiente inclusivo para todos.',
    'O painel de moderação é a ferramenta central que os moderadores usam para revisar e gerenciar o conteúdo publicado. Ele fornece acesso a todas as submissões, notificações de infrações e permite que as decisões sejam tomadas de maneira eficiente.',
    'Filtros automáticos de conteúdo são usados para detectar e bloquear automaticamente material potencialmente prejudicial, como palavras ofensivas, links maliciosos ou imagens impróprias, ajudando os moderadores a identificar conteúdo problemático mais rapidamente.',
    'O sistema de marcação de conteúdo permite que os moderadores marquem posts ou materiais para revisão posterior ou para destacar conteúdos que precisem de atenção urgente, ajudando a organizar o processo de moderação.',
    'Ferramentas de feedback para colaboradores oferecem uma maneira de os moderadores comunicarem suas decisões aos autores de conteúdo. A clareza no feedback ajuda os usuários a entenderem por que suas submissões foram aceitas ou rejeitadas e o que pode ser melhorado.',
    'Relatórios de moderação são gerados para acompanhar a quantidade de conteúdo revisado, identificar padrões de infrações e avaliar a eficácia das políticas de moderação, fornecendo insights para melhorias no sistema.',
    'Na análise inicial do conteúdo, os moderadores examinam o material para identificar rapidamente quaisquer infrações óbvias ou questões relacionadas à qualidade, antes de aplicar as diretrizes de moderação de forma mais detalhada.',
    'Aplicação das diretrizes de moderação significa usar as políticas e regras estabelecidas pela plataforma para avaliar e decidir se o conteúdo deve ser aprovado ou rejeitado, levando em consideração a natureza do material.',
    'Quando o conteúdo é sensível, como em casos de discurso polêmico ou político, os moderadores fazem uma avaliação de conteúdos sensíveis para garantir que a moderação seja justa e leve em conta o contexto e a diversidade de opiniões.',
    'A decisão de aprovar ou rejeitar conteúdo é baseada na análise das diretrizes e no julgamento do moderador, que deve ser consistente, imparcial e transparente. Essa decisão deve ser documentada para futuros acompanhamentos.',
    'A documentação da decisão de moderação é importante para registrar as ações dos moderadores, garantindo que haja um histórico de cada decisão tomada e podendo ser útil caso a decisão precise ser revista ou explicada mais tarde.',
    'Quando um colaborador se sente prejudicado, as reclamações de colaboradores precisam ser tratadas com atenção. O moderador deve investigar a situação e fornecer uma explicação adequada, ajustando a decisão se necessário.',
    'O processo de revisão de decisões permite que as decisões de moderação sejam revisadas, seja por outro moderador ou supervisor, para garantir que os padrões sejam mantidos e que decisões erradas sejam corrigidas.',
    'Em casos complexos ou de alta prioridade, o processo de moderação pode ser escalado para supervisores, que têm autoridade para revisar ou reverter decisões tomadas pelos moderadores iniciais.',
    'O gerenciamento de discussões públicas sobre moderação deve ser feito com diplomacia, especialmente em casos em que a comunidade discute ou questiona as decisões tomadas. É importante manter a calma e esclarecer os motivos de forma transparente.',
    'Prevenção de conflitos envolve estabelecer regras claras e um processo justo para a moderação, além de garantir que os moderadores se comuniquem de forma profissional e respeitosa, evitando mal-entendidos e disputas.',
    'O treinamento inicial para novos moderadores é fundamental para garantir que os novos membros da equipe entendam as diretrizes da plataforma, as ferramentas de moderação e as expectativas relacionadas ao trabalho de moderação.',
    'O desenvolvimento contínuo e feedback são essenciais para que os moderadores melhorem suas habilidades, recebam orientações sobre situações desafiadoras e mantenham um alto nível de desempenho.',
    'A manutenção de consistência nas decisões garante que todas as decisões de moderação sejam justas e baseadas nas mesmas diretrizes, independentemente de quem seja o moderador, criando um ambiente de moderação equilibrado e confiável.',
    'Boas práticas de moderação envolvem ser educado, objetivo, transparente e respeitoso, seguindo as regras da plataforma e mantendo uma abordagem profissional em todas as situações de moderação.',
    'O monitoramento de desempenho dos moderadores é realizado para garantir que a moderação seja eficiente e justa, além de identificar áreas para treinamento e melhorar o processo de revisão de conteúdo.',
    'O manual de diretrizes para moderadores serve como um guia abrangente que explica as políticas e os procedimentos que os moderadores devem seguir ao revisar o conteúdo na plataforma.',
    'As FAQs para moderadores fornecem respostas rápidas a perguntas comuns sobre como lidar com diferentes situações de moderação, ajudando os moderadores a tomar decisões informadas sem precisar recorrer a explicações longas.',
    'O suporte técnico é necessário para ajudar os moderadores a resolver problemas técnicos relacionados às ferramentas de moderação, garantindo que possam desempenhar suas funções sem interrupções.',
    'Os recursos de treinamento incluem materiais e cursos que ajudam os moderadores a se aprimorarem, atualizando suas habilidades e aprendendo novas práticas de moderação.',
    'Quando necessário, os moderadores podem entrar em contato com a equipe de supervisão para obter orientação em casos complexos ou difíceis, garantindo que as decisões sejam tomadas de acordo com as melhores práticas.'
];
var ResultadoDivisão = Math.round(ModeracaoColaboradorSubTitles.length/ModeracaoColaboradorTitles.length);
// criando array
var GruposValores = [];
// separando em grupos de valor correspondente
var GruposValoresTemp = {};
if(ModeracaoColaboradorSubTitles.length === ValuesTopicos.length)
{
    for (let index = 0; index < ModeracaoColaboradorSubTitles.length; index++) {
        GruposValoresTemp[ModeracaoColaboradorSubTitles[index]] = ValuesTopicos[index];
        if(Object.values(GruposValoresTemp).length === ResultadoDivisão)
        {
            GruposValores.push(GruposValoresTemp);

            GruposValoresTemp = {};
        }
    }
    if(ModeracaoColaboradorTitles.length === GruposValores.length)
    {
        var ArrayModeracao = {};
        for (let index = 0; index < GruposValores.length; index++) {
            ArrayModeracao[ModeracaoColaboradorTitles[index]] = GruposValores[index];
        }
    }
    Object.keys(ArrayModeracao).forEach(function(keys){
        var documentoElementoKeys = $("<div>").addClass("elemento-moderacao-view-moderacoes-class").attr("id","elemento-moderacao-view-moderacoes-id-1");
        var documentoElementoParagrafo = $("<h1>").addClass("elemento-moderacao-view-moderacoes-class").attr("id","paragrafo");
        documentoElementoParagrafo.text(keys);
        documentoElementoKeys.append(documentoElementoParagrafo);
        var VALUES = ArrayModeracao[keys];
        Object.keys(VALUES).forEach(function(key){
           var ul = $("<ul>").addClass("elemento-lista-open-column").attr("id","elemento-lista-open-column-id");
           var li = $("<li>").addClass("elemento-lista-open-line").attr("id","elemento-lista-open-line-id");
           ul.text(key);
           li.text(VALUES[key]);
           ul.append(li);
           documentoElementoKeys.append(ul);
        });
        Moderacao.append(documentoElementoKeys);
    });

    $("#section-15-dashboard").append(Moderacao);
}
