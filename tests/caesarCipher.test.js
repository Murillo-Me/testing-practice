const { test, expect } = require('@jest/globals')
const caesarCipher = require('../code/caesarCipher')

// website used to test agaisnt: https://cryptii.com/pipes/caesar-cipher

test("check agaisnt an online cipher generator", () => {
    const textToEncode = 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.'
    const cipherAnswer = 'Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.'
    const key = 7

    expect(caesarCipher(textToEncode, key)).toBe(cipherAnswer)
})

test("check agaisnt an online cipher generator", () => {
    const textToEncode = 'Hello World!'
    const cipherAnswer = 'Khoor Zruog!'
    const key = 3

    expect(caesarCipher(textToEncode, key)).toBe(cipherAnswer)
})

test("check agaisnt an online cipher generator", () => {
    const textToEncode = 'Method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.'
    const cipherAnswer = 'Gynbix ch qbcwb yuwb fynnyl ch nby jfuchnyrn cm lyjfuwyx vs u fynnyl migy zcryx hogvyl iz jimcncihm xiqh nby ufjbuvyn. Nby gynbix cm hugyx uznyl Dofcom Wuymul, qbi omyx cn ch bcm jlcpuny willymjihxyhwy.'
    const key = 20

    expect(caesarCipher(textToEncode, key)).toBe(cipherAnswer)
})

test("shouldn't allow key higher then 26", () => {
    const textToEncode = 'abc.'
    const key = 28

    expect(() => (caesarCipher(textToEncode, key))).toThrow()
})

test("shouldn't allow key lower then -26", () => {
    const textToEncode = 'abc.'
    const key = -30

    expect(() => (caesarCipher(textToEncode, key))).toThrow()
})