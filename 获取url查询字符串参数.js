/**
 * [获取url中的查询字符串的键值对]
 * @author Lesty
 * @code-date 2015.10.19
 */

function getQueryStringArgs() {
	// 去的查询字符串(不包含问号)
	var qString = location.search.length !== 0 ? location.search.substring(1) : '',
	// 查询项数组
	items = qString.length !== 0 ? qString.split("&") : [],
	// 保存一个键值对的数组
	keyValue = [],
	// 键
	key = '',
	// 值
	value = '',
	// 键值对
	args = {};

	for(var i = items.length; i--; ) {
		keyValue = items[i].split("=");
		console.dir(keyValue);
		// 解码
		key = decodeURIComponent(keyValue[0]);
		value = decodeURIComponent(keyValue[1]);

		if(key !== "") {
			args[key] = value;
		}
	}

	return args;
}