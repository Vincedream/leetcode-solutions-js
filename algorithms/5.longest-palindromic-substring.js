/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.51%)
 * Total Accepted:    634.4K
 * Total Submissions: 2.3M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */

function isPalindrome(l, r) {
  let count = 0;
  for (let i = 0; i < l.length; i++) {
    if (r[i] === l[l.length - i - 1] && count === i) {
      count++;
    }
  }
  return {
    isPalin: count !== 0,
    left: l.slice(l.length - count),
    right: r.slice(0, count),
  };
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let currentPalin = s[0];
  let maxCount = 0;
  let huiwenResult;
  let temp = '';
  function replaceMaxPalin(cuttentTemp) {
    if (cuttentTemp.length > maxCount) {
      currentPalin = cuttentTemp;
      maxCount = cuttentTemp.length;
    }
  }
  for (let i = 1; i < s.length - 1; i++) {
    const getStrLength = i < (s.length / 2) ? i : s.length - i - 1;
    if (i < (s.length / 2)) {
      huiwenResult = isPalindrome(s.slice(0, i), s.slice(i + 1, i + getStrLength + 1));
      if (huiwenResult.isPalin) {
        temp = huiwenResult.left + s[i] + huiwenResult.right;
        replaceMaxPalin(temp);
      }
    } else {
      huiwenResult = isPalindrome(s.slice(i - getStrLength, i), s.slice(i + 1));
      if (huiwenResult.isPalin) {
        temp = huiwenResult.left + s[i] + huiwenResult.right;
        replaceMaxPalin(temp);
      }
    }
    if (s[i] === s[i + 1]) {
      temp = s[i] + s[i + 1];
      replaceMaxPalin(temp);
      if (i < (s.length / 2)) {
        huiwenResult = isPalindrome(s.slice(0, i), s.slice(i + 2, i + getStrLength + 2));
        if (huiwenResult.isPalin) {
          temp = huiwenResult.left + s[i] + s[i + 1] + huiwenResult.right;
          replaceMaxPalin(temp);
        }
      } else {
        huiwenResult = isPalindrome(s.slice(i - getStrLength + 1, i), s.slice(i + 2));
        if (huiwenResult.isPalin) {
          temp = huiwenResult.left + s[i] + s[i + 1] + huiwenResult.right;
          replaceMaxPalin(temp);
        }
      }
    }
  }
  if (s.length === 2 && s[0] === s[1]) { return s; }
  if (s.length === 3 && maxCount !== 3) {
    if (s[1] === s[0]) {
      return s.slice(0, 2);
    }
    if (s[1] === s[2]) {
      return s.slice(1, 3);
    }
  }
  return currentPalin || '';
};
