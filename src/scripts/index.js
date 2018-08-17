const colorTab = document.getElementById('colorpage')
const fontTab = document.getElementById('fontpage')

// document.getElementsByClassName('Header__topbar')[0].getElementsByTagName('a')[0].id

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
