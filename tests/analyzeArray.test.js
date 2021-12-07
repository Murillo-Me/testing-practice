const { test, expect } = require('@jest/globals')
const analyzeArray = require('../code/analyzeArray')

test('returns correct properties from the array', () => {
    const testArray = [1,2,3]
    expect(analyzeArray(testArray)).toEqual({average: 2, min: 1, max: 3, length: 3})
})

test('returns correct properties from the array', () => {
    const testArray = [1,4,7,10]
    expect(analyzeArray(testArray)).toEqual({average: 5.5, min: 1, max: 10, length: 4})
})

test('returns correct properties from the array', () => {
    const testArray = [10,10,10,10,10,10]
    expect(analyzeArray(testArray)).toEqual({average: 10, min: 10, max: 10, length: 6})
})