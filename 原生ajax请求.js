/**
 * 尝试使用生ajax来请求数据
 * @author Lesty
 * @code-date 2015.10.20
 */

/**
 * [createXHR 创建XMLHttpRequest对象]
 * @return {Object} [XMLHttpRequest对象]
 */
function createXHR() {
	// 根据不同浏览器采用不同的方式创建XHR对象
	if(typeof XMLHttpRequest != "undefined") {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		return new XMLHttpRequest();
	} else if(typeof ActiveXObject != "undefined") {
		// code for IE6, IE5
		// 为createXHR这个函数自定义一个axVersion属性
		// 这样再次调用该函数时就不需要去确认版本了
		if(typeof arguments.callee.axVersion != "string") {
			// 版本数组
			var versions = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
			// 获取正确版本号
			for(var i = versions.length; i--;) {
				try {
					// 通过这个语句来判断是否能成功创建相应控件
					// 如果创建成功就跳出循环
					new ActiveXObject(versions[i]);
					// 为自定义属性赋值
					arguments.callee.axVersion = versions[i];
					break;
				} catch (ex) {
					// 如果创建失败就会捕获异常，继续循环
				}
			}
		}

		// 使用函数自定义属性创建对象
		return new ActiveXObject(arguments.callee.axVersion);
	} else {
		throw new Error("No XHR object available!没有可用的XHR对象！");
	}
}

/**
 * [getParamString 获取查询的字符串]
 * @param  {Object} data [发送的数据]
 * @return {String}      [查询字符串]
 */
function getParamString(data) {
	var paramStr = "";

	for(var d in data) {
		paramStr += (d + "=" + data[d] + "&");
	}

	// 如果最后一个字符是&，则去除掉
	if(paramStr[paramStr.length - 1] === "&") {
		return paramStr.substring(0, paramStr.length - 1);
	} else {
		return paramStr;
	}
}

/**
 * [getParamURL 获取查询url]
 * @param  {String} baseUrl [基础url]
 * @param  {Object} data    [发送的数据]
 * @return {String}         [查询URL]
 */
function getParamURL(baseUrl, data) {
	baseUrl += "?";

	return baseUrl + getParamString(data);
}

/**
 * [getAjax get请求]
 * @param  {String}   url      [请求的URL]
 * @param  {String}   data     [发送的数据]
 * @param  {Function} callback [回调函数]
 * @param  {Boolean}   async    [是否异步，true:异步，false:同步，缺省默认为异步]
 */
function getAjax(url, data, callback, async) {
	// 1.创建XHR对象
	var xhr = createXHR();

	// 2.捕获readyState改变事件
	xhr.onreadystatechange = function() {
		// 已接受到全部响应数据
		if(xhr.readyState == 4) {
			// 响应状态码成功或者资源没有被修改(304)
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				//请求发送成功，调用回调函数
				callback(xhr.responseText, xhr.status, xhr);
			} else {
				// 请求发送失败
				console.log("状态码：" + xhr.status + ";状态说明：" + xhr.statusText);
			}
		}
	};
	// 3.启动请求，需要将data解析成查询请求
	xhr.open("get", getParamURL(url, data), async === false ? false : true);
	// 4.设置Mime类型为json
	xhr.overrideMimeType("text/json");
	// 5.发送请求
	xhr.send(null);
}

/**
 * [postAjax post请求]
 * @param  {String}   url      [请求的URL]
 * @param  {String}   data     [发送的数据]
 * @param  {Function} callback [回调函数]
 * @param  {Boolean}   async    [是否异步，true:异步，false:同步，缺省默认为异步]
 */
function postAjax(url, data, callback, async) {
	// 1.创建XHR对象
	var xhr = createXHR();

	// 2.捕获readyState改变事件
	xhr.onreadystatechange = function() {
		// 已接受到全部响应数据
		if(xhr.readyState == 4) {
			// 响应状态码成功或者资源没有被修改(304)
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				//请求发送成功，调用回调函数
				callback(xhr.responseText, xhr.status, xhr);
			} else {
				// 请求发送失败
				console.log("状态码：" + xhr.status + ";状态说明：" + xhr.statusText);
			}
		}
	}

	// 3.启动请求，需要将data解析成查询请求
	xhr.open("post", url, async === false ? false : true);
	// 4.设置头部信息，模仿表单提交数据
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// 5.设置Mime类型为json
	xhr.overrideMimeType("text/json");
	// 6.发送请求
	xhr.send(getParamString(data));
}