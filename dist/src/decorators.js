"use strict";
/*function Logger(logString: string) {
    console.log('це буде перше11')

    return function (constructon: Function) {
        console.log('це буде друге11')

        console.log(logString)
        console.log(constructon)
    }

}

function WithTemplate(template: string, hookId: string) {

    return function<T extends {new(...args:any[]):{name:string}}> (originalonstructor: T) {
        return class extends originalonstructor {
            constructor(..._:any[]) {
                super();

                console.log('TEMPLATE FACTORY')
                // const p = new originalonstructor()
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}

// @Logger('bro123')
@WithTemplate('<h1>hello</h1>', 'decorators')
class Person1 {
    name = 'name123213213'

    constructor() {
        console.log('creating person object..')
    }

}

// const pers = new Person1()
//
// console.log(pers)


function LogProp(target: any, propertyName: string | Symbol) {

    console.log('property decorator!');
    console.log(target, propertyName);
}

function LogProp2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('accessor decorator')

    console.log(target)//розпише клас або просто конструктор не помню
    console.log(name)//розпише імя акцесора
    console.log(descriptor)// розпише дескриптор // get set
    return {}
}

function LogProp3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator')

    console.log(target)//розпише клас або просто конструктор не помню
    console.log(name)//розпише імя імя методу
    console.log(descriptor)// розпише дескриптор // value writable
}
function LogProp4(target: any, name: string | Symbol, position:number) {
        console.log('Parameter decorator')

        console.log(target)//розпише клас або просто конструктор не помню
        console.log(name)//розпише імя методу
        console.log(position)// позиція // index

}

class Product {
    @LogProp
    title: string;
    private _price: number
    @LogProp2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @LogProp3
    getPriceWithTax(@LogProp4 tax: number) {
        return this._price * (1 + tax)
    }
}





//тут декоратори спрацююють раз бо вони тут виконуються лише при зверненні до класу

const p1 = new  Product('book 1',19)
const p2 = new  Product('book 2',29)*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescripror = {
        configurable: true,
        enumerable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescripror;
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
// p.showMessage()
// const button2 = document.querySelector('.click-me')! as HTMLButtonElement
// button2.addEventListener('click',p.showMessage);
const courseForm = document.querySelector('form');
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function IsPositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.tittle = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "tittle", void 0);
__decorate([
    IsPositiveNumber
], Course.prototype, "price", void 0);
courseForm.addEventListener('submit', ev => {
    ev.preventDefault();
    const $title = document.getElementById('title');
    const $price = document.getElementById('price');
    const title = $title.value;
    const price = +$price.value;
    const createdCoure = new Course(title, price);
    if (!validate(createdCoure)) {
        alert('error');
        return;
    }
    console.log(createdCoure);
});
//# sourceMappingURL=decorators.js.map