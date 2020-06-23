"use strict";
// Objects
// TypeScript representation of your objects
// const person: {
//   name: string;
//   nickname: string;
//   age: number;
// }
// const person: {
// name: string;
// nickname: string;
// age: number;
// hobbies: string[];
// role: [number, string];
// } = {
// name: 'Max',
// nickname: 'Maxy',
// age: 30,
// hobbies: ['Soccer', 'Gaming'],
// role: [2, 'developer'],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READ_ONLY"] = 11] = "READ_ONLY";
    Role[Role["AUTHOR"] = 12] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Ryan',
    age: 30,
    hobbies: ['soccer', 'gaming'],
    role: Role.ADMIN,
};
// person.role.push('manager'); -- adding or pushing string to role/tuple
// person.role[1] = 10;
// Any Type : Allows for any typescript type (number, string, array,etc)
var favoriteActivities; // store array of strings
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
