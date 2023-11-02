// let url = 'https://imdb-api.com/en/API/SearchMovie/k_76z0yo9a/inception 2010'

// fetch(`http://imdb-api.com/en/API/SearchMovie/k_76z0yo9a/${movie}`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

const movieSearch = document.getElementById('movieSearch');
let movieContainer = document.querySelector('.movieContainer');
let loading = document.querySelector('#loading');

const searchMovies = async () => {
  movieContainer.innerHTML = '';
  let movieArray = [];
  loading.style.display = 'block';
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c87997451f156ec370b7f6be23d85827&query=${movieSearch.value}`);
    const data = await response.json();
    // console.log(data.results);
    movieArray.push(data.results);
    console.log(data.results);
    data.results.forEach( async movie => {
      let movieDiv = document.createElement('div');
      let imgUrl = document.createElement('img');
      let movieTitle = document.createElement('p');
      // let linkElement = document.createElement('a');
      // linkElement.href = 'movieDetails.html';
      
     
      try {
        const genre = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=c87997451f156ec370b7f6be23d85827&language=en-us`);
        const data2 = await genre.json();
      } catch (e) {
        console.log(e);
      };

      movie.poster_path ? imgUrl.setAttribute('src', `https://image.tmdb.org/t/p/w500${movie.poster_path}`) : imgUrl.setAttribute('src', `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`);
      movieDiv.setAttribute('id', movie.id);
      movieDiv.setAttribute('class', 'movies');
      movieTitle.innerHTML = movie.title;

      movieDiv.addEventListener('click', () => {
        window.location.href = `movieDetails.html?movieId=${movie.id}`;
      })

      movieDiv.appendChild(imgUrl);
      movieDiv.appendChild(movieTitle);
      // linkElement.appendChild(movieDiv);
      movieContainer.appendChild(movieDiv)
      loading.style.display = 'none';
    })
  } catch (e) {
    console.log(e);
    loading.style.display = 'none';
    movieContainer.innerHTML = 'No movie found'
  }
}




// let logo = document.querySelector('.logo');
// logo.addEventListener('click', () => {
//   window.location.href = `movieDetails.html?logoId=${logo.id}`;
// })

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.movies').forEach(mov => {
    console.log(mov);
    mov.addEventListener('click', () => {
      console.log(mov);
      window.location.href = `movieDetails.html?movieId=${mov.id}`;
    })
  })
})
