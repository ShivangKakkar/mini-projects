const mode = document.getElementById('mode')
const time = document.querySelector('.time')
const fullDate = document.querySelector('.full-date')

const hoursHand = document.querySelector('.hour')
const minutesHand = document.querySelector('.minute')
const secondsHand = document.querySelector('.second')

mode.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

function getTime() {
  // { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  let date = new Date()

  let seconds = date.getSeconds()
  let minutes = date.getMinutes()
  let hours = date.getHours()

  let day = date.toLocaleString('en-us', { weekday: 'long' })
  let month = date.toLocaleString('en-us', { month: 'short' })
  let dateNumber = date.getDate()

  let secondsAngle = (360 / 60) * seconds
  let minutesAngle = (360 / 60) * minutes
  let hoursAngle = (360 / 12) * (hours >= 12 ? hours - 12 : hours)

  let common = 'translate(-50%, -100%)'
  hoursHand.style.transform = common + ` rotate(${hoursAngle}deg)`
  minutesHand.style.transform = common + ` rotate(${minutesAngle}deg)`
  secondsHand.style.transform = common + ` rotate(${secondsAngle}deg)`

  time.innerHTML = `${hours}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`
  fullDate.innerHTML = `${day.toUpperCase()}, ${month.toUpperCase()} <span class="date">${dateNumber}</span>`
}

getTime()

setInterval(getTime, 1000)
