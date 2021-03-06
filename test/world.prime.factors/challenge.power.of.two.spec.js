var request = require('request');
var http = require('http');
var chai = require('chai');
var expect = chai.expect;
var server = require('../../libs/server');

describe('Passing the Power of Two level:', function () {

    var testServer;

    beforeEach(function (done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function () {
        testServer.close();
    });

    it('returns the expected output', function (done) {
        request('http://localhost:7000/primeFactors?number=16', function (error, response, body) {
            expect(body).to.deep.equal(JSON.stringify({
                "number": 16,
                "decomposition": [2, 2, 2, 2]
            }));

            done();
        });
    });

    it('returns error when not number', function (done) {
        request('http://localhost:7000/primeFactors?number=batman', function (error, response, body) {
            expect(body).to.deep.equal(JSON.stringify({
                "number": "batman",
                "error": "not a number"
            }));

            done();
        });
    });

    it('returns error when to big number', function (done) {
        request('http://localhost:7000/primeFactors?number=1000001', function (error, response, body) {
            expect(body).to.deep.equal(JSON.stringify({
                "number": 1000001,
                "error": "too big number (>1e6)"
            }));

            done();
        });
    });

    it('returns multiple response', function (done) {
        request('http://localhost:7000/primeFactors?number=300&number=120&number=hello', function (error, response, body) {
            expect(body).to.deep.equal(JSON.stringify(
                [{
                    "number": 300,
                    "decomposition": [2, 2, 3, 5, 5]
                }, {
                    "number": 120,
                    "decomposition": [2, 2, 2, 3, 5]
                }, {
                    "number": "hello",
                    "error": "not a number"
                }]
            ));

            done();
        });
    });

});