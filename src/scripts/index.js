<<<<<<< HEAD
import hljs from 'highlight.js/lib'

const _colorTab = document.getElementById('colorTab')
const colorPath = '/colorpage.html'
const _fontTab = document.getElementById('fontTab')
const fontPath = '/fontpage.html'
=======
const colorTab = document.getElementById('colorpage')
const fontTab = document.getElementById('fontpage')

// document.getElementsByClassName('Header__topbar')[0].getElementsByTagName('a')[0].id
>>>>>>> 01f87438a62cb6a4c69c2c3a4d43856e05ecc78f

const _handleClick = () => {
  if (window.location.pathname.indexOf(colorTab.id) > -1) {
    colorTab.className += 'active'
  } else if (window.location.pathname.indexOf(fontTab.id) > -1) {
    fontTab.className += 'active'
  }
  console.log(colorTab.id)
  console.log(fontTab.id)
}

window.onload = _handleClick
hljs.initHighlightingOnLoad()
