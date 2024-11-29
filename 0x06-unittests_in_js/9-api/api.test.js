const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
    const url = 'http://localhost:7865';
    it('should return 200', function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return "Welcome to the payment system"', function (done) {
        request(url, function (error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('cart page', function () {
    const url = 'http://localhost:7865/cart/';
    it('should return 200', function (done) {
        request(`${url}77`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return Payment methods for cart 77', function (done) {
        request(`${url}77`, function (error, response, body) {
            expect(body).to.equal("Payment methods for cart 77");
            done();
        });
    });

    it('should return 404"', function (done) {
        request(`${url}water`, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
