// Distribute Candies
// Given an integer array with even length, where different numbers in this array represent different kinds of candies.
// Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister.
// Return the maximum number of kinds of candies the sister could gain.

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var typeMap = {};
    var kinds = 0;
    candies.forEach(function(item) {
        if(typeMap[item] !== true) {
            typeMap[item] = true;
            kinds++;
        }
    });

    return Math.min(kinds, candies.length / 2);
};

var distributeCandies2 = function(candies) {
    var typeMap = {};

    candies.forEach(function(item) {
        typeMap[item] = true;
    });

    return Math.min(Object.keys(typeMap).length, candies.length / 2);
};