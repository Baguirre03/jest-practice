export function analyzeArray(array) {
    if (!array.length) {
        return false
    }
    array.sort((a, b) => a - b)
    let averageVar = averageOfArray(array)
    return { average: averageVar, min: array[0], max: array[array.length - 1], length: array.length }
}

function averageOfArray(array) {
    let total = array.reduce((a, b) => a + b, 0)
    return total / array.length
}