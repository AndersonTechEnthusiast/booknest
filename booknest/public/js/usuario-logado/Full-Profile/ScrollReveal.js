// ScrollReveal , via CDN 
// Entendo como funciona 
// criando uma variavel para o nome do window
// quando coloco window seleciono o documento todo
window.revelar = ScrollReveal({reset:true})

// chamando a classe pela variavel criada Revelar
revelar.reveal('.scroll_reveal',{
    duration: 2000,
    distance: '90px'
})
// estrutura
// variavel_window_criada.reveal('.classe',{
//      animations
//})