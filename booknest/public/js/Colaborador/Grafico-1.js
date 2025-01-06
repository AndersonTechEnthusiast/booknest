var Container = document.createElement("div");
Container.classList.add("container-grafico-dashboards-first");
Container.id = "container-grafico-dashboards-first";
var Grafico = document.createElement("canvas");
Grafico.classList.add("Grafico-DashBoards-first");
Grafico.id = "Grafico-DashBoards-First-1";
Container.style.width = "100%";
Container.style.maxWidth = "600px";
Container.style.height = "400px";
Container.style.display = "flex";
Container.style.alignItems = "center";
Container.style.justifyContent = "center";
Container.style.flexWrap = "nowrap";
Container.style.flexDirection = "row";
Container.style.margin = "0 auto";
Container.appendChild(Grafico);
document.getElementById("section-3-dashboard").appendChild(Container);
const my = new Chart(Grafico, {
    type: 'bar', // Tipo do gráfico (bar para barras)
    data: {
        labels: ['Ficção','Não-Ficção','Poesia','Drama','Conto','Infanto juvenil','Novela Gráfica','Humor','Guias de Viagem','Ensaios'], // Rótulos do eixo X
        datasets: [{
            label: 'Pontuação', // Título do gráfico
            data: [12, 19, 3, 5, 2, 3, 20 , 50 , 43 , 90], // Dados do gráfico (valores correspondentes aos rótulos)
            backgroundColor: [
                'white', // Cores de Fundo
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'white'
            ],
            borderColor: [
                'black', // Cores da borda
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderWidth: 1 // Espessura da borda
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Inicia o eixo Y do zero
            }
        }
    }
});
