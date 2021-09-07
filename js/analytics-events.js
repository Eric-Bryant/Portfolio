const links = document.querySelectorAll('body a')

links.forEach((link) => {
  let linkCheck = new RegExp('/' + window.location.host + '/')
  if (!linkCheck.test(link.href)) {
    link.addEventListener('click', function () {
      const linkName = link.innerText || link.getAttribute('title')
      gtag('event', 'Click', {
        event_category: 'External Link',
        event_label: link.href,
        value: linkName,
      })
    })
  }
})
