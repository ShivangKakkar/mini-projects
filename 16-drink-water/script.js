const bigGlass = document.querySelector('.big-glass')
const remained = document.querySelector('.remained')
const percentage = document.querySelector('.percentage')
const glasses = document.querySelectorAll('.glass')

let bigGlassHeight = bigGlass.scrollHeight

glasses.forEach((glass) => {
  glass.addEventListener('click', () => {
    let number = parseInt(glass.id.replace('glass', ''))
    let height = (bigGlassHeight / 8) * number
    let percent = (100 / 8) * number
    for (let i = 0; i < 8; i++) {
      if (i < number) {
        glasses[i].classList.add('full')
      } else {
        glasses[i].classList.remove('full')
      }
    }
    remained.style.height = bigGlassHeight - height + 'px'
    remained.innerHTML = `<span class="litre">${
      2 - (percent / 100) * 2
    }L</span> Remained`
    percentage.innerHTML = percent + '%'
    percentage.style.height = height + 'px'
  })
})
