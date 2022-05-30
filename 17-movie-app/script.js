const search = document.querySelector('.search')
const container = document.querySelector('.container')
const ApiUrl =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const ImagePath = 'https://image.tmdb.org/t/p/w1280'
const SerachApi =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

search.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault()
    searchMovie(e.target.value)
    search.value = ''
  }
})

initialMovies()

async function searchMovie(word) {
  let resp = await fetch(SerachApi + word)
  await showMovies(resp)
}

async function initialMovies() {
  let resp = await fetch(ApiUrl)
  await showMovies(resp)
}

async function showMovies(resp) {
  let results = (await resp.json())['results']
  let html = ''
  results.forEach((result) => {
    let title = result['original_title']
    let overview = result['overview']
    let rating = result['vote_average']
    let image = ImagePath + result['poster_path']
    let color
    if (rating >= 8) {
      color = 'green'
    } else if (rating >= 5) {
      color = 'orange'
    } else {
      color = 'red'
    }
    html += `<div class="movie">
        <img src="${image}" alt="${title}">
        <div class="info">
          <div class="title">${title}</div>
          <div class="rating" style='color: ${color}'>${rating}</div>
        </div>
        <div class="overview">
          <h3 class="overview-title">Overview</h3>${overview}
          </div>
      </div>`
  })
  container.innerHTML = html
}
