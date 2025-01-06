axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    axios.post(`/Biblioteca/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
        acao: 'dados'
    }).then(response => {
        if(response.data.status === 'error')
        {
            if(response.data.message === null)
            {
                $("#salvar-livros-salvos").css("display","flex");
                $("#remover-livro-salvos").css("display","none");
            }
        }
        else
        if(response.data.status === 'success')
        {
            if(Array.isArray(response.data.message))
            {
                $("#salvar-livros-salvos").css("display","none");
                $("#remover-livro-salvos").css("display","block");
            }
        }
    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    console.log(error);
});
axios.get(`/Postagem/${atob($("#IdContent").attr("content")).charCodeAt(0)}`).then(response => {
    $("#salvar-livros-salvos").on("submit",(event)=>{ event.preventDefault(); });
    $("#remover-livro-salvos").on("submit",(event)=>{ event.preventDefault(); });
    $("#button-livro-remove").on("submit", (event)=>{ event.preventDefault(); });
    $("#button-saved").on("submit",(event)=>{ event.preventDefault(); });
    $("#button-livro-remove").on("click", ()=>{
        axios.post(`/Biblioteca/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
            acao: 'deletar'
        }).then(response => {
            if(response.data.status === 'success')
            {
                console.log(response.data.message);
                Swal.fire({
                    title: response.data.message,
                    icon: "success",
                    draggable: true
                });
                $("#salvar-livros-salvos").css("display","flex");
                $("#remover-livro-salvos").css("display","none");
            }
            else
            if(response.data.status === 'error')
            {
                console.log(response.data.message);
                Swal.fire({
                    title: response.data.message,
                    icon: "success",
                    draggable: true
                });
            }
        }).catch(error => {
            console.log(error);
        });
    });
    $("#button-saved").on("click",()=>{
        axios.post(`/Biblioteca/${atob($("#id").attr("content")).charCodeAt(0)}/${response.data.id_do_autor}/${response.data.id}`,{
            acao: 'salvar'
        }).then(response => {
            if(response.data.status === 'success')
            {
                console.log(response.data.message);
                Swal.fire({
                    title: response.data.message,
                    icon: "success",
                    draggable: true
                });
                $("#salvar-livros-salvos").css("display","none");
                $("#remover-livro-salvos").css("display","block");
            }
            else
            if(response.data.status === 'error')
            {
                console.log(response.data.message);
                Swal.fire({
                    title: response.data.message,
                    icon: "success",
                    draggable: true
                });
            }
        }).catch(error => {
            console.log(error);
        });
    });
}).catch(error => {
    console.log(error);
});
