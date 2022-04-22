// in javascript, functions are first class objects - which means, functions can be passed as arguments to other functions. 
// functions can also be returned as values from other functions 

// any functions that is passed to other function as an argument is called CALLBACK function

// the functions which accepts a function as an argument or returns a function is called higher order function 


// callback funcions are classified in to two

// asyncronous callbacks - a callback which is not executed immdiatly OR 
    // an Asychronous callback is a callback that is often used to continue or resume code execution after an asyncronous operation has compiled

// synchronous callbacks - a callback which is executed immidiatly 

// callbacks are used to delay the execution of a fucntion until a particular time or event has occured. 
   // for example, when we are fetching data using API, we have to wait sometime until the data comes before executing the function 

// examples of async callbacks 

function greet(name){   // here greet is acting like callback function
  console.log('Hello' + name)
}
// it is watiing for 2 seconds and execting 
setTimeout(greet, 2000, 'Hagos') // this function is acting like higher order function. 

