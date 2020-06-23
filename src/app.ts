// let age: number;
// age = 30;
// const userName = 'Max';

// console.log(userName);

// all code is compiled down to work on multiple browsers
let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  //   let userName = 'Ryan';
  console.log(`Clicked` + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're Welcome"));
}
