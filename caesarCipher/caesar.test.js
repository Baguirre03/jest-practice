import { caeserCypher } from "./caesar";

// test('shift one', () => {
//     expect(caeserCypher('a', 1)).toBe('b')
// })

// test('shift 3', () => {
//     expect(caeserCypher('a', 3)).toBe('d')
// })

// test('shift and keep case', () => {
//     expect(caeserCypher('A', 1)).toBe('B')
// })

// test('shift more and keep case', () => {
//     expect(caeserCypher('A', 3)).toBe('D')
// })

// test('z to start at a', () => {
//     expect(caeserCypher('z', 1)).toBe('a')
// })

// test('punctionation basic', () => {
//     expect(caeserCypher('!!', 2)).toBe('!!')
// })

// test('more punctionation', () => {
//     expect(caeserCypher('!@#$%^&*()_', 2)).toBe('!@#$%^&*()_')
// })

// test('doesnt shift', () => {
//     expect(caeserCypher('hi', 0)).toBe('hi')
// })

// test('complicated shift by 5', () => {
//     expect(caeserCypher('attack at dawn', 5)).toBe('fyyfhp fy ifbs')
// })

// test('complicated shift by 5 with punctionation', () => {
//     expect(caeserCypher('attaCK. at dawn!', 5)).toBe('fyyfHP. fy ifbs!')
// })

test('last supercomplicated cypher', () => {
    expect(caeserCypher('heLLo WoRLD!!, tHis is. suPPosed tO be hard123', 13)).toBe('urYYb JbEYQ!!, gUvf vf. fhCCbfrq gB or uneq123')
})