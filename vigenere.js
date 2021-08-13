// const plainText = "WE ARE DISCOVERED SAVE YOURSELF!";
// const key = "DECEPTIVE";

function vigenereFunc(plainText, key) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let cipherText = "";

  for (let i = 0, j = 0; i < plainText.length; i++) {
    if (!letters.includes(plainText[i])) {
      cipherText += plainText[i];
      continue;
    }
    cipherText +=
      letters[(letters.indexOf(plainText[i]) + letters.indexOf(key[j])) % 26];

    if (j === key.length - 1) j = -1;
    j++;
  }
  return cipherText;
}

console.log(vigenereFunc("YOU WON", "JAZZ"));
