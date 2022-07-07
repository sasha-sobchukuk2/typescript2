

enum Role {ADMIN,READ_ONLY, AUTHOR};
const person :{
    name:string
    age:number
    hobbies: string[]
    roleTurple:[number,string]
    role:Role
    // [x:string]:any
}= {
    name:'string',
    age:11,
    hobbies:['sports','cocies'],
    roleTurple:[1,'bro'],
    role:Role.ADMIN
}
let favoriteActivities:string[]
favoriteActivities = ['sports']

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map)  !! dont work
}
if(person.role ===Role.ADMIN){
    console.log(' role')
}
