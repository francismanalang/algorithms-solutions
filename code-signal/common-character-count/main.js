function solution(s1, s2) {
  const freqCounter1 = {};
  const freqCounter2 = {};
  const allLetters = s1 + s2;
  const allcharacters = [];
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
    const letter = s2[j];
    if (freqCounter2[letter]) {
      freqCounter2[letter] += 1;
    } else {
      freqCounter2[letter] = 1;
    }
  }
  for (var k = 0; k < allLetters.length; k++) {
    if (!allcharacters.includes(allLetters[k])) {
      allcharacters.push(allLetters[k]);
    }
  }
  for (var x = 0; x < allcharacters.length; x++) {
    const character = allcharacters[x];
    if (freqCounter1[character] && freqCounter2[character]) {
      output += Math.min(freqCounter1[character], freqCounter2[character]);
    }
  }
  return output;
}

solution('aaabcc', 'adccaa');
