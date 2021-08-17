let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let plainText = "KEEP MOVING";
let cipherText = "";
let filteredPlainText = Array.from(plainText).filter((ch) => {
  return letters.includes(ch);
});
let pairedCipherText = [];
let pairedPlainText = [];
for (let i = 0, ch = ""; i < filteredPlainText.length; i++) {
  ch += filteredPlainText[i];
  if (i % 2 === 1) {
    pairedPlainText.push(ch);
    ch = "";
  }
}

let cipherEquationsCoefficients = { a: 7, b: 2, c: 2, d: 1 };
pairedPlainText.forEach((pair) => {
  let cipherOne,
    cipherTwo,
    cipherPair = "";
  cipherOne =
    (letters.indexOf(pair[0]) * cipherEquationsCoefficients.a +
      letters.indexOf(pair[1]) * cipherEquationsCoefficients.b) %
    26;
  cipherTwo =
    (letters.indexOf(pair[0]) * cipherEquationsCoefficients.c +
      letters.indexOf(pair[1]) * cipherEquationsCoefficients.d) %
    26;
  cipherPair += String(letters[cipherOne]) + String(letters[cipherTwo]);
  pairedCipherText.push(cipherPair);
});

for (let i = 0; i < pairedCipherText.join("").length; i++) {
  if (!letters.includes(plainText[i])) {
    cipherText += plainText[i];
  }

  cipherText += pairedCipherText.join("")[i];
}

console.log(cipherText);
