primeFactorsOf = function (number) {
	var hasil = [];
	var factors = primeFactorList(number);
	var factorPowers = toFactorPowerList(factors);
	for (var i = 0; i < factorPowers.length; i++) {
		for (var j = 0; j < factorPowers[i][1]; j++) {
			hasil.push(factorPowers[i][0]);
		}
	}
	return hasil;
};

function primeFactorList(n) {
	var result = [];
	while (n != 1) {
		var factor = smallestFactor(n);
		result.push(factor);
		n /= factor;
	}
	return result;
}


function smallestFactor(n) {
	if (n % 2 == 0)
		return 2;
	var end = Math.floor(Math.sqrt(n));
	for (var i = 3; i <= end; i += 2) {
		if (n % i == 0)
			return i;
	}
	return n;
}

function toFactorPowerList(factors) {
	var result = [];
	var prevFactor = factors[0];
	var count = 0;
	for (var i = 0; i < factors.length; i++) {
		if (factors[i] == prevFactor) {
			count++;
		} else {
			result.push([prevFactor, count]);
			prevFactor = factors[i];
			count = 1;
		}
	}
	result.push([prevFactor, count]);
	return result;
}

module.exports = primeFactorsOf;