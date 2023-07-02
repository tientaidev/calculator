// query buttons and screen
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const evaluateButton = document.querySelector('#result-button');
const resetButton = document.querySelector('#reset-button');
const deleteButton = document.querySelector('#delete-button');
const equationScreen = document.querySelector('#equation-screen');
const resultScreen = document.querySelector('#result-screen');

// initial assignments
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result= '';

function indexToAddSeparator(operand) {
  const index = [operand.indexOf(','), operand.indexOf('.')].find(element => element !== -1) || operand.length;
  if (index - 3 < 1) return -1;
  return index;
}

function updateScreen(reset=false) {
  if (reset) {
    equation = '';
  } else {
    equation = `${firstOperand} ${operator} ${secondOperand}`;
  }
  
  equationScreen.textContent = equation;
  resultScreen.textContent = result;
}

function reset() {
  firstOperand = '';
  secondOperand = '';
  operator = '';
  result = '';
  updateScreen(true);
}

const containsDecimal = operand => operand.split('.').length == 2;

function assignOperands(numberCharacter) {
  if (!operator) {
    if (containsDecimal(firstOperand) && numberCharacter === '.') return;
    firstOperand += numberCharacter;
  } else {
    if (containsDecimal(secondOperand) && numberCharacter === '.') return;
    secondOperand += numberCharacter;
  }

  updateScreen();
}

function assignOperator(operatorCharacter) {
  if (firstOperand && secondOperand && operator) evaluate();
  if (firstOperand && !secondOperand) {
    operator = operatorCharacter;
    updateScreen();
  }
  return;
}

function evaluate() {
  if (firstOperand && secondOperand && operator) {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand); 

    switch(operator) {
      case '+':
        result =  firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case 'x':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        break;
    }

    if (!Number.isInteger(result)) result = result.toFixed(2);
    firstOperand = result;
    secondOperand = '';
    operator = '';
    updateScreen();
  }
}

function del() {
  if (secondOperand) secondOperand = secondOperand.slice(0, -1);
  else if (operator) operator = '';
  else if (firstOperand) firstOperand = firstOperand.slice(0, -1);
  else return;

  if (secondOperand.endsWith('.')) secondOperand = secondOperand.slice(0, -1);
  if (firstOperand.endsWith('.')) firstOperand = firstOperand.slice(0, -1);
  updateScreen();
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => assignOperands(button.textContent));
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => { 
    assignOperator(button.textContent); 
    evaluate();
  });
});

resetButton.addEventListener('click', reset);
evaluateButton.addEventListener('click', () => {
  if (firstOperand && secondOperand && operator) evaluate();
});
deleteButton.addEventListener('click', del);