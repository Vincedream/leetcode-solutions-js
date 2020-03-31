/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (33.32%)
 * Total Accepted:    377.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its
 * maximum
 * jump length is 0, which makes it impossible to reach the last index.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心算法，一步步走，遇到更好的就替换
const canJump = function (nums) {
  if (nums.length === 1) return true;
  let count = nums[0];
  if (count === 0) return false;
  for (let i = 1; i < nums.length - 1; i++) {
    count--;
    if (nums[i] >= count) {
      count = nums[i];
    }
    if (count === 0) {
      return false;
    }
  }
  return true;
};