String.prototype.toJadenCase = function (str) {
  const upperCase = str.split(" ")
  
  const capital = upperCase.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

  return capital

};

console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));