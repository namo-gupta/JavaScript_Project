let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
