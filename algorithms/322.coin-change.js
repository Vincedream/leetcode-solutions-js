/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (33.74%)
 * Total Accepted:    328.7K
 * Total Submissions: 974.1K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 * 
 * Example 1:
 * 
 * 
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Example 2:
 * 
 * 
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * 
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 * 
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins = coins.sort((a, b) => a - b);
    console.log(coins)
    let count = 0;
    for(let i = coins.length - 1; i >= 0; i--) {
        if (amount === 0) {
            break;
        }
        if (amount > 0 && coins[i] > amount) {
            continue;
        }
        let multipleCount = parseInt(amount / coins[i]);
        if (multipleCount >= 1) {
            amount = amount - multipleCount * coins[i];
            count = count + multipleCount;
        }
        // console.log(coins[i])
        console.log(amount)
    }
    if (amount > 0) {
        return -1
    }
    return count;
};

coinChange([186,419,83,408], 6249)