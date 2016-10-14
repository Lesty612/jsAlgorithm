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