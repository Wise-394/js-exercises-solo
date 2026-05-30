var isValid = function (s) {
  let stack = [];
  const brackets = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);

  for (const char of s) {
    if (brackets.has(char)) {
      stack.push(char);
      continue;
    }

    if (brackets.get(stack[stack.length - 1]) === char) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
