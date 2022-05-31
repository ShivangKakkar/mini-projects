const leftButton = document.querySelector('.arrow-left')
const rightButton = document.querySelector('.arrow-right')

const slides = document.querySelectorAll('.slide')

let currentActive = 0

rightButton.addEventListener('click', () => {
  slides[currentActive].classList.remove('active')
  currentActive++
  if (currentActive > slides.length - 1) {
    currentActive = 0
  }
  slides[currentActive].classList.add('active')
  document.body.style.backgroundImage =
    slides[currentActive].style.backgroundImage
})

leftButton.addEventListener('click', () => {
  slides[currentActive].classList.remove('active')
  currentActive--
  if (currentActive < 0) {
    currentActive = slides.length - 1
  }
  slides[currentActive].classList.add('active')
  document.body.style.backgroundImage =
    slides[currentActive].style.backgroundImage
})
