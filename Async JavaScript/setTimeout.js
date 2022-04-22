// this are the traditional methods for running code asyncronously 
// used to order a code in speciifed time elaps setTimeout()
//  or in a given interval of time. setInterval()


// setTimeout()
//syntax 
//setTimeout(function, interval, param 1, param 2)
// first parameter  = the function to run or a reference to a function defind elsewhere 
// second parameter = a number representing duration to wait in milliseconds to wait before executing the code 
// third  parameter = you can pass in zero or more values that represent any parameters you want to pass to the function when it is running

//examples 

function sayHi(fname,name ){
    console.log('Say hi' + '' + name + '' + fname )
}

setTimeout(sayHi, 2000, "Nigus", "king"); 

// it will call the console log after two seconds. 
//The parameters are placed based on their precedence on the function 

// to clear it assign to value the setTimeout function and clear it

let value = setTimeout(sayHi, 2000, "Nigus", "king"); 
clearTimeout(value)
