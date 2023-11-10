let genres = document.querySelectorAll('.drop-content li');
let movieContainer1 = document.querySelector('.movieContainer');
let loading1 = document.querySelector('#loading');
let noGenre = document.querySelector('.no-genre');
genres.forEach(gen => {
  
  gen.addEventListener('click', () => {
    noGenre.style.display = 'none';
    loading1.style.display = 'block';
    // gen.classList.remove('active');
    // gen.classList.add('active');

    const apiKey = 'c87997451f156ec370b7f6be23d85827';
    const genreName = 'Action'; // Replace with the desired genre name

    // Step 1: Fetch the genre list to retrieve genre ID by name
    const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

    fetch(genreListUrl)
      .then(response => response.json())
      .then(data => {
        const genre = data.genres.find(genre => genre.name === gen.innerHTML);

        if (genre) {
          const genreId = genre.id;

          // Step 2: Fetch movies by genre ID
          const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

          return fetch(moviesUrl);
        } else {
          throw new Error('Genre not found');
        }
      })
      .then(response => response.json())
      .then(data => {
        // Process the movies by genre
        console.log(data);
        movieContainer1.innerHTML = '';
        
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
          movieContainer1.appendChild(movieDiv)
        })
        loading1.style.display = 'none';
      })
      .catch(error => {
        // Handle any errors
        loading1.style.display = 'none';
        noGenre.style.display = 'block';
        console.error(error);
      });
      })
})

let closeBtn = document.querySelector('.no-genre .close');

closeBtn.addEventListener('click', () => {
  noGenre.style.display = 'none';
})