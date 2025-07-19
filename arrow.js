const userInfo={
    userName:"Shivam",
    age:18,
    msg:function (){
        console.log(`Welcome ${this.userName} of age: ${this.age}`);
        }
}

userInfo.msg()

userInfo.userName="Ram";
userInfo.age=19;

userInfo.msg()



//-----------------------------------------------------------------------------------------------//

//arrow function

//-----------------------------------------------------------------------------------------------//

// const add=(num1,num2)=>{

//     return num1+num2;

// }

// console.log(add(10,20))


const add=(num1,num2)=>( num1+num2)

console.log(add(10,20))