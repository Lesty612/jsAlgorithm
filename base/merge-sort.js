/**
 * [归并排序]
 * @author Lesty
 * @date 2021.1.25
 */
import {startSortTest, swap} from "./utils.js";

let compareCounter = 0;
let swapCounter = 0;

let newArr = [];
function MergeSort(arr) {
    console.log('原始数组: ', JSON.stringify(arr));
    console.time('time');

    // 明确长度
    newArr = new Array(arr.length);
    sort(arr, 0, arr.length - 1);

    console.log('比较次数: ', compareCounter);
    console.log('交换次数: ', swapCounter);
    console.log('最终数组: ', JSON.stringify(arr));
    console.timeEnd('time');
    console.log('--------------------------');

    return arr;
}

function sort(arr, start, end) {
    if(end <= start) {
        return;
    }

    const middle = Math.floor((end + start) / 2);
    sort(arr, start, middle);
    sort(arr, middle + 1, end);
    merge(arr, start, middle, end);
}

function merge(arr, start, middle, end) {
    let i = start;
    let j = middle + 1;

    /*
    * 根据start和end，局部替换本次要合并的arr部分
    * newArr设成全局变量，是为了节省空间开销(避免每次都创建一个新的数组)
    * */
    newArr.splice(start, end - start + 1, ...arr.slice(start, end + 1));

    for(let k = start; k <= end; k++) {
        compareCounter++;

        if(i > middle) {
            arr[k] = newArr[j++];
        } else if(j > end) {
            arr[k] = newArr[i++];
        } else if(newArr[i] <= newArr[j]) {
            arr[k] = newArr[i++];
        } else {
            arr[k] = newArr[j++];
        }
    }
}

// 启动测试
startSortTest(MergeSort);