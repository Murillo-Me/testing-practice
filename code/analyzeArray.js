function analyzeArray(arr) {
    const sum = arr.reduce((total, num) => {
        return total + num
    })

    const numElements = arr.length

    return {average: sum/numElements,
            min: Math.min(...arr),
            max: Math.max(...arr),
            length: numElements}
}

module.exports = analyzeArray