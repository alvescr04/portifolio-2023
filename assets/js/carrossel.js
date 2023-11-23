// carrossel automatcio

const imgs = document.querySelector('#img')
const img = document.querySelectorAll('#img img')

let slideAtual = 0

function carrossel(){
    slideAtual++

    if(slideAtual > img.length - 1){
        slideAtual = 0
    }

    imgs.style.transform = `translateX(${-slideAtual * img[0].offsetWidth}px)`
}

setInterval(carrossel, 2000)



// carrossel manual

const carrossel2 = document.querySelector('div#carrossel-2')
const slides = document.querySelectorAll('.slide')
const btnDireita = document.querySelector('.direita')
const btnEsquerda = document.querySelector('.esquerda')

let slideAtual2 = 0

btnDireita.addEventListener('click',()=>{
    slideAtual2++

    if(slideAtual2 > slides.length - 1){
        slideAtual2 = 0
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

btnEsquerda.addEventListener('click', ()=>{
    slideAtual2--

    if(slideAtual2 < 0) {
        slideAtual2 = slides.length - 1
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})