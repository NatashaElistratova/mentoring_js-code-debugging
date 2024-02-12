const triangleHypotenuse = (base, height) => {
  const square = (side) => {
    return side * side;
  }
  return Math.sqrt(square(base) + square(heihgt));
}

const result = triangleHypotenuse(3, 4);

console.log(result);
