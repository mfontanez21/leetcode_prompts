function getDivisorsCnt(n){
  let count = []
  for (let i = 1; i <= n; i++){
    if (n % i === 0) {
      count.push(i)
      i++
    }
    else i++
  } 
  return count.join(" ")
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));


//check if i % n === 0
//if that is true, then return i
//if not true, keep going

