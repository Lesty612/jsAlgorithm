var str = "123+100-54";
getResult(str);

function getResult(str) {
	var flagList = [],
		numList = [],
		sum = 0,
		start = 0,
		pre = 0,
		cur = 0,
		len = str.length;

	if(str[0] !== '-' && str[0] !== '+') {
		flagList.push('+');
	} else {
		flagList.push(str[0]);
		start = 1;
	}

	pre = start;

	for(var i = start; i < len; i++) {
		if(str[i] === '-' || str[i] === '+') {
			cur = i;
			flagList.push(str[i]);
			numList.push(str.slice(pre, cur));
			pre = cur + 1;
		}
	}

	numList.push(str.slice(pre, len));

	console.dir(numList);
	console.dir(flagList);
	for(var i = 0; i < flagList.length; i++) {
		sum += parseInt(flagList[i] === '+' ? numList[i] : -numList[i], 10);
	}

	return sum;
}