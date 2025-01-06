$(window).on("load",()=>{
    let resposta = null;
    $("#buttons-radio").find("input:radio").on("change",(event) => {
        resposta = $(event.target).attr("value");
    });
    $("#formulario-content").on("submit",(event)=>{event.preventDefault();});
    $("#input-submit-radio").find("input").on("click",(event) => {
        event.preventDefault();
        axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
            // input -> tag de resposta
            // radio -> tipo da tag
            // checked -> checada (escolhida)
            // input:radio:checked -> input de tipo radio que esta checado
            axios.post(`/HyparPostagem/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{hypar:resposta}).then(response => {
                if(response.data.status === 'success')
                {
                    $("#mensagem").css({
                        "position":"absolute",
                        "top":"0",
                        "left":"50%",
                        "width":"300px",
                        "height":"30px",
                        "background":"rgb(40 93 45 / 70%)",
                        "color":"rgb(0,255,0)",
                        "border":"2px groove rgb(0,255,0)",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row",
                        "transform":"translate(-50%, 0)",
                        "transition":"1s",
                        "opacity":"0"
                    });
                    $("#mensagem").text(response.data.message);
                    $("#mensagem").closest("div").css("position","relative");
                    setTimeout(() => {
                        $("#mensagem").css({
                            "transition":"1s",
                            "top":"-10px",
                            "opacity":"1"
                        })
                    }, 1000);
                    $("#mensagem-alert").css({
                        "transition":"1s",
                        "top":"0",
                        "opacity":"0"
                    });
                }
                else
                if(response.data.status === 'alert')
                {
                    $("#mensagem").css({
                        "transition":"1s",
                        "top":"0",
                        "opacity":"0"
                    });
                    $("#mensagem-alert").css({
                        "position":"absolute",
                        "top":"0",
                        "left":"50%",
                        "width":"300px",
                        "height":"30px",
                        "background":"rgb(214, 104, 104)",
                        "color":"red",
                        "border":"2px groove red",
                        "display":"flex",
                        "align-items":"center",
                        "justify-content":"center",
                        "flex-wrap":"nowrap",
                        "flex-direction":"row",
                        "transform":"translate(-50%, 0)",
                        "transition":"1s",
                        "opacity":"0"
                    });
                    $("#mensagem-alert").text(response.data.message);
                    $("#mensagem-alert").closest("div").css("position","relative");
                    setTimeout(() => {
                        $("#mensagem-alert").css({
                            "transition":"1s",
                            "top":"-30px",
                            "opacity":"1"
                        })
                    }, 1000);
                }
            }).catch(error => {
                console.log(error.response.data);
                console.log(error.response.message);
            });
        }).catch(error => {
            console.log(error.response.data);
            console.log(error.response.message);
        });
    });
    axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
        axios.get(`/PuxarHypagens/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`).then(response => {
            if(response.data.status === 'success')
            {
                $("#mensagem").css({
                    "position":"absolute",
                    "top":"-10px",
                    "left":"50%",
                    "width":"300px",
                    "height":"30px",
                    "background":"rgb(40 93 45 / 70%)",
                    "color":"rgb(0,255,0)",
                    "border":"2px groove rgb(0,255,0)",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "transform":"translate(-50%, 0)",
                    "transition":"1s",
                    "opacity":"1"
                });
                $("#mensagem").text("Você já Hypou está publicação");
                $("#mensagem").closest("div").css("position","relative");
            }
            else
            if(response.data.status === 'error')
            {
                // console.log(response.data.message);
            }
        }).catch(error => {
            console.log(error);
            console.log(error.response.data);
        });
    }).catch(error => {
        console.log(error.response.data);
        console.log(error.response.message);
    });
});