var nameVar = 'Rodrigo';
var nameVar = 'Kirsten';
console.log('nameVar,', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log(nameConst);

// Block scoping

var fullName = 'Rodrigo Farias';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);