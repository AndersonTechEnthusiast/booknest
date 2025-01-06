$(".posts-link-reedirect").each(function(index , elemento){
    $(elemento).on("click", function(event){
        event.preventDefault();
    });
});
