let text = "This something that should be easy";

// To reverse a string, 
//    just change the string into array and reverse the array

let array = [];
let n = text.length;

for (let index = 0; index < n; index++) { 
    array.push(text.charAt(index));

} 

// the above can be rewritten with
// for(char of text) {
//     array.push(char)
// }
// console.log(array.reverse())



 const reversed = array.reverse();
  console.log(reversed)