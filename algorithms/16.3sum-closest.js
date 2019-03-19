/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (38.00%)
 * Total Accepted:    297.5K
 * Total Submissions: 715K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 *
 */

/**
 * 大指针从左到右，双指针从头尾逼近，每一轮算出最接近的数
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closestNum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = nums[l] + nums[r] + nums[i];
      if (Math.abs(threeSum - target) < Math.abs(closestNum - target)) {
        closestNum = threeSum;
      }
      if (threeSum > target) {
        r--;
      } else if (threeSum < target) {
        l++;
      } else {
        return target;
      }
    }
  }
  return closestNum;
};
