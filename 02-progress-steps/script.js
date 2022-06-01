const steps = document.querySelectorAll('.step')
const lines = document.querySelectorAll('.line')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

let active = 1

nextButton.addEventListener('click', () => {
  steps[active].classList.add('done')
  lines[active - 1].classList.add('done')
  active++
  checkButton(active)
})

prevButton.addEventListener('click', () => {
  steps[active - 1].classList.remove('done')
  lines[active - 2].classList.remove('done')
  active--
  checkButton(active)
})

const checkButton = (num) => {
  if (num === 1) {
    prevButton.disabled = true
  } else if (num === 4) {
    nextButton.disabled = true
  } else {
    prevButton.disabled = false
    nextButton.disabled = false
  }
}
