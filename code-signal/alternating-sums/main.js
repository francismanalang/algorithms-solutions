function alternatingSums(a) {
  const output = [0, 0];

  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      output[0] += a[i];
    } else {
      output[1] += a[i];
    }
  }
  return output;
}

// eslint-disable-next-line no-console
console.log(alternatingSums([50, 60, 60, 45, 70]));
