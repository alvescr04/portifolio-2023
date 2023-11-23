
let campoNome = document.querySelector('#nome')
let campoEmail = document.querySelector('#email')
let campoSenha = document.querySelector('#texto')
let formulario = document.querySelector('#form')
let btnCadastrar = document.querySelector('input[type=submit]')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    localStorage.setItem('nome', campoNome.value)
    localStorage.setItem('texto', campoSenha.value)
    localStorage.setItem('email', campoEmail.value)

    alert(`Olá ${campoNome.value} , sua mensagem foi enviada com sucesso!`)
    
    location.href = ''

})