const navigationWrapper = document.querySelector('.navigation-wrapper')
const heroSection = document.querySelector('.hero-section')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuItems = Array.from(document.querySelectorAll('.mobile-menu a'))

heroSection.style.marginTop = navigationWrapper.offsetHeight + 'px'

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.contains('open')
    ? mobileMenu.classList.remove('open')
    : mobileMenu.classList.add('open')

  menuToggle.classList.contains('open')
    ? menuToggle.classList.remove('open')
    : menuToggle.classList.add('open')
})

mobileMenuItems.map((menuItem) => {
  menuItem.addEventListener('click', function () {
    mobileMenu.classList.remove('open')
    menuToggle.classList.remove('open')
  })
})
