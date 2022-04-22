// const pi = 3.14;

// function findArea(p) {
//     //pi = 10; // wrong we cant assign to already declared variable.

//     const pi = 6 // This works, becuase we are redeclaring the variables so that the above declartion doesnt work
//     console.log('the area is ' + pi*p*p  )
// }

// findArea(5)

// the following code is trying to connect the html tags 
window.onload = function() {
    var items = getElementsByTagName('li');
for (var index = 0; index < items.length; index++) {
    items[index].onclick = function(){
        console.log(index)
    }
}
} 
