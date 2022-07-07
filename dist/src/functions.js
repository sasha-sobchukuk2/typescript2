"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
function addAndHanle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
    return result;
}
// printResult(add(1,2))
let combineValues;
combineValues = add;
let bro = combineValues(11, 22);
// console.log('bro:',bro)
addAndHanle(1, 2, (res) => {
    console.log(res);
});
//# sourceMappingURL=functions.js.map