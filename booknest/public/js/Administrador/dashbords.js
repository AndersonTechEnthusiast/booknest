var config = {
    // tipo de Grafico
    type: 'doughnut',
    data: {
        // // Legenda do Grafico
        // labels: ['Usuarios'],
        datasets: [{
            // Titulo do Grafico
            label: '# of Votes',
            // Valores do Grafico
            data: [(valor_banco*100) , (1*100)],
            // cores dos valores do Grafico
            backgroundColor: [
                'white',
                '#121212'
            ],
            // cores da borda dos valores do Graficos
            borderColor: [
                '#121212'
            ],
            // largura da borda
            borderWidth: 1
        }]
    },
    // opções
    options: {
        // responsivo
        responsive: true,
        //
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
}
var canva_usuario        = "";
var canva_colaboradores  = "";
var canva_postagens      = "";
var canva_denuncias      = "";
var canva_ficção         = "";
var canva_não_ficção     = "";
var canva_poesia         = "";
var canva_drama          = "";
var canva_conto          = "";
var canva_infanto        = "";
var canva_novela         = "";
var canva_humor          = "";
var canva_GuiaDeViagens  = "";
var canva_Ensaio         = "";
var valor_banco                     = document.getElementById("countUserGrafico").textContent;
if(document.getElementById("dashbords-usuarios"))
{
   canva_usuario       =  document.getElementById("dashbords-usuarios");
   const Usuario = new Chart(canva_usuario , config);
}
if(document.getElementById("dashbords-colaboradores"))
{
   canva_colaboradores =  document.getElementById("dashbords-colaboradores");
   const Colaboradores = new Chart(canva_colaboradores , config);
}
if(document.getElementById("dashbords-postagens"))
{
   canva_postagens     =  document.getElementById("dashbords-postagens");
   const Postagens = new Chart(canva_postagens , config);
}
if(document.getElementById("dashbords-denuncias"))
{
   canva_denuncias     =  document.getElementById("dashbords-denuncias");
   const Denuncias = new Chart(canva_denuncias , config);
}
if(document.getElementById("dashbords-ficção"))
{
   canva_ficção        =  document.getElementById("dashbords-ficção");
   const Ficção = new Chart(canva_ficção , config);
}
if(document.getElementById("dashbords-NãoFicção"))
{
   canva_não_ficção    =  document.getElementById("dashbords-NãoFicção");
   const Não_Ficção = new Chart(canva_não_ficção , config);
}
if(document.getElementById("dashbords-Poesia"))
{
   canva_poesia        =  document.getElementById("dashbords-Poesia");
   const Poesia = new Chart(canva_poesia , config);
}
if(document.getElementById("dashbords-Drama"))
{
   canva_drama         =  document.getElementById("dashbords-Drama");
   const Drama = new Chart(canva_drama , config);
}
if(document.getElementById("dashbords-Conto"))
{
   canva_conto         =  document.getElementById("dashbords-Conto");
   const Conto = new Chart(canva_conto , config);
}
if(document.getElementById("dashbords-InfantoJuvenil"))
{
   canva_infanto       =  document.getElementById("dashbords-InfantoJuvenil");
   const InfantoJuvenil = new Chart(canva_infanto , config);
}
if(document.getElementById("dashbords-NovelaGrafica"))
{
   canva_novela        =  document.getElementById("dashbords-NovelaGrafica");
   const Novela = new Chart(canva_novela , config);
}
if(document.getElementById("dashbords-Humor"))
{
   canva_humor         =  document.getElementById("dashbords-Humor");
   const Humor = new Chart(canva_humor , config);
}
if(document.getElementById("dashbords-GuiasDeViagens"))
{
   canva_GuiaDeViagens =  document.getElementById("dashbords-GuiasDeViagens");
   const GuiasDeViagens = new Chart(canva_GuiaDeViagens , config);
}
if(document.getElementById("dashbords-Ensaio"))
{
   canva_Ensaio        =  document.getElementById("dashbords-Ensaio");
   const Ensaio = new Chart(canva_Ensaio , config);
}
const generos = {};
axios.get('/Administrador').then(response => {
    if(response.data.usuarios)
    {

        Object.values(response.data.usuarios).forEach(function(elemento){

            if(generos[elemento.generos.replace(/[" "]/g , '_').replace(/[-]/g , '_')])
            {
                generos[elemento.generos.replace(/[" "]/g , '_').replace(/[-]/g , '_')]++
            }
            else
            {
                generos[elemento.generos.replace(/[" "]/g , '_').replace(/[-]/g , '_')] = 1;
            }
        });
        var DashBoards_Gerenciamento_de_Generos_Literarios = document.getElementById("dashboard-Quantidade-de-Generos");
        var gerenciar = {
            // tipo de Grafico
            type: 'doughnut',
            data: {
                // // Legenda do Grafico
                // labels: ['Usuarios'],
                labels: ['Ficção','Não-Ficção','Poesia','Drama','Novela Grafica','Infanto Juvenil','Conto','Humor','Guis de Viagem','Ensaios'],
                datasets: [{
                    // Titulo do Grafico
                    label: 'Grafico de Gerenciamento de Generos Literarios',
                    // Valores do Grafico
                    data: [generos.Ficção,generos.Não_Ficção,generos.Poesia,generos.Drama,generos.conto,generos.Infantojuvenil,generos.Novela_Gráfica,generos.Humor,generos.Guias_de_Viagem,generos.Ensaios],
                    // cores dos valores do Grafico
                    backgroundColor: [
                        '#FF5733',
                        '#3498DB',
                        '#9B59B6',
                        '#2C3E50',
                        '#E67E22',
                        '#F1C40F',
                        '#27AE60',
                        '#F39C12',
                        '#1ABC9C',
                        '#7F8C8D'

                    ],
                    // cores da borda dos valores do Graficos
                    borderColor: [
                        '#121212'
                    ],
                    // largura da borda
                    borderWidth: 1
                }]
            },
            // opções
            options: {
                // responsivo
                responsive: true,
                //
                plugins: {
                    legend: {
                        position: 'top',
                    },
                }
            }
        }
        const Grafico_Generos_Literarios = new Chart(DashBoards_Gerenciamento_de_Generos_Literarios , gerenciar);
    }
}).catch(error => {
    console.log(error);
});

// usuario
