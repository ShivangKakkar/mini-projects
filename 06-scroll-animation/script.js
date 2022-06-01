const boxes = document.querySelectorAll('.content')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top

    if (top < trigger) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
