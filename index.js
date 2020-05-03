
// Using third variable
(() => {
  let firstNumber = 54;
  let secondNumber = 45;
  console.log({ firstNumber, secondNumber });
  let temp = firstNumber;
  firstNumber = secondNumber;
  secondNumber = temp;
  console.log({ firstNumber, secondNumber });
})();

// Without using third variable
(() => {
  let firstNumber = 54;
  let secondNumber = 45;
  console.log({ firstNumber, secondNumber });
  firstNumber = firstNumber + secondNumber;
  secondNumber = firstNumber - secondNumber;
  firstNumber = firstNumber - secondNumber;
  console.log({ firstNumber, secondNumber });
})();

// With ES6
(() => {
  let firstNumber = 54;
  let secondNumber = 45;
  console.log({ firstNumber, secondNumber });
  [firstNumber, secondNumber] = [secondNumber, firstNumber];
  console.log({ firstNumber, secondNumber });
})();