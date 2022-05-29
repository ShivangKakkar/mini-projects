// const key = document.getElementById('key')
// const keyCode = document.getElementById('keyCode')
// const code = document.getElementById('code')
// const text = document.getElementById('text')

// function showOrRemove(e) {
//   let a, b
//   if (e) {
//     a = remove
//     b = show
//   } else {
//     a = show
//     b = remove
//   }
//   a(key)
//   a(keyCode)
//   a(code)
//   b(text)
// }

// function remove(e) {
//   e.style.display = 'none'
// }

// function show(e) {
//   e.style.display = ''
// }

// showOrRemove(true)

// window.addEventListener('keydown', (event) => {
//   const small = (e) => `<small>event.${e}</small>`
//   key.innerHTML = event.key + small('key')
//   keyCode.innerHTML = event.keyCode + small('keyCode')
//   code.innerHTML = event.code + small('code')
//   showOrRemove(false)
// })

// Dumb Code Above | "It Works"

const container = document.querySelector('.container')

window.addEventListener('keydown', (event) => {
  container.innerHTML = `
  <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
`
})
