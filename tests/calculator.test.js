const { test, expect } = require('@jest/globals')
const [add, subtract, divide, multiply] = require('../code/calculator')


// ADDING

test('add two positive numbers', () => {
    expect(add(1,2)).toBe(3)
})

test('add two negative numbers', () => {
    expect(add(-5,-10)).toBe(-15)
})

test('add one negative and one positive number', () => {
    expect(add(-5,2)).toBe(-3)
})


// SUBTRACTING

test('subtracts two positive numbers', () => {
    expect(subtract(5,2)).toBe(3)
})

test('subtracts two negative numbers', () => {
    expect(subtract(-7,-2)).toBe(-5)
})

test('subtracts one positive and one negative number', () => {
    expect(subtract(5,-8)).toBe(13)
})

test('subtracts one negative and one positive number', () => {
    expect(subtract(-5, 6)).toBe(-11)
})


// DIVIDING

test('divides two numbers', () => {
    expect(divide(5,2)).toBeCloseTo(2.5)
})

test('divides two numbers', () => {
    expect(divide(3,2)).toBeCloseTo(1.5)
})

test('divides two numbers', () => {
    expect(divide(150,3)).toBe(50)
})


// MULTIPLYING

test('multiplies two numbers', () => {
    expect(multiply(2,2)).toBe(4)
})

test('multiplies two numbers', () => {
    expect(multiply(3,5)).toBe(15)
})

test('multiplies two numbers', () => {
    expect(multiply(1000,20)).toBe(20000)
})

test('multiplies two numbers', () => {
    expect(multiply(2,-500)).toBe(-1000)
})