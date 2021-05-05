document.getElementById("bPlainText").onclick = function(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const plainText = document.getElementById("plainText").value.toUpperCase();
    let cipherText = "";

    for(let i = 0; i < plainText.length; i++){
        if(!(letters.includes(plainText[i]))){
            cipherText += plainText[i];
            continue;
        }
        for(let j = 0; j < letters.length; j++){
            if(plainText[i] === letters[j])
                cipherText += letters[(j+3) % letters.length];
        }
    }
    document.getElementById("cipherText").innerHTML = cipherText;
}