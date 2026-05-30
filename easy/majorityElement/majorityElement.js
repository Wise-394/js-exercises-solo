var majorityElement = function (nums) {
  let currMajority = nums[0];
  let count = 0;
  for (const num of nums) {
    if (num === currMajority) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      currMajority = num;
      count++;
    }
  }
  return currMajority;
};
console.log(majorityElement([3, 2, 3]));
