// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  var reverse = inputString.split('').reverse().join('');
  return inputString === reverse;
}
