const fetch = require("node-fetch");

// // Exercise 1
// function result(){
//             console.log('Ok')
//     }

// function A(){
//    return new Promise ((resolve,reject) => {

//         let error = false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject('You have an error');
//         }
//     });
// }

// A()
// .then(result)
// .catch(err => console.log(err));

// ////////////////////////////////////////////

// // Exercise 2
// const workers =[
//     {name:'Ali', position: 'HR'},
//     {name:'Abu', position: 'IT'}
// ]

// function B(){

//     return new Promise ((resolve,reject) =>{

//         let error = false;

//         if(!error){
//             resolve();
//         }
//         else{
//             reject('Error');
//         }
//     });
// }

// function info(){
//     setTimeout(() =>{
//         for(var i in workers){
//             var abc = workers[i].name
//             var xyz = workers[i].position
//             console.log(abc);
//             console.log(xyz);
//         }
//     }, 700)
// }

// B()
// .then(info)
// .catch(err => console.log(err));

// ////////////////////////////////////////////

// // Exercise 3

const fetchpromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

fetchpromise.then(values => console.log(values));