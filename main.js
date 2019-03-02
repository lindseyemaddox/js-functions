console.log('hi');

const firstName = 'Lindsey';
const lastName = 'Maddox';

// console.log(firstName + ' ' + lastName);

console.log(`${firstName} ${lastName}`);  // Do this now cause ES6

const namePrinter = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

namePrinter('Lindsey', 'Maddox');
namePrinter('Azalea', 'Ruth');


//////////  MEAT  //////////

const nuggetizer = (animal) => {
  return `processed ${animal}`;   // you can only do one return statement per function, to return two things you have to do an object
};

console.log(nuggetizer('pig'));


////////// CHALLENGE //////////

// dogBreed with input string - boxer, output something like a sentence using using string

const dogBreed = (boxer) => {
  return `My favorite dog is ${boxer}.`;
}

// console.log(dogBreed('Stella Beef the Biscuit Thief'));


////////// DOM //////////

const dogBreedDiv = document.getElementById('dog-breeds');
console.log('dogBreedDiv', dogBreedDiv);    // pay attention to the two thingies here to avoid 'undefined'

dogBreedDiv.innerHTML = dogBreed('boxer');

const nugDiv = document.getElementById('nuggetizer');

nugDiv.innerHTML = nuggetizer('animal');
nugDiv.innerHTML += nuggetizer('octopus');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('boxer'));
printToDom('nuggetizer', nuggetizer('bear'));
printToDom('nuggetizer', 'mmmmmmmmmmmmm');

////////// CHALLENGE //////////

let bandNumber = 1;

const addBand = (bandName) => {
  const bandText = `<h5>${bandNumber}. ${bandName}</h5>`;
  bandNumber = bandNumber + 1;
  printToDom('band-list', bandText);
};

addBand('Metallica') // 1. Metallica
addBand('Slayer') // 2. Slayer