function solution(list){
  let result = [];
  let start = list[0];
  console.log(list[0]);
  let end = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] === end + 1) {
      end = list[i];
      console.log(list[i], "list i");
    } else {
      if (end - start >= 2) {
        result.push(`${start}-${end}`);
      } else if (end - start === 1) {
        result.push(start, end);
      } else {
        result.push(start);
      }

      start = list[i];
      end = list[i];
    }
  }

  if (end - start >= 2) {
    result.push(`${start}-${end}`);
  } else if (end - start === 1) {
    result.push(start, end);
  } else {
    result.push(start);
  }

  return result.join(',');
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

//[-2, -1, 0, 4, 8, 9, 10, 18, 19]