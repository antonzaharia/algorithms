function oneEncryption(text) {
  let arr = text.split("");
  let first = [];
  let second = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      second.push(arr[i]);
    } else {
      first.push(arr[i]);
    }
  }
  return `${first.join("")}${second.join("")}`;
}

function encrypt(text, n) {
  let output = text;
  for (let i = 0; i < n; i++) {
    output = oneEncryption(output);
  }
  if (n === 0) {
    return text;
  } else {
    return output;
  }
}

function decrypt(encryptedText, n) {
  return encryptedText;
}

(module.exports = encrypt), decrypt;
