const navigationWrapper = document.querySelector('.navigation-wrapper')
const heroSection = document.querySelector('.hero-section')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuItems = Array.from(document.querySelectorAll('.mobile-menu a'))
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
const currentTheme = localStorage.getItem('theme')
const themeToggle = document.querySelector('#theme-toggle')
const copyrightYear = document.querySelector('#copyright-year')

copyrightYear.textContent = new Date().getFullYear()

if (!currentTheme) {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.toggle('light-theme')
    localStorage.setItem('theme', 'light')
  }
} else if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme')
  localStorage.setItem('theme', 'dark')
} else {
  document.body.classList.toggle('light-theme')
  localStorage.setItem('theme', 'light')
}

themeToggle.addEventListener('click', function () {
  let theme
  document.body.classList.toggle('dark-theme')
  document.body.classList.toggle('light-theme')
  if (document.body.classList.contains('light-theme')) {
    theme = 'light'
  } else {
    theme = 'dark'
  }
  localStorage.setItem('theme', theme)
})

// heroSection.style.marginTop = navigationWrapper.offsetHeight + 'px'

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
