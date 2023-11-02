const urlParams = new URLSearchParams(window.location.search);
const selectedMovieId = urlParams.get('movieId');
let movieImg = document.querySelector('.movie-img');
console.log(selectedMovieId);
let movieTitle = document.querySelector('.title');
let movieDet = document.querySelector('.mdetails');
let released = document.querySelector('.released');
let gen = document.querySelector('.genre');
let duration = document.querySelector('.duration');
let language = document.querySelector('.language');

const movieDetails = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + selectedMovieId + '?api_key=c87997451f156ec370b7f6be23d85827');
    const data = await response.json();
    console.log(data.title)
    let imgUrl = document.createElement('img');

    data.poster_path ? imgUrl.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.poster_path}`) : imgUrl.setAttribute('src', `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`);

    movieImg.appendChild(imgUrl);
    movieTitle.innerHTML = data.title;
    movieDet.innerHTML = data.overview;
    released.innerHTML = data.release_date;
    duration.innerHTML = `${data.runtime} mins`;
    data.spoken_languages.forEach(element => {
      // for(let i of element) {
      //   language.innerHTML = i;
      // }
      language.innerHTML = element.name;
      console.log(element.name)
    });
    data.genres.forEach(genre => {
      gen.innerHTML = genre.name;
      console.log(genre.name)
    })
  } catch (error) {
    console.log(error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  movieDetails();
})