import hljs from 'highlight.js/lib'
hljs.initHighlightingOnLoad()

// header에 현재 어느탭에 있는지
const _colorTab = document.getElementById('colorTab')
const colorPath = '/osc-style/colorpage.html'
const _fontTab = document.getElementById('fontTab')
const fontPath = '/osc-style/fontpage.html'
const _iconTab = document.getElementById('iconTab')
const iconPath = '/osc-style/iconpage.html'

const tabActive = () => {
  if (window.location.pathname === colorPath) {
    _colorTab.className += 'active'
  } else if (window.location.pathname === fontPath) {
    _fontTab.className += 'active'
  } else if (window.location.pathname === iconPath) {
    _iconTab.className += 'active'
  }
}
window.onload = tabActive

// 텍스트 클릭시 복사
const copyText = () => {
  if (event.target.tagName === 'INPUT') {
    event.target.select()
    document.execCommand('copy')
  }
}
addEventListener('click', copyText)
