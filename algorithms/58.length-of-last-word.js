/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.14%)
 * Total Accepted:    247.8K
 * Total Submissions: 770.7K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 *
 * Example:
 *
 * Input: "Hello World"
 * Output: 5
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const trimString = s.trim();
  if (trimString.length === 0) return 0;
  if (trimString.indexOf(' ') === -1) return trimString.length;
  let count = 0;
  for (let i = trimString.length - 1; i >= 0; i--) {
    if (trimString[i] === ' ') {
      return count;
    }
    count++;
  }
};
