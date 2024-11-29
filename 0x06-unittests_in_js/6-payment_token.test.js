const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe.only("getPaymentTokenFromAPI", function () {
  it("should return a Promise", function (done) {
    getPaymentTokenFromAPI(true).then(function (result) {
      expect(result).to.deep.equal({
        data: "Successful response from the API",
      });
      done();
    });
  });
});
