"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "max";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, errorCode: code };
}
const myErr = generateError('bro', 2);
console.log(myErr);
//# sourceMappingURL=app.js.map