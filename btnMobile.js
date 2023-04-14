
const home = document.querySelector("#home")
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu () {
  const navigation = document.getElementById('navigation')
  navigation.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)




