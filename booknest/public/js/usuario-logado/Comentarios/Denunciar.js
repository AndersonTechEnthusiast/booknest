axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    axios.get(`/DenunciasVerificadasDoUsuario/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`).then(response => {
        if(response.data.status === 'success')
        {
            $("#denunciar-livros").css("display","none");
            $("#retirar-denuncia-livros").css("display","flex");
        }
        if(response.data.status === 'error')
        {
            // se não for uma array de dados , mostre o "Fazer Denuncia"
            $("#denunciar-livros").css("display","flex");
            $("#retirar-denuncia-livros").css("display","none");
        }

    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    console.log(error);
});
$("#denunciar-livros").on("submit",function(event){event.preventDefault();});
$("#retirar-denuncia-livros").on("submit",function(event){event.preventDefault();});
$("#button-retirar-denuncia").on("click",function(){
    $("#retirar-denuncia-livros").css("display","none");
    $(".loading").css("display","block");
    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
        axios.post(`/RemoverDenuncia/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`).then(response => {
            if(response.data.status === 'success')
            {
                $(".loading").css("display","none");
                $("#denunciar-livros").css("display","flex").on("submit",function(event){event.preventDefault();});
                $("#retirar-denuncia-livros").css("display","none");
            }
            else
            if(response.data.status === 'error')
            {
                console.log(response.data.message);
                $(".loading").css("display","none");
                $("#retirar-denuncia-livros").css("display","block");
                $("#denunciar-livros").css("display","none").on("submit",function(event){event.preventDefault();});
            }
        }).catch(error => {
            console.log(error);
        });
    }).catch(error => {
        console.log(error);
    });
});
$("#button-denunciar").on("submit",function(event){ event.preventDefault(); });
$("#button-denunciar").on("click",function(event){
    event.preventDefault();
    $("body").append(
        $("<div>").attr("id","overlay").css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "width":"100%",
            "height":"100%",
            "background":"rgba(0,0,0,0.7)",
            "cursor":"pointer",
            "z-index":"10"
        }).on("click",function(){
            (this).remove();
            $("#modal").remove();

        }),
        $("<div>").attr("id","modal").css({
            "position":"fixed",
            "top":"50%",
            "left":"50%",
            "transform":"translate(-50% , -50%)",
            "width":"90%",
            "height":"80%",
            "background":"#333",
            "z-index":"11",
            "border-radius":"20px",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center",
            "flex-wrap":"nowrap",
            "flex-direction":"row"
        }).append(
            $("<fieldset>").css({

                "width":"98%",
                "height":"99%",
                "background":"transparent",
                "border":"2px groove red"
            }).append(
                $("<legend>").css({"font-size":"20px","font-style":"italic","font-family":"'Teko',sans-serif","color":"red"}).text(`Denunciar a Postagem ${$("body").find("marquee").text()}`),
                $("<header>").css({"width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"nowrap","flex-direction":"row","font-size":"20px","font-style":"italic","font-family":"'Teko',sans-serif","color":"white"}).append(
                    $("<div>").css({"width":"40%","height":"100%"}).append($("<img>").css({"width":"338px","height":"443px"}).attr("src",$("#curtir-imagem").find("img").attr("src"))),
                    $("<div>").css({"width":"70%","height":"100%","overflow-x":"hidden","overflow-y":"auto"}).append(
                        $("<h4>").append($("<b>").text("Motivo da Denuncia")),
                        $("<form>").append(
                            $("<ul>").css({"list-style-type":"none","margin":"0","padding":"0"}).append(
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo ofensivo").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Conteúdo ofensivo'
                                        }).then(response => {
                                            if(response.data.status === 'error')
                                            { 
                                                console.log(response.data.message);
                                            }
                                            else 
                                            if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo ofensivo");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Discurso de ódio").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Discurso de ódio'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Discurso de ódio");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Informações falsas (Fake News)").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Informações falsas (Fake News)'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Informações falsas (Fake News)");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo impróprio para menores").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Conteúdo impróprio para menores'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo impróprio para menores");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo explícito (violência, pornografia, etc.)").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Conteúdo explícito (violência, pornografia, etc.)'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo explícito (violência, pornografia, etc.)");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo enganoso ou sensacionalista").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Conteúdo enganoso ou sensacionalista'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo enganoso ou sensacionalista");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Incitação ao ódio ou violência").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Incitação ao ódio ou violência'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Incitação ao ódio ou violência");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Apologia a crimes ou atos ilegais").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Apologia a crimes ou atos ilegais'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Apologia a crimes ou atos ilegais");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Violação de direitos autorais").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                            denuncia: 'Violação de direitos autorais'
                                        }).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");

                                            }
                                        }).catch(error => {
                                            console.log("error: Violação de direitos autorais");
                                            console.log(error);
                                            $(".loading").css("display","none");

                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Uso não autorizado de imagem/personalidade").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Uso não autorizado de imagem/personalidade'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                    $(".loading").css("display","none");
                                            }    
                                        }).catch(error => {
                                            console.log("error: Uso não autorizado de imagem/personalidade");
                                            console.log(error);
                                            $(".loading").css("display","none");
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Plágio ou reprodução não autorizada").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Plágio ou reprodução não autorizada'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
    
                                            }
                                        }).catch(error => {
                                            console.log("error: Plágio ou reprodução não autorizada");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Violação de privacidade").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Violação de privacidade'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
    
                                            }
                                        }).catch(error => {
                                            console.log("error: Violação de privacidade");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Bullying ou assédio").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Bullying ou assédio'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Bullying ou assédio");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Discriminação ou preconceito (racismo, sexismo, etc.)").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Discriminação ou preconceito (racismo, sexismo, etc.)'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
    
                                            }
                                        }).catch(error => {
                                            console.log("error: Discriminação ou preconceito (racismo, sexismo, etc.)");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Spam ou publicidade indesejada").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Spam ou publicidade indesejada'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Spam ou publicidade indesejada");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Abuso ou comportamento inadequado").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");
                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Abuso ou comportamento inadequado'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Abuso ou comportamento inadequado");
                                            console.log(error);
                                        })
                                            $(".loading").css("display","none");

                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo irrelevante ou não relacionado ao tópico").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Conteúdo irrelevante ou não relacionado ao tópico'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo irrelevante ou não relacionado ao tópico");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo repetido ou duplicado").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Conteúdo repetido ou duplicado'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo repetido ou duplicado");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Erro factual ou inconsistência").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Erro factual ou inconsistência'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Erro factual ou inconsistência");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Má qualidade ou dificuldade de leitura (gramática, ortografia)").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Má qualidade ou dificuldade de leitura (gramática, ortografia)'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Má qualidade ou dificuldade de leitura (gramática, ortografia)");
                                            console.log(error);
                                        })
                                            $(".loading").css("display","none");

                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Violação de leis locais").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Violação de leis locais'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Violação de leis locais");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Conteúdo que infringe regulamentos governamentais").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Conteúdo que infringe regulamentos governamentais'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Conteúdo que infringe regulamentos governamentais");
                                            console.log(error);
                                        })
                                            $(".loading").css("display","none");

                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append($("<input>").css({"font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","border":"none","outline":"none","width":"100%","text-align":"left","cursor":"pointer"}).attr("type","submit").attr("value","Fraude ou tentativa de engano").on("click",function(){
                                    $(".loading").css("display","block");
                                    $("#denunciar-livros").css("display","none");

                                    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                        axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                        denuncia: 'Fraude ou tentativa de engano'}).then(response => {
                                            if(response.data.status === 'error'){ console.log(response.data.message);}else if (response.data.status === 'success'){
                                                $("#denunciar-livros").css({"display":"none"});
                                                $("#retirar-denuncia-livros").css("display","flex");
                                                $("#overlay").remove();
                                                $("#modal").remove();
                                                $(".loading").css("display","none");
                                            }
                                        }).catch(error => {
                                            console.log("error: Fraude ou tentativa de engano");
                                            console.log(error);
                                        })
                                    }).catch(error => {
                                        console.log(error);
                                    });
                                })),
                                $("<li>").append(
                                    $("<form>").css({"width":"100%","display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"nowrap","flex-direction":"row"}).append(
                                        $("<input>").attr("type","text").css({
                                            "width":"70%",
                                            "border-top":"none",
                                            "border-right":"none",
                                            "border-left":"none",
                                            "border-bottom":"2px groove white",
                                            "width":"500px",
                                            "outline":"none",
                                            "color":"white",
                                            "font-family":"'Teko',sans-serif",
                                            "font-style":"italic",
                                            "font-size":"20px",
                                            "background":"transparent"
                                        }).attr("id","elemento-input-outros-assuntos-de-denuncia").attr("placeholder","Descreva o Motivo da Denuncia , se não achou o Motivo congruente com sua Insatisfação").on("input",function(){
                                            var mascara = $(this).val();
                                            mascara = mascara.replace(/[^a-zA-Z0-9áàâãäÁÀÂÃÄéèêëÉÈÊËíìîïÍÌÎÏóòôõöÓÒÔÕÖúùûüÚÙÛÜýÿÝ ]/g,'');
                                            $(this).val(mascara);
                                        }),
                                        $("<input>").css({"width":"20%","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","background":"transparent","outline":"none","border":"none","cursor":"pointer"}).attr("type","submit").attr("value","fazer denuncia").on("click",function(){
                                            $(".loading").css("display","block");
                                            $("#denunciar-livros").css("display","none");
                                            axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                                                axios.post(`/FazerDenunciaDeUmaPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
                                                denuncia: $("#elemento-input-outros-assuntos-de-denuncia").val()}
                                                ).then(response => {
                                                    if(response.data.status === 'error'){ 
                                                        console.log(response.data.message);
                                                    }else
                                                    if (response.data.status === 'success')
                                                        {
                                                        $("#denunciar-livros").css({"display":"none"});
                                                        $("#retirar-denuncia-livros").css("display","flex");
                                                        $("#overlay").remove();
                                                        $("#modal").remove();
                                                        $(".loading").css("display","none");
                                                    }
                                                }).catch(error => {
                                                    console.log("error: Error ao tentar enviar outra resposta não cadastrada");
                                                    console.log(error);
                                                })
                                            $(".loading").css("display","none");

                                            }).catch(error => {
                                                console.log(error);
                                            });
                                        })
                                    ).on("submit",function(event){event.preventDefault();})
                                ),
                            )
                        ).on("submit",function(event){
                            event.preventDefault();
                        })
                    )
                )
            )
        )
    )
})