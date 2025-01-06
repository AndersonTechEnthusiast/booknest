document.querySelectorAll(".containers-categorias-category").forEach(function(variavel,index){
    variavel.addEventListener("click",function(event){
        event.preventDefault();
        document.querySelectorAll(".table-view-category").forEach(function(tables_containers){
            tables_containers.style.transition = "1s";
            tables_containers.style.left = "100%";
        });
        document.querySelectorAll(".table-view-category")[index].style.transition = "1s";
        document.querySelectorAll(".table-view-category")[index].style.left = "0";
    });
});