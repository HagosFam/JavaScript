// is calling a function as argument 

function one(call_two){
    console.log('Calling funciton one ')
    call_two()
}

function two(){
    console.log('calling function two')
}

one(two)



//example two using arrow functions 

let order = (call_prod) => {
    console.log('order placed, call to production')
    call_prod()
}

const production = () => {
    console.log('Order recieved, starting production')
}


order(production)











