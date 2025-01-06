var titles = ["Visão Geral de Atividades","Postagem de Novos Livros","Gerenciamento de Livros P.","Editor de Texto Avançado","Histórico de Edições e Versões","Pré-visualização de Livros","Estatísticas e Análises de Desempenho","Configurações de Notificações","Suporte ao Colaborador","Moderação de Conteúdos"];
var textos = ["No painel principal do seu DashBoard, você encontrará um resumo das suas atividades recentes no BookNest. Aqui, será possível visualizar quantos livros você postou, quantos estão em revisão, e acompanhar as métricas de engajamento, como o número de leituras, curtidas, e comentários. Esse resumo é atualizado em tempo real, oferecendo uma visão clara do seu progresso e impacto na plataforma.","Uma das principais funções do DashBoard é a possibilidade de postar novos livros de maneira rápida e eficiente. Com a opção 'Postar Novo Livro', você pode iniciar o processo de criação, onde será solicitado a preencher informações como título, gênero, sinopse e o conteúdo completo do livro. Também há a possibilidade de dividir seu livro em capítulos, adicionando interatividade para os leitores.","Gerencie todos os seus livros em um único lugar. No DashBoard, você tem uma lista completa dos livros já postados e pode editar, excluir ou atualizar o status de cada um. Se você quiser tirar um livro temporariamente do ar, basta definir seu status como “rascunho” ou “em revisão”. Além disso, você pode verificar se algum conteúdo foi reportado para ajustes, permitindo que mantenha suas publicações em conformidade com as políticas da plataforma.","Nos bastidores de cada livro, você encontrará o editor de texto avançado do BookNest. Esse editor permite a você formatar seu conteúdo com opções para títulos, parágrafos, citações, listas e muito mais. Além disso, é possível inserir imagens, links, e até multimídia para tornar sua obra mais interativa. O editor suporta uma vasta gama de formatos, tornando o processo de escrita e edição mais dinâmico.","No processo de edição, o DashBoard oferece um histórico detalhado de todas as mudanças feitas em seus livros. Você poderá rever versões anteriores, acompanhar quais mudanças foram feitas em quais datas, e restaurar versões antigas caso necessário. Isso oferece controle total sobre o processo de criação, permitindo que você experimente com segurança e nunca perca uma versão importante de sua obra.","Antes de publicar qualquer alteração, o recurso de pré-visualização permite que você veja exatamente como seu livro será exibido para os leitores. A pré-visualização reflete o layout final e é essencial para garantir que a formatação, imagens e capítulos estejam devidamente organizados. Assim, você tem certeza de que a experiência do usuário será impecável.","O DashBoard oferece um conjunto robusto de ferramentas de análise para ajudar você a entender o desempenho de seus livros. Com gráficos de visualização, você pode acompanhar o número de leituras diárias, as taxas de conclusão de leitura, e até identificar quais capítulos estão retendo mais a atenção dos leitores. Essas métricas são fundamentais para ajustar seu conteúdo e melhorar o engajamento.","O DashBoard permite que você configure suas preferências de notificação. Você pode escolher quais atividades deseja receber alertas, como novos comentários, alterações no status de livros, ou até mensagens de outros colaboradores. As notificações podem ser personalizadas para garantir que você não perca nenhuma interação importante, mas sem ser sobrecarregado por alertas irrelevantes.","Caso tenha dúvidas ou encontre problemas técnicos, a central de suporte está sempre disponível diretamente no DashBoard. Além disso, há uma base de conhecimento com tutoriais, guias e perguntas frequentes para ajudá-lo em qualquer etapa do processo. Se necessário, você pode abrir um ticket de suporte ou até conversar com outros autores para compartilhar dicas e experiências.","Se o colaborador também tiver um papel como moderador ou curador, o DashBoard pode incluir uma seção dedicada à revisão e aprovação de conteúdos de outros usuários. Essa função permite que você ajude a garantir que os padrões da plataforma sejam mantidos, revisando livros antes de sua publicação ou interagindo com conteúdo reportado pela comunidade"];
for(index = 0; index < titles.length; index++)
{
    var Boxes = document.createElement("div");
    var titlesBoxes = document.createElement("span");
    var textTitlesBoxes = document.createElement("b");
    var TextosBoxes = document.createElement("span");
    var Textos = document.createElement("p");
    titlesBoxes.classList.add("container-boxes-dashboards-introdution");
    titlesBoxes.id = "container-boxes-dashboards-introdution-"+index;
    textTitlesBoxes.classList.add("texto-from-title-container-boxes-dashboards-introdution");
    textTitlesBoxes.id = "texto-from-title-container-boxes-dashboards-introdution-"+index;
    TextosBoxes.classList.add("textos-boxes-dashboards-introdution");
    TextosBoxes.id = "textos-boxes-dashboards-introdution"+index;
    Textos.classList.add("Textos-dashboards-introdution");
    Textos.id = "Textos-dashboards-introdution-"+index;
    Boxes.classList.add("boxes-dashboards-introdution");
    Boxes.id = "boxes-dashboards-introdution-"+index;
    Boxes.appendChild(titlesBoxes);
    titlesBoxes.appendChild(textTitlesBoxes);
    Boxes.appendChild(TextosBoxes);
    TextosBoxes.appendChild(Textos);
    document.querySelector(".boxes-dashboards-introdution").appendChild(Boxes);
    textTitlesBoxes.textContent = titles[index];
    Textos.textContent = textos[index];
    Boxes.style.width = "500px";
    Boxes.style.height = "200px";
    Boxes.style.boxShadow = "2px 5px 5px 10px rgba(0,0,0,0.7)";
    Boxes.style.padding = "10px";
    Boxes.style.display = "flex";
    Boxes.style.alignItems = "center";
    Boxes.style.justifyContent = "space-evenly";
    Boxes.style.flexWrap = "nowrap";
    Boxes.style.flexDirection = "column";
}

var estilização_DashBoards = document.createElement("style");
estilização_DashBoards.textContent = 
".Etinerario-DashBoard-1{width: 100%; max-width: 50%; display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; flex-direction: row; margin: 0 auto;}" +
".textoEtinerario-DashBoard{width: 100%; text-align: center;}"+
".Titulo-DashBoard-1{width: 100%; border-bottom: 2px groove white; padding: 10px;}";
for(vetor = 0; vetor < document.querySelectorAll(".conjunto-DashBoard").length; vetor++)
{
    var TitleDashBoard = document.createElement("div");
    TitleDashBoard.classList.add("Etinerario-DashBoard-1");
    TitleDashBoard.id = "Etinerario-DashBoard-1-"+vetor;
    var containerTexto = document.createElement("span");
    containerTexto.classList.add("textoEtinerario-DashBoard");
    containerTexto.id = "container-texto-DashBoard-"+vetor;
    var TextoBoxes = document.createElement("p");
    TextoBoxes.classList.add("Titulo-DashBoard-1");
    TitleDashBoard.appendChild(containerTexto);
    containerTexto.appendChild(TextoBoxes);
    TextoBoxes.textContent = titles[vetor];
    document.querySelectorAll(".conjunto-DashBoard")[vetor].appendChild(TitleDashBoard);
}
document.head.appendChild(estilização_DashBoards);
