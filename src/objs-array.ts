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

enum Role {
  ADMIN = 10,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Ryan',
  age: 30,
  hobbies: ['soccer', 'gaming'],
  role: Role.ADMIN,
};

// person.role.push('manager'); -- adding or pushing string to role/tuple
// person.role[1] = 10;

// Any Type : Allows for any typescript type (number, string, array,etc)

let favoriteActivities: any[]; // store array of strings
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
