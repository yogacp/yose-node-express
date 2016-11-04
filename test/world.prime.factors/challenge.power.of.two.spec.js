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

    it('returns error output', function (done) {
        request('http://localhost:7000/primeFactors?number=number', function (error, response, body) {
            expect(body).to.deep.equal(JSON.stringify({
                "number": "number",
                "decomposition": "not a number"
            }));

            done();
        });
    });

});