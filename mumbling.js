// function accum(s) {
//   let explode = s.split("");
//   let result = "";

//   explode.forEach((letter, index) => {
//     let capitalizedLetter = letter.toUpperCase();
//     let repeatedLetters = letter.toLowerCase().repeat(index);

//     if (index !== 0) {
//       result += "-" + capitalizedLetter + repeatedLetters;
//     } else {
//       result += capitalizedLetter + repeatedLetters;
//     }
//   });

//   return result;
// }

// console.log(accum("ZpglnRxqenU"));
// console.log(accum("NyffsGeyylB"));
// console.log(accum("MjtkuBovqrU"));
// console.log(accum("EvidjUnokmM"));
// console.log(accum("HbideVbxncC"));

// function nearlySimilarRectangles(sides) {
//   let count = 0;

//   for (let i = 0; i < sides.length; i++) {
//     let x = sides[i];
//     for (let j = i + 1; j < sides.length; j++) {
//       let y = sides[j];
//       if (x[0] / y[0] == x[1] / y[1]) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(nearlySimilarRectangles([[5,10], [10,10], [3,6], [9,9]]));

// console.log(nearlySimilarRectangles([[2,1], [10,7], [9,5], [6,9], [7,3]]));

// console.log(nearlySimilarRectangles([[4,8], [15,30], [25,50]]));

function highAndLow(numbers){

  let array = numbers.split(" ")
  let highest = Math.max(...array).toString()
  let lowest = Math.min(...array).toString()

  return `"${highest} ${lowest}"`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));