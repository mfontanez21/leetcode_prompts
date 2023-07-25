function arrayDiff(a, b) {
  return a.filter(number => !b.includes(number))
}




console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], [1]));
console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([1,2,3], [1,2]));


