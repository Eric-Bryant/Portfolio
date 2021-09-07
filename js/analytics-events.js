const links = document.querySelectorAll('body a')

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
