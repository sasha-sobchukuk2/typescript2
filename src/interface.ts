
interface Named {
    name?:string
    outputName?:string
}

interface Greetable extends Named{
    readonly name?: string;

    greet(phrase: string): void
}
/** імплемент =  обовязково включити поля інтерфейсу що імплементуємо,
 *  можимо імплементувати одночасно з багатьох*/
class Person implements Greetable {
    name?: string;
    age = 10
    constructor(n?: string) {
        if(n){
            this.name = n
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + this.name)

        }else {
            console.log('hi! name not exist')
        }
    }
}

let user1: Greetable
user1 = new Person()
/*user1 = {
    name: 'sasha',
    age: 26,
    greet(phrase: string) {
        console.log(phrase + this.name)
    }
}*/
user1.greet('hi')
// user1.name = '3'

interface AddFn {
    /** function type інтерфейс в якому просто опис однієї функції*/
    (a:number,b:number):number
}
let  adde:AddFn;

adde = (a1:number,b1:number)=>{
    return a1+b1;
}






