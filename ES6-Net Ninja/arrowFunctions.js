// arrow functions or fat arrows 
   // they save time 
   // they bind the 'this' value in javascript 
   // you will find them vastly in node js 

 var arrow = (request, response) =>{
      console.log(`your name is ${request} from now in wards `)
 }


 // or if we have only one line we can rewrite this agian 

   //var arrow = (request, response) => console.log(response);
 arrow("nigus", "main")



var object = {
    name:'rayu',
   
    chope(x)  {

        //inorder for this.name to work, we have to tell that 'this' has redefind
         var _this = this
         setInterval (function(){
             if (x>0) {
                 //but this will not work 
                 console.log(_this.name + 'chopped enemy');
                 x--
             }
         }, 1000)
    }
}

console.log(object.chope(3))
// this way we the name will not be printed, because it calls to inside the funciton 

















