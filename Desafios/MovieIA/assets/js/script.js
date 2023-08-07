// https://developer.themoviedb.org/reference/movie-popular-list

async function getMovies() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDNhOThlZDFkZTc4YThiOGNkNzc3OTlmN2I2ODNhNCIsInN1YiI6IjYzNTJhMjUxOTU5MGUzMDA5MTViMGM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tx4DJP7EjapwMqmDOtfhzaHxPSalXJauzxveTHJ50kc'
        }
      };
      
      try {
      return fetch('https://api.themoviedb.org/3/movie/popular', options)
      .then(response => response.json())
      } catch (error) {
        console.error(err)
      }

}


// Trailer
// https://api.themoviedb.org/3/movie/{movie_id}/videos

async function watch(e) {
    const movie_id = e.currentTarget.dataset.id
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDNhOThlZDFkZTc4YThiOGNkNzc3OTlmN2I2ODNhNCIsInN1YiI6IjYzNTJhMjUxOTU5MGUzMDA5MTViMGM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tx4DJP7EjapwMqmDOtfhzaHxPSalXJauzxveTHJ50kc'
        }
      };
      
      try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
        .then(response => response.json())

        const {results} = data

        const youtubeVideo = results.find(video => video.type === "Trailer")

        window.open(`https://youtube.com/watch?v=${youtubeVideo.key}`, 'blank')
      } catch (error) {
        console.error(err);
      }

}

function createMovieLayout({ id, title, stars, image, time, year }) {
  return `<div class="movie">
    <div class="title">
        <abbr>${title}</abbr>
        <div>
            <img src="./assets/img/star.svg" alt="Estrela">
            <p>${stars}</p>
        </div>
    </div>
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${image}" alt="Poster do filme ${title}">
    </div>
    <div class="info">
        <div class="duration">
            <img src="./assets/img/clock.svg" alt="icone de relógio">
            <span>${time}</span>
        </div>
        <div class="year">
            <img src="./assets/img/calendar.svg" alt="Calendário">
            <span>${year}</span>
        </div>
    </div>
    <button onclick="watch(event)" data-id="${id}">
        <img src="./assets/img/play.svg" alt="Iniciar">
        <span>Assistir trailer</span>
    </button>
</div>`;
}


async function getMoreInfo(id) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDNhOThlZDFkZTc4YThiOGNkNzc3OTlmN2I2ODNhNCIsInN1YiI6IjYzNTJhMjUxOTU5MGUzMDA5MTViMGM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tx4DJP7EjapwMqmDOtfhzaHxPSalXJauzxveTHJ50kc",
    },
};

try {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id,
        options
        ).then((response) => response.json());
        
        return data;
  } catch (error) {
    console.error(err);
}
}

function select3Videos(results) {
  const random = () => Math.floor(Math.random() * results.length);

  let selectedVideos = new Set();
  while (selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id);
  }

  return [...selectedVideos];
}

function minutesToHourMinutesAndSeconds(minutes) {
    const date = new Date(null)
    date.setMinutes(minutes)
    return date.toISOString().slice(11, 19)
}

async function start() {
    const {results} = await getMovies()
    
  const best3 = select3Videos(results).map(async movie => {
        const info = await getMoreInfo(movie);
        const props = {
            id: info.id,
            title: info.title,
            stars: Number(info.vote_average).toFixed(1),
            image: info.poster_path,
            time: minutesToHourMinutesAndSeconds(info.runtime),
            year: info.release_date.slice(0, 4)
        }

        return createMovieLayout(props)
    })

    const output = await Promise.all(best3)

    document.querySelector('.movies').innerHTML = output.join("")
}

start()