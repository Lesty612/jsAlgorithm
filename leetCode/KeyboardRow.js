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
        keyboardPatterns.forEach(function(pattern) {
            if(pattern.test(word)) {
                console.log('word', word, 'pattern:', pattern);
                resultWords.push(word);
            }
        });
    });

    return resultWords;
};