// we have primitive and non primitive data types 

// primitive types = only represent single value

// string 
// Number
// Boolean
// undefined - anything that has not defind value ( that is not yet defind)
// null - indicates empty or unknown value 
// BigInt - used to represent a number which is morethan BigInt
// Symbol - a datatype that is used to represent unique and constant value 

// non primitive types 
// represent to collaction of values 
// E.g. Object - object is complex data type 

const person = {
    firstname : 'bazen',
    lastname : 'haftu',
    middlename : 'nigus',
    age : 23,
    salary : 123455,

}
//array declaration 
let Numbers = [1,2,3,4,5,6,7,8,9,10]

//finding only the odd numbers 
console.log('List only even numbers')
for (let index = 0; index < Numbers.length; index++) {
  if (Numbers[index] %2 ==0  ) {
       console.log(Numbers[index])
  }
        
}

