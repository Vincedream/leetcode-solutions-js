/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 *
 * https://leetcode.com/problems/count-binary-substrings/description/
 *
 * algorithms
 * Easy (52.41%)
 * Total Accepted:    27.9K
 * Total Submissions: 52.9K
 * Testcase Example:  '"00110"'
 *
 * Give a string s, count the number of non-empty (contiguous) substrings that
 * have the same number of 0's and 1's, and all the 0's and all the 1's in
 * these substrings are grouped consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they
 * occur.
 *
 * Example 1:
 *
 * Input: "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive
 * 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
 * Notice that some of these substrings repeat and are counted the number of
 * times they occur.
 * Also, "00110011" is not a valid substring because all the 0's (and 1's) are
 * not grouped together.
 *
 *
 *
 * Example 2:
 *
 * Input: "10101"
 * Output: 4
 * Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal
 * number of consecutive 1's and 0's.
 *
 *
 *
 * Note:
 * s.length will be between 1 and 50,000.
 * s will only consist of "0" or "1" characters.
 *
 */

function checkIsTarget(s) {
  const left = s.match(/^(0+|1+)/)[0];
  const right = (left[0] ^ 1).toString().repeat(left.length);
  if (s.startsWith(`${left}${right}`)) {
    return true;
  }
  return false;
}
/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  let count = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    const target = s.slice(i);
    if (checkIsTarget(target)) {
      count++;
    }
  }
  return count;
};
