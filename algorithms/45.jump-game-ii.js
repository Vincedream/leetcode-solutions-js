/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (29.84%)
 * Total Accepted:    231.5K
 * Total Submissions: 775.4K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 * 
 * You can assume that you can always reach the last index.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 每次获取当前步最大射程，在最大射程中获取下一步的最大射程，知道最大射程 + 当前 index 超过了 nums.length - 1 则表示跳完了
const jump = function (nums) {
  if (nums.length === 1) return 0;
  let forwardIndex = nums[0];
  let currentIndex = 0;
  let count = 1;
  while (forwardIndex < nums.length - 1) {
    let remainArr = nums.slice(currentIndex + 1, forwardIndex + 1);
    remainArr = remainArr.map((item, index) => item - (remainArr.length - index - 1));
    const maxDistance = Math.max(...remainArr);
    currentIndex = forwardIndex;
    forwardIndex = maxDistance + currentIndex;
    count++;
  }
  return count;
};
