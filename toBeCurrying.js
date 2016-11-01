/**
 * 	@author Lesty
 * 	@codeDate 2016.10.10
 * 	@description  函数柯里化
 */

var toBeCurrying = function(fn) {
	var args = [];

	// 先把fn缓存起用于柯里化
	// 再通过function对fn进行柯里化包装后返回
	return function() {
		if(arguments.length === 0) {
			return fn.apply(this, args);
		} else { // 参数不为零，则缓存参数
			[].push.apply(args, arguments);
			return arguments.callee;
		}
	};
};

function cost() {
	var sum = 0;
	for(var i = 0, len = arguments.length; i < len; i++) {
		sum += arguments[i];
	}
	return sum;
};

var cost = toBeCurrying(cost);
cost(100);
cost(105);
cost(107);
cost();

/**
 * 	@author Lesty
 * 	@codeDate 2016.11.1
 * 	@description unCurrying
 */

/**
 * [uncurrying 将一个函数unCurrying]
 * @return 任意 [进行unCurrying的函数的原本返回值]
 */
Function.prototype.uncurrying = function () {
	// 缓存调用uncurrying的函数对象
	var self = this;

	return function	() {
		// 获取传进来的函数的首位
		// 即要被用来调用self函数的对象
		// 同时，使得arguments只剩下self函数所需要的参数
		var obj = Array.prototype.shift.call(arguments);

		return self.apply(obj, arguments);
	};
};

Function.prototype.uncurrying2 = function () {
	// 缓存调用uncurrying的函数对象
	var self = this;

	return function	() {
		// 首先调用apply,变成self.call(arguments);
		// arguments参数里包含调用self的对象以及self函数所需的参数
		return Function.prototype.call.apply(self, arguments);
	};
};

// uncurrying
// self的值就变成了Array.prototype.push
var push = Array.prototype.push.uncurrying();
var arr = [1, 2, 3];

// 传入参数为arguments: [arr, 1, 3]
// 其中obj为arr, arguments由于被shift后变成[1, 3],即Array.prototype.push函数原本需要的参数
// 这样，执行的结果就变成了self.apply(arr, [1, 2, 3]),即Array.prototype.push(arr, [1, 2, 3])
push(arr, 1, 3);

console.log(arr);