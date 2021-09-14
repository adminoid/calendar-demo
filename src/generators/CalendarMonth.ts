type TBoundaries = {
  first: Date,
  last: Date
}

export interface ICalendarMonth {
  selectedMonth: Date,
  boundaries: TBoundaries
}

export class CalendarMonth implements ICalendarMonth {
  selectedMonth: Date
  boundaries: TBoundaries
  lastDayOfMonth: Date
  calendar: Date[][]

  constructor (year: number, month: number) {
    this.selectedMonth = new Date(year, month)
    this.lastDayOfMonth = new Date(
      this.selectedMonth.getFullYear(),
      this.selectedMonth.getMonth() + 1,
      0
    )
    this.boundaries = this.getCalendarBoundaries()
    this.calendar = this.getCalendarMap()
  }

  getCalendarMap (): Date[][] {
    const weeks = []
    let days = []
    let weekDay = 1
    for (
      const dayIterator = new Date(this.boundaries.first);
      dayIterator <= this.boundaries.last;
      dayIterator.setDate(dayIterator.getDate() + 1)
    ) {
      days.push(new Date(dayIterator))
      if (weekDay % 7 === 0) {
        weekDay = 1
        weeks.push(days)
        days = []
      } else {
        weekDay++
      }
    }
    return weeks
  }

  getCalendarBoundaries (): TBoundaries {
    const current = new Date(this.selectedMonth)
    const firstDayInCalendar = this.getFirstWeekDay(current)
    const lastDayInCalendar = this.getLastWeekDay(this.lastDayOfMonth)
    return {
      first: firstDayInCalendar,
      last: lastDayInCalendar
    }
  }

  /**
   * get the first day of the week, starts on Monday
   */
  getFirstWeekDay (date: Date): Date {
    const day = date.getDay() || 7
    const firstDay = new Date(date)
    if (day !== 1) firstDay.setHours(-24 * (day - 1))
    return firstDay
  }

  /**
   * get the last day of the week, starts on Monday
   */
  getLastWeekDay (date: Date): Date {
    const day = date.getDay() || 7
    const lastDay = new Date(date)
    if (day !== 1) lastDay.setHours(24 * (7 - day))
    return lastDay
  }
}
