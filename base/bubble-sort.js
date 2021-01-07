/**
 * [冒泡排序]
 * @author Lesty
 * @date 2021.1.7
 */
import {startSortTest, swap} from "./utils.js";

function bubbleSort(arr) {
    console.log('原始数组: ', JSON.stringify(arr));

    let compareCounter = 0;
    let swapCounter = 0;
    let isSorted = true;
    // 注意i > 0，最后一次不需要交换
    for(let i = arr.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            compareCounter++;
            if(arr[j] > arr[j + 1]) {
                swapCounter++;
                swap(arr, j, j + 1);

                isSorted = false;
            }
        }

        // 如果没有进行过任何一次交换，则说明本身就是是有序的，无需进行后续计算
        if(isSorted) {
            break;
        }
    }

    console.log('比较次数: ', compareCounter);
    console.log('交换次数: ', swapCounter);
    console.log('最终数组: ', JSON.stringify(arr));
    console.log('--------------------------');

    return arr;
}

// 启动测试
startSortTest(bubbleSort);