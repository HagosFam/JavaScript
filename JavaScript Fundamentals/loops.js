// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while (condition) {
//     // do this as far as this condition is satisfaying 
// }


// do {
//    //do something as far the condition is satisfied  
// } while (condition);



//this one is pretty new and its used over collection of data like arrays. 
const person = {
    firstname : 'bazen',
    lastname : 'nigus',
    age : 23,
    area : 'area',
    array : 'array name',
}

const num = [1,3,4,5,6,8,]

for (const iterator of person.firstname) { //this way person is itrable, but only Person is not itrable because it has key value pair
   console.log(person.firstname) 
}