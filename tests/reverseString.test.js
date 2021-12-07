const { test, expect } = require('@jest/globals')
const reverseString = require('../code/reverseString')

test("reverses the string: 'testing'", () => {
    expect(reverseString('testing')).toBe('gnitset')
})

test("reverses the string: 'hello everyone, how are you all doing?'", () => {
    expect(reverseString('hello everyone, how are you all doing?')).toBe('?gniod lla uoy era woh ,enoyreve olleh')
})

test("tests for empty string", () => {
    expect(reverseString('')).toMatch('')
});