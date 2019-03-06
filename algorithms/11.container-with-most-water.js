/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (42.45%)
 * Total Accepted:    322.2K
 * Total Submissions: 754.6K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  const count = height.length - 1;
  let target = 0;
  let num1 = height[0];
  let num2 = height[count];
  let leftCount = 0;
  let rightCount = count;
  for (let i = 0; i < count; i++) {
    if (num2 > num1) {
      target = num1 * (count - i) > target ? num1 * (count - i) : target;
      num1 = height[leftCount + 1];
      leftCount++;
    } else if (num2 < num1) {
      target = num2 * (count - i) > target ? num2 * (count - i) : target;
      num2 = height[rightCount - 1];
      rightCount--;
    } else {
      target = num2 * (count - i) > target ? num2 * (count - i) : target;
      if (height[leftCount + 1] > height[rightCount - 1]) {
        num1 = height[leftCount + 1];
        leftCount++;
      } else {
        num2 = height[rightCount - 1];
        rightCount--;
      }
    }
  }
  return target;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
