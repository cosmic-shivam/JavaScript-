// In map all item get return where as In filter only true value gets return 


const numb=[1,2,3,4,5,6,7,8,9,10];

// const even=numb.filter((item)=>item%2==0);
// console.log(even);
// console.log(typeof even);


// const even=numb.filter((item)=>{
//     return item%2==0;
// });
// console.log(even);
// console.log(typeof even);

//Same but using forEach

// const arr=[];
// numb.forEach((item)=>{
//        if(item%2==0){
//         arr.push(item);
//        }
// })

// console.log(arr);
// console.log(typeof arr);



const opt=numb.map((item)=>item*20)
              .map((item)=>item+1)
              .filter((item)=>item>=20);

console.log(opt);
