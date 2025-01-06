$("#trocarDeNivelDeAcessos").on("click", (event) => {
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
        }),
        $("<div>").attr("id","modal").css({
            "position":"fixed",
            "top":"50%",
            "left":"50%",
            "width":"800px",
            "height":"600px",
            "background":"#333",
            "border-radius":"20px",
            "transform":"translate(-50% , -50%)",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center",
            "z-index":"11"
        }).append(
            $("<div>").attr("id","line").css({
                "width":"98%",
                "height":"97%",
                "background":"white",
                "border-radius":"20px",
                "display":"flex",
                "align-items":"center",
                "justify-content":"center",
            }).append(
                $("<div>").attr("id","index").css({
                    "width":"98%",
                    "height":"97%",
                    "background":"#333",
                    "position":"relative",
                    "top":"0",
                    "left":"0",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"space-between",
                    "flex-wrap":"nowrap",
                    "flex-direction":"column",
                    "border-radius":"10px"
                }).append(
                    $("<div>").attr("id","title").css({
                        "position":"absolute",
                        "top":"-30px",
                        "left":"0",
                        "width":"100%",
                        "height":"50px",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<p>").attr("id","text").css({
                            "max-width":"50%",
                            "text-align":"center",
                            "background":"#333",
                            "padding":"0",
                            "margin":"0"
                        }).text("Ir para a Ala de Contribuinte ?")
                    ),
                    $("<div>").attr("id","content").css({
                        "width":"100%",
                        "height":"100%",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"space-around",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row"
                    }).append(
                        $("<div>").attr("id","contents-subs-img").css({"width":"30%","height":"100%","display":"flex","align-items":"center","justify-content":"center"}).append($("<img>").css({"width":"100%"}).attr("src","../../../img/Usuario-Logado/ilustracao-de-mesas-de-cafe-de-madeira-minimalistas_1308-166094-Photoroom (1).png")),
                        $("<div>").attr("id","contents-subs-txt").css({"width":"70%","height":"100%"}).append($("<div>").css({"width":"100%","height":"100%"}).append(
                            $("<ul>").css({"width":"100%","height":"90%","padding":"0","margin":"0"}).append(
                                $("<li>").css({"margin":"10px 0"}).text("Você Agora é um Usuario"),
                                $("<li>").css({"margin":"10px 0"}).text("Ao clicar será redirecionado para sua Home de Contribuinte"),
                                $("<li>").css({"display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"nowrap","flex-direction":"column","margin":"10px 0"}).text("Não poderá ter as Permissões dos Usuarios").append(
                                    $("<ul>").append(
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Ver Postagens"),
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Comentar em Postagens"),
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Curtir Postagens"),
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Hypar Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Salvar Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Visitar Perfil de Contribuintes Alheios")
                                        )
                                    )
                                ),
                                $("<li>").text("Terá as Permissões de um contribuinte").css({"display":"flex","align-items":"center","justify-content":"space-around","flex-wrap":"nowrap","flex-direction":"column"}).append(
                                    $("<ul>").append(
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Postar Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Ver Comentarios de suas Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Monitorar suas Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Editar suas Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Excluir suas Postagens")
                                        ),
                                        $("<li>").css({"margin":"10px 0"}).append(
                                            $("<b>").text("Ver suas Edições Recentes")
                                        )
                                    )
                                )
                            ),
                            $("<div>").css({
                                "max-width":"60%",
                                "margin":"0 auto",
                                "display":"flex",
                                "align-items":"center",
                                "justify-content":"center"
                            }).append(
                                $("<form>").attr("method","POST").attr("action",`/TrocarNivelDeAcessos/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).append(
                                    $("<input>").attr("type","hidden").attr("name","_token").attr("value",$("#CsrfToken-3").attr("content")),
                                    $("<button>").css({
                                        "width":"400px",
                                        "height":"40px",
                                        "font-family":"'Montserrat',sans-serif",
                                        "font-size":"18px",
                                        "color":"white",
                                        "cursor":"pointer",
                                        "outline":"none",
                                        "border":"2px groove white",
                                        "border-radius":"20px",
                                        "background":"transparent",
                                        "text-align":"center",
                                        "transition":"1s",
                                    }).on("mouseenter",function(){
                                        $(this).css({
                                            "transition":"1s",
                                            "background":"blue",
                                            "color":"white",
                                            "border":"none"
                                        });
                                    }).on("mouseleave",function(){
                                        $(this).css({
                                            "transition":"1s",
                                            "background":"transparent",
                                            "color":"white",
                                            "border":"2px groove white"
                                        });
                                    }).text("Trocar Meu Nivel De Acessos")
                                )
                            )
                        ))
                    )
                )
            )
        )
    )
})