/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.44%)
 * Total Accepted:    260.4K
 * Total Submissions: 658.2K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the
 * count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: "1"
 *
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "1211"
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let tempTarget = '1';
  for (let i = 0; i < n - 1; i++) {
    let temp = '';
    let count = 0;
    let smtemp = tempTarget[0];
    for (let j = 1; j <= tempTarget.length; j++) {
      if (tempTarget[j] === smtemp) {
        count++;
      } else {
        temp += `${count + 1}${smtemp}`;
        count = 0;
        smtemp = tempTarget[j];
      }
    }
    tempTarget = temp;
  }
  return tempTarget;
};
