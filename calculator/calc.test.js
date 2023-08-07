import { calculator } from "./calc"

test('make sure its an object', () => {
    expect(typeof calculator).toEqual('object')
})

test('add function', () => {
    expect(calculator.add(1, 2)).toEqual(3)
})

test('negative add function', () => {
    expect(calculator.add(-1, 1)).toEqual(0)
})

test('two negatives', () => {
    expect(calculator.add(-1, -1)).toEqual(-2)
})

test('subtract is a function', () => {
    expect(typeof calculator.subtract).toEqual('function')
})

test('basic subtract', () => {
    expect(calculator.subtract(5, 3)).toEqual(2)
})

test('negative subtract', () => {
    expect(calculator.subtract(3, -1)).toEqual(4)
})

test('divide is a function', () => {
    expect(typeof calculator.divide).toEqual('function')
})

test('basic divide', () => {
    expect(calculator.divide(10, 2)).toEqual(5)
})

test('divide by 0', () => {
    expect(calculator.divide(10, 0)).toEqual(Infinity)
})

test('multiply is a function', () => {
    expect(typeof calculator.multiply).toEqual('function')
})

test('basic multiply', () => {
    expect(calculator.multiply(5, 2)).toEqual(10)
})

test('negative multiply', () => {
    expect(calculator.multiply(-5, 2)).toEqual(-10)
})

test('0 multiply', () => {
    expect(calculator.multiply(5, 0)).toEqual(0)
})