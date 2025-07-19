

const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}

//add two obj

const obj3=Object.assign({},obj1,obj2)

 console.log(obj3);


//Easy and best approach:

const obj4={...obj1,...obj2}

console.log(obj4)