//movies in de DOM zetten
const movieList = document.getElementById('posterUl');
console.log(movieList)

const addMoviesToDom = (movies) =>
    movies.forEach((movie) => {
        const newLi = document.createElement('li');
        const newLink = document.createElement('a');
        const poster = document.createElement('img');

        //newLi.innerHTML = movie.Title
        newLink.target = '_blank';
        newLink.href = 'https://www.imdb.com/title/' + movie.imdbID;
        poster.src = movie.Poster;

        newLi.appendChild(newLink).appendChild(poster);
        movieList.appendChild(newLi);
    });

addMoviesToDom(movies);


//filter functies
const newMovies = movies.filter((movie) => movie.Year >= 2014);
const filteredMovies = (wordInMovieTitle) =>
    movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(wordInMovieTitle.toLocaleLowerCase()));




//radiobuttons werkend maken
const handleOnChangeEvent = document.body.addEventListener('change', (event) => {
    let target = event.target;
    switch (target.value) {
        case 'all':
            movieList.innerHTML = '';
            addMoviesToDom(movies);
            console.log('all knop werkt')
            break;
        case 'newest':
            movieList.innerHTML = '';
            addMoviesToDom(newMovies);
            console.log('newest knop werkt')
            break;
        case 'avengers':
            movieList.innerHTML = '';
            addMoviesToDom(filteredMovies('Avengers'));
            console.log('avengers knop werkt')
            break;
        case 'x-men':
            movieList.innerHTML = '';
            addMoviesToDom(filteredMovies('x-men'));
            console.log('x-men knop werkt')
            break;
        case 'princess':
            movieList.innerHTML = '';
            addMoviesToDom(filteredMovies('Princess'));
            console.log('princess knop werkt')
            break;
        case 'batman':
            movieList.innerHTML = '';
            addMoviesToDom(filteredMovies('batman'));
            console.log('batman knop werkt')
            break;
    }
});


//zoekbalk
var searchInput = document.getElementById("searchbar");

searchInput.onkeyup = searchGOT;


const searchGOT = (wordInMovieTitle) => {
    const searchValue = document.getElementById('searchbar').toLocaleLowerCase()
    movies.filter((movie) => movie.Title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
}
