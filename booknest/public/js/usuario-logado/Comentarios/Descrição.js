var texto = Object.values($("#descricao-do-contribuinte").text());
$("#descricao-do-contribuinte").text('');
texto.forEach(function(elemento , index){
    setTimeout(function(){
        $("#descricao-do-contribuinte").css({"font-family":"'Teko',sans-serif","font-size":"18px","font-style":"italic"}).text($("#descricao-do-contribuinte").text() + elemento).fadeIn(1000);
    },10*index);
});