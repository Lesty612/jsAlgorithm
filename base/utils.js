/**
 * [工具方法]
 * @author Lesty
 * @date 2021.1.7
 */

/**
 * [启动排序测试]
 * @func Function 排序方法
 * */
function startSortTest(func) {
    func([5,4,3,2,1,0,-1,-2,-3]);
    func([-3,-2,-1,0,1,2,3,4,5]);
    func([27,999,1,871,72,-999,-20,-1,99,9,-10,0]);
    func([1]);
    func([1,1,1,1,1,1,1,1,1]);
}

/**
 * [根据提供的索引交换数组中两个元素位置]
 * @arr Array 数组
 * @indexA Number 索引
 * @indexB Number 索引
 * @return undefined
 * */
function swap(arr, indexA, indexB) {
    const temp = arr[indexA];

    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

export {
    startSortTest,
    swap
}