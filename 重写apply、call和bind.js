/**
 * [call Function.prototype.call的polyfill]
 * @author Lesty
 * @code-date 2020.6.3
 */
function call(thisArg) {
    var fn = this;
    var args = [];
    var result;

    if(typeof fn !== 'function') {
        throw new TypeError('调用call方法的必须是函数');
    }

    thisArg = Object(thisArg) || Window;
    thisArg.fn = fn;
    if(arguments.length === 1) {
        result = thisArg.fn();
    } else {
        for(var i = 1, len = arguments.length; i < len; i++) {
            args.push('arguments[' + i + ']');
        }

        result = eval('thisArg.fn(' + args + ')');
    }

    delete thisArg.fn;

    return result;
}

/**
 * [apply Function.prototype.apply的polyfill]
 * @author Lesty
 * @code-date 2020.6.3
 */
function apply(thisArg, args) {
    var fn = this;
    var fnArgs = [];
    var result;

    if(typeof fn !== 'function') {
        throw new TypeError('调用apply方法的必须是函数');
    }

    // 上下文为不存在则设为全局
    thisArg = Object(thisArg) || Window;
    thisArg.fn = fn;

    if(!args || !args.length) {
        result = thisArg.fn();
    } else {
        // args数组转换成对应字符串args[i]格式的数组
        for(var i = 0, len = args.length; i < len; i++) {
            fnArgs.push('args[' + i + ']');
        }

        // 触发fnArgs.toString()
        // 调用格式为this.fn(args[0], args[1])
        result = eval('thisArg.fn(' + fnArgs + ')');
    }

    delete thisArg.fn;

    return result;
}

function bind(thisArg) {
    var fn = this;
    var fnArgs = [];
    var bindArguments = arguments;

    if(typeof fn !== 'function') {
        throw new TypeError('调用bind方法的必须是函数');
    }

    for(var i = 1, len = bindArguments.length; i < len; i++) {
        fnArgs.push('bindArguments[' + i + ']');
    }


    thisArg = Object(thisArg) || Window;

    return function () {
        var args = [].concat(fnArgs);
        var result;

        for(var i = 0, len = arguments.length; i < len; i++) {
            args.push('arguments[' + i + ']');
        }

        thisArg.fn = fn;
        console.log('thisArg.fn(' + args + ')');
        result = eval('thisArg.fn(' + args + ')');

        delete thisArg.fn;

        return result;
    }
}