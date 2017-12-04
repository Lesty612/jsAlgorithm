/**
 * 	@author Lesty
 * 	@codeDate 2017.12.4
 * 	@description  模块依赖加载器
 */

var MyModules = (function() {
    var modules = {};

    // 根据依赖模块名定义新模块
    function define(moduleName, deps, fn) {
        var depModules = [];
        // 根据依赖模块名生成对应的依赖模块对象数组
        for(var i = 0, iLen = deps.length; i < iLen; i++) {
            depModules[i] = modules[deps[i]] || {};
        }

        // 添加新定义的模块
        return modules[moduleName] = fn.apply(fn, depModules);
    }

    function get(name) {
        return modules[name];
    }

    return {
        get: get,
        define: define
    };
})();

var foo = MyModules.define('foo', [], function() {
    function hello(name) {
        console.log('hello ' + name);
    }

    return {
        hello: hello
    };
});

var bar = MyModules.define('bar', ['foo'], function(foo) {
    function welcome(customer, host) {
        foo.hello(customer);
        console.log("welcome to " + host + "'s home!");
    }

    return {
        welcome: welcome
    };
});

foo.hello('Lesty');
bar.welcome('MiniLin', 'Lesty');