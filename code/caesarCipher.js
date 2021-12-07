function caesarCipher(str, key) {

    if (key > 26) throw new Error("The key can't be higher than 26")
    if (key < -26) throw new Error("The key can't be lower than -26")

    let cipher = ''
    
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        let newCharCode = charCode + key

        if (str[i].match(/[a-z]/)) {
            if (newCharCode > 122) {
                newCharCode = newCharCode - 26
            }

            if (newCharCode < 97) {
                newCharCode = newCharCode + 26
            }
        } else if (str[i].match(/[A-Z]/)) {
            if (newCharCode < 65) {
                newCharCode = newCharCode + 26
            }
    
            if (newCharCode > 90) {
                newCharCode = newCharCode - 26
            }
        } else {
            newCharCode = charCode
        }

        const newChar = String.fromCharCode(newCharCode)
        cipher += newChar
    }

    return cipher
}

module.exports = caesarCipher