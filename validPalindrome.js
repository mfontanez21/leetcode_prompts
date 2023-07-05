const isPalindrome = function(s) {
  let forward = s.toLowerCase().replace(/[^a-z0-9]/gi, "")
  let palindrome = forward.split("").reverse().join("")
  console.log(forward);
  console.log(palindrome);
  return palindrome === forward
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));