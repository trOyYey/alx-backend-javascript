const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");
const sinon = require("sinon");
const utils = require("./utils.js");

describe("sendPaymentRequestToApi", function () {
  it("should call calculateNumber with SUM", function () {
    const spy = sinon.spy(console, "log");
    const stub = sinon.stub(utils, "calculateNumber").returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utils.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(console.log.calledWith("The total is: 10")).to.be.true;
    stub.restore();
    spy.restore();
  });
});

