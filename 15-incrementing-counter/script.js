const twitter = document.querySelector('#twitter .number')
const facebook = document.querySelector('#facebook .number')
const youtube = document.querySelector('#youtube .number')

const time = 1000

const twitterMax = 12000
const facebookMax = 7500
const youtubeMax = 5000

const twitterTimeout = time / twitterMax
const facebookTimeout = time / facebookMax
const youtubeTimeout = time / youtubeMax

for (let i = 1; i <= 12000; i++) {
  setTimeout(twitterChangeNumber, twitterTimeout * i, i)
  if (i <= facebookMax) {
    setTimeout(facebookChangeNumber, facebookTimeout * i, i)
  }
  if (i <= youtubeMax) {
    setTimeout(youtubeChangeNumber, youtubeTimeout * i, i)
  }
}

function twitterChangeNumber(i) {
  twitter.innerHTML = i
}

function youtubeChangeNumber(i) {
  youtube.innerHTML = i
}

function facebookChangeNumber(i) {
  facebook.innerHTML = i
}
