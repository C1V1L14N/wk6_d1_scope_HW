// Arrays - unordered colleections using index positions (Python - Lists)
// Objects - unordered collections using key-value pairs (dictionaries)
// Loops - (looops)

// var sports = ["football", "tennis", "rugby"];
// console.log(sports);

// var sports = ["football", "tennis", "rugby"];
// console.log(sports.length);

// var sports = ["football", "tennis", "rugby"];
// console.log(sports[0]);

// var sports = ["football", "tennis", "rugby"];
// var firstSport = sports[0];
// console.log(firstSport);

// var sports = ["football", "tennis", "rugby"];
// var firstSport = sports[0];
// console.log("first sport:", firstSport);


// var sports = ["football", "tennis", "rugby"];
// sports.push("curling");
// sports.push("snooker");
// sports.push("darts");
// console.log("sports", sports);
// sports.pop();
// console.log("sports", sports);

// // var sports = ["football", "tennis", "rugby"];
// // sports.push("curling");
// // sports.push("snooker");
// // sports.push("darts");
// // console.log("sports", sports);
// // var removedSport = sports.pop();
// // console.log("sports", removedSport);

// // var sports = ["football", "tennis", "rugby"];
// // sports.push("curling");
// // sports.push("snooker");
// // sports.push("darts");
// // console.log("sports", sports);
// // sports.unshift("basketball");
// // console.log(sports);
// // var removedFromStart = sports.shift();
// // console.log("removed from start", removedFromStart);

// var sports = ["football", "tennis", "rugby"];
// // sports.push("curling");
// // sports.push("snooker");
// // sports.push("darts");
// // console.log("sports", sports);
// // sports.unshift("basketball");
// console.log("sports", sports);
// var removedSport = sports.splice(1, 1);
// console.log(sports);
// console.log("removed sport:", removedSport);


// //LOOPS**************

// var sports = ["football", "tennis", "rugby"];
// console.log("sports", sports);
// var removedSport = sports.splice(1, 0, "basketball", "golf");
// console.log(sports);
// console.log("removed sport:", removedSport);

// for (var currentSport of sports){
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }


// //for (initialised counter (0); condition(true/false); increment counter (+1))
// for (var i = 0; i < sports.length; i++){
//     var currentSport = sports[i];
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);





// OBJECTS*****************

var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: "Spanish"
};
console.log("movie", movie);

var title = movie.title;
console.log("movie title:", title);

movie.cast = ["James Stewart", "Donna Reed"];
movie.language = "English";
movie["subtitle-language"] = "Spanish";
delete movie.year;

movie.ratings = {
    critic: 94,
    audience: 96
}
console.log("movie:", movie);
console.log("audience rating:", movie.ratings.audience);

for (var key in movie){
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
}

var keys = Object.keys(movie);
console.log("Keys:", keys);

