// used when we want to run a code over and over again at regular intervals  
// syntax is smae with settimeout 
// setInterval(function, interval in millseconds, parameters accoring precedence)

function sayHi() {
    console.log('say hi')
}


setInterval(sayHi, 2000)
// the interval delay, 2000 is the minimum delay, it could take morethan that if the execution has took morethan that

// if we want to clear

const fam = setInterval(sayHi, 2000)
clearInterval(fam);


// few points timeInterval and Timeouts are not part of javascript 
// they are out of the box intervals 
// they are functionality given to the actions, they are impelmented on browsers 