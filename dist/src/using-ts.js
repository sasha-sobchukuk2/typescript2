"use strict";
const button = document.querySelector('button');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
function addF(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(addF(+input1.value, + +input2.value));
});
//# sourceMappingURL=using-ts.js.map