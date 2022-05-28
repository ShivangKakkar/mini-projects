const loading = document.querySelector('.loading')
const bg = document.querySelector('.bg')

let loaded = 0

function blurring() {
  loaded++
  if (loaded > 99) {
    clearInterval(int)
  }

  loading.innerHTML = loaded + '%'
  loading.style.opacity = scale(loaded, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(loaded, 0, 100, 30, 0)}px)`
}

let int = setInterval(blurring, 30)

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
