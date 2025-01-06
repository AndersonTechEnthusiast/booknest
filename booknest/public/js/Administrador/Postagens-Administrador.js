$(".link-container-flip-card").each(function(index , elemento){
    $(elemento).on("click",function(event){
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
                "z-index":"11"
            }).on("click",function(){
                $(this).remove();
                $("#modal").remove();
            }),
            $("<div>").attr("id","modal").css({
                "position":"fixed",
                "top":"50%",
                "left":"50%",
                "width":"60%",
                "height":"70%",
                "background":"#333",
                "transform":"translate(-50% , -50%)",
                "display":"flex",
                "align-items":"center",
                "justify-content":"center",
                "flex-wrap":"nowrap",
                "flex-direction":"row",
                "border-radius":"10px",
                "z-index":"12"
            }).append(
                $("<fieldset>").css({"width":"90%","height":"90%","border-radius":"10px","border":"2px groove rgb(0,255,0)"}).attr("id",$(this).find(".front").find(".title-front-post").text().replace(/[' ']/g,'-')).append(
                    $("<legend>").css({"color":"rgb(0,255,0)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic"}).text($(this).find(".front").find(".title-front-post").text()),
                    $("<div>").css({
                        "width":"100%",
                        "height":"100%",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"space-between",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row",
                    }).append(
                        $("<div>").css({
                            "width":"30%",
                            "height":"100%",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"center",
                            "flex-wrap":"nowrap",
                            "flex-direction":"column"
                        }).append(
                            $("<img>").attr("src",`${$(this).find(".back").find("img").attr("src")}`).css({
                                "width":"220px",
                                "height":"448px"
                            })
                        ),
                        $("<div>").css({
                            "width":"70%",
                            "height":"100%",
                            "display":"flex",
                            "align-items":"center",
                            "justify-content":"space-around",
                            "flex-wrap":"nowrap",
                            "flex-direction":"column",
                            "overflow-x": "hidden",
                            "overflow-y":"auto"
                        }).append(
                            $("<fieldset>").css({"width":"100%","border-radius":"10px","border":"none","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","max-width":"90%","margin":"10px auto","padding":"0"}).append($("<legend>").text("id da Postagem"),$("<p>").css({"text-align":"center","padding":"0","margin":"0"}).text($(this).closest(".Capa-Interative").closest(".postagem").find(".Informações").find(".containers-view-posts").first().text())),
                            $("<fieldset>").css({"width":"100%","border-radius":"10px","border":"none","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","max-width":"90%","margin":"10px auto","padding":"0"}).append($("<legend>").text("Autor do Livro"),$("<p>").css({"text-align":"center","padding":"0","margin":"0"}).text($(this).closest(".show-postagens").find(".containers-view-posts").eq(1).text())),
                            $("<fieldset>").css({"width":"100%","border-radius":"10px","border":"none","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","max-width":"90%","margin":"10px auto","padding":"0"}).append($("<legend>").text("Genero do Livro"),$("<p>").css({"text-align":"center","padding":"0","margin":"0"}).text($(this).closest(".show-postagens").find(".containers-view-posts").eq(2).text())),
                            $("<fieldset>").css({"width":"100%","border-radius":"10px","border":"none","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","max-width":"90%","margin":"10px auto","padding":"0"}).append($("<legend>").text("Sinopse do Livro"),$("<p>").css({"text-align":"justify","padding":"0","margin":"0"}).text($(this).closest(".show-postagens").find(".containers-view-posts").eq(3).text())),
                            $("<fieldset>").css({"width":"100%","border-radius":"10px","border":"none","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","max-width":"90%","margin":"10px auto","padding":"0"}).append($("<legend>").text("Data do Livro"),$("<p>").css({"text-align":"center","padding":"0","margin":"0"}).text($(this).closest(".show-postagens").find(".containers-view-posts").eq(4).text())),
                            $("<fieldset>").css({"width":"100%","border-radius":"10px","border":"none","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","font-family":"'Teko',sans-serfi","font-size":"20px","font-style":"italic","color":"white","max-width":"90%","margin":"10px auto","padding":"0"}).append($("<legend>").text("Hora do Livro"),$("<p>").css({"text-align":"center","padding":"0","margin":"0"}).text($(this).closest(".show-postagens").find(".containers-view-posts").eq(5).text())),
                        )
                    )
                )
            )
        )
    });
});