// query buttons and screen
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const resultButton = document.querySelector('#result-button');
const resetButton = document.querySelector('#reset-button');
const deleteButton = document.querySelector('#delete-button');
const equationScreen = document.querySelector('#equation-screen');
const resultScreen = document.querySelector('#result-screen');

// initial assignments
firstOperand = '';
secondOperand = '';
operator = '';
result= '‎';

function updateScreen(reset=false) {
  if (reset) {
    equation = '‎';
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
  result = '‎';
  updateScreen(true);
}

function del() {

}

function assignOperands(numberCharacter) {
  containsDecimal = operand => numberCharacter == '.' && operand.split('.').length == 2;
  if (Number(result)) return;

  if (!secondOperand && !operator) {
    if (containsDecimal(firstOperand)) return;
    firstOperand += numberCharacter;
  } else {
    console.log(secondOperand);
    if (containsDecimal(secondOperand)) return;
    secondOperand += numberCharacter;
  }

  updateScreen();
}

function assignOperator(operatorCharacter) {
  if (!firstOperand) return;

  if (operator && secondOperand) {
    firstOperand = result;
    secondOperand = '';
    result = '‎';
  }

  operator = operatorCharacter;
  updateScreen();
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
    updateScreen();
  }
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => assignOperands(button.textContent));
})

operatorButtons.forEach(button => {
  button.addEventListener('click', () => assignOperator(button.textContent));
})

resetButton.addEventListener('click', reset);
deleteButton.addEventListener('click', () => console.log('delete button'))

resultButton.addEventListener('click', () => evaluate());