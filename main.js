const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('какой ваш последний фильм?');
const b = prompt('на сколько его оцените?');
const c = prompt('какой ваш последний фильм?');
const d = prompt('на сколько его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
