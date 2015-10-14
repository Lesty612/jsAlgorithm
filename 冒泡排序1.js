/**
 * [冒泡排序1]
 * @author Lesty
 */
var arr = [3, 1, 5, 7, 9, 2, 11];
var count = 0;
bubbleSort(arr);
console.log(count);

function bubbleSort(arr) {
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		// 每次遍历，最大的数就交换到len - i的位置
		for(var j = 1; j < len - i; j++) {
			count++;
			if(arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j);
			}
		}
	}
}

function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}