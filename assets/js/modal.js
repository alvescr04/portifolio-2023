let fade = document.querySelector('#fade')
let modal = document.querySelector('#modal')
let abrirModal = document.querySelector('#cadastrar')

let eventos = [fade, abrirModal]

let toogleModal = () => {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

eventos.map((elemento)=>{
    elemento.addEventListener('click', toogleModal)
})
