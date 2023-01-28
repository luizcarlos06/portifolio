const backToTopButton = document.querySelector('a#backToTopButton')


window.addEventListener('scroll', showBackToTopButtonOnScroll)

function showBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2700
}).reveal(`
.title,
.card,
#knowledge ul li,
#contact a,
#contact input,
#contact textarea`)