const labels = document.querySelectorAll('label')

labels.forEach((label) => {
  let time = 0
  label.innerHTML = label.innerText
    .split('')
    .map((letter) => {
      time++
      return `<span  style="transition-delay: ${time * 50}ms">${letter}</span>`
    })
    .join('')
})
