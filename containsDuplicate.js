const containsDuplicate = function(nums) {
  nums.sort()
  console.log(nums);
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      return nums[i] === nums[j] ? "true" : "false"
    }
  }
}



console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,2,3,5]));