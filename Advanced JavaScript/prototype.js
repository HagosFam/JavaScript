// in js every function has  a propoty called  prototype that points to object
function person(fName, lName) {
   this.firstname = fName;
   this.lastname = lName;
}

const p1 = new person('lil', 'wayne')
const p2 = new person('drake', 'ambush')

p1.getFullname = function() {
    return this.firstname + ' ' + this.lastname
}

console.log(p1.getFullname)
console.log(p2.getFullname)