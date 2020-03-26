/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.94%)
 * Total Accepted:    261.9K
 * Total Submissions: 771.7K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    if (grid[0][0] === 1) return 0;
    if (row === 1 && col === 1) return 1;
    if (row === 1) {
        let tempArr = [];
        for(let i = 1; i < col; i++) {
            tempArr.push(grid[0][i])
        }
        if (tempArr.indexOf(1) !== -1) {
            return 0;
        } else {
            return 1
        }
    }
    if (col === 1) {
        let tempArr = [];
        for(let i = 1; i < row; i++) {
            tempArr.push(grid[i][0])
        }
        if (tempArr.indexOf(1) !== -1) {
            return 0;
        } else {
            return 1
        }
    }
    const result = [...Array(row)].map(() => [...Array(col)]);
    result[0][0] = 0;
    for(let i = 1; i < col; i++) {
        if (grid[0][i] === 1) {
            result[0][i] = null;
        } else if (result[0][i - 1] === null) {
            result[0][i] = null;
        } else {
            result[0][i] = 1
        }
    }
    for(let i = 1; i < row; i++) {
        if (grid[i][0] === 1) {
            result[i][0] = null;
        } else if (result[i - 1][0] === null) {
            result[i][0] = null;
        } else {
            result[i][0] = 1
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            // const leftCount = result[]
            if (grid[i][j] === 1) {
                result[i][j] = null;
            } else {
                const leftCount = result[i][j-1] === null ? 0 : result[i][j-1];
                const topCount = result[i-1][j] === null ? 0 : result[i-1][j];
                result[i][j] = leftCount + topCount;
            }
        }
    }
    return result[row - 1][col - 1]
};
