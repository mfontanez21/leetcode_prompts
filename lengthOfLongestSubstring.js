var lengthOfLongestSubstring = function(s) {
  const str = s;
  let unique = "";
  let longestLength = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = unique.indexOf(char);

    if (charIndex !== -1) {
      unique = unique.slice(charIndex + 1);
    }

    unique += char;
    longestLength = Math.max(longestLength, unique.length);
  }

  return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));


//each letter has a number
//find length of substring so that each number is unique

// const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1
// const split = s.split("").map(char => alphaVal(char))
// console.log(split);
// const substring = split.filter(char => )
// console.log(substring);