
document.querySelectorAll(".link-translate-categorias").forEach(function(variavel,index){
    variavel.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelectorAll(".containers-category-books-view").forEach(function(category_containers){
            category_containers.style.transition = "1s";
            category_containers.style.left = "100%";
        });
        document.querySelectorAll(".containers-category-books-view")[index].style.transition = "1s";
        document.querySelectorAll(".containers-category-books-view")[index].style.left = "0";
    });
});