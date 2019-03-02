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