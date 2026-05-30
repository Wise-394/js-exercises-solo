var romanToInt = function (s) {
  let totalValue = 0;
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  for (let i = s.length - 1; i >= 0; i--) {
    let currValue = romanMap.get(s[i]);
    if (i > 0) {
      let nextValue = romanMap.get(s[i - 1]);
      if (currValue > nextValue) {
        currValue -= nextValue;
        i--;
      }
    }
    totalValue += currValue;
  }
  return totalValue;
};

console.log(romanToInt("XXIV"));
// map the roman numeral with key value pair
// loop from last to beginning
// have 1 pointer ahead by -1
// get the value using the map key value pair
// if the pointer ahead is lesser than the current value then substract it
// then add to sum
