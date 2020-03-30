/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (35.24%)
 * Total Accepted:    438.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (originNums, originTarget) {
  const leftBound = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        right = mid - 1; // 重点，不返回，逐渐向左逼近
      }
    }
    // 除非 left 越界，或者 left 最终不等于 target，说明没有找到
    if (left >= nums.length || nums[left] !== target) return -1;
    return left;
  };
  const rightBound = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1; // 重点，不返回，逐渐向右逼近
      }
    }
    // 除非 right 越界，或者 right 最终不等于 target，说明没有找到
    if (right < 0 || nums[right] !== target) return -1;
    return right;
  };
  const leftIndex = leftBound(originNums, originTarget);
  const rightIndex = rightBound(originNums, originTarget);
  return [leftIndex, rightIndex];
};
