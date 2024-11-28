const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");
const sinon = require("sinon");


describe("sendPaymentRequestToApi", function () {
  let spy = null;

  this.beforeEach(function () {
    spy = sinon.spy(console, "log");
  });

  it("cals sendPaymentRequestToAPI with 100, and 20", function () {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith("The total is: 120")).to.be.true;
  });

  it("cals sendPaymentRequestToAPI with 20, and 20", function () {
    sendPaymentRequestToApi(20, 20);
    expect(console.log.calledWith("The total is: 40")).to.be.true;
  });

  this.afterEach(function () {
    spy.restore();
  });
});
