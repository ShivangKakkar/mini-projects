const button = document.querySelector('button')
const input = document.querySelector('input')
const search = document.querySelector('div.search')

button.addEventListener('click', () => {
  search.classList.add('active')
  input.focus()
})
