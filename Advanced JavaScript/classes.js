// classes in js are declared like this 
class Person {
    constructor(fname, lname) {
      this.firstname = fname;
      this.lastname  = lname
    }
    sayName() {
        return 'my name is' + '' + this.firstname + '' + this.lastname
    }
}

// const obj = new Person('nigus', 'fam')
// console.log(obj.sayName())

// console.log(obj.firstname)

// we can extend a class using extends to achive class inheritance 

class SuperHero extends Person {
    constructor(fname, lname){
        // the super function, is a keyword and it helps to call the constructor of parent class 
        super(fname, lname)
        this.isSuperHero = true
    }

    fightingCrime(){
        console.log('He is fighting a crime ')
    }
}

// create instance of super hero and call methods of the parent class here 
const object = new SuperHero('nigus', 'fam')
 console.log(object.sayName()) 

 console.log(object.fightingCrime())



