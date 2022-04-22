// as more and more requests are being loaded based on the data obtained from the previous reqeusts, 
// developers started to encounter CALLBACK HELL
// CALLBACK HELL IS when the code is so loaded and makes it difficult to reason and understand the code 


// Due to this problems, we prefer to use promises 

// Promises are things that you wait to execute, if it works you call the success
//  execution and if it fails, you call the failure execution.

// A promise is a proxy for value. you may or may not get tacos from your friend

// The promise value is unknown during promise creation 

// promise is just an object

// promise can have 3 states. Pending, fulfilled, rejected 


//WHY WE USE PROMISES 
// Promises help us to deal with Async Javascript in simpler way than callbacks. becuase they don't have callback hell. 


// How to create promise 
const promise1 = new Promise(); 

// how to fulfill or reject a promise 
const promise = new Promise(()=>{   // Promise() is called promise constructor function 

}); 


//setting timeout after some waits

//if promise is working, resolve function is will be called 
const newP = new Promise((resolve, reject)=>{
    setTimeout(() =>{ // the () will be changed to fun() if there is extenal funciton
    resolve()
    }, 5000)
})

// if condition is failing, call the reject functin 
const newP2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject()
  }, 5000)
})


// Promise execution 

//promise.then() is called when the status is resolved, fulfilled

//promise.catch() is called when the status is rejected 

