"use strict";
/** імплемент =  обовязково включити поля інтерфейсу що імплементуємо,
 *  можимо імплементувати одночасно з багатьох*/
class Person {
    constructor(n) {
        this.age = 10;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log('hi! name not exist');
        }
    }
}
let user1;
user1 = new Person();
/*user1 = {
    name: 'sasha',
    age: 26,
    greet(phrase: string) {
        console.log(phrase + this.name)
    }
}*/
user1.greet('hi');
let adde;
adde = (a1, b1) => {
    return a1 + b1;
};
//# sourceMappingURL=interface.js.map