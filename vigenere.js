export function vigenereFunc() {
  let encrypt = document.getElementById("vigenereEncrypt");

  encrypt.addEventListener("click", function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cipherText = "";
    let plainText = document
      .getElementById("vigenerePlainText")
      .value.toUpperCase();
    let key = document.getElementById("key").value.toUpperCase();
    document.getElementById("vigenereCipherText").innerText = "";

    if (key === "") {
      document.querySelector(".error").innerText =
        "A key is required for this encrytion.👆🏽";
      setTimeout(() => (document.querySelector(".error").innerText = ""), 3000);
    } else if (!allAlpha(key)) {
      document.querySelector(".error").innerText =
        "Key must contain only alphabets.👆🏽";
      setTimeout(() => (document.querySelector(".error").innerText = ""), 3000);
    } else {
      for (let i = 0, j = 0; i < plainText.length; i++) {
        if (!letters.includes(plainText[i])) {
          cipherText += plainText[i];
          continue;
        }
        cipherText +=
          letters[
            (letters.indexOf(plainText[i]) + letters.indexOf(key[j])) % 26
          ];

        if (j === key.length - 1) j = -1;
        j++;
      }
      document.getElementById("vigenereCipherText").innerText = cipherText;
    }

    // check if string has only alphabets
    function allAlpha(str) {
      for (let ch of str) {
        if (letters.includes(ch)) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    }
  });
}
