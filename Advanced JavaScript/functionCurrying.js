// curyying is a process in functional programming in which we transform a function with multiple arguments 
// into sequence of nesting functions that take one argument at a time. 
// f(a,b,c) = > f(a) f(b) f(c)
// currying does not call a function, it simple transforms it 

//what is the purpose of doing this 

function sum(a,b,c) {
    console.log(a+b+c)
}
//sum(2,3,5)

//  ||
//  V

function curry (fn) {
    return function(a) {
        return function(b) {
            return function(c){
               return fn(a,b,c)
            }
        }
    }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))