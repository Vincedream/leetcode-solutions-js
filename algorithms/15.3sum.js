/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.33%)
 * Total Accepted:    482.1K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const result = new Array();
  const len = nums.length;
  let flag = 0;
  const hash = {};
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return result;
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) continue;
    flag = 0 - nums[i];
    let start = i + 1; let
      end = len - 1;
    while (start < end) {
      const middle = new Array();
      if (nums[start] + nums[end] < flag) {
        start++;
      } else if (nums[start] + nums[end] > flag) {
        end--;
      } else {
        middle.push(nums[i]);
        middle.push(nums[start]);
        middle.push(nums[end]);
        if (!hash[middle]) {
          hash[middle] = true;
          result.push(middle);
        }
        start += 1;
        end -= 1;
        while (start < end && nums[start] === nums[start - 1]) {
          start += 1;
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end -= 1;
        }
      }
    }
  }
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
