// eslint-disable-next-line no-unused-vars
function solution(statues) {
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  const output = [];
  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      output.push(i);
    }
  }
  return output.length;
}
