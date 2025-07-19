
const sym=Symbol("NewSym");

const userInfo={
    name :"Shivam Bhendekar",
    age:21,
    email:"shivambhendekar@gmail.com",
    "user password":"Hello World",
    [sym] :"sym1"
}


//access object:

console.log(userInfo.name);

// console.log(userInfo.user password)   Not possible to access this way

console.log(userInfo["user password"])

console.log(userInfo);