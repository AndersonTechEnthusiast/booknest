var generos = {
    'Ficção':'../../../img/Usuario-Logado/Ficção-white.png',
    'Não-Ficção':'../../../img/Usuario-Logado/Não-Ficção-white.png',
    'Poesia':'../../../img/Usuario-Logado/Poesia-white.png',
    'Drama':'../../../img/Usuario-Logado/Drama-white.png',
    'Conto':'../../../img/Usuario-Logado/Conto-White.png',
    'Infantojuvenil':'../../../img/Usuario-Logado/Infanto-White.png',
    'Novela Gráfica':'../../../img/Usuario-Logado/Novela-Grafica-White.png',
    'Humor':'../../../img/Usuario-Logado/Humor-White.png',
    'Guias de Viagem':'../../../img/Usuario-Logado/Guia-de-Viagem-White.png',
    'Ensaios':'../../../img/Usuario-Logado/Ensaio-White.png'
}
console.log(window.user)
$("#search-book").on("submit",function(event){event.preventDefault();});
$("#submit").on("click",function(){
    axios.get(`/Search/${$("#search").val().trim()}`).then(response => {
        if(response.data.status === 'success-single')
        {
            $(".result").find(".non-items").remove();
            if($(".elemento-postagem").length > 0)
            {
                $(".elemento-postagem").each(function(index , elemento){
                    $(elemento).remove();
                });
            }
            $(".result").append(
                $("<a>").addClass("elemento-postagem").css("text-decoration","none").attr("href",`/verPostagemUsuario/${response.data.resultado.id}`).append(
                    $("<div>").css({"width":"338px","height":"448px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","margin":"20px"}).append(
                        $("<div>").css({"width":"100%","max-width":"90%","border-bottom":"2px groove white","padding":"10px","text-align":"center","margin":"0 auto","color":"white","font-family":"'Montserrat',sans-serif"}).text(response.data.resultado.titulo),
                        $("<div>").css({"display":"flex","align-items":"center","justify-content":"center"}).append(
                            $("<img>").attr("src",generos[response.data.resultado.genero.trim()]).css({"width":"400px"})
                        ),
                        $("<div>").css({"width":"100%","max-width":"90%","border-bottom":"2px groove white","padding":"10px","text-align":"center","margin":"0 auto","color":"white","font-family":"'Montserrat',sans-serif"}).text(response.data.resultado.autor),
                    )
                )
            )

        }
        else
        if(response.data.status === 'success-group')
        {
            $(".result").find(".non-items").remove();
            if($(".elemento-postagem").length > 0)
                {
                    $(".elemento-postagem").each(function(index , elemento){
                        $(elemento).remove();
                    });
                }
            Object.values(response.data.resultado).forEach(function(array){
                var link = $("<a>").addClass("elemento-postagem").attr("href",`/verPostagemUsuario/${array.id}`).css("text-decoration","none");
                var content = $("<div>").css({"width":"338px","height":"448px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","margin":"20px"});
                var titles = $("<div>").css({"width":"100%","max-width":"90%","border-bottom":"2px groove white","padding":"10px","text-align":"center","margin":"0 auto","color":"white","font-family":"'Montserrat',sans-serif"}).text(array.titulo);
                var imagens = $("<div>").css({"display":"flex","align-items":"center","justify-content":"center"}).append($("<img>").attr("src",generos[array.genero.trim()]).css({"width":"400px"}));
                var rodapes = $("<div>").css({"width":"100%","max-width":"90%","border-bottom":"2px groove white","padding":"10px","text-align":"center","margin":"0 auto","color":"white","font-family":"'Montserrat',sans-serif"}).text(array.autor);
                $(".result").append(
                    link.append(
                        content.append(
                            titles,
                            imagens,
                            rodapes
                        )
                    )
                )
            })
        }
        else
        if(response.data.status === 'error')
        {
            $(".result").find(".non-items").remove();
            $(".result").text(response.data.resultado);
        }
    }).catch(error => {
        console.log(error);
    });
});