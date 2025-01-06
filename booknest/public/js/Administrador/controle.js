$("#controle-1").on("click",function(){
   
    axios.post('/GerenciamentoDeAdministrador/',{
        acao: 'controle_de_acao'
    }).then(response => {
        $("body").append(
            $("<div>").attr("id","overlay").css({
                "position":"fixed",
                "top":"0",
                "left":"0",
                "width":"100%",
                "height":"100%",
                "z-index": "20",
                "cursor":"pointer",
                "background":"rgba(0,0,0,0.7)"
            }).on("click",function(){
                $(this).remove();
                $("#modal").remove();
            }),
            $("<div>").attr("id","modal").css({
                "position":"fixed",
                "top":"50%",
                "left":"50%",
                "width":"90%",
                "height":"80%",
                "transform":"translate(-50%,-50%)",
                "background":"#333",
                "display":"flex",
                "align-items":"center",
                "justify-content":"center",
                "flex-wrap":"nowrap",
                "flex-direction":"row",
                "z-index":"21"
            }).append(
                $("<fieldset>").css({
                    "width":"96%",
                    "height":"96%",
                    "font-family":"'Teko',sans-serif",
                    "color":"white",
                    "font-size":"20px",
                    "font-style":"italic"
                }).append(
                    $("<legend>").text("Controle Geral Das Atividades do BookNest"),
                    $("<div>").attr("id","controle-notificacao").css({
                        "width":"100%",
                        "height":"100%",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"space-around",
                        "flex-wrap":"nowrap",
                        "flex-direction":"column",
                        "overflow-y":"auto",
                        "overflow-x":"hidden"
                    })
                )
            )
        );
        Object.values(response.data).forEach(function(elemento){
            $("#controle-notificacao").append($("<p>").css({"box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Montserrat',sans-serif","font-size":"15px","max-width":"90%","margin":"10px auto"}).text(elemento.mensagem));
        });
    }).catch(error => {
        console.log(error);
    });
});