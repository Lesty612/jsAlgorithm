// Array Partition I
// Given an array of 2n integers, your task is to group these integers into n pairs of integer,
// say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sum = 0;

    // 假设数组为[1,3,2,4]
    // 1是最小的，所以必须牺牲一个值来和1搭配
    // 如果是min(1, 3), min(2, 4) => 1 + 2 => 3
    // 如果是min(1, 2), min(3, 4) => 1 + 3 => 4
    // 可以看出牺牲的值肯定是越小越好，才能保证剩余的数组搭配min值更大
    // 所以我们可以先对数组进行排序，对排序后的数组按顺序两两配对min(ai, bi)
    // 那么靠前的ai肯定是2个数值之中相对小的那个
    // 所以直接取排序后的数组奇数位进行累加
    
    // 先排序
    nums.sort(function(a, b) {
        return a - b;
    });

    // 对排序后的数组，取奇数位累加
    for(var i = 0, iLen = nums.length; i < iLen; i += 2) {
        sum += nums[i];
    }

    return sum;
};