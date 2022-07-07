type numberOrString = string |number
function combine (
    input1 :numberOrString,
    input2:numberOrString,
    resultConvertion : 'as-number' | "as-string"){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'||resultConvertion ==='as-number'){
        result = +input1 + +input2
    }else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(1,2,'as-number'))
console.log(combine('bro','2','as-string'))