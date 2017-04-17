// Reverse Words in a String III
// Given a string, you need to reverse the order of characters in each word
// within a sentence while still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(function(item) {
        return item.split('').reverse().join('');
    }).join(' ');
};