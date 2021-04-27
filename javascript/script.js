
const btn_entrar = document.querySelector('#logar-btn')
const btn_inscrever = document.querySelector('#inscreve-se-btn')
const container = document.querySelector('.container')

btn_inscrever.addEventListener('click', () =>{
    container.classList.add('inscreve-mode')
})

btn_entrar.addEventListener('click', () =>{
    container.classList.remove('inscreve-mode')
})

