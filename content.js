function addStyle() {
  const style = document.createElement('style')
  style.setAttribute('id', 'youtube-change-home-page-style')

  const css = /* css */ `
  #related {
    display: none !important;
  }
  #page-manager {
    position: relative;
  }
  #extensionEmoji {
    position: absolute;
    background-color: white;
    font-size: 37px;
    top: 0;
    z-index: 999;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  #chips-wrapper {
    opacity: 0 !important;
  }
  `

  style.innerHTML = css

  document.head.append(style)
}

addStyle()

function addEmoji() {
  const pageManager = document.getElementById('page-manager')

  const uniqueEmoji = [
    '&#9996;',
    '&#127877;',
    '&#127881;',
    '&#127882;',
    '&#127968;',
    '&#128075;',
    '&#128076;',
    '&#128077;',
    '&#128079;',
    '&#128170;',
    '&#128175;',
    '&#128293;',
    '&#128400;',
    '&#128512;',
    '&#128514;',
    '&#128515;',
    '&#128516;',
    '&#128517;',
    '&#128518;',
    '&#128521;',
    '&#128522;',
    '&#128526;',
    '&#128528;',
    '&#128579;',
    '&#128591;',
    '&#128640;',
  ]
  const emoji = []

  for (let i = 0; i < 3000; i++) {
    emoji.push(uniqueEmoji[Math.floor(uniqueEmoji.length * Math.random())])
  }

  const div = document.createElement('div')
  div.setAttribute('id', 'extensionEmoji')
  div.innerHTML = emoji.join(' ')

  pageManager.append(div)
}

window.addEventListener('load', () => {})

function frame() {
  if (window.location.href === 'https://www.youtube.com/') {
    const emoji = document.getElementById('extensionEmoji')
    if (!emoji) {
      addEmoji()
    }

    const topH = document.getElementById('masthead-container').clientHeight
    const pageManager = document.getElementById('page-manager')

    if (pageManager) {
      pageManager.style.height = window.innerHeight - topH + 'px'
      pageManager.style.overflow = 'hidden'
    }

    if (emoji) {
      emoji.style.display = 'block'
    }
  } else if (window.location.href !== 'https://www.youtube.com/') {
    const pageManager = document.getElementById('page-manager')
    const emoji = document.getElementById('extensionEmoji')

    if (pageManager) {
      pageManager.style.height = 'auto'
      pageManager.style.overflow = 'auto'
    }

    if (emoji) {
      emoji.style.display = 'none'
    }
  }
}
setInterval(frame, 300)
