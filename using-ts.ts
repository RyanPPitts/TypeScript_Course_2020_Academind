//Will be compiled to Javascript

const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement; // typescript feature ! as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement;

// Adding - : - allows you to put a type to the variable.  For example num1 will be a type number
function add(num1: number, num2: number) {
  return num1 + num2;
}

// value is a string - always string //
button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
