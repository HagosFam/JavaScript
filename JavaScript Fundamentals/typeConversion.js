// Implicit conversion - JS it self converts from one type to other type 

// Explicit conversion - manuall changing from one type to other type 

console.log('5' - '4')

console.log('5' - true)

console.log('5' - false)

console.log(5 - '4')

//to change any datatype to number we use Number or parseInt

console.log(Number('5'))

console.log(Number(true))

console.log(Number(false))

//we can also use the function String to change anything to string 

console.log(String(400)) //the number will be treated as string even though its number 
//WE CAN also use .toString or .toInt 

// null, undefind, 0, '', NaN are treated like false when we change them to boolean.