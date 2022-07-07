"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'string',
    age: 11,
    hobbies: ['sports', 'cocies'],
    roleTurple: [1, 'bro'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['sports'];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map)  !! dont work
}
if (person.role === Role.ADMIN) {
    console.log(' role');
}
//# sourceMappingURL=20.js.map