const twoSum = function(nums, target) {
  let indexes = []
  for (let i = 0; i < nums.length; i++){
      for (let j = i + 1; j < nums.length; j++){
        if (nums[i] + nums[j] === target){
          indexes.push(i)
          indexes.push(j)
        }
      }
  }
  return indexes
};

console.log(twoSum([2,7,11,15], 9, ));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));