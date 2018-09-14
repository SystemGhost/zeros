module.exports = function getZerosCount(number) {
	var sum = 0;
	var k = 1;
	var temp = 0;
	var dev;
	while(true)
	{
		dev = Math.pow(5, k);
		temp = number / dev;
		if(temp < 1) return sum;
		k++;
		sum+=Math.floor(temp);
	}
	return sum;
}
