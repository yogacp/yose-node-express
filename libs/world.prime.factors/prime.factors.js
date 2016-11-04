var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function (request, response) {

    response.setHeader('Content-Type', 'application/json');
    if (isNaN(request.query['number'])) {
        response.send(JSON.stringify({
            number: request.query['number'],
            error: "not a number"
        }));
    } else {
        var number = parseInt(request.query['number']);
        var decomposition = primeFactorsOf(number);
        response.send(JSON.stringify({
            number: number,
            decomposition: decomposition
        }));
    }
};

module.exports = primeFactors;