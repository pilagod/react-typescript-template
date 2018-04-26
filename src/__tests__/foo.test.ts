import { sum } from '../foo'

describe('sum', () => {
  it('should return 0 given no input numbers', () => {
    expect(sum()).toBe(0)
  })

  it('should return 1 given input 1', () => {
    expect(sum(1)).toBe(1)
  })

  it('should return 15 given input 1, 2, 3, 4, 5', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
  })
})
