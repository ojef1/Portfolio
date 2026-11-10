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



//abre o certificado em um popup, sem tirar o usuário da página
function abrirCertificado(event, card){
    event.preventDefault()
    var modal = document.getElementById('modalCertificado')
    var imagem = modal.querySelector('.modal-imagem')
    imagem.src = card.getAttribute('href')
    imagem.alt = 'Certificado: ' + card.querySelector('.nome-certificado').textContent
    modal.showModal()
}

//fecha o popup do certificado
function fecharCertificado(){
    document.getElementById('modalCertificado').close()
}

//fecha o popup também ao clicar fora da imagem
document.getElementById('modalCertificado').addEventListener('click', function(event){
    if (event.target === this) fecharCertificado()
})
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



