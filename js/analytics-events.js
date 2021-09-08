const links = document.querySelectorAll('body a')
const contactForm = document.querySelector('.contact-form');

links.forEach((link) => {
  let linkCheck = new RegExp('/' + window.location.host + '/')
  link.addEventListener('click', function () {
    if (!linkCheck.test(link.href)) {
      gtag('event', 'Click', {
        event_category: 'External Link',
        event_label: link.href,
      })
    }
  })
})

contactForm.addEventListener('submit', function() {
  gtag('event', 'Form Submission', {
    event_category: 'Forms',
    event_label: 'Contact Eric Form',
});