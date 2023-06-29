function reverseWords(str) {
  const word = str.split("")
  return word.reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverseWords("Hello, this is a string!"));
console.log(reverseWords("This is also a string as well!"));
console.log(reverseWords("a a s f g h"));
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));