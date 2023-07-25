function findMultiples(integer, limit) {
  let answer = []
  console.log(answer, "before anything");
  for (let i = integer; i <= limit; i++){
    console.log(i);
    if (i % integer === 0){
      answer.push(i)
    } 
    else continue
  } 
  return answer
}

console.log(findMultiples(5, 25));



function sumStr(a,b) {
  if (a === ""){
    a = "0"
  }
  if (b === ""){
    b="0"
  }
  let sum = parseInt(a) + parseInt(b)
  return sum.toString()
}

console.log(sumStr("", ""));