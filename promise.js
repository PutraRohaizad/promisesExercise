// Exercise 1
function result(){
            console.log('Ok')
    }

function A(){
   return new Promise ((resolve,reject) => {

        let error = false;
        if(!error){
            resolve();
        }
        else{
            reject('You have an error');
        }
    });
}

A()
.then(result)
.catch(err => console.log(err));

////////////////////////////////////////////

// Exercise 2
// const workers =[
//     {name:'Ali', position: 'HRR'},
//     {name:'Abu', position: 'IT'}
// ]

// function C(callback){
//     setTimeout(()=>{
//         for(var i in workers){
//             var abc = workers[i].name
//             console.log(abc);
//         }
//         callback();
//     },800)
// }
// function D(){
//     setTimeout(() =>{
//         for(var i in workers){
//             var xyz = workers[i].position
//             console.log(xyz);
//         }
//     }, 700)
// }

// C(D);
