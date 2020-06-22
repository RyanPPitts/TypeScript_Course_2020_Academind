//Will be compiled to Javascript
var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
// Adding - : - allows you to put a type to the variable.  For example num1 will be a type number
function add(num1, num2) {
  return num1 + num2;
}
// value is a string - always string //
button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
