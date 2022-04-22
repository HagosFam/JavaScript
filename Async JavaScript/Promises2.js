//in previous lecture we have learned about the basics of promises. 

const promise = Promise((resolve, reject)=>{
     resolve;  // on promise fulfillment 

     // or 

     reject // on promise failure 
})


//chaining promises =  it is more readable and maintenable than in callbacks 

const pro = fetchCurrnetUser('api/users')

pro.then(result=>Fetchuser('thisapi', result))
pro.then(result=>FetchuserById('thisapi', result))
pro.then(result=>FetchuserByName('thisapi', result))



// PROMISE STATIC METHODS 

// 1 promise.all()

   // when calling multiple APIs and should wait them, we call .all()
// EXAMPLES 

const promise1 = Promise(resolve(3));
const promise2 = 42; 
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'foo')
});

// they have different wait times, if we want to execute our next task after finishing those tasks, we call .all like this
// the promise.all method takes itrable of promises as an array. 
Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values)
})
// BUT if one of the promises got rejected, the whole .all() will be rejected. 

// 2 PROMISE.allSettled() method 

   // this method is same as .all(), but waits for all input promises even one of the promises is rejected. 


// 3 PROMISE.RECE() METHODS 
   // this method returns a promise that returns fulfills or rejects as soon as one of    


   