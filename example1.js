const calcResult = (firstNumber, secondNumber) => {
    let x = 1;
    console.log('firstNumber - ', firstNumber);
    console.log('secondNumber - ', secondNumber);
    const multiply = (multiplyValue) => {
      console.trace();
      return (firstNumber + secondNumber) * multiplyValue;
    }

    x = x + 2;

    x = Math.sqrt(x);

    return multiply(2)
}

const result = calcResult(4, 5)
 
console.log(result)