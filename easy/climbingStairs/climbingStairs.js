const climbStairs = (n) => {
  let oneStep = 1;
  let twoStep = 1;

  for (let i = n - 1; i > 0; i--) {
    let temp = oneStep;
    oneStep = oneStep + twoStep;
    twoStep = temp;
  }
  return oneStep;
};

console.log(climbStairs(3));
//  1 = 1
//  2 = 2
//  3 = 3
//  4 = 5
