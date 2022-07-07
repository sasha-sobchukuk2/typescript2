"use strict";
function combine(input1, input2, resultConvertion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(1, 2, 'as-number'));
console.log(combine('bro', '2', 'as-string'));
//# sourceMappingURL=combine.js.map