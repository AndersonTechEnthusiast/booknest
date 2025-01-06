// Container 3
var KeysTabelaClick = window.Keys; // pegando as Chaves
var ValuesTableCliks = window.Values; // pegando os Valores
var contadorPostagemComentados = 0;
var arrayPostagemComentadoskeys = [];
var arrayPostagemComentadosValues = [];
if(KeysTabelaClick && ValuesTableCliks)
{
    const Postagem1 = {};
    decodeURIComponent(escape(atob(KeysTabelaClick))).split("§").forEach(function(dados){
        arrayPostagemComentadoskeys.push(dados.split("+-"));

        contadorPostagemComentados++;
        if(contadorPostagemComentados === decodeURIComponent(escape(atob(KeysTabelaClick))).split("§").length)
        {
            contadorPostagemComentados = 0;
            var dadosarray = arrayPostagemComentadoskeys;
            arrayPostagemComentadoskeys = [];
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
                arrayPostagemComentadoskeys.push(atual.join(""));
            }
        }
    });
    decodeURIComponent(escape(atob(ValuesTableCliks))).split("§").forEach(function(dados){
        arrayPostagemComentadosValues.push(dados.split("+-"));
        contadorPostagemComentados++;
        if(contadorPostagemComentados === decodeURIComponent(escape(atob(ValuesTableCliks))).split("§").length)
        {
            var dadosarray = arrayPostagemComentadosValues;
            arrayPostagemComentadosValues = [];
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
                arrayPostagemComentadosValues.push(atual.join(""));
            }
        }
    });
    if(arrayPostagemComentadoskeys.length === arrayPostagemComentadosValues.length)
    {
        var DadosRepetidos = [];
        for (let index = 0; index < arrayPostagemComentadoskeys.length; index++) {
            if(arrayPostagemComentadoskeys[index] === 'id')
            {
                DadosRepetidos.push(arrayPostagemComentadoskeys[index]);
            }
        }
        var QuantidadeDeDadosRepetidos = parseInt(DadosRepetidos.length);
        var LinhasDaColuna = parseInt(Math.round(arrayPostagemComentadoskeys.length/DadosRepetidos.length));
        var Dados = [];
        var Temp1 = {};
        var Temp2 = {};
        for (let index = 0; index < arrayPostagemComentadoskeys.length; index++) {
            Temp1[arrayPostagemComentadoskeys[index]] = arrayPostagemComentadosValues[index];
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
            if(Postagem1[key] === undefined)
            {
                Postagem1[key] = [];
            }
            Postagem1[key].push(value);
        }
    }

    var idsTable = "id da Postagem";
    var tituloTable = "titulo da Postagem";
    var dataTable = "data da Postagem";
    var hourTable = "hora da Postagem";
    var categoryTable = "categoria da Postagem"; 
    var Theaders = {
        Theader1: idsTable,
        Theader2: tituloTable,
        Theader3: dataTable,
        Theader4: hourTable,
        Theader5: categoryTable
    }


    var Tabela = document.createElement("table");
    Tabela.style.cssText = "width: 100%; text-align: center";
    // Criando uma Simulação do Banco de Dados

    var TableViewShowDatas = [];
    Object.keys(Postagem1).forEach(function(keys){
        Object.values(Postagem1[keys]).forEach(function(array){
            // crie uma key e associe a um valor
            // key: array.key
            TableViewShowDatas.push({
                id: array.id,
                titulo: array.titulo,
                data: array.data,
                hora: array.hora,
                genero: array.genero 
            });
        });
    });
    for(let cTh = 0; cTh < Object.keys(Theaders).length; cTh++)
    {
        var th = document.createElement("th");
        th.textContent = Theaders[Object.keys(Theaders)[cTh]];
        Tabela.appendChild(th);
    }
    TableViewShowDatas.forEach(function(dados){
        var tr = document.createElement("tr");
        tr.style.cursor = "pointer";
        tr.classList.add("linhas");
        Object.values(dados).forEach(function(valores){
            var td = document.createElement("td");

            td.textContent = valores;

            td.classList.add("celulas");
            td.style.cssText = "padding: 10px; border-bottom: 2px groove white;";
            tr.appendChild(td);
        
        });

        Tabela.appendChild(tr);
        // ao clicar no tr (table rows) linhas
        tr.addEventListener("click",function(){
            // guarde o id mostrado na postagem
            // [0] denota a primeira celula
            var atual = this.querySelectorAll(".celulas")[0];
            // faça uma para cada em cada elemento da "postagem"
            Object.keys(Postagem1).forEach(function(keys){
                Object.values(Postagem1[keys]).forEach(function(array){
                    // compara os ids de todas as arrays contidas na array 
                    // tipo:
                    // array = [
                    //  {nome: 'João', idade: 13},
                    //  {nome: 'Maria' , idade: 13}
                    // ];
                    // se quiser pega os nomes seriam:
                    // array.forEach(function(dados){
                    //  dados.nome
                    // });
                    // resultará em 'João' , 'Maria'
                    if(array.id == atual.textContent)
                    {
                        var overlay = document.createElement("div");
                        var modal = document.createElement("div");
                        var index = document.createElement("div");
                        var white = document.createElement("div");
                        var indexBack = document.createElement("div");
                        var title = document.createElement("div");
                        var text = document.createElement("p");
                        var informações = document.createElement("div");
                        var Content = document.createElement("div");
                        var content1 = document.createElement("div");
                        var content2 = document.createElement("div");
        
                        var ElementosCreate = [
                            overlay,
                            modal,
                            index,
                            white,
                            indexBack,
                            title,
                            text,
                            informações,
                            Content,
                            content1,
                            content2
                        ];
        
                        var CssTexts = [
                            "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; background: rgba(0,0,0,0.7); cursor: pointer;",
                            'position: fixed; top: 50%; left: 50%; transform: translate(-50% , -50%); width: 80%; height: 80%; border-radius: 20px; background: #333; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; z-index: 21;',
                            'width: 98%; height: 98%; background: white; border-radius: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
                            'width: 98%; height: 98%; background: #333; border-radius: 20px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;',
                            'position: relative; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: column;',
                            'position: absolute; top: -10px; background: #333; width: 100%; max-width: 30%; text-align: center; color: white; margin: 0 auto;',
                            'width: 100%; padding: 0; margin: 0;',
                            'width: 100%; height: 100%;',
                            'width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;',
                            'width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: column; margin: 20px 0px;',
                            'width: 50%; height: 100%; overflow-y: scroll; margin: 20px auto;'
                        ];
        
                        var ClassesTexts = [
                            'overlay-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'modal-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'index-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'white-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'indexBack-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'title-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'text-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'informações-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'Content-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'content1-popup-dashboards-interative-table-gerenciamento-de-postagem',
                            'content2-popup-dashboards-interative-table-gerenciamento-de-postagem'
                        ];
        
                        var IdsTexts = [
                            'overlay-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'modal-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'index-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'white-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'indexBack-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'title-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'text-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'informações-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'Content-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'content1-popup-dashboards-interative-table-gerenciamento-de-postagem-1',
                            'content2-popup-dashboards-interative-table-gerenciamento-de-postagem-1'
                        ];
                        var AtributosElementos = 
                        [
                            ElementosCreate,
                            CssTexts,
                            ClassesTexts,
                            IdsTexts
                        ];
                        if(ElementosCreate.length === CssTexts.length && ElementosCreate.length === ClassesTexts.length && ElementosCreate.length === IdsTexts.length){
                            for(let vetor3 = 0; vetor3 < (ElementosCreate.length + CssTexts.length + ClassesTexts.length + IdsTexts.length)/AtributosElementos.length; vetor3++)
                            {
                                ElementosCreate[vetor3].style.cssText = CssTexts[vetor3];
                                ElementosCreate[vetor3].classList.add(ClassesTexts[vetor3]);
                                ElementosCreate[vetor3].id = IdsTexts[vetor3];
                            }
                        }
                        modal.appendChild(index);
                        index.appendChild(white);
                        white.appendChild(indexBack);
                        indexBack.appendChild(title);
                        title.appendChild(text);
                        indexBack.appendChild(informações);
                        text.textContent = array.titulo;
                        informações.appendChild(Content);
                        Content.appendChild(content1);
                        Content.appendChild(content2);
                        // acessando elementos (arrays associativas) da array total (postagem)
                        Object.keys(Postagem1).forEach(function(keys){
                            Object.values(Postagem1[keys]).forEach(function(array){
                                // percorrendo todos os ids do array associativas
                            // se ele for igual ao texto da primeira celula da tabela atual 
                            if(array.id == atual.textContent)
                                {
                                    var ContainerGrafico = document.createElement("div");
            
                                    ContainerGrafico.classList.add("container-grafico-popup");
            
                                    ContainerGrafico.id = "container-grafico-popup-1";
            
                                    var Grafico = document.createElement("canvas");
            
                                    Grafico.classList.add("grafico-popup");
            
                                    Grafico.id = "grafico-popup-1";
                                    
                                    content1.appendChild(ContainerGrafico);
            
                                    ContainerGrafico.appendChild(Grafico);
                                    
                                    ContainerGrafico.style.width = "100%";
                                    
                                    ContainerGrafico.style.height = "100%";
            
                                    const myDonutChart = new Chart(Grafico, {
                                        type: 'doughnut',  // Tipo de gráfico: Donut (rosquinha)
                                        data: {
                                            labels: ['Comentarios' , 'Curtidas'],
                                            datasets: [{
                                                label: 'Grafico de Dados da Postagem',
                                                data: [50, 25],  // Valores percentuais
                                                backgroundColor: [
                                                    '#FFFFFF',
                                                    '#FFFFFFE6'
                                                ],
                                                borderColor: [
                                                    'rgba(255, 99, 132, 1)',
                                                    'rgba(54, 162, 235, 1)'
                                                ],
                                                borderWidth: 1
                                            }]
                                        },
                                        options: {
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'top',
                                                }
                                            }
                                        }
                                    });
            
                                Object.keys(Postagem1).forEach(function(keys){
                                    Object.values(Postagem1[keys]).forEach(function(array){
                                        if(array.id == atual.textContent)
                                        {
                                            var KeysTabelaClick = Object.keys(array);
                                            KeysTabelaClick.pop();
                                            KeysTabelaClick.forEach(function(elementos){
                                                var fieldsed = document.createElement("fieldset");
                                                var legend = document.createElement("legend");
                                                
                                                fieldsed.innerHTML = `<p style="padding: 0; margin: 0;"> ${array[elementos]} </p>`;
                                                fieldsed.classList.add("fieldset-popup");
                                                fieldsed.style.margin = "20px 10px";
                                                legend.textContent = elementos;
            
                                                fieldsed.appendChild(legend);
            
                                                content2.appendChild(fieldsed);
                                            });
                                        }
                                    });
                                });
                                }
                            });
                        });
        
                        document.body.appendChild(ElementosCreate[0]);
                        document.body.appendChild(ElementosCreate[1]);
                        ElementosCreate[0].addEventListener("click",function(){document.body.removeChild(this); document.body.removeChild(ElementosCreate[1]);});
                    }
                });
            });
        });
    });
    var ContainerTabela = document.createElement("div");
    ContainerTabela.classList.add("container-tabela");
    ContainerTabela.id = "container-tabela-1";
    ContainerTabela.style.cssText = "height: 455px; max-height: 455px; overflow: hidden;";

    var containerTotalShowMoreButton = document.createElement("div");
    containerTotalShowMoreButton.classList.add("container-total-para-o-botão-de-mostrar-mais");
    containerTotalShowMoreButton.id = "container-total-para-o-botão-de-mostrar-mais-1";
    containerTotalShowMoreButton.style.cssText = "width: 100%; height: 550px; max-width: 90%; margin: 0 auto;";
    ContainerTabela.appendChild(Tabela);
    var showMore = document.createElement("div");
    var showMoreButton = document.createElement("button");
    showMore.classList.add("container-mostrar-mais-da-tabela");
    showMore.id = "container-mostrar-mais-da-tabela-1";
    showMore.style.cssText = "width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row;";
    showMoreButton.style.cssText = "width: 150px; height: 50px; border: 2px groove white; background: transparent; color: white; font-size: 18px; font-family: 'Montserrat',sans-serif; text-align: center; border-radius: 20px; cursor: pointer; display: none;";
    showMoreButton.textContent = "Mostrar Mais";
    showMoreButton.type = "button";
    showMoreButton.addEventListener("mouseenter",function(){
        this.style.transition = "1s";
        this.style.background = "white";
        this.style.color = "#333";
        this.style.border = "none";
    });
    showMoreButton.addEventListener("mouseleave",function(){
        this.style.background = "transparent";
        this.style.color = "white";
        this.style.border = "2px groove white";
    });
    document.getElementById("section-3-dashboard").appendChild(containerTotalShowMoreButton);
    containerTotalShowMoreButton.appendChild(ContainerTabela);
    containerTotalShowMoreButton.appendChild(showMore);
    showMore.appendChild(showMoreButton);

    // verificação
    if(ContainerTabela.offsetHeight < ContainerTabela.scrollHeight)
    {
        showMoreButton.style.display = "block";
        showMoreButton.addEventListener("click", function(){
            if(containerTotalShowMoreButton.clientHeight === 550)
            {
                containerTotalShowMoreButton.style.transition = "1s";
                ContainerTabela.style.transition = "1s";
                ContainerTabela.style.height = (Tabela.clientHeight)+"px";
                ContainerTabela.style.maxHeight = (Tabela.clientHeight)+"px";
                containerTotalShowMoreButton.style.height = (Tabela.clientHeight + showMore.clientHeight)+"px";
            }else
            if(containerTotalShowMoreButton.clientHeight !== 550)
            {
                containerTotalShowMoreButton.style.transition = "1s";
                ContainerTabela.style.transition = "1s";
                ContainerTabela.style.height = "455px";
                ContainerTabela.style.maxHeight = "455px";
                containerTotalShowMoreButton.style.height = "550px";
            }
        });
    }
}