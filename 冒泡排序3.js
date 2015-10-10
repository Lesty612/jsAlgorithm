var arr = [3, 1, 5, 7, 9, 2, 11];
var count = 0;
bubbleSort(arr);
console.log(count);
console.dir(arr);

function bubbleSort(arr) {
	var len = arr.length;
	// 用于标记已有序位的起点(该点后则不需要遍历)
	var flag = len;

	while(flag > 0) {
		len = flag;
		flag = 0;
		for(var i = 1; i < len; i++) {
			count++;
			if(arr[i - 1] > arr[i]) {
				swap(arr, i - 1, i);
				flag = i;
			}
		}
	}
}

function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}