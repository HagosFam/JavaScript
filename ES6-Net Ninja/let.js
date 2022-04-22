// so basically, let has local scope, and var has global scope. 


// the let keyword 
   // has only lexical ( local) scope. It only has  { on this scope }

// var keyword 
   // updates the value in the the program, it has global scope 



// var x= 6;

// if (x>5) {
//     let x = 5
//     console.log('x is' + x + 'here')
// }

// console.log('x is' + x + 'here' )

// the above output is 

// x is5here
// x is6here


let x= 6;

if (x>5) {
    let x = 5
    console.log('x is' + x + 'here')
}

console.log('x is' + x + 'here' )

// the above is output is 
     // x is5here
     // x is5here