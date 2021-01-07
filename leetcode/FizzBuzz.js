// Fizz Buzz
// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = [];

    for(var i = 1; i <= n; i++) {
        // 最基本的方法
        // 使用if-else if结合%号进行运算
        // 把所有情况列出来
        if(i % 15 === 0) {
            result[i - 1] = 'FizzBuzz';
        } else if(i % 3 === 0) {
            result[i - 1] = 'Fizz';
        } else if(i % 5 === 0) {
            result[i - 1] = 'Buzz';
        } else {
            result[i - 1] = i + '';
        }
    }

    return result;
};

var fizzBuzz2 = function(n) {
    var result = [];

    for(var i = 1; i <= n; i++) {
        result[i - 1] = '';
        // 这里也是使用if-else if结合%号进行运算
        // 只是考虑到15对应的'FizzBuzz'可以拆分成'Fizz' + 'Buzz'
        // 就可以先判断是否被3整除，再判断是否被5整除
        if(i % 3 === 0) {
            result[i - 1] += 'Fizz';
        }
        if(i % 5 === 0) {
            result[i - 1] += 'Buzz';
        }

        if(result[i - 1] === '') {
            result[i - 1] = i + '';
        }
    }

    return result;
};

var fizzBuzz3 = function(n) {
    var result = [];
    var fizz = 0;
    var buzz = 0;

    for(var i = 1; i <= n; i++) {
        // 同第一种思路基本一致
        // 只是将%操作换成了直接判断
        fizz++;
        buzz++;
        if(fizz === 3 && buzz === 5) {
            result[i - 1] = 'FizzBuzz';
            fizz = 0;
            buzz = 0;
        } else if(fizz === 3) {
            result[i - 1] = 'Fizz';
            fizz = 0;
        } else if(buzz === 5) {
            result[i - 1] = 'Buzz';
            buzz = 0;
        } else {
            result[i - 1] = i + '';
        }
    }

    return result;
};