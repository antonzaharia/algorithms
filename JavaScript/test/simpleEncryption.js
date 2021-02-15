const assert = require("assert");
const encrypt = require("../simpleEncryption");
const decrypt = require("../simpleEncryption");

describe("encrypt()", () => {
  it("should return text input", () => {
    let test = encrypt("This is a test!", 0);
    assert.strictEqual(test, "This is a test!");
  });
  it("should return text input encrypted once", () => {
    let test = encrypt("This is a test!", 1);
    assert.strictEqual(test, "hsi  etTi sats!");
  });
  it("should return text input encrypted twice", () => {
    let test = encrypt("This is a test!", 2);
    assert.strictEqual(test, "s eT ashi tist!");
  });
  it("should return text input encrypted three times", () => {
    let test = encrypt("This is a test!", 3);
    assert.strictEqual(test, " Tah itse sits!");
  });
});
describe("decrypt()", () => {
  it("should return text input", () => {
    let test = decrypt("This is a test!", 0);
    assert.strictEqual(test, "This is a test!");
  });
  it("should return decrypted test twice", () => {
    let test = decrypt("s eT ashi tist!", 2);
    assert.strictEqual(test, "This is a test!");
  });
});
