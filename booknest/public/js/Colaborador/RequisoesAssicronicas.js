// Descrição do Autor
// type = get porque não é um envio é para pegar dados
axios.get(`/RequisicaoDescricao/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    // console.log(response.data);
    response.data.forEach(function(elemento){
        elemento.forEach(function(Array){
            if(parseInt(Array.id_do_autor) === parseInt(atob($("#IdContent").attr("content")).charCodeAt(0)))
            {
                $(".text").text(Array.descricao);
            }
        });
    });
}).catch(error => {
    console.log(error);
});