var findMaxConsecutiveOnes = function (nums) {
  let countHighest = 0;
  let countCurrent = 0;
  for (const num of nums) {
    if (num) {
      countCurrent++;
    } else {
      if (countCurrent > countHighest) {
        countHighest = countCurrent;
      }
      countCurrent = 0;
    }
  }
  if (countCurrent > countHighest) countHighest = countCurrent;
  return countHighest;
};
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 0, 1, 1, 1, 1, 1]));
