/* abre e fecha menu quando clicar o icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, escomder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando der scroll*/

function changeHeaderWhenScroll() {
  const header = document.querySelector('header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    //scrolle maior que a altura de header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*testimonials carousel slide swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerViewk: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
/*scrollReveal:mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `#home .image, #home.text,
  #about  .image, #about.text,
  #services  heder, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*BOTÃO VOLTAR PARA O TOPO*/

function backtotop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
/*WHEN SCROLL*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backtotop()
})
