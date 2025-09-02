import { DateTime } from 'luxon'
import { Command } from 'commander'

type Options = { date: string; unit: string }
type TimeType =
  | 'milliseconds'
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'weeks'
  | 'months'
  | 'years'

const program = new Command()

program
  .command('countdown')
  .description('Get time left until a date from today')
  .option('-d, --date <date>')
  .option('-u, --unit <unit>')
  .action((options: Options) => {
    const { date, unit } = options

    const currentDate = new Date()
    const targetDate = date ? new Date(options.date) : new Date('2025-12-09')
    const outputUnit = unit ?? 'days'

    const daysLeft = DateTime.fromJSDate(targetDate).diff(
      DateTime.fromJSDate(currentDate),
      [outputUnit as TimeType],
    )

    function outputHelper(): number {
      switch (outputUnit) {
        case 'milliseconds':
          return daysLeft.milliseconds
        case 'seconds':
          return daysLeft.seconds
        case 'minutes':
          return daysLeft.minutes
        case 'hours':
          return daysLeft.hours
        case 'days':
          return daysLeft.days
        case 'weeks':
          return daysLeft.weeks
        case 'months':
          return daysLeft.months
        case 'years':
          return daysLeft.years
        default:
          throw new Error('Invalid duration type')
      }
    }

    console.log(`${Math.round(outputHelper())} ${outputUnit} left. 😎`)
  })

program.parse()
