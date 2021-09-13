import { CalendarMonth } from '@/generators/CalendarMonth'

describe('generators/CalendarMonth.ts', () => {
  it('should get selected calendar month', () => {
    const CMInstance = new CalendarMonth(2021, 10)
    expect(CMInstance.boundaries).toMatchObject({
      first: new Date('2021-10-31T21:00:00.000Z'),
      last: new Date('2021-12-04T21:00:00.000Z')
    })
  })
})
