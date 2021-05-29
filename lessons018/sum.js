function arrSum(arr, sum = 0, index = 0) {
	if (arr[index]) {
		return arrSum(arr, sum + arr[index], ++index)
	} else {
		return sum
	}
}
console.log(arrSum([3,5,6,3,2,4,1]));
