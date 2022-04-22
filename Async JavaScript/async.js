// although promises enhance readability and performance of code, there is a way for further improvement. 

// async await allows us to write synchronous looking code while doing Asychronous task behind the scene 


//async keyword

//async keyword helps us to write async functions 

//async functions are functions which are the instance of asyncFunction constructor 
    // what makes async functions different? 
        // They always return a promise 

 //examples 

 function greet() {
    console.log('hello ')
 }
 greet()
 // returns hello on browser console 

 async function greet() {
    console.log('hello ')
 }
 greet()
 // returns Promise { <fulfilled>: hello } on browser console 

 //we can also rewrite 

 async function greete(){
     return Promise.resolve('hello');
 }