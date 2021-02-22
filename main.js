let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    // value: answers,
  },
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Последний просмотренный фильм?'),
      b = prompt('На сколько его оцените?');

    if (a != null && b != null && a != '' && b != '' && a.length < 10 && b.length < 10) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectedUserLevel() {
  if (personalMovieDB.count < 10) {
    console.log('просмотренно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
  } else {
    console.log('произошла ошибка');
  }
}

detectedUserLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGeners();
// let i = 0;
// while (i < 2) {
//   const a = prompt('Последний просмотренный фильм?'),
//     b = prompt('На сколько его оцените?');
//   if (a != null && b != null && a != '' && b != '' && a.length < 10 && b.length < 10) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
//   i++;
// }

// let i = 0;
// do {
//   const a = prompt('Последний просмотренный фильм?'),
//     b = prompt('На сколько его оцените?');
//   if (a != null && b != null && a != '' && b != '' && a.length < 10 && b.length < 10) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
//   i++;
// } while (i < 3);

// const questions = [
//   'какой ваш последний фильм?',
//   'на сколько его оцените?',
//   'какой ваш последний фильм?',
//   'на сколько его оцените?',
// ];

// for (let key in questions) {
//   answers.push(prompt(questions[key]));
// }

// questions.forEach(function (entery) {
//   answers.push(prompt(entery));
// });

// console.log(answers);
// console.log(personalMovieDB.movies);
// for (var movieFor in personalMovieDB.movies) {
//   prompt(moviesFor);
// }

// for (let i; i <= 4; i++) {
//   prompt(personalMovieDB.movies);
// }

// for (let key in personalMovieDB.movies) {
//   if (personalMovieDB.movies.hasOwnObjectKey(key)) {
//     prompt(personalMovieDB.movies[key]);
//   }
// }
// const a = prompt('какой ваш последний фильм?');
// const b = prompt('на сколько его оцените?');
// const c = prompt('какой ваш последний фильм?');
// const d = prompt('на сколько его оцените?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

// let select = document.querySelector('select');
// let para = document.querySelector('p');

// select.addEventListener('change', update);

// function update() {
//   let choice = select.value;
//   if (choice === 'солнечно') {
//     para.textContent = 'сегодня очень жарко';
//   } else if (choice === 'дождливо') {
//     para.textContent = 'возьмите зонт';
//   } else if (choice === 'снегопад') {
//     para.textContent = 'одевайте шапку';
//   } else {
//     para.textContent = '';
//   }
// }

// // let num = 50;
// // let i = 0;
// // while (i < 3) {
// //   alert(`number ${i}!`);
// //   i++;
// // }

// let prmt = prompt('введите число больше 100').value;

// for (i = 0; i === 100; i++) {
//   if (prmt === 100) {
//     alert('molodec');
//   } else {
//     prmt;
//   }
// }
