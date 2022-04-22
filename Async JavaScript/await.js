// Await keyword

// can be written infornt of any async promise based function to pause your code until that promise settles and returns its result. 

// only works inside async functions, not with normal functions
// example 
async function greet(){
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>resolve('hello'),1000)
    })
    
    const result = await promise;
    console.log(result)
}

greet()

// try catch block is also simply handled 

async function fam(){
    try {
        const user = await FetchFiles('users/all')
    } catch (error) {
        console.log(error)
    }
}


//what are sequential, concurrent, Vs Parallel execution 

// sequential - means when two instructions has different running time, the one with smaller will execute first and later the other continues 

// concurrent - means when two functions has the same running time ( both 2 secs) at the same time. 
    // we make both await 

// If you have async funcitons and non async functions, or if you can run functions without waiting other functions results
      // you can make use of parallel execution using promise. all

      function parallel(){
          Promise.all([
             (async()=> console.log(await resolveHello())), 
             (async()=> console.log(await resolveWorld())), 
          ])
      }



      // async function is a function that always returns a value, and await pauses an execution until 
         // a promise is fulfilled or rejected. 









