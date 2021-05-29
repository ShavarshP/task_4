function arrfactorial(arr, sum = 1, index = 0) {
	if (arr[index]) {
		return arrfactorial(arr, sum * arr[index], ++index)
	} else {
		return sum
	}
}
console.log(arrfactorial([3,5,6,3,2,4,1]));
