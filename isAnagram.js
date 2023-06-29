var isAnagram = function(s, t) {
    const arr1 = s.split("").sort().join("")
    const arr2 = t.split("").sort().join("")
    return arr1 === arr2 
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("test", "sett"));