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
function oneDecryption(text) {
  let first = text.split("").splice(0, text.split("").length / 2);
  let second = text.split("").splice(text.split("").length / 2);
  let output = [];
  for (let i = 0; i < second.length; i++) {
    output.push(second[i]);
    output.push(first[i]);
  }

  return output.join("");
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
  let output = encryptedText;
  for (let i = 0; i < n; i++) {
    output = oneDecryption(output);
  }
  if (n === 0) {
    return encryptedText;
  } else {
    return output;
  }
}

(module.exports = encrypt), decrypt;
