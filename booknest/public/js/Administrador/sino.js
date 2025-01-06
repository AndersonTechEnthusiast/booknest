$("#controle-2").on("click",function(){
    axios.post('/GerenciamentoDeAdministrador/',{
        acao: 'solicitacoes'
    }).then(response => {
        if(response.data.status === 'success')
        {
            const solicitacoesDosUsuarios = {};
            var usuarios = response.data.usuarios;
            var solicitacoes = response.data.solicitacao
            Object.values(usuarios).forEach(function(usuarios){
                Object.values(solicitacoes).forEach(function(solicitacao){
                    if(solicitacao.id_do_usuario == usuarios.id)
                    {
                        var imagem = null;
                        if(usuarios.pathname !== null)
                        {
                            imagem = usuarios.pathname
                        }
                        else
                        {
                            imagem = 'Foto-default.webp';
                        }
                        if(!solicitacoesDosUsuarios[usuarios.nome])
                        {
                            solicitacoesDosUsuarios[usuarios.nome] = [];
                        }

                        solicitacoesDosUsuarios[usuarios.nome].push({
                            'id':solicitacao.id,
                            'id_do_usuario':usuarios.id,
                            'nome':usuarios.nome,
                            'foto_do_usuario':imagem
                        });
                    }
                });
            });
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
                        $("<legend>").text("Controle Geral das Notificações de Usuarios Para Serem Contribuintes BookNests"),
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
            Object.keys(solicitacoesDosUsuarios).forEach(function(keys){
                var content = $("<div>").css({"display":"flex","align-items":"center","justify-content":"space-around","width":"100%","max-width":"90%","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","margin":"5px auto"});
                solicitacoesDosUsuarios[keys].forEach(function(array){
                    var imagem = $("<img>").attr("src","../../../imagens-de-perfil-de-usuarios/"+array.foto_do_usuario).css({"width":"100px","height":"100px","border-radius":"50%"});
                    var nome = $("<div>").text(array.nome);
                    var button = $("<button>").attr("aria-label",array.id_do_usuario).css({"width":"200px","height":"40px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row","background":"transparent","color":"white","border":"2px groove white","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).on("click",function(){
                        axios.post('/GerenciamentoDeAdministrador/',{
                            acao: 'autentificar',
                            id: $(this).attr("aria-label"),
                        }).then(response => {
                           if(response.data.status === 'success')
                           {
                            $("#modal").remove();
                            $("#overlay").remove();
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
                            if(error.response.data.message)
                            {
                                console.log(error.response.data.message);
                            }
                            if(error.response.data.errors)
                            {
                                console.log(error.response.data.errors);
                            }
                            console.log(error);
                        })
                    }).text("autorizar");
                    content.append(
                        imagem,
                        nome,
                        button
                    );
                });
                $("#controle-notificacao").append(content);
            })
        }
        
        
    }).catch(error => {
        console.log(error);
    });
});