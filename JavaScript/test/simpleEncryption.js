const assert = require("assert");
const encrypt = require("../simpleEncryption");
const decrypt = require("../simpleEncryption");

describe("encrypt()", () => {
  it("encrypt()", () => {
    let test = encrypt("text");
    assert(test, "text");
  });
});
describe("decrypt()", () => {
  it("decrypt()", () => {
    let test = decrypt("text");
    assert(test, "text");
  });
});
