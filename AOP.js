/**
 * 	@author Lesty
 * 	@codeDate 2016.11.17
 * 	@description  js实现面向切面编程(装饰者模式)
 */

// 先执行
Function.prototype.before = function(beforeFn) {
	// 保存原函数的引用
	var _my = this;
	return function() { // 代理函数
		// 先调用beforeFn并修正this
		beforeFn.apply(this, arguments);
		// 执行原函数
		return _my.apply(this, arguments);
	};
};

// 后执行
Function.prototype.after = function(afterFn) {
	// 保存原函数的引用
	var _my = this;
	return function() { // 代理函数
		// 先执行原函数并修正this
		var result = _my.apply(this, arguments);
		// 执行afterFn
		afterFn.apply(this, arguments);
		return result;
	};
};

// 原函数
var originalFunc = function() {
	console.log('2');
};

// 执行before时，_my指向原函数originalFunc(因为调用方式是originalFunc.before)
// 执行完before后，返回的是一整个代理函数A(这个函数A先执行函数beforeFn，再执行原函数originalFunc)
// 这时候执行after，_my指向的是代理函数A(因为调用方式是A.after)
// 执行完after后，返回的是新的代理函数B(这个函数B先执行函数A，再执行函数afterFn)
// 这时候originalFunc被重新赋值为新的代理函数B
originalFunc =  originalFunc.before(function() {
	console.log('1');
}).after(function() {
	console.log('3');
});

// 此时originalFunc就是代理函数B
// 先执行函数A，再执行afterFn函数
// 执行A时，A里先执行beforeFn，再执行原函数
// 然后执行afterFn
// 最终顺序为：beforeFn - 原函数originalFunc - afterFn
originalFunc();