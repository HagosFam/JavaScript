let a = 10;

function outer() {
    let b = 20;
    function inner(){
    let c = 30; 
    console.log(a, b , c)
    }
    inner()
}   
outer()


// this shows us javascript functions has access to variables that are declared in their inner scope and outer scope 