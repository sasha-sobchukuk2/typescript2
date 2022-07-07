"use strict";
const e1 = {
    name: 'max',
    privileges: ['admin'],
    startDate: new Date()
};
function add3(a, b) {
    /** type quard typeof*/
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const result = add3('max', ' pain');
result.split(' ');
function printEmployeeInformation(emp) {
    /** in quard   якшо в типі emp  є поле privileges*/
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges);
    }
}
printEmployeeInformation({ name: 'bro', startDate: new Date() });
class Car {
    drive() {
        console.log('drive');
    }
}
class Truck {
    drive() {
        console.log('drive drive');
    }
    loadCargo(amount) {
        console.log('loading cargo ...', +amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive;
    if ('loadCargo' in vehicle) {
        //in quard
        vehicle.loadCargo(12);
    }
    if (vehicle instanceof Truck) {
        //instanceof quard
        vehicle.loadCargo(12);
    }
}
function moveAnimal(animal) {
    /**
     descrimination union це коли добавляєм конкретний тип к кожен interface щоб потім можна було промавити
     і де є конкретні поля а де нема, бо якшо обєднати то може буьти а може і не бути, і типскріпт ніфіга не помічний

     */
    let speed;
    switch (animal.type) {
        case "horse":
            speed = animal.runningSpeed;
            break;
        case "bird":
            speed = animal.flyingSpeed;
            break;
        default:
            return 0;
    }
    console.log('speed' + speed);
}
moveAnimal({ type: 'horse', runningSpeed: 2 });
// const userInputElement = <HTMLInputElement >document.querySelector ("#user-input")! //в дужках позначаємо що буде після дужок
const userInputElement = document.querySelector("#user-input"); //  в реакті попереднє працює по іншому тому тре писати as
// і доре речі тут не обовязковий !
// бо ми вже й так вписуєм що це не  null
// userInputElement.value = 'hi there'
userInputElement.value = 'hi there'; // а можна й так
const errorBag = {
    // email:2 так не можена бо кожне поле  має  бути стрінг
    1: '3'
};
const fetcedUserData = {
    id: 'u1',
    name: 'max',
    job: { title: 'ceo', description: 'my own company' }
};
// console.log(fetcedUserData?.job?.title)
const userInput2 = '';
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'default'; //?? null or undefined only
console.log(storedData);
//# sourceMappingURL=section6AdvancetTypes.js.map