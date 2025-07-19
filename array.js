const name=["shivam","sarvesh","atharv","dev"];
const surname=["bhendekar","apshete","mankar","govindani"];

// const rollnumber="121B1B022";
// console.log(rollnumber.slice(0,3));
// console.log(rollnumber.splice(3));    this is wrong.


// console.log(name.splice(1,3));

// console.log(name);


const fullName=[...name,...surname];
//spread operator 
console.log(fullName);

