// Objects
// TypeScript representation of your objects

// const person: {
//   name: string;
//   nickname: string;
//   age: number;
// }
const person: {
  name: string;
  nickname: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Max',
  nickname: 'Maxy',
  age: 30,
  hobbies: ['Soccer', 'Gaming'],
  role: [2, 'developer'],
};

// person.role.push('admin');
// person.role[1] = 10;

// Any Type : Allows for any typescript type (number, string, array,etc)

let favoriteActivities: any[]; // store array of strings
favoriteActivities = ['Sports', 1];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
