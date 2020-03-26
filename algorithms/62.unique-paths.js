/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (51.47%)
 * Total Accepted:    402K
 * Total Submissions: 781.1K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= m, n <= 100
 * It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.
 * 
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const result = [...Array(m)].map(() => [...Array(n)]);
    for(let i = 0; i < m; i++) {
        result[i][0] = 1;
    }
    for(let i = 0; i < n; i++) {
        result[0][i] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            result[i][j] = result[i - 1][j] + result[i][j - 1];
        }
    }
    // console.log(result);
    return result[m - 1][n - 1];
};
