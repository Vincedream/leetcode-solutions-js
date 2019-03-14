/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.11%)
 * Total Accepted:    626.7K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */

// var reverse = function(x) {

//     let isNegative = x<0
//     let res = Math.abs(x).toString().split("").reverse().join("")

//     if(res > Math.pow(2, 31) - 1 || -res < -Math.pow(2, 31)){
//       return 0;
//     }else{
//       return isNegative ? -res : res;
//     }

// };
const reverse = function (x) {
  const isNegative = x < 0;
  const res = Math.abs(x).toString().split('').reverse()
    .join('');
  return res > (Math.pow(2, 31) - 1) ? 0 : (isNegative ? -res : res);
};
