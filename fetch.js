// async function dataCollector(){

//     const response= await fetch('https://randomuser.me/api/');
//     const data= await response.json();
//     console.log(data)
// }

// dataCollector();


fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(`Error: ${err}`);

})