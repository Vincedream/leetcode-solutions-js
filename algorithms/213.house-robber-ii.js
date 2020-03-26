/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (35.95%)
 * Total Accepted:    151.9K
 * Total Submissions: 422.4K
 * Testcase Example:  '[2,3,2]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. All houses at this place are
 * arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have security system connected and it will
 * automatically contact the police if two adjacent houses were broken into on
 * the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money
 * = 2),
 * because they are adjacent houses.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dpl = [];
    const dpr = [];
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    if(nums.length === 3) return Math.max(nums[2], Math.max(nums[0], nums[1]));
    dpl[0] = nums[0];
    dpr[0] = nums[1];
    dpl[1] = Math.max(nums[0], nums[1]);
    dpr[1] = Math.max(nums[1], nums[2]);
    dpl[2] = nums[2] + nums[0];
    dpr[2] = nums[3] + nums[1];
    for (let i = 3; i < nums.length - 1; i++) {
        dpl[i] = nums[i] + Math.max(dpl[i - 2], dpl[i - 3])
        dpr[i] = nums[i+1] + Math.max(dpr[i - 2], dpr[i - 3])
    }
    return Math.max(Math.max(dpl[nums.length - 2], dpl[nums.length - 3]), Math.max(dpr[nums.length - 2], dpr[nums.length - 3]))
};
