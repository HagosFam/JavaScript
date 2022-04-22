// functions which can be play or pause at any time we want

function* gen() {
    console.log('prepare your function to use ')
}

gen() // will not have any output, because its only making it ready to use at this time 


// if we want output, we create object and call with .next 

var mygen = gen()
console.log(mygen.next())

// can also use yield keyword to pause 


function* biza() {
    yield console.log('he bakes pizza, this result will only be printed ')
    console.log('this is the value that will not be printed ')
    console.log('this is the other value that will not be printed ')
}

var piz = biza()
console.log(piz.next())