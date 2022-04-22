// they are similar to normal strings but 

  // they are sarounded by back tiks ``
  // they can work even you press enter in the middle of the sentence

 // var sent = 'this 
 // test sentence'

   // the above is one sentence, and it doesnot work because its in new line. but

   var newSent = `this is test to template strings ` // works fine 

   var newSent2 = `this is test works
   in new line `  // works fine. but in the console the out put would be 

   console.log(newSent2)
    // this is test works
        // in new line   


        // template strings are also used to to use variables without concatination.

        function displayName(name, age) {
            //  no need of using + or many "" double queots  
            console.log(`my name is ${name} and my age is ${age} `)
        }

        displayName('Hagos', 27)