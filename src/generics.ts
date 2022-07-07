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
function merge <T extends object, U extends object>(objA:T,objB:U) {
 return Object.assign(objA,objB)
}
const obj1 = merge({name:'sasha'}, {age:2})
// console.log(obj1.age )


interface Lengthy{
 length:number
}
/** вписуємо шо входящий параметр може бути будь-чим(строкою ерейом і тд) що має length значення*/
function countAndDescribe<T extends Lengthy>(element:T):[T,string  ]{
 let descriptionType = 'Go no value.';
 if(element.length ===1){
  descriptionType = 'got 1 element'
 }else if (element.length>1){
  descriptionType = 'has '  + element.length + ' elements'
 }
 return [element,descriptionType]
}

console.log(countAndDescribe('bor'));

/** а тут ми пишем шо 1 параметр буде обєктом а другий буде назвою поля цього обєкту*/
function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
 return obj[key]
}

// console.log(extractAndConvert({name:'sasha'},'name'))

class DataStorage<T> {
 private data:T[] = []

 addItem (item:T){
  this.data.push(item)
 }
 removeItem(item:T){
  // погано працюватиме бо це примітив сам сплайс, якшо по фільтру то норм, тому можна робити перевірку шо T примітив
  if(this.data.indexOf(item)===-1){
   return
  }
  this.data.splice(this.data.indexOf(item),1 )
 }
 getItems():T[]{
  return [...this.data]
 }

}

// const textStorage = new DataStorage<string>()
// textStorage.addItem('1')
// textStorage.addItem('2')
// textStorage.removeItem('1')
// textStorage.removeItem('1')
// console.log(textStorage.getItems())
//
// const numberStorage = new DataStorage<number>()
// numberStorage.addItem(1)
// console.log(numberStorage.getItems())
//
// const alina = {name:'alina'}
// const objStorage = new DataStorage<object>()
// objStorage.addItem({name:'sasha'})
// objStorage.addItem(alina)
// objStorage.removeItem(alina)
//
// console.log(objStorage.getItems())




interface CourseCoal {
 title:string
 description:string
 myDate :Date
}

function createCoalCourse (title:string,description:string,myDate:Date):CourseCoal{
 let goal:Partial<CourseCoal> = {}
 goal.title = title
 goal.description = description
 goal.myDate = myDate
 return goal as CourseCoal
}

const names:Readonly<string[]> = ['max','sasha']

// names.push('bro')


