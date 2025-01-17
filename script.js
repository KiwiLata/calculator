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
    if(b === 0) {
      return "Can't divide by 0";
    }
    return divide(a,b);
  }
  else {
    return 'ERROR';
  }
}

function splitInput(input) {
  let num1 = [];
  let num2 = [];
  let index;

  for(let i=0; i<input.length; i++) {
    if(Number.isInteger(input[i]) || input[i] === '.') {
      num1.push(input[i]);
    }
    else {
      operator = input[i];
      index = i;
      break;
    }
  }
  for(let j=index+1; j<input.length; j++) {
    if(Number.isInteger(input[j])) {
      num2.push(input[j]);
    }
    else if(input[j] === '=') {
      break;
    }
  }
  a = Number(num1.join(''));
  b = Number(num2.join(''));
}

function clearDisplay() {
  input = [];
  a = null;
  b = null;
  operator = null;
  decimalStatus = false;
  operatorStatus = false;
  equalStatus = false;
  inputDisplay.textContent = '';
  resultDisplay.textContent = '';
}

function chainOperate() {
  splitInput(input);
  let partial = operate(operator,a,b);
  input = [];
  input.push(partial);
  inputDisplay.textContent = input.join('');
  decimalStatus = false;
  operatorStatus = false;
  equalStatus = false;
}

const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");
let input = [];
let a;
let b;
let operator;
let decimalStatus = false;
let operatorStatus = false;
let equalStatus = false;

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
  let target = event.target;
  if(equalStatus === true) {
    clearDisplay();
  }
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
    case '.': 
      if(decimalStatus === false) {
        input.push('.');
        inputDisplay.textContent = input.join('');
      }
      decimalStatus = true;
      break;
    case '+': 
      if(operatorStatus === false){
        input.push('+');
        inputDisplay.textContent = input.join('');
        decimalStatus = false;
      }
      operatorStatus = true;
      break;
    case '-': 
      if(operatorStatus === false){
        input.push('-');
        inputDisplay.textContent = input.join('');
        decimalStatus = false;
      }
      operatorStatus = true;
      break;
    case '*': 
      if(operatorStatus === false){
        input.push('*');
        inputDisplay.textContent = input.join('');
        decimalStatus = false;
      }
      operatorStatus = true;
      break;
    case ':': 
      if(operatorStatus === true) {
        chainOperate();
        inputDisplay.textContent = input.join('');
      }
      if(operatorStatus === false){
        input.push(':');
        inputDisplay.textContent = input.join('');
        decimalStatus = false;
        operatorStatus = true;
      }
      break;
    case '=': 
      input.push('=');
      inputDisplay.textContent = input.join('');
      decimalStatus = false;
      operatorStatus = false;
      equalStatus = true;
      splitInput(input);
      let output = operate(operator,a,b);
      resultDisplay.textContent = output;
      break;
    case 'Undo': 
      let popped = input.pop();
      if(popped === '+' ||
        popped === '-' ||
        popped === '*' ||
        popped === ':'
      ) {
        operatorStatus = false;
      }
      else if(popped === '.') {
        decimalStatus = false;
      }
      inputDisplay.textContent = input.join('');
      break;
    case 'C': 
      clearDisplay()
      break;
  }
})
