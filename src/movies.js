// The `movies` array from the file `src/data.js`.
const movies = require('./data');
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const getDirectors = movies.map((movie) => {
    return movie.director;
  });

  return getDirectors;
}

console.log(getAllDirectors(movies));

/////////////////////////////BONUS
// let uniqueDirectors = [];
//   movies.forEach((element) => {
//       if (!uniqueDirectors.includes(element)) {
//           uniqueDirectors.push(element);
//       }
//       return `${movies.director}`;
//   });
//  console.log(uniqueDirectors)
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesDrama) {
  const getDramas = moviesDrama.filter((onlyDrama) => {
    return (
      onlyDrama.director.includes('Steven Spielberg') &&
      onlyDrama.genre.includes('Drama')
    );
  });
  return getDramas.length;
}
console.log(
  `The best Steven Spielberg's drama movies are ${howManyMovies(
    movies
  )} in the top of 250º list`
);
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function getAvg(data) {
  const scoreSum = movies.reduce((aScore, currentMovie) => {
    return aScore + currentMovie.score;
  }, 0);
  let total = scoreSum / data.length;
  return total.toFixed(2);
}
console.log(getAvg(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const onlyDrama = arr.filter((getDramaMovies) =>
    getDramaMovies.genre.includes('Drama')
  );
  const scoreSum = onlyDrama.reduce((aScore, currentMovie) => {
    return aScore + currentMovie.score;
  }, 0);
  let total = scoreSum / arr.length;
  return total.toFixed(2);
}
console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const getYear = arr.sort(function (a, b) {
    return b.year - a.year;
  });
  return getYear;
}
console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const getAlpha = arr.sort(function (a, b) {
    if (a.title < b.title) return -1;
    else if (a.title > b.title) return 1;
    else return 0;
  });

  const firstTwenty = getAlpha.splice(0, 20);
  return firstTwenty;
}
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage: getAvg,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
