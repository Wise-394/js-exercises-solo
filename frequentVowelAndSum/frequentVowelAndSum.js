var maxFreqSum = function (s) {
  const vowel = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);
  const consonant = new Map();

  for (const char of s) {
    if (vowel.has(char)) {
      vowel.set(char, vowel.get(char) + 1);
    } else {
      consonant.set(char, (consonant.get(char) ?? 0) + 1);
    }
  }
  return Math.max(...vowel.values());
  +consonantsize > 0 ? Math.max(...consonant.values()) : 0;
};

console.log(maxFreqSum("aeiaeia"));
