// Number Complement
// Given a positive integer, output its complement number.
// The complement strategy is to flip the bits of its binary representation.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var result = [];
    // 这里采用push，然后最终reverse数组的方式
    // 也可以直接unshift进数组，但是性能好像比较慢(我自己稍微测试了2种写法)
    while(num > 0) {
        // 从右往左获取num每一位的取反值
        result.push(num & 1 === 1 ? 0 : 1);
        num >>= 1;
    }


    // 得出来的顺序是反的，所以reverse一次
    return parseInt(result.reverse().join(''), 2);
};

// 测试push+reverse与直接unshift的耗时
var test = function(num) {
    console.time('test1');
    var i = 0;
    var result = [];
    while(i < num) {
        result.unshift(i);
        i++;
    }

    console.log(result.join(''));
    console.timeEnd('test1');

    console.time('test2');
    var j = 0;
    var result2 = [];
    while(j < num) {
        result2.push(j);
        j++
    }

    console.log(result2.reverse().join(''));
    console.timeEnd('test2');
};