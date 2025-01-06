$(window).on("load",function(){
    $("#imagem-curtir").on("mouseenter",()=>{
        $("body").find(".hidden").css({
            "opacity":"0",
            "transition":"1s"
        });
    });
    $("#imagem-curtir").on("mouseleave",() =>{
        $("body").find("*").css({
            "opacity":"1",
            "transition":"1s"
        });
    });
    $("#curtir-form").on("submit",(event) => {event.preventDefault();});
    var resposta = $("#like").attr("value");
    var outraResposta = $("#deslike").attr("value");
    $("#like").on("click",(event)=>{
        event.preventDefault();
        axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
            axios.post(`/CurtirPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
            curtida: resposta
            }).then(response => {
                if(response.data.status === 'success')
                {
                    $("#like").prop("disabled",true);
                    $("#deslike").prop("disabled",false);
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
                    $("#for-like").find("i").css({
                        "color":"rgb(0,255,0)",
                        "transition":"1s"
                    });
                    $("#for-deslike").find("i").css({
                        "color":"transparent",
                        "transition":"1s"
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
                console.log(error);
                if(error.response)
                {
                    console.log(error.response.message);
                }
            });
        }).catch(error => {
            console.log(error);
            if(error.response)
            {
                console.log(error.response.message);
            }
        });
    });
    $("#deslike").on("click",(event)=>{
        event.preventDefault();
        axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
            axios.post(`/CurtirPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
            curtida: outraResposta
            }).then(response => {
                if(response.data.status === 'success')
                {
                    $("#deslike").prop("disabled",true);
                    $("#like").prop("disabled",false);
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
                    $("#for-like").find("i").css({
                        "color":"transparent",
                        "transition":"1s"
                    });
                    $("#for-deslike").find("i").css({
                        "color":"red",
                        "transition":"1s"
                    });
                }
                else
                if(response.data.status === 'error')
                {
                    console.log(response.data.message);
                }
            }).catch(error => {
                console.log(error);
                if(error.response)
                {
                    console.log(error.response.message);
                }
            });
        }).catch(error => {
            console.log(error);
            if(error.response)
            {
                console.log(error.response.message);
            }
        });
    });
    // puxando os dados da curtida
    axios.get(`/PuxarCurtidas/${atob($("#id").attr("content")).charCodeAt(0)}/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
        if(response.data.status === 'error'){
            alert(response.data.message);
        }
        response.data.forEach(function(elemento){
            if(elemento.curtida == 'like')
            {
                $("#like").prop("disabled",true);
                $("#deslike").prop("disabled",false);
                $("#for-like").find("i").css("color","rgb(0,255,0)");
            }
            else
            if(elemento.curtida == 'deslike')
            {
                $("#deslike").prop("disabled",false);
                $("#like").prop("disabled",true);
                $("#for-deslike").find("i").css("color","red");
            }
        })
    }).catch(error => {
        console.log(error);
    });
});