var maxProfit = function(prices) {
    let min = Infinity
    let max = 0
    for (let i = 0; i < prices.length; i++){
      if (prices[i] < min) {
        min = prices[i]
      } else if (prices[i] - min > max) {
        max = prices[i] - min
      }
    }
    return max
};





console.log(maxProfit([7,1,5,3,6,4]), "answer");
console.log(maxProfit([7,6,4,3,1]), "answer");








// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.