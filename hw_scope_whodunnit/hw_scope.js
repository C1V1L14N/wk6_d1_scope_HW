// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }
// const verdict = declareMurderer();
// console.log(verdict);
// //returns string "The murderer is Miss Scarlet"


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }
// //returns string "the murderer is Professor Plum" or error.
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
// let murderer = 'Mrs. Peacock';
// return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// //Statement 1 return Mrs Peacock as the murderer. The other returns Professor Plum.


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
// let suspectThree = 'Colonel Mustard';
// return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects); //Scarlet, Plum, Mustard
// console.log(`Suspect three is ${suspectThree}.`); //Peacock as mustard is not accessible.


// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// //The weapon will be changed to revolver and the log will return the string "the weapon is the revolver".


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // Mrs White as plotTwist is the last function called.



// let murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//     murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
// }

// plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// //No idea. Absolutely none.



// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//     if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//         }
//     }

//     unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// //murder weapon is the candle stick. Follow the breadcrumbs. The room = dining room so Mustard is the killer which means the weapon is the candlestick.


// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// //Murderer is Plum because the ${murderer} cannot access Mrs Peacock inside the if statement.





