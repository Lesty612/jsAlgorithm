/**
 * [选择排序]
 * @author Lesty
 * @date 2021.1.7
 */
import {startSortTest, swap} from "./utils.js";

function selectionSort(arr) {
    console.log('原始数组: ', JSON.stringify(arr));

    let compareCounter = 0;
    let swapCounter = 0;
    // 剩一个的时候不需要再比较，所以i < len - 1
    for(let i = 0, len = arr.length; i < len - 1; i++) {
        let minIndex = i;

        // 注意这里是i+1，也就是拿后一个元素和当前元素比较
        for(let j = i + 1; j < len; j++) {
            compareCounter++;
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swapCounter++;
        swap(arr, i, minIndex);
    }

    console.log('比较次数: ', compareCounter);
    console.log('交换次数: ', swapCounter);
    console.log('最终数组: ', JSON.stringify(arr));
    console.log('--------------------------');

    return arr;
}

// 启动测试
startSortTest(selectionSort);