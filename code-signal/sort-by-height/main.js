function sortByHeight(a) {
  const output = a.filter(num => num !== -1).sort((a, b) => a - b);

  for (var i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      output.splice(i, 0, a[i]);
    }
  }

  return output;
}

// eslint-disable-next-line no-console
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
