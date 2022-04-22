// generators are function that are used to control itrators
// they differ with funciton that, functions retern one value or nothing, but generators return many values in sequence 


// example of normal function and generator funciton 

function normalFunction() {
    console.log('hello')
    console.log('world')
}
// calling normal function 
//normalFunction()
// as we can see it can't pause printing results, but generator funciton can stop. 


//example of generator function 

function* generatorFunction(){
    // we use the yield keyword in generator functions 
    yield 'hello'
    yield 'world'
}

// when accessing generator functions 
// when we create objects in generator functions, we dont use new keyword. 
const generatorObject = generatorFunction()

// Then we can access the object as itrator 

for( const word of generatorObject){
    console.log(word)
}