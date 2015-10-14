/**
 * [冒泡排序2]
 * @author Lesty
 */
var arr = [3, 1, 5, 7, 9, 2, 11];
var count = 0;
bubbleSort(arr);
console.log(count);

function bubbleSort(arr) {
	var len = arr.length;
	// 用于标记是否这次遍历有交换，如果没有交换则说明排序完成
	var flag = true;

	while(flag) {
		flag = false;
		for(var i = 1; i < len; i++) {
			count++;
			if(arr[i - 1] > arr[i]) {
				swap(arr, i - 1, i);
				flag = true;
			}
		}

		// 每次遍历总量递减
		len--;
	}
}

function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}