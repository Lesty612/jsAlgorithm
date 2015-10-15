/**
 * [蘑菇街编程笔试题]
 * @param  {Array} pArray [小蘑的起床时间表]
 * @param  {Array} qArray [小菇的起床时间表]
 * @param  {Number} l      [最早起床时间]
 * @param  {Number} r      [最晚起床时间]
 * @return {Number}        [2者能够进行聊天的何时起床时间点总数]
 */
function suitTimeCount(pArray, qArray, l, r) {
    // 何时的起床时间点个数
    var timeCount = 0;
    var tempPItem = 0;
    var tempQItem = 0;

    var flag = false;

    var allpArray = [];
    var allqArray = [];

    pArray.forEach(function(e) {
        for (var len = e[1] - e[0]; len >= 0; len--) {
            allpArray.push(e[0] + len);
        }
    });

    qArray.forEach(function(e) {
        for (var len = e[1] - e[0]; len >= 0; len--) {
            allqArray.push(e[0] + len);
        }
    });

    for (var i = l; i <= r; i++) {
        for (var j = allpArray.length - 1; j >= 0; j--) {
            tempPItem = allpArray[j];
            for (var s = allqArray.length - 1; s >= 0; s--) {
                tempQItem = allqArray[s] + i;
                if (tempQItem === tempPItem) {
                    flag = true;
                    timeCount++;
                    break;
                }
            }

            if (flag === true) {
                flag = false;
                break;
            }
        }
    }

    return timeCount;
}

// suitTimeCount([[15, 17], [23, 26]], [[1, 4], [7, 11], [15, 17]], 0, 20);