import hljs from 'highlight.js/lib'

const _colorTab = document.getElementById('colorTab')
const colorPath = '/osc-style/colorpage.html'
const _fontTab = document.getElementById('fontTab')
const fontPath = '/osc-style/fontpage.html'
// const _iconTab = document.getElementById('iconTab')
// const iconPath = '/osc-style/iconpage.html'

const _handleClick = () => {
  if (window.location.pathname === colorPath) {
    _colorTab.className += 'active'
  } else if (window.location.pathname === fontPath) {
    _fontTab.className += 'active'
  }
}

window.onload = _handleClick
hljs.initHighlightingOnLoad()
