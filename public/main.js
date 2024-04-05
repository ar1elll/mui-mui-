
const a = document.querySelector('.burgerContainer')
let burger = document.querySelector('.menu')


document.querySelector('.burgerContainer').addEventListener('click', function(){
    burger.classList.toggle('active')
})

//burger


function darkmode(){
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode')== 'true'

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('darkMode', !wasDarkmode)
}

document.querySelector('#nightMode').addEventListener('click', darkmode)
// dark mode system

