const nums = [1, 12, 43, 544, 12, 34];

function largestNumber(numArr) {
  let max = 0;
  for (let i = 0; i < numArr.length - 1; i++) {
    if (nums[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}

console.log(largestNumber(nums));
