// 
var name = 'nigus'
var belt = 'white'
var object = {
 name, belt // we can just pass as variables because we have defind it above 
}

//loging object name and belt 

console.log(object.name)

// one other things we can do is 

var ninja = {
     name: 'Nigus',
     chope : function(x) {
        console.log(`you chopped the enemy ${x} times`)
    }
}
console.log(ninja.chope(5))

// the above can be improved by doing the following in ES6 

var ninjaImporoved = {
    name:'Nigus',
    chope(){
        console.log(`you chopped the enemy ${x} times`)
    }
}