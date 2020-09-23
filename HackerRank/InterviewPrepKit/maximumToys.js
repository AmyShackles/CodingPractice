/*
Given a list of prices an an amount to spend, what is the maximum
number of toys that can purchased?
*/

function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    let numToys = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= k) {
            k -= prices[i];
            numToys++;
        } else {
            return numToys;
        }
    }
    return numToys;
}