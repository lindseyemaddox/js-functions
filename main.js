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