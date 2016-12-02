/**
 * 	@author Lesty
 * 	@codeDate 2016.11.29
 * 	@description  jquery模拟demo
 */

var yQuery = function(selector, context) {
	return new yQuery.prototype.init();	
};

yQuery.prototype = {
	// 构造器
	init: function() {
		console.log('init');
		return this;
	},
	getName: function() {
		debugger;
		console.log(this.name);
		return this;
	},
	name: 'Lesty'
};

// 引用传递，用yQuery的原型对象覆盖init构造器的原型对象
yQuery.prototype.init.prototype = yQuery.prototype;