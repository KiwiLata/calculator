function add(a,b) {
  return a+b;
}

function substract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function operate(operator,a,b) {
  if(operator === '+') {
    return add(a,b);
  }
  else if(operator === '-') {
    return substract(a,b);
  }
  else if(operator === '*') {
    return multiply(a,b);
  }
  else if(operator === ':') {
    return divide(a,b);
  }
  else {
    return 'ERROR';
  }
}

function splitInput(input) {
  
}

const inputDisplay = document.querySelector(".input");
let input = [];
let a;
let b;
let operator;

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
  let target = event.target;
  switch(target.textContent) {
    case '0': 
      input.push(0);
      inputDisplay.textContent = input.join('');
      break;
    case '1': 
      input.push(1);
      inputDisplay.textContent = input.join('');
      break;
    case '2': 
      input.push(2);
      inputDisplay.textContent = input.join('');
      break;
    case '3': 
      input.push(3);
      inputDisplay.textContent = input.join('');
      break;
    case '4': 
      input.push(4);
      inputDisplay.textContent = input.join('');
      break;
    case '5': 
      input.push(5);
      inputDisplay.textContent = input.join('');
      break;
    case '6': 
      input.push(6);
      inputDisplay.textContent = input.join('');
      break;
    case '7': 
      input.push(7);
      inputDisplay.textContent = input.join('');
      break;
    case '8': 
      input.push(8);
      inputDisplay.textContent = input.join('');
      break;
    case '9': 
      input.push(9);
      inputDisplay.textContent = input.join('');
      break;
    case '+': 
      input.push('+');
      inputDisplay.textContent = input.join('');
      break;
    case '-': 
      input.push('-');
      inputDisplay.textContent = input.join('');
      break;
    case '*': 
      input.push('*');
      inputDisplay.textContent = input.join('');
      break;
    case ':': 
      input.push(':');
      inputDisplay.textContent = input.join('');
      break;
    case '=': 
      input.push('=');
      inputDisplay.textContent = input.join('');
      break;
    case 'C': 
      input = [];
      inputDisplay.textContent = input.join('');
      break;
  }
})
