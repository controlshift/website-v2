import jQuery from 'jquery'

export function setupHamburger() {
  const hamburger = jQuery('.hamburger')
  hamburger.on('click', () => {
    hamburger.toggleClass('is-active')
    jQuery('body')
      .toggleClass('mobile-menu-open')
  })
}
