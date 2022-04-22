const { METHODS } = require("http");

//mine
var text = "this is the sentence i just want to check"
var kin = text.split(" ");
for (let i = 0; i < kin.length; i++) {
  console.log(`word ${i} is ${kin[i]} `)
}

//from the js ref book
// var sentence = "the quick brown fox jumped over the lazy dog";
// var words = sentence.split(" ");
// for (var i = 0; i < words.length; ++i) {
//  console.log("word " + i + ": " + words[i]);
// }

//array METHODS
// sort, reverse, 

// js arrays are only one directional, but we can create custom multi dimetional array. 
// multi dimetional arrays 
var arr1 = [1,2];
var arr2 = [3,4];

var newArr = arr1 + arr2

console.log(newArr)





