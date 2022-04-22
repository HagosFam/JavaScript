//if, else and switch statements 

const num = null
const num2 = undefined;

const othernum = null;
const othernum2 = 0;

// if (num == num2) {
//     console.log('they are equal')
// }
// else if (num ===num2) {
//     console.log('they are strictly equal')
// }


// if (othernum == othernum2) {
//     console.log('they are equal')
// }
// else if (othernum === othernum2) {
//     console.log('they are strictly equal')
// }
console.log(num===num2)
switch (num) {
    case num ==num2:
      console.log('they are just equal')
        break;

    case num===num2:
        console.log('they strictly equal ')    
    default:
        break;
}
