import hljs from 'highlight.js/lib'

const _colorTab = document.getElementById('colorTab')
const colorPath = '/colorpage.html'
const _fontTab = document.getElementById('fontTab')
const fontPath = '/fontpage.html'

const _handleClick = () => {
  if (window.location.pathname === colorPath) {
    _colorTab.className += 'active'
  } else if (window.location.pathname === fontPath) {
    _fontTab.className += 'active'
  }
}

window.onload = _handleClick
hljs.initHighlightingOnLoad()
