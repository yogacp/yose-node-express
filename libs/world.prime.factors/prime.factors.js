var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function (request, response, next) {

    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(process(request.query.number)));
};

function process(number) {
    if (isNaN(number)) {
        if (number instanceof Array) {
            var response = [];
            for (var i = 0; i < number.length; i++) {
                if (isNaN(number[i])) {
                    response.push(makeResponseIsNotNumber(number[i]));
                } else {
                    response.push(makeResponseIsNumber(number[i]));
                }
            }
            return response;
        } else {
            return makeResponseIsNotNumber(number);
        }
    } else {
        if (number > 1e6) {
            return makeResponseIsToBig(number);
        } else {
            return makeResponseIsNumber(number);
        }
    }
}

function makeResponseIsNumber(number) {
    var number = parseInt(number);
    var decomposition = primeFactorsOf(number);
    return {
        number: number,
        decomposition: decomposition
    }
}

function makeResponseIsNotNumber(number) {
    return {
        number: number,
        error: "not a number"
    }
}

function makeResponseIsToBig(number) {
    var number = parseInt(number);
    return {
        number: number,
        error: "too big number (>1e6)"
    }
}

module.exports = primeFactors;