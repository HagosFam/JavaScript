// defualt parameters are parameters which are taken when the function is called with out parameters 

function log(name="Coll and Mess") {
    console.log('my project is' + name )
}

// when I call the function with no parameters
//log()
// the output will be 
    //my project is "Coll and Mess"


// but when we call the function with our own value like 
// the output would be 
     // my project isthins
// this variable is replaced      
log("thins")
    // my project isthins

