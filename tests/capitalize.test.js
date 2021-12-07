const { test, expect } = require('@jest/globals')
const capitalize = require('../code/capitalize')

test("capitalizes first letter in 'testing'", () => {
    expect(capitalize('testing')).toMatch(/^[A-Z]/)
});

test("capitalizes first letter in 'hello world'", () => {
    expect(capitalize('hello world')).toMatch(/^[A-Z]/)
});

test("capitalizes first letter in 'try and beat me'", () => {
    expect(capitalize('try and beat me')).toMatch(/^[A-Z]/)
});

test("capitalizes first letter in 'you're not trying hard enough'", () => {
    expect(capitalize("you're not trying hard enough")).toMatch(/^[A-Z]/)
});

test("tests for empty string", () => {
    expect(capitalize('')).toMatch('')
});