$(document).ready(function(){
    $(".links-deletes-contribuintes").each(function(index , elemento){
        $(elemento).on("click",function(event){
            event.preventDefault();
            axios.post(`/DeletarContribuinte/${atob($(this).attr("aria-label")).charCodeAt(0)}`, {
                acao: 'deleção'
            }).then(response => {
                if(response.data.status === 'success')
                {
                    Swal.fire({
                        title: response.data.message,
                        icon: "success",
                        draggable: true
                    });
                    $(this).closest(".containers-colab").remove();
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
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "error",
                        draggable: true
                    });
                }
                if(error.response.data.errors)
                {
                    Swal.fire({
                        title: error.response.data.errors,
                        icon: "error",
                        draggable: true
                    });
                }
            });
        });
    });
});
