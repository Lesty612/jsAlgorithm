/**
 * [quickSort 快速排序2]
 * @author Lesty
 * @code-date 2015.9.22
 */
var arr = [3, 1, 5, 7, 9, 2, 11];
quickSort(arr, 0, arr.length - 1);
console.dir(arr);

function quickSort(arr, start, end) {
    if(start >= end) {
        return;
    }

    var mid = partition(arr, start, end);
    quickSort(arr, start, mid - 1);
    quickSort(arr, mid + 1, end);
}

/**
 * [partition 对分割的部分进行排序，返回新的分割值]
 * @param  {Array} arr   [需要排序的数组]
 * @param  {Number} start [开始位置]
 * @param  {Number} end   [结束位置]
 * @return {Number}       [新的分割值]
 */
function partition(arr, start, end) {
    // 后出发的索引
    var lessIndex = start - 1;
    // 先出发的索引
    var greaterIndex = start;
    // 标志位
    var flag = arr[start];
    var len = arr.length;

    while(greaterIndex < len) {
        // lessIndex总是指向比标志位小(或者相等)的值所在位置
        // 而它前面的都是比标识位大的值(因为被greaterIndex遍历过)
        // 一旦greaterIndex遇到小的值，就交换lessIndex + 1与greaterIndex的值
        // 这样就确保lessIndex之前一定都是比标志位小的值
        if(arr[greaterIndex] <= flag) {
            lessIndex++;
            swap(arr, lessIndex, greaterIndex);
        }

        greaterIndex++;
    }

    // 交换标志位和分割位
    swap(arr, lessIndex, start);

    // 返回分割位
    return lessIndex;
}

function swap(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}