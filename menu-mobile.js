const headerColor = document.querySelector('header')
const ativaLiNav =  document.querySelectorAll('.js-menu-ul-li')
function hadleClickMenuHamburger(){
    headerColor.classList.toggle('ativa-height-color')
    ativaLiNav.forEach((item)=>{
        item.classList.toggle('ativado-js-menu-ul-li')
    })
}