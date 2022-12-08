// CSS and SASS files
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import 'bootstrap'
import jQuery from 'jquery'
import './index.scss'

// polyfill fetch from web-api until browsers catch up.
import 'whatwg-fetch'
import 'url-search-params-polyfill'

import netlifyIdentity from 'netlify-identity-widget'
import { setupValidation } from './validation'
import { setupHamburger } from './hamburger'

jQuery(() => {
  setupHamburger()
  setupValidation()
})

// if we were just redirected back here, on login, return to the CMS admin UI
netlifyIdentity.on('init', user => {
  if (!user) {
    netlifyIdentity.on('login', () => {
      document.location.href = '/admin/'
    })
  }
})
