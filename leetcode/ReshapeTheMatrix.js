// Reshape the Matrix
// You're given a matrix represented by a two-dimensional array,
// and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix;
// Otherwise, output the original matrix.

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var curRows = nums.length;
    var curCols = nums[0].length;
    var result = [];
    var tempArr = [];

    // 判断是否可以重塑到r行c列的矩阵
    if(curRows * curCols !== r * c) {
        return nums;
    }

    // 合并原数组成一维数组，类似[1,2,3,4]
    tempArr = nums.reduce(function(result, item) {
        return result.concat(item);
    });

    // 以列数递增遍历一维数组，从而生成r行c列的矩阵
    for(var i = 0, iLen = tempArr.length; i < iLen; i += c) {
        result.push(tempArr.slice(i, i + c));
    }

    return result;
};