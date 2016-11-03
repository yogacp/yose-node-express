primeFactorsOf = function (number) {
	var factorPowers = [];
	var factors = primeFactorList(number);
	factorPowers = toFactorPowerList(factors);
	return factorPowers;
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
	var count = 1;
	for (var i = 1; i < factors.length; i++) {
		if (factors[i] == prevFactor) {
			count++;
		}
	}
	for (var i = 0; i < count; i++) {
		result.push(prevFactor);
	}
	return result;
}

module.exports = primeFactorsOf;