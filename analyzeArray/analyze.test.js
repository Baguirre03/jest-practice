import { analyzeArray } from "./analyze";

test('array of one number', () => {
    const object = analyzeArray([1]);
    expect(object).toEqual({ average: 1, min: 1, max: 1, length: 1 })
})

test('array from example', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})


test('array of same number', () => {
    const object = analyzeArray([5, 5, 5]);
    expect(object).toEqual(
        {
            average: 5,
            min: 5,
            max: 5,
            length: 3
        }
    )
})

test('array of big numbers', () => {
    const object = analyzeArray([10, 23, 234, 5]);
    expect(object).toEqual(
        {
            average: 68,
            min: 5,
            max: 234,
            length: 4
        }
    )
})

test('array of including decimals', () => {
    const object = analyzeArray([10, 23, 4, 5, 2.3]);
    expect(object).toEqual(
        {
            average: 8.86,
            min: 2.3,
            max: 23,
            length: 5
        }
    )
})

test('array of nothing', () => {
    const object = analyzeArray([]);
    expect(object).toBe(false)
})