/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (30.59%)
 * Total Accepted:    287.9K
 * Total Submissions: 938.5K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const createArray = (x, y) => {
  const array = new Array();
  for (let k = 0; k < y; k++) {
    array[k] = new Array();

    for (let j = 0; j < x; j++) {
      array[k][j] = null;
    }
  }
  return array;
};
const convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) {
    return s;
  }
  const remain = (s.length) % (numRows + numRows - 2);
  const groupNum = (s.length - remain) / (numRows + numRows - 2);
  const groupX = numRows - 1;
  const x = (groupNum * (numRows - 1)) + (remain > numRows ? (remain - numRows + 1) : 1);
  const y = numRows;
  let count = 0;
  let temp = numRows - 2;
  const targetArr = createArray(x, y);
  for (let i = 0; i <= (x - 1); i++) {
    for (let j = 0; j <= (y - 1); j++) {
      if (i % groupX === 0 && s[count] !== undefined) {
        targetArr[j][i] = s[count];
        count++;
      }
      if (i % groupX !== 0 && j === temp) {
        targetArr[j][i] = s[count];
        count++;
        temp--;
      }
      if (i % groupX === 0 && temp === 0) {
        temp = numRows - 2;
      }
    }
  }
  let target = '';
  for (let k = 0; k <= (y - 1); k++) {
    for (let l = 0; l <= (x - 1); l++) {
      const string = targetArr[k][l];
      if (string !== null) {
        target += string;
      }
    }
  }
  return target;
};
