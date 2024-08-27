document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('output').textContent = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('output').textContent = decryptedText;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('input-text').value = ''; 
    document.getElementById('output').textContent = ''; 
});

function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}
