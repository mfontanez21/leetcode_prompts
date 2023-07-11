var isValid = function (s) {
    const stack = [];
    const openingBrackets = ["(", "[", "{"];
    const closingBrackets = [")", "]", "}"];
    const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
};

    for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (openingBrackets.includes(bracket)) {
        stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
        const matchingOpeningBracket = bracketPairs[bracket];
        if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false; // Closing bracket without a matching opening bracket or mismatched brackets
        }
    }
}

  return stack.length === 0; // True if all brackets are properly closed, false otherwise
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("(){}}{"));
