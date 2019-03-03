/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.97%)
 * Total Accepted:    412K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const length = strs.length;
  let target = '';
  let temp = '';
  let count = length;
  const firstStringLength = strs[0] && strs[0].length;
  for (let j = 0; j < firstStringLength; j++) {
    temp = strs[0][j];
    for (let i = 0; i < length; i++) {
      if (strs[i][j] === temp) {
        count--;
      } else {
        break;
      }
    }
    if (count === 0) {
      target += temp;
      count = length;
    } else {
      break;
    }
  }
  return target;
};
