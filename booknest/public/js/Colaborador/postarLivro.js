$("#Container-Postar").on("submit",function(event){
    event.preventDefault();
    var formData = new FormData();
    formData.append('_token',$("#CsrfToken").attr("content"));
    formData.append('titulo',$("#titulo-dashboards-input-0").val());
    formData.append('autor',$("#autor-dashboards-input-1").val());
    formData.append('genero',$("#genero-dashboards-input-2").val());
    formData.append('sinopse',$("#sinopse-dashboards-input-3").val());
    formData.append('data',$("#data-dashboards-input-4").attr("value"));
    formData.append('editora',$("#editora-dashboards-input-5").val());
    formData.append('numero',$("#numero-dashboards-input-6").val());
    formData.append('formato',$("#forrmato-dashboards-input-7").attr("value"));
    formData.append('isbn',$("#isbn-dashboards-input-8").val());
    formData.append('conteudo',$("#conteudo-do-livro-pdf-1")[0].files[0]);
    formData.append('classificacao',$("#classificacao-dashboards-input-10").val());
    formData.append('imagem',$("#arquivo-Imagem-do-Post-File-Input-DashBoards")[0].files[0]);
    if($("#more-files-for-dashboards-foto-1")[0].files.length > 0)
    {
        for(let i = 0; i < $("#more-files-for-dashboards-foto-1")[0].files.length; i++)
        {
            formData.append('more_imagens[]',$("#more-files-for-dashboards-foto-1")[0].files[i]);
        }
    }
    $.ajax({
        // url
        url: '/PostarPostagem/'+atob($("#IdContent").attr("content")).charCodeAt(0),
        // data
        data: formData,
        // type
        type: 'POST',
        // contentType
        contentType: false,
        // processData
        processData: false,
        // sucess
        success: function(response)
        {
            if(response.status === 'sucess')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
            }
            else
            if(response.status === 'error')
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
        },
        // error
        error: function(response)
        {
            $("body").append(
                $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                    $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                    $("<div>").append(
                        $("<span>").text(response.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                    )
                ),
            );
            setTimeout(function(){
                $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
            }, 500)
            $("#overley-json-response").on("click",function(){
                $(this).remove();
                $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                setTimeout(function(){
                    $("#modal-response-json").remove();
                }, 500);
            });
            if(error.responseJSON.error.length > 0)
            {
                $("body").append(
                    $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"}),
                    $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"12"}).append(
                        $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                        $("<div>").append(
                            $("<span>").attr("id","elemento-mensagem-error-globals").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                        )
                    ),
                );
                setTimeout(function(){
                    $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                }, 500)
                $("#overley-json-response").on("click",function(){
                    $(this).remove();
                    $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                    setTimeout(function(){
                        $("#modal-response-json").remove();
                    }, 500);
                });
                var GlobalErrors = error.responseJSON.error;
                Object.values(GlobalErrors).forEach(function(value){
                    var p = $("<p>").text(value);
                    $("#elemento-mensagem-error-globals").append(p);
                });
            }
        }
    });
});