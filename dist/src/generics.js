"use strict";
/** генерики типи що вимагають уточнень або самі є уточненнями (генерики це умовні типи) , роблять типи гнучкими*/
//
//
// const names:Array<string> = []; // string[]
//
//  const promise:Promise<string> = new Promise((resolve, reject)=>{
//   setTimeout(()=>resolve(' '),22)
//  })
//
//
//
/** як генерики працюють build in generics*/
/** extends object означає шо має бути не будь-яке значення а лише обєкт, цифра не пройде , навідміну від без нього*/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const obj1 = merge({ name: 'sasha' }, { age: 2 });
/** вписуємо шо входящий параметр може бути будь-чим(строкою ерейом і тд) що має length значення*/
function countAndDescribe(element) {
    let descriptionType = 'Go no value.';
    if (element.length === 1) {
        descriptionType = 'got 1 element';
    }
    else if (element.length > 1) {
        descriptionType = 'has ' + element.length + ' elements';
    }
    return [element, descriptionType];
}
console.log(countAndDescribe('bor'));
/** а тут ми пишем шо 1 параметр буде обєктом а другий буде назвою поля цього обєкту*/
function extractAndConvert(obj, key) {
    return obj[key];
}
// console.log(extractAndConvert({name:'sasha'},'name'))
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        // погано працюватиме бо це примітив сам сплайс, якшо по фільтру то норм, тому можна робити перевірку шо T примітив
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
function createCoalCourse(title, description, myDate) {
    let goal = {};
    goal.title = title;
    goal.description = description;
    goal.myDate = myDate;
    return goal;
}
const names = ['max', 'sasha'];
// names.push('bro')
//# sourceMappingURL=generics.js.map