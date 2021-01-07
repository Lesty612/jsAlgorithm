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

var findComplement2 = function(num) {
    // 用于位移以配合num进行相应操作
    var mask = ~0;
    //  取反操作：有效值部分(000)与111异或则取反，填充部分(0000)与0000异或，则保留本身
    //  所以我们需要最终值类似000111这样的值来与num进行异或
    //  而通过11111进行左位移操作，则可生成111000，按位反后就变成000111
    //  ---------
    //  根据num二进制数值部分的个数，来修改mask
    //  0000101中101就是有效数值部分
    //  任何数 & 0都会是0，当mask为1111000时，101 & 000 = 0
    while(num & mask) {
        mask <<= 1;
    }

    return num ^ ~mask;
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