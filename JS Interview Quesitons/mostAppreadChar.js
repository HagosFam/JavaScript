let text = "Hekkko";

//finding the character/ number that have max occurences 

// change to array
let array = [];
for(let char of text ){
    array.push(char)
}

// find a char that have max occurences 
let maxCount = 0;
let tempCount = 0;
let tempChar = '';

let n = (array.length); 

// looping through the whole array
for (let i = 0; i < n; i++) {
    // creating another array 
    for (let j = 0; j < n; j++) {
      if (array[i]== array[j] ) {
          maxCount++
          if(maxCount > tempCount){
              tempCount = maxCount;
              tempChar = array[i];
          }
          
      }
    
    }
    // console.log(`Array[${i}] apears ${maxCount} times   `)
    // maxCount = 0;
}

console.log(`the max occurence is  ${tempCount}`)
console.log(`the max appread char is is  ${tempChar}`)


