const divs = document.querySelectorAll('div')

let playing = []

divs.forEach((div) => {
  div.addEventListener('click', () => {
    let musicType = div.innerText
    let audio = document.getElementById(musicType)
    console.log(audio)
    stopPlaying()
    audio.currentTime = 0
    audio.play()
    playing.push(audio)
  })
})

function stopPlaying() {
  playing.forEach((audio) => {
    audio.pause()
  })
  playing = []
}
