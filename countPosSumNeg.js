function countPositivesSumNegatives(input) {

  if (!input || input.length === 0) {
    return [];
  }
  
  let answer = []
  let count = 0
  let sum = 0
  input.forEach(number => {
    if (number < 0){
      sum = number + sum
      console.log(sum);
    } else if (number > 0){
      count += 1
    }
    
  })
  answer.push(count)
  answer.push(sum)
  return answer
}



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

console.log(countPositivesSumNegatives([]));