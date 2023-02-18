import { DateTime } from 'luxon'

const currentDate = new Date()
const targetDate = new Date('2023-08-15')

const daysLeft = DateTime.fromJSDate(targetDate).diff(
  DateTime.fromJSDate(currentDate),
  ['days'],
)

console.log(`${Math.round(daysLeft.days)} days left. 😎`)
