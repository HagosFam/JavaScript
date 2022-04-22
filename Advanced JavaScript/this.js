// the this keyword

// the javascript this keyword is used in a function, refers to the object it belongs to
// it makes functions reusable by letting you decide the object value 
// this value is entirely by how the function is called 

// there are four ways of using this keyword 



// 1  Implicit binding 

let person = {
    name:'Hagos',
    sayName: function(){
     // console.log(`my name is ${this.name} ` )
    // console.log('my name is ' + this.name)
    },
    age: 27
}
//person.sayName()





// 2 Explicit binding 

function sayName(){
  //  console.log(`my name is ${this.name}`)
}
//sayName.call(person)






// 3 New binding 

function human(name){
    this.name = name
}

const p1 =  new human('Hagos')
const p2 =  new human('Nigus')
const p3 =  new human('Abraham')
const p4 =  new human('Muluhabt')

console.log(p1.name)
console.log(p2.name)
console.log(p3.name)
console.log(p4.name)

// this keyword can create object to function and object and access them using new keyword. 


// 4 Defualt binding 

// this is the normal function calling for excecution 

// on this binding, this keyword will rely on global scope 


// ORDER OF PRECENDENCE 
// NEW => EXPLICIT => IMPLICIT => DEFUALT BINDING, WHEN EVER THEY ARE USED ALTOGETHER 