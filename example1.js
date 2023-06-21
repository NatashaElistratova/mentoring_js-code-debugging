const calcResult = (firstNumber, secondNumber) => {
    const multiply = (multiplyValue) => {
      return (firstNumber + secondNumber) * multiplyValue;
    }

    multiply(2)
}

const result = calcResult(4, 5)
 
console.log(result)