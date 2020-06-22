let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

console.log(userName);

// great utility function to show that the function does not return a value
// use with trycatch to catch errors
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An Error occured', 500);
