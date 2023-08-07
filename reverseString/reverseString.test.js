import { reverseString } from "./reverseString";

test('default case', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('palindrome', () => {
    expect(reverseString('hih')).toBe('hih')
})

test('has characters', () => {
    expect(reverseString('he.llo')).toBe('oll.eh')
})