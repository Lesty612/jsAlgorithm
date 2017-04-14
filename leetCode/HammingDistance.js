// 汉明距离
// The Hamming distance between two integers is the number of positions
// at which the corresponding bits are different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var maxBinary = '0';
    var minBinary = '0';
    if(x >= y) {
        maxBinary = x.toString(2);
        minBinary = y.toString(2);
    } else {
        maxBinary = y.toString(2);
        minBinary = x.toString(2);
    }


    var count = 0;
    var maxLen = maxBinary.length;
    var minLen = minBinary.length;

    for(var i = minLen - 1, j = 1; i >= 0; i--) {
        if(maxBinary[maxLen - j] !== minBinary[i]) {
            count++;
        }

        j++;
    }

    for(var i = maxLen - minLen - 1; i >= 0; i--) {
        if(maxBinary[i] === '1') {
            count++;
        }
    }

    return count;
};

var hammingDistance1 = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};

var hammingDistance2 = function(x, y) {
    var diff = x ^ y;
    var count = 0;

    while(diff > 0) {
        if(diff & 1 === 1) {
            count++;
        }

        diff >>= 1;
    }

    return count;
};