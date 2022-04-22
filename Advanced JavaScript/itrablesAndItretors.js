// itratbles and itrators helps us access in collections ( array, lists or strings ) easily,
// so that we can focus on the data manupilation rather than westing time on how to access the datas

// for examples 

const str = 'Bazen Haftu';
for (let index = 0; index < str.length; index++) {
  //  console.log(str.charAt(index))
}

const arr = [2,4,5,6,7,8,9,10];
for (let index = 0; index < arr.length; index++) {
 // console.log(arr[index])   ;
}

// in the above two statements, has two problems 
// 1) difficult to access the elements 
// 2) difficult to manage itration on the data for various types of data structures. 


// for example, we use charAt for string and arr index to array. 


// itrators and itrables makes acessing easy and and uniform for any collection. 
// they make us to focus on data manupilation rather than data accessing
// this are protocols introduced in 2015. 


// this protocols will work on strings, arrays, maps and sets 

// so the above two collections will be accessed like this. 

const newString = 'Bazen Haftu';
for (const char of newString) {
   console.log(char)
}

const newArr = [2,4,5,6,7,8,9,10];
for (const item of newArr) {
 //  console.log(item)
}

// the above is called 'For of ' loop.