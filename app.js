console.log('Code goes here');
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2; // String + Number = 52.8 = concatenate the two variables
    }
}
// Better to find errors in development instead of runtime - advantage of typescript
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
