const tags = document.querySelector('#tags')
const input = document.querySelector('textarea')

let currentChoices = []
let width = input.offsetWidth
let targetChoice

input.addEventListener('input', () => {
  showChoices(input.value)
})

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault()
    input.value = ''
    coolLittleEffect(currentChoices)
  }
})
let lastChoice

function showChoices(text) {
  let tagsWidth = tags.scrollWidth
  let choices = text.split(',')
  let html = ''
  choices.forEach((choice, i) => {
    choice = choice.trim()
    if (choice !== '') {
      let span = `<span class="tag choice-${choice}">${choice}</span>&nbsp;`
      if (tagsWidth > width && !targetChoice) {
        targetChoice = lastChoice
      }
      console.log(targetChoice, i)
      if (tagsWidth > width && targetChoice && targetChoice === i) {
        html += span + '<br>'
      } else {
        html += span
      }
      // html += span
      lastChoice = i
    }
  })
  tags.innerHTML = html
  currentChoices = choices
}

function coolLittleEffect(choices) {
  let totalEffects = 2 * choices.length
  let randomChoice = choices[Math.floor(Math.random() * choices.length)]
  const choiceSpan = document.querySelector('.choice-' + randomChoice)
  let lastSpan
  let timeout = 1
  let timeoutFactor = 75
  for (i = 0; i < totalEffects; i++) {
    const span = document.querySelector(
      '.choice-' + choices[Math.floor(Math.random() * choices.length)]
    )
    setTimeout(() => {
      if (lastSpan) {
        lastSpan.style.backgroundColor = 'orange'
      }
      lastSpan = span
      span.style.backgroundColor = 'darkblue'
    }, timeout * timeoutFactor)
    timeout += 1
  }
  setTimeout(() => {
    lastSpan.style.backgroundColor = 'orange'
    choiceSpan.style.backgroundColor = 'darkblue'
  }, timeout * timeoutFactor)
}
