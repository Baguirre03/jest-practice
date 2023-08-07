import { capitlize } from "./capitalize";

test('first capitlized', () => {
    expect(capitlize('hello')).toBe('Hello')
})

test('one letter', () => {
    expect(capitlize('h')).toBe('H')
})

test('already uppercased', () => {
    expect(capitlize('HELLO')).toBe('HELLO')
})

