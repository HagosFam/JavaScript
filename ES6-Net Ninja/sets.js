// sets use to store unique values 

var names =  new Set()

// sets have many methods like 

//var lists = names.add("hagos").add("selam").add("girl friend").add("wife")
//console.log(names.size)


// displaying girl friend with setting timeout functions 

function display() {
        console.log('Hello dear how are you doing today')
}
function seven() {
    console.log('Do you know my beautiful girlfriend'+"'s"+ 'name?')
}
function two() { console.log("Seriouly you dont know her")}
function three() {console.log("I heard you were dreaming about her last night, but i dont now her") }
function four() { console.log("So let me introduce you, ") }
function five(name) { console.log(`She is called Etege ${name}, call her with this name` ) }


function gf(){
    setTimeout(display(),seven(), two(), three(), four(), five('selam'), 2000   )
}
//
gf()










