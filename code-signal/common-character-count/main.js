function solution(s1, s2) {
  const freqCounter1 = {};
  const freqCounter2 = {};
  // eslint-disable-next-line no-unused-vars
  var output = 0;
  for (var i = 0; i < s1.length; i++) {
    const letter = s1[i];
    if (freqCounter1[letter]) {
      freqCounter1[letter] += 1;
    } else {
      freqCounter1[letter] = 1;
    }
  }
  for (var j = 0; j < s2.length; j++) {
    const letter = s1[j];
    if (freqCounter2[letter]) {
      freqCounter2[letter] += 1;
    } else {
      freqCounter2[letter] = 1;
    }
  }
  // const freq1Obect = Object.entries(freqCounter1);
  // const freq2Obect = Object.entries(freqCounter2);
  // console.log(freq1Obect, freq2Obect);
}

solution('aabcc', 'adcaa');
