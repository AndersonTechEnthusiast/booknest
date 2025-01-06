axios.get('/Administrador').then(response => {
    window.usuarios_export = response.data.usuarios;
    if(response.data.denuncias)
    {

        const Geral_de_Denuncias = {};
        Object.values(response.data.denuncias).forEach(function(denuncias){
            Object.values(response.data.usuarios).forEach(function(contribuinte){
                Object.values(response.data.usuarios).forEach(function(usuarios){
                    Object.values(response.data.postagens).forEach(function(postagens){
                        if(
                            contribuinte.id == denuncias.id_do_contribuinte && 
                            usuarios.id == denuncias.id_do_usuario &&
                            denuncias.id_da_postagem == postagens.id
                        )
                        {
                            imagemDoUsuarioDePerfil = "";
                            imagemDoContribuinteDePerfil = "";
                            if(usuarios.pathname === null)
                            {
                                imagemDoUsuarioDePerfil = "Foto-default.webp";
                            }
                            else
                            {
                                imagemDoUsuarioDePerfil = usuarios.pathname
                            }

                            if(contribuinte.pathname === null)
                            {
                                imagemDoContribuinteDePerfil = "Foto-default.webp";
                            }
                            else
                            {
                                imagemDoContribuinteDePerfil = contribuinte.pathname;
                            }
                            if(!Geral_de_Denuncias[postagens.titulo])
                            {
                                Geral_de_Denuncias[postagens.titulo] = [];
                            }
                            Geral_de_Denuncias[postagens.titulo].push({
                                'id_da_denuncia': denuncias.id,
                                'id_do_contribuinte': contribuinte.id,
                                'id_do_usuario': usuarios.id,
                                'imagem_do_usuario': imagemDoUsuarioDePerfil,
                                'imagem_do_contribuinte': imagemDoContribuinteDePerfil,
                                'nome_do_contribuinte': contribuinte.nome,
                                'email_do_contribuinte': contribuinte.email,
                                'nivel_de_acessos_do_contribuinte':contribuinte.nivel_acessos,
                                'nome_do_usuario':usuarios.nome,
                                'denuncia_do_usuario':denuncias.denuncia,
                                'nome_da_postagem': postagens.titulo,
                                'genero_da_postagem': postagens.genero,
                                'id_da_postagem': postagens.id,
                                'data_da_denuncia': denuncias.data,
                                'hora_da_denuncia': denuncias.hora
                            });
                        }
                    });
                });
            });
        });
        var TabelaVerGeralDeDenuncias = [];
        Object.keys(Geral_de_Denuncias).forEach(function(elemento){
            if(!TabelaVerGeralDeDenuncias.includes(elemento))
            {
                TabelaVerGeralDeDenuncias.push(elemento);
            }
        });

        TabelaVerGeralDeDenuncias.forEach(function(elemento){
            var tr = $("<tr>").addClass("elemento-table-rows").attr("id",`table-row-${elemento}`).css({"cursor":"pointer"});
            var td = $("<td>").css({"font-style":"italic"}).addClass("elemento-table-datas").attr("id",`table-data-${elemento.replace(/[' ']/g,'-')}`).append(elemento);
            tr.append(td);
            $(".table-grafico").find("table").append(tr);
        });

        $(".elemento-table-rows").on("click",function(){
            $(this).find("td").text();
            $("body").append(
                $("<div>").attr("id","overlay").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "z-index":"11",
                    "cursor":"pointer"
                }).on("click", function(){
                    $(this).remove();
                    $("#modal").remove();
                }),
                $("<div>").attr("id","modal").css({
                    "position":"fixed",
                    "top":"50%",
                    "left":"50%",
                    "width":"100%",
                    "height":"80%",
                    "background":"#333",
                    "border-radius":"10px",
                    "display":"flex",
                    "align-items":"flex-start",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "transform":"translate(-50% , -50%)",
                    "flex-direction":"row",
                    "z-index":"12"
                }).append(
                    $("<fieldset>").css({
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-direction":"row",
                        "flex-wrap":"nowrap",
                        "width":"98%",
                        "height":"95%",
                        "border":"2px groove red"
                    }).attr("id","fieldset-modal").append(
                        $("<legend>").css({"font-size":"20px","font-family":"'Teko',sans-serfi","font-style":"italic","color":"red"}).text(`Denuncia Feita a Postagem: ${$(this).find("td").text()}`),
                        $("<div>").attr("id","elemento-scrolling-column-denuncias").css({"width":"100%","height":"100%","display":"flex","align-items":"center","jsutify-content":"space-around","flex-wrap":"nowrap","flex-direction":"column","overflow-x":"hidden","overflow-y":"auto"}),
                    )
                )
            );
            Object.values(Geral_de_Denuncias[$(this).find("td").text()]).forEach(function(elemento){
                var divs = $("<div>").css({
                    "width":"100%",
                    "max-width":"90%",
                    "margin":"10px auto",
                    "box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"space-around",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                }).attr("id",`elemento-geral-de-containers-denuncias-${$(this).find("td").text().replace(/['']/g ,'-')}`);
                var divImageC = $("<div>").append($("<img>").attr("src",`../../../imagens-de-perfil-de-usuarios/${elemento.imagem_do_contribuinte}`).attr("title","imagem do contribuinte").css({"cursor":"pointer","width":"70px","border-radius":"50%"})); var divDataDaDenuncia = $("<div>").append($("<p>").attr("title","data da denuncia da noticia").css({"cursor":"pointer","font-style":"italic"}).text(elemento.data_da_denuncia));
                var divNomeC = $("<div>").append($("<p>").attr("title","nome do contribuinte").css({"cursor":"pointer","font-style":"italic"}).text(elemento.nome_do_contribuinte));  var divHoraDaDenuncia = $("<div>").append($("<p>").attr("title","hora da denuncia da noticia").css({"cursor":"pointer","font-style":"italic"}).text(elemento.hora_da_denuncia));
                var divImageU = $("<div>").append($("<img>").attr("src",`../../../imagens-de-perfil-de-usuarios/${elemento.imagem_do_usuario}`).attr("title","imagem do usuario").css({"cursor":"pointer","width":"70px","border-radius":"50%"}));
                var divNomeU = $("<div>").append($("<p>").attr("title","nome do usuario").css({"cursor":"pointer","font-style":"italic"}).text(elemento.nome_do_usuario));
                var divDenun = $("<div>").append($("<p>").attr("title","denuncia do livro").css({"cursor":"pointer","font-style":"italic","color":"red"}).text(elemento.denuncia_do_usuario));
                var divGenero = $("<div>").append($("<p>").attr("title","genero da noticia").css({"cursor":"pointer","font-style":"italic"}).text(elemento.genero_da_postagem));
                divs.append(
                    divImageC,
                    divNomeC,
                    divImageU,
                    divNomeU,
                    divDenun,
                    divGenero,
                    divDataDaDenuncia,
                    divHoraDaDenuncia
                );
                $("#elemento-scrolling-column-denuncias").append(divs);
            });
        });
    }
}).catch(error => {
    console.log(error);
});

// .on("click",function(){
//     

