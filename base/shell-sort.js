/**
 * [希尔排序]
 * @author Lesty
 * @date 2021.1.20
 */
import {startSortTest, swap} from "./utils.js";

function shellSort(arr) {
    console.log('原始数组: ', JSON.stringify(arr));

    const len = arr.length;
    let compareCounter = 0;
    let swapCounter = 0;

    /*
    * 希尔排序的增量序列的选择与证明是个数学难题
    * 我们使用的是len / 2来计算增量序列(1,2,4,8,....)
    * 算出来增量为n，则数组会被分为n组
    * */
    for(let gap = Math.floor(len / 2); gap >= 1; gap = Math.floor(gap / 2)) {
        for(let i = gap; i < len; i++) {
            const temp = arr[i];
            let j = i;
            for(; j >= gap; j -= gap) {
                compareCounter++;
                /*
                * 因为左侧的数据都是比较过后有序了的
                * 所以只要一个元素A大，就不需要比较元素A左侧其他元素了
                * */
                if(temp >= arr[j - gap]) {
                    break;
                }

                arr[j] = arr[j - gap];
            }

            arr[j] = temp;
        }
    }

    console.log('比较次数: ', compareCounter);
    console.log('交换次数: ', swapCounter);
    console.log('最终数组: ', JSON.stringify(arr));
    console.log('--------------------------');

    return arr;
}

// 启动测试
startSortTest(shellSort);