$(".form-poster-adm").each(function(index , elemento){
    $(elemento).on("submit", function(event){
        event.preventDefault();
    });
});
$(".editar-post-content-postagem-contribuinte").each(function(index , elemento){
    $(elemento).on("click",function(event){
        event.preventDefault();
        var id = atob($(this).attr("aria-label")).charCodeAt(0);
        var titulo = $(this).closest(".form-poster-adm").closest("li").closest("ul").closest(".back").closest(".posts-views-category").closest(".posts-link-reedirect").find(".posts-views-category").find(".front").find(".title").text();
        var content = $(this).closest(".form-poster-adm").closest("li").closest("ul").closest(".back").closest(".posts-views-category").closest(".posts-link-reedirect");
        axios.get(`/Postagem/${id}`).then(response => {
            if(response.data.status === 'error')
            {
                console.log(response.data.message);
            }
            else
            {
                fetch("../../../publicacao/"+response.data.imagem).then(response_image => {
                    $("body").append(
                        $("<div>").attr("id","overlay").css({
                            "position":"fixed",
                            "top":"0",
                            "left":"0",
                            "width":"100%",
                            "height":"100%",
                            "background":"rgba(0,0,0,0.7)",
                            "z-index":"20",
                            "cursor":"pointer"
                        }).on("click",function(){
                            $(this).remove(),
                            $("#modal").remove();
                        }),
                        $("<div>").attr("id","modal").css({
                            "position":"fixed",
                            "top":"50%",
                            "left":"50%",
                            "transform":"translate(-50%,-50%)",
                            "width":"60%",
                            "height":"80%",
                            "background":"#333",
                            "border-radius":"10px",
                            "border":"none",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"wrap",
                            "flex-direction":"row",
                            "align-content":"flex-start",
                            "font-size":"35px",
                            "font-family":"'Teko',sans-serif",
                            "font-style":"italic",
                            "color":"white",
                            "z-index":"21"
                        }).append(
                            $("<fieldset>").css({
                                "width":"98%",
                                "height":"99%",
                                "border":"2px groove white",
                                "border-radius":"10px",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-around",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "padding":"0",
                                "margin":"0"
                            }).append(
                                $("<legend>").text(titulo),
                                $("<div>").css({
                                    "width":"100%",
                                    "height":"90%",
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"space-around",
                                    "flex-wrap":"nowrap",
                                    "flex-direction":"row"
                                }).append(
                                    $("<div>").css({
                                        "width":"30%",
                                        "height":"100%",
                                    }).append(
                                        $("<img>").css({
                                            "width":"100%",
                                            "height":"100%"
                                        }).attr("src",response_image.url)
                                    ),
                                    $("<div>").css({
                                        "width":"70%",
                                        "height":"100%",
                                        "overflow-y":"auto",
                                        "overflow-x":"hidden"
                                    }).append(
                                        $("<form>").attr("method","POST").attr("action","#").append(
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("titulo"),
                                                $("<input>").attr("id","titulo").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira o titulo a ser editado").prop("required",true).attr("value",response.data.titulo).on("input",function(){
                                                    var mascara = $(this).val();
                                                    mascara = mascara.slice(0,40);
                                                    mascara = mascara.replace(/[^a-zA-Z0-9AaÁáÀàÂâÃãÄäEeÉéÈèÊêËëIiÍíÌìÎîÏïOoÓóÒòÔôÕõÖöUuÚúÙùÛûÜüYyÝýỲỳŶŷŸÿ ]/g , '');
                                                    $(this).val(mascara);
                                                })
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("sinopse"),
                                                $("<input>").attr("id","sinopse").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira a sinopse").prop("required",true).attr("value",response.data.sinopse).on("input",function(){
                                                    var mascara = $(this).val();
                                                    mascara = mascara.slice(0,1000);
                                                    mascara = mascara.replace(/[^a-zA-Z0-9AaÁáÀàÂâÃãÄäEeÉéÈèÊêËëIiÍíÌìÎîÏïOoÓóÒòÔôÕõÖöUuÚúÙùÛûÜüYyÝýỲỳŶŷŸÿ ]/g , '');
                                                    $(this).val(mascara);
                                                })
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("genero"),
                                                $("<input>").attr("id","genero").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira o genero a ser editado").prop("required",true).attr("value",response.data.genero).attr("list","list-genero").on("input",function(){
                                                    var mascara = $(this).val();
                                                    var generos = ['Ficção','Não-Ficção','Poesia','Drama','Conto','Infantojuvenil','Novela Gráfica','Humor','Guias de Viagem','Ensaios'];
                                                    if(!generos.includes(mascara))
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"none"});
                                                    }
                                                    else
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"flex"});
                                                    }
                                                }),
                                                $("<datalist>").attr("id","list-genero").append(
                                                    $("<option>").attr('value','Ficção').text('Ficção'),
                                                    $("<option>").attr('value','Não-Ficção').text('Não-Ficção'),
                                                    $("<option>").attr('value','Poesia').text('Poesia'),
                                                    $("<option>").attr('value','Drama').text('Drama'),
                                                    $("<option>").attr('value','Conto').text('Conto'),
                                                    $("<option>").attr('value','Infantojuvenil').text('Infantojuvenil'),
                                                    $("<option>").attr('value','Novela Gráfica').text('Novela Gráfica'),
                                                    $("<option>").attr('value','Humor').text('Humor'),
                                                    $("<option>").attr('value','Guias de Viagem').text('Guias de Viagem'),
                                                    $("<option>").attr('value','Ensaios').text('Ensaios'),
                                                )
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("classificação"),
                                                $("<input>").attr("id","classificacao").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira a classificação a ser editada").prop("required",true).attr("value",response.data.classificacao).attr("list","list-classificacao").on("input",function(){
                                                    var mascara = $(this).val();
                                                    var classificacao = ['+18','+16','+14','+12','+10','Livre'];
                                                    if(!classificacao.includes(mascara))
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"none"});
                                                    }
                                                    else
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"flex"});
                                                    }
                                                }),
                                                $("<datalist>").attr("id","list-classificacao").append(
                                                    $("<option>").attr("value","+18").text("+18"),
                                                    $("<option>").attr("value","+16").text("+16"),
                                                    $("<option>").attr("value","+14").text("+14"),
                                                    $("<option>").attr("value","+12").text("+12"),
                                                    $("<option>").attr("value","+10").text("+10"),
                                                    $("<option>").attr("value","livre").text("Livre")
                                                )
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("motivo da Edição da Postagem"),
                                                $("<input>").attr("id","motivo").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira a classificação a ser editada").prop("required",true).attr("list","list-motivos").on("input",function(){
                                                    var mascara = $(this).val();
                                                    var motivos = ['Violação de normas de conteúdo (ex.: discurso de ódio, assédio, discriminação)','Erros ortográficos ou gramaticais','Conteúdo desatualizado ou impreciso','Informações falsas ou enganosas','Violação de direitos autorais (conteúdo plagiado)','Conteúdo inapropriado (ex.: imagens ou textos ofensivos)','Necessidade de ajustes na formatação','Requisição do autor para alterações ou correções','Conteúdo inadequado para o público-alvo','Alteração de links ou informações de contato desatualizadas','Correção de erros de contexto ou dados','Adequação a normas legais ou políticas da plataforma','Exclusão de material irrelevante ou redundante','Ajuste na categorização da postagem','Adição ou remoção de tags ou categorias','Melhora na clareza ou apresentação do conteúdo','Garantia de conformidade com diretrizes editoriais','Exclusão de material confidencial ou privado','Ajuste no tom ou linguagem do conteúdo','Alteração de informações sensíveis (como preços ou datas)'];
                                                    if(!motivos.includes(mascara))
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"none"});
                                                    }
                                                    else
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"flex"});
                                                    }
                                                }),
                                                $("<datalist>").attr("id","list-motivos").append(
                                                    $("<option>").attr('value','Violação de normas de conteúdo (ex.: discurso de ódio, assédio, discriminação)').text("Violação de normas de conteúdo (ex.: discurso de ódio, assédio, discriminação)"),
                                                    $("<option>").attr('value','Erros ortográficos ou gramaticais').text("Erros ortográficos ou gramaticais"),
                                                    $("<option>").attr('value','Conteúdo desatualizado ou impreciso').text("Conteúdo desatualizado ou impreciso"),
                                                    $("<option>").attr('value','Informações falsas ou enganosas').text("Informações falsas ou enganosas"),
                                                    $("<option>").attr('value','Violação de direitos autorais (conteúdo plagiado)').text("Violação de direitos autorais (conteúdo plagiado)"),
                                                    $("<option>").attr('value','Conteúdo inapropriado (ex.: imagens ou textos ofensivos)').text("Conteúdo inapropriado (ex.: imagens ou textos ofensivos)"),
                                                    $("<option>").attr('value','Necessidade de ajustes na formatação').text("Necessidade de ajustes na formatação"),
                                                    $("<option>").attr('value','Requisição do autor para alterações ou correções').text("Requisição do autor para alterações ou correções"),
                                                    $("<option>").attr('value','Conteúdo inadequado para o público-alvo').text("Conteúdo inadequado para o público-alvo"),
                                                    $("<option>").attr('value','Alteração de links ou informações de contato desatualizadas').text("Alteração de links ou informações de contato desatualizadas"),
                                                    $("<option>").attr('value','Correção de erros de contexto ou dados').text("Correção de erros de contexto ou dados"),
                                                    $("<option>").attr('value','Adequação a normas legais ou políticas da plataforma').text("Adequação a normas legais ou políticas da plataforma"),
                                                    $("<option>").attr('value','Exclusão de material irrelevante ou redundante').text("Exclusão de material irrelevante ou redundante"),
                                                    $("<option>").attr('value','Ajuste na categorização da postagem').text("Ajuste na categorização da postagem"),
                                                    $("<option>").attr('value','Adição ou remoção de tags ou categorias').text("Adição ou remoção de tags ou categorias"),
                                                    $("<option>").attr('value','Melhora na clareza ou apresentação do conteúdo').text("Melhora na clareza ou apresentação do conteúdo"),
                                                    $("<option>").attr('value','Garantia de conformidade com diretrizes editoriais').text("Garantia de conformidade com diretrizes editoriais"),
                                                    $("<option>").attr('value','Exclusão de material confidencial ou privado').text("Exclusão de material confidencial ou privado"),
                                                    $("<option>").attr('value','Ajuste no tom ou linguagem do conteúdo').text("Ajuste no tom ou linguagem do conteúdo"),
                                                    $("<option>").attr('value','Alteração de informações sensíveis (como preços ou datas)').text("Alteração de informações sensíveis (como preços ou datas)"),
                                                )
                                            ),
                                            $("<div>").attr("id","container-submit-edited-dados").css({"display":"flex","align-items":"center","justify-content":"center","width":"100%","text-align":"center"}).append(
                                                $("<input>").css({
                                                    "width":"300px",
                                                    "height":"40px",
                                                    "display":"flex",
                                                    "align-items":"center",
                                                    "justify-content":"center",
                                                    "flex-wrap":"nowrap",
                                                    "flex-direction":"row",
                                                    "font-family":"'Montserrat',sans-serif",
                                                    "color":"white",
                                                    "background":"transparent",
                                                    "cursor":"pointer",
                                                    "border":"none",
                                                }).attr("type","submit").attr("value","editar dados").on("click",function(){
                                                    axios.post('/DelecaoDaPostagem/',{
                                                        id: id,
                                                        acao: 'editar',
                                                        motivo: $("#motivo").val(),
                                                        titulo: $("#titulo").val(),
                                                        sinopse: $("#sinopse").val(),
                                                        genero: $("#genero").val(),
                                                        classificacao: $("#classificacao").val()
                                                    }).then(response => {
                                                        if(response.data.status === 'success')
                                                        {
                                                            Swal.fire({
                                                                title: response.data.message,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                        else
                                                        if(response.data.status === 'error')
                                                        {
                                                            Swal.fire({
                                                                title: response.data.message,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                    }).catch(error => {
                                                        if(error.response.data.message)
                                                        {
                                                            Swal.fire({
                                                                title: error.response.data.message,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                        if(error.response.data.errors)
                                                        {
                                                            Swal.fire({
                                                                title: error.response.data.errors,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                        
                                                    });
                                                })
                                            )
                                        ).on("submit",function(event){
                                            event.preventDefault();
                                        })
                                    )
                                )
                            )
                        )
                    )
                }).catch(error => {
                    console.log(error);
                });
            }
        }).catch(error => {
            console.log(error);
        });
    });
});
$(".button-table-editar").each(function(index , elemento){
    $(elemento).on("click",function(event){
        event.preventDefault();
        var id = atob($(this).attr("aria-label")).charCodeAt(0);
        var titulo = $(this).closest("td").closest("tr").find("td").eq(1).text();
        axios.get(`/Postagem/${id}`).then(response => {
            if(response.data.status === 'error')
            {
                console.log(response.data.message);
            }
            else
            {
                fetch("../../../publicacao/"+response.data.imagem).then(response_image => {
                    $("body").append(
                        $("<div>").attr("id","overlay").css({
                            "position":"fixed",
                            "top":"0",
                            "left":"0",
                            "width":"100%",
                            "height":"100%",
                            "background":"rgba(0,0,0,0.7)",
                            "z-index":"20",
                            "cursor":"pointer"
                        }).on("click",function(){
                            $(this).remove(),
                            $("#modal").remove();
                        }),
                        $("<div>").attr("id","modal").css({
                            "position":"fixed",
                            "top":"50%",
                            "left":"50%",
                            "transform":"translate(-50%,-50%)",
                            "width":"60%",
                            "height":"80%",
                            "background":"#333",
                            "border-radius":"10px",
                            "border":"none",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"wrap",
                            "flex-direction":"row",
                            "align-content":"flex-start",
                            "font-size":"35px",
                            "font-family":"'Teko',sans-serif",
                            "font-style":"italic",
                            "color":"white",
                            "z-index":"21"
                        }).append(
                            $("<fieldset>").css({
                                "width":"98%",
                                "height":"99%",
                                "border":"2px groove white",
                                "border-radius":"10px",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"space-around",
                                "flex-wrap":"nowrap",
                                "flex-direction":"column",
                                "padding":"0",
                                "margin":"0"
                            }).append(
                                $("<legend>").text(titulo),
                                $("<div>").css({
                                    "width":"100%",
                                    "height":"90%",
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"space-around",
                                    "flex-wrap":"nowrap",
                                    "flex-direction":"row"
                                }).append(
                                    $("<div>").css({
                                        "width":"30%",
                                        "height":"100%",
                                    }).append(
                                        $("<img>").css({
                                            "width":"100%",
                                            "height":"100%"
                                        }).attr("src",response_image.url)
                                    ),
                                    $("<div>").css({
                                        "width":"70%",
                                        "height":"100%",
                                        "overflow-y":"auto",
                                        "overflow-x":"hidden"
                                    }).append(
                                        $("<form>").attr("method","POST").attr("action","#").append(
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("titulo"),
                                                $("<input>").attr("id","titulo").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira o titulo a ser editado").prop("required",true).attr("value",response.data.titulo).on("input",function(){
                                                    var mascara = $(this).val();
                                                    mascara = mascara.slice(0,40);
                                                    mascara = mascara.replace(/[^a-zA-Z0-9AaÁáÀàÂâÃãÄäEeÉéÈèÊêËëIiÍíÌìÎîÏïOoÓóÒòÔôÕõÖöUuÚúÙùÛûÜüYyÝýỲỳŶŷŸÿ ]/g , '');
                                                    $(this).val(mascara);
                                                })
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("sinopse"),
                                                $("<input>").attr("id","sinopse").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira a sinopse").prop("required",true).attr("value",response.data.sinopse).on("input",function(){
                                                    var mascara = $(this).val();
                                                    mascara = mascara.slice(0,1000);
                                                    mascara = mascara.replace(/[^a-zA-Z0-9AaÁáÀàÂâÃãÄäEeÉéÈèÊêËëIiÍíÌìÎîÏïOoÓóÒòÔôÕõÖöUuÚúÙùÛûÜüYyÝýỲỳŶŷŸÿ ]/g , '');
                                                    $(this).val(mascara);
                                                })
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("genero"),
                                                $("<input>").attr("id","genero").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira o genero a ser editado").prop("required",true).attr("value",response.data.genero).attr("list","list-genero").on("input",function(){
                                                    var mascara = $(this).val();
                                                    var generos = ['Ficção','Não-Ficção','Poesia','Drama','Conto','Infantojuvenil','Novela Gráfica','Humor','Guias de Viagem','Ensaios'];
                                                    if(!generos.includes(mascara))
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"none"});
                                                    }
                                                    else
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"flex"});
                                                    }
                                                }),
                                                $("<datalist>").attr("id","list-genero").append(
                                                    $("<option>").attr('value','Ficção').text('Ficção'),
                                                    $("<option>").attr('value','Não-Ficção').text('Não-Ficção'),
                                                    $("<option>").attr('value','Poesia').text('Poesia'),
                                                    $("<option>").attr('value','Drama').text('Drama'),
                                                    $("<option>").attr('value','Conto').text('Conto'),
                                                    $("<option>").attr('value','Infantojuvenil').text('Infantojuvenil'),
                                                    $("<option>").attr('value','Novela Gráfica').text('Novela Gráfica'),
                                                    $("<option>").attr('value','Humor').text('Humor'),
                                                    $("<option>").attr('value','Guias de Viagem').text('Guias de Viagem'),
                                                    $("<option>").attr('value','Ensaios').text('Ensaios'),
                                                )
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("classificação"),
                                                $("<input>").attr("id","classificacao").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira a classificação a ser editada").prop("required",true).attr("value",response.data.classificacao).attr("list","list-classificacao").on("input",function(){
                                                    var mascara = $(this).val();
                                                    var classificacao = ['+18','+16','+14','+12','+10','Livre'];
                                                    if(!classificacao.includes(mascara))
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"none"});
                                                    }
                                                    else
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"flex"});
                                                    }
                                                }),
                                                $("<datalist>").attr("id","list-classificacao").append(
                                                    $("<option>").attr("value","+18").text("+18"),
                                                    $("<option>").attr("value","+16").text("+16"),
                                                    $("<option>").attr("value","+14").text("+14"),
                                                    $("<option>").attr("value","+12").text("+12"),
                                                    $("<option>").attr("value","+10").text("+10"),
                                                    $("<option>").attr("value","livre").text("Livre")
                                                )
                                            ),
                                            $("<fieldset>").css({
                                                "padding":"0",
                                                "margin":"20px auto",
                                                "width":"100%",
                                                "max-width":"80%",
                                            }).append(
                                                $("<legend>").text("motivo da Edição da Postagem"),
                                                $("<input>").attr("id","motivo").css({"width":"100%","height":"100%","border":"none","outline":"none","font-family":"'Montserrat',sans-serif","color":"white","background":"transparent"}).attr("type","text").attr("placeholder","insira a classificação a ser editada").prop("required",true).attr("list","list-motivos").on("input",function(){
                                                    var mascara = $(this).val();
                                                    var motivos = ['Violação de normas de conteúdo (ex.: discurso de ódio, assédio, discriminação)','Erros ortográficos ou gramaticais','Conteúdo desatualizado ou impreciso','Informações falsas ou enganosas','Violação de direitos autorais (conteúdo plagiado)','Conteúdo inapropriado (ex.: imagens ou textos ofensivos)','Necessidade de ajustes na formatação','Requisição do autor para alterações ou correções','Conteúdo inadequado para o público-alvo','Alteração de links ou informações de contato desatualizadas','Correção de erros de contexto ou dados','Adequação a normas legais ou políticas da plataforma','Exclusão de material irrelevante ou redundante','Ajuste na categorização da postagem','Adição ou remoção de tags ou categorias','Melhora na clareza ou apresentação do conteúdo','Garantia de conformidade com diretrizes editoriais','Exclusão de material confidencial ou privado','Ajuste no tom ou linguagem do conteúdo','Alteração de informações sensíveis (como preços ou datas)'];
                                                    if(!motivos.includes(mascara))
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"none"});
                                                    }
                                                    else
                                                    {
                                                        $("#container-submit-edited-dados").css({"display":"flex"});
                                                    }
                                                }),
                                                $("<datalist>").attr("id","list-motivos").append(
                                                    $("<option>").attr('value','Violação de normas de conteúdo (ex.: discurso de ódio, assédio, discriminação)').text("Violação de normas de conteúdo (ex.: discurso de ódio, assédio, discriminação)"),
                                                    $("<option>").attr('value','Erros ortográficos ou gramaticais').text("Erros ortográficos ou gramaticais"),
                                                    $("<option>").attr('value','Conteúdo desatualizado ou impreciso').text("Conteúdo desatualizado ou impreciso"),
                                                    $("<option>").attr('value','Informações falsas ou enganosas').text("Informações falsas ou enganosas"),
                                                    $("<option>").attr('value','Violação de direitos autorais (conteúdo plagiado)').text("Violação de direitos autorais (conteúdo plagiado)"),
                                                    $("<option>").attr('value','Conteúdo inapropriado (ex.: imagens ou textos ofensivos)').text("Conteúdo inapropriado (ex.: imagens ou textos ofensivos)"),
                                                    $("<option>").attr('value','Necessidade de ajustes na formatação').text("Necessidade de ajustes na formatação"),
                                                    $("<option>").attr('value','Requisição do autor para alterações ou correções').text("Requisição do autor para alterações ou correções"),
                                                    $("<option>").attr('value','Conteúdo inadequado para o público-alvo').text("Conteúdo inadequado para o público-alvo"),
                                                    $("<option>").attr('value','Alteração de links ou informações de contato desatualizadas').text("Alteração de links ou informações de contato desatualizadas"),
                                                    $("<option>").attr('value','Correção de erros de contexto ou dados').text("Correção de erros de contexto ou dados"),
                                                    $("<option>").attr('value','Adequação a normas legais ou políticas da plataforma').text("Adequação a normas legais ou políticas da plataforma"),
                                                    $("<option>").attr('value','Exclusão de material irrelevante ou redundante').text("Exclusão de material irrelevante ou redundante"),
                                                    $("<option>").attr('value','Ajuste na categorização da postagem').text("Ajuste na categorização da postagem"),
                                                    $("<option>").attr('value','Adição ou remoção de tags ou categorias').text("Adição ou remoção de tags ou categorias"),
                                                    $("<option>").attr('value','Melhora na clareza ou apresentação do conteúdo').text("Melhora na clareza ou apresentação do conteúdo"),
                                                    $("<option>").attr('value','Garantia de conformidade com diretrizes editoriais').text("Garantia de conformidade com diretrizes editoriais"),
                                                    $("<option>").attr('value','Exclusão de material confidencial ou privado').text("Exclusão de material confidencial ou privado"),
                                                    $("<option>").attr('value','Ajuste no tom ou linguagem do conteúdo').text("Ajuste no tom ou linguagem do conteúdo"),
                                                    $("<option>").attr('value','Alteração de informações sensíveis (como preços ou datas)').text("Alteração de informações sensíveis (como preços ou datas)"),
                                                )
                                            ),
                                            $("<div>").attr("id","container-submit-edited-dados").css({"display":"flex","align-items":"center","justify-content":"center","width":"100%","text-align":"center"}).append(
                                                $("<input>").css({
                                                    "width":"300px",
                                                    "height":"40px",
                                                    "display":"flex",
                                                    "align-items":"center",
                                                    "justify-content":"center",
                                                    "flex-wrap":"nowrap",
                                                    "flex-direction":"row",
                                                    "font-family":"'Montserrat',sans-serif",
                                                    "color":"white",
                                                    "background":"transparent",
                                                    "cursor":"pointer",
                                                    "border":"none",
                                                }).attr("type","submit").attr("value","editar dados").on("click",function(){
                                                    axios.post('/DelecaoDaPostagem/',{
                                                        id: id,
                                                        acao: 'editar',
                                                        motivo: $("#motivo").val(),
                                                        titulo: $("#titulo").val(),
                                                        sinopse: $("#sinopse").val(),
                                                        genero: $("#genero").val(),
                                                        classificacao: $("#classificacao").val()
                                                    }).then(response => {
                                                        if(response.data.status === 'success')
                                                        {
                                                            Swal.fire({
                                                                title: response.data.message,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                        else
                                                        if(response.data.status === 'error')
                                                        {
                                                            Swal.fire({
                                                                title: response.data.message,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                    }).catch(error => {
                                                        if(error.response.data.message)
                                                        {
                                                            Swal.fire({
                                                                title: error.response.data.message,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                        if(error.response.data.errors)
                                                        {
                                                            Swal.fire({
                                                                title: error.response.data.errors,
                                                                icon: "success",
                                                                draggable: true
                                                            });
                                                        }
                                                        
                                                    });
                                                })
                                            )
                                        ).on("submit",function(event){
                                            event.preventDefault();
                                        })
                                    )
                                )
                            )
                        )
                    )
                }).catch(error => {
                    console.log(error);
                });
            }
        }).catch(error => {
            console.log(error);
        });
    });
});