/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 *
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 *
 * algorithms
 * Easy (34.56%)
 * Total Accepted:    14.9K
 * Total Submissions: 43.2K
 * Testcase Example:  '[1,2,3,4,4,3,2,1]'
 *
 * In a deck of cards, each card has an integer written on it.
 *
 * Return true if and only if you can choose X >= 2 such that it is possible to
 * split the entire deck into 1 or more groups of cards, where:
 *
 *
 * Each group has exactly X cards.
 * All the cards in each group have the same integer.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [1,1,1,2,2,2,3,3]
 * Output: false
 * Explanation: No possible partition.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [1]
 * Output: false
 * Explanation: No possible partition.
 *
 *
 *
 * Example 4:
 *
 *
 * Input: [1,1]
 * Output: true
 * Explanation: Possible partition [1,1]
 *
 *
 *
 * Example 5:
 *
 *
 * Input: [1,1,2,2,2,2]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[2,2]
 *
 *
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= deck.length <= 10000
 * 0 <= deck[i] < 10000
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function (deck) {
  deck = deck.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  const numArr = [];
  let tempCount = 1;
  for (let i = 0; i < deck.length; i++) {
    if (deck[i + 1] === deck[i]) {
      tempCount++;
    } else {
      numArr.push(tempCount);
      if (tempCount < min) {
        min = tempCount;
      }
      tempCount = 1;
    }
  }
  if (min === 1) {
    return false;
  }
  for (let common = 2; common <= min; common++) {
    if (numArr.every(item => item % common === 0)) {
      return true;
    }
  }
  return false;
};
