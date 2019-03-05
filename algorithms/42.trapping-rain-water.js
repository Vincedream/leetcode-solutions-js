/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (41.78%)
 * Total Accepted:    258.3K
 * Total Submissions: 616.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 *
 *
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 *
 * Example:
 *
 *
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let topLine = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > topLine) {
      topLine = height[i];
    }
  }
  const topIndex = height.indexOf(topLine);
  const leftPart = height.slice(0, topIndex);
  const rightPart = height.slice(topIndex + 1, height.length);
  let leftCount = 0;
  let leftTop = leftPart[0];
  let leftItemCount = 0;
  for (let i = 0; i < leftPart.length; i++) {
    if (leftPart[i] > leftTop) {
      leftTop = leftPart[i];
    }
    leftCount += 1 * (topLine - leftTop);
    leftItemCount += leftPart[i];
  }
  leftCount = topLine * leftPart.length - leftCount - leftItemCount;

  let rightCount = 0;
  let rightTop = rightPart[rightPart.length - 1];
  let rightItemCount = 0;
  for (let i = (rightPart.length - 1); i >= 0; i--) {
    if (rightPart[i] > rightTop) {
      rightTop = rightPart[i];
    }
    rightCount += 1 * (topLine - rightTop);
    rightItemCount += rightPart[i];
  }
  rightCount = topLine * rightPart.length - rightCount - rightItemCount;
  return rightCount + leftCount;
};
