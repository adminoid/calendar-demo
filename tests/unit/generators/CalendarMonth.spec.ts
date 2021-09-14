import { CalendarMonth } from '@/generators/CalendarMonth'

describe('generators/CalendarMonth.ts', () => {
  const CMInstance = new CalendarMonth(2021, 8)

  it('should get selected calendar month', () => {
    expect(CMInstance.boundaries).toMatchObject({
      first: new Date('2021-10-31T21:00:00.000Z'),
      last: new Date('2021-12-04T21:00:00.000Z')
    })
  })

  it('should get calendar map', () => {
    expect(CMInstance.calendar.length).toEqual(5)
    expect(CMInstance.calendar[0].length).toEqual(7)
  })
})
