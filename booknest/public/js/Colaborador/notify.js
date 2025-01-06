$("#notify").on("click",function(){
    axios.get(`/NotificacoesContribuinte/${atob($(this).attr("aria-label")).charCodeAt(0)}`).then(response => {
        if(response.data.status === 'success')
        {
            $("body").append(
                $("<div>").attr("id","overlay").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "z-index":"20",
                    "cursor":"pointer",
                }),
                $("<div>").attr("id","modal").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "right":"0",
                    "bottom":"0",
                    "margin":"auto",
                    "width":"60%",
                    "height":"70%",
                    "background":"#333",
                    "z-index":"21",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "transition":"1s"
                }).append(
                    $("<fieldset>").css({
                        "width":"96%",
                        "height":"96%",
                        "border":"2px groove white",
                    }).append(
                        $("<legend>").text("Notificações"),
                        $("<div>").attr("id","notificacoes-content").css({
                            "width":"100%",
                            "height":"100%",
                            "overflow-y":"auto",
                            "overflow-x":"hidden"
                        })
                    )
                )
            )
            Object.values(response.data.mensagem).forEach(function(elemento){
                var content = $("<div>").css({"width":"100%","max-width":"90%","padding":"10px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","display":"flex","align-items":"center","justify-content":"space-around","flex-direction":"column","margin":"10px auto"});
                var assunto = $("<b>").text(elemento.assunto);
                var notificacao = $("<div>").text(elemento.notificacao);
                content.append(
                    assunto,
                    notificacao
                );
                $("#notificacoes-content").append(content);
            })
        }
        else
        if(response.data.status === 'error')
        {

        }
        else
        if(response.data.status === 'vazio')
        {
            $("body").append(
                $("<div>").attr("id","overlay").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "width":"100%",
                    "height":"100%",
                    "background":"rgba(0,0,0,0.7)",
                    "z-index":"20",
                    "cursor":"pointer",
                }),
                $("<div>").attr("id","modal").css({
                    "position":"fixed",
                    "top":"0",
                    "left":"0",
                    "right":"0",
                    "bottom":"0",
                    "margin":"auto",
                    "width":"60%",
                    "height":"70%",
                    "background":"#333",
                    "z-index":"21",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "transition":"1s"
                }).append(
                    $("<fieldset>").css({
                        "width":"96%",
                        "height":"96%",
                        "border":"2px groove white",
                    }).append(
                        $("<legend>").text("Notificações"),
                        $("<div>").attr("id","notificacoes-content").css({
                            "width":"100%",
                            "height":"100%",
                            "overflow-y":"auto",
                            "overflow-x":"hidden"
                        })
                    )
                )
            )
        }
    }).catch(error => {
        console.log(error);
    });
    
});