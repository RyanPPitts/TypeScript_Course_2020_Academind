console.log('Code goes here');

function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2; // String + Number = 52.8 = concatenate the two variables
  }
}

// Better to find errors in development instead of runtime - advantage of typescript

const number1 = 5;
const number2 = 2.8;
const printResult = true;

const result = add(number1, number2, printResult);
console.log(result);
