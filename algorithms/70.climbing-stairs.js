/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (46.30%)
 * Total Accepted:    598.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// 当前楼梯最多路径是 (n - 1 阶楼梯 上 1 层)，(n - 2 阶楼梯 上 2 层) 的总和，
// 动态规划递归，cache 已经算过的值，避免爆栈
const climbStairs = (function () {
  const cache = {};
  return function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (cache[n] !== undefined) {
      return cache[n];
    }
    const result = climbStairs(n - 1) + climbStairs(n - 2);
    cache[n] = result;
    return result;
  };
}());
