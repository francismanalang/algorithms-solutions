// eslint-disable-next-line no-unused-vars
function allLongestStrings(inputArray) {
  const arr = inputArray;
  let longest = 0;
  const longestArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longest) {
      longest = arr[i].length;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length === longest) {
      longestArr.push(arr[j]);
    }
  }

  return longestArr;
}
