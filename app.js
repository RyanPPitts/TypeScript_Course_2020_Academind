console.log('Code goes here');
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result; // String + Number = 52.8 = concatenate the two variables
    }
}
// Better to find errors in development instead of runtime - advantage of typescript
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
