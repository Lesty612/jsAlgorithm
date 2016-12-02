/**
 * 	@author Lesty
 * 	@codeDate 2016.12.2
 * 	@description 函数节流
 * 	@scenes 多适用于window.onresize、mousemove或者拖拽这类频繁触发的事件
 */

var throttle = function(fn, interval) {
	// 是否第一次调用
	var isFirstTime = true;
	// 最后一次调用函数时间
	var lastTime = +new Date();
	// 重置间隔，当函数在该间隔时间内未触发，重置isFirstTime
	var resetTime = 3000;
	// 计时器
	var timer = null;

	// 计时器间隔，默认为500
	interval = interval || 500;

	// AOP，为fn增加后执行函数
	fn = setAfter(fn, function() {
		lastTime = +new Date();
	});

	function setAfter(fn, afterFn) {
		// 保存原函数的引用
		var _my = fn;
		return function() { // 代理函数
			// 先执行原函数并修正this
			var result = _my.apply(this, arguments);
			// 执行afterFn
			afterFn.apply(this, arguments);
			return result;
		};
	};

	return function() {
		var args = arguments;
		var _my = this;
		// 当前时间
		var curTime = +new Date();
		// 如果上一次执行函数时间与当前时间间隔超过resetTime
		// 重置isFirstTime(立即执行)
		if(curTime - lastTime > resetTime) {
			isFirstTime = true;
		}
		
		if(isFirstTime) { // 首次调用，直接执行
			fn.apply(_my, args);
			isFirstTime = false;
			return;
		}

		if(timer) { // 定时器还在，表明上次任务未执行完
			return;
		}

		timer = setTimeout(function() { // 延迟一段时间后执行
			// 清除定时器
			clearTimeout(timer);
			timer = null;
			fn.apply(_my, args);
		}, interval);
	};
};

window.onresize =  throttle(function() {
	console.log('curTime:', +new Date());
	console.log('clientWidth: ' + document.documentElement.clientWidth);
	console.log('clientHeight: ' + document.documentElement.clientHeight);
}, 500);