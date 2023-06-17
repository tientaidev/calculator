const theme1 = document.querySelector("#theme-1");
const theme2 = document.querySelector("#theme-2");
const theme3 = document.querySelector("#theme-3");

const mainBackground = document.querySelector("body");
const calculator = document.querySelector("#calculator");
const screen = document.querySelector("#screen");
const keypad = document.querySelector("#keypad");
const numberAndOperatorButtons = document.querySelectorAll(".number-and-operator");
const deleteAndResetButtons = document.querySelectorAll(".delete-and-reset");
const resultButton = document.querySelector("#result-button");

const mainBackgroundColors = ['bg-mainBgBlue', 'bg-mainBgLightGray', 'bg-mainBgVeryDarkViolet'];
const calculatorTextColors = ['text-textWhite', 'text-textVeryDarkGrayishYellow', 'text-textLightYellow'];
const screenBackgroundColors = ['bg-screenBgBlue', 'bg-screenBgVeryLightGray', 'bg-screenBgVeryDarkViolet'];
const keyPadBackgroundColors = ['bg-keyPadBgBlue', 'bg-keyPadBgLightGray', 'bg-keyPadBgVeryDarkViolet'];
const numberAndOperatorButtonColors = ['light-grayish-orange-button', 'light-grayish-yellow-button', 'dark-violet-button'];
const numberAndOperatorTextColors = ['text-textVeryDarkGrayishBlue', 'text-textVeryDarkGrayishYellow', 'text-textLightYellow'];
const deleteAndResetButtonColors = ['desaturated-dark-blue-button', 'dark-moderate-cyan-button', 'very-dark-violet-button'];
const resultButtonColors = ['red-button', 'orange-button', 'pure-cyan-button'];
const resultButtonTextColors = ['text-textWhite', 'text-textWhite', 'text-textVeryDarkBlue'];
const toggleColors = ['bg-keyBgRed', 'bg-keyBgOrange', 'bg-keyBgPureCyan'];

function resetColors() {
  mainBackground.classList.remove(...mainBackgroundColors);
  calculator.classList.remove(...calculatorTextColors);
  screen.classList.remove(...screenBackgroundColors);
  keypad.classList.remove(...keyPadBackgroundColors);
  numberAndOperatorButtons.forEach(numberAndOperator => numberAndOperator.classList.remove(...numberAndOperatorButtonColors, ...numberAndOperatorTextColors));
  deleteAndResetButtons.forEach(deleteAndResetButton => deleteAndResetButton.classList.remove(...deleteAndResetButtonColors));
  resultButton.classList.remove(...resultButtonColors, ...resultButtonTextColors);
}

function applyColors(themeId) {
  const index = themeId - 1;
  mainBackground.classList.add(mainBackgroundColors[index]);
  calculator.classList.add(calculatorTextColors[index]);
  screen.classList.add(screenBackgroundColors[index]);
  keypad.classList.add(keyPadBackgroundColors[index]);
  numberAndOperatorButtons.forEach(numberAndOperator => numberAndOperator.classList.add(numberAndOperatorButtonColors[index], numberAndOperatorTextColors[index]));
  deleteAndResetButtons.forEach(deleteAndResetButton => deleteAndResetButton.classList.add(deleteAndResetButtonColors[index]));
  resultButton.classList.add(resultButtonColors[index], resultButtonTextColors[index]);
}

function toggleAppears(themeId) {
  // animate circle moving
  document.querySelectorAll(".toggle-circle").forEach(circle => circle.remove());
  const circle = document.createElement('div');
  circle.classList.add('w-1/2', 'h-1/2', 'rounded-full', toggleColors[themeId-1], 'toggle-circle');

  resetColors();

  switch (themeId) {
    case 1:
      theme1.append(circle);
      break;
    case 2:
      theme2.append(circle);
      break;
    case 3:
      theme3.append(circle);
      break;
    default:
      break;
  }

  applyColors(themeId);
}

toggleAppears(1);
theme1.addEventListener("click", () => toggleAppears(1));
theme2.addEventListener("click", () => toggleAppears(2));
theme3.addEventListener("click", () => toggleAppears(3));