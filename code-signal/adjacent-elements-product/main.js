// eslint-disable-next-line no-unused-vars
function solution(inputArray) {
  const products = [];
  let output = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    products.push(inputArray[i] * inputArray[i + 1]);
  }
  for (let k = 0; k < products.length; k++) {
    if (products[k] > output) {
      output = products[k];
    }
  }
  return output;
}
