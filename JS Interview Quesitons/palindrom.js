let text = "cabbac";
let arrLen = text.length
let array = [];

for (const char of text) {
  array.push(char) 
 }

 // this is the pushed array
 console.log(array)


let k = (array.length) -1;
let pal = true;
 
 for (let i = 0; i < k; i++) {
    if(array[i] != array[k] ) {
      pal = false;
       break;
    }
    k--;
}

console.log(pal)
