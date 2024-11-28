
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const utils = require("./utils.js");

describe("sendPaymentRequestToApi", function () {
  it("should call calculateNumber with SUM", function () {
    const spy = sinon.spy(utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    expect(utils.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(utils.calculateNumber.calledOnce).to.be.true;
    spy.restore();
  });
});

