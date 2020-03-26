/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (51.08%)
 * Total Accepted:    316.5K
 * Total Submissions: 619.6K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const cow = grid.length;
    const col = grid[0].length;
    if (cow === 1) {
        let temp = 0
        for(let i = 0; i < col; i++){
            temp = temp + grid[0][i]
        }
        return temp
    }
    if (col === 1) {
        let temp = 0
        for(let i = 0; i < cow; i ++){
            temp = temp + grid[i][0]
        }
        return temp
    }
    const result = [...Array(cow)].map(() =>[...Array(col)])
    // console.log(result);
    result[0][0] = grid[0][0];
    for(let i = 1; i < grid.length; i++) {
        result[i][0] = grid[i][0] + result[i - 1][0]
    }
    for(let i = 1; i < grid[0].length; i++) {
        result[0][i] = grid[0][i] + result[0][i - 1];
    }
    for(let i = 1; i < grid[0].length; i++) {
        for(let j = 1; j < grid.length; j++) {
            // console.log(j, i);
            if (i === grid[0].length - 1 && j === grid.length - 1) {
                result[j][i] = 0
            } else {
                result[j][i] = grid[j][i] + Math.min(result[j - 1][i],result[j][i - 1]);
            }
        }
    }
    return Math.min(result[cow-1][col-2], result[cow - 2][col -1]) + grid[cow-1][col-1]
};
