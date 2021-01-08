/**
 * [插入排序]
 * @author Lesty
 * @date 2021.1.8
 */
import {startSortTest, swap} from "./utils.js";

function insertionSort(arr) {
    console.log('原始数组: ', JSON.stringify(arr));

    let compareCounter = 0;
    let swapCounter = 0;
    // 注意i = 1
    for(let i = 1, len = arr.length; i < len; i++) {
        for(let j = i; j > 0; j--) {
            compareCounter++;
            /*
            * 因为左侧的数据都是比较过后有序了的
            * 所以只要比最近的一个元素大，就不需要比较左侧其他元素了
            * */
            if(arr[j] >= arr[j - 1]) {
                break;
            }

            swapCounter++;
            swap(arr, j, j - 1);
        }
    }

    console.log('比较次数: ', compareCounter);
    console.log('交换次数: ', swapCounter);
    console.log('最终数组: ', JSON.stringify(arr));
    console.log('--------------------------');

    return arr;
}

// 启动测试
startSortTest(insertionSort);