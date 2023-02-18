# countdown

A CLI util to determine how many <units of time> are left until a certain date from the current date.

## Usage

1. Make sure you have node 18 or higher installed (see `.nvmrc`)
2. Clone this repo and run `npm install`
3. Run `npm start` to start the CLI

## Options

By default the CLI will show the number of days until 08-15-2023. You can change this by passing in a date (`-d` or `--date`) as an argument. The date should be in the format `YYYY-MM-DD` or `MM-DD-YYYY`. Dates in the past will return a negative number.

If you want to see the amount of time in a different unit than days, you can pass in a second argument (`-u` or `--unit`). The second argument should be one of the following:

- milliseconds
- seconds
- minutes
- hours
- days
- weeks
- months
- years

## Examples

1. Show the number of days until 02-23-2023

```bash
npx ts-node index.ts countdown -d 02-23-2023
```

2. Show the number of hours until 02-23-2023

```bash
npx ts-node index.ts countdown -d 02-23-2023 -u hours
```

## Contributing

New features or bugfixes are welcome. Please open an issue or PR. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.
