/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const letterMap = new Map();
  for (const mag of magazine) {
    letterMap.set(mag, (letterMap.get(mag) ?? 0) + 1);
  }

  for (const ransom of ransomNote) {
    if (!letterMap.get(ransom)) {
      return false;
    }

    letterMap.set(ransom, letterMap.get(ransom) - 1);
  }
  return true;
};

console.log(canConstruct("a", "b"));
