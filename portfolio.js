var ul = document.querySelector('.menuMobile ul');
//abre e fecha o menu mobile quando clica no icone 
function menuShow() {
  

    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        document.getElementById('imgMenu').src = 'icons/bars.svg'
    }else{
        ul.classList.add('open');
        document.getElementById('imgMenu').src = 'icons/times.svg'
    }
}

//fecha o menu mobile ao escolher a navegação
function menuClose(){
 ul.classList.remove('open')
 document.getElementById('imgMenu').src = 'icons/bars.svg'
}



//alertas para as quando clicarem nos botões onde o link não está pronto
function alerta(){
    alert('Desculpe o transtorno, essa parte ainda está em desenvolvimento!')
}

//descrição dos projetos, muda quando passa o mouse em cima
card1 = document.querySelector('#card1')
card2 = document.querySelector('#card2')
card3 = document.querySelector('#card3')
textDesc1 = document.querySelector('.projeto1')
textDesc2 = document.querySelector('.projeto2')
textDesc3 = document.querySelector('.projeto3')



card1.addEventListener("mouseover", function(){
    descrição = document.querySelector("#descrição-projeto");
    descrição.innerHTML = textDesc1.innerHTML;

//aqui faz ele não mostrar nada quando tira o mouse de cima    
    card1.addEventListener("mouseout",function(){
    descrição.innerHTML = "<h3>Clique na imagem e veja a descrição do projeto.</h3>"
  })
})
card2.addEventListener("mouseover", function(){
    descrição = document.querySelector("#descrição-projeto");
  descrição.innerHTML = textDesc2.innerHTML;;

  //aqui faz ele não mostrar nada quando tira o mouse de cima    
  card2.addEventListener("mouseout",function(){
    descrição.innerHTML = "<h3>Clique na imagem e veja a descrição do projeto.</h3>"
  })
})
card3.addEventListener("mouseover", function(){
    descrição = document.querySelector("#descrição-projeto");
  descrição.innerHTML = textDesc3.innerHTML;;

  //aqui faz ele não mostrar nada quando tira o mouse de cima    
  card3.addEventListener("mouseout",function(){
    descrição.innerHTML = "<h3>Clique na imagem e veja a descrição do projeto.</h3>"
  })
})

//icones que tecnologia que aparecem na descrição
iconHtml = '<img src="img/projetos/html.png" width ="40">'
iconCss = '<img src="img/projetos/css.png" width ="40">' 
iconJs = '<img src="img/projetos/js.png" width ="40">' 
iconVue = '<img src="img/projetos/vue.png" width = "40">'
iconBootstrap = '<img src="img/projetos/bootstrap.png" width = "40">'

document.querySelector('.projeto1 span').innerHTML = iconHtml
document.querySelector('.projeto1 span').innerHTML += iconCss
document.querySelector('.projeto1 span').innerHTML += iconJs

document.querySelector('.projeto2 span').innerHTML = iconVue


document.querySelector('.projeto3 span').innerHTML = iconHtml
document.querySelector('.projeto3 span').innerHTML += iconCss
document.querySelector('.projeto3 span').innerHTML += iconJs
document.querySelector('.projeto3 span').innerHTML += iconBootstrap


//esconde a seta lateral quando está navegando pelas seções home e footer
function esconderSeta(){
  seta = document.querySelector('.seta')

  seta= seta.style.display ='none'
}
//mostra a seta lateral quando sai das seções home e footer
function mostrarSeta(){
  seta = document.querySelector('.seta')

  seta= seta.style.display ='block'
}



