// CSS and SASS files
import 'bootstrap'
import jQuery from 'jquery'
import './index.scss'
import netlifyIdentity from 'netlify-identity-widget'

jQuery.getJSON('https://cfyy3d57ng36.statuspage.io/api/v2/status.json', (data) => {
  jQuery(() => {
    jQuery('.status-description').text(data.status.description)
    jQuery('.status-indicator span').replaceWith(jQuery(`<i class="indicator ${data.status.indicator} fa fa-circle"></i>`))
  })
})

jQuery(() => {
  const $hamburger = jQuery('.hamburger')
  $hamburger.on('click', () => {
    $hamburger.toggleClass('is-active')
    jQuery('body').toggleClass('mobile-menu-open')
  })
})

// if we were just redirected back here, on login, return to the CMS admin UI
netlifyIdentity.on('init', user => {
  if (!user) {
    netlifyIdentity.on('login', () => {
      document.location.href = '/admin/'
    })
  }
})

