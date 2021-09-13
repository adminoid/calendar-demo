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

  constructor (year: number, month: number) {
    this.selectedMonth = new Date(year, month)
    this.boundaries = this.getCalendarBoundaries()
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

  getCalendarBoundaries (): TBoundaries {
    const current = new Date(this.selectedMonth)
    const firstDayInCalendar = this.getFirstWeekDay(current)
    const lastDayInMonth = new Date(
      this.selectedMonth.getFullYear(),
      this.selectedMonth.getMonth() + 1,
      0
    )
    const lastDayInCalendar = this.getLastWeekDay(lastDayInMonth)
    return {
      first: firstDayInCalendar,
      last: lastDayInCalendar
    }
  }
}
