// the speard operator is just three dots  ...

// for example 

var names = ["mahlet", "million", "mule", "bazen"]

console.log(names)
//output 
   // [ 'mahlet', 'million', 'mule', 'bazen' ]

 console.log(...names)  
 // output 
 //     mahlet million mule bazen  // just plain words 

// few advantages of speard operator 

let arr1 = [1,2,3];
let arr2 = [arr1, 4,5,6];

let newArr2 = [...arr1,4,5,6]

let newArr3 = arr1.push[4,5,6]

console.log(arr2);
  // [ [ 1, 2, 3 ], 4, 5, 6 ]

console.log(newArr2)  
  //   [ 1, 2, 3, 4, 5, 6 ]  amazingly contatnated 
console.log(newArr3)
  // undefind


// other examples

   // if we want to pass array elements as function parameters
let arrayNums = [1,2,3]

function addNums(a,b,c) {
    console.log(a+b+c)
}

// call the function with values just the array values 
  addNums(...arrayNums)
    // output would be 6  ( the array elements used as parameter)
  












   
        


