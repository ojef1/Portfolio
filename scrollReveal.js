window.sr = ScrollReveal({ reset: true, duration: 1500,viewFactor: 0.5 });

sr.reveal('.container-home img',{interval: 200})
sr.reveal('.textos div', {interval:200})
sr.reveal('.container-home',{duration:500})

sr.reveal('.container-about img')
sr.reveal('.titulo-about',{rotate:{x:20,y:0,z:0}})
sr.reveal('.texto-about',{rotate:{x:0,y:20,z:0}})

sr.reveal('.card-conhecimento', {
    interval: 200, duration: 500, rotate:{x:0,y:80,z:0}, delay: 100,
    mobile: false
})
sr.reveal('.card-conhecimento', {
    interval: 200, duration: 500, rotate:{x:0,y:80,z:0}, delay: 100,
    viewFactor:0.3,mobile: true
})
sr.reveal('.titulo-conhecimentos',{rotate:{x:20,y:0,z:0}})

sr.reveal('.titulo-certificados',{rotate:{x:20,y:0,z:0}})
sr.reveal('.card-certificado',{interval:200, distance:'50px'})

sr.reveal('.titulo-projetos',{rotate:{x:20,y:0,z:0}})
sr.reveal('.projeto-destaque',{rotate:{x:40,y:0,z:0}, viewFactor: 0.2})
sr.reveal('.card-projeto',{
    interval:200, rotate:{x:40,y:0,z:0}, delay:0,viewFactor: 0.2
})

sr.reveal('.card-contato',{rotate:{x:20,y:0,z:0}})
