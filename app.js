// Objects
// TypeScript representation of your objects
// const person: {
//   name: string;
//   nickname: string;
//   age: number;
// }
var person = {
    name: 'Max',
    nickname: 'Maxy',
    age: 30,
    hobbies: ['Soccer', 'Gaming'],
    role: [2, 'developer']
};
// person.role.push('admin');
// person.role[1] = 10;
// Any Type : Allows for any typescript type (number, string, array,etc)
var favoriteActivities; // store array of strings
favoriteActivities = ['Sports', 1];
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
