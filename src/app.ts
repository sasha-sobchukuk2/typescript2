
let userInput:unknown
let userName:string

userInput = 5
userInput = "max"

if(typeof userInput ==='string'){
    userName = userInput
}


function generateError (message:string,code:number):never{
    throw {message,errorCode:code}
}

const myErr = generateError('bro',2)
console.log(myErr)
