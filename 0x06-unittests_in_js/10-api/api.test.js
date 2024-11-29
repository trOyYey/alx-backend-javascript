const { expect } = require("chai");

const request = require("request");

describe("Index page", function () {
  const url = "http://localhost:7865";
  it("should return 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', function (done) {
    request(url, function (error, response, body) {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("cart page", function () {
  const url = "http://localhost:7865/cart/";
  it("should return 200", function (done) {
    request(`${url}77`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return Payment methods for cart 77", function (done) {
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

describe("login page", function () {
  const url = "http://localhost:7865/login";
  it("should return 200", function (done) {
    request.post(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return Welcome with name", function (done) {
    request.post(
      url,
      { json: { userName: "Ajwad" } },
      function (error, response, body) {
        expect(body).to.equal("Welcome Ajwad");
        done();
      }
    );
  });

  it("should return Welcome with out name", function (done) {
    request.post(url, function (error, response, body) {
      expect(body).to.equal("Welcome ");
      done();
    });
  });
});

describe("available_payments page", function () {
  const url = "http://localhost:7865/available_payments";
  it("should return 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return Payment methods", function (done) {
    request(url, function (error, response, body) {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});
