/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.84%)
 * Total Accepted:    519.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const length = s.length;
  const tempArr = [];
  for (let i = 0; i < length; i++) {
    switch (s[i]) {
      case '(':
        tempArr.push('(');
        break;
      case '{':
        tempArr.push('{');
        break;
      case '[':
        tempArr.push('[');
        break;
      case ')':
        if (tempArr[tempArr.length - 1] === '(') {
          tempArr.pop();
        } else {
          return false;
        }
        break;
      case '}':
        if (tempArr[tempArr.length - 1] === '{') {
          tempArr.pop();
        } else {
          return false;
        }
        break;
      case ']':
        if (tempArr[tempArr.length - 1] === '[') {
          tempArr.pop();
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }
  if (tempArr.length === 0) {
    return true;
  }
  return false;
};
