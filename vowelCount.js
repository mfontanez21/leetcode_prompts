function getCount(str) {
  let vowels = 0
  const word = str.split("")
  word.forEach(letter => {
    console.log(letter);
    letter === "a" | letter === "e" | letter === "i" | letter === "o" | letter === "u" ? vowels ++ : vowels
  })
  return vowels
}

console.log(getCount("abracadabra"));
console.log(getCount("pear tree"));