// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// i = current char index
// j = current str array index
var longestCommonPrefix = function (strs) {
  var commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (const str of strs.slice(1)) {
      if (str[i] !== strs[0][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
