/**
 * [quickSort 快速排序1]
 * @author Lesty
 * @code-date 2015.9.19
 */
var arr = [3, 1, 5, 7, 9, 2, 11];
quickSort(arr, 0, arr.length - 1);
console.dir(arr);
function quickSort(arr, start, end) {
	// 递归结束点
    if (start >= end) {
        return;
    }

    // 左边索引
    var leftIndex = start;
    // 右边索引
    var rightIndex = end;
    // 标志位
    var flag = arr[start];

    while(leftIndex != rightIndex) {
    	/**
    	 * 由于标志位在最左边，我们要从最右边开始找
    	 * 这样最终左右索引相遇处会小于等于标志位
    	 * 2者交换位置后不会出错
    	 */
    	// 从最右边开始，比标志位大的跳过，将会停在小于标志位的位置
    	while(arr[rightIndex] >= flag && leftIndex != rightIndex) {
    		rightIndex--;
    	}
    	// 从最左边开始，比标志位小的跳过，将会停在大于标志位的位置
    	while(arr[leftIndex] <= flag && leftIndex != rightIndex) {
    		leftIndex++;
    	}

    	// 交换2个位置，从而使右边比标志位大，左边比标志位小
    	swap(arr, leftIndex, rightIndex);
    }

    // 将标志位和索引最终相遇点交换
    swap(arr, start, leftIndex);

    // 左递归
    quickSort(arr, start, leftIndex - 1);
    // 右递归
    quickSort(arr, leftIndex + 1, end);
}

function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}