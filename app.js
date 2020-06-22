var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userName);
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured', 500);
