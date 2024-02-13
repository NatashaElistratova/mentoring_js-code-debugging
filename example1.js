const triangleHypotenuse = (base, height) => {
  const square = (side) => {
    side * side;
  }

  return Math.sqrt(square(base) + square(heihgt));
}

const result = triangleHypotenuse(3, 4);
const result1 = triangleHypotenuse(5, 6);

console.log(result);
