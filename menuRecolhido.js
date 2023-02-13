const btnMobile = document.getElementById('btn-mobile')

const btnMenu1 = document.querySelector('.btn-menu1')
const btnMenu2 = document.querySelector('.btn-menu2')
const btnMenu3 = document.querySelector('.btn-menu3')

btnMenu1.addEventListener('click', function()
{
    btnMobile.classList.remove('in')
})

btnMenu2.addEventListener('click', function()
{
    btnMobile.classList.remove('in')
})

btnMenu3.addEventListener('click', function()
{
    btnMobile.classList.remove('in')
})