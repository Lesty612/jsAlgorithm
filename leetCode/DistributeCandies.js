// Array Partition I
// Given an array of 2n integers, your task is to group these integers into n pairs of integer,
// say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var resultWords = [];
    // 键盘每行的正则
    var keyboardPatterns = [/^[qwertyuiop]*$/i, /^[asdfghjkl]*$/i, /^[zxcvbnm]*$/i];

    words.forEach(function(word) {
        for(var j = 0, jLen = keyboardPatterns.length; j < jLen; j++) {
            // 单词满足正则条件的就加入列表
            if(keyboardPatterns[j].test(word)) {
                resultWords.push(word);
                break;
            }
        }
    });

    return resultWords;
};

var findWords2 = function(words) {
    return words.filter(function(word) {
        // 利用正则描述全部情况
        return /^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/i.test(word);
    });
};