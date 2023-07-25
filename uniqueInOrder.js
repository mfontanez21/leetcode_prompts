// var uniqueInOrder=function(iterable){
//   console.log(iterable);
//   let initial = []
//   for (let i = 0; i < iterable.length; i++){
//     if (!initial.includes(iterable[i])){
//       initial.push(iterable[i])

//     } else continue
//   } 
//   console.log(initial);
//   return initial
// }

var uniqueInOrder=function(iterable){
  console.log(iterable);
  let initial = []
  for (let i = 0; i < iterable.length; i++){
    if (iterable[i] !== iterable[i + 1]){
      initial.push(iterable[i]) 
    } 
  }
  return initial
}
console.log(uniqueInOrder('AAAABBBCCDAABBB') )
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]));