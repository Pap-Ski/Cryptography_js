export function ceasarFunc() {
  let encrypt = document.getElementById("bEncrypt");
  encrypt.addEventListener("click", function () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const plainText = document.getElementById("plainText").value.toUpperCase();
    let cipherText = "";

    for (let i = 0; i < plainText.length; i++) {
      // put non-alphabetic characters in the ciphertext
      if (!letters.includes(plainText[i])) {
        cipherText += plainText[i];
        continue;
      }
      for (let j = 0; j < letters.length; j++) {
        if (plainText[i] === letters[j])
          cipherText += letters[(j + 3) % letters.length];
      }
    }
    document.getElementById("cipherText").innerText = cipherText;
  });
}
