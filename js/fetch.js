
const fetchMovies = async () => {
  let loading1 = document.querySelector('#loading');

  let movieContainer = document.querySelector('.movieContainer');
  let movieArray = [];
  loading1.style.display = 'block';
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c87997451f156ec370b7f6be23d85827&query');
    const data = await response.json();
    // console.log(data.results);
    // movieArray.push(data.results);
    // let movieDiv = document.createElement('div');
    // let imageUrl = document.createElement('img');
    
    data.results.forEach(movie => {

      let movieDiv = document.createElement('div');
      let imgUrl = document.createElement('img');
      let movieTitle = document.createElement('p');
      

      movie.poster_path ? imgUrl.setAttribute('src', `https://image.tmdb.org/t/p/w500${movie.poster_path}`) : imgUrl.setAttribute('src', `https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png`);
      movieDiv.setAttribute('id', movie.id);
      movieDiv.setAttribute('class', 'movies');

      movieTitle.innerHTML = movie.title;

      movieDiv.addEventListener('click', () => {
        window.location.href = `movieDetails.html?movieId=${movie.id}`;
      })

      movieDiv.appendChild(imgUrl);
      movieDiv.appendChild(movieTitle);
      movieContainer.appendChild(movieDiv)
    })
    loading1.style.display = 'none';
  } catch (e) {
    console.log(e);
    loading1.style.display = 'none';
    movieContainer.innerHTML = 'No movie found'
  }}

  document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
  })