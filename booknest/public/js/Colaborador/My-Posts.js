if(window.MyPostsKeys)
{
    var KPMyPosts = Object.values(window.MyPostsKeys);
    var KPCFNMyPosts = atob(KPMyPosts.toString()).split("+-");
    var AKPMyPosts = [];
    let ValuesNotEdit = [];
    KPCFNMyPosts.forEach(function(Letra){AKPMyPosts.push(String.fromCharCode(Number(atob(Letra.toString()))));});
    var KeysMyPosts = AKPMyPosts.join("").split("+-");
    var VPMyPosts = Object.values(window.MyPostsValues);
    var VPCFNMyPosts = atob(VPMyPosts.toString()).split("+-");
    var AVPMyPosts = [];
    VPCFNMyPosts.forEach(function(Letra){AVPMyPosts.push(String.fromCharCode(Number(atob(Letra.toString()))));});
    var ValuesMyPosts = AVPMyPosts.join("").split("+-");
    const MYPOST = [];
    var myPostTemp1 = {};
    var myPostTemp2 = {};
    var SumarioMyPostsAtivadorContent = $("<div>").addClass("elemento-sumario-my-posts-Tables-Class-Total").attr("id","elemente-sumario-my-posts-Tables-Ids-Total").css({"width":"400px","height":"70px","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"column","overflow":"hidden","transition":"1s"});
    var SumarioMyPosts = $("<div>").addClass("elemento-sumario-my-posts-Tables-class").attr("id","elemento-sumario-my-posts-Tables-id").css({"width":"400px","height":"50px","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","cursor":"pointer","padding":"10px"});
    var ConjuntoHiddensSumarioMyPosts = $("<div>").addClass("elemento-sumario-my-posts-Tables-Hidden-Conjunto-class").attr("id","elemento-sumario-my-posts-Tables-Hidden-Conjunto-id").css({"width":"400px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"column","transition":"1s"});
    var ItemsSumarioMyPostsContent = $("<div>").addClass("elemento-sumario-my-posts-Tables-Options-Class").attr("id","elemento-sumario-my-posts-Tables-Options-Id").css({"width":"300","height":"40px","background":"black","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row","cursor":"pointer","opacity":"0.6","transition":"1s","margin":"10px auto"});
    var ItemsSumarioMyPostsTabelas = $("<div>").addClass("elemento-sumario-my-posts-Tables-Options-Class").attr("id","elemento-sumario-my-posts-Tables-Options-Id").css({"width":"300","height":"40px","background":"black","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row","cursor":"pointer","opacity":"0.6","transition":"1s","margin":"10px auto"});
    var SumarioMyPostsImg = $("<img>").add("elemento-sumario-my-posts-Tables-Imagem-Class").attr("id","elemento-sumario-my-posts-Tables-Imagem-Id").css({"width":"50px"});
    var SumarioMyPostsParagrafo = $("<p>").addClass("elemento-sumario-my-posts-Tables-Paragrafo-Class").attr("id","elemento-sumario-my-posts-Tables-Paragrafo-Id").css({"width":"200px","text-align":"center"});
    var SumarioMyPostsIcones = $("<i>").addClass("fi fi-br-angle-double-right").attr("id","elemento-sumario-my-posts-Tables-Icones-Id").css({"font-size":"18px"});
    SumarioMyPosts.append(SumarioMyPostsIcones);
    SumarioMyPosts.append(SumarioMyPostsParagrafo);
    SumarioMyPosts.append(SumarioMyPostsImg);
    SumarioMyPostsAtivadorContent.append(SumarioMyPosts);
    ConjuntoHiddensSumarioMyPosts.append(ItemsSumarioMyPostsContent);
    ConjuntoHiddensSumarioMyPosts.append(ItemsSumarioMyPostsTabelas);
    ItemsSumarioMyPostsContent.text("Estilo de Container");
    ItemsSumarioMyPostsTabelas.text("Estilo de Tabelas");
    SumarioMyPostsImg.attr("src","../../img/Colaborador/Meu-Posts-Photoroom.png");
    SumarioMyPostsParagrafo.text("Meus Posts");
    SumarioMyPostsAtivadorContent.append(SumarioMyPosts);
    SumarioMyPostsAtivadorContent.append(ConjuntoHiddensSumarioMyPosts);
    $("#Page-3").append(SumarioMyPostsAtivadorContent);
    var IconGearInformacion = $("<div>").addClass("elemento-informativo-table-my-posts").attr("id","elemento-informativo-table-my-posts").css({"width":"100%","max-width":"80%","display":"flex","align-items":"center","justify-content":"right","transition":"1s","margin":"0 auto"});
    var IconGearInformacionIcon = $("<i>").addClass("fi fi-ss-settings").attr("id","elemento-informativo-table-my-posts").css({"font-size":"20px","color":"white","cursor":"pointer"});
    IconGearInformacion.append(IconGearInformacionIcon);
    ConjuntoHiddensSumarioMyPosts.on("mouseenter",function(){
        SumarioMyPostsAtivadorContent.height('190px');
        $("#Page-3").find(".elemento-posts-my-post").css('opacity','0');
        $("#Page-3").find(".elemento-tabela-my-posts").css('opacity','0');
        $("#Page-3").find("#elemento-informativo-table-my-posts").css('opacity','0');
        $(this).find('.elemento-sumario-my-posts-Tables-Options-Class').on("mouseenter",function(){
            $(this).css("opacity","1");
        });
        $(this).find('.elemento-sumario-my-posts-Tables-Options-Class').on("mouseleave",function(){
            $(this).css("opacity","0.6");
        });
    });
    ConjuntoHiddensSumarioMyPosts.on("mouseleave",function(){
        SumarioMyPostsAtivadorContent.height('70px');
        $("#Page-3").find(".elemento-posts-my-post").css('opacity','1');
        $("#Page-3").find(".elemento-tabela-my-posts").css('opacity','1');
        $("#Page-3").find("#elemento-informativo-table-my-posts").css('opacity','1');
    });
    SumarioMyPosts.on("mouseenter",function(){
        SumarioMyPostsAtivadorContent.height('190px');
        $("#Page-3").find(".elemento-posts-my-post").css('opacity','0');
        $("#Page-3").find(".elemento-tabela-my-posts").css('opacity','0');
        $("#Page-3").find("#elemento-informativo-table-my-posts").css('opacity','0');
    });
    SumarioMyPosts.on("mouseleave",function(){
        SumarioMyPostsAtivadorContent.height('70px');
        $("#Page-3").find(".elemento-posts-my-post").css('opacity','1');
        $("#Page-3").find(".elemento-tabela-my-posts").css('opacity','1');
        $("#Page-3").find("#elemento-informativo-table-my-posts").css('opacity','1');
    });
    if(KeysMyPosts.length === ValuesMyPosts.length)
    {
        for (let index = 0; index < ValuesMyPosts.length; index++) {
            myPostTemp1[KeysMyPosts[index]] = ValuesMyPosts[index];
            if(Object.values(myPostTemp1).length === 14)
            {
                myPostTemp2[myPostTemp1.titulo] = myPostTemp1;

                MYPOST.push(myPostTemp2);

                myPostTemp1 = {};
                myPostTemp2 = {};
            }
        }
    }
    const MyPostComplete = {};
    for (let index = 0; index < MYPOST.length; index++) {
        var valor = MYPOST[index];

        var key = Object.keys(valor)[0];
        var value = valor[key];

        if(MyPostComplete[key] === undefined)
        {
            MyPostComplete[key] = [];
        }
        MyPostComplete[key].push(value);
    }
    var ContentMyPostsPage3 = $("<div>").addClass("elemento-dinamic-My-Posts-class-Content-Total").attr("id","elemento-dinamic-My-Posts-id-Content-Total");
    ContentMyPostsPage3.css({
        "position":"relative",
        "top":"0",
        "left":"0",
        "width":"100%",
        "height":"100%",
        "display":"flex",
        "align-items":"center",
        "justify-content":"space-between",
        "flex-wrap":"nowrap",
        "flex-direction":"row"
    });
    var ContentPages3Elemento1 = $("<div>").addClass("elemento-dinamico-my-post-tabela-content-class").attr("id","elemento-dinamico-my-post-tabela-id");
    var ContentPages3Elemento2 = $("<div>").addClass("elemento-dinamico-my-post-tabela-content-class").attr("id","elemento-dinamico-my-post-content-id");
    ContentPages3Elemento1.css({
        "position":"absolute",
        "top":"0",
        "left":"0",
        "width":"100%",
        "height":"100%",
        "max-height":"100%",
        "display":"flex",
        "align-items":"center",
        "justify-content":"space-around",
        "flex-wrap":"wrap",
        "flex-direction":"row",
        "transition":"1s"
    });
    ContentPages3Elemento2.css({
        "position":"absolute",
        "top":"0",
        "left":"100%",
        "width":"100%",
        "height":"100%",
        "max-height":"100%",
        "overflow-y":"auto",
        "overflow-x":"hidden",
        "transition":"1s"
    });
    ContentMyPostsPage3.append(ContentPages3Elemento1);
    ContentMyPostsPage3.append(ContentPages3Elemento2);
    Object.keys(MyPostComplete).forEach(function(keys){
        var PostsPage3 = $("<div>").addClass("elemento-posts-my-post").attr("id","elemento-posts-my-posts-"+keys.replace(/\s/g,'-'));
        var PostsPage3P = $("<p>").addClass("elemento-posts-my-posts-p").attr("id","elemento-posts-my-posts-p-"+keys.replace(/\s/g,'-'));
        PostsPage3.css({"width":"300px","height":"400px","border-radius":"10px","box-shadow":"2px 5px 5px 10px rgba(0,0,0,0.7)","padding":"5px","cursor":"pointer","display":"flex","align-items":"center","justify-content":"space-between","flex-direction":"column","transition":"1s","margin":"20px 20px"});
    
        // PostsPage3P.css({"text-align":"center","width":"100%","max-width":"70%","padding":"10px","white-space":"nowrap","border-bottom":"2px groove white","margin":"0 auto"});
        if(keys.length > 25)
        {
            PostsPage3P.css({"text-align":"center","width":"100%","max-width":"90%","padding":"10px","white-space":"nowrap","border-bottom":"2px groove white","margin":"0 auto"});
            PostsPage3P.text(keys);
        }
        else
        {
            PostsPage3P.css({"text-align":"center","width":"100%","max-width":"70%","padding":"10px","white-space":"nowrap","border-bottom":"2px groove white","margin":"0 auto"});
            PostsPage3P.text(keys);
        }
        PostsPage3.append(PostsPage3P);
        MyPostComplete[keys].forEach(function(array){
            if(array.genero === "Ficção")
            {
                var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Ficção-white.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Ficção-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Ficção-white.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Ficção-white.png");
            }
            if(array.genero === "Não-Ficção"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Não-Ficção-white.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Não-Ficção-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Não-Ficção-white.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Não-Ficção-white.png");
            }
            if(array.genero === "Poesia"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Poesia-white.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Poesia-black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Poesia-white.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Poesia-white.png");
            }
            if(array.genero === "Drama"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Drama-white.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Drama-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Drama-white.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Drama-white.png");
            }
            if(array.genero === "Conto"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Conto-White.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Conto-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Conto-White.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Conto-White.png");
            }
            if(array.genero === "Infantojuvenil"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Infanto-White.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Infanto-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Infanto-White.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Infanto-White.png");
            }
            if(array.genero === "Novela Gráfica"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Novela-Grafica-White.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Novela-Grafica-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Novela-Grafica-White.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Novela-Grafica-White.png");
            }
            if(array.genero === "Humor"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Humor-White.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Humor-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Humor-White.png");
                });
                PostsPages3Imagem.attr("src","../../img/Colaborador/Humor-White.png"); 
            }
            if(array.genero === "Guias de Viagem"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Guia-de-Viagem-White.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Guia-de-Viagem-Black.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Guia-de-Viagem-White.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Guia-de-Viagem-White.png");
            }
            if(array.genero === "Ensaios"){
            var PostsPage3Img = $("<img>").addClass("elemento-posts-my-posts-img").attr("id","elemento-posts-my-posts-img-"+keys.replace(/\s/g,'-')).attr("src","../../img/Colaborador/Ensaio-White.png");
                PostsPage3Img.css({"width":"300px"});
                PostsPage3.append(PostsPage3Img);
                var PostsPages3Button = $("<button>").addClass("elemento-posts-my-posts-button").attr("id","elemento-posts-my-posts-button-"+keys.replace(/\s/g,'-'));
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                var PostsPages3Imagem = $("<img>").addClass("elemento-posts-my-posts-img-bottom").attr("id","elemento-posts-my-posts-img-button-id"+keys.replace(/\s/g,'-'));
                var PostsPages3ContentButton = $("<div>").addClass("elemento-posts-my-posts-content-button-class").attr("id","elemento-posts-my-posts-content-button-id-"+keys.replace(/\s/g,'-'));
                PostsPages3ContentButton.css({
                    "width":"100%",
                    "height":"80px",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row"
                });
                PostsPage3.append(PostsPages3ContentButton.append(PostsPages3Button.append(PostsPages3Imagem)));
                PostsPages3Imagem.css({"width":"50px"});
                PostsPages3Button.attr("type","button");
                PostsPages3Button.css({
                    "border":"2px groove white",
                    "width":"100%",
                    "max-width":"60px",
                    "height":"60px",
                    "border-radius":"50%",
                    "background":"transparent",
                    "cursor":"pointer",
                    "transition":"1s",
                    "display":"flex",
                    "align-items":"center",
                    "justify-content":"center",
                    "flex-wrap":"nowrap",
                    "flex-direction":"row",
                    "margin":"0 auto"
                });
                PostsPages3Button.on("mouseenter",function(){
                    $(this).css({
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"white",
                        "cursor":"pointer",
                        "transition":"1s",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Ensaio.png");
                });
                PostsPages3Button.on("mouseleave",function(){
                    $(this).css({
                        "border":"2px groove white",
                        "width":"100%",
                        "max-width":"60px",
                        "height":"60px",
                        "border-radius":"50%",
                        "background":"transparent",
                        "cursor":"pointer",
                        "margin":"0 auto"
                    });
                    PostsPages3Imagem.attr("src","../../img/Colaborador/Ensaio-White.png");
                });        
                PostsPages3Imagem.attr("src","../../img/Colaborador/Ensaio-White.png");
            }
        });
        ContentPages3Elemento1.append(PostsPage3);
    });
    $("#Page-3").append(ContentMyPostsPage3);
    window.addEventListener("load",function(){
        $(".elemento-posts-my-posts-button").each(function(indice , button){
            $(button).on("click",function(){
                var ElementosPopUpMyPostsHTML = [];
                var ElementosPopUpMyPostsCSS = [
                    {"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"},// Overlay
                    {"position":"fixed","top":"50%","left":"50%","width":"60%","height":"70%","transform":"translate(-50%,-50%)","z-index":"12","border-radius":"10px","background":"#333","color":"white","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"},// Modal
                    {"width":"95%","height":"95%","background":"white","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"},// Line
                    {"position":"relative","top":"0","left":"0","width":"99%","height":"99%","background":"#333","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"},// Index
                    {"position":"absolute","top":"-10px","background":"#333","color":"white"},// titulo
                    {"width":"50%","height":"100%"},// Content-1
                    {"width":"50%","height":"100%","overflow-y":"auto","overflow-x":"hidden"},// Content-2
                    {"position":"relative","top":"0","left":"0","width":"100%","height":"100%","max-width":"100%","max-height":"100%","overflow-x":"hidden","overflow-y":"hidden"},// Imagem-Postagem
                ];
                var ElementosPopUpMyPostsHTMLClass = [
                    'Classe-PopUp-My-Posts-Overlay',
                    'Classe-PopUp-My-Posts-Modal',
                    'Classe-PopUp-My-Posts-Line',
                    'Classe-PopUp-My-Posts-Index',
                    'Classe-PopUp-My-Posts-titulo',
                    'Classe-PopUp-My-Posts-Content-1',
                    'Classe-PopUp-My-Posts-Content-2',
                    'Classe-PopUp-My-Posts-Imagem-Postagem'
                ];
                var ElementosPopUpMyPostsHTMLId = [
                    'Overlay',
                    'Modal',
                    'Line',
                    'Index',
                    'titulo',
                    'Content-1',
                    'Content-2',
                    'Imagem-Postagem',
                ];
                for (let index = 0; index < 8; index++) {
                    var divs = $("<div>");
                    ElementosPopUpMyPostsHTML.push(divs);
                    ElementosPopUpMyPostsHTML[index].css(ElementosPopUpMyPostsCSS[index]);
                    ElementosPopUpMyPostsHTML[index].addClass(ElementosPopUpMyPostsHTMLClass[index]).attr("id",ElementosPopUpMyPostsHTMLId[index]);
                }
                for (let index = 0; index < ElementosPopUpMyPostsHTML.length; index++) {
                    if(ElementosPopUpMyPostsHTML[index].attr("id") === "Overlay")
                    {
                        var Overlay = ElementosPopUpMyPostsHTML[index];
                        if(ElementosPopUpMyPostsHTML[index + 1].attr("id") === "Modal")
                        {
                            var Modal = ElementosPopUpMyPostsHTML[index + 1];
                            if(ElementosPopUpMyPostsHTML[index + 2].attr("id") === "Line")
                            {
                                var Line = ElementosPopUpMyPostsHTML[index + 2];
                                if(ElementosPopUpMyPostsHTML[index + 3].attr("id") === "Index")
                                {
                                    var Index = ElementosPopUpMyPostsHTML[index + 3];
                                    if(ElementosPopUpMyPostsHTML[index + 4].attr("id") === "titulo")
                                    {
                                        var titulo = ElementosPopUpMyPostsHTML[index + 4];
                                        if(ElementosPopUpMyPostsHTML[index + 5].attr("id") === "Content-1")
                                        {
                                            var Content1 = ElementosPopUpMyPostsHTML[index + 5];
                                            if(ElementosPopUpMyPostsHTML[index + 6].attr("id") === "Content-2")
                                            {
                                                var Content2 = ElementosPopUpMyPostsHTML[index + 6];
                                                if(ElementosPopUpMyPostsHTML[index + 7].attr("id") === "Imagem-Postagem")
                                                {
                                                    var Imagem = ElementosPopUpMyPostsHTML[index + 7];
                                                    var LivroMyPost = $(this).closest(".elemento-posts-my-posts-content-button-class").closest(".elemento-posts-my-post").find(".elemento-posts-my-posts-p").text(); // find() , busca no evento do click , não no documento inteiro como o $('')
                                                    var imagemPopUp = $("<img>").addClass("elemento-imagem-popup-my-post-class").attr("id","elemento-imagem-popup-my-post-id");
                                                    MyPostComplete[LivroMyPost].forEach(function(array){
                                                        imagemPopUp.attr("src","../../publicacao/"+array.imagem);
                                                        imagemPopUp.css({"width":"500px","height":"500px","border-radius":"50%","position":"absolute","top":"-50px","left":"-200px"});
                                                    });
                                                    Imagem.append(imagemPopUp);
                                                    Modal.append(Line);
                                                    Line.append(Index);
                                                    titulo.text(LivroMyPost);
                                                    Index.append(titulo);
                                                    Index.append(Content1);
                                                    Index.append(Content2);
                                                    Content1.append(Imagem);
                                                    Imagem.attr("src","../../img/Colaborador/");
                                                    $(document.body).append(Overlay);
                                                    $(document.body).append(Modal);
                                                    Overlay.on("click",function(){
                                                        $(this).remove();
                                                        Modal.remove();
                                                    });
                                                    MyPostComplete[LivroMyPost].forEach(function(array){
                                                        var Array = Object.keys(array);
                                                        Array.pop();
                                                        Array.forEach(function(keys){
                                                            var Legend = $("<legend>").addClass("legend-elemento-class-my-posts").attr("id","legend-elemento-id-my-posts");
                                                            Legend.text(keys);
                                                            var FieldSet = $("<fieldset>").addClass("fieldset-elemento-class-my-posts").attr("id","fieldset-elemento-id-my-posts").css({"border-radius":"10px","margin":"20px 0"});
                                                            FieldSet.text(array[keys]);
                                                            FieldSet.append(Legend);
                                                            Content2.append(FieldSet);
                                                        });
                                                    }); 
                                                    
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        });
    });
    window.addEventListener("load",function(){
        $(".elemento-sumario-my-posts-Tables-Options-Class").each(function(index , elemento)
        {
            $(elemento).on("click", function(){
                $(".elemento-dinamico-my-post-tabela-content-class").css("left","100%");
                $(".elemento-dinamico-my-post-tabela-content-class").css("opacity","0");
                $(".elemento-dinamico-my-post-tabela-content-class").css("overflow","hidden");
                $(".elemento-dinamico-my-post-tabela-content-class").eq(index).css("left","0");
                $(".elemento-dinamico-my-post-tabela-content-class").eq(index).css("opacity","1");
                $(".elemento-dinamico-my-post-tabela-content-class").eq(index).css("overflow","visible");
                
                localStorage.setItem("index-my-post-contents-pages",index);
            });
        })
    });
    window.addEventListener("load",function(){
        if(this.localStorage.getItem('index-my-post-contents-pages'))
        {
            $(".elemento-dinamico-my-post-tabela-content-class").css("left","100%");
            $(".elemento-dinamico-my-post-tabela-content-class").css("opacity","0");
            $(".elemento-dinamico-my-post-tabela-content-class").eq(index).css("left","0");
            $(".elemento-dinamico-my-post-tabela-content-class").eq(index).css("opacity","1");
        }
    });
    var TabelaContent2 = $("<table>").addClass("elemento-tabela-my-posts").attr("id","tabela-my-post").css({"width":"100%","transition":"1s"});
    var TabelaRows = $("<tr>").addClass("elemento-table-rows-my-posts").attr("id","elemento-tables-rows-my-posts").css({"width":"100%"});
    var TabelaHeadersId = $("<th>").addClass("elemento-table-headers-my-posts").attr("id","elemento-tables-headers-my-posts-Id").css({"border-bottom":"2px groove white"}).text("#id");
    var TabelaHeadersName = $("<th>").addClass("elemento-table-headers-my-posts").attr("id","elemento-tables-headers-my-posts-Nome").css({"border-bottom":"2px groove white"}).text("#nome");
    var TabelaHeadersGenero = $("<th>").addClass("elemento-table-headers-my-posts").attr("id","elemento-tables-headers-my-posts-Genero").css({"border-bottom":"2px groove white"}).text("#genero");
    var TabelaHeadersData = $("<th>").addClass("elemento-table-headers-my-posts").attr("id","elemento-tables-headers-my-posts-Data").css({"border-bottom":"2px groove white"}).text("#data");
    var TabelaHeadersHora = $("<th>").addClass("elemento-table-headers-my-posts").attr("id","elemento-tables-headers-my-posts-Hora").css({"border-bottom":"2px groove white"}).text("#hora");
    TabelaRows.append(TabelaHeadersId);
    TabelaRows.append(TabelaHeadersName);
    TabelaRows.append(TabelaHeadersGenero);
    TabelaRows.append(TabelaHeadersData);
    TabelaRows.append(TabelaHeadersHora);
    TabelaContent2.append(TabelaRows);
    ContentPages3Elemento2.append(IconGearInformacion);
    ContentPages3Elemento2.append(TabelaContent2);
    var teste = [];
    Object.keys(MyPostComplete).forEach(function(keys){
        MyPostComplete[keys].forEach(function(array){
            var DadosShow = {};
            DadosShow['id'] = parseInt(array.id);
            if(/^[0-9]+$/.test(array.titulo))
            {
                DadosShow['titulo'] = parseInt(array.titulo);
            }
            else
            {
                DadosShow['titulo'] = array.titulo;
            }
            DadosShow['genero'] = array.genero;
            DadosShow['data'] = array.data;
            DadosShow['hora'] = array.hora;
            // [0] porque , o id é o primeiro elemento da array porém [0]
            Object.values(DadosShow).sort((a , b) => a['id'] - b['id']);
            teste.push(DadosShow);
        });
    });
    Object.values(teste).forEach(function(arrays){
        var TableRowsDatas = $("<tr>").addClass("elemento-class-tables-rows-datas-my-posts").attr("id","elementos-ids-tables-rows-datas-my-posts");
        Object.values(arrays).forEach(function(values){
            var TablesDatas = $("<td>").addClass("elemento-class-tables-datas-my-posts").attr("id","elementos-ids-tables-datas-my-posts").css({"border-bottom":"2px groove white","text-align":"center","cursor":"pointer"});
            TablesDatas.text(values);
            TableRowsDatas.append(TablesDatas);
        });
        TabelaContent2.append(TableRowsDatas);
    });
    IconGearInformacionIcon.on("click",function(){
        var ElementosIconPopUpMyPosts = [];
        var ElementosIconPopUpMyPostsClass = [
            'Overlay-popup-my-posts-Informações-Gears',
            'Modal-popup-my-posts-Informações-Gears',
            'Line-popup-my-posts-Informações-Gears',
            'Index-popup-my-posts-Informações-Gears',
            'Titulo-popup-my-posts-Informações-Gears',
            'Container-popup-my-posts-Informações-Gears'
        ];
        var ElementosIconPopUpMyPostsIds = [
            'Overlay',
            'Modal',
            'Line',
            'Index',
            'Titulo',
            'Container'
        ];
        var ElementosIconsPopUpsCss = [
            {"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"11","cursor":"pointer"},
            {"position":"fixed","top":"50%","left":"50%","width":"70%","height":"20%","transform":"translate(-50%,-50%)","background":"#333","color":"white","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row","border-radius":"10px","z-index":"12"},
            {"width":"98%","height":"85%","background":"white","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"},
            {"position":"relative","top":"0","left":"0","width":"98%","height":"98%","background":"#333","border-radius":"10px","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"},
            {"position":"absolute","top":"-10px","color":"white","background":"#333"},
            {"width":"100%","height":"100%","background":"transparent","display":"flex","align-items":"center","justify-content":"center","flex-wrap":"nowrap","flex-direction":"row"}
        ];
        for (let index = 0; index < 6; index++) 
        {
            var divs = $("<div>");
            ElementosIconPopUpMyPosts.push(divs);
        }
        for (let index1 = 0; index1 < ElementosIconPopUpMyPosts.length; index1++) {
            ElementosIconPopUpMyPosts[index1].addClass(ElementosIconPopUpMyPostsClass[index1]).attr("id",ElementosIconPopUpMyPostsIds[index1]).css(ElementosIconsPopUpsCss[index1]);
        }
        for (let index = 0; index < ElementosIconPopUpMyPosts.length; index++) {
            if(ElementosIconPopUpMyPosts[index].attr("id") === "Overlay")
            {
                var Overlay = ElementosIconPopUpMyPosts[index];
                if(ElementosIconPopUpMyPosts[index + 1].attr("id") === "Modal")
                {
                    var Modal = ElementosIconPopUpMyPosts[index + 1];
                    if(ElementosIconPopUpMyPosts[index + 2].attr("id") === "Line")
                    {
                        var Line = ElementosIconPopUpMyPosts[index + 2];
                        if(ElementosIconPopUpMyPosts[index + 3].attr("id") === "Index")
                        {
                            var Index = ElementosIconPopUpMyPosts[index + 3];
                            if(ElementosIconPopUpMyPosts[index + 4].attr("id") === "Titulo")
                            {
                                var Titulo = ElementosIconPopUpMyPosts[index + 4];
                                if(ElementosIconPopUpMyPosts[index + 5].attr("id") === "Container")
                                {
                                    var Container = ElementosIconPopUpMyPosts[index + 5];
                                    Modal.append(Line);
                                    Line.append(Index);
                                    Index.append(Titulo);
                                    Titulo.text('Informação Modo Tabela');
                                    Index.append(Container);
                                    Container.text("No Modo Tabela é possivel Editar suas Postagens ou até mesmo Deleta-lás, basta Clicar na Postagem !!!");
                                    $(document.body).append(Overlay);
                                    $(document.body).append(Modal);
                                    Overlay.on("click",function(){
                                        $(this).remove();
                                        Modal.remove();
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    window.addEventListener("load", function(){
        $(".elemento-class-tables-rows-datas-my-posts").each(function(index , elemento){
            $(elemento).on("click",function(){
                var PopUpPostagemEditAndDeletePosts = [];
                var PopUpPostagemEditAndDeletePostsCss = [
                    {'position':'fixed','top':'0','left':'0','width':'100%','height':'100%','background':'rgba(0,0,0,0.7)','z-index':'11','cursor':'pointer'},
                    {'position':'fixed','top':'50%','left':'50%','width':'95%','height':'98%','background':'#333','transform':'translate(-50%,-50%)','border-radius':'10px','display':'flex','align-items':'center','justify-content':'center','flex-wrap':'nowrap','flex-direction':'row','z-index':'12'},
                    {'width':'98%','height':'98%','background':'white','border-radius':'10px','display':'flex','align-items':'center','justify-content':'center','flex-wrap':'nowrap','flex-direction':'row'},
                    {'position':'relative','top':'0','left':'0','width':'98%','height':'98%','background':'#333','border-radius':'10px','display':'flex','align-items':'center','justify-content':'space-between','flex-wrap':'nowrap','flex-direction':'row'},
                    {'position':'absolute','top':'-12px','left':'50%','transform':'translate(-50% , 0px)','background':'#333','color':'white','z-index':'2'},
                    {"position":"relative","top":"0","left":"0",'width':'50%','height':'100%',"max-width":"50%","max-height":"100%","overflow-y":"hidden","overflow-x":"hidden","transition":"1s"},
                    {'width':'50%','height':'calc(100% - 80px)','max-height':'calc(100% - 80px)',"overflow-y":"auto","overflow-x":"hidden","transition":"1s"},
                    {'position':'absolute','bottom':'0','right':'0','width':'100%','height':'50px','display':'flex','align-items':'center','justify-content':'space-between','flex-wrap':'nowrap','flex-direction':'row',"background":"#333","transition":"1s"},
                    {'width':'50%','height':'100%','display':'flex','align-items':'center','justify-content':'center','flex-wrap':'nowrap','flex-direction':'row',"padding":"10px"},
                    {'width':'50%','height':'100%','display':'flex','align-items':'center','justify-content':'center','flex-wrap':'nowrap','flex-direction':'row',"padding":"10px"},
                    {"position":"relative","top":"0","left":"0","width":"100%","height":"100%","display":"flex","align-items":"center","justify-content":"space-between","flex-wrap":"nowrap","flex-direction":"row","overflow-y":"hidden","overflow-x":"hidden"}

                ];
                var PopUpPostagemEditAndDeletePostsClass = [
                'overlay-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'modal-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'line-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'index-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'titulo-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'contente-1-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'contente-2-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'contente-final-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'Button-Edicao-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'Button-Exclusao-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts',
                'Formulario-de-Edicao-and-Exclusao-de-Dados-Informacoes-de-dados-da-postagem-my-posts'
                ];
                var PopUpPostagemEditAndDeletePostsIds = [
                    'overlay',
                    'modal',
                    'line',
                    'index',
                    'titulo-header',
                    'contente-1',
                    'contente-2',
                    'contente-final',
                    'Button-Edicao',
                    'Button-Exclusao',
                    'Formulario-Edicao-and-Exclusao'
                ];
                for (let index = 0; index < 10; index++) {
                    var divs = $("<div>");
                    PopUpPostagemEditAndDeletePosts.push(divs);
                }
                var form = $("<form>");
                PopUpPostagemEditAndDeletePosts.push(form);
                for (let index = 0; index < PopUpPostagemEditAndDeletePosts.length; index++) {
                    PopUpPostagemEditAndDeletePosts[index].addClass(PopUpPostagemEditAndDeletePostsClass[index]).attr('id',PopUpPostagemEditAndDeletePostsIds[index]).css(PopUpPostagemEditAndDeletePostsCss[index]);
                }
                for (let index = 0; index < PopUpPostagemEditAndDeletePosts.length; index++) {
                    if(PopUpPostagemEditAndDeletePosts[index].attr("id") === "overlay")
                    {
                        var overlay = PopUpPostagemEditAndDeletePosts[index];
                        if(PopUpPostagemEditAndDeletePosts[index + 1].attr("id") === "modal")
                        {
                            var modal = PopUpPostagemEditAndDeletePosts[index + 1];
                            if(PopUpPostagemEditAndDeletePosts[index + 2].attr("id") === "line")
                            {
                                var line = PopUpPostagemEditAndDeletePosts[index + 2];
                                if(PopUpPostagemEditAndDeletePosts[index + 3].attr("id") === "index")
                                {
                                    var indexElemento = PopUpPostagemEditAndDeletePosts[index + 3];
                                    if(PopUpPostagemEditAndDeletePosts[index + 4].attr("id") === "titulo-header")
                                    {
                                        var titulo = PopUpPostagemEditAndDeletePosts[index + 4];
                                        if(PopUpPostagemEditAndDeletePosts[index + 5].attr("id") === "contente-1")
                                        {
                                            var contente1 = PopUpPostagemEditAndDeletePosts[index + 5];
                                            if(PopUpPostagemEditAndDeletePosts[index + 6].attr("id") === "contente-2")
                                            {
                                                var contente2 = PopUpPostagemEditAndDeletePosts[index + 6];
                                                if(PopUpPostagemEditAndDeletePosts[index + 7].attr("id") === "contente-final")
                                                {
                                                    var contentefinal = PopUpPostagemEditAndDeletePosts[index + 7];
                                                    if(PopUpPostagemEditAndDeletePosts[index + 8].attr("id") === "Button-Edicao")
                                                    {
                                                        var ButtonEdicao = PopUpPostagemEditAndDeletePosts[index + 8];
                                                        if(PopUpPostagemEditAndDeletePosts[index + 9].attr("id") === "Button-Exclusao")
                                                        {
                                                            var ButtonExclusao = PopUpPostagemEditAndDeletePosts[index + 9];
                                                            if(PopUpPostagemEditAndDeletePosts[index + 10].attr("id") === "Formulario-Edicao-and-Exclusao")
                                                            {
                                                                var Formulario = PopUpPostagemEditAndDeletePosts[index + 10];

                                                                modal.append(line);
                                                                line.append(indexElemento);
                                                                Formulario.append(contente1);
                                                                Formulario.append(contente2);
                                                                Formulario.append(contentefinal);
                                                                indexElemento.append(titulo);
                                                                indexElemento.append(Formulario);
                                                                contentefinal.append(ButtonEdicao);
                                                                contentefinal.append(ButtonExclusao);
                                                                $(document.body).append(overlay);
                                                                $(document.body).append(modal);
                                                                Formulario.attr("id","elementos-formulario-pop-up");
                                                                Formulario.attr("method","POST");
                                                                Formulario.attr("action","#");
                                                                overlay.on("click",function(){
                                                                    $(this).remove();
                                                                    modal.remove();
                                                                });
                                                                Formulario.append($("<input>").addClass("elemento-hidden-input-token").attr("id","elemento-hidden-input-token-id").attr("type","hidden").attr("name","token-edicao").attr("value",$("#CsrfToken").attr("content")));
                                                                var NomeBook = $(this).find(".elemento-class-tables-datas-my-posts").eq(1).text();
                                                                titulo.text(NomeBook);
                                                                
                                                                MyPostComplete[NomeBook].forEach(function(array){
                                                                    var Keys = Object.keys(array);
                                                                    Keys.forEach(function(keys){
                                                                        var input = $("<input>").addClass("elementos-inputs-class-formulario-class").attr("id",keys).css({"width":"100%","height":"100%","border":"none","outline":"none","background":"transparent","color":"white","font-family":"'Montserrat',sans-serif"});
                                                                        input.prop("disabled",true);
                                                                        ValuesNotEdit.push(array[keys]);
                                                                        var InputValue = input.val();
                                                                        InputValue = InputValue+array[keys];
                                                                        input.val(InputValue);
                                                                        var fieldset = $("<fieldset>").addClass("elemento-styling-from-input-class-editavel-elemento-dado-informacao-posts-fieldset").attr("id","editar-elemento-dado-"+keys+"-da-postagem").css({"border-radius":"30px","margin":"20px auto"});
                                                                        var legend = $("<legend>").addClass("elemento-styling-from-input-class-editavel-elemento-dado-informacao-posts-legend").attr("id","editar-elemento-dado-"+keys+"-da-postagem");
                                                                        fieldset.append(input);
                                                                        fieldset.append(legend);
                                                                        legend.text(keys);
                                                                        
                                                                        contente2.append(fieldset);
                                                                        if(input.attr("id") === "id")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","number");
                                                                            input.attr("value",input.val());
                                                                        }
                                                                        if(input.attr("id") === "titulo")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            input.on("input",function(){
                                                                                var mascara = $(this).val();
                                                                                mascara = mascara.slice(0, 50);
                                                                                mascara = mascara.replace(/[--]/g,'');
                                                                                mascara = mascara.replace(/[-]/g,'');
                                                                                mascara = mascara.replace(/[$]/g,'');
                                                                                mascara = mascara.replace(/[+]/g,'');
                                                                                mascara = mascara.replace(/[;]/g,'');
                                                                                mascara = mascara.replace(/[<>]/g,'');
                                                                                mascara = mascara.replace(/[{}]/g,'');
                                                                                mascara = mascara.replace(/[\[]\]/g,'');
                                                                                mascara = mascara.replace(/[&]/g,'');
                                                                                mascara = mascara.replace(/[""]/g,'');
                                                                                mascara = mascara.replace(/['']/g,'');
                                                                                mascara = mascara.replace(/[@]/g,'');
                                                                                mascara = mascara.replace(/[§]/g,'');
                                                                                mascara = mascara.replace(/[¬]/g,'');
                                                                                mascara = mascara.replace(/[()]/g,'');
                                                                                mascara = mascara.replace(/[%]/g,'');
                                                                                mascara = mascara.replace(/[#]/g,'');
                                                                                mascara = mascara.replace(/[*]/g,'');
                                                                                $(this).val(mascara);
                                                                            });
                                                                            input.attr("value",input.val());
                                                                        }
                                                                        if(input.attr("id") === "autor")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            input.on("input",function(){
                                                                                var mascara = $(this).val();
                                                                                mascara = mascara.slice(0, 30);
                                                                                mascara = mascara.replace(/[--]/g,'');
                                                                                mascara = mascara.replace(/[-]/g,'');
                                                                                mascara = mascara.replace(/[$]/g,'');
                                                                                mascara = mascara.replace(/[+]/g,'');
                                                                                mascara = mascara.replace(/[;]/g,'');
                                                                                mascara = mascara.replace(/[<>]/g,'');
                                                                                mascara = mascara.replace(/[{}]/g,'');
                                                                                mascara = mascara.replace(/[\[]\]/g,'');
                                                                                mascara = mascara.replace(/[&]/g,'');
                                                                                mascara = mascara.replace(/[""]/g,'');
                                                                                mascara = mascara.replace(/['']/g,'');
                                                                                mascara = mascara.replace(/[@]/g,'');
                                                                                mascara = mascara.replace(/[§]/g,'');
                                                                                mascara = mascara.replace(/[¬]/g,'');
                                                                                mascara = mascara.replace(/[()]/g,'');
                                                                                mascara = mascara.replace(/[%]/g,'');
                                                                                mascara = mascara.replace(/[#]/g,'');
                                                                                mascara = mascara.replace(/[*]/g,'');
                                                                                $(this).val(mascara);
                                                                            });
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "genero")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("list","generos-edit");
                                                                            var datalist = $("<datalist>").addClass("elemento-datalist-editavel-dados-generos").attr("id","dados-generos-editavel");
                                                                            var generos = ['Ficção',
                                                                            'Não-Ficção',
                                                                            'Poesia',
                                                                            'Drama',
                                                                            'Conto',
                                                                            'Infantojuvenil',
                                                                            'Novela Gráfica',
                                                                            'Humor',
                                                                            'Guias de Viagem',
                                                                            'Ensaios'];
                                                                            generos.forEach(function(option){
                                                                                var options = $("<option>").addClass("elemento-datalist-options-editavel-generos").attr("id","dados-options-generos-editavel");
                                                                                options.attr("value",option);
                                                                                options.text(option);
                                                                                datalist.append(options);
                                                                            });
                                                                            input.closest(".elemento-styling-from-input-class-editavel-elemento-dado-informacao-posts-fieldset").append(datalist);
                                                                            input.attr("list","dados-generos-editavel");
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "sinopse")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            input.on("input",function(){
                                                                                var mascara = $(this).val();
                                                                                mascara = mascara.slice(0,1000);
                                                                                mascara = mascara.replace(/[--]/g,'');
                                                                                mascara = mascara.replace(/[$]/g,'');
                                                                                mascara = mascara.replace(/[+]/g,'');
                                                                                mascara = mascara.replace(/[;]/g,'');
                                                                                mascara = mascara.replace(/[<>]/g,'');
                                                                                mascara = mascara.replace(/[{}]/g,'');
                                                                                mascara = mascara.replace(/[\[]\]/g,'');
                                                                                mascara = mascara.replace(/[&]/g,'');
                                                                                mascara = mascara.replace(/[""]/g,'');
                                                                                mascara = mascara.replace(/['']/g,'');
                                                                                mascara = mascara.replace(/[@]/g,'');
                                                                                mascara = mascara.replace(/[§]/g,'');
                                                                                mascara = mascara.replace(/[¬]/g,'');
                                                                                mascara = mascara.replace(/[()]/g,'');
                                                                                mascara = mascara.replace(/[%]/g,'');
                                                                                mascara = mascara.replace(/[#]/g,'');
                                                                                mascara = mascara.replace(/[*]/g,'');
                                                                                $(this).val(mascara);
                                                                            });
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "data")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            input.attr("value",input.val());
                                                                            
                                                                        }
                                                                        if(input.attr("id") === "hora")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            var ArrayHora = input.val().split(":");
                                                                            input.val(ArrayHora[0]+"h"+ArrayHora[1]+"m"+ArrayHora[2]+"s");
                                                                            input.attr("value",input.val());
                                                                            
                                                                        }
                                                                        if(input.attr("id") === "editora")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            input.on("input",function(){
                                                                                var mascara = $(this).val();
                                                                                mascara = mascara.slice(0, 50);
                                                                                mascara = mascara.replace(/[--]/g,'');
                                                                                mascara = mascara.replace(/[-]/g,'');
                                                                                mascara = mascara.replace(/[$]/g,'');
                                                                                mascara = mascara.replace(/[+]/g,'');
                                                                                mascara = mascara.replace(/[;]/g,'');
                                                                                mascara = mascara.replace(/[<>]/g,'');
                                                                                mascara = mascara.replace(/[{}]/g,'');
                                                                                mascara = mascara.replace(/[\[]\]/g,'');
                                                                                mascara = mascara.replace(/[&]/g,'');
                                                                                mascara = mascara.replace(/[""]/g,'');
                                                                                mascara = mascara.replace(/['']/g,'');
                                                                                mascara = mascara.replace(/[@]/g,'');
                                                                                mascara = mascara.replace(/[§]/g,'');
                                                                                mascara = mascara.replace(/[¬]/g,'');
                                                                                mascara = mascara.replace(/[()]/g,'');
                                                                                mascara = mascara.replace(/[%]/g,'');
                                                                                mascara = mascara.replace(/[#]/g,'');
                                                                                mascara = mascara.replace(/[*]/g,'');
                                                                                $(this).val(mascara);
                                                                            });
                                                                            input.attr("value","Editora: "+input.val());
                                                                            input.on("keydown",function(event){
                                                                                if(event.key === "Delete")
                                                                                {
                                                                                    event.preventDefault();
                                                                                }
                                                                                if(input.val() === "Editora: ")
                                                                                {
                                                                                    if(event.key === "Backspace")
                                                                                    {
                                                                                        event.preventDefault();
                                                                                    }
                                                                                }
                                                                            });                
                                                                        }
                                                                        if(input.attr("id") === "num_paginas")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","number");
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "formato")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            input.on("input",function(){
                                                                                var mascara = $(this).val();
                                                                                mascara = mascara.slice(0, 30);
                                                                                mascara = mascara.replace(/[--]/g,'');
                                                                                mascara = mascara.replace(/[-]/g,'');
                                                                                mascara = mascara.replace(/[$]/g,'');
                                                                                mascara = mascara.replace(/[+]/g,'');
                                                                                mascara = mascara.replace(/[;]/g,'');
                                                                                mascara = mascara.replace(/[<>]/g,'');
                                                                                mascara = mascara.replace(/[{}]/g,'');
                                                                                mascara = mascara.replace(/[\[]\]/g,'');
                                                                                mascara = mascara.replace(/[&]/g,'');
                                                                                mascara = mascara.replace(/[""]/g,'');
                                                                                mascara = mascara.replace(/['']/g,'');
                                                                                mascara = mascara.replace(/[@]/g,'');
                                                                                mascara = mascara.replace(/[§]/g,'');
                                                                                mascara = mascara.replace(/[¬]/g,'');
                                                                                mascara = mascara.replace(/[()]/g,'');
                                                                                mascara = mascara.replace(/[%]/g,'');
                                                                                mascara = mascara.replace(/[#]/g,'');
                                                                                mascara = mascara.replace(/[*]/g,'');
                                                                                $(this).val(mascara);
                                                                            });
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "isbn")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.on("input",function(){
                                                                                var mascara = $(this).val();
                                                                                mascara = mascara.replace(/\D/g, '');
                                                                                if(mascara.length === 13)
                                                                                {
                                                                                    mascara = mascara.replace(/^(\d{3})(\d{2})(\d{3})(\d{4})(\d{1})/g, '$1-$2-$3-$4-$5');
                                                                                }
                                                                                else
                                                                                if(mascara.length === 10)
                                                                                {
                                                                                    mascara = mascara.replace(/^(\d{2})(\d{3})(\d{4})(\d{1})/g, '$1-$2-$3-$4');
                                                                                }
                                                                                mascara = mascara.slice(0,17);
                                                                                $(this).val(mascara);
                                                                            });
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "classificacao")
                                                                        {
                                                                            input.attr("name",input.attr("id"));
                                                                            input.attr("type","text");
                                                                            var ClassificacaoEtaria = [
                                                                                'Livre',
                                                                                '+10',
                                                                                '+12',
                                                                                '+14',
                                                                                '+16',
                                                                                '+18'
                                                                            ];
                                                                            var datalista = $("<datalist>").addClass("datalista-options-classificacao").attr("id","datalista-options-classificacao-id"); 
                                                                            ClassificacaoEtaria.forEach(function(option){
                                                                                var options = $("<option>").addClass("options-values-informacions").attr("id","options-values-informacions-id").attr("value",option);
                                                                                options.text(option);
                                                                                datalista.append(options);
                                                                            });
                                                                            input.attr("list","datalista-options-classificacao-id");
                                                                            input.closest(".elemento-styling-from-input-class-editavel-elemento-dado-informacao-posts-fieldset").append(datalista);
                                                                            input.attr("value",input.val());

                                                                        }
                                                                        if(input.attr("id") === "imagem")
                                                                        {
                                                                            input.remove();
                                                                            if(fieldset.attr("id") === "editar-elemento-dado-imagem-da-postagem")
                                                                            {
                                                                                fieldset.remove();
                                                                            }
                                                                        }
                                                                    });
                                                                });
                                                                var ButtonEd = $("<button>").addClass("botão-edição-postagem-dinamico").attr("id","botão-edição-postagem-dinamico-edição").css({"width":"200px","height":"40px","border-radius":"10px","border":"2px groove #00b4ff","background":"transparent","color":"#00b4ff","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("type","button");
                                                                var ButtonEx = $("<button>").addClass("botão-edição-postagem-dinamico").attr("id","botão-edição-postagem-dinamico-exclusão").css({"width":"200px","height":"40px","border-radius":"10px","border":"2px groove red","background":"transparent","color":"red","font-family":"'Montserrat',sans-serif","cursor":"pointer"}).attr("type","button");
                                                                ButtonEd.on("mouseenter",function(){
                                                                    $(this).css("background","#00b4ff");
                                                                    $(this).css("color","white");
                                                                    $(this).css("border","none");
                                                                });
                                                                ButtonEx.on("mouseenter",function(){
                                                                    $(this).css("background","red");
                                                                    $(this).css("color","white");
                                                                    $(this).css("border","none");
                                                                });
                                                                ButtonEd.on("mouseleave",function(){
                                                                    $(this).css("background","transparent");
                                                                    $(this).css("color","#00b4ff");
                                                                    $(this).css("border","2px groove #00b4ff");
                                                                });
                                                                ButtonEx.on("mouseleave",function(){
                                                                    $(this).css("background","transparent");
                                                                    $(this).css("color","red");
                                                                    $(this).css("border","2px groove red");
                                                                });
                                                                ButtonEdicao.append(ButtonEd);
                                                                ButtonExclusao.append(ButtonEx);
                                                                ButtonEd.text("Editar Postagem");
                                                                ButtonEx.text("Excluir Postagem");
                                                                var Imagem = $("<img>").addClass("elemento-imagem-index-popup-imagem").attr("id","elemento-imagem-edicao-e-exclusao").css({"width":"700px","height":"700px","border-radius":"50%","position":"absolute","top":"50%","left":"20%","cursor":"pointer","transform":"translate(-50%,-50%)","transition":"1s"});
                                                                var NameImage = "";
                                                                MyPostComplete[NomeBook].forEach(function(array){
                                                                    NameImage = array.imagem;
                                                                });
                                                                Imagem.attr("src","../../publicacao/"+NameImage);
                                                                contente1.append(Imagem);
                                                                Imagem.on("click",function(){
                                                                    if(Imagem.width() === 700)
                                                                    {
                                                                        contente1.css({"width":"100%","max-width":"100%"});
                                                                        contente2.css({"width":"0"});
                                                                        Imagem.css({"top":"0","left":"0","width":"100%","height":"100%","transform":"translate(0,0)","border-radius":"0"});
                                                                    }
                                                                    else
                                                                    if(Imagem.width() !== 700)
                                                                    {
                                                                        contente1.css({"width":"50%","max-width":"50%"});
                                                                        contente2.css({"width":"50%","max-width":"50%"});
                                                                        Imagem.css({"top":"50%","left":"20%","width":"700px","height":"700px","transform":"translate(-50%,-50%)","border-radius":"50%"});
                                                                    }
                                                                });
                                                                var BarraTranslate = $("<div>").addClass("container-translative-absolute-bottons").attr("id","elemento-translative-absolute-buttons").css({"width":"100%","height":"50px","position":"absolute","bottom":"-50px","right":"0","background":"#333","display":"flex","align-items":"center","justify-content":"space-evenly","flex-wrap":"nowrap","flex-direction":"row","transition":"1s"});
                                                                Formulario.append(BarraTranslate);
                                                                var ButtonEditSubmit = $("<input>").addClass("element-submit-para-edicao-de-dados").attr("id","elementos-submit-para-edicao-de-dados").attr("type","submit").attr("value","Editar Dados").css({"width":"200px","height":"40px","border-radius":"20px","border":"2px groove white","cursor":"pointer","color":"white","background":"transparent","font-family":"'Montserrat',sans-serif","transition":"1s"});
                                                                var ButtonCancelar  = $("<button>").addClass("elemento-botão-cancelar-acao-de-edicao").attr("id","elementos-submit-para-edicao-de-dados-cancel").attr("type","button").css({"width":"200px","height":"40px","border-radius":"20px","border":"2px groove red","cursor":"pointer","color":"red","background":"transparent","font-family":"'Montserrat',sans-serif","transition":"1s"}).text("Cancelar Edição");
                                                                ButtonEditSubmit.on("mouseenter",function(){$(this).css({"transition":"1s","background":"white","color":"#333","cursor":"pointer"});});
                                                                ButtonEditSubmit.on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"white","cursor":"pointer"});});
                                                                ButtonCancelar.on("mouseenter",function(){$(this).css({"transition":"1s","background":"red","color":"white","cursor":"pointer"});});
                                                                ButtonCancelar.on("mouseleave",function(){$(this).css({"transition":"1s","background":"#333","color":"red","cursor":"pointer"});});
                                                                BarraTranslate.append(ButtonEditSubmit);
                                                                BarraTranslate.append(ButtonCancelar);
                                                                ButtonEd.on("click",function(){
                                                                    // crie um container que simplismente suba suavimente com o botão de confirmação de edição , e desça o botão de edição e exclusão 
                                                                    BarraTranslate.css("bottom","0");
                                                                    contentefinal.css("bottom","-50px");

                                                                    ButtonCancelar.on("click",function(){
                                                                        BarraTranslate.css("bottom","-50px");
                                                                        contentefinal.css("bottom","0");
                                                                        for (let index = 0; index < $(this).closest(".container-translative-absolute-bottons").closest("#elementos-formulario-pop-up").find("#contente-2").find("fieldset").length; index++) {
                                                                            $(this).closest(".container-translative-absolute-bottons").closest("#elementos-formulario-pop-up").find("#contente-2").find("fieldset").find("input").eq(index).val(ValuesNotEdit[index]);
                                                                            $(this).closest(".container-translative-absolute-bottons").closest("#elementos-formulario-pop-up").find("#contente-2").find("fieldset").find("input").eq(index).prop("disabled",true);
                                                                            
                                                                        } 
                                                                    });
                                                                    $(this).closest(".Button-Edicao-elemento-popup-edicao-and-exclusao-de-dados-da-postagem-my-posts").closest(".Formulario-de-Edicao-and-Exclusao-de-Dados-Informacoes-de-dados-da-postagem-my-posts").find("#contente-2").find("fieldset").find("input").each(function(index , elemento){
                                                                        
                                                                        if($(elemento).attr("id") === "id")
                                                                        {
                                                                            $(elemento).prop("disabled",true);
                                                                        }
                                                                        if($(elemento).attr("id") === "titulo")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "autor")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "genero")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "sinopse")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "data")
                                                                        {
                                                                            $(elemento).prop("disabled",true);
                                                                        }
                                                                        if($(elemento).attr("id") === "hora")
                                                                        {
                                                                            $(elemento).prop("disabled",true);
                                                                        }
                                                                        if($(elemento).attr("id") === "editora")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "num_paginas")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "impresso")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "isbn")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                        }
                                                                        if($(elemento).attr("id") === "classificacao")
                                                                        {
                                                                            $(elemento).prop("disabled",false);
                                                                            // var ClassificacaoEtaria = [
                                                                            //     'Livre',
                                                                            //     '+10',
                                                                            //     '+12',
                                                                            //     '+14',
                                                                            //     '+16',
                                                                            //     '+18'
                                                                            // ];
                                                                            // var datalista = $("<datalist>").addClass("datalista-options-classificacao").attr("id","datalista-options-classificacao-id"); 
                                                                            // ClassificacaoEtaria.forEach(function(option){
                                                                            //     var options = $("<option>").addClass("options-values-informacions").attr("id","options-values-informacions-id").attr("value",option);
                                                                            //     options.text(option);
                                                                            //     datalista.append(options);
                                                                            // });
                                                                            // $(elemento).attr("list","options-values-informacions-id");
                                                                            // $(elemento).closest("fieldset").append(datalista);
                                                                        }
                                                                    });
                                                                });
                                                                Formulario.on("submit",function(event){
                                                                    event.preventDefault();
                                                                });
                                                                // ButtonEx.on("click",function(){
                                                                //     overlay.remove();
                                                                //     modal.remove();
                                                                // });
                                                                
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        });
    });
    window.addEventListener("load",function(){
        // O evento $(document) é usado para manipular ou delegar eventos no DOM inteiro, permitindo acessar ou monitorar elementos estáticos e dinâmicos na página.
    $(document).on("click","#elementos-submit-para-edicao-de-dados", function(){
            var formData = new FormData();
            formData.append('_token',$("#CsrfToken-1").attr("content"));
            formData.append('id',$("#id").val());
            formData.append('titulo',$("#titulo").val());
            formData.append('autor',$("#autor").val());
            formData.append('genero',$("#genero").val());
            formData.append('sinopse',$("#sinopse").val());
            formData.append('editora',$("#editora").val());
            formData.append('numero',$("#num_paginas").val());
            formData.append('isbn',$("#isbn").val());
            formData.append('classificacao',$("#classificacao").val());
            $.ajax({
                // url
                url: '/EditarPostagem/'+atob($("#IdContent").attr("content")).charCodeAt(0),
                // type
                type: 'POST',
                // data
                data: formData,
                // contentType
                contentType: false,
                // processData
                processData: false,
                // sucess
                success: function(response)
                {
                    if(response.status === 'sucess')
                    {
                        $("body").append(
                            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"13","cursor":"pointer"}),
                            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid rgba(0,255,0)","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"14"}).append(
                                $("<div>").html('<i class="fa-solid fa-check"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"rgba(0,255,0)","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                                $("<div>").append(
                                    $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
                        var NovosDados = {};
                        ValuesNotEdit = [];
                        NovosDados[$("#id").attr("value")] = $("#id").val();
                        NovosDados[$("#titulo").attr("value")] = $("#titulo").val();
                        NovosDados[$("#autor").attr("value")] = $("#autor").val();
                        NovosDados[$("#genero").attr("value")] = $("#genero").val();
                        NovosDados[$("#sinopse").attr("value")] = $("#sinopse").val();
                        NovosDados[$("#editora").attr("value")] = $("#editora").val();
                        NovosDados[$("#num_paginas").attr("value")] = $("#num_paginas").val();
                        NovosDados[$("#isbn").attr("value")] = $("#isbn").val();
                        NovosDados[$("#classificacao").attr("value")] = $("#classificacao").val();
                        $("body").find("*").not("#elemento-dinamico-my-post-tabela-id , #elemento-dinamico-my-post-tabela-id *").each(function(index , elemento){
                            if(NovosDados[$(elemento).text()])
                            {
                                $(elemento).text(NovosDados[$(elemento).text()]);
                            }
                        });
                        $(".celulas").each(function(index,elemento){
                            $(elemento).on("click",function(){
                                if($("#modal-popup-dashboards-interative-table-gerenciamento-de-postagem-1"))
                                {
                                setTimeout(function(){
                                        if($(".fieldset-popup").eq(1).find("p").text().trim() === Object.keys(NovosDados)[2].trim())
                                        {
                                            if($("#text-popup-dashboards-interative-table-gerenciamento-de-postagem-1").text().trim() === Object.keys(NovosDados)[2].trim())
                                            {
                                                $("#text-popup-dashboards-interative-table-gerenciamento-de-postagem-1").text(NovosDados[$("#text-popup-dashboards-interative-table-gerenciamento-de-postagem-1").text()]);
                                                $(".fieldset-popup").find("p").each(function(index , elemento){
                                                    if(NovosDados[$(elemento).text().trim()])
                                                    {
                                                        $(elemento).text(NovosDados[$(elemento).text().trim()]);
                                                    }
                                                });
                                            }
                                        }
                                    },1000);
                                }
                            });
                        });
                        $(".WTI5c2RXNWhMV1JoTFhSaFltVnNZUT09").each(function(index , elemento){
                            $(elemento).on("click",function(){
                                if($("#modal-1"))
                                {
                                    setTimeout(function(){
                                        if($("#Aba2-1").find("fieldset").eq(1).find("p").text().trim() === Object.keys(NovosDados)[2].trim())
                                        {
                                            $("#Aba2-1").find("fieldset").find("p").each(function(index , elemento){
                                                if(NovosDados[$(elemento).text().trim()])
                                                {
                                                    $(elemento).text(NovosDados[$(elemento).text().trim()]);
                                                }
                                            });
                                        }
                                    },1000);
                                }
                            });
                        });
                        $(".elemento-posts-my-posts-p").each(function(index , elemento){
                            if($(elemento).text().trim() === Object.keys(NovosDados)[2])
                            {
                                $(elemento).text(NovosDados[$(elemento).text().trim()]);
                                // se a chave do genero , for igual o valor do genero (o usuario não trocou o genero do livro)
                                if(Object.keys(NovosDados)[4] !== Object.values(NovosDados)[4])
                                {
                                    let generosW = {
                                        "Ficção":"../../img/Colaborador/Ficção-white.png",
                                        "Não-Ficção":"../../img/Colaborador/Não-Ficção-white.png",
                                        "Poesia":"../../img/Colaborador/Poesia-white.png",
                                        "Drama":"../../img/Colaborador/Drama-white.png",
                                        "Conto":"../../img/Colaborador/Conto-White.png",
                                        "Infantojuvenil":"../../img/Colaborador/Infanto-White.png",
                                        "Novela Gráfica":"../../img/Colaborador/Novela-Grafica-White.png",
                                        "Humor":"../../img/Colaborador/Humor-White.png",
                                        "Guias de Viagem":"../../img/Colaborador/Guia-de-Viagem-White.png",
                                        "Ensaios":"../../img/Colaborador/Ensaio-White.png"
                                    };
                                    let generosB = {
                                        "Ficção":"../../img/Colaborador/Ficção-Black.png",
                                        "Não-Ficção":"../../img/Colaborador/Não-Ficção-Black.png",
                                        "Poesia":"../../img/Colaborador/Poesia-black.png",
                                        "Drama":"../../img/Colaborador/Drama-Black.png",
                                        "Conto":"../../img/Colaborador/Conto-Black.png",
                                        "Infantojuvenil":"../../img/Colaborador/Infanto-Black.png",
                                        "Novela Gráfica":"../../img/Colaborador/Novela-Grafica-Black.png",
                                        "Humor":"../../img/Colaborador/Humor-Black.png",
                                        "Guias de Viagem":"../../img/Colaborador/Guia-de-Viagem-Black.png",
                                        "Ensaios":"../../img/Colaborador/Ensaio.png"
                                    }
                                    var imagemWhitePath = null;
                                    var imagemBlackPath = null;
                                    Object.keys(generosW).forEach(function(elemento,index){
                                        if(elemento === Object.values(NovosDados)[4])
                                        {
                                            var imagemWhite = generosW[elemento];
                                            var imagemBlack = generosB[elemento];
                                            imagemWhitePath = imagemWhite;
                                            imagemBlackPath = imagemBlack;
                                        }
                                    });
                                    $(elemento).closest(".elemento-posts-my-post").find(".elemento-posts-my-posts-img").attr("src",imagemWhitePath);
                                    $(elemento).closest(".elemento-posts-my-post").find(".elemento-posts-my-posts-button").find(".elemento-posts-my-posts-img-bottom").attr("src",imagemWhitePath);
                                    $(elemento).closest(".elemento-posts-my-post").find(".elemento-posts-my-posts-button").on("mouseenter",function(){
                                        $(this).find(".elemento-posts-my-posts-img-bottom").attr("src",imagemBlackPath);
                                    });
                                    $(elemento).closest(".elemento-posts-my-post").find(".elemento-posts-my-posts-button").on("mouseleave",function(){
                                        $(this).find(".elemento-posts-my-posts-img-bottom").attr("src",imagemWhitePath);
                                    });
                                }
                                
                            }
                        });
                        // verifica se o nome do Livro foi Alterado
                        if(Object.keys(NovosDados)[2] !== Object.values(NovosDados)[2])
                        {
                            // o novo nome do livro sera a nova chave , e os valores do nome antigo passaram para o novo nome
                            MyPostComplete[Object.values(NovosDados)[2]] = MyPostComplete[Object.keys(NovosDados)[2]];
                            // deletará o antigo nome
                            delete MyPostComplete[Object.keys(NovosDados)[2]];

                            Object.values(MyPostComplete[Object.values(NovosDados)[2]]).forEach(function(array){
                                array.titulo = Object.values(NovosDados)[2];
                                array.autor = Object.values(NovosDados)[3];
                                array.genero = Object.values(NovosDados)[4];
                                array.sinopse = Object.values(NovosDados)[5];
                                array.editora = Object.values(NovosDados)[6];
                                array.isbn = Object.values(NovosDados)[7];
                                array.classificacao = Object.values(NovosDados)[8];
                            });
                            Object.values(MyPostComplete[Object.values(NovosDados)[2]]).forEach(function(array){
                                Object.values(array).forEach(function(values){
                                    ValuesNotEdit.push(values);
                                });
                            });
                        }
                        if(Object.keys(NovosDados)[2] === Object.values(NovosDados)[2])
                        {
                            MyPostComplete[Object.keys(NovosDados)[2]].forEach(function(array){
                                // console.log(`O Elemento ${Object.keys(NovosDados)[0]} , está no Indice 0`); // id
                                // console.log(`O Elemento ${Object.keys(NovosDados)[1]} , está no Indice 1`); // numero de paginas (num_paginas)
                                // console.log(`O Elemento ${Object.keys(NovosDados)[2]} , está no Indice 2`); // titulo 
                                // console.log(`O Elemento ${Object.keys(NovosDados)[3]} , está no Indice 3`); // autor
                                // console.log(`O Elemento ${Object.keys(NovosDados)[4]} , está no Indice 4`); // genero
                                // console.log(`O Elemento ${Object.keys(NovosDados)[5]} , está no Indice 5`); // sinopse
                                // console.log(`O Elemento ${Object.keys(NovosDados)[6]} , está no Indice 6`); // Editora
                                // console.log(`O Elemento ${Object.keys(NovosDados)[7]} , está no Indice 7`); // isbn
                                // console.log(`O Elemento ${Object.keys(NovosDados)[8]} , está no Indice 8`); // classificacao
                                array.titulo = Object.values(NovosDados)[2];
                                array.autor = Object.values(NovosDados)[3];
                                array.genero = Object.values(NovosDados)[4];
                                array.sinopse = Object.values(NovosDados)[5];
                                array.editora = Object.values(NovosDados)[6];
                                array.isbn = Object.values(NovosDados)[7];
                                array.classificacao = Object.values(NovosDados)[8];
                            });
                            Object.values(MyPostComplete[Object.values(NovosDados)[2]]).forEach(function(array){
                                Object.values(array).forEach(function(values){
                                    ValuesNotEdit.push(values);
                                });
                            });
                        }
                        // a cada clique resetará o array
                        NovosDados = {};
                    }
                    else
                    if(response.status === 'error')
                    {
                        $("body").append(
                            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"13","cursor":"pointer"}),
                            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"14"}).append(
                                $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                                $("<div>").append(
                                    $("<span>").text(response.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
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
                        resposta = false;
                    }
                },
                // error
                erro: function(response)
                {
                    $("body").append(
                        $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"13","cursor":"pointer"}),
                        $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"14"}).append(
                            $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                            $("<div>").append(
                                $("<span>").text(response.responseJSON.message).css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                            )
                        ),
                    );
                    setTimeout(function(){
                        $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                    }, 500)
                    $("#overley-json-response").on("click",function(){
                        $(this).remove();
                        $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                        setTimeout(function(){
                            $("#modal-response-json").remove();
                        }, 500);
                    });
                    if(error.responseJSON.error.length > 0)
                    {
                        $("body").append(
                            $("<div>").attr("id","overley-json-response").css({"position":"fixed","top":"0","left":"0","width":"100%","height":"100%","background":"rgba(0,0,0,0.7)","z-index":"13","cursor":"pointer"}),
                            $("<div>").attr("id","modal-response-json").css({"position":"fixed","top":"-100%","left":"50%","width":"70%","height":"30%","background":"linear-gradient(45deg , #333 , black)","transform":"translate(-50% , -50%)","border-radius":"100px","border":"2px solid red","opacity":"0","transition":"1s","display":"flex","align-items":"center","justify-content":"center","z-index":"14"}).append(
                                $("<div>").html('<i class="fa-solid fa-circle-exclamation"></i>').css({"position":"absolute","top":"-10px","left":"50%","color":"#333","background":"red","transform":"translate(-50%,0)","width":"30px","height":"30px","border-radius":"50%","display":"flex","align-items":"center","justify-content":"center"}),
                                $("<div>").append(
                                    $("<span>").attr("id","elemento-mensagem-error-globals").css({"font-size":"30px","font-family":"'Teko',sans-serif","font-style":"italic","color":"white"})
                                )
                            ),
                        );
                        setTimeout(function(){
                            $("#modal-response-json").css({"top":"50%","transition":"1s","opacity":"1"});
                        }, 500)
                        $("#overley-json-response").on("click",function(){
                            $(this).remove();
                            $("#modal-response-json").css({"top":"-100%","transition":"1s","opacity":"0"});
                            setTimeout(function(){
                                $("#modal-response-json").remove();
                            }, 500);
                        });
                        var GlobalErrors = error.responseJSON.error;
                        Object.values(GlobalErrors).forEach(function(value){
                            var p = $("<p>").text(value);
                            $("#elemento-mensagem-error-globals").append(p);
                        });
                    }
                }
            });
            
    });
    });
    $(window).on("load",()=>{
        $(document).on("click","#botão-edição-postagem-dinamico-exclusão", ()=>{
            var id = $("#id").attr("value");
            axios.post(`/ExclusaoPost/`,{
                id: id
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        });
    });
}
else
{
    $("#Page-3").append(
        $("<div>").css({
            "width":"100%",
            "display":"flex",
            "align-items":"center",
            "justify-content":"space-around",
            "flex-wrap":"nowrap",
            "flex-direction":"column",
            "opacity":"0.7"
        }).append(
            $("<div>").append($("<img>").attr("src","../../img/welcome/Logo.png")),
            $("<div>").append($("<h2>").text("VOCÊ NÃO TEM POSTAGENS NO BOOKNEST"))
        )
    )
}