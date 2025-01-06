import * as pdfjsLib from '../../../PDFjs/build/pdf.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = '../../../PDFjs/build/pdf.worker.mjs';
axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    if(response.data.status === 'error')
    {
        alert(response.data.message);
    }
    var file = response.data.conteudo;
    // fetch -> busca requisições
    // then -> retorna algo , 
    // (response => response.blob) -> transforma o que retornou em blob
    // blob retornado
    fetch(`../../../livros/${file}`).then(response => response.blob()).then(blob => {
        // verifica o blob
        if(blob){
            
            var LeitorDoPDF = new FileReader();

            LeitorDoPDF.onload = function() {
                
                var TipoDaArray = new Uint8Array(LeitorDoPDF.result);

                var BibliotecaDoJavaScriptPDF = pdfjsLib.getDocument(TipoDaArray);

                BibliotecaDoJavaScriptPDF.promise.then(function(pdf) {
                    let contadorDePaginas = 0;
                    let pagesNumeros = pdf.numPages;
                    for (let PDFPages = 1; PDFPages <= pdf.numPages; PDFPages++) {
                        pdf.getPage(PDFPages).then(function(pages) {

                            var PaginasPDF = $("<canvas>").addClass("paginas-PDF-dashboards-conteudo").css({'position':'absolute','top':'0','left':'100%','width':'100%','height':'100%','transition': '1s'});
                            
                            PaginasPDF[0].getContext("2d");
                            
                            var view = pages.getViewport({ scale: 1 });
                           
                            PaginasPDF[0].width = view.width;
                           
                            PaginasPDF[0].height = view.height;
                           
                            $("#ver-conteudo").append(PaginasPDF);
                           
                            var Rederização = {
                           
                                canvasContext: PaginasPDF[0].getContext("2d"),
                           
                                viewport: view
                            };
                           
                            pages.render(Rederização).promise.then(() => {
                                contadorDePaginas++;
                                if(contadorDePaginas === pagesNumeros)
                                {
                                    $("#tela-de-carregamento-PDF").remove();
                                    $(".paginas-PDF-dashboards-conteudo").first().addClass("active").css("left","0");
                                    $(".paginas-PDF-dashboards-conteudo").each(function(index , elemento){
                                        $(elemento).on("mouseenter",function(){
                                            $("#prev-button").css("left","0").on("mouseenter",function(){$(this).css("left","0"); $("#next-button").css("left","76%");}).on("mouseleave",function(){$(this).css("left","-100%"); $("#next-button","100%");});
                                            $("#next-button").css("left","76%").on("mouseenter",function(){$(this).css("left","76%"); $("#prev-button").css("left","0")}).on("mouseleave",function(){$(this).css("left","100%"); $("#prev-button","-100%")});
                                        });
                                        $(elemento).on("mouseleave",function(){
                                            $("#prev-button").css("left","-100%");
                                            $("#next-button").css("left","100%");
                                        });
                                    });
                                    $("#backgroud-loading").css("display","none");
                                    var ButtonClickNexts = 0;
                                    $("#next-button").on("click",function(){
                                        ButtonClickNexts++;
                                        $(".paginas-PDF-dashboards-conteudo").each(function(index , elemento){
                                            $(elemento).removeClass("active");
                                            $(elemento).css("left","100%");
                                        });
                                        if(ButtonClickNexts === $(".paginas-PDF-dashboards-conteudo").length)
                                        {
                                            ButtonClickNexts = 0;
                                        }
                                        $(".paginas-PDF-dashboards-conteudo").eq(ButtonClickNexts).css("left","0");
                                    });
                                    $("#prev-button").on("click",function(){
                                        ButtonClickNexts--;
                                        $(".paginas-PDF-dashboards-conteudo").each(function(index , elemento){
                                            $(elemento).removeClass("active");
                                            $(elemento).css("left","100%");
                                        });
                                        if(ButtonClickNexts < 0)
                                        {
                                            ButtonClickNexts = Math.round(parseInt($(".paginas-PDF-dashboards-conteudo").length) - 1);
                                        }
                                        $(".paginas-PDF-dashboards-conteudo").eq(ButtonClickNexts).css("left","0");
                                    });
                                }
                            }).catch(error => {
                                alert(error);
                            });
                        });
                        
                    }
                });
            };
            
            LeitorDoPDF.readAsArrayBuffer(blob);
        }
    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    alert(error);
});
// Requisiçao para Comentarios
axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    if(response.data.status === 'error')
    {
        $("body").append(
            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}).on('click',function(){
                $(this).remove();
                $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                setTimeout(function(){
                    $("#modal-response-json").remove();
                }, 500);
            }),
            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                $("<div>").append(
                    $("<span>").text(response.data.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                )
            ),
        );
        setTimeout(function(){
            $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
        },500)
        $("#overley-json-response").on("click",function(){
            $(this).remove();
            $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
            setTimeout(function(){
                $("#modal-response-json").remove();
            }, 500);
        });
    }
}).catch(error => {
    alert(error);
});
$("#comentar").css({
    "width":"100%",
}).append(
    $("<form>").css({
        "width":"100%",
        "background":"#181818",
        "display":"flex",
        "align-items":"center",
        "justify-content":"space-around",
        "flex-wrap":"nowrap",
        "flex-direction":"row"
    }).append(
        $("<img>").css({"width":"50px"}).attr("src","../../../img/welcome/Logo.png"),
        $("<input>").attr("type","text").attr("id","input-comentar").attr("name","comentario").attr("placeholder","Insira seu Comentario...").css({
            "width":"100%",
            "height":"50px",
            "background":$("body").css("background"),
            "color":"white",
            "font-family":"'Montserrat',sans-serif",
            "outline":"none",
            "border":"2px groove white",
            "padding":"10px",
            "border-radius":"50px"
        }),
        $("<button>").attr("type","submit").attr("id","submit").css({
            "background":"transparent",
            "color":"white",
            "font-size":"20px",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center",
            "flex-wrap":"nowrap",
            "flex-direction":"row",
            "border":"none",
            "cursor":"pointer",
            "width":"100px",
            "height":"100px"
        }).append(
            $("<i>").addClass("fa fa-paper-plane").attr("id","icone-send")
        )
    ).on("submit",function(event){
        event.preventDefault();
    })
);
$("#input-comentar").on("input",function(){
    var mascara = $(this).val();
    mascara = mascara.replace(/[^a-zA-Z0-9àáâãéêíÀÁÂÃÉÊÍÒÓÔÕÚ ]/g,'');
    $(this).val(mascara);
});
$("#submit").on("click",function(){
    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
        axios.post(`/Comentar/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
            comentario: $("#input-comentar").val()
        }).then(response => {
            if(response.data.status === 'success')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.data.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","opacity":"1"});
                }, 500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
                axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
                    if(response.data.status === 'error')
                    {
                        alert(response.data.message);
                    }
                    axios.get(`/Comenterios/${parseInt(response.data.id)}`).then(response => {
                        if(response.data.length > 0)
                        {
                            $("#comenter").text(" ");
                            response.data.forEach(function(Array){
                               var content = $("<div>");
                               var rodape = $("<div>");
                               var user = $("<div>");
                               var Foto = $("<img>");
                               var name = $("<p>");
                               var data = $("<p>");
                               var hora = $("<p>");
                               var comenter = $("<div>");
                               content.css({
                                   "min-width":"99%",
                                   "min-height":"200px",
                                   "padding":"5px",
                                   "box-shadow":"0px 0px 0px 10px white",
                                   "display":"flex",
                                   "align-items":"center",
                                   "justify-content":"space-around",
                                   "flex-direction":"column",
                                   "flex-wrap":"nowrap",
                                   "margin":"60px 0"
                               }); 
                               user.css({
                                   "width":"100%",
                                   "height":"20px",
                                   "display":"flex",
                                   "align-items":"center",
                                   "justify-content":"space-around",
                                   "flex-wrap":"nowrap",
                                   "flex-direction":"row",
                                   "margin":"20px 0"
                               });
                
                               Foto.css({
                                   "width":"50px",
                                   "height":"50px",
                                   "border-radius":"50%",
                               });
                
                               comenter.css({
                                   "width":"100%",
                                   "height":"60px",
                                   "overflow":"hidden",
                                   "display":"flex",
                                   "align-items":"center",
                                   "justify-content":"center",
                                   "flex-wrap":"nowrap",
                                   "flex-direction":"row"
                               });
                
                               rodape.css({
                                   "width":"100%",
                                   "height":"20px",
                                   "display":"flex",
                                   "align-items":"center",
                                   "justify-content":"space-around",
                                   "flex-wrap":"nowrap",
                                   "flex-direction":"row",
                               });
                
                               name.text(Array.nome);
                               data.text(Array.data);
                               hora.text(Array.hora);
                               comenter.text(Array.comentario);
                               if(Array.Perfil !== null)
                               {
                                   Foto.attr("src",`../../../imagens-de-perfil-de-usuarios/${Array.Perfil}`);
                               }
                               else
                               {
                                   Foto.attr("src","../../../img/Usuario-Logado/Foto-default.webp");
                               }
                               content.append(
                                   user.append(Foto,name),
                                   comenter,
                                   rodape.append(hora,data)
                               );
                                               
                                $("#comenter").append(content);
                                $("#ver-comenter").css({
                                    "display":"flex",
                                    "align-items":"center",
                                    "justify-content":"space-around",
                                    "flex-wrap":"nowrap",
                                    "flex-direction":"column",
                                    "font-family":"'Montserrat'"
                                });
                                
                            })
                        }
                        if(response.data.length === 0)
                        {
                            $("#comenter").text("Essa Publicação Não Possui Comentarios");
                            $("#ver-comenter").css({
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"center",
                                "flex-direction":"column",
                                "flex-wrap":"nowrap",
                                "font-family":"stencilla"
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                }).catch(error => {
                    alert(error);
                });
            }
            else
            if(response.data.status === 'error')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.data.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                },500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
            }
        }).catch(error => {
            $("body").append(
                $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                    $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                    $("<div>").append(
                        $("<span>").text(error).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                    )
                ),
            );
            setTimeout(function(){
                $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
            },500)
            $("#overley-json-response").on("click",function(){
                $(this).remove();
                $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                setTimeout(function(){
                    $("#modal-response-json").remove();
                }, 500);
            });
        });
    }).catch(error => {
        $("body").append(
            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                $("<div>").append(
                    $("<span>").text(error).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                )
            ),
        );
        setTimeout(function(){
            $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
        },500)
        $("#overley-json-response").on("click",function(){
            $(this).remove();
            $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
            setTimeout(function(){
                $("#modal-response-json").remove();
            }, 500);
        });
    });
});
axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    if(response.data.status === 'error')
    {
        alert(response.data.message);
    }
    axios.get(`/Comenterios/${parseInt(response.data.id)}`).then(response => {
        // console.log(response.data);
        if(response.data.length > 0)
        {
            $("#comenter").text(" ");
            response.data.forEach(function(Array){
               var content = $("<div>");
               var rodape = $("<div>");
               var user = $("<div>");
               var Foto = $("<img>");
               var name = $("<p>");
               var data = $("<p>");
               var hora = $("<p>");
               var comenter = $("<div>");
               content.css({
                   "min-width":"99%",
                   "min-height":"200px",
                   "padding":"5px",
                   "box-shadow":"0px 0px 0px 10px white",
                   "display":"flex",
                   "align-items":"center",
                   "justify-content":"space-around",
                   "flex-direction":"column",
                   "flex-wrap":"nowrap",
                   "margin":"60px 0"
               }); 
               user.css({
                   "width":"100%",
                   "height":"20px",
                   "display":"flex",
                   "align-items":"center",
                   "justify-content":"space-around",
                   "flex-wrap":"nowrap",
                   "flex-direction":"row",
                   "margin":"20px 0"
               });

               Foto.css({
                   "width":"50px",
                   "height":"50px",
                   "border-radius":"50%",
               });

               comenter.css({
                   "width":"100%",
                   "height":"60px",
                   "overflow":"hidden",
                   "display":"flex",
                   "align-items":"center",
                   "justify-content":"center",
                   "flex-wrap":"nowrap",
                   "flex-direction":"row"
               });

               rodape.css({
                   "width":"100%",
                   "height":"20px",
                   "display":"flex",
                   "align-items":"center",
                   "justify-content":"space-around",
                   "flex-wrap":"nowrap",
                   "flex-direction":"row",
               });

               name.text(Array.nome);
               data.text(Array.data);
               hora.text(Array.hora);
               comenter.text(Array.comentario);
               if(Array.Perfil !== null)
               {
                   Foto.attr("src",`../../../imagens-de-perfil-de-usuarios/${Array.Perfil}`);
               }
               else
               {
                   Foto.attr("src","../../../img/Usuario-Logado/Foto-default.webp");
               }
               content.append(
                   user.append(Foto,name),
                   comenter,
                   rodape.append(hora,data)
               );
                               
                $("#comenter").append(content);
                $("#ver-comenter").css({
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"space-around",
                    "flex-wrap":"nowrap",
                    "flex-direction":"column",
                    "font-family":"'Montserrat'"
                });
                
            })
        }
        if(response.data.length === 0)
        {
            $("#comenter").text("Essa Publicação Não Possui Comentarios");
            $("#ver-comenter").css({
                "display":"flex",
                "align-items":"center",
                "justify-content":"center",
                "flex-direction":"column",
                "flex-wrap":"nowrap",
                "font-family":"stencilla"
            });
        }
    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    alert(error);
});