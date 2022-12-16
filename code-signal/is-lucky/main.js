function isLucky(n) {
  const arr = Array.from(String(n), Number);
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2, arr.length);

  const firstHalfSum = firstHalf.reduce((a, b) => {
    return a + b;
  });

  const secondHalfSum = secondHalf.reduce((a, b) => {
    return a + b;
  });

  if (firstHalfSum !== secondHalfSum) {
    return false;
  } else {
    return true;
  }
}

isLucky(1230);
