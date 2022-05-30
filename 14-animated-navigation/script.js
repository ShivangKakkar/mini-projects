const button = document.querySelector('button')

button.addEventListener('click', () => {
  button.parentNode.classList.toggle('active')
})
