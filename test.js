/**
 * [最少需要多少辆车]
 * @param  {Array} classList [班级人数列表]
 * @param  {Number} m         [汽车最大装载人数]
 * @return {Number}           [汽车总数]
 */
function minNeedCar(classList, m) {
	// 车辆总数
	var sum = 0;
	// 剩余座位
	var leftSeat = m;
	// 班级总数
	var classCount = classList.length;

	for(var i = 0; i < classCount; i++) {
		leftSeat -= classList[i];
		if(leftSeat <= 0) {
			console.log(leftSeat);
			leftSeat = (leftSeat === 0 ? m : m - classList[i]);
			sum++;
		}
	}

	if(leftSeat != m) {
		sum++;
	}

	return sum;
}

// minNeedCar([2, 3, 2, 1], 3);