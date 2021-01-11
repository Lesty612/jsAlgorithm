/**
 * [插入排序，适用场景：部分有序数组]
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
            * 所以只要一个元素A大，就不需要比较元素A左侧其他元素了
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

// 减少交换次数
function insertionSort2(arr) {
    console.log('原始数组: ', JSON.stringify(arr));

    let compareCounter = 0;
    let swapCounter = 0;
    // 注意i = 1
    for(let i = 1, len = arr.length; i < len; i++) {
        let temp = arr[i];
        let j = i;
        for(j = i; j > 0; j--) {
            compareCounter++;
            /*
            * 因为左侧的数据都是比较过后有序了的
            * 所以只要一个元素A大，就不需要比较元素A左侧其他元素了
            * */
            if(temp >= arr[j - 1]) {
                break;
            }

            // 这里不做交换，只是把所有小与temp的值都往右移一位
            arr[j] = arr[j - 1];
        }

        // 将temp放置于空出来(实际上并没有空)的位置上
        arr[j] = temp;
    }

    console.log('比较次数: ', compareCounter);
    console.log('交换次数: ', swapCounter);
    console.log('最终数组: ', JSON.stringify(arr));
    console.log('--------------------------');

    return arr;
}

// 启动测试
startSortTest(insertionSort);
console.info('--- insertionSort2 ---');
startSortTest(insertionSort2);