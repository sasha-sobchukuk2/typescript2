
const button = document.querySelector('button')! as HTMLButtonElement
const input1 = document.querySelector('.input1')! as HTMLInputElement
const input2 = document.querySelector('.input2')! as HTMLInputElement


function addF (num1:number,num2:number){
    return num1 + num2
}

button.addEventListener('click',function (){
    console.log(addF(+input1.value, +  +input2.value));
})

