let array = [];
let text = 'apple';

for (let index = 0; index < text.length; index++) {
    array.push(text.charAt(index));
}

console.log(array.reverse())

//using arrow functions
// For some reason it is not working

const reversing = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
}

console.log(reversing("apple"))

