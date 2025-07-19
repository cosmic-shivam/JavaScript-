// () ()   This is the syntax of IIFE . IT's Immediate inovked function expression.
//IIFE is used to execute function as soon as it gets created.


(function userInfo(name,age){
    console.log(`Welcome to ${name} whose age is ${age}`)
})("shivam",19);



(
    (name,age)=>{
        console.log(`Welcome to ${name} whose age is ${age}`)
    }
)("shivam",19)