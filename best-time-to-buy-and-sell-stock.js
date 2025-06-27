/**
*Difficulty: Easy - Medium
*Topic: Array, Greedy

*Question:
    You are given an array prices where prices[i] is the price of a stock on day i.
    You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

    *Input: prices = [7, 1, 5, 3, 6, 4]
    *Output: 5
    *Explanation: Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5.
*/

function maxProfitMethodOne(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if ((price - minPrice) > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}

function maxProfitMethodTwo(prices) {
    let maxCurrent = 0;
    let maxSoFar = 0;

    for (let i = 1; i < prices.length; i++) {
        // Calculate the difference between today and yesterday
        const profitToday = prices[i] - prices[i - 1];

        // Either add today’s profit to current sequence, or start new at 0
        maxCurrent = Math.max(0, maxCurrent + profitToday);

        // Keep track of the highest profit seen so far
        maxSoFar = Math.max(maxSoFar, maxCurrent);
    }

    return maxSoFar;
}