$(".form-poster-adm").each(function(index , elemento){
    $(elemento).on("submit", function(event){
        event.preventDefault();
    });
});
$(".excluir-post-content-postagem-contribuinte").each(function(index , elemento){
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
                        }).on("click", function(){
                            $(this).remove();
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
                                        $("<ul>").append(
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conteúdo inapropriado.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                                
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conteúdo ilegal.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Fake news.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Violação de diretrizes da plataforma.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Plágio.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Erro de publicação.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conteúdo duplicado.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Problemas de formatação.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Remoção solicitada pelo autor.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Retirada por direitos de autor.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Pedido de remoção por terceiros.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conflito de interesses.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Desatualização.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Expiração do prazo.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Alterações nas políticas do site.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                        Swal.fire({
                                                            title: error.response.data.errors,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Baixa relevância ou engajamento.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            }))
                                        )
                                    )
                                )
                            )
                        )
                    )
                }).catch(error => {
                    if(error.response.data.message){
                        Swal.fire({
                            title: error.response.data.message,
                            icon: 'error',
                            draggable: true
                        })
                    }
                    if(error.response.data.errors)
                    {
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: 'error',
                        draggable: true
                    })}
                });
            }
        }).catch(error => {
            if(error.response.data.message){
                Swal.fire({
                    title: error.response.data.message,
                    icon: 'error',
                    draggable: true
                })
            }
            if(error.response.data.errors)
            {
            Swal.fire({
                title: error.response.data.errors,
                icon: 'error',
                draggable: true
            })}
        });
    });
});
$(".button-table-excluir").each(function(index , elemento){
    $(elemento).on("click",function(){
        var id = atob($(this).attr("aria-label")).charCodeAt(0);
        var titulo = $(this).closest("td").closest("tr").find("td").eq(1).text();
        var content = $(this).closest("td").closest("tr");
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
                        }).on("click", function(){
                            $(this).remove();
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
                                        $("<ul>").append(
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conteúdo inapropriado.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                                
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conteúdo ilegal.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Fake news.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Violação de diretrizes da plataforma.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Plágio.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Erro de publicação.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conteúdo duplicado.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Problemas de formatação.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Remoção solicitada pelo autor.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Retirada por direitos de autor.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Pedido de remoção por terceiros.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Conflito de interesses.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Desatualização.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Expiração do prazo.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Alterações nas políticas do site.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            })),
                                            $("<li>").append($("<input>").attr("type","submit").css({"outline":"none","border":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("value","Baixa relevância ou engajamento.").on("click",function(event){
                                                event.preventDefault();
                                                axios.post('/DelecaoDaPostagem/',{
                                                    id: id,
                                                    acao: 'deletar',
                                                    motivo: $(this).attr("value")
                                                }).then(response => {
                                                    if(response.data.status === 'success')
                                                    {
                                                        content.remove();
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
                                                            icon: "error",
                                                            draggable: true
                                                        });
                                                    }
                                                }).catch(error => {
                                                    if(error.response.data.message){
                                                        Swal.fire({
                                                            title: error.response.data.message,
                                                            icon: 'error',
                                                            draggable: true
                                                        })
                                                    }
                                                    if(error.response.data.errors)
                                                    {
                                                    Swal.fire({
                                                        title: error.response.data.errors,
                                                        icon: 'error',
                                                        draggable: true
                                                    })}
                                                });
                                            }))
                                        )
                                    )
                                )
                            )
                        )
                    )
                }).catch(error => {
                    if(error.response.data.message){
                        Swal.fire({
                            title: error.response.data.message,
                            icon: 'error',
                            draggable: true
                        })
                    }
                    if(error.response.data.errors)
                    {
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: 'error',
                        draggable: true
                    })}
                });
            }
        }).catch(error => {
            if(error.response.data.message){
                Swal.fire({
                    title: error.response.data.message,
                    icon: 'error',
                    draggable: true
                })
            }
            if(error.response.data.errors)
            {
            Swal.fire({
                title: error.response.data.errors,
                icon: 'error',
                draggable: true
            })}
        });
    });
});