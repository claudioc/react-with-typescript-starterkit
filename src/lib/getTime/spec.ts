import { getTime } from '.'

describe('The `getTime` helper', () => {
  it('should always add the AM/PM suffix', () => {
    const time = getTime()
    const actual = time.endsWith('AM') || time.endsWith('PM')
    const expected = true
    expect(actual).toBe(expected)
  })
})
